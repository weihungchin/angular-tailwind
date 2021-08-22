module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  }, // add this
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
