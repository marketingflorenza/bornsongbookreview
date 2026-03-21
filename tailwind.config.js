/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        florenza: '#ec4899', // สีชมพูประจำคลินิก
      }
    },
  },
  plugins: [],
}