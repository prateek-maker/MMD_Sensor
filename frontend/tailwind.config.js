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
        'primary-blue': '#2773FF'
      }
    },
    
  },
  plugins: [],
}

