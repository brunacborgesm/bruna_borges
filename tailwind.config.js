/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Raleway', 'sans-serif'],
        body: ['Mulish', 'sans-serif']
      },

      colors: {
        'bg-darkgreen': '#264653',
        'cl-green': '#287271',
        'cl-orange': '#e76f51',
        'cl-white': '#eaf6ff',
        'cl-black': '#232528',
      }
    },
  },
  plugins: [],
}

