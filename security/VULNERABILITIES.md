# Discovered Security Findings & Remediation Log

This document records all findings identified during the security audit of `saram_portfolio`, ordered by severity (`CRITICAL`, `HIGH`, `MEDIUM`, `LOW`, `INFORMATIONAL`), along with affected files, line numbers, technical root cause, impact, reproduction steps, and verified fixes.

> **Note:** No `CRITICAL`, `HIGH`, or `MEDIUM` vulnerabilities were found in the codebase or dependency tree.

---

## SEC-01: Unvalidated URL Schemes in Navigation & External Link Sinks

- **Severity:** `LOW`
- **Category:** DOM-Based XSS / Open Redirect Defense-in-Depth (CWE-79 / CWE-601)
- **Affected Files & Line Numbers (Pre-Fix):**
  - `src/components/sections/Hero.tsx` (Lines 10–12: `window.open(personalInfo.contact.resumeUrl, '_blank', 'noopener,noreferrer')`)
  - `src/components/common/Button.tsx` (Lines 39–50: `<a href={href} target={target} rel={rel} ...>`)
  - `src/components/common/SocialLinks.tsx` (Lines 65–70: `<a href={item.url} ...>`)
  - `src/components/sections/Projects.tsx` (Lines 286–290, 303–307: `<a href={resolvedUrl} ...>` and `<a href={proj.demoUrl} ...>`)
  - `src/components/sections/Contact.tsx` (Lines 135–138: `<a href={`mailto:${personalInfo.contact.email}`} ...>`)
- **Technical Explanation:**
  While portfolio URLs are currently sourced from static TypeScript data modules (`src/data/`), `window.open()` in `Hero.tsx` and `href` props in `Button.tsx`, `SocialLinks.tsx`, `Projects.tsx`, and `Contact.tsx` accepted arbitrary strings without validating the URL protocol. Furthermore, `Button.tsx` did not automatically enforce `rel="noopener noreferrer"` when `target="_blank"` was specified without an explicit `rel` prop.
- **Potential Impact:**
  If data files are later populated from an external CMS, JSON payload, or misconfigured environment variable containing a `javascript:`, `data:`, `vbscript:`, or protocol-relative (`//evil.example.com`) URI, clicking the CV button (`window.open`) or anchor links could execute arbitrary JavaScript in the page origin or redirect users to an untrusted host.
- **Reproduction Steps:**
  1. Set `resumeUrl: 'javascript:alert(document.domain)'` in `src/data/personalInfo.ts`.
  2. Click the **CV / Resume** button in the Hero section, which invokes `window.open(personalInfo.contact.resumeUrl, ...)`.
- **Recommended Solution:**
  Implement centralized URL and `mailto:` sanitization helpers that parse candidate URLs with the WHATWG `URL` constructor, enforce a strict scheme allowlist (`https:`, `http:`, `mailto:`), permit only safe in-page hashes (`#...`) and root-relative paths (`/path` excluding `//` and `/\`), and automatically enforce `noopener noreferrer` on all `target="_blank"` links.
- **Actual Fix Implemented:**
  - Added `sanitizeUrl(url?: string): string` and `sanitizeMailto(email?: string): string` in `src/utils/helpers.ts` (Lines 16–52).
  - Applied `sanitizeUrl` in `Button.tsx` (Line 39), `SocialLinks.tsx` (Line 67), `Hero.tsx` (Lines 10–16, plus `newWindow.opener = null`), and `Projects.tsx` (Lines 287, 304).
  - Applied `sanitizeMailto` in `Contact.tsx` (Line 136).
  - Enforced automatic `rel={target === '_blank' ? rel || 'noopener noreferrer' : rel}` in `Button.tsx` (Line 40).
- **Verification Result:** **FIXED & VERIFIED** (`npm run lint` and `npm run build` succeed with 0 warnings/errors).

---

## SEC-02: Missing HTTP Security Headers & Content Security Policy (CSP) Configuration

- **Severity:** `LOW`
- **Category:** Security Misconfiguration / Missing Defense-in-Depth Headers (CWE-693 / CWE-1021)
- **Affected Files & Line Numbers (Pre-Fix):**
  - `index.html` (Lines 3–55 — missing referrer meta tag)
  - Repository root & `public/` (missing `vercel.json` and `public/_headers`)
- **Technical Explanation:**
  The repository did not include deployment header configuration files for modern static hosts (Vercel, Netlify, Cloudflare Pages) or a `<meta name="referrer">` fallback in `index.html`. Without explicit HTTP response headers, the deployed site lacks framing protection (`frame-ancestors` / `X-Frame-Options`), MIME-sniffing protection (`X-Content-Type-Options`), transport security (`Strict-Transport-Security`), browser feature restrictions (`Permissions-Policy`), and a `Content-Security-Policy` (CSP).
- **Potential Impact:**
  - **Clickjacking:** Any third-party site could embed the portfolio inside an `<iframe src="...">` and overlay transparent UI elements.
  - **Unrestricted Script Execution:** In the event of a future DOM XSS flaw, the browser would have no CSP restriction preventing inline script execution or exfiltration via `connect-src`.
  - **Referrer Leakage:** Full URLs (including query parameters) could be sent in the `Referer` header when navigating to external GitHub/LinkedIn links over HTTP/HTTPS.
- **Reproduction Steps:**
  1. Inspect `index.html` and the repository root for `vercel.json` or `public/_headers`.
  2. Observe that no `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Strict-Transport-Security`, `Referrer-Policy`, or `Permissions-Policy` headers were configured.
- **Recommended Solution:**
  Create platform-native header configurations (`vercel.json` and `public/_headers`) that enforce a strict CSP compatible with Vite's production output, React inline `style` attributes, and Google Fonts, alongside `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, and `Strict-Transport-Security`. Add `<meta name="referrer" content="strict-origin-when-cross-origin" />` to `index.html`.
- **Actual Fix Implemented:**
  - Created `public/_headers` (copied automatically to `dist/_headers` during `vite build`) and `vercel.json` with comprehensive security headers.
  - Added `<meta name="referrer" content="strict-origin-when-cross-origin" />` to `index.html` (Line 7).
- **Verification Result:** **FIXED & VERIFIED** (`dist/_headers` confirmed present in build output; `vercel.json` validated).

---

## SEC-03: Incomplete `.gitignore` Secret Exclusion Rules & Missing `.env.example`

- **Severity:** `LOW`
- **Category:** Sensitive Information Exposure Prevention (CWE-200 / CWE-540)
- **Affected Files & Line Numbers (Pre-Fix):**
  - `.gitignore` (Lines 10–14)
- **Technical Explanation:**
  The default Vite `.gitignore` only excluded `*.local` (Line 13), which ignores `.env.local` but **does not ignore** `.env`, `.env.development`, `.env.production`, or private certificate/key files (`*.pem`, `*.key`, `*.cert`, `*.p12`, `*.pfx`). Additionally, no `.env.example` existed to warn contributors about Vite's `VITE_` public exposure model.
- **Potential Impact:**
  A developer creating a standard `.env` or `.env.production` file locally could accidentally stage and push sensitive environment variables or keys to the public GitHub repository.
- **Reproduction Steps:**
  1. Create a file named `.env` or `server.pem` in the project root.
  2. Run `git status` — prior to the fix, Git tracked both files as untracked candidates for commit.
- **Recommended Solution:**
  Update `.gitignore` to ignore `.env`, `.env.*` (while allowing `!.env.example`), and private key/certificate extensions (`*.pem`, `*.key`, `*.cert`, `*.p12`, `*.pfx`). Provide a `.env.example` file documenting that `VITE_*` variables are bundled into public client code.
- **Actual Fix Implemented:**
  - Updated `.gitignore` (Lines 15–24) to ignore `.env`, `.env.*`, `!.env.example`, `*.pem`, `*.key`, `*.cert`, `*.p12`, `*.pfx`.
  - Created `.env.example` with explicit security guidelines.
- **Verification Result:** **FIXED & VERIFIED**.

---

## SEC-04: Unhandled `localStorage` Exceptions in Restricted Browser Contexts

- **Severity:** `LOW`
- **Category:** Client-Side Storage Resilience / Uncaught Exception (CWE-248 / CWE-755)
- **Affected Files & Line Numbers (Pre-Fix):**
  - `src/components/layout/Navbar.tsx` (Lines 14, 24)
- **Technical Explanation:**
  `Navbar.tsx` directly called `window.localStorage.getItem(THEME_STORAGE_KEY)` inside the `useState` initializer (Line 14) and `window.localStorage.setItem(THEME_STORAGE_KEY, theme)` inside `useEffect` (Line 24) without a `try/catch` block.
- **Potential Impact:**
  In browsers configured with strict privacy settings ("Block all cookies and site data"), certain mobile WebViews, or sandboxed contexts without `allow-same-origin`, accessing `window.localStorage` throws a synchronous `DOMException: SecurityError`. Because React's `useState` initializer runs during render, an uncaught exception crashes the entire application into a blank white screen (Denial of Service for privacy-hardened users).
- **Reproduction Steps:**
  1. In browser settings, block all site data/cookies or evaluate `Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Blocked', 'SecurityError'); } })`.
  2. Load the page — direct `window.localStorage.getItem` throws an uncaught `SecurityError` during component mount.
- **Recommended Solution:**
  Encapsulate all `localStorage` reads and writes in `try/catch` helper functions (`safeGetStorage` and `safeSetStorage`) and validate stored values against the strict allowlist `'light' | 'dark'`.
- **Actual Fix Implemented:**
  - Added `safeGetStorage` and `safeSetStorage` in `src/utils/helpers.ts` (Lines 54–76).
  - Updated `src/components/layout/Navbar.tsx` (Lines 13–24) to use `safeGetStorage` and `safeSetStorage` while retaining strict `'dark' | 'light'` allowlist validation.
- **Verification Result:** **FIXED & VERIFIED**.

---

## SEC-05: Production Query Parameter (`?guide=1`) Exposes Internal Owner Setup Guide

- **Severity:** `INFORMATIONAL`
- **Category:** Information Disclosure / Development UI Exposed in Production (CWE-489)
- **Affected Files & Line Numbers (Pre-Fix):**
  - `src/components/common/ConfigurationGuide.tsx` (Lines 10–13)
- **Technical Explanation:**
  `ConfigurationGuide.tsx` enabled the floating **Profile Setup Guide** button and modal whenever `import.meta.env.DEV` was true **or** when the URL contained `?guide=1` (`new URLSearchParams(window.location.search).get('guide') === '1'`).
- **Potential Impact:**
  Any visitor or automated scanner appending `?guide=1` to the production portfolio URL could open the internal "Owner Personalization Guide" modal, exposing internal file structure hints (`src/data/`) and placeholder verification status.
- **Reproduction Steps:**
  1. Build the production site (`npm run build`) and serve `dist/`.
  2. Navigate to `/?guide=1` — the floating "Profile Setup Guide" button appears in production.
- **Recommended Solution:**
  Restrict `isGuideEnabled` strictly to `import.meta.env.DEV` so Vite dead-code-eliminates the setup guide trigger in production builds.
- **Actual Fix Implemented:**
  - Updated `src/components/common/ConfigurationGuide.tsx` (Line 10) to `const isGuideEnabled = import.meta.env.DEV;`.
- **Verification Result:** **FIXED & VERIFIED**.

---

## SEC-06: Explicit Production Source Map & Dev Server Port Hardening in `vite.config.ts`

- **Severity:** `INFORMATIONAL`
- **Category:** Build & Configuration Hardening
- **Affected Files & Line Numbers (Pre-Fix):**
  - `vite.config.ts` (Lines 1–7)
- **Technical Explanation:**
  `vite.config.ts` relied on implicit defaults without explicitly locking `build.sourcemap: false` or `server.strictPort: true`.
- **Potential Impact:**
  Explicitly setting `build: { sourcemap: false }` guarantees that production builds never emit `.map` files exposing raw TypeScript sources in `dist/assets/`, even if build wrapper flags or plugin defaults change.
- **Recommended Solution:**
  Explicitly configure `build: { sourcemap: false }` and `server: { strictPort: true }` in `vite.config.ts`.
- **Actual Fix Implemented:**
  - Updated `vite.config.ts` (Lines 7–12) to explicitly set `build: { sourcemap: false }` and `server: { strictPort: true }`.
- **Verification Result:** **FIXED & VERIFIED** (`dist/assets/` contains zero `.map` files after `npm run build`).
