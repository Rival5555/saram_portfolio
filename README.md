# Minimal Personal Portfolio — Human × Intelligence

A bespoke, Swiss-inspired editorial personal portfolio website engineered for **Saram Zafar** — Business Development Executive and BS Artificial Intelligence student at National Textile University, Faisalabad, combining academic intelligence exploration, disciplined public service in Pakistan's Motorway Police, and two years of front-line customer communication.

Built with **React 19**, **TypeScript**, **Vite**, and a modular **Vanilla CSS** design system.

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Lint, Test & Build for Production
```bash
npm run lint
npm test
npm run build
```

---

## Folder Structure

```text
saram_portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated lint, test, build & npm audit CI pipeline
├── public/
│   ├── images/
│   │   └── og-preview.png       # 1200×630 Swiss editorial Open Graph social preview card
│   ├── favicon.svg              # Swiss coordinate SVG favicon
│   ├── site.webmanifest         # Web app manifest
│   ├── robots.txt               # Search engine crawler directives
│   ├── sitemap.xml              # Route sitemap
│   ├── llms.txt                 # Structured Markdown summary for AI agents
│   ├── _headers                 # Netlify / Cloudflare Pages security & caching headers
│   └── _redirects               # SPA fallback routing for Netlify / Cloudflare Pages
│
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── Icons.tsx        # Custom SVG GitHub icon
│   │   └── illustrations/
│   │       └── CoordinateGraphic.tsx # Custom 440×440 SVG Swiss coordinate diagram
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx       # Primary, secondary, and editorial button/link component
│   │   │   ├── Container.tsx    # Max-width responsive container wrapper
│   │   │   ├── SectionHeading.tsx # Standardized editorial section tag & display heading
│   │   │   ├── SocialLinks.tsx  # Verified & placeholder-aware social profile rows
│   │   │   ├── BackToTop.tsx    # Smooth scroll-to-top button
│   │   │   └── ConfigurationGuide.tsx # Dev-only personalization checklist modal
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Fixed header with ScrollSpy, OS-aware theme toggle & drawer
│   │   │   ├── MobileMenu.tsx   # Accessible mobile drawer navigation
│   │   │   ├── Footer.tsx       # Editorial footer with dynamic copyright
│   │   │   └── PageLayout.tsx   # Master layout shell wrapping header, main & footer
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Introduction headline, CTAs & coordinate graphic
│   │   │   ├── About.tsx        # Narrative bio & 3-column hairline pillar grid
│   │   │   ├── Experience.tsx   # Chronological experience ledger
│   │   │   ├── Education.tsx    # BS AI curriculum & academic foundation
│   │   │   ├── Skills.tsx       # 4-column typographic capability directory
│   │   │   ├── Projects.tsx     # 12-column case-study ledger showcase
│   │   │   └── Contact.tsx      # Direct email copy, mailto & social channels
│   │   │
│   │   └── effects/
│   │       ├── Reveal.tsx       # IntersectionObserver scroll-reveal controller
│   │       └── CustomCursor.tsx # Zero-re-render rAF coordinate cursor dot
│   │
│   ├── pages/
│   │   ├── Home.tsx             # Primary single-page portfolio view
│   │   ├── About.tsx            # Dedicated About route view (/about)
│   │   ├── Experience.tsx       # Dedicated Experience route view (/experience)
│   │   ├── Projects.tsx         # Dedicated Projects route view (/projects)
│   │   └── NotFound.tsx         # Custom 404 page
│   │
│   ├── data/
│   │   ├── personalInfo.ts      # Name, title, bio, pillars, contact & resume URL
│   │   ├── navigation.ts        # Navigation anchor links
│   │   ├── experience.ts        # Business Development, Motorway Police & Call Center entries
│   │   ├── education.ts         # BS Artificial Intelligence degree & pillars
│   │   ├── skills.ts            # Programming, AI/ML, Tools & Operational skills
│   │   ├── projects.ts          # Project blueprints, problem statements & repo links
│   │   ├── socialLinks.ts       # LinkedIn & GitHub channel definitions
│   │   └── portfolioData.ts     # Central barrel aggregator exporting all data
│   │
│   ├── hooks/
│   │   ├── useScroll.ts         # rAF-throttled scroll threshold & ScrollSpy hook
│   │   └── useMediaQuery.ts     # Reactive CSS media query hook
│   │
│   ├── styles/
│   │   ├── globals.css          # Reset, base styles, buttons & stylesheet entry
│   │   ├── variables.css        # WCAG AA+ Light (Warm Ivory) & Dark (Obsidian) tokens
│   │   ├── typography.css       # Editorial & monospace typographic hierarchy
│   │   ├── animations.css       # Scroll-reveal transitions & reduced-motion rules
│   │   ├── components.css       # Semantic layout & component styles
│   │   └── responsive.css       # 12-column responsive breakpoints & @media print CV rules
│   │
│   ├── utils/
│   │   ├── constants.ts         # Storage keys, breakpoints & reveal selectors
│   │   └── helpers.ts           # URL/mailto sanitization, safe storage, theme & clipboard utils
│   │
│   ├── types/
│   │   ├── profile.ts           # Personal, education, skill & navigation interfaces
│   │   ├── project.ts           # ProjectItem & ProjectStatus types
│   │   ├── experience.ts        # ExperienceItem interface
│   │   └── index.ts             # Type barrel exports
│   │
│   ├── App.tsx                  # Lazy-loaded route resolver & per-route document metadata
│   ├── index.css                # Stylesheet entry point
│   └── main.tsx                 # Pre-mount theme init, non-blocking fonts & React 19 mount
│
├── tests/
│   └── helpers.test.ts          # Automated security, storage, data & config unit tests
├── security/                    # Security audit, vulnerability log, fixes & deployment guide
├── FUNCTIONALITY_TEST_REPORT.md # End-to-end QA & live browser verification report
├── .env.example                 # Environment variable security guidelines
├── vercel.json                  # Vercel SPA rewrites, CSP, HSTS & immutable asset caching
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## How to Update Your Portfolio Content

All personal data lives in **`src/data/`** and is strictly typed via **`src/types/`**:

1. **Add or Edit a Project**: Open [`src/data/projects.ts`](src/data/projects.ts) and update `projectsData`. Set `isPlaceholder: false` once verified.
2. **Add or Edit a Skill**: Open [`src/data/skills.ts`](src/data/skills.ts) and append `{ name: 'Your Skill', isPlaceholder: false }` to the relevant category (`PRG`, `AIML`, `TOOL`, or `PROF`).
3. **Add or Edit Experience**: Open [`src/data/experience.ts`](src/data/experience.ts), update the `role`, `organization`, `period`, and `description`, and set `isPlaceholderDescription: false`.
4. **Add a Resume PDF**: Place your PDF at `public/documents/resume.pdf` and set `resumeUrl: '/documents/resume.pdf'` in [`src/data/personalInfo.ts`](src/data/personalInfo.ts).
