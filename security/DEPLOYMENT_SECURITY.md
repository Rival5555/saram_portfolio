# Production Deployment Security Guide

This document provides the production deployment security checklist, HTTP response header specifications, HTTPS/TLS requirements, and platform-specific notes for deploying `saram_portfolio`.

---

## 1. Pre-Deployment Security Checklist

Before publishing a new release to production, verify the following:

- [ ] **Dependency Audit:** Run `npm audit` and confirm `0` vulnerabilities across production and build dependencies.
- [ ] **Static Analysis & Linting:** Run `npm run lint` (`oxlint`) and confirm `0 warnings` and `0 errors`.
- [ ] **Clean TypeScript & Production Build:** Run `npm run build` (`tsc -b && vite build`) and confirm zero `.map` files exist in `dist/assets/`.
- [ ] **No Secrets in Bundle:** Confirm no private keys, tokens, or `.env` files exist in `dist/` or `public/`.
- [ ] **Security Header Config Present:**
  - For **Vercel**: Confirm `vercel.json` is present in the repository root.
  - For **Netlify / Cloudflare Pages**: Confirm `public/_headers` is copied to `dist/_headers` during build.

---

## 2. Enforced HTTP Security Headers

Both `vercel.json` and `public/_headers` configure the following HTTP response headers on all routes (`/*`):

```http
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=()
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Resource-Policy: same-origin
```

### Technical Rationale for CSP Directives
- **`default-src 'self'`**: Restricts all fallback resource types to the site's own origin.
- **`script-src 'self'`**: Allows only bundled first-party JavaScript modules (`/assets/index-*.js`). Blocks all inline `<script>` execution (`'unsafe-inline'` is **not** allowed for scripts) and blocks `eval()` (`'unsafe-eval'` is **not** allowed). Note: `<script type="application/ld+json">` in `index.html` is non-executable structured data and is permitted by browsers under `script-src 'self'`.
- **`style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`**: Permits bundled CSS, Google Fonts stylesheets, and React component `style={{ ... }}` attributes used throughout the layout.
- **`font-src 'self' https://fonts.gstatic.com data:`**: Permits Google Fonts (`Inter`, `Newsreader`, `JetBrains Mono`) font files.
- **`object-src 'none'` & `base-uri 'self'` & `form-action 'self'`**: Prevents plugin injection (`<object>`, `<embed>`) and `<base>` tag hijacking.
- **`frame-ancestors 'none'`**: Prevents any external domain from framing the site (clickjacking protection), reinforced by `X-Frame-Options: DENY` for legacy user agents.

---

## 3. HTTPS & HSTS Configuration

- **Enforce HTTPS Redirects:** Ensure your hosting provider redirects all `http://` requests to `https://` with a `301` or `308` status code (enabled by default on Vercel, Netlify, Cloudflare Pages, and GitHub Pages when "Enforce HTTPS" is checked).
- **HSTS (`Strict-Transport-Security`):** Configured with `max-age=63072000; includeSubDomains; preload` (2 years). Browsers only honor the `Strict-Transport-Security` header when received over a valid TLS/HTTPS connection.

---

## 4. Environment Variable Governance

1. **Client-Side Visibility:** Vite exposes any environment variable prefixed with `VITE_` directly into the compiled JavaScript bundle (`import.meta.env.VITE_*`). Treat all `VITE_*` variables as **public**.
2. **Never Store Secrets in Frontend Env Vars:** Never place private API keys, SMTP credentials, or personal access tokens in `.env` or hosting provider build variables prefixed with `VITE_`.
3. **Git Hygiene:** Keep `.env`, `.env.local`, and `.env.production` excluded via `.gitignore`. Only commit placeholder documentation in `.env.example`.

---

## 5. Hosting-Specific Deployment Notes

### Option A: Vercel
- Automatically reads `vercel.json` at the repository root and applies all response headers to every route.
- Build Command: `npm run build` | Output Directory: `dist`

### Option B: Netlify / Cloudflare Pages
- Automatically reads `dist/_headers` (generated from `public/_headers` during `npm run build`) and applies all response headers.
- Build Command: `npm run build` | Publish Directory: `dist`

### Option C: GitHub Pages
- GitHub Pages serves static files over Fastly CDN with HTTPS and automatic `<meta name="referrer" content="strict-origin-when-cross-origin" />` support from `index.html`, but does **not** parse custom `_headers` or `vercel.json` files for custom HTTP headers (`X-Frame-Options`, `frame-ancestors`).
- If strict HTTP response headers (`CSP`, `HSTS`, `X-Frame-Options`) are required on a custom domain hosted on GitHub Pages, proxy the domain through **Cloudflare** and enable a Cloudflare Response Header Transform Rule matching the headers in Section 2.
