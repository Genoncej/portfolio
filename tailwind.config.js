/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean:{
          abyss:'#010c16',
          darkBlue:'#0D1D32',
          sea:'#225089',
          lightBlue:'#88d0ea',
          greenish: '#367E87',
        }
      }
    }
  },
  plugins: [require("daisyui")],
}