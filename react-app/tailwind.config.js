/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00A300",
          light: "#33B233",
          dark: "#007700",
        },
        secondary: "#F0ECE4",
        accent: "#A50034",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    }
  },

  plugins: [],
}