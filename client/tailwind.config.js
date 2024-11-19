/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens : {     
       '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
    
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }
    
      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'is' : {'max':'1010px'},
      'mm': {'max': '850px'},
      
      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
    
      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'xx': {'max': '530px'},

      'xm': {'max': '440px' }},
  },
  plugins: [],
}

