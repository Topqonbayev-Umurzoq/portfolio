import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: '🔷', color: '#ff6b35' },
    { name: 'CSS3', icon: '🔷', color: '#00bfff' },
    { name: 'JavaScript', icon: '⭐', color: '#ffd700' },
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'Tailwind CSS', icon: '💨', color: '#00d4ff' },
    { name: 'Three.js', icon: '🎆', color: '#7a5cff' },
    { name: 'GSAP', icon: '✨', color: '#88ce02' },
    { name: 'Git', icon: '🌳', color: '#f1502f' },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  }

  return (
    <div className="content-container">
      <div className="space-y-16 max-w-6xl w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-6xl font-black uppercase glow-text mb-4">TECH ARSENAL</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cosmic-blue"></div>
            <span className="text-cosmic-purple">[ EQUIPPED TECHNOLOGIES ]</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cosmic-blue"></div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-intense p-6 flex flex-col items-center justify-center gap-4 cursor-pointer group relative overflow-hidden"
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 30px rgba(0, 234, 255, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glowing background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cosmic-blue/0 to-cosmic-purple/0 group-hover:from-cosmic-blue/10 group-hover:to-cosmic-purple/10"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Icon */}
              <motion.div
                className="text-5xl relative z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                {skill.icon}
              </motion.div>

              {/* Name */}
              <span className="text-center font-bold text-cosmic-blue uppercase tracking-wider relative z-10 text-sm">
                {skill.name}
              </span>

              {/* Floating particles on hover */}
              <motion.div
                className="absolute w-2 h-2 bg-cosmic-blue rounded-full"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[
            {
              title: 'Frontend',
              skills: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
            },
            {
              title: '3D & Graphics',
              skills: ['Three.js', 'WebGL', 'GSAP', 'Canvas API'],
            },
            {
              title: 'Tools & Workflow',
              skills: ['Git', 'Vite', 'VS Code', 'npm/yarn'],
            },
          ].map((category, i) => (
            <motion.div
              key={i}
              className="glass-intense p-8"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-cosmic-blue mb-6 uppercase">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, j) => (
                  <motion.li
                    key={j}
                    className="flex items-center gap-3 text-cosmic-blue/80"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-cosmic-blue rounded-full"></span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating background elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 border border-cosmic-${i % 2 === 0 ? 'blue' : 'purple'}/10 rounded-full pointer-events-none`}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: 360,
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills
