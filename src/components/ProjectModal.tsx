import { AnimatePresence, motion } from 'framer-motion'
import {
  CheckCircle,
  ExternalLink,
  Github,
  Layers,
  Terminal,
  TrendingUp,
  X,
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ArchitectureFlow } from '@/components/ArchitectureFlow'
import { ScreenshotGallery } from '@/components/ScreenshotGallery'
import { CATEGORY_LABELS, type Project } from '@/types/project'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      previouslyFocused?.focus()
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-cyan-500/30 bg-ink-950/95 p-6 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.9)]"
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Fechar detalhes do projeto"
              className="absolute right-5 top-5 rounded-full border border-ink-700 bg-ink-900/80 p-2.5 text-ink-300 transition hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {CATEGORY_LABELS[project.category]}
              </span>
            </div>

            <h2
              id="project-modal-title"
              className="mt-2 text-2xl font-black tracking-tight text-white sm:text-4xl"
            >
              {project.title}
            </h2>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-cyan-500/20 bg-cyan-950/30 px-3 py-1 font-mono text-xs font-medium text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Screens Showcase */}
            <div className="mt-8 rounded-2xl border border-ink-800 bg-ink-900/50 p-2 sm:p-4 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between px-2">
                <span className="font-mono text-xs text-ink-400">
                  // TELAS &amp; INTERFACE DO SISTEMA
                </span>
                <span className="font-mono text-xs text-cyan-400">
                  {project.screenshots.length} captura(s)
                </span>
              </div>
              <ScreenshotGallery screenshots={project.screenshots} />
            </div>

            {/* Context & Solution Sections */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-ink-800/80 bg-ink-900/40 p-5">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-rose-400">
                  <Terminal className="h-4 w-4" />
                  <span>Problema de Negócio &amp; Desafio</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  {project.problemStatement}
                </p>
              </div>

              <div className="rounded-2xl border border-ink-800/80 bg-ink-900/40 p-5">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  <CheckCircle className="h-4 w-4" />
                  <span>Solução de Engenharia</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Impact Metrics (if present) */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="mt-8">
                <h3 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  <TrendingUp className="h-4 w-4" />
                  <span>Métricas &amp; Impacto Mensurável</span>
                </h3>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-ink-800 bg-ink-900/60 p-4"
                    >
                      <p className="font-mono text-xl font-extrabold text-cyan-300 sm:text-2xl">
                        {m.value}
                      </p>
                      <p className="mt-1 text-xs text-ink-400">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Section */}
            <div className="mt-10 border-t border-ink-800/80 pt-8">
              <h3 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Layers className="h-4 w-4" />
                <span>Arquitetura de Dados &amp; Software</span>
              </h3>
              <div className="mt-4">
                <ArchitectureFlow architecture={project.architecture} />
              </div>
            </div>

            {/* Links Section */}
            {(project.githubUrl || project.liveUrl) && (
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-ink-800/80 pt-6">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-950/20 px-4 py-2.5 font-mono text-xs font-medium text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-950/40"
                  >
                    <Github className="h-4 w-4" />
                    Ver Código no GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 font-mono text-xs font-bold text-ink-950 transition hover:bg-cyan-400"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Acessar em Produção
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
