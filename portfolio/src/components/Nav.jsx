import { useState, useEffect } from 'react'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ activeSection, onNavigate, soundOn, onToggleSound }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 40px',
      borderBottom: scrolled ? '1px solid rgba(0,255,255,0.15)' : '1px solid transparent',
      background: scrolled ? 'rgba(0,0,8,0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.4s',
    }}>
      {/* Logo */}
      <div style={{
        color: '#00ffff', fontSize: 13, letterSpacing: 5,
        textTransform: 'uppercase', fontFamily: 'Courier New, monospace',
        textShadow: '0 0 20px #00ffff',
      }}>
        ⬡ UMURZOQ.DEV
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 32 }}>
        {links.map(l => (
          <span
            key={l.id}
            className="nav-link"
            data-hover
            style={{ color: activeSection === l.id ? '#00ffff' : 'rgba(255,255,255,0.45)' }}
            onClick={() => onNavigate(l.id)}
          >
            {l.label}
          </span>
        ))}
      </div>

      {/* Sound toggle */}
      <button
        data-hover
        onClick={onToggleSound}
        style={{
          background: 'transparent',
          border: `1px solid ${soundOn ? '#00ffff' : 'rgba(0,255,255,0.3)'}`,
          color: soundOn ? '#00ffff' : 'rgba(0,255,255,0.5)',
          padding: '6px 16px',
          fontSize: 10, letterSpacing: 3,
          cursor: 'pointer',
          textTransform: 'uppercase',
          fontFamily: 'Courier New, monospace',
          transition: 'all 0.3s',
          boxShadow: soundOn ? '0 0 15px rgba(0,255,255,0.3)' : 'none',
        }}
      >
        ⚡ SOUND: {soundOn ? 'ON' : 'OFF'}
      </button>
    </nav>
  )
}
