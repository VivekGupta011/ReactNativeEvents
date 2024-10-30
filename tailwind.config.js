/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}','./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        lightGray: '#D8D7D7', 
        CustomRed: '#C8001B', 
        CustomBlue: '#0D1335', 

      },
    },
  },
  plugins: [],
};
