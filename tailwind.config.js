import mainColors from './src/common/mainColors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderColor: {
        transparent: 'transparent',
      },
      backgroundImage: {
        bgImg: "url('https://next.waterjournal.ru/bg.jpg')",
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
