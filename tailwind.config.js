module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    plugins: [
    require('tailwindcss-gradient'),
  ],
  darkMode: 'class',
  theme: {
    extend: {colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#E8E8E8',
          100: '#f2f3f5',
        },bgGradientDeg: {
        45: '45 deg',
      },
       spacing: {
        '16px': '16px',
      },     
      
      fontFamily: {

     'sans': ['"Lusitana, serif"'] 
     },
      fontSize: {
        
      }

      

      }},
      
  },

}
