/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Asegúrate de incluir tu archivo HTML principal
    './src/**/*.{js,jsx,ts,tsx}', // Incluye todos los archivos JS y JSX en src
    './src/components/**/*.{js,jsx}', // Asegúrate de incluir tus componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
