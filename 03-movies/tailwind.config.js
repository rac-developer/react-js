/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '3rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

