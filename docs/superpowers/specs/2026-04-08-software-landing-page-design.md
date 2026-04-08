# Open Hands Global — Software Landing Page Design Spec

**Date:** 2026-04-08  
**Status:** Approved

---

## Overview

A single-page marketing site for the software development arm of Open Hands Global Kft. Hosted at the root domain (e.g. `openhandsglobal.com`). The recruitment/staffing arm will live on a separate subdomain in a separate repo — this spec covers the software site only.

---

## Goals

- Communicate what Open Hands Global does (web apps, mobile apps, DevOps contracting)
- Target audience: startups and SMBs looking to build software or invest in DevOps infrastructure
- Showcase portfolio — client work and owned App Store apps (cross-promotion)
- Provide contact info so potential clients can reach out
- Be fast, modern-looking, and maintainable by one person

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Routing | None — single page, anchor scroll |
| Hosting | Cloudflare Pages |
| Package manager | npm |

---

## Design Language

- **Theme:** Dark minimal — near-black background (`#0d0d0d`), single cyan accent (`#00e5ff`)
- **Typography:** Sans-serif system font stack; tight letter-spacing for headings, all-caps section labels
- **Cards:** Dark `#141414` background, subtle borders, cyan left-border on highlighted items
- **Buttons:** Solid cyan fill (primary CTA), outlined cyan (secondary)
- **Nav:** Sticky, blurred backdrop (`backdrop-filter: blur`), transparent until scroll

---

## Page Sections (in order)

### 1. Navbar
- Logo/wordmark: `OPEN HANDS GLOBAL`
- Links: Services, Portfolio, About, Contact (all anchor links, smooth scroll)
- Contact link styled as an outlined cyan button
- Sticky with `backdrop-filter: blur` on scroll

### 2. Hero
- Eyebrow label: `SOFTWARE DEVELOPMENT STUDIO`
- Headline: short, punchy (e.g. "We build software that scales with you.")
- Subtext: one-liner covering web, mobile, infrastructure
- Primary CTA: `GET IN TOUCH` (scrolls to Contact)
- Secondary CTA: `↓ SEE OUR WORK` (scrolls to Portfolio)
- Placeholder banner image below the text block (to be replaced)

### 3. Services
- Section label: `WHAT WE DO`
- Three service cards:
  1. **Web Applications** — Full cycle, wireframe to production
  2. **Mobile Applications** — iOS & Android, native and cross-platform
  3. **DevOps & Infrastructure** — On-demand contractor, CI/CD, cloud, scaling
- Active/first card has cyan left-border accent; others have subtle border

### 4. Portfolio
- Section label: `OUR WORK`
- Subtitle: "Client projects & our own apps on the App Store"
- 2-column card grid
- Each card: thumbnail image placeholder, project name, type tag (`Web App · Client`, `Mobile · App Store`, etc.)
- Portfolio items have a `type: 'client' | 'appstore'` field for future filtering
- Items are data-driven from `src/data/portfolio.ts`

### 5. About
- Section label: `WHO WE ARE`
- Company avatar/logo placeholder
- Short paragraph: company story, values, trust signals
- Metadata pills: founding year, location (Budapest, HU)

### 6. Contact
- Section label: `REACH OUT`
- Simple list of contact links — no form
- Items: Email, LinkedIn, GitHub (icons + text)
- All links open in new tab

### 7. Footer
- Copyright line
- Subtle text link pointing to the recruitment subdomain (cross-navigation between business arms)

---

## Project Structure

```
open-hands-global-kft/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/              # logo, placeholder images
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── About.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── SectionLabel.tsx
│   │       └── Card.tsx
│   ├── data/
│   │   ├── services.ts      # service definitions
│   │   ├── portfolio.ts     # portfolio items with type flag
│   │   └── contact.ts       # contact link list
│   ├── App.tsx              # composes all sections in order
│   ├── main.tsx
│   └── index.css            # Tailwind directives + global styles
├── index.html
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Content (data layer)

All user-facing copy lives in `src/data/` as typed TypeScript objects. Components consume data props — no hardcoded strings in JSX.

### `src/data/services.ts`
```ts
export interface Service {
  title: string
  description: string
  highlighted?: boolean
}
```

### `src/data/portfolio.ts`
```ts
export interface PortfolioItem {
  name: string
  type: 'client' | 'appstore'
  category: string        // e.g. 'Web App', 'Mobile', 'DevOps'
  image: string           // path to asset or placeholder
  url?: string
}
```

### `src/data/contact.ts`
```ts
export interface ContactLink {
  label: string
  href: string
  icon: 'email' | 'linkedin' | 'github'
}
```

---

## Smooth Scroll Navigation

- Each section has an `id` attribute matching its nav link (e.g. `id="services"`)
- Nav `<a>` tags use `href="#services"` etc.
- Global CSS: `html { scroll-behavior: smooth }`
- No JS router, no hash routing library needed

---

## Cloudflare Pages Deployment

- Build command: `npm run build`
- Output directory: `dist`
- Connect GitHub repo in Cloudflare Pages dashboard
- No environment variables or server-side logic required

---

## Out of Scope (for this phase)

- "How We Work" section (to be added later when process is formalized)
- Contact form / backend
- Authentication
- Recruitment subdomain (separate repo/project)
- Analytics (can be added via CF Pages later)
- i18n / multi-language
