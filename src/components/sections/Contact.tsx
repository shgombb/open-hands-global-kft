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
