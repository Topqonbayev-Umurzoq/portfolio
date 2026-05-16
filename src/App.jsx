import { useState, useEffect, useRef } from 'react'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import SectionIndicator from './components/SectionIndicator'
import Starfield from './components/Starfield'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { useSound } from './hooks/useSound'

const sections = ['hero', 'about', 'skills', 'projects', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [soundOn, setSoundOn] = useState(false)
  const { playHover, playClick, startAmbient } = useSound()
  const sectionRefs = useRef({})

  // Scroll-based section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            setActiveSection(entry.target.dataset.section)
          }
        })
      },
      { threshold: 0.4 }
    )

    sections.forEach(s => {
      const el = document.getElementById(`section-${s}`)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Sound on interactive elements
  useEffect(() => {
    if (!soundOn) return
    const addListeners = () => {
      document.querySelectorAll('button, a, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', playHover)
        el.addEventListener('click', playClick)
      })
    }
    addListeners()
    const interval = setInterval(addListeners, 2000)
    return () => clearInterval(interval)
  }, [soundOn])

  const navigateTo = (id) => {
    const el = document.getElementById(`section-${id}`)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id)
    if (soundOn) playClick()
  }

  const toggleSound = () => {
    const next = !soundOn
    setSoundOn(next)
    if (next) startAmbient()
  }

  return (
    <div style={{ background: '#000008', minHeight: '100vh', position: 'relative' }}>
      {/* Starfield fixed background */}
      <Starfield />

      {/* Scanline overlay */}
      <div className="scanlines" style={{
        position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none',
      }} />

      {/* Custom cursor */}
      <Cursor />

      {/* Navigation */}
      <Nav
        activeSection={activeSection}
        onNavigate={navigateTo}
        soundOn={soundOn}
        onToggleSound={toggleSound}
      />

      {/* Section indicator */}
      <SectionIndicator active={activeSection} onNavigate={navigateTo} />

      {/* Main content - scrollable sections */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <div id="section-hero" data-section="hero">
          <Hero onNavigate={navigateTo} />
        </div>

        <div id="section-about" data-section="about">
          <About />
        </div>

        <div id="section-skills" data-section="skills">
          <Skills />
        </div>

        <div id="section-projects" data-section="projects">
          <Projects />
        </div>

        <div id="section-contact" data-section="contact">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        position: 'relative', zIndex: 10,
        textAlign: 'center', padding: '32px 20px',
        borderTop: '1px solid rgba(0,255,255,0.1)',
        color: 'rgba(255,255,255,0.2)',
        fontSize: 10, letterSpacing: 4,
      }}>
        ⬡ UMURZOQ TOPQONBAYEV · 2025 · FUTURISTIC DEVELOPER
      </footer>
    </div>
  )
}
