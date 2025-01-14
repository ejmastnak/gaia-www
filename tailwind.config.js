/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    screens: {
      'xxs': '440px',
      'xs': '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} ;
