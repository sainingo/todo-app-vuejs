/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-mobile-light': "url('/src/assets/images/BG-MOBILE-LIGHT.JPG')",
        'bg-mobile-dark': "url('/src/assets/images/BG-MOBILE-DARK.JPG')",
        'bg-desktop-light': "url('/src/assets/images/bg-desktop-light.jpg')",
        'bg-desktop-dark': "url('/src/assets/images/bg-desktop-dark.jpg')",
        'moon-icon': "url('/src/assets/images/ICON-MOON.SVG')",
        'sun-icon': "url('/src/assets/images/ICON-SUN.SVG')",
        'cross-icon': "url('/src/assets/images/ICON-CROSS.SVG')",
        'check-icon': "url('/src/assets/images/ICON-CHECK.SVG')"
      }
    },
  },
  plugins: [],
}
