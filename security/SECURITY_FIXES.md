# Implemented Security Fixes

This document details every code and configuration change implemented during the security audit of `saram_portfolio` and the engineering rationale behind each fix.

---

## 1. Centralized URL & `mailto:` Protocol Sanitization

- **Files Modified:**
  - `src/utils/helpers.ts`
  - `src/components/common/Button.tsx`
  - `src/components/common/SocialLinks.tsx`
  - `src/components/sections/Hero.tsx`
  - `src/components/sections/Projects.tsx`
  - `src/components/sections/Contact.tsx`
- **What Changed:**
  - Added `sanitizeUrl(url?: string): string` to `src/utils/helpers.ts` to validate URLs against an explicit protocol allowlist (`https:`, `http:`, `mailto:`), while allowing in-page hash anchors (`#...`) and root-relative paths (`/path` excluding protocol-relative `//` or `/\`). Any `javascript:`, `data:`, `vbscript:`, malformed, or unfilled placeholder URL is safely neutralized to `'#'`.
  - Added `sanitizeMailto(email?: string): string` to validate email addresses against `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/` before constructing `mailto:` links.
  - Updated `Button.tsx` to sanitize `href` and automatically apply `rel="noopener noreferrer"` whenever `target="_blank"` is set.
  - Updated `Hero.tsx` `handleResumeClick` to validate `personalInfo.contact.resumeUrl` with `sanitizeUrl`, open with `'noopener,noreferrer'`, and explicitly set `newWindow.opener = null`.
  - Updated `SocialLinks.tsx`, `Projects.tsx`, and `Contact.tsx` to pass all external and email URLs through `sanitizeUrl` / `sanitizeMailto`.
- **Reason Behind Fix:**
  Eliminates DOM-based XSS via dangerous URI schemes (`javascript:`, `data:`), blocks protocol-relative open redirects (`//attacker.com`), and prevents reverse tabnabbing across all current and future link components.

---

## 2. Resilient Client-Side `localStorage` Wrapper

- **Files Modified:**
  - `src/utils/helpers.ts`
  - `src/components/layout/Navbar.tsx`
- **What Changed:**
  - Added `safeGetStorage(key: string): string | null` and `safeSetStorage(key: string, value: string): void` wrapped in `try/catch` blocks inside `src/utils/helpers.ts`.
  - Replaced raw `window.localStorage.getItem` and `window.localStorage.setItem` calls in `Navbar.tsx` with `safeGetStorage` and `safeSetStorage`, preserving the strict `'dark' | 'light'` allowlist check.
- **Reason Behind Fix:**
  Prevents uncaught `DOMException: SecurityError` or `QuotaExceededError` crashes when visitors view the portfolio with browser storage disabled, in strict private browsing modes, or inside restricted WebViews.

---

## 3. Removal of Production Query Parameter Override (`?guide=1`)

- **Files Modified:**
  - `src/components/common/ConfigurationGuide.tsx`
- **What Changed:**
  - Changed `isGuideEnabled` from `import.meta.env.DEV || (typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('guide') === '1')` to strictly `import.meta.env.DEV`.
- **Reason Behind Fix:**
  Ensures the internal "Owner Personalization Guide" checklist modal is only accessible during local development (`npm run dev`) and cannot be triggered in production via URL query manipulation.

---

## 4. Production HTTP Security Headers & Meta Referrer Policy

- **Files Modified / Created:**
  - `public/_headers` (Created — Netlify / Cloudflare Pages)
  - `vercel.json` (Created — Vercel)
  - `index.html` (Modified — added `<meta name="referrer" content="strict-origin-when-cross-origin" />`)
- **What Changed:**
  - Configured `Content-Security-Policy`, `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, `Cross-Origin-Opener-Policy: same-origin`, and `Cross-Origin-Resource-Policy: same-origin`.
  - Added a browser-level `<meta name="referrer" content="strict-origin-when-cross-origin" />` fallback in `index.html` for static hosts (such as GitHub Pages) that do not support custom HTTP response headers.
- **Reason Behind Fix:**
  Provides defense-in-depth protection against clickjacking (`frame-ancestors 'none'`, `X-Frame-Options: DENY`), MIME sniffing, cross-origin referrer leakage, unauthorized browser API usage, and script injection without breaking Google Fonts or React inline styles.

---

## 5. Git Secret Exclusion & Environment Variable Template

- **Files Modified / Created:**
  - `.gitignore` (Modified)
  - `.env.example` (Created)
- **What Changed:**
  - Added `.env`, `.env.*`, `!.env.example`, `*.pem`, `*.key`, `*.cert`, `*.p12`, and `*.pfx` to `.gitignore`.
  - Created `.env.example` documenting Vite's client-side `VITE_` variable exposure rules.
- **Reason Behind Fix:**
  Prevents accidental commits of environment files or cryptographic keys that did not match the previous `*.local`-only ignore rule.

---

## 6. Vite Build & Dev Server Hardening

- **Files Modified:**
  - `vite.config.ts`
- **What Changed:**
  - Added `build: { sourcemap: false }` and `server: { strictPort: true }` to `vite.config.ts`.
- **Reason Behind Fix:**
  Guarantees production builds never emit `.map` files into `dist/` and prevents the development server from silently falling back to an unintended open port.
