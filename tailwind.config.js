/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 'pb-',
  theme: {
    colors: {
      white: '#FFFFFF',
      //browns
      'brown-500': '#6B321B',
      'brown-300': '#6B493B',
      'brown-200': '#B8562E',

      //oranges
      'orange-500': '#EB6D3B',
      'orange-200': '#fed7aa',
      'orange-100': '#ffedd5',
      skin: '#EEA183',

      //neutrals
      'neutral-500': '#2E2E2E',
      'neutral-200': '#7D919F',
      'neutral-100': '#757575',
    },
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        racing: ['"Racing Sans One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
