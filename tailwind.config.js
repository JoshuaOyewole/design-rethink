/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: {
        100:'#FFFFFF',
        40:'rgba(255, 255, 255, 0.4)',
      },
      bg: {
        light: '#CFD8D8',
        // ...
        dark: 'linear-gradient(0deg, rgba(17, 32, 38, 0.24), rgba(17, 32, 38, 0.24)), linear-gradient(0deg, #CFD8D8, #CFD8D8), #CFD8D8',
      },

      // ...
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Jakarta: ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'header': "url('../assets/images/header.gif')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}