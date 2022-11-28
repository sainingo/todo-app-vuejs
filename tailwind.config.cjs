/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-mobile-light': "url('/public/images/BG-MOBILE-LIGHT.JPG')",
        'bg-mobile-dark': "url('/public/images/BG-MOBILE-DARK.JPG')",
        'bg-desktop-light': "url('/public/images/bg-desktop-light.jpg')",
        'bg-desktop-dark': "url('/public/images/bg-desktop-dark.jpg')",
        'moon-icon': "url('/public/images/icon-moon.svg')",
        'sun-icon': "url('/public/images/ICON-SUN.SVG')",
        'cross-icon': "url('/public/images/icon-cross.svg')",
        'check-icon': "url('/public/images/ICON-CHECK.SVG')"
      },
      colors: {
        "dark-grayish-blue": 'hsl(236, 9%, 61%)',
        "very-dark-blue": 'hsl(235, 21%, 11%)',
        "very-dark-desaturated": 'hsl(235, 24%, 19%)',
        "light-grayish-blue": 'hsl(235, 24%, 19%)',
        "light-text": 'hsl(236, 33%, 92%)',
      }
    },
  },
  plugins: [],
}
