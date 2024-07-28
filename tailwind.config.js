/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '780px'
    },
    colors: {
      primary: '#d7dce0',
      secondary: '#24292f',
      third: '#212529'
    },
    extend: {
    },
  },
  plugins: [],
}