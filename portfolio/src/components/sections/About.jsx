import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      '.timeline-item',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2 }
    )
  }, [])

  const timeline = [
    {
      year: '2025',
      title: 'Journey Begins',
      description: 'Started coding with passion and determination',
      icon: '🚀',
    },
    {
      year: '2025-2026',
      title: 'Foundation Building',
      description: 'Learning modern web technologies and best practices',
      icon: '📚',
    },
    {
      year: 'Present',
      title: 'Growing Developer',
      description: 'Creating innovative, interactive digital experiences',
      icon: '⭐',
    },
  ]

  return (
    <div className="content-container">
      <div className="space-y-12 max-w-4xl w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-6xl font-black uppercase glow-text mb-4">ABOUT MISSION</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cosmic-blue"></div>
            <span className="text-cosmic-purple">[ BIOGRAPHICAL DATA ]</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cosmic-blue"></div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="glass-intense p-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-lg text-cosmic-blue/80 font-light leading-relaxed">
            <span className="font-bold text-cosmic-blue">MISSION:</span> To become a high-level developer capable of
            creating cutting-edge, immersive digital experiences that inspire and transform.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item glass p-6 flex gap-6 cursor-pointer group"
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="text-3xl">{item.icon}</div>
                <div className="w-1 h-12 bg-gradient-to-b from-cosmic-blue to-cosmic-purple group-hover:h-16 transition-all"></div>
              </div>

              <div className="flex-grow py-2">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm font-mono uppercase text-cosmic-purple font-bold">{item.year}</span>
                  <h3 className="text-2xl font-bold text-cosmic-blue">{item.title}</h3>
                </div>
                <p className="text-cosmic-blue/70 leading-relaxed">{item.description}</p>
              </div>

              <motion.div
                className="w-12 h-12 border-2 border-cosmic-blue/30 rounded-full flex items-center justify-center group-hover:border-cosmic-blue text-cosmic-blue/30 group-hover:text-cosmic-blue transition-colors"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                →
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { label: 'Started', value: '2025', unit: '' },
            { label: 'Projects', value: '10+', unit: '' },
            { label: 'Focus', value: '100%', unit: '' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="glass-intense p-6 text-center"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 234, 255, 0.5)' }}
            >
              <div className="text-3xl font-black text-cosmic-blue mb-2">
                {stat.value}
                <span className="text-sm text-cosmic-purple">{stat.unit}</span>
              </div>
              <p className="text-sm uppercase tracking-widest text-cosmic-purple">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default About
