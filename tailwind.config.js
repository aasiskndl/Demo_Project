/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ This targets all your React components
  ],
  theme: {
    extend: {
      colors: {
        tint: 'rgb(26,72,73)', // Custom color for header and footer
        secondary: 'white',  // Custom color for background
        answer: 'rgb(242, 242, 242) ', // Custom color for answer section
      },
    },
  },
  plugins: [],
}
