import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F7A83',
          hover: '#155464',
          active: '#114654',
          light: '#edf5f7',
          50: '#edf5f7',
          100: '#d1e5eb',
          200: '#a7ccdb',
          300: '#74acc4',
          400: '#488ba8',
          500: '#2f6e8a',
          600: '#265a73',
          700: '#1a677a',
          800: '#155464',
          900: '#114654',
          950: '#0a2e38',
        },
        secondary: {
          DEFAULT: '#9A7222',
          hover: '#7C5C1A',
          active: '#614713',
          light: '#FDF7EB',
        }
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        space: ['var(--font-montserrat)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        epilogue: ['var(--font-epilogue)', 'sans-serif'],
        geist: ['var(--font-geist)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
      keyframes: {
        'slide-right-short': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'slide-right-short': 'slide-right-short 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
