/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.{html,js}", "./src/*.{html,js}", "./index.html","./src/shared/*.{html,js}",],
  darkMode: "selector",
  daisyui: {
    themes: ["dark","light","halloween"],
  },
  plugins: [require("daisyui")],
};