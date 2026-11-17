import { Code2, Cpu, Database, Server, Wrench } from 'lucide-react'
import { skillGroups } from '@/data/skills.data'

const GROUP_ICONS: Record<string, typeof Code2> = {
  Linguagens: Code2,
  'Backend & Dados': Database,
  Frontend: Server,
  'Práticas & Ferramentas': Wrench,
}

export function SkillsMatrix() {
  return (
    <section id="skills" className="relative px-6 py-24 border-t border-ink-800/60">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-cyan-400" />
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Capacidades Técnicas &amp; Domínios
          </p>
        </div>

        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Matriz de <span className="text-gradient-chrome">Especialidades</span>
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-300">
          Tecnologias e ferramentas utilizadas em ambientes de produção para garantir
          escalabilidade, integridade relacional e performance.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = GROUP_ICONS[group.title] ?? Code2

            return (
              <div
                key={group.title}
                className="group relative overflow-hidden rounded-2xl border border-ink-700/60 bg-ink-900/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(0,245,255,0.15)]"
              >
                {/* Header of card */}
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-sm font-bold text-white transition-colors group-hover:text-cyan-300">
                    {group.title}
                  </h3>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/30 text-cyan-400">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-ink-700/80 bg-ink-950/60 px-2.5 py-1 font-mono text-xs text-ink-200 transition-all hover:border-cyan-500/40 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
