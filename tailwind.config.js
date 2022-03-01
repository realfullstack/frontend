module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  content: [
    './src/pages/**/*.{html,js,tsx}',
    './src/components/**/*.{html,js,tsx}',
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['disabled'],
      textColor: ['disabled']
    },
  },
  plugins: [
  ],
}