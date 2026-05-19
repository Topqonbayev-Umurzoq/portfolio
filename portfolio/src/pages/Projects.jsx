import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    emoji: '🚀',
    title: 'AI Chatbot UI Clone',
    desc: 'Futuristic chat interface with AI-powered responses, real-time streaming, smooth animations and holographic design system.',
    tech: ['React', 'TailwindCSS', 'Framer Motion', 'OpenAI API'],
    color: '#00ffff',
    demo: '#',
    github: 'https://github.com/Topqonbayev-Umurzoq',
  },
  {
    emoji: '🤖',
    title: 'AgentX — AI Assistant',
    desc: 'Next-gen AI assistant with voice input, conversation memory, task execution, and a cinematic holographic UI.',
    tech: ['React', 'GSAP', 'Three.js', 'AI APIs'],
    color: '#a855f7',
    demo: '#',
    github: 'https://github.com/Topqonbayev-Umurzoq',
  },
  {
    emoji: '🌐',
    title: 'Portfolio Generator',
    desc: 'Auto-generate beautiful futuristic portfolios from a simple JSON config. Deploy in seconds.',
    tech: ['Vite', 'React', 'Three.js', 'CSS'],
    color: '#f59e0b',
    demo: '#',
    github: 'https://github.com/Topqonbayev-Umurzoq',
  },
  {
    emoji: '🎮',
    title: 'Mini Space Game',
    desc: 'Retro-futuristic space shooter with procedural asteroids, power-ups, and a global leaderboard.',
    tech: ['Canvas API', 'JavaScript', 'CSS', 'LocalStorage'],
    color: '#10b981',
    demo: '#',
    github: 'https://github.com/Topqonbayev-Umurzoq',
  },
]

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,8,0.92)',
            zIndex: 800, display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(8px)',
          }}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
            onClick={e => e.stopPropagation()}
            style={{
              background: '#050510',
              border: `1px solid ${project.color}`,
              boxShadow: `0 0 60px ${project.color}33`,
              padding: 48,
              maxWidth: 540,
              width: '90vw',
              position: 'relative',
            }}
          >
            {/* Corner decorations */}
            {['top:0;left:0', 'top:0;right:0', 'bottom:0;left:0', 'bottom:0;right:0'].map((pos, i) => (
              <div key={i} style={{
                position: 'absolute',
                ...Object.fromEntries(pos.split(';').map(p => p.split(':'))),
                width: 20, height: 20,
                borderTop: i < 2 ? `2px solid ${project.color}` : 'none',
                borderBottom: i >= 2 ? `2px solid ${project.color}` : 'none',
                borderLeft: i % 2 === 0 ? `2px solid ${project.color}` : 'none',
                borderRight: i % 2 === 1 ? `2px solid ${project.color}` : 'none',
              }} />
            ))}

            <div style={{ fontSize: 40, marginBottom: 20 }}>{project.emoji}</div>
            <h3 style={{
              color: project.color, fontSize: 16, letterSpacing: 4,
              textTransform: 'uppercase', marginBottom: 20,
              textShadow: `0 0 20px ${project.color}`,
            }}>
              {project.title}
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.9, marginBottom: 28 }}>
              {project.desc}
            </p>

            <div style={{ marginBottom: 28 }}>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10, letterSpacing: 4, marginBottom: 10 }}>
                TECHNOLOGIES
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{
                    background: project.color + '15',
                    border: `1px solid ${project.color}44`,
                    color: project.color,
                    fontSize: 10, letterSpacing: 2,
                    padding: '4px 12px',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <a href={project.demo} target="_blank" rel="noreferrer" style={{
                flex: 1, textAlign: 'center',
                background: project.color + '15',
                border: `1px solid ${project.color}`,
                color: project.color,
                fontSize: 10, letterSpacing: 3,
                padding: '12px 0',
                textDecoration: 'none', textTransform: 'uppercase',
                transition: 'all 0.3s',
              }}>
                Live Demo →
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" style={{
                flex: 1, textAlign: 'center',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.5)',
                fontSize: 10, letterSpacing: 3,
                padding: '12px 0',
                textDecoration: 'none', textTransform: 'uppercase',
                transition: 'all 0.3s',
              }}>
                GitHub →
              </a>
            </div>

            <button
              onClick={onClose}
              style={{
                position: 'absolute', top: 16, right: 16,
                background: 'transparent', border: 'none',
                color: 'rgba(255,255,255,0.3)', fontSize: 20, cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '100px 40px 60px', position: 'relative', zIndex: 10,
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: 60 }}
      >
        <div style={{ color: 'rgba(168,85,247,0.6)', fontSize: 11, letterSpacing: 6, marginBottom: 12 }}>
          CYBERPUNK WORLD
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: 8, textTransform: 'uppercase', fontWeight: 'normal', color: '#fff' }}>
          Projects
        </h2>
        <div style={{ width: 60, height: 1, background: '#a855f7', margin: '16px auto 0', boxShadow: '0 0 10px #a855f7' }} />
      </motion.div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 20, maxWidth: 800, width: '100%',
      }}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="proj-card"
            onClick={() => setSelected(p)}
            style={{
              background: '#0a0a1a',
              border: `1px solid rgba(255,255,255,0.1)`,
              padding: 28,
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 14 }}>{p.emoji}</div>
            <div style={{
              color: p.color, fontSize: 11, letterSpacing: 4,
              textTransform: 'uppercase', marginBottom: 10,
            }}>
              {p.title}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, lineHeight: 1.7, marginBottom: 16 }}>
              {p.desc.slice(0, 80)}...
            </div>

            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
              {p.tech.slice(0, 3).map((t, j) => (
                <span key={j} style={{
                  background: p.color + '15',
                  border: `1px solid ${p.color}33`,
                  color: p.color,
                  fontSize: 9, letterSpacing: 2, padding: '3px 10px',
                }}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{
              color: p.color, fontSize: 10, letterSpacing: 3,
              borderTop: `1px solid rgba(255,255,255,0.08)`, paddingTop: 16,
            }}>
              → Click to explore
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
