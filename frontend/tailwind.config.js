/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Corregido
    './pages/**/*.{js,ts,jsx,tsx}', // Asegura que soporte todos los archivos relevantes
    './components/**/*.{js,ts,jsx,tsx}', // Corregido
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
};
