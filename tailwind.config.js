/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'white': '#fff',
        'whiteGray': '#f3f4f6',
        'black': '#0f172a',
        'primary': '#CF2E87',
        'bleu': '#22d3ee',
        'gray': '#e5e7eb',
      },
    },
  },
  // plugins: [require("daisyui")],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: 'class',
};
