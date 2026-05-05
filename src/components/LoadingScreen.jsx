import React, { useEffect, useState } from 'react'

const LoadingScreen = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'INITIALIZING SYSTEM... LOADING COSMIC EXPERIENCE'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loading-screen">
      <div className="loading-text">{displayText}</div>
      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
      <div className="mt-8 flex gap-2">
        <div className="w-2 h-2 bg-cosmic-blue rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-cosmic-purple rounded-full animate-pulse delay-100"></div>
        <div className="w-2 h-2 bg-cosmic-blue rounded-full animate-pulse delay-200"></div>
      </div>
    </div>
  )
}

export default LoadingScreen
