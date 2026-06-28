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
        display: ['var(--font-regalia)', 'Georgia', 'serif'],
        body: ['var(--font-candara)', 'system-ui', 'sans-serif'],
        subtitle: ['var(--font-jedira)', 'Georgia', 'serif'],
      },
      colors: {
        // Light theme — inverted contrast
        ink: '#FFFFFF', // main background (pure white)
        card: '#F9FBF9', // secondary surfaces
        rim: '#E2E8F0', // borders / dividers
        cream: '#1F3E37', // primary text (deep petrol green)
        stone: '#2D544B', // secondary text
        gold: '#5EBF9E', // accents / highlights (mint green)
        winter: '#1F3E37',
        summer: '#5EBF9E',
        autumn: '#F3A3B7',
        spring: '#D8E090',
      },
    },
  },
  plugins: [],
}

export default config
