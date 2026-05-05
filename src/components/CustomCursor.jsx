import React, { useEffect, useState } from 'react'

const CustomCursor = ({ x, y }) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => setIsActive(false)

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div
      className={`custom-cursor ${isActive ? 'active' : ''}`}
      style={{
        left: `${x - 10}px`,
        top: `${y - 10}px`,
      }}
    />
  )
}

export default CustomCursor
