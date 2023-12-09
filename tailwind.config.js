/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
 
  ],
  theme: {
    extend: {
      colors:
      {
        "textcolor":"#9CC828"
      },
      backgroundColor:
      {
        "bgcolor":"#2D2D2D"
      },
      fontFamily:
      {
        "popins":"['Popins', sans-serif]"
      },
      
    },
  },
  plugins: [require('flowbite/plugin')],
}

