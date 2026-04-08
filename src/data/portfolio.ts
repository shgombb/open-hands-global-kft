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
