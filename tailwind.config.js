/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './views/*.{pug, html}'],
  theme: {
    extend: {
      backgroundColor: {
        fMain: '#131219',
        sMain: '#86c288',
        tMain: '#191b1f',
        foMain: '#2b4e34'
      },
      colors: {
        sMain: '#86c288',
        foMain: '#2b4e34'
      },
      fontFamily:{
        rubikVinyl : ['RubikVinyl']
      }
    },
  },
  plugins: [],
}
