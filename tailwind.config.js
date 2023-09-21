/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors:{
        primaryColor: '#03045E',
        secundaryColor: '#FEE440',
      }
    },
    keyframes:{
      move:{
        "50%": {transform:'translateY(-1rem)'}
      }
    },
    animation:{
      'movingY':'move 2s linear infinite'
    },
    container:{
      center:true,
      padding:{
        DEFAULT: '1rem',
        sm:'1.5rem'
      }
    },
    fontFamily:{
      Inter:['Inter', 'sans-serif'],
      PinyonScript:['Aguafina Script']
    },
  },
  plugins: [],
}