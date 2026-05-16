import { motion } from 'framer-motion'

const cards = [
  { icon: '🌐', title: 'Identity', color: '#00ffff', desc: 'Umurzoq Topqonbayev — frontend developer on a mission to build the future of the web. Based in Uzbekistan, thinking globally.' },
  { icon: '🚀', title: 'Journey', color: '#a855f7', desc: 'Started coding in 2025. Growing fast with modern frameworks, cinematic UI design, and futuristic thinking.' },
  { icon: '⚡', title: 'Mission', color: '#f59e0b', desc: 'Become a high-level futuristic developer. Build immersive, cinematic digital experiences that leave people in awe.' },
  { icon: '🎯', title: 'Goals', color: '#10b981', desc: 'Master React, Three.js, GSAP. Create an unforgettable portfolio. Launch real products. Level up every single day.' },
]

export default function About() {
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
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: 60 }}
      >
        <div style={{ color: 'rgba(0,255,255,0.5)', fontSize: 11, letterSpacing: 6, marginBottom: 12 }}>
          SYSTEM LOG
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: 8, textTransform: 'uppercase', fontWeight: 'normal', color: '#fff' }}>
          About
        </h2>
        <div style={{ width: 60, height: 1, background: '#00ffff', margin: '16px auto 0', boxShadow: '0 0 10px #00ffff' }} />
      </motion.div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 20, maxWidth: 800, width: '100%',
      }}>
        {cards.map((c, i) => (
          <motion.div
            key={i}
            className="holo-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            style={{ padding: 28, cursor: 'default' }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div style={{ fontSize: 28, marginBottom: 14 }}>{c.icon}</div>
            <div style={{
              color: c.color, fontSize: 11, letterSpacing: 4,
              textTransform: 'uppercase', marginBottom: 12,
              textShadow: `0 0 15px ${c.color}`,
            }}>
              {c.title}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, lineHeight: 1.8, letterSpacing: 1 }}>
              {c.desc}
            </div>
            <div style={{
              marginTop: 20, color: c.color, fontSize: 11,
              letterSpacing: 3, opacity: 0.6,
            }}>
              → Active
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
