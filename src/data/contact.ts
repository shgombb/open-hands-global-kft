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
    label: 'global.hands.open@gmail.com',
    href: 'mailto:global.hands.open@gmail.com',
    icon: 'email',
  },
  {
    id: 'github',
    label: 'github.com/shgombb',
    href: 'https://github.com/shgombb',
    icon: 'github',
  },
]
