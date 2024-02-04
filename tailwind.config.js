/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // tailwind.config.js

  darkMode: 'class', // 'media' or 'class' or 'false'
  theme: {
    extend: {
      backgroundColor: {
        dark: '#1A1A1A', // Customize your dark mode background color
      },
      textColor: {
        dark: '#FFFFFF', // Customize your dark mode text color
      },
      borderColor: {
        dark: '#2E2E2E', // Customize your dark mode border color
      },
    },
  },
  variants: {
    extend: {
      invert: ['dark'], // Extend the invert utility to work in dark mode
    },
  },
  plugins: [],
};

  
