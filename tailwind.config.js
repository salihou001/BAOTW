/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'white': '#f8fafc',
        'whiteGray': '#f3f4f6',
        'black': '#0f172a',
        'primary': '#CF2E87',
        'bleu': '#22d3ee',
        'gray': '#F4F2EE',
      },
      keyframes: {
        shimmer: {
          '100%' : {transform: 'translateX(100%)'}
        }
      }
    },
  },
  // plugins: [require("daisyui")],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: 'class',
};
