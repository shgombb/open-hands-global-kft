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
