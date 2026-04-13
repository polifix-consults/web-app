/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Polifix brand colors
        brand: {
          primary: "#000000", // Black
          accent: "#c4af8c", // Tan/Gold
          light: "#fdfdfd", // Off-white
          gray: {
            50: "#f5f5f5", // Light gray (inputs, nav backgrounds)
            100: "#eeeeee", // Hover gray
            200: "#d9d9d9", // Border gray
            dark: "#333333", // Dark text
          },
        },
      },
      fontFamily: {
        sans: ["Montserrat", "serif"],
      },
      maxWidth: {
        container: "1500px",
      },
      spacing: {
        gutter: "15px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "0rem",
        },
      },
    },
  },
  plugins: [],
};
