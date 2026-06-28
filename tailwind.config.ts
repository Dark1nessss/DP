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
        rim: '#D8E2DC', // borders / dividers
        cream: '#1F3E37', // primary text (deep petrol green)
        stone: '#2D544B', // secondary text
        gold: '#5EBF9E', // accents / highlights (mint green)
        brass: '#C9A227', // warm metallic accent for ornaments
        winter: '#1F3E37',
        summer: '#5EBF9E',
        autumn: '#F3A3B7',
        spring: '#D8E090',
      },
      letterSpacing: {
        imperial: '0.18em',
      },
      boxShadow: {
        jewel:
          '0 30px 60px -15px rgba(31,62,55,0.45), 0 10px 24px -8px rgba(31,62,55,0.30)',
        frame: '0 2px 0 0 #1F3E37, 0 6px 0 0 #FFFFFF, 0 8px 0 0 #1F3E37',
        ornate:
          '0 0 0 1px #1F3E37, 0 0 0 5px #FFFFFF, 0 0 0 6px rgba(31,62,55,0.35)',
      },
      backgroundImage: {
        // Fine cartographic grid watermark
        'grid-fine':
          'linear-gradient(to right, rgba(31,62,55,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,62,55,0.05) 1px, transparent 1px)',
        // Diagonal polyhedral hatch
        'hatch-diag':
          'repeating-linear-gradient(45deg, rgba(31,62,55,0.06) 0px, rgba(31,62,55,0.06) 1px, transparent 1px, transparent 10px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
      keyframes: {
        'reveal-frame': {
          '0%': { opacity: '0', transform: 'scale(0.94)', clipPath: 'inset(0 100% 0 0)' },
          '100%': { opacity: '1', transform: 'scale(1)', clipPath: 'inset(0 0 0 0)' },
        },
        'reveal-rise': {
          '0%': { opacity: '0', transform: 'translateY(34px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glint: {
          '0%': { transform: 'translateX(-120%) skewX(-20deg)', opacity: '0' },
          '20%': { opacity: '0.9' },
          '60%': { opacity: '0' },
          '100%': { transform: 'translateX(220%) skewX(-20deg)', opacity: '0' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(0.8) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1.2) rotate(45deg)' },
        },
      },
      animation: {
        'reveal-frame': 'reveal-frame 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'reveal-rise': 'reveal-rise 0.8s cubic-bezier(0.22,1,0.36,1) both',
        glint: 'glint 3.5s ease-in-out infinite',
        sparkle: 'sparkle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
