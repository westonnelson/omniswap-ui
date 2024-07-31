// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // LayerZero primary color
        secondary: '#50E3C2', // LayerZero secondary color
        accent: '#A855F7', // Accent color for buttons
        dark: '#1f1f1f', // Background color
        light: '#ffffff', // Light text color
      },
    },
  },
  plugins: [],
};
