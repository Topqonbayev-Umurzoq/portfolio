import { useRef, useCallback } from 'react'

export function useSound() {
  const ctxRef = useRef(null)

  const getCtx = () => {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }
    return ctxRef.current
  }

  const playTone = useCallback((freq, dur = 0.1, type = 'sine', vol = 0.05) => {
    try {
      const ctx = getCtx()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = type
      osc.frequency.setValueAtTime(freq, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, ctx.currentTime + dur)
      gain.gain.setValueAtTime(vol, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + dur)
    } catch (e) {}
  }, [])

  const playHover = useCallback(() => playTone(880, 0.05, 'sine', 0.03), [playTone])
  const playClick = useCallback(() => playTone(440, 0.15, 'square', 0.05), [playTone])
  const playSupernova = useCallback(() => {
    try {
      const ctx = getCtx()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.frequency.setValueAtTime(1200, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.8)
      gain.gain.setValueAtTime(0.2, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.8)
    } catch (e) {}
  }, [])

  const startAmbient = useCallback(() => {
    try {
      const ctx = getCtx()
      const playAmb = () => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.value = 40 + Math.random() * 30
        gain.gain.setValueAtTime(0, ctx.currentTime)
        gain.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 1)
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 4)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start()
        osc.stop(ctx.currentTime + 4)
        osc.onended = () => setTimeout(playAmb, 1000 + Math.random() * 3000)
      }
      playAmb()
    } catch (e) {}
  }, [])

  return { playHover, playClick, playSupernova, startAmbient }
}
