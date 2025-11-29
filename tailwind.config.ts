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
        accent: '#B4975A',
        'accent-foreground': '#FFFFFF',
        ring: '#B4975A',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
