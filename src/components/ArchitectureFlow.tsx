import { CheckCircle2, Cpu, Database, Globe, Layers, Server } from 'lucide-react'
import type { ProjectArchitecture } from '@/types/project'

const STACK_CONFIG: Record<
  keyof ProjectArchitecture['stack'],
  { label: string; icon: typeof Cpu; color: string }
> = {
  frontend: { label: 'Frontend & UI', icon: Globe, color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20' },
  backend: { label: 'Backend & APIs', icon: Server, color: 'text-blue-400 border-blue-500/30 bg-blue-950/20' },
  dataPipeline: { label: 'Pipeline & Ingestão', icon: Layers, color: 'text-violet-400 border-violet-500/30 bg-violet-950/20' },
  database: { label: 'Storage & Database', icon: Database, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20' },
  devops: { label: 'Infra & Deploy', icon: Cpu, color: 'text-amber-400 border-amber-500/30 bg-amber-950/20' },
}

interface ArchitectureFlowProps {
  architecture: ProjectArchitecture
}

export function ArchitectureFlow({ architecture }: ArchitectureFlowProps) {
  const stackEntries = Object.entries(architecture.stack) as Array<
    [keyof ProjectArchitecture['stack'], string[] | undefined]
  >

  return (
    <div className="space-y-8">
      {/* Narrative Description */}
      <div className="rounded-xl border border-cyan-500/20 bg-ink-950/50 p-4 backdrop-blur-sm">
        <p className="font-mono text-xs uppercase tracking-wider text-cyan-400">// VISÃO GERAL DO FLUXO</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-200">{architecture.description}</p>
      </div>

      {/* Interactive Visual Pipeline Steps */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-300">
            Diagrama de Execução &amp; Pipeline (Passo a Passo)
          </h4>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            FLUXO VERIFICADO EM PRODUÇÃO
          </span>
        </div>

        <div className="space-y-3">
          {architecture.flowSteps.map((step, i) => {
            const isLast = i === architecture.flowSteps.length - 1

            return (
              <div key={step} className="group relative">
                <div className="flex items-start gap-3.5 rounded-xl border border-ink-800 bg-ink-900/60 p-4 transition-all duration-200 hover:border-cyan-500/40 hover:bg-ink-900/90 hover:shadow-[0_0_15px_rgba(0,245,255,0.1)]">
                  {/* Step Node Index with Pulse */}
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-950/40 font-mono text-xs font-bold text-cyan-300 shadow-[0_0_8px_rgba(0,245,255,0.3)]">
                    0{i + 1}
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium text-white group-hover:text-cyan-200 transition-colors">
                      {step.replace(/^\d+\.\s*/, '')}
                    </p>
                  </div>

                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-cyan-500/60 group-hover:text-cyan-400 transition" />
                </div>

                {/* Animated connecting pulse line */}
                {!isLast && (
                  <div className="ml-6.5 my-1 h-3 w-0.5 border-l-2 border-dashed border-cyan-500/30" />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Tech Stack Distribution */}
      <div>
        <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-ink-300">
          Componentes &amp; Tecnologias Utilizadas
        </h4>

        <div className="grid gap-3 sm:grid-cols-2">
          {stackEntries
            .filter(([, values]) => values && values.length > 0)
            .map(([key, values]) => {
              const conf = STACK_CONFIG[key]
              const Icon = conf.icon

              return (
                <div
                  key={key}
                  className={`rounded-xl border p-4 backdrop-blur-md transition hover:border-cyan-400/50 ${conf.color}`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <h5 className="font-mono text-xs font-bold uppercase tracking-wider">
                      {conf.label}
                    </h5>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {values?.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-xs text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
