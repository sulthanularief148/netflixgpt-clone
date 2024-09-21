/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths as necessary
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-banner': "url('/src/assets/images/home/netflixhomepage.jpg')"

      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.2)',
      }

    },
  },
  plugins: [],
}
