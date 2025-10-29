/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './index.html',
    './debug.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["'Bebas Neue'", 'cursive'],
        bodoni: ["'Bodoni Moda'", 'serif'],
        josefin: ["'Josefin Sans'", 'sans-serif'],
        outfit: ["'Outfit'", 'system-ui', 'sans-serif'],
      }
    },
  },
  
  plugins: [],
}
