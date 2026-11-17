export interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Linguagens',
    skills: ['Python', 'JavaScript', 'SQL', 'HTML & CSS'],
  },
  {
    title: 'Backend & Dados',
    skills: ['Python (automação & regras de negócio)', 'SQL Server', 'Modelagem relacional', 'Geração de PDF/documentos', 'Integração de sistemas'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'Angular', 'Design responsivo'],
  },
  {
    title: 'Práticas & Ferramentas',
    skills: ['Git', 'Versionamento de código', 'Documentação técnica', 'Levantamento de requisitos'],
  },
]
