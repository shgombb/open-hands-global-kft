# Open Hands Global — Software Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a dark, minimal one-page marketing site for Open Hands Global's software development arm using React 18 + TypeScript + Vite + Tailwind CSS, deployable to Cloudflare Pages.

**Architecture:** Single `App.tsx` composes all section components in scroll order. Navigation uses native anchor scroll — no router. All content is data-driven from typed TypeScript files in `src/data/`.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS v3, Cloudflare Pages

---

## File Map

| File | Responsibility |
|---|---|
| `index.html` | Vite entry, sets `<title>` |
| `src/main.tsx` | React root mount |
| `src/index.css` | Tailwind directives + `html { scroll-behavior: smooth }` |
| `src/App.tsx` | Composes Navbar + all sections + Footer |
| `src/data/services.ts` | Typed service definitions |
| `src/data/portfolio.ts` | Typed portfolio items |
| `src/data/contact.ts` | Typed contact links |
| `src/components/layout/Navbar.tsx` | Sticky nav with anchor links |
| `src/components/layout/Footer.tsx` | Copyright + recruitment subdomain link |
| `src/components/ui/SectionLabel.tsx` | Reusable cyan eyebrow label |
| `src/components/ui/Button.tsx` | Primary (cyan filled) and secondary (outlined) variants |
| `src/components/sections/Hero.tsx` | Headline, CTAs, placeholder banner |
| `src/components/sections/Services.tsx` | Three service cards |
| `src/components/sections/Portfolio.tsx` | 2-column card grid |
| `src/components/sections/About.tsx` | Company blurb + metadata pills |
| `src/components/sections/Contact.tsx` | Contact link list |
| `tailwind.config.ts` | Extends theme with brand colors |
| `vite.config.ts` | Standard Vite config |

---

## Task 1: Scaffold Vite + React + TypeScript project

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`

- [ ] **Step 1: Scaffold the project**

```bash
cd /Users/aronszantner/progprojects/websites/open-hands-global-kft
npm create vite@latest . -- --template react-ts
```

When prompted "Current directory is not empty. Remove existing files and continue?" — select **Yes** (only docs/ exists).

- [ ] **Step 2: Install dependencies**

```bash
npm install
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p --ts
```

- [ ] **Step 3: Configure Tailwind content paths**

Replace the contents of `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#00e5ff',
        dark: {
          DEFAULT: '#0d0d0d',
          card: '#141414',
          border: '#1f1f1f',
          subtle: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
```

- [ ] **Step 4: Set up global CSS**

Replace `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0d0d0d;
  color: #ffffff;
}
```

- [ ] **Step 5: Replace src/main.tsx**

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 6: Replace src/App.tsx with a stub**

```tsx
export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <p className="p-8 text-brand">Open Hands Global — scaffold OK</p>
    </div>
  )
}
```

- [ ] **Step 7: Update index.html title**

In `index.html`, change `<title>Vite + React + TS</title>` to:

```html
<title>Open Hands Global — Software Development</title>
```

- [ ] **Step 8: Verify dev server starts**

```bash
npm run dev
```

Expected: server starts at `http://localhost:5173`, page shows cyan text "Open Hands Global — scaffold OK" on a near-black background.

- [ ] **Step 9: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold Vite + React + TypeScript + Tailwind"
```

---

## Task 2: Create data layer

**Files:**
- Create: `src/data/services.ts`, `src/data/portfolio.ts`, `src/data/contact.ts`

- [ ] **Step 1: Create src/data/services.ts**

```ts
export interface Service {
  id: string
  title: string
  description: string
  highlighted: boolean
}

export const services: Service[] = [
  {
    id: 'web',
    title: 'Web Applications',
    description: 'Full cycle development — from wireframe to production-ready web app.',
    highlighted: true,
  },
  {
    id: 'mobile',
    title: 'Mobile Applications',
    description: 'iOS & Android — native and cross-platform development.',
    highlighted: false,
  },
  {
    id: 'devops',
    title: 'DevOps & Infrastructure',
    description: 'On-demand contractor — CI/CD pipelines, cloud setup, and scaling.',
    highlighted: false,
  },
]
```

- [ ] **Step 2: Create src/data/portfolio.ts**

```ts
export type PortfolioType = 'client' | 'appstore'

export interface PortfolioItem {
  id: string
  name: string
  type: PortfolioType
  category: string
  image: string
  url?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'project-1',
    name: 'Project Name',
    type: 'client',
    category: 'Web App',
    image: '',
  },
  {
    id: 'app-1',
    name: 'App Name',
    type: 'appstore',
    category: 'Mobile',
    image: '',
    url: 'https://apps.apple.com',
  },
  {
    id: 'project-2',
    name: 'Project Name',
    type: 'client',
    category: 'DevOps',
    image: '',
  },
]
```

- [ ] **Step 3: Create src/data/contact.ts**

```ts
export type ContactIcon = 'email' | 'linkedin' | 'github'

export interface ContactLink {
  id: string
  label: string
  href: string
  icon: ContactIcon
}

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'hello@openhandsglobal.com',
    href: 'mailto:hello@openhandsglobal.com',
    icon: 'email',
  },
  {
    id: 'linkedin',
    label: 'linkedin.com/company/open-hands-global',
    href: 'https://linkedin.com/company/open-hands-global',
    icon: 'linkedin',
  },
  {
    id: 'github',
    label: 'github.com/openhandsglobal',
    href: 'https://github.com/openhandsglobal',
    icon: 'github',
  },
]
```

- [ ] **Step 4: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/data/
git commit -m "feat: add typed data layer for services, portfolio, and contact"
```

---

## Task 3: Build UI primitives

**Files:**
- Create: `src/components/ui/SectionLabel.tsx`, `src/components/ui/Button.tsx`

- [ ] **Step 1: Create src/components/ui/SectionLabel.tsx**

```tsx
interface SectionLabelProps {
  children: React.ReactNode
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-[9px] font-bold tracking-[3px] text-brand uppercase mb-2">
      {children}
    </p>
  )
}
```

- [ ] **Step 2: Create src/components/ui/Button.tsx**

```tsx
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
}

export default function Button({ children, variant = 'primary', href, onClick }: ButtonProps) {
  const base = 'inline-block text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-opacity hover:opacity-80'
  const styles = {
    primary: 'bg-brand text-black',
    secondary: 'border border-brand text-brand',
  }

  if (href) {
    return (
      <a href={href} className={`${base} ${styles[variant]}`}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  )
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/
git commit -m "feat: add SectionLabel and Button UI primitives"
```

---

## Task 4: Build Navbar

**Files:**
- Create: `src/components/layout/Navbar.tsx`

- [ ] **Step 1: Create src/components/layout/Navbar.tsx**

```tsx
import Button from '../ui/Button'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-dark-border bg-dark/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center px-6 py-4">
        <span className="text-sm font-bold tracking-widest text-white uppercase">
          Open Hands Global
        </span>
        <div className="ml-auto flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] text-gray-500 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="secondary">
            Contact
          </Button>
        </div>
      </nav>
    </header>
  )
}
```

- [ ] **Step 2: Mount Navbar in App.tsx**

Replace `src/App.tsx`:

```tsx
import Navbar from './components/layout/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <div className="p-8 text-brand">Sections coming soon</div>
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Verify in browser**

```bash
npm run dev
```

Expected: sticky dark nav with wordmark on left, three text links + outlined cyan Contact button on right.

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Navbar.tsx src/App.tsx
git commit -m "feat: add sticky Navbar with anchor links"
```

---

## Task 5: Build Hero section

**Files:**
- Create: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Create src/components/sections/Hero.tsx**

```tsx
import Button from '../ui/Button'
import SectionLabel from '../ui/SectionLabel'

export default function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-dark-border bg-gradient-to-b from-dark-subtle to-dark px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Software Development Studio</SectionLabel>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
          We build software<br />that scales with you.
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-500">
          Web apps, mobile, and infrastructure — full cycle development
          for startups and growing businesses.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="#contact">Get in Touch</Button>
          <a
            href="#portfolio"
            className="text-[10px] font-bold tracking-widest text-gray-600 uppercase transition-colors hover:text-white"
          >
            ↓ See Our Work
          </a>
        </div>
        <div className="mt-12 flex h-48 items-center justify-center rounded border border-dashed border-dark-border bg-dark-subtle md:h-64">
          <span className="text-xs tracking-widest text-gray-700">
            [ HERO BANNER IMAGE ]
          </span>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Hero to App.tsx**

```tsx
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Verify in browser**

```bash
npm run dev
```

Expected: hero with cyan eyebrow, large white heading, grey subtext, cyan CTA button, placeholder banner image area.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Hero.tsx src/App.tsx
git commit -m "feat: add Hero section"
```

---

## Task 6: Build Services section

**Files:**
- Create: `src/components/sections/Services.tsx`
- Read: `src/data/services.ts`

- [ ] **Step 1: Create src/components/sections/Services.tsx**

```tsx
import SectionLabel from '../ui/SectionLabel'
import { services } from '../../data/services'

export default function Services() {
  return (
    <section id="services" className="border-b border-dark-border px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>What We Do</SectionLabel>
        <h2 className="mt-1 text-2xl font-bold text-white">Our Services</h2>
        <div className="mt-8 flex flex-col gap-3">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded bg-dark-card p-5 border-l-2 ${
                service.highlighted ? 'border-brand' : 'border-dark-border'
              }`}
            >
              <h3 className="text-sm font-bold text-white">{service.title}</h3>
              <p className="mt-1 text-xs text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Services to App.tsx**

```tsx
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Verify in browser**

Expected: three service cards. Web Applications card has a cyan left border, the other two have subtle dark borders.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Services.tsx src/App.tsx
git commit -m "feat: add Services section"
```

---

## Task 7: Build Portfolio section

**Files:**
- Create: `src/components/sections/Portfolio.tsx`
- Read: `src/data/portfolio.ts`

- [ ] **Step 1: Create src/components/sections/Portfolio.tsx**

```tsx
import SectionLabel from '../ui/SectionLabel'
import { portfolioItems } from '../../data/portfolio'

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-dark-border px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Our Work</SectionLabel>
        <h2 className="mt-1 text-2xl font-bold text-white">Portfolio</h2>
        <p className="mt-1 text-xs text-gray-500">
          Client projects & our own apps on the App Store
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {portfolioItems.map((item) => (
            <a
              key={item.id}
              href={item.url ?? '#'}
              target={item.url ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group overflow-hidden rounded bg-dark-card transition-opacity hover:opacity-80"
            >
              <div className="flex h-32 items-center justify-center bg-dark-subtle">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-[9px] tracking-widest text-gray-700">
                    [ IMG ]
                  </span>
                )}
              </div>
              <div className="p-3">
                <p className="text-xs font-bold text-white">{item.name}</p>
                <p className="mt-0.5 text-[10px] text-gray-500">
                  {item.category} ·{' '}
                  <span className={item.type === 'appstore' ? 'text-brand' : 'text-gray-600'}>
                    {item.type === 'appstore' ? 'App Store' : 'Client'}
                  </span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Portfolio to App.tsx**

```tsx
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Verify in browser**

Expected: 2-3 column card grid. App Store items have a cyan type label. Image placeholders shown when `image` is empty.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Portfolio.tsx src/App.tsx
git commit -m "feat: add Portfolio section"
```

---

## Task 8: Build About section

**Files:**
- Create: `src/components/sections/About.tsx`

- [ ] **Step 1: Create src/components/sections/About.tsx**

```tsx
import SectionLabel from '../ui/SectionLabel'

export default function About() {
  return (
    <section id="about" className="border-b border-dark-border px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Who We Are</SectionLabel>
        <h2 className="mt-1 text-2xl font-bold text-white">About</h2>
        <div className="mt-8 flex gap-6">
          <div className="h-16 w-16 flex-shrink-0 rounded-full border border-dashed border-dark-border bg-dark-subtle" />
          <div>
            <p className="text-sm leading-relaxed text-gray-400">
              Open Hands Global is a Budapest-based software studio specialising in
              full-cycle web and mobile development, and on-demand DevOps contracting.
              We work with startups and SMBs to ship reliable, scalable software.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="rounded bg-dark-subtle px-2 py-1 text-[10px] text-gray-500">
                Budapest, HU
              </span>
              <span className="rounded bg-dark-subtle px-2 py-1 text-[10px] text-gray-500">
                Software & Recruitment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add About to App.tsx**

```tsx
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import About from './components/sections/About'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/About.tsx src/App.tsx
git commit -m "feat: add About section"
```

---

## Task 9: Build Contact section

**Files:**
- Create: `src/components/sections/Contact.tsx`
- Read: `src/data/contact.ts`

- [ ] **Step 1: Create src/components/sections/Contact.tsx**

```tsx
import SectionLabel from '../ui/SectionLabel'
import { contactLinks, type ContactIcon } from '../../data/contact'

const icons: Record<ContactIcon, string> = {
  email: '✉',
  linkedin: 'in',
  github: '⌥',
}

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Reach Out</SectionLabel>
        <h2 className="mt-1 text-2xl font-bold text-white">Contact</h2>
        <div className="mt-8 flex flex-col divide-y divide-dark-border">
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 py-4 text-gray-500 transition-colors hover:text-white"
            >
              <span className="w-6 text-center text-sm font-bold text-brand">
                {icons[link.icon]}
              </span>
              <span className="text-sm">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Contact to App.tsx**

```tsx
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Verify in browser**

Expected: list of contact links separated by dark dividers. Each has a cyan icon and grey label that highlights white on hover.

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/Contact.tsx src/App.tsx
git commit -m "feat: add Contact section"
```

---

## Task 10: Build Footer

**Files:**
- Create: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Create src/components/layout/Footer.tsx**

```tsx
export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-black px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="text-[10px] text-gray-700">
          © {new Date().getFullYear()} Open Hands Global Kft.
        </span>
        <a
          href="https://work.openhandsglobal.com"
          className="text-[10px] text-gray-700 transition-colors hover:text-gray-400"
        >
          workforce & recruitment →
        </a>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Add Footer to App.tsx**

```tsx
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
```

- [ ] **Step 3: Verify full page in browser**

```bash
npm run dev
```

Walk through the full page top to bottom:
- Nav is sticky and blurred
- Each nav link scrolls smoothly to the correct section
- Hero has placeholder banner
- Services shows 3 cards, first with cyan accent
- Portfolio shows placeholder cards
- About shows company blurb
- Contact shows link list
- Footer shows copyright + recruitment link

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/Footer.tsx src/App.tsx
git commit -m "feat: add Footer and complete full page composition"
```

---

## Task 11: Add .gitignore and Cloudflare Pages config

**Files:**
- Create: `.gitignore`, `public/_redirects`

- [ ] **Step 1: Create .gitignore**

```
node_modules
dist
.env
.env.*
.superpowers/
```

- [ ] **Step 2: Create public/_redirects for SPA routing**

Even though there's no client-side router, this ensures CF Pages serves the index for any path:

```
/* /index.html 200
```

- [ ] **Step 3: Verify production build**

```bash
npm run build
```

Expected: `dist/` folder created, no TypeScript or build errors.

- [ ] **Step 4: Commit**

```bash
git add .gitignore public/_redirects
git commit -m "chore: add .gitignore and Cloudflare Pages SPA redirect"
```

---

## Self-Review

**Spec coverage:**
- [x] Hero section with headline, CTAs, placeholder banner
- [x] Services — 3 cards, data-driven, highlighted variant
- [x] Portfolio — 2-column grid, client/appstore type, image placeholder
- [x] About — blurb, location pills
- [x] Contact — link list, no form
- [x] Footer — copyright + recruitment subdomain link
- [x] Sticky nav with smooth anchor scroll
- [x] Dark minimal design with cyan accent
- [x] Tailwind CSS with brand color tokens
- [x] Typed data layer in `src/data/`
- [x] Cloudflare Pages build config
- [x] `How We Work` intentionally excluded (out of scope per spec)

**Placeholder scan:** None found — all steps have complete code.

**Type consistency:**
- `Service.id`, `.title`, `.description`, `.highlighted` — consistent across Task 2 and Task 6
- `PortfolioItem.id`, `.name`, `.type`, `.category`, `.image`, `.url` — consistent across Task 2 and Task 7
- `ContactLink.id`, `.label`, `.href`, `.icon` / `ContactIcon` type — consistent across Task 2 and Task 9
- `Button` props (`variant`, `href`, `onClick`) — used correctly in Hero (Task 5) and Navbar (Task 4)
- `SectionLabel` — single `children` prop, used identically in Tasks 5–9
