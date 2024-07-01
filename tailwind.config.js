/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        primary:["Open Sans" , "sans-serif"]
      },
      colors:{
        badge:"#fdfae6",
        dusk:"#f2e9d1"
      }
    },
  },
  plugins: [],
}

