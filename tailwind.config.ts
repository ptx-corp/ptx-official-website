import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2342',
        accent: {
          DEFAULT: 'var(--accent)',
          light: '#B4975A',
          dark: '#FFC107',
        },
        'accent-foreground': 'var(--accent-foreground)',
        ring: '#B4975A',
        // Style guide colors
        sun: '#E8C849',
        sky: '#117AF5',
        clouds: '#FFFFFF',
        moon: '#C9C9C9',
        spots: '#889399',
        'night-sky': '#252D37',
        stars: '#FFFFFF',
        gold: '#FFC107',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
