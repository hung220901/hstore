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
        'segoe':['Segoe Script','Savoye LET']
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
  plugins: [],
}
