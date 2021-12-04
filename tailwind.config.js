module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
      },
      height: {
        "fit-content": "fit-content",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
