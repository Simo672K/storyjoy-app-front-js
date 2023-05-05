/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer': "url(src/assets/footer-img.png)",
        'slide-1': "linear-gradient(45deg, #000000AA , #000000 15%, #00000000), url(src/assets/slide-bg.png)",
      },
      fontFamily: {
        'global': "'Inter', 'Open Sans', 'Roboto', sans-serif"
      }
    },
  },
  plugins: [],
}