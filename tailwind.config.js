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
        text: '#03050f',
        
      },
      dark:{
        primary: "#de9fa0",
        secondary: "#276b72",
        accent: "#5248c1",
        background: "#121212",
        text: "#f6e4e4",
      }
      
    },
    extend: {},
  },
  plugins: [],
}

