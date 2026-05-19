import { useEffect, useRef } from 'react'

export default function Starfield({ interactive = true }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight
    let mouseX = width / 2, mouseY = height / 2
    let animId

    // Stars
    const stars = Array.from({ length: 250 }, () => ({
      x: Math.random() * 2000 - 1000,
      y: Math.random() * 1200 - 600,
      z: Math.random() * 1000,
    }))

    // Shooting stars
    const shootingStars = []

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    const onMouse = (e) => { mouseX = e.clientX; mouseY = e.clientY }

    window.addEventListener('resize', onResize)
    if (interactive) window.addEventListener('mousemove', onMouse)

    // Click = supernova
    const onClick = (e) => {
      for (let i = 0; i < 30; i++) {
        shootingStars.push({
          x: e.clientX, y: e.clientY,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          life: 1, decay: 0.03 + Math.random() * 0.02,
          size: Math.random() * 3 + 1,
          color: Math.random() > 0.5 ? '#00ffff' : '#a855f7'
        })
      }
    }
    canvas.addEventListener('click', onClick)

    // Occasional auto-shooting star
    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width, y: 0,
        vx: (Math.random() - 0.5) * 3,
        vy: 2 + Math.random() * 3,
        life: 1, decay: 0.015,
        size: 1.5,
        color: '#ffffff',
        tail: true
      })
    }
    const shootInterval = setInterval(spawnShootingStar, 3000)

    function draw() {
      ctx.fillStyle = 'rgba(0,0,8,0.2)'
      ctx.fillRect(0, 0, width, height)

      const cx = width / 2 + (mouseX - width / 2) * 0.02
      const cy = height / 2 + (mouseY - height / 2) * 0.02

      stars.forEach(s => {
        s.z -= 1.5
        if (s.z <= 0) s.z = 1000

        const px = (s.x / s.z) * width + cx
        const py = (s.y / s.z) * height + cy
        const r = Math.max(0, (1 - s.z / 1000) * 2.5)
        const op = 1 - s.z / 1000

        if (px < 0 || px > width || py < 0 || py > height) return

        ctx.beginPath()
        ctx.arc(px, py, r, 0, Math.PI * 2)
        ctx.fillStyle = op > 0.7
          ? `rgba(0,255,255,${op * 0.8})`
          : `rgba(255,255,255,${op})`
        ctx.fill()
      })

      // Shooting stars / particles
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const p = shootingStars[i]
        p.x += p.vx; p.y += p.vy; p.life -= p.decay
        if (p.life <= 0) { shootingStars.splice(i, 1); continue }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.floor(p.life * 255).toString(16).padStart(2, '0')
        ctx.fill()
        if (p.tail) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p.x - p.vx * 6, p.y - p.vy * 6)
          ctx.strokeStyle = p.color + '44'
          ctx.lineWidth = p.size * 0.5
          ctx.stroke()
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      clearInterval(shootInterval)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouse)
      canvas.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'all', zIndex: 0
      }}
    />
  )
}
