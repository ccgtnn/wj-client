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
    },
    colors: {
      bg: '#e1e2e4',
      text: '#333',
      hr: {
        bg: '#bac0cc',
      },
      h1: {
        text: '#fff',
        bg: '#628bb6',
      },
      h2: {
        brd: '#198ec0',
        bg: '#d6dbe4',
      },
      button: {
        default: {
          bg: '#40484F',
          bgActive: '#196CAA',
          brdPassive: '#51585d',
        },
        text: {
          text: '#ccc',
          textActive: '#2b79d1',
          brd: '#999',
          brdActive: '#2b79d1',
        },
        icon: {
          text: '#ccc',
          textActive: '#196CAA',
        },
      },
      card: {
        light: {
          bg: '#30363A',
          bgActive: '#1d2b42',
          brd: '#3D454A',
        },
        dark: {
          bg: '#25282c',
          bgActive: '#2a3740',
          brd: '#202326',
        },
        outline: {
          bgActive: '#283644',
          brd: '#40484E',
          brdActive: '#2b79d1',
        },
      },
      header: {
        top: {
          isbn: {
            text: '#9addf9',
          },
          title: {
            text: '#fff',
          },
        },
        search: {
          input: {
            bg: '#fff',
            brd: '#fff',
            text: '#fff',
          },
        },
        nav: {
          button: {
            text: '#fff',
            brd: '#fff',
            bgActive: '#0b94ce',
          },
        },
      },
      content: {
        right: {
          bg: '#d6dbe4',
        },
      },
      footer: {
        text: '#fff',
        bg: '#2b4b78',
      },
    },
  },
  plugins: [],
}