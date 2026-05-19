import React from 'react'
import { motion } from 'framer-motion'

const HUDBottomPanel = ({ currentSection, soundEnabled, onSoundToggle, onSectionChange }) => {
  const sectionNames = ['HERO', 'ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT']
  const energyPercent = ((currentSection + 1) / 5) * 100

  return (
    <motion.div
      className="hud-bottom"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hud-panel">
        <div className="status-indicator">
          <div className="status-dot"></div>
          <span>STATUS: ONLINE</span>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-cosmic-purple">Energy Core</span>
            <div className="energy-bar">
              <motion.div
                className="energy-fill"
                initial={{ width: '0%' }}
                animate={{ width: `${energyPercent}%` }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wide text-cosmic-purple">Sector</span>
            <span className="text-sm font-bold text-cosmic-blue">
              {sectionNames[currentSection]}
            </span>
          </div>
        </div>
      </div>

      <div className="hud-panel">
        <div className="radar"></div>

        <div className="flex gap-3">
          <button
            className="btn-outline text-xs px-3 py-1"
            onClick={() => onSectionChange(Math.max(currentSection - 1, 0))}
          >
            ← PREV
          </button>

          <button
            className="btn-outline text-xs px-3 py-1"
            onClick={() => onSectionChange(Math.min(currentSection + 1, 4))}
          >
            NEXT →
          </button>

          <button
            className={`btn-outline text-xs px-3 py-1 ${soundEnabled ? 'bg-cosmic-blue/20' : ''}`}
            onClick={onSoundToggle}
            title={soundEnabled ? 'Sound ON' : 'Sound OFF'}
          >
            {soundEnabled ? '🔊' : '🔇'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default HUDBottomPanel
