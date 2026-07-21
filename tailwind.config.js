/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#031C30',
        deepblue: '#073A59',
        edge: '#087EBA',
        cyan: '#00B7D7',
        teal: '#12AAA5',
        ice: '#EDF9FA',
        warm: '#F8F8F4',
        ink: '#171C20',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
