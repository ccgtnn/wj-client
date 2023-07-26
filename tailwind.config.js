import mainColors from './src/mainColors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bgImg: "url('../../src/assets/bg.jpg')",
      },
    },
    screens: {
      sm: '640px',
      md: '1120px',
      xl: '1400px',
    },
    colors: {
      mainColors,
    },
  },
  plugins: [],
}
