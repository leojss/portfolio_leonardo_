import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { useState } from 'react'
import { ImageLightbox } from '@/components/ImageLightbox'
import { ProjectImage } from '@/components/ProjectImage'
import type { ProjectScreenshot } from '@/types/project'

interface ScreenshotGalleryProps {
  screenshots: ProjectScreenshot[]
}

export function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
  const [index, setIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (screenshots.length === 0) return null

  const current = screenshots[index]

  const goTo = (next: number) => {
    setIndex((next + screenshots.length) % screenshots.length)
  }

  return (
    <div>
      <div className="relative h-64 w-full overflow-hidden rounded-xl border border-ink-800 bg-ink-800 sm:h-80">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Ampliar imagem: ${current.caption}`}
          className="group relative block h-full w-full cursor-zoom-in"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="h-full w-full"
            >
              <ProjectImage src={current.url} alt={current.caption} className="h-full w-full" />
            </motion.div>
          </AnimatePresence>

          {/* Zoom hint overlay */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink-950/0 transition-colors duration-200 group-hover:bg-ink-950/50">
            <span className="flex items-center gap-2 rounded-full border border-cyan-500/40 bg-ink-950/80 px-4 py-2 font-mono text-xs text-cyan-300 opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100">
              <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
              Ampliar tela
            </span>
          </div>
        </button>

        {screenshots.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Tela anterior"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-cyan-500/30 bg-ink-950/70 p-2 text-ink-100 transition hover:border-cyan-400 hover:bg-ink-950"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Próxima tela"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-cyan-500/30 bg-ink-950/70 p-2 text-ink-100 transition hover:border-cyan-400 hover:bg-ink-950"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      <p className="mt-3 text-sm text-ink-300">{current.caption}</p>

      {screenshots.length > 1 && (
        <div className="mt-3 flex gap-2" role="tablist" aria-label="Selecionar tela">
          {screenshots.map((shot, i) => (
            <button
              key={shot.url}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Ir para tela ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 flex-1 rounded-full transition ${
                i === index ? 'bg-cyan-400 shadow-[0_0_8px_rgba(0,245,255,0.6)]' : 'bg-ink-700'
              }`}
            />
          ))}
        </div>
      )}

      {lightboxOpen && (
        <ImageLightbox
          screenshots={screenshots}
          index={index}
          onIndexChange={setIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  )
}
