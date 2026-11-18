# Functionality & QA Audit Report — Saram Zafar Portfolio

**Date:** November 18, 2026  
**Target Application:** Saram Zafar Personal Portfolio (`saram_portfolio`)  
**Tech Stack:** React `^19.3.1`, TypeScript `~7.0.2`, Vite `^8.3.4`, `lucide-react` `^1.59.0`, Vanilla CSS  
**Test Environment:** Production Build (`npm run build` -> `vite preview` on `http://localhost:4173/`) tested in headless/automated Chromium via Chrome DevTools Protocol (`1280×800` desktop & `375×812` mobile viewports)

---

## 1. Executive Summary

A full end-to-end functionality, usability, routing, accessibility, and responsive layout audit was performed across all 10 functional areas of the portfolio. Every interactive element, navigation path, button, external link, theme toggle, print stylesheet, keyboard shortcut, and route was inspected in source code and executed against the compiled production build in a live Chromium browser instance.

### Summary of Results
- **Confirmed Functional / UX Issues Identified & Fixed:** `5`
- **Browser Console Errors / Warnings:** `0` (`<no console messages found>`)
- **Failed Network / Asset Requests:** `0` (`8 / 8` requests returned `HTTP 200 OK`)
- **Broken Images / Missing SVGs:** `0` (`35` inline SVGs rendered cleanly; `0` broken `<img>` tags)
- **Linter (`npm run lint`):** `0 warnings, 0 errors` (`oxlint` across 45 files)
- **Production Build (`npm run build`):** `PASS` (`tsc -b && vite build`)

---

## 2. Test Results by Functional Area (10-Point Checklist)

### 1. Navigation Links & Mobile Menu
- **Tested Elements:**
  - Brand Logo (`SZ Saram Zafar` -> `href="/"`)
  - Desktop Navigation (`About`, `Experience`, `Education`, `Skills`, `Projects`, `Contact`)
  - Desktop CTA (`Connect` -> `#contact`)
  - Theme Toggle Button (`Light` <-> `Dark` mode, `localStorage` persistence under `portfolio-theme`, dynamic `<meta name="theme-color">` update between `#F5F3ED` and `#121412`)
  - Mobile Hamburger Trigger (`aria-expanded`, `aria-controls="mobile-navigation"`, `Open Menu` / `Close Menu`)
  - Mobile Drawer Links (`#about`, `#experience`, `#education`, `#skills`, `#projects`, `#contact`, and `Get in touch` CTA)
- **Pre-Fix Issues Found:**
  1. **Cross-Route & 404 Navigation Trap (`HIGH`):** All Navbar and Mobile Menu links used bare hash anchors (`#about`, `#contact`, etc.) and the Brand Logo used `href="#"`. When visiting standalone routes (`/about`, `/experience`, `/projects`) or landing on the 404 page (`/non-existent`), clicking the Brand Logo or any section link not mounted on that subpage appended `#...` to the current pathname without navigating back to `/` or scrolling to the target section.
  2. **Mobile Menu Dismissal & ARIA (`LOW`):** The mobile menu trigger lacked `aria-controls="mobile-navigation"`, and clicking outside the `<header>` or clicking the Brand Logo did not dismiss an open mobile drawer.
- **Fixes Implemented:**
  - Updated `src/components/layout/Navbar.tsx` and `src/components/layout/MobileMenu.tsx` to resolve section links to `/#section` when off the home route and dispatch SPA route updates (`popstate`) so clicking any navbar link or Brand Logo from `/about`, `/experience`, `/projects`, or a 404 route transitions cleanly to `/` and scrolls to the target section.
  - Added `aria-controls="mobile-navigation"` to the mobile menu button and added outside-click (`mousedown` outside `headerRef`) and Brand Logo click dismissal.
- **Verification Status:** **PASS** (Verified in Chromium at `1280×800` and `375×812`).

---

### 2. All Homepage Sections & Section Scrolling
- **Tested Elements:**
  - `#hero` (`aria-label="Introduction"`, headline `"Grounded in service. Curious about intelligence."`)
  - `#about` (`aria-label="About perspective"`, headline `"A different perspective."`, 3 pillar cards `// 01`, `// 02`, `// 03`)
  - `#experience` (`aria-label="Professional Experience"`, headline `"Professional experience."`, 3 chronological entries `01`, `02`, `03`)
  - `#education` (`aria-label="Education & Academic Path"`, headline `"Education & curriculum."`, BS Artificial Intelligence at National Textile University, Faisalabad `2023 — 2028`)
  - `#skills` (`aria-label="Skills and Competencies"`, headline `"Skills & capabilities."`, 4 categories `[AI_ML]`, `[COMM]`, `[OPS]`, `[TOOLS]`)
  - `#projects` (`aria-label="Selected Projects"`, headline `"Selected work & initiatives."`, 3 blueprint cards `PRJ_01`, `PRJ_02`, `PRJ_03`)
  - `#contact` (`aria-label="Contact and Inquiries"`, headline `"Good work starts with a conversation."`)
  - Scroll-triggered `IntersectionObserver` animations (`Reveal.tsx`) and active section ScrollSpy (`useScroll.ts`).
- **Verification Status:** **PASS** (All 7 sections mount in DOM, `scroll-padding-top: calc(var(--nav-height) + 1.5rem)` prevents fixed header overlap, and ScrollSpy highlights active links accurately).

---

### 3. Buttons & Call-to-Action Links
- **Tested Elements:**
  - Hero Primary CTA: `Explore my work` (`href="#projects"`)
  - Hero Secondary CTA: `Get in touch` (`href="#contact"`)
  - Hero Secondary Button: `CV / Resume` (`onClick={handleResumeClick}`)
  - Hero Editorial Link: `Read perspective` (`href="#about"`)
  - Navbar Editorial Link: `Connect` (`href="#contact"`)
  - Mobile Menu Primary CTA: `Get in touch` (`href="#contact"`)
  - Footer Button: `Top` (`onClick={scrollToTop}`)
  - 404 Page Primary CTA: `Return to Home` (`href="/"`, `onClick={handleReturnHome}`)
- **Verification Status:** **PASS** (Every button and CTA was clicked programmatically in Chromium and verified).

---

### 4. Email & Social Media Links
- **Tested Elements:**
  - Direct Electronic Mail card (`src/components/sections/Contact.tsx`)
  - LinkedIn Profile card (`src/components/common/SocialLinks.tsx`)
  - GitHub Profile card (`src/components/common/SocialLinks.tsx` -> `https://github.com/Rival5555`)
- **Pre-Fix Issues Found:**
  - **Broken Active Buttons on Unfilled Placeholder Email (`MEDIUM`):** Because `personalInfo.contact.email` is currently set to the placeholder `"[EMAIL]@example.com"`, `sanitizeMailto()` returned `'#contact'` and the `Contact` section still rendered active **Send Mail** and **Copy** buttons. Clicking **Send Mail** failed to open an email client (jumping to `#contact` instead), and clicking **Copy** copied the literal placeholder string `"[EMAIL]@example.com"` into the user's clipboard.
- **Fixes Implemented:**
  - Updated `src/components/sections/Contact.tsx` to check `const emailPending = isUnfilled(personalInfo.contact.email)`. When `emailPending` is `true`, the card now renders a dashed placeholder border and an `Email Pending` badge (matching the `URL Pending` badge on LinkedIn in `SocialLinks.tsx`) and guards `handleCopyEmail`. When a verified email address is configured in `src/data/personalInfo.ts`, the **Copy** and **Send Mail** (`mailto:`) buttons automatically activate.
  - Verified that the GitHub card renders `<a href="https://github.com/Rival5555" target="_blank" rel="noopener noreferrer">`.
- **Verification Status:** **PASS**.

---

### 5. CV Download / Print Functionality
- **Tested Elements:**
  - `CV / Resume` button in `src/components/sections/Hero.tsx` (`aria-label="Download or print CV"`)
  - Print stylesheet `@media print` in `src/styles/responsive.css`
- **Pre-Fix Issues Found:**
  - **Unreadable Print Output in Dark Mode (`MEDIUM`):** When `personalInfo.contact.resumeUrl` is `undefined`, clicking `CV / Resume` invokes `window.print()` to generate an A4 Swiss-style CV. In `@media print`, `body` and card backgrounds were forced to white/light ivory (`#FFFFFF` / `#FAF8F3`), but `[data-theme="dark"]` CSS variables (`--text-primary: #EAE6DF`, `--bg-card: #191C19`) were not reset. Printing while Dark Mode was active resulted in near-invisible light cream text on white backgrounds and dark boxes on Education/Contact cards.
- **Fixes Implemented:**
  - Added an explicit `:root, [data-theme="dark"]` token override block inside `@media print` in `src/styles/responsive.css` so `window.print()` always renders high-contrast dark ink (`#171916`) on white/ivory paper regardless of the active screen theme.
- **Verification Status:** **PASS** (`window.print()` invocation and `@media print` token overrides verified).

---

### 6. Project Cards & External Links
- **Tested Elements:**
  - `PRJ_01` (`Planned`), `PRJ_02` (`In Progress`), `PRJ_03` (`Research`) in `src/components/sections/Projects.tsx`
  - Repository fallback links (`GitHub Profile (Repo Pending)` -> `https://github.com/Rival5555`)
- **Verification Status:** **PASS** (All 3 cards render structured Problem Statement, Proposed Architecture / Approach, technology tags, status badges, and external links with `href="https://github.com/Rival5555"`, `target="_blank"`, and `rel="noopener noreferrer"`).

---

### 7. Contact Form
- **Inspection Result:**
  - Intentionally **not implemented** by design. As stated in `src/components/sections/Contact.tsx` (`"No automated marketing forms or unmonitored inboxes. Direct human dialogue only."`), the portfolio uses direct electronic mail and social channels rather than an unmonitored form. Confirmed `0` `<form>`, `<input>`, or `<textarea>` elements exist in the DOM.
- **Verification Status:** **N/A (By Design)**.

---

### 8. Responsive Navigation & Mobile Interactions
- **Tested Viewports:**
  - Desktop (`1280×800`) and Mobile (`375×812` / `< 860px` breakpoint)
- **Tested Behaviors:**
  - Below `860px`, `.desktop-nav-group` is hidden (`display: none`) and `.mobile-menu-trigger-group` is displayed (`display: flex`).
  - Clicking the hamburger button opens `#mobile-navigation` (`aria-expanded="true"`).
  - Clicking any mobile navigation link scrolls to the section and automatically closes `#mobile-navigation`.
  - Pressing `Escape` closes `#mobile-navigation`.
  - Clicking/tapping outside `<header>` (`#main-content`) closes `#mobile-navigation`.
  - Resizing viewport to `>= 860px` automatically closes `#mobile-navigation`.
  - Mobile theme toggle switches between Light and Dark modes cleanly.
- **Verification Status:** **PASS**.

---

### 9. Footer Links & Controls
- **Tested Elements:**
  - Identity block (`H × I Saram Zafar`, location `Pakistan`)
  - Dynamic copyright year (`© 2026 Saram Zafar · All rights reserved.`)
  - `Top` button (`src/components/common/BackToTop.tsx`, `aria-label="Scroll back to top of page"`)
- **Verification Status:** **PASS** (Scrolled window to `scrollY = 500px`, clicked `Top`, and confirmed smooth scroll back to top).

---

### 10. Page Routing & 404 Behavior
- **Tested Routes:**
  - `/` and `/index.html` -> Renders `<Home />` (all 7 sections)
  - `/about` -> Renders `<About />` (`About`, `Education`, `Contact`)
  - `/experience` -> Renders `<Experience />` (`Experience`, `Skills`, `Contact`)
  - `/projects` -> Renders `<Projects />` (`Projects`, `Contact`)
  - `/non-existent-coordinate-404` -> Renders `<NotFound />` (`ERROR // 404 — Coordinate not found.`)
- **Pre-Fix Issues Found:**
  - `src/App.tsx` read `window.location.pathname` only once on initial mount without listening to `popstate` events, and static hosting configs (`vercel.json`, `public/_redirects`) lacked SPA rewrite rules (`/* -> /index.html`), which would cause direct requests to `/about`, `/experience`, `/projects`, or custom 404 paths to return a raw server 404 in production.
- **Fixes Implemented:**
  - Updated `src/App.tsx` to subscribe to `popstate` events, update `currentPath` reactively, and smoothly scroll to `#hash` targets or the top of the document on route changes.
  - Updated `src/pages/NotFound.tsx` so clicking `Return to Home` triggers smooth client-side navigation back to `/`.
  - Added SPA rewrite rules to `vercel.json` (`"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`) and created `public/_redirects` (`/* /index.html 200`).
- **Verification Status:** **PASS**.

---

## 3. Keyboard Navigation & Accessibility Audit

- **Skip Link:** `.skip-to-content` (`href="#main-content"`) is the first focusable element in the tab order, reveals itself on `:focus` (`top: 0.75rem`), and targets `<main id="main-content">`.
- **Focus Ring Visibility:** Global `:focus-visible` rule (`outline: 2px solid var(--accent-green); outline-offset: 3px;`) provides clear keyboard focus indication across all 21 interactive elements on the homepage.
- **Semantic Landmarks:** `<header>`, `<nav aria-label="Primary Navigation">`, `<main id="main-content">`, 7 `<section aria-label="...">` landmarks, and `<footer aria-label="Site Footer">`.
- **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` disables smooth scroll and reveal transitions, and `CustomCursor` automatically disables itself on coarse pointers (`touch`) and when `prefers-reduced-motion: reduce` is enabled.

---

## 4. Remaining Owner Content Placeholders (Non-Bugs)

The following items are intentional content placeholders awaiting owner personalization in `src/data/` and are gracefully handled in the UI with explicit pending badges:
1. `src/data/personalInfo.ts`: `contact.email` (`[EMAIL]@example.com` -> displays `Email Pending` badge), `contact.linkedin` (`https://linkedin.com/in/[LINKEDIN-USERNAME]` -> displays `URL Pending` badge), and `contact.resumeUrl` (`undefined` -> falls back to `window.print()` Swiss CV generator).
2. `src/data/experience.ts`: Organization names/dates for Business Development Executive and Call Center Representative roles, and exact designation for Pakistan Motorway Police.
3. `src/data/projects.ts` & `src/data/skills.ts`: Coursework project titles/repositories (currently falling back cleanly to `https://github.com/Rival5555`) and placeholder framework tags.
