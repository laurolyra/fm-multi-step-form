/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        growDown: {
          "0%": {
            transform: "scaleY(0)",
          },
          "80%": {
            transform: "scaleY(1.1)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
      },
      animation: { "grow-down": "growDown 300ms ease-in-out forwards" },
    },
  },
  plugins: [],
}