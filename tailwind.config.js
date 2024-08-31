/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'desktop': '1067px',
      'center': '580px'
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
          'base-content': '#24292f',
          'primary': 'c3c8cb',
          'neutral': '#212529',
          'secondary': '#86abcf',
          'accent': '#0a66c2',
          'success': '#9bc5ee'
        },
      },
    ],
  }
}