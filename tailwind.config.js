/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  darkMode,"class"
  ],
  theme: {
    container:{
      center: true,
    },
    extend: {
    fontFamily:{
      gemunu:["Gemunu Libre", "sans-serif"],
      open:["Open Sans", "sans-serif"]
    },
    colors:{
      "arin-red":"#BC1A45",
    "arin-melon":"#FFD369",
    "arin-grey" :"#DDDDDD",
    "arin-white":"#F7F7F7"
    },
    spacing:{
      128: "32 rem"
    }
    },
  },
  plugins: [],
}

