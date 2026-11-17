import { motion } from 'framer-motion'
import { ArrowUpRight, Cpu, Eye, Layers } from 'lucide-react'
import { useState, type MouseEvent } from 'react'
import { ProjectImage } from '@/components/ProjectImage'
import { CATEGORY_LABELS, type Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const cover = project.screenshots.find((shot) => shot.isCover) ?? project.screenshots[0]
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-700/60 bg-ink-900/80 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(0,245,255,0.2)]"
    >
      {/* Interactive Cursor Spotlight Glow Effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 245, 255, 0.12), transparent 70%)`,
          }}
        />
      )}

      {/* Cyber Corner HUD Accents */}
      <div className="absolute top-2 left-2 font-mono text-[9px] text-ink-500 tracking-widest pointer-events-none z-10">
        ┌─
      </div>
      <div className="absolute top-2 right-2 font-mono text-[9px] text-ink-500 tracking-widest pointer-events-none z-10">
        ─┐
      </div>

      {/* Screenshot Visual Window */}
      <div className="relative h-52 w-full overflow-hidden bg-ink-950/80 border-b border-ink-800/80">
        <ProjectImage
          src={cover?.url ?? ''}
          alt={cover?.caption ?? project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Scanline & Hologram Overlay on Image */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent opacity-80" />

        {/* Category Pill */}
        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-ink-950/90 px-3 py-1 font-mono text-[11px] text-cyan-300 backdrop-blur-md shadow-md">
          <Layers className="h-3 w-3 text-cyan-400" />
          <span>{CATEGORY_LABELS[project.category]}</span>
        </div>

        {/* Screenshot indicator */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-ink-700/60 bg-ink-950/80 px-2.5 py-0.5 font-mono text-[10px] text-ink-300 backdrop-blur">
          <Eye className="h-3 w-3 text-ink-400" />
          <span>{project.screenshots.length} tela{project.screenshots.length > 1 ? 's' : ''}</span>
        </div>
      </div>

      {/* Body & Content */}
      <div className="relative z-10 flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
              {project.title}
            </h3>
            <span className="font-mono text-[10px] text-ink-500">
              {project.architecture.flowSteps.length} nós no fluxo
            </span>
          </div>

          <p className="mt-2.5 text-sm leading-relaxed text-ink-300 line-clamp-3">
            {project.summary}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-md border border-cyan-500/20 bg-cyan-950/20 px-2 py-0.5 font-mono text-[11px] text-cyan-200/90"
            >
              <Cpu className="h-2.5 w-2.5 text-cyan-400" />
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="rounded-md bg-ink-800/80 px-2 py-0.5 font-mono text-[11px] text-ink-400">
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-ink-950/40 py-2.5 px-4 font-mono text-xs font-semibold text-cyan-300 backdrop-blur-md transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-950/40 hover:text-white hover:shadow-[0_0_15px_rgba(0,245,255,0.25)]"
        >
          <span>Abrir Estudo de Caso &amp; Arquitetura</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.article>
  )
}
