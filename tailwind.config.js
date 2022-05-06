module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand :{
          300:' #996DFF',
          500:' #8257e6'
        }
      }
    },
    borderRadius:{
      md: '4px',
      lg: '6px',
      xl: '8px',
      full: '25px',

    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
