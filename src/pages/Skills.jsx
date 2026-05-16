import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML', color: '#e34c26' },
  { name: 'CSS', color: '#264de4' },
  { name: 'JavaScript', color: '#f0db4f' },
  { name: 'React', color: '#61dafb' },
  { name: 'Tailwind', color: '#38bdf8' },
  { name: 'Git', color: '#f05032' },
]

export default function Skills() {
  const canvasRef = useRef(null)
  const angleRef = useRef(0)
  const animRef = useRef(null)
  const mouseRef = useRef({ x: 200, y: 200 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }
    canvas.addEventListener('mousemove', onMouse)

    function draw() {
      ctx.clearRect(0, 0, 400, 400)
      const cx = 200, cy = 200
      const mx = mouseRef.current.x, my = mouseRef.current.y
      const dx = (mx - cx) * 0.008, dy = (my - cy) * 0.008

      // Energy rings
      [60, 100, 130, 160].forEach((r, i) => {
        ctx.beginPath()
        ctx.ellipse(cx + dx, cy + dy, r, r * 0.3, angleRef.current * 0.2, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0,255,255,${0.04 + i * 0.02})`
        ctx.lineWidth = i % 2 === 0 ? 1 : 0.5
        ctx.stroke()
      })

      // Data streams
      for (let i = 0; i < 3; i++) {
        const a = angleRef.current * 2 + i * (Math.PI * 2 / 3)
        const x1 = cx + Math.cos(a) * 20
        const y1 = cy + Math.sin(a) * 20
        const x2 = cx + Math.cos(a) * 150
        const y2 = cy + Math.sin(a) * 80
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = 'rgba(0,255,255,0.06)'
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Center glow
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60)
      grad.addColorStop(0, 'rgba(0,255,255,0.2)')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(cx, cy, 60, 0, Math.PI * 2)
      ctx.fill()

      // Particles
      for (let p = 0; p < 8; p++) {
        const pa = angleRef.current * 3 + p * (Math.PI * 2 / 8)
        const pr = 30 + Math.sin(angleRef.current * 4 + p) * 10
        const px = cx + Math.cos(pa) * pr
        const py = cy + Math.sin(pa) * pr * 0.4
        ctx.beginPath()
        ctx.arc(px, py, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,255,255,0.6)'
        ctx.fill()
      }

      // Floating skill nodes
      skills.forEach((sk, i) => {
        const a = angleRef.current + i * (Math.PI * 2 / skills.length)
        const rx = 130 + Math.sin(angleRef.current * 2 + i) * 15
        const ry = 50 + Math.sin(angleRef.current * 1.5 + i) * 8
        const x = cx + Math.cos(a) * rx + dx * 5
        const y = cy + Math.sin(a) * ry + dy * 5

        // Glow connection line
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(x, y)
        ctx.strokeStyle = sk.color + '22'
        ctx.lineWidth = 0.5
        ctx.stroke()

        // Node background
        ctx.beginPath()
        ctx.arc(x, y, 28, 0, Math.PI * 2)
        ctx.fillStyle = sk.color + '22'
        ctx.fill()

        // Node border with glow
        ctx.beginPath()
        ctx.arc(x, y, 28, 0, Math.PI * 2)
        ctx.strokeStyle = sk.color
        ctx.lineWidth = 1
        ctx.shadowColor = sk.color
        ctx.shadowBlur = 10
        ctx.stroke()
        ctx.shadowBlur = 0

        // Label
        ctx.fillStyle = sk.color
        ctx.font = 'bold 9px Courier New'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(sk.name, x, y)
      })

      angleRef.current += 0.006
      animRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      canvas.removeEventListener('mousemove', onMouse)
    }
  }, [])

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
        <div style={{ color: 'rgba(0,255,255,0.5)', fontSize: 11, letterSpacing: 6, marginBottom: 12 }}>
          TECH ARSENAL
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 56px)', letterSpacing: 8, textTransform: 'uppercase', fontWeight: 'normal', color: '#fff' }}>
          Skills Planet
        </h2>
        <div style={{ width: 60, height: 1, background: '#00ffff', margin: '16px auto 0', boxShadow: '0 0 10px #00ffff' }} />
      </motion.div>

      {/* Orbit Canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', width: 400, height: 400 }}
      >
        <canvas ref={canvasRef} width={400} height={400} />

        {/* Center core */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 70, height: 70,
          border: '2px solid #00ffff',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#00ffff', fontSize: 10, letterSpacing: 2, textAlign: 'center',
          background: '#000008',
          boxShadow: '0 0 30px rgba(0,255,255,0.4), inset 0 0 20px rgba(0,255,255,0.1)',
          lineHeight: 1.4,
        }}>
          TECH<br/>CORE
        </div>
      </motion.div>

      {/* Skill legend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}
      >
        {skills.map((sk, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            color: 'rgba(255,255,255,0.4)', fontSize: 11, letterSpacing: 2,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: sk.color, boxShadow: `0 0 8px ${sk.color}` }} />
            {sk.name}
          </div>
        ))}
      </motion.div>
    </section>
  )
}
