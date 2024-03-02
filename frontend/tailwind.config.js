/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 2px 4px 0px rgba(29, 31, 33, 0.20)',
      },
      colors:{
        'primary-blue': '#2773FF',
        'green-tint' : '#D1F6D2',
        'primary-green': '#17C21A',
        'stroke-grey':'#E3E8F0',
        'grey-text': '#728095',
        'gray-back': '#E3E8F0'
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
    
  },
  plugins: [],
}

