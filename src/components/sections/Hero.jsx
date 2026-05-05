import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const Hero = ({ onStart, playSound }) => {
  useEffect(() => {
    // Animate title on mount
    gsap.fromTo(
      '.hero-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    )

    gsap.fromTo(
      '.hero-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6 }
    )

    gsap.fromTo(
      '.hero-description',
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.9 }
    )

    gsap.fromTo(
      '.hero-button',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 1.2 }
    )
  }, [])

  return (
    <div className="content-container">
      {/* Main cockpit display */}
      <div className="flex flex-col items-center justify-center gap-8 max-w-4xl">
        {/* HUD Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" className="absolute">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00eaff" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Main Title */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="hero-title text-7xl md:text-8xl font-black uppercase tracking-tighter glow-text">
            Topqonbayev
          </h1>
          <h2 className="hero-title text-6xl md:text-7xl font-black uppercase tracking-tighter glow-purple mb-4">
            Umurzoq
          </h2>

          <div className="hero-subtitle space-y-2 mt-8">
            <p className="text-2xl font-bold text-cosmic-blue">Frontend Developer & 3D Web Engineer</p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-px bg-cosmic-blue"></div>
              <span className="text-sm uppercase tracking-widest text-cosmic-purple">Est. 2025</span>
              <div className="w-8 h-px bg-cosmic-blue"></div>
            </div>
          </div>
        </motion.div>

        {/* Description in mission style */}
        <motion.div
          className="hero-description glass-intense p-8 max-w-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm font-mono uppercase tracking-wider text-cosmic-blue mb-3">
            🎯 MISSION BRIEFING
          </p>
          <p className="text-lg leading-relaxed text-cosmic-blue/80">
            "Men 2025 yildan beri dasturlash bilan shug'ullanaman. Zamonaviy, kreativ va interaktiv
            loyihalar yaratishga intilaman."
          </p>
          <p className="text-sm font-mono text-cosmic-purple mt-4">
            Translating vision into immersive interactive experiences
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="hero-button btn-cosmic text-lg px-8 py-3 mt-4"
          onClick={() => {
            playSound('click')
            onStart()
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🚀 START MISSION
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest text-cosmic-purple">Scroll to explore</span>
          <svg className="w-6 h-6 text-cosmic-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>

      {/* Floating accent elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border-2 border-cosmic-purple/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute bottom-32 left-10 w-24 h-24 border-2 border-cosmic-blue/20 rounded-lg"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

export default Hero
