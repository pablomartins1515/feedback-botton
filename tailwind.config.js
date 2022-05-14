const { borderColor } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        brand:{
          100: '#8257E5',
          500: '#8257E5',
          900: '#6D4ABC',


        }

      }
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}