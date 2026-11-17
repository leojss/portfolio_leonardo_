export type ProjectCategory = 'software-engineering' | 'data-engineering' | 'fullstack'

export interface ProjectScreenshot {
  url: string
  caption: string
  isCover?: boolean
}

export interface ProjectMetric {
  label: string
  value: string
}

export interface ProjectStack {
  frontend?: string[]
  backend?: string[]
  dataPipeline?: string[]
  database?: string[]
  devops?: string[]
}

export interface ProjectArchitecture {
  description: string
  flowSteps: string[]
  stack: ProjectStack
}

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  tags: string[]
  summary: string
  problemStatement: string
  solution: string
  architecture: ProjectArchitecture
  metrics?: ProjectMetric[]
  screenshots: ProjectScreenshot[]
  githubUrl?: string
  liveUrl?: string
  demoVideoUrl?: string
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  'software-engineering': 'Engenharia de Software',
  'data-engineering': 'Engenharia de Dados',
  fullstack: 'Fullstack',
}
