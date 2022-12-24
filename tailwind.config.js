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
        'screen-3/4': '75vh',
      },
      colors: {
        'notion-legacy-red': '#e16259',
        'notion-bg-gray': '#ebeced',
        'notion-bg-brown': '#e9e5e3',
        'notion-bg-orange': '#faevdd',
        'notion-bg-yellow': '#fbf3db',
        'notion-bg-green': '#ddedea',
        'notion-bg-blue': '#ddebf1',
        'notion-bg-purple': '#eae4f2',
        'notion-bg-pink': '#f4dfeb',
        'notion-bg-red': '#fbe4e4',
        'notion-text-default': '#37352F',
        'notion-text-gray': '#9b9a97',
        'notion-text-brown': '#64473a',
        'notion-text-orange': '#d9730d',
        'notion-text-yellow': '#dfab01',
        'notion-text-green': '#0f7b6c',
        'notion-text-blue': '#0b6e99',
        'notion-text-purple': '#6940a5',
        'notion-text-pink': '#ad1a72',
        'notion-text-red': '#e03e3e',
      },
      animation: {
        fadeOutLoader: 'fadeOutLoader 1.5s ease-in-out',
        fadeIn: 'fadeIn 3s ease-in-out',
        scrollHorizontal: 'scrollHorizontal 180s linear infinite'
      }, 
      keyframes: {
        fadeOutLoader: {
          '0%, 70%': { opacity: 1 },
          '100%': { opacity:0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity:1 },
        },
        scrollHorizontal: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-3400px)' }
        }
      },
      width: {
        'scroll': '6000px'
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
