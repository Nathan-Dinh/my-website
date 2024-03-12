/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{html,js}",
    "./src/*.{html,js}",
    "./index.html",
    "./src/shared/*.{html,js}",
    "./src/shared/skill-sections/*.{html,js}",
    "./src/shared/mobile/*.{html,js}"

  ],
  darkMode: "selector",
  daisyui: {
    themes: ["cupcake","dracula"],
  },
  extend: {
    dropShadow: {
      glow: [
        "0 0px 20px rgba(255,255, 255, 0.35)",
        "0 0px 65px rgba(255, 255,255, 0.2)"
      ]
    }
  },
  plugins: [require("daisyui")],
};