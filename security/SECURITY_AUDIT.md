# Security Audit Report — Saram Zafar Portfolio

**Audit Date:** November 14, 2026  
**Target Repository:** `saram_portfolio`  
**Architecture:** Frontend-Only Static Single-Page Application (SPA)  
**Tech Stack:** React `^19.3.1`, TypeScript `~7.0.2`, Vite `^8.3.4`, `lucide-react` `^1.59.0`, Vanilla CSS  

---

## 1. Executive Summary & Overall Security Posture

**Overall Security Posture:** **STRONG (Hardened)**

A comprehensive application security audit and secure code review were conducted across the `saram_portfolio` repository, covering static source code analysis, DOM sink inspection, Git commit history secret scanning, dependency vulnerability auditing (`npm audit`), lockfile integrity verification (`package-lock.json`), build artifact inspection, and deployment configuration review.

Because the application is a purely static client-side portfolio with **no backend database, no authentication/session subsystem, no server-side API endpoints, and no untrusted user-input forms**, its attack surface is inherently minimal. No `CRITICAL`, `HIGH`, or `MEDIUM` severity vulnerabilities were present in the codebase or dependency tree.

Six defense-in-depth hardening findings (`4 LOW`, `2 INFORMATIONAL`) were identified, remediated directly in the codebase, and verified via automated lint (`oxlint`), TypeScript typechecking (`tsc -b`), and production builds (`vite build`).

---

## 2. Summary Metrics

| Metric | Count |
| :--- | :--- |
| **Total Issues Found** | **6** |
| **Critical** | **0** |
| **High** | **0** |
| **Medium** | **0** |
| **Low** | **4** |
| **Informational** | **2** |
| **Total Issues Fixed** | **6 / 6 (100%)** |
| **Remaining Action Items** | **0 code issues** (Verify HTTP headers on chosen production host after deployment) |

---

## 3. Audit Scope & Assessment by Domain

### A. Cross-Site Scripting (XSS) & DOM Sink Analysis
- **Unsafe DOM APIs Checked:** `dangerouslySetInnerHTML`, `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write`, `eval()`, `new Function()`, `setTimeout(string)`, `setInterval(string)`, `srcdoc`.
- **Result:** **0 instances** of unsafe HTML/script injection sinks exist anywhere in `src/`. All content is rendered via React 19 JSX auto-escaping.
- **URL & Navigation Sinks:** Identified unvalidated URL interpolation in `window.open()` (`Hero.tsx`) and `<a href={...}>` components (`Button.tsx`, `SocialLinks.tsx`, `Projects.tsx`, `Contact.tsx`). Remediated by implementing strict protocol allowlist validation (`sanitizeUrl` and `sanitizeMailto` in `src/utils/helpers.ts`).

### B. Dependency & Supply-Chain Security
- **Audit Command:** `npm audit --json` across all 91 installed packages (7 production, 85 development/build).
- **Vulnerability Count:** **0 vulnerabilities** (`critical: 0, high: 0, moderate: 0, low: 0`).
- **Lockfile Integrity (`package-lock.json`):**
  - `lockfileVersion: 3`
  - **91 / 91** packages resolve exclusively to the official `https://registry.npmjs.org/` registry.
  - **100%** of resolved packages contain strong `sha512-...` Subresource Integrity (SRI) hashes.
  - **0** git/tarball dependencies or suspicious postinstall scripts (only standard optional macOS `fsevents`).

### C. Secrets & Environment Variable Exposure
- **Working Tree & Public Assets:** Scanned all source files (`src/**`), configuration files, and `public/**` for API keys, tokens, private keys, and credentials. **0 secrets found.**
- **Git Commit History:** Scanned all 15 commits (~8,510 lines of diffs via `git log --all -p`). **0 leaked secrets or `.env` files found in history.**
- **Repository Hygiene:** Hardened `.gitignore` to explicitly block `.env`, `.env.*` (except `!.env.example`), `*.pem`, `*.key`, `*.cert`, `*.p12`, and `*.pfx`, and added a documented `.env.example`.

### D. HTTP Security Headers & Content Security Policy (CSP)
- Added production hosting configurations in `vercel.json` (Vercel) and `public/_headers` (Netlify / Cloudflare Pages), plus `<meta name="referrer" content="strict-origin-when-cross-origin" />` in `index.html`.
- Enforced headers:
  - `Content-Security-Policy` (restricts `script-src 'self'`, `object-src 'none'`, `frame-ancestors 'none'`, `base-uri 'self'`, `form-action 'self'`, while permitting Google Fonts and React inline `style` attributes)
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` (disables camera, microphone, geolocation, payment, USB, sensors, and FLoC/Topics)
  - `Cross-Origin-Opener-Policy: same-origin` & `Cross-Origin-Resource-Policy: same-origin`

### E. CSRF, Authentication & Session Management
- **Not Applicable (By Design):** The portfolio has no backend server, no cookies, no login/authentication endpoints, and no state-changing HTTP requests. No artificial client-side CSRF tokens were added.

### F. Forms, Input Validation & Abuse Resistance
- **No Unprotected Contact Forms:** By deliberate architectural design (`src/components/sections/Contact.tsx`), the portfolio avoids unmonitored third-party form endpoints and instead provides a direct `mailto:` trigger and a one-click clipboard copy button (`navigator.clipboard.writeText`), eliminating form spam, bot floods, and server-side injection vectors.

### G. External Links, Assets & Third-Party Integrations
- **Reverse Tabnabbing Protection:** Every external `<a target="_blank">` link in `SocialLinks.tsx` and `Projects.tsx` includes `rel="noopener noreferrer"`. Additionally, `Button.tsx` now automatically enforces `rel="noopener noreferrer"` whenever `target="_blank"` is passed, and `Hero.tsx` explicitly nullifies `newWindow.opener = null` on `window.open()`.
- **Third-Party Resources:** Only Google Fonts (`https://fonts.googleapis.com` and `https://fonts.gstatic.com`) are loaded externally. No third-party tracking scripts, analytics beacons, or external CDNs execute JavaScript on the page.

### H. Client-Side Storage & Information Disclosure
- **Safe `localStorage` Handling:** Wrapped `localStorage` access in `try/catch` helpers (`safeGetStorage`, `safeSetStorage` in `src/utils/helpers.ts`) with strict allowlist validation (`'light' | 'dark'`) in `Navbar.tsx` so restricted browsing contexts (disabled cookies/storage or sandboxed frames) cannot trigger an uncaught `SecurityError`.
- **Dev-Only Setup Guide:** Restricted `ConfigurationGuide.tsx` strictly to `import.meta.env.DEV`, removing the `?guide=1` URL query parameter override so production visitors cannot inspect internal template configuration checklists.
- **Production Source Maps:** Explicitly disabled production source maps (`build: { sourcemap: false }` in `vite.config.ts`).
