/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./project/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Quicksand', ...defaultTheme.fontFamily.sans],
        'serif': ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'primary': '#DE1B51',
        'primaryhover': '#B3003E',
        'secondary': '#2B3378',
        'fblack': '#333333',
        'lblack': '#424242',
        'fwhite': '#F6F8FC',
        'lwhite': '#D9D9D9',
      }
    },
  },
  plugins: [],
}

