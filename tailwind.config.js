/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        keyframes: {
          bounce: {
            '0%, 100%': {
              transform: 'translateY(0)',
            },
            '20%, 80%': {
              transform: 'translateY(-30px)',
            },
            '40%, 60%': {
              transform: 'translateY(-15px)',
            },
          },
        },
        animation: {
          pump: 'bounce 1s ease-in-out infinite',
        },
    
      },

      colors:{
        'yellow': {
          '50': '#fbfee8',
          '100': '#f7ffc2',
          '200': '#f2ff87',
          '300': '#f2ff43',
          '400': '#fbff0f',
          '500': '#efe903',
          '600': '#ceb900',
          '700': '#a48604',
          '800': '#88680b',
          '900': '#735510',
          '950': '#432d05',
      },
      
      }
    },
  },
  plugins: [],
}