import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const timeline = [
  { year: '2025', label: 'Started\nCoding', color: '#00ffff' },
  { year: 'NOW', label: 'Growing\nDeveloper', color: '#00ffff', pulse: true },
  { year: '∞', label: 'Elite\nEngineer', color: '#a855f7', dim: true },
]

export default function Hero({ onNavigate }) {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', zIndex: 10, padding: '80px 20px 40px',
      textAlign: 'center',
    }}>
      {/* Glitch title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      >
        <div style={{
          fontSize: 'clamp(12px, 2vw, 16px)',
          color: 'rgba(0,255,255,0.6)',
          letterSpacing: 8,
          textTransform: 'uppercase',
          marginBottom: 24,
        }}>
          [ INITIATING SEQUENCE... ]
        </div>

        <h1 style={{
          fontSize: 'clamp(36px, 7vw, 96px)',
          letterSpacing: 'clamp(4px, 1vw, 12px)',
          textTransform: 'uppercase',
          fontWeight: 'normal',
          lineHeight: 1.05,
          color: '#fff',
        }}>
          UMURZOQ
        </h1>
        <h1 style={{
          fontSize: 'clamp(36px, 7vw, 96px)',
          letterSpacing: 'clamp(4px, 1vw, 12px)',
          textTransform: 'uppercase',
          fontWeight: 'normal',
          lineHeight: 1.05,
          color: '#00ffff',
          textShadow: '0 0 40px #00ffff, 0 0 80px rgba(0,255,255,0.4)',
        }}>
          TOPQONBAYEV
        </h1>

        <div style={{
          marginTop: 20,
          color: 'rgba(255,255,255,0.4)',
          fontSize: 'clamp(10px, 1.5vw, 13px)',
          letterSpacing: 6,
          textTransform: 'uppercase',
        }}>
          Frontend Developer · Futurist · Creator
        </div>
      </motion.div>

      {/* Mission box */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{
          marginTop: 48,
          border: '1px solid rgba(0,255,255,0.3)',
          padding: '20px 48px',
          position: 'relative',
          maxWidth: 600,
        }}
      >
        <div style={{
          position: 'absolute', top: -9, left: '50%',
          transform: 'translateX(-50%)',
          background: '#000008',
          padding: '0 16px',
          color: '#00ffff',
          fontSize: 10,
          letterSpacing: 4,
        }}>
          MISSION
        </div>
        <div style={{
          color: 'rgba(0,255,255,0.7)',
          fontSize: 13,
          letterSpacing: 3,
          lineHeight: 1.8,
        }}>
          Become a high-level futuristic developer.
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          marginTop: 64,
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          gap: 0,
        }}
      >
        {/* Line */}
        <div style={{
          position: 'absolute',
          top: '30px',
          left: '10%', right: '10%',
          height: 1,
          background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
        }} />

        {timeline.map((t, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            padding: '0 40px', position: 'relative', gap: 12,
          }}>
            <div style={{
              color: t.color,
              fontSize: 11,
              letterSpacing: 3,
              opacity: t.dim ? 0.4 : 1,
            }}>
              {t.year}
            </div>
            <div style={{
              width: 14, height: 14,
              border: `2px solid ${t.color}`,
              borderRadius: '50%',
              background: '#000008',
              zIndex: 1,
              boxShadow: t.pulse
                ? `0 0 20px ${t.color}, 0 0 40px ${t.color}`
                : `0 0 10px ${t.color}`,
              opacity: t.dim ? 0.4 : 1,
              animation: t.pulse ? 'pulse-glow 2s ease-in-out infinite' : 'none',
            }} />
            <div style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: 10,
              letterSpacing: 1,
              textAlign: 'center',
              whiteSpace: 'pre-line',
              opacity: t.dim ? 0.4 : 1,
            }}>
              {t.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ marginTop: 64, display: 'flex', gap: 20 }}
      >
        <button
          data-hover
          onClick={() => onNavigate('about')}
          style={{
            background: 'transparent',
            border: '1px solid #00ffff',
            color: '#00ffff',
            padding: '14px 40px',
            fontSize: 11,
            letterSpacing: 4,
            cursor: 'pointer',
            textTransform: 'uppercase',
            fontFamily: 'Courier New, monospace',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => e.target.style.background = 'rgba(0,255,255,0.08)'}
          onMouseLeave={e => e.target.style.background = 'transparent'}
        >
          Enter Portfolio
        </button>
        <button
          data-hover
          onClick={() => onNavigate('contact')}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.5)',
            padding: '14px 40px',
            fontSize: 11,
            letterSpacing: 4,
            cursor: 'pointer',
            textTransform: 'uppercase',
            fontFamily: 'Courier New, monospace',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.target.style.borderColor = 'rgba(255,255,255,0.5)'; e.target.style.color = '#fff' }}
          onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.2)'; e.target.style.color = 'rgba(255,255,255,0.5)' }}
        >
          Contact Me
        </button>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute', bottom: 32, left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.2)',
          fontSize: 10, letterSpacing: 4, textTransform: 'uppercase',
          animation: 'float 2s ease-in-out infinite',
        }}
      >
        ↓ Scroll to explore
      </motion.div>
    </section>
  )
}
