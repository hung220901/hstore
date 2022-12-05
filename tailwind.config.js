/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // important: true,
  darkMode:false,
  theme: {
    extend: {
      fontSize:{
        s:['10px']
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
