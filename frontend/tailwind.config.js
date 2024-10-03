/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '##F8FAFC',
        'secondary': '#12366D',
        'button': '##007AFF',
        'buttonSecond': '#991B1B',
      },
      fontFamily: {
        'raleway': ["Raleway", 'sans-serif'],
        'bodoni': ["Libre Bodoni", 'serif'],
      },

    },
  },
  plugins: [],
}