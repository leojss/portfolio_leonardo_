import { Activity, Terminal } from 'lucide-react'
import { useEffect, useState } from 'react'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'

const navLinks = [
  { href: '#projetos', label: 'Projetos & Arquitetura' },
  { href: '#skills', label: 'Tech Matrix' },
  { href: '#contato', label: 'Terminal / Contato' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)

    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('pt-BR', { hour12: false }))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timer)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-cyan-500/20 bg-ink-950/80 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
          : 'border-b border-ink-800/40 bg-ink-950/40 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Brand / Callout */}
        <a href="#" className="group flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-950/30 text-cyan-400 transition group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]">
            <Terminal className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition">
              LEONARDO<span className="text-cyan-400">.SYS</span>
            </span>
            <span className="font-mono text-[10px] text-ink-400 tracking-wider">
              SOFTWARE & DATA ENG
            </span>
          </div>
        </a>

        {/* Center: System Status Pill */}
        <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-3 py-1 font-mono text-[11px] text-emerald-400">
          <Activity className="h-3 w-3 animate-pulse" />
          <span>STATUS: ONLINE</span>
          <span className="text-emerald-500/40">•</span>
          <span className="text-ink-400">{time ? `${time} UTC-3` : 'ACTIVE'}</span>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs text-ink-300 transition duration-200 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.6)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden sm:flex items-center gap-2 border-l border-ink-800 pl-4">
            <a
              href="https://wa.me/5521965698317"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="rounded-lg border border-ink-700/60 p-1.5 text-[#25D366] transition hover:border-[#25D366]/60 hover:bg-[#25D366]/10"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
