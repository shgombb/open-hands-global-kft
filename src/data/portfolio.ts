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
    name: 'War Room - The Prayer Tracker',
    type: 'appstore',
    category: 'mobile',
    image: '',
  },
  {
    id: 'app-1',
    name: 'mywhisperer.com',
    type: 'client',
    category: 'Web App',
    image: '',
  },
  {
    id: 'project-2',
    name: 'lumenalapitvany.hu',
    type: 'client',
    category: 'Web App',
    url: 'https://lumenalapitvany.hu',
    image: '',
  },
]
