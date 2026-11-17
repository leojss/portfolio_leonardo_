import { CyberBackground } from '@/components/CyberBackground'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SkillsMatrix } from '@/components/SkillsMatrix'

function App() {
  return (
    <div className="relative min-h-screen bg-[#040508] text-ink-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Dynamic Interactive WebGL/Canvas Particle Mesh & Ambient Glows */}
      <CyberBackground />

      {/* Main Content Layers */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <ProjectsSection />
          <SkillsMatrix />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
