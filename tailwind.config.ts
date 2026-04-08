import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#00e5ff',
        dark: {
          DEFAULT: '#0d0d0d',
          card: '#141414',
          border: '#1f1f1f',
          subtle: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
