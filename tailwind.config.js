/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: '#05070d',
          blue: '#00eaff',
          purple: '#7a5cff',
          glow: '#00d4ff',
          accent: '#ff006e'
        }
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 234, 255, 0.5), 0 0 40px rgba(0, 234, 255, 0.3)',
        'neon-purple': '0 0 20px rgba(122, 92, 255, 0.5), 0 0 40px rgba(122, 92, 255, 0.3)',
        'glow': '0 0 30px rgba(0, 212, 255, 0.6)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Courier Prime', 'monospace']
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        spin_slow: 'spin 20s linear infinite',
        scan: 'scan 3s linear infinite'
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 234, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 234, 255, 0.8)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' }
        }
      }
    },
  },
  plugins: [],
}
