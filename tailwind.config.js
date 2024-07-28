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
    extend: {
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          'base-100': '#d7dce0',
          'primary': '#d7dce0',
          'base-content': '#24292f',
          'neutral': '#212529',
          'secondary': '#212529',
          'accent': '#0a66c2',
          'success': '#9bc5ee'
        },
      },
    ],
  }
}