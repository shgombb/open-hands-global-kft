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
