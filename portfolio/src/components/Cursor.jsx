import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  let mouseX = 0, mouseY = 0
  let curX = 0, curY = 0

  useEffect(() => {
    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px'
        dotRef.current.style.top = mouseY + 'px'
      }
    }

    const animate = () => {
      curX += (mouseX - curX) * 0.12
      curY += (mouseY - curY) * 0.12
      if (cursorRef.current) {
        cursorRef.current.style.left = curX + 'px'
        cursorRef.current.style.top = curY + 'px'
      }
      requestAnimationFrame(animate)
    }
    animate()

    const onEnter = () => cursorRef.current?.classList.add('hover')
    const onLeave = () => cursorRef.current?.classList.remove('hover')

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('button, a, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-dot" ref={dotRef} />
    </>
  )
}
