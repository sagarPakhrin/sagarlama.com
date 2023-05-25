/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Readex Pro', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};

// module.exports = {
//   content: ['./app/**/*.{ts,tsx,jsx,js}'],
//   darkMode: 'class',
//   theme: {
//     fontFamily: {
//       sans: ['Readex Pro', ...defaultTheme.fontFamily.sans],
//     },
//     extend: {},
//   },
//   plugins: [require('@tailwindcss/typography')],
// };
