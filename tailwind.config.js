/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        tint: 'rgb(26,72,73)', // Custom color for header and footer
        secondary: '#ffffff',   // Custom color for background
        answer: 'rgb(242, 242, 242)', // Custom color for answer section
      },
      screens: {
        ipad: { max: '991px', min: '768px' }, // Custom screen for iPad Mini and similar
      },
    },
  },
  plugins: [],
}
