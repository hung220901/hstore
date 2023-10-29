/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  darkMode:'class',
  theme: {
    extend: {
      fontSize:{
        s:['10px']
      },
      fontFamily:{
        'segoe':['Segoe Script','Savoye LET'],
        'opensans':['Open Sans']
      }, 
      screens:{
        'lt':'320px',
      }
    },
  },
  variants:{
    extends:{
      display:["group-hover"],
      margin:["group-hover"],
      visibility:["group-hover"],
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('autoprefixer'),
    require('tailwindcss'),
  ],
}
