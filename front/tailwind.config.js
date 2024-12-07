/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        background: '#2C2F33',
        blue: {
          primary: '#3A8EBA'
        },
        golden: {
          primary: '#D4AF37',
          hover: '#ccb056'
        },
        danger: {
          primary: '#FF5733'
        },
        text: {
          white: '#ffff'
        },
        brown: {
          primary: '#472800'
        }
      }
    },
  },
  plugins: [],
}

