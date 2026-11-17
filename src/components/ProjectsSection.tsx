import { AnimatePresence } from 'framer-motion'
import { Terminal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { ProjectCard } from '@/components/ProjectCard'
import { ProjectFilters } from '@/components/ProjectFilters'
import { ProjectModal } from '@/components/ProjectModal'
import { projects } from '@/data/projects.data'
import type { Project, ProjectCategory } from '@/types/project'

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all')
  const [query, setQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' || project.category === activeCategory
      const matchesQuery =
        normalizedQuery.length === 0 ||
        project.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)) ||
        project.title.toLowerCase().includes(normalizedQuery)

      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <section id="projetos" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-cyan-400" />
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Estudos de Caso &amp; Telas de Produção
            </p>
          </div>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Sistemas em <span className="text-gradient-chrome">Operação</span>
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-300 sm:text-base">
            Arquiteturas desenhadas para sanar gargalos reais de negócios. Clique em qualquer card para inspecionar
            o <strong>pipeline completo</strong>, telas da interface e decisões técnicas aplicadas.
          </p>
        </div>

        {/* Filters */}
        <ProjectFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          query={query}
          onQueryChange={setQuery}
        />

        {/* Project Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="mt-16 rounded-2xl border border-dashed border-ink-800 p-12 text-center">
            <p className="font-mono text-sm text-ink-400">
              Nenhum projeto encontrado para o filtro digitado.
            </p>
          </div>
        )}
      </div>

      {/* Modal Detailed Case Study */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
