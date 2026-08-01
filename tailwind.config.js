/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#080B10',
          slate: '#0F172A',
          card: 'rgba(15, 23, 42, 0.70)',
          border: 'rgba(255, 255, 255, 0.12)',
        },
        text: {
          white: '#FFFFFF',
          silver: '#CBD5E1',
          muted: '#94A3B8',
          dark: '#64748B',
        },
        amber: {
          accent: '#F59E0B',
          light: '#FBBF24',
        },
        emerald: {
          accent: '#10B981',
          light: '#34D399',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
