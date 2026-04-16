import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b2e22", // Deep elegant green
        primary: "#4db394",    // Mint/Jade green
        secondary: "#e6eca0",  // Soft cream/gold
        accent: "#f9aeb7",     // Sakura pink (Perfect for the Spring Japan theme)
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'], // Good for elegant themes
      }
    },
  },
  plugins: [],
};
export default config;