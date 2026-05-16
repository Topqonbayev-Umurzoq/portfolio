/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: { DEFAULT: '#00ffff' },
        purple: { neon: '#a855f7' },
        dark: { DEFAULT: '#000008', surface: '#050510', card: '#0a0a1a' }
      },
      fontFamily: {
        mono: ['"Courier New"', 'Courier', 'monospace'],
        display: ['"Courier New"', 'monospace']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'orbit': 'orbit 8s linear infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        'pulse-glow': { '0%,100%': { boxShadow: '0 0 10px #00ffff' }, '50%': { boxShadow: '0 0 30px #00ffff, 0 0 60px #00ffff' } },
        'rotate-slow': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        'orbit': { from: { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' }, to: { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' } }
      }
    }
  },
  plugins: []
}
