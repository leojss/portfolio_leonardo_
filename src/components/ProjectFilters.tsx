import { Search, Sparkles } from 'lucide-react'
import type { ProjectCategory } from '@/types/project'
import { CATEGORY_LABELS } from '@/types/project'

interface ProjectFiltersProps {
  activeCategory: ProjectCategory | 'all'
  onCategoryChange: (category: ProjectCategory | 'all') => void
  query: string
  onQueryChange: (query: string) => void
}

const categories: Array<ProjectCategory | 'all'> = [
  'all',
  'software-engineering',
  'data-engineering',
]

export function ProjectFilters({
  activeCategory,
  onCategoryChange,
  query,
  onQueryChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div role="tablist" aria-label="Filtrar por categoria" className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = activeCategory === category
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onCategoryChange(category)}
              className={`relative rounded-xl px-4 py-2 font-mono text-xs font-semibold transition-all duration-200 ${
                isActive
                  ? 'border border-cyan-400 bg-cyan-950/60 text-cyan-300 shadow-[0_0_15px_rgba(0,245,255,0.35)]'
                  : 'border border-ink-800 bg-ink-900/50 text-ink-400 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-ink-900'
              }`}
            >
              <span className="flex items-center gap-1.5">
                {isActive && <Sparkles className="h-3 w-3 text-cyan-400" />}
                {category === 'all' ? 'TODOS OS SISTEMAS' : CATEGORY_LABELS[category].toUpperCase()}
              </span>
            </button>
          )
        })}
      </div>

      <div className="relative w-full sm:w-80">
        <label className="relative block">
          <span className="sr-only">Buscar por tecnologia ou tag</span>
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-400/70"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Filtrar por stack: Python, SQL Server..."
            className="w-full rounded-xl border border-ink-700/80 bg-ink-900/70 py-2.5 pl-10 pr-4 font-mono text-xs text-white placeholder:text-ink-500 backdrop-blur-md transition-all focus:border-cyan-400 focus:bg-ink-950 focus:outline-none focus:shadow-[0_0_20px_rgba(0,245,255,0.25)]"
          />
        </label>
      </div>
    </div>
  )
}
