/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.{html,js}", "./src/*.{html,js}", "./index.html"],
  darkMode: "selector",
  daisyui: {
    themes: ["dark","light","halloween"],
  },
  plugins: [require("daisyui")],
};