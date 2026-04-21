const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
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
              className="text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all text-gray-500 hover:border hover:border-brand hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
