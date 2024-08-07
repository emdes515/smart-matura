import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brand-primary': {
          DEFAULT: '#ffc925',
          50: '#fffdf5',
          100: '#fff9e0',
          200: '#fff0b1',
          300: '#ffe27d',
          400: '#ffd449',
          500: '#ffc925',
          600: '#e6a900',
          700: '#bf8c00',
          800: '#996f00',
          900: '#7a5900',
        },
        'brand-secondary': {
          DEFAULT: '#272747',
          50: '#f5f5f9',
          100: '#e9e9f2',
          200: '#d1d1e3',
          300: '#acaccd',
          400: '#8181b1',
          500: '#5f5f96',
          600: '#4b4b7d',
          700: '#3e3e67',
          800: '#353556',
          900: '#272747',
        },
      },
    },
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ffc925',

          secondary: '#272724',

          accent: '#00ffff',

          neutral: '#a8a29e',

          'base-100': '#e5e7eb',

          info: '#0000ff',

          success: '#00ff00',

          warning: '#00ff00',

          error: '#ff0000',
        },
      },
    ],
  },
};
export default config;
