# Minimal Personal Portfolio — Human × Intelligence

A bespoke, Swiss-inspired editorial personal portfolio website engineered for **Saram Zafar** — Business Development Executive and BS Artificial Intelligence student at National Textile University, Faisalabad, combining academic intelligence exploration, disciplined public service in Pakistan's Motorway Police, and two years of front-line customer communication.

Built with **React 19**, **TypeScript**, **Vite**, and a modular **Vanilla CSS** design system.

---

## ✦ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Lint & Build for Production
```bash
npm run lint
npm run build
```

---

## ✦ Folder Structure

```text
saram_portfolio/
├── public/
│   ├── favicon/
│   │   └── favicon.svg          # Swiss coordinate SVG favicon
│   ├── images/                  # Public static images
│   ├── fonts/                   # Public static font files
│   ├── documents/               # Place resume.pdf here (public/documents/resume.pdf)
│   ├── favicon.svg              # Root favicon fallback
│   └── robots.txt               # Search engine crawler rules
│
├── src/
│   ├── assets/
│   │   ├── images/              # Bundled image assets
│   │   ├── icons/
│   │   │   └── Icons.tsx        # Custom SVG social icons (GitHub, LinkedIn)
│   │   ├── illustrations/
│   │   │   └── CoordinateGraphic.tsx # Custom 440×440 SVG coordinate diagram
│   │   └── fonts/               # Bundled font assets
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx       # Primary, secondary, and editorial button/link component
│   │   │   ├── Container.tsx    # Max-width responsive container wrapper
│   │   │   ├── SectionHeading.tsx # Standardized section tag, heading & metadata bar
│   │   │   ├── SocialLinks.tsx  # Verified & placeholder-aware social profile cards
│   │   │   ├── BackToTop.tsx    # Smooth scroll-to-top button
│   │   │   └── ConfigurationGuide.tsx # Dev-mode personalization checklist modal
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Fixed header with ScrollSpy & theme toggle
│   │   │   ├── MobileMenu.tsx   # Accessible mobile drawer navigation
│   │   │   ├── Footer.tsx       # Editorial footer with dynamic copyright
│   │   │   └── PageLayout.tsx   # Master layout shell wrapping header, main & footer
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Introduction headline, CTAs & coordinate graphic
│   │   │   ├── About.tsx        # Narrative bio & 3-pillar cards
│   │   │   ├── Experience.tsx   # Chronological experience timeline
│   │   │   ├── Education.tsx    # BS AI curriculum & academic foundation
│   │   │   ├── Skills.tsx       # 4-category typographic skill directory
│   │   │   ├── Projects.tsx     # AI & engineering project showcase
│   │   │   └── Contact.tsx      # Direct email copy, mailto & social channels
│   │   │
│   │   └── effects/
│   │       ├── Reveal.tsx       # IntersectionObserver scroll-reveal controller
│   │       └── CustomCursor.tsx # Subtle coordinate cursor dot for fine pointers
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
│   │   ├── projects.ts          # Project cards, problem statements & repo links
│   │   ├── socialLinks.ts       # LinkedIn & GitHub channel definitions
│   │   └── portfolioData.ts     # Central barrel aggregator exporting all data
│   │
│   ├── hooks/
│   │   ├── useScroll.ts         # Scroll threshold & active section ScrollSpy hook
│   │   └── useMediaQuery.ts     # Reactive CSS media query hook
│   │
│   ├── styles/
│   │   ├── globals.css          # Reset, base styles, buttons & master CSS imports
│   │   ├── variables.css        # Light (Warm Ivory) & Dark (Obsidian) CSS variables
│   │   ├── typography.css       # Editorial & monospace typographic hierarchy
│   │   ├── animations.css       # Keyframes, hero entrance & scroll-reveal transitions
│   │   └── responsive.css       # 12-column responsive breakpoints & @media print CV rules
│   │
│   ├── utils/
│   │   ├── constants.ts         # Storage keys, breakpoints & reveal selectors
│   │   └── helpers.ts           # Placeholder checks, clipboard copy & scroll helpers
│   │
│   ├── types/
│   │   ├── profile.ts           # Personal, education, skill & navigation interfaces
│   │   ├── project.ts           # ProjectItem & ProjectStatus types
│   │   ├── experience.ts        # ExperienceItem interface
│   │   └── index.ts             # Type barrel exports
│   │
│   ├── App.tsx                  # Route & page resolver
│   ├── index.css                # Stylesheet entry point
│   └── main.tsx                 # React 19 DOM mount
│
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ✦ How to Update Your Portfolio Content

All personal data lives in **`src/data/`** and is strictly typed via **`src/types/`**:

1. **Add or Edit a Project**: Open [`src/data/projects.ts`](src/data/projects.ts) and add a new `ProjectItem` object to `projectsData`. Set `isPlaceholder: false` once verified.
2. **Add or Edit a Skill**: Open [`src/data/skills.ts`](src/data/skills.ts) and append `{ name: 'Your Skill', isPlaceholder: false }` to the relevant category (`PRG`, `AIML`, `TOOL`, or `PROF`).
3. **Add or Edit Experience**: Open [`src/data/experience.ts`](src/data/experience.ts), update the `role`, `organization`, `period`, and `description`, and set `isPlaceholderDescription: false`.
4. **Add a Resume PDF or Image**: Place your PDF at `public/documents/resume.pdf` and set `resumeUrl: '/documents/resume.pdf'` in [`src/data/personalInfo.ts`](src/data/personalInfo.ts). Place static images in `public/images/` or bundled images in `src/assets/images/`.
