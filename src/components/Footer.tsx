import { Github, Linkedin, Mail } from 'lucide-react'
import { useMemo } from 'react'

export function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer id="contato" className="relative border-t border-cyan-500/20 bg-ink-950/80 px-6 py-20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        {/* Availability Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-4 py-1.5 font-mono text-xs text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          DISPONÍVEL PARA NOVOS PROJETOS &amp; DESAFIOS DE ENGENHARIA
        </span>

        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Vamos construir algo <span className="text-gradient-neon">escalável e resiliente</span> juntos?
        </h2>

        <p className="max-w-xl text-sm leading-relaxed text-ink-300">
          Aberto para discutir arquitetura de sistemas, consolidação de dados e oportunidades de alto impacto.
        </p>

        {/* Action button */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:leonardo.jss@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-mono text-xs font-bold text-ink-950 transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_0_25px_rgba(0,245,255,0.4)]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            INICIAR CONVERSA (E-MAIL)
          </a>

          <a
            href="https://github.com/leojss"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-xl border border-ink-800 bg-ink-900/60 p-3.5 text-ink-300 transition-all hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-950/20"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
          </a>

          <a
            href="https://linkedin.com/in/leojss"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-xl border border-ink-800 bg-ink-900/60 p-3.5 text-ink-300 transition-all hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-950/20"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-2 font-mono text-[11px] text-ink-500">
          <span>© {year} Leonardo. All systems operational.</span>
          <span className="hidden sm:inline">•</span>
          <span>Desenvolvido com React, TypeScript, Tailwind CSS &amp; Framer Motion.</span>
        </div>
      </div>
    </footer>
  )
}
