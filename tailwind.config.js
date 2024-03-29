/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach:{
          400: "#7469B6",
          300: "#AD88C6",
          200: "#E1AFD1",
          100: "#FFE6E6"
        },
    
    
        teal:{
          400: "#222831",
          300: "#31363F",
          200: "#76ABAE",
          100: "#EEEEEE"
        },
      },
      boxShadow: {
        'custom': '0 4px 7px 4px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}