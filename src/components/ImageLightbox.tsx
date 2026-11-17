import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ProjectImage } from '@/components/ProjectImage'
import type { ProjectScreenshot } from '@/types/project'

interface ImageLightboxProps {
  screenshots: ProjectScreenshot[]
  index: number
  onIndexChange: (index: number) => void
  onClose: () => void
}

export function ImageLightbox({ screenshots, index, onIndexChange, onClose }: ImageLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const current = screenshots[index]

  useEffect(() => {
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onClose()
      } else if (event.key === 'ArrowLeft' && screenshots.length > 1) {
        onIndexChange((index - 1 + screenshots.length) % screenshots.length)
      } else if (event.key === 'ArrowRight' && screenshots.length > 1) {
        onIndexChange((index + 1) % screenshots.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown, { capture: true })
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true })
  }, [index, screenshots.length, onIndexChange, onClose])

  if (!current) return null

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl sm:p-10"
        role="dialog"
        aria-modal="true"
        aria-label={current.caption}
        onClick={onClose}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar imagem ampliada"
          className="absolute right-5 top-5 z-10 rounded-full border border-cyan-500/30 bg-ink-950/80 p-2.5 text-ink-200 transition hover:border-cyan-400 hover:text-cyan-300"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {screenshots.length > 1 && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                onIndexChange((index - 1 + screenshots.length) % screenshots.length)
              }}
              aria-label="Tela anterior"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-cyan-500/30 bg-ink-950/80 p-3 text-ink-200 transition hover:border-cyan-400 hover:text-cyan-300 sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                onIndexChange((index + 1) % screenshots.length)
              }}
              aria-label="Próxima tela"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-cyan-500/30 bg-ink-950/80 p-3 text-ink-200 transition hover:border-cyan-400 hover:text-cyan-300 sm:right-6"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </>
        )}

        <motion.figure
          key={index}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          onClick={(event) => event.stopPropagation()}
          className="flex max-h-full max-w-5xl flex-col items-center gap-4"
        >
          <ProjectImage
            src={current.url}
            alt={current.caption}
            className="max-h-[80vh] w-auto rounded-xl border border-cyan-500/20 shadow-[0_0_60px_rgba(0,0,0,0.6)]"
            style={{ objectFit: 'contain' }}
          />
          <figcaption className="max-w-2xl text-center font-mono text-xs text-ink-300 sm:text-sm">
            {current.caption}
          </figcaption>
        </motion.figure>
      </motion.div>
    </AnimatePresence>,
    document.body,
  )
}
