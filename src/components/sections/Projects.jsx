import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = ({ playSound }) => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'AI Chatbot UI Clone',
      emoji: '🚀',
      description: 'A sleek, modern chatbot interface inspired by leading AI platforms with real-time message streaming and elegant animations.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      color: '#00eaff',
      features: ['Real-time streaming', 'Message history', 'Responsive design'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      id: 2,
      title: 'AgentX - AI Assistant',
      emoji: '🤖',
      description: 'A comprehensive AI assistant project with advanced features for task automation and intelligent responses.',
      tech: ['React', 'JavaScript', 'APIs'],
      color: '#7a5cff',
      features: ['Task automation', 'Smart responses', 'Custom workflows'],
      links: {
        demo: '#',
        github: 'https://github.com/Topqonbayev-Umurzoq',
      },
    },
    {
      id: 3,
      title: 'Portfolio Generator',
      emoji: '🌐',
      description: 'Dynamic portfolio generator allowing users to create stunning portfolios with cosmic-themed designs.',
      tech: ['React', 'Three.js', 'GSAP'],
      color: '#ff006e',
      features: ['Custom themes', '3D effects', 'Export options'],
      links: {
        demo: '#',
        github: 'https://github.com/Topqonbayev-Umurzoq',
      },
    },
    {
      id: 4,
      title: 'Mini Space Game',
      emoji: '🎮',
      description: 'An interactive space shooter game featuring asteroid destruction, power-ups, and immersive gameplay mechanics.',
      tech: ['Three.js', 'JavaScript', 'WebGL'],
      color: '#00d4ff',
      features: ['3D graphics', 'Physics', 'Score tracking'],
      links: {
        demo: '#',
        github: 'https://github.com/Topqonbayev-Umurzoq',
      },
    },
  ]

  return (
    <div className="content-container">
      <div className="space-y-12 max-w-6xl w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-6xl font-black uppercase glow-text mb-4">PROJECT VAULT</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cosmic-blue"></div>
            <span className="text-cosmic-purple">[ COMPLETED MISSIONS ]</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cosmic-blue"></div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="cursor-pointer"
              onClick={() => {
                setSelectedProject(project)
                playSound('click')
              }}
            >
              <motion.div
                className="glass-intense p-8 h-full flex flex-col gap-4 group relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 30px ${project.color}80`,
                }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10"
                  style={{ background: project.color }}
                  animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                />

                {/* Project Icon */}
                <motion.div
                  className="text-5xl relative z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                >
                  {project.emoji}
                </motion.div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold uppercase text-cosmic-blue relative z-10 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-cosmic-blue/70 flex-grow relative z-10">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono uppercase bg-cosmic-blue/10 border border-cosmic-blue/30 rounded-full text-cosmic-purple"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  className="text-sm font-bold text-cosmic-blue uppercase tracking-wider relative z-10 mt-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Click to explore →
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            playSound={playSound}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

const ProjectDetailModal = ({ project, onClose, playSound }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => {
        onClose()
        playSound('click')
      }}
    >
      <motion.div
        className="glass-intense p-12 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{project.emoji}</span>
            <h2 className="text-4xl font-black uppercase text-cosmic-blue">{project.title}</h2>
          </div>
          <button
            onClick={() => {
              onClose()
              playSound('click')
            }}
            className="text-2xl text-cosmic-purple hover:text-cosmic-blue transition-colors"
          >
            ✕
          </button>
        </div>

        <p className="text-cosmic-blue/80 mb-8 leading-relaxed">{project.description}</p>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-cosmic-blue uppercase mb-4">Features</h3>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-cosmic-blue/70">
                <span className="w-2 h-2 bg-cosmic-blue rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-cosmic-blue uppercase mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-cosmic-blue/10 border border-cosmic-blue/30 rounded-lg text-cosmic-purple font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <motion.a
            href={project.links.demo}
            className="flex-1 btn-cosmic text-center py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Demo
          </motion.a>
          <motion.a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-outline text-center py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Code
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Projects
