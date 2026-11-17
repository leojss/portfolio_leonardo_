import { ImageOff } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/cn'

interface ProjectImageProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
}

export function ProjectImage({ src, alt, className, style }: ProjectImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-2 bg-ink-800 text-ink-400',
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="h-8 w-8" aria-hidden="true" />
        <span className="px-4 text-center text-xs text-ink-400">{alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn('object-cover', className)}
      style={style}
    />
  )
}
