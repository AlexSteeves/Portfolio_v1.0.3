/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      pallet: {
        primary: '#2345cc',
        secondary: '#e5b88e',
        accent: '#afdd6c',
        background: '#eff1fb',
        text: '#122140',
        
      },
      dark:{
        primary: "#89B7EA",
        secondary: "#351786",
        accent: "#9f50e0",
        background: "#121212",
        text: "#A1C2E8",
      }
      
    },
    extend: {},
  },
  plugins: [],
}

