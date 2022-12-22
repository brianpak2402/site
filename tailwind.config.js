/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'brian-pak': "url('../public/brian.jpg')",
      },
      height: {
        'screen/2': '50vh',
      },
      colors: {
        'notion-legacy-red': '#e16259',
      },
      animation: {
        fadeOut: 'fadeOut 1s ease-in-out',
        fadeIn: 'fadeIn 1s ease-in-out',
      }, 
      transitionDelay: {
        '3000': '3000ms',
      },
      keyframes: {
        fadeOut: {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity:0,
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity:1,
          },

        }
      }
    },
  },
  plugins: [],
}
