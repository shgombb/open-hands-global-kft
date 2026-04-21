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
    label: 'info@openhands.hu',
    href: 'mailto:info@openhands.hu',
    icon: 'email',
  },
  {
    id: 'github',
    label: 'github.com/shgombb',
    href: 'https://github.com/shgombb',
    icon: 'github',
  },
]
