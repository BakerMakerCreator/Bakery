/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bakery-brown": "#8B4513",
        "bakery-cream": "#FFFDD0",
        "bakery-gold": "#D4AF37",
      },
      fontFamily: {
        german: ["Fraktur", "serif"],
      },
    },
  },
  plugins: [],
};
