/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 'pb-',
  theme: {
    extend: {},
  },
  plugins: [],
};
