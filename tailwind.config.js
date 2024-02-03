/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      red: {
        100: '#e2e8f0',
        200: '#0e140e',
        300: '#234b23',
        400: '#334155',
        hover: '#00FFFF',
        
      },

      pallet: {
        primary: "#4631D3",
        secondary: "#cbf282",
        background: "#f9f8fc",
        text: "#090717",
        accent: "#74cb7a",
      }
      
    },
    extend: {},
  },
  plugins: [],
}

