import React, { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import SpaceBackground from './components/SpaceBackground'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import HUDBottomPanel from './components/HUDBottomPanel'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import { useMousePosition } from './hooks/useMousePosition'
import { useSoundManager } from './hooks/useSoundManager'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const containerRef = useRef(null)
  const { mouseX, mouseY } = useMousePosition()
  const { playSound } = useSoundManager(soundEnabled)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        setCurrentSection((prev) => Math.min(prev + 1, 4))
      } else {
        setCurrentSection((prev) => Math.max(prev - 1, 0))
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        setCurrentSection((prev) => Math.min(prev + 1, 4))
      } else if (e.key === 'ArrowUp') {
        setCurrentSection((prev) => Math.max(prev - 1, 0))
      } else if (e.key === '1') setCurrentSection(0)
      else if (e.key === '2') setCurrentSection(1)
      else if (e.key === '3') setCurrentSection(2)
      else if (e.key === '4') setCurrentSection(3)
      else if (e.key === '5') setCurrentSection(4)
    }

    window.addEventListener('wheel', handleScroll, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  const sections = [
    <Hero key="hero" onStart={() => setCurrentSection(1)} playSound={playSound} />,
    <About key="about" />,
    <Skills key="skills" />,
    <Projects key="projects" playSound={playSound} />,
    <Contact key="contact" />,
  ]

  return (
    <div ref={containerRef} className="w-full h-screen overflow-hidden bg-cosmic-dark relative">
      {/* 3D Canvas Background */}
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <SpaceBackground mouseX={mouseX} mouseY={mouseY} />
      </Canvas>

      {/* Custom Cursor */}
      <CustomCursor x={mouseX} y={mouseY} />

      {/* Scan Line Effect */}
      <div className="scan-line"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full overflow-hidden">
        <div className="section-enter">
          {sections[currentSection]}
        </div>
      </div>

      {/* HUD Bottom Panel */}
      <HUDBottomPanel
        currentSection={currentSection}
        soundEnabled={soundEnabled}
        onSoundToggle={() => {
          setSoundEnabled(!soundEnabled)
          playSound('toggle')
        }}
        onSectionChange={setCurrentSection}
      />
    </div>
  )
}

export default App
