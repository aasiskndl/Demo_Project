/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ This targets all your React components
  ],
  theme: {
    extend: {
      colors: {
        tint: 'rgb(3,72,72)', // Custom tint
        secondary:'rgba(255, 234, 81, 0.8)'
      },
    },
  },
  plugins: [],
}
