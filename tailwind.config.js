/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ This targets all your React components
  ],
  theme: {
    extend: {
      colors: {
        tint: 'rgb(3,72,72)', // Custom color for header and footer
        secondary: 'rgba(185, 200, 50, 0.3)',  // Custom color for background
        answer: 'rgb(242, 242, 242) ', // Custom color for answer section
      },
    },
  },
  plugins: [],
}
