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
      },
      keyframes: {
        'show-content-down': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        'show-content-up': {
          '0%': {
            transform: 'translateY(100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        'show-content-right': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        'show-content-left': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        }
      },
      animation: {
        'show-content-down': 'show-content-down 0.3s ease-in-out',
        'show-content-up': 'show-content-up  0.2s ease-in-out',
        'show-content-right': 'show-content-right 0.3s ease-in-out',
        'show-content-left': 'show-content-left 0.3s ease-in-out',
      }
    },
  },
  plugins: [],
}