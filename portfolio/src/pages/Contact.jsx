import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const contacts = [
  { icon: '✉', platform: 'Email', handle: 'Umurzoquz08@gmail.com', href: 'mailto:Umurzoquz08@gmail.com', color: '#00ffff' },
  { icon: '⌥', platform: 'GitHub', handle: 'Topqonbayev-Umurzoq', href: 'https://github.com/Topqonbayev-Umurzoq', color: '#aaaaaa' },
  { icon: '◈', platform: 'Telegram', handle: '@TOPQONBAYEV_UMURZOQ', href: 'https://t.me/TOPQONBAYEV_UMURZOQ', color: '#29b6f6' },
  { icon: '◉', platform: 'Instagram', handle: '@TOPQONBAYEV_UMURZOQ', href: 'https://instagram.com/TOPQONBAYEV_UMURZOQ', color: '#e91e63' },
  { icon: '▶', platform: 'YouTube', handle: '@Umurzoq_uz', href: 'https://youtube.com/@Umurzoq_uz', color: '#ff3d00', full: true },
]

function Radar() {
  const canvasRef = useRef(null)
  const angleRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const blips = [
      { x: 110, y: 90, size: 3 },
      { x: 70, y: 130, size: 2 },
      { x: 140, y: 140, size: 2.5 },
      { x: 90, y: 70, size: 2 },
      { x: 130, y: 70, size: 2 },
    ]

    function draw() {
      ctx.fillStyle = 'rgba(0,0,8,0.25)'
      ctx.fillRect(0, 0, 200, 200)
      const cx = 100, cy = 100

      // Grid rings
      [25, 50, 75, 95].forEach(r => {
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(0,255,255,0.15)'
        ctx.lineWidth = 0.5
        ctx.stroke()
      })

      // Cross lines
      ctx.beginPath()
      ctx.moveTo(5, cy); ctx.lineTo(195, cy)
      ctx.moveTo(cx, 5); ctx.lineTo(cx, 195)
      ctx.strokeStyle = 'rgba(0,255,255,0.1)'
      ctx.lineWidth = 0.5
      ctx.stroke()

      // Blips
      blips.forEach(b => {
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,255,100,0.9)'
        ctx.fill()
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.size + 3, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(0,255,100,0.3)'
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Sweep
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(angleRef.current)

      const sweepGrad = ctx.createConicalGradient
        ? null : (() => {
          // Fake conical with multiple lines
          for (let a = 0; a > -Math.PI * 1.5; a -= 0.05) {
            ctx.beginPath()
            ctx.moveTo(0, 0)
            ctx.lineTo(Math.cos(a) * 95, Math.sin(a) * 95)
            ctx.strokeStyle = `rgba(0,255,255,${Math.max(0, 0.12 + a / (Math.PI * 1.5) * 0.12)})`
            ctx.lineWidth = 2
            ctx.stroke()
          }
        })()

      if (!ctx.createConicalGradient) sweepGrad?.()

      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(95, 0)
      ctx.strokeStyle = 'rgba(0,255,255,0.9)'
      ctx.lineWidth = 1.5
      ctx.stroke()
      ctx.restore()

      angleRef.current += 0.025
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={200}
      style={{ border: '1px solid rgba(0,255,255,0.2)', borderRadius: '50%' }}
    />
  )
}

export default function Contact() {
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
        style={{ textAlign: 'center', marginBottom: 48 }}
      >
        <div style={{ color: 'rgba(0,255,255,0.5)', fontSize: 11, letterSpacing: 6, marginBottom: 12 }}>
          ORBITAL STATION
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: 8, textTransform: 'uppercase', fontWeight: 'normal', color: '#fff' }}>
          Contact
        </h2>
        <div style={{ width: 60, height: 1, background: '#00ffff', margin: '16px auto 0', boxShadow: '0 0 10px #00ffff' }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ marginBottom: 40 }}
      >
        <Radar />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 12,
          maxWidth: 600,
          width: '100%',
        }}
      >
        {contacts.map((c, i) => (
          <motion.a
            key={i}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ x: 6, transition: { duration: 0.2 } }}
            style={{
              display: 'flex', alignItems: 'center', gap: 16,
              background: '#050510',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '16px 20px',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'border-color 0.3s, box-shadow 0.3s',
              gridColumn: c.full ? '1 / -1' : 'auto',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = c.color
              e.currentTarget.style.boxShadow = `0 0 20px ${c.color}33`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ fontSize: 22, color: c.color, minWidth: 28 }}>{c.icon}</div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 4 }}>
                {c.platform}
              </div>
              <div style={{ color: '#fff', fontSize: 12, letterSpacing: 1 }}>
                {c.handle}
              </div>
            </div>
            <div style={{ marginLeft: 'auto', color: c.color, fontSize: 12, opacity: 0.5 }}>→</div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
