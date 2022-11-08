/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "jane": "#183a55",
        "jane2nd": "#03C0A8"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark",]
  },
}