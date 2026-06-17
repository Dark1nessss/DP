import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-lato)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#060e09',
        card: '#0c1a12',
        rim: '#1a3324',
        cream: '#e8e0d4',
        stone: '#7a9080',
        gold: '#c9a86c',
        winter: '#2f7f5b',
        summer: '#4db394',
        autumn: '#f9aeb7',
        spring: '#ebeca0',
      },
    },
  },
  plugins: [],
}

export default config
