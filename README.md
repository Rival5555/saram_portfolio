# Minimal Personal Portfolio — Human × Intelligence

A bespoke, Swiss-inspired editorial personal portfolio website engineered for an Artificial Intelligence student combining academic intelligence exploration, disciplined public service in Pakistan's Motorway Police, and two years of front-line customer communication.

Built with **React 19**, **TypeScript**, **Vite**, and **Vanilla CSS** with architectural design tokens.

---

## ✦ Design Philosophy: Human × Intelligence

- **Palette**: Warm ivory (`#F5F3ED`), near-black (`#171916`), muted gray (`#77786F`), deep forest green (`#294C3B`), and hairline warm gray borders (`#DCD9D0`).
- **Typography**: Inter (Swiss modernist grotesque sans-serif), Newsreader (restrained editorial serif for selected headings), and JetBrains Mono (precision coordinates, timelines, metadata).
- **Aesthetic Principles**: Asymmetric Swiss grid, generous whitespace, thin dividers, pure SVG coordinate graphics, and zero decorative clutter (no neon, no generic robot illustrations, no arbitrary skill bars, no fake testimonials).

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
The site will run locally at `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory, ready to deploy to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

---

## ✦ Personalization Guide: How to Fill In Your Information

All portfolio text, experiences, education, skills, and projects are centralized in a single file:
**[`src/data/portfolioData.ts`](src/data/portfolioData.ts)**

Open this file in your editor and replace the bracketed placeholders with your actual details:

| Placeholder | Description | Where it Appears |
| :--- | :--- | :--- |
| `[FULL NAME]` | Your official name | Header, Hero, Footer, Page Meta |
| `[PROFESSIONAL TITLE]` | e.g. *AI Student & Public Service Officer* | Meta description, profiles |
| `[UNIVERSITY NAME]` | Degree-granting institution in Pakistan | Education section |
| `[CURRENT SEMESTER / GRADUATION YEAR]` | e.g. *5th Semester / Expected 2027* | Education status pill |
| `[CURRENT MOTORWAY POLICE JOB TITLE]` | Your verified NHMP designation | Experience timeline entry 01 |
| `[CALL CENTER COMPANY]` | Company where you completed 2 years | Experience timeline entry 02 |
| `[AI PROJECTS]` | Titles, problem statements, and repos | Selected work directory |
| `[TECHNICAL SKILLS]` | Verified Python, C++, ML libraries | Typographic skill categories |
| `[EMAIL]` | Your primary email address | Direct contact card & mailto link |
| `[LINKEDIN URL]` | Your active LinkedIn profile URL | Contact channels |
| `[GITHUB URL]` | Your active GitHub profile URL | Contact channels & project links |

### Project Integrity & Honest Verification
The portfolio was created following strict professional standards:
- **No Fictional Achievements**: Skills and projects only display verified competencies or clear, honest placeholder indicators until confirmed.
- **No Arbitrary Skill Bars**: Competencies are arranged in clean typographic directories rather than arbitrary percentages.
- **Working Communication**: No non-functional form mockups; visitors connect directly via your verified email, LinkedIn, or GitHub.

---

## ✦ Website Sections

1. **Navigation Bar**: Monogram `H × I`, full name, smooth section anchors, and real-time availability indicator. Includes an accessible mobile drawer menu.
2. **Hero Screen**: Editorial typography with the headline *"Grounded in service. Curious about intelligence."*, dual CTAs, location label, and bespoke SVG coordinate graphic representing the 3-axis intersection.
3. **About Section ("A different perspective")**: Narrative explaining the intersection of academic AI exploration, motorway police discipline, and 2-year customer communication.
4. **Experience Section**: Vertical editorial timeline with sequence numbers (`01`, `02`), dates, and verified responsibility notices.
5. **Education Section**: In-progress BS Artificial Intelligence curriculum overview and core foundational pillars.
6. **Skills Section**: Typographic catalog grouped into *Programming*, *Artificial Intelligence & ML*, *Tools & Technologies*, and *Professional & Operational Skills*.
7. **Selected Projects**: Future-ready minimalist showcase featuring problem statements, proposed architectures, tech stacks, and repository links.
8. **Contact Section ("Good work starts with a conversation")**: Direct electronic mail with one-click copy feedback, LinkedIn, GitHub, and communication protocol.
9. **Footer**: Dynamic year generation, location, copyright, and smooth back-to-top button.
10. **Profile Setup Guide**: Discreet floating helper allowing you to inspect all placeholder fields at any time.

---

## ✦ File Structure

```
saram_portfolio/
├── index.html                   # HTML entry point with meta tags & Google fonts
├── public/
│   └── favicon.svg              # Bespoke Swiss coordinate SVG favicon
├── src/
│   ├── App.tsx                  # Master application layout
│   ├── App.css                  # Core app container styles
│   ├── index.css                # Swiss-inspired editorial design tokens & utilities
│   ├── main.tsx                 # React entry mount
│   ├── data/
│   │   └── portfolioData.ts     # Central profile configuration & placeholders
│   └── components/
│       ├── Navbar.tsx           # Responsive header & mobile menu
│       ├── Hero.tsx             # Editorial hero & headline
│       ├── CoordinateGraphic.tsx# Custom SVG structured grid & coordinate nodes
│       ├── About.tsx            # Perspective & 3-pillar breakdown
│       ├── Experience.tsx       # Vertical editorial timeline
│       ├── Education.tsx        # BS AI academic profile & curriculum
│       ├── Skills.tsx           # Typographic skill directory (no percentage bars)
│       ├── Projects.tsx         # Future-ready AI project showcase
│       ├── Contact.tsx          # Contact channels & 1-click copy email
│       ├── Footer.tsx           # Dynamic footer & back-to-top
│       ├── Icons.tsx            # Clean SVG icons (GitHub, LinkedIn)
│       └── ConfigurationGuide.tsx # In-browser profile customization modal
├── package.json
├── tsconfig.json
└── vite.config.ts
```
