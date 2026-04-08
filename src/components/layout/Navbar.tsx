import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-dark-border bg-dark/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center px-6 py-4">
        <span className="text-sm font-bold tracking-widest text-white uppercase">
          Open Hands Global
        </span>
        <div className="ml-auto flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeId === link.id
            return (
              <a
                key={link.href}
                href={link.href}
                className={[
                  'text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all',
                  isActive
                    ? 'border border-brand text-brand'
                    : 'text-gray-500 hover:text-white',
                ].join(' ')}
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
