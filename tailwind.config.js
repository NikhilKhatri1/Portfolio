/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar'; // Correct import

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [
    tailwindScrollbar(), // Use the imported plugin
  ],
}