/** @type {import('tailwindcss').Config} */
export default {
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
    colors: {
      primary: "#1E293B",
      accent: "#F59E0B",
    },
  },
},

}

