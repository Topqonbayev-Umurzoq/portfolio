import { useCallback } from 'react'

export const useSoundManager = (enabled) => {
  const playSound = useCallback((soundType = 'default') => {
    if (!enabled) return

    // Create audio context for web audio API
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const now = audioContext.currentTime

      switch (soundType) {
        case 'hover':
          // High pitch beep
          const osc1 = audioContext.createOscillator()
          const gain1 = audioContext.createGain()
          osc1.connect(gain1)
          gain1.connect(audioContext.destination)
          osc1.frequency.value = 800
          gain1.gain.setValueAtTime(0.1, now)
          gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.1)
          osc1.start(now)
          osc1.stop(now + 0.1)
          break

        case 'click':
          // Medium pitch beep
          const osc2 = audioContext.createOscillator()
          const gain2 = audioContext.createGain()
          osc2.connect(gain2)
          gain2.connect(audioContext.destination)
          osc2.frequency.value = 600
          gain2.gain.setValueAtTime(0.15, now)
          gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.15)
          osc2.start(now)
          osc2.stop(now + 0.15)
          break

        case 'toggle':
          // Toggle sound (two quick beeps)
          const osc3 = audioContext.createOscillator()
          const gain3 = audioContext.createGain()
          osc3.connect(gain3)
          gain3.connect(audioContext.destination)
          osc3.frequency.value = 500
          gain3.gain.setValueAtTime(0.1, now)
          gain3.gain.exponentialRampToValueAtTime(0.01, now + 0.08)
          osc3.start(now)
          osc3.stop(now + 0.08)

          const osc4 = audioContext.createOscillator()
          const gain4 = audioContext.createGain()
          osc4.connect(gain4)
          gain4.connect(audioContext.destination)
          osc4.frequency.value = 700
          gain4.gain.setValueAtTime(0.1, now + 0.1)
          gain4.gain.exponentialRampToValueAtTime(0.01, now + 0.18)
          osc4.start(now + 0.1)
          osc4.stop(now + 0.18)
          break

        default:
          // Default beep
          const osc = audioContext.createOscillator()
          const gain = audioContext.createGain()
          osc.connect(gain)
          gain.connect(audioContext.destination)
          osc.frequency.value = 620
          gain.gain.setValueAtTime(0.1, now)
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1)
          osc.start(now)
          osc.stop(now + 0.1)
      }
    } catch (e) {
      console.log('Web Audio API not available')
    }
  }, [enabled])

  return { playSound }
}
