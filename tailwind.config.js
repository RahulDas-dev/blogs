/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*/index.html','./*/main.ts','./partials/*.hbs'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'vsm': '360px',
      },
      fontFamily: {
        body: ["Poppins,Nunito, sans-serif"],
      },
      colors: {
        prime: "#576ee0",
        second: "#9194A2",
      },
      content: {
        'gap': '',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

