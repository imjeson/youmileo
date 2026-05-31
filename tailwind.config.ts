import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          light: '#E8F4FD',
          DEFAULT: '#87CEEB',
          dark: '#5BA3C9',
        },
        warm: {
          light: '#FFF8E7',
          DEFAULT: '#FFD93D',
          dark: '#E6B800',
        },
        coral: {
          light: '#FFE8E0',
          DEFAULT: '#FF6B6B',
          dark: '#E84545',
        },
        blush: {
          light: '#FFF0F5',
          DEFAULT: '#FFB6C1',
          dark: '#FF8DA1',
        },
        grass: {
          light: '#E8F5E9',
          DEFAULT: '#81C784',
          dark: '#4CAF50',
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
