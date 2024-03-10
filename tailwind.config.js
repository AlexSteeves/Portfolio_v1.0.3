/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      pallet: {
        primary: '#64979b',
        secondary: '#8fdbe5',
        accent: '#5edaea',
        background: '#f7fafb',
        text: '#060808',
        
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

