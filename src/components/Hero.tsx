import { motion } from 'framer-motion'
import {
  ArrowDown,
  Cpu,
  Database,
  Github,
  Linkedin,
  Mail,
  Zap,
} from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center px-6 pt-32 pb-20">
      <div className="mx-auto w-full max-w-6xl">
        {/* Top High-Tech Cyber Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/20 px-3.5 py-1.5 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5ff]" />
          <span className="font-mono text-xs font-semibold tracking-wider text-cyan-300">
            ARQUITETURA DE DADOS &amp; SISTEMAS CRÍTICOS
          </span>
        </motion.div>

        {/* Title & Subtitle with chrome gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-6"
        >
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
            Construindo infraestruturas de dados e software que{' '}
            <span className="text-gradient-neon">não quebram.</span>
          </h1>

          <p className="mt-4 font-mono text-lg font-medium text-cyan-400 sm:text-xl">
            Leonardo <span className="text-ink-400">// Software &amp; Data Engineer</span>
          </p>
        </motion.div>

        {/* Detailed mission statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-ink-300 sm:text-lg"
        >
          Transformo dados dispersos e processos manuais em <strong>aplicações web de alta confiabilidade</strong> e{' '}
          <strong>pipelines de dados consolidados</strong>. Experiência de ponta a ponta: da modelagem relacional
          em SQL Server e automações em Python à entrega de interfaces web reativas para gestão executiva.
        </motion.p>

        {/* Actions & Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projetos"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-ink-950 transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_0_25px_rgba(0,245,255,0.45)] hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explorar Projetos &amp; Telas
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </span>
          </a>

          <a
            href="#skills"
            className="inline-flex items-center gap-2 rounded-xl border border-ink-700/80 bg-ink-900/60 px-5 py-3.5 text-sm font-semibold text-ink-200 backdrop-blur-md transition-all hover:border-cyan-500/40 hover:bg-ink-800/80 hover:text-cyan-300"
          >
            <Cpu className="h-4 w-4 text-cyan-400" />
            Ver Stack Técnica
          </a>

          <div className="flex items-center gap-3 sm:ml-4">
            <a
              href="https://github.com/leojss"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-ink-800 bg-ink-900/60 p-3.5 text-ink-300 backdrop-blur-md transition-all hover:border-cyan-500/50 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)]"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/leojss"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border border-ink-800 bg-ink-900/60 p-3.5 text-ink-300 backdrop-blur-md transition-all hover:border-cyan-500/50 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:leonardo.jss@gmail.com"
              aria-label="E-mail"
              className="rounded-xl border border-ink-800 bg-ink-900/60 p-3.5 text-ink-300 backdrop-blur-md transition-all hover:border-cyan-500/50 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)]"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Futuristic Live Telemetry Pods (KPI Highlights) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {/* Metric 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-ink-700/60 bg-gradient-to-b from-ink-900/90 to-ink-950/80 p-5 backdrop-blur-xl transition duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-400">
                // ARQUITETURA
              </span>
              <Database className="h-4 w-4 text-cyan-400" />
            </div>
            <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              SQL &amp; Relacional
            </p>
            <p className="mt-1 font-mono text-xs text-cyan-300/80">
              Modelagem, integridade e governança de dados corporativos
            </p>
          </div>

          {/* Metric 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-ink-700/60 bg-gradient-to-b from-ink-900/90 to-ink-950/80 p-5 backdrop-blur-xl transition duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-400">
                // EFICIÊNCIA
              </span>
              <Zap className="h-4 w-4 text-emerald-400" />
            </div>
            <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Automação Total
            </p>
            <p className="mt-1 font-mono text-xs text-emerald-300/80">
              Eliminação de planilhas manuais e gargalos operacionais
            </p>
          </div>

          {/* Metric 3 */}
          <div className="group relative overflow-hidden rounded-2xl border border-ink-700/60 bg-gradient-to-b from-ink-900/90 to-ink-950/80 p-5 backdrop-blur-xl transition duration-300 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-400">
                // INTERFACE
              </span>
              <Cpu className="h-4 w-4 text-violet-400" />
            </div>
            <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              React &amp; Modern UI
            </p>
            <p className="mt-1 font-mono text-xs text-violet-300/80">
              Painéis e ferramentas desenhados para tomada de decisão
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
