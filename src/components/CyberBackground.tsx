import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

export function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    const colors = ['#00f5ff', '#6366f1', '#10b981', '#38bdf8']
    let particles: Particle[] = []

    const initParticles = () => {
      particles = []
      const particleCount = Math.min(Math.floor((width * height) / 16000), 75)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: Math.random() * 1.8 + 0.8,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    initParticles()

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw particle connections & network lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]

        // Move
        p1.x += p1.vx
        p1.y += p1.vy

        // Bounce
        if (p1.x < 0 || p1.x > width) p1.vx *= -1
        if (p1.y < 0 || p1.y > height) p1.vy *= -1

        // Mouse gravity interaction
        const dxMouse = mouse.x - p1.x
        const dyMouse = mouse.y - p1.y
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)
        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 0.9
          p1.x -= (dxMouse / distMouse) * force * 1.5
          p1.y -= (dyMouse / distMouse) * force * 1.5
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2)
        ctx.fillStyle = p1.color
        ctx.shadowBlur = 10
        ctx.shadowColor = p1.color
        ctx.fill()
        ctx.shadowBlur = 0

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / 120) * 0.18})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }

        // Connect to mouse
        if (distMouse < mouse.radius) {
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(0, 245, 255, ${(1 - distMouse / mouse.radius) * 0.35})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic Aurora Ambient Light Orbs */}
      <div className="absolute -top-40 -left-40 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-cyan-500/20 via-indigo-600/15 to-transparent blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/4 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-violet-600/20 via-fuchsia-600/10 to-transparent blur-[140px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute -bottom-20 left-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent blur-[130px] animate-pulse" style={{ animationDuration: '9s' }} />

      {/* Cybernetic High-Tech Grid with radial vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)]" />

      {/* Canvas for dynamic particles and connection lines */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />

      {/* Subtle Noise / Scanline Texture for cinematic finish */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(5,6,10,0.65)_100%)]" />
    </div>
  )
}

