const { zinc }=require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand :{
          300:' #996DFF',
          500:' #8257e6',
          'text': " #FFFFFF"
         
        },
        light :{
          'surface-primary':' #FFFFFF',
          'surface-secondary':'#F4F4F5 ',
          'text-primary':' #27272A',
          'text-secondary':' #71717A',
          'stroke':'#D4D4D8'
        },
        dark :{

          'surface-primary': ' #18181B',
          'surface-secondary':' #27272A',
          'text-primary':' #F4F4F5',
          'text-secondary':' #A1A1AA',
          'stroke':'#52525B'
        }
      },
      boxShadow: {
        '100': '0px 8px 24px 0px #8257E540',
        '200': '0px 8px 32px 0px #00000026',
        '300': '0px 2px 6px 0px #8257E540',
      },
      textShadow: {
        'on': '0px 8px 24px 0px #FFFFFF',
        '3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      },
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
    require('tailwindcss-textshadow'),
  ],
}
