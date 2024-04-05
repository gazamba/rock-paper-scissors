/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dusty-rose":"#cba8a8",
        "dark-red":"#974a4a"
      }
    },
  },
  plugins: [],
}