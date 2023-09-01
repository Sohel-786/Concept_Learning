/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      height: {
        '25': '100px',
      },
      animation :{
        'bounce-once' : 'bounce 1s 1.5'
      }
    },
  },
  plugins: [],
}

