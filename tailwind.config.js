module.exports = {
  purge: {
    mode:'layers',
    content:['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat'],
      'opensans': ['Open Sans']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
