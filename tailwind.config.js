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
        'bg-darkpurple': '#654597',
        'default-white': '#fdfffc',
        'default-lightpurple': '#ab81cd',
        'default-darkpurple': '#4f1271',
        'default-purpleblue': '#574ae2',
        'default-black': '#070606',
        'default-pink': '#ac22d3',
      }
    },
  },
  plugins: [],
}

