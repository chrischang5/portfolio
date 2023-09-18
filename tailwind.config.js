/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      title: `2.5rem;`,
      subtitle: `1.85rem`,
      paragraph: `1.2rem`,
      date: "1.0rem",
      pill: `0.85rem`,
    },
    colors: {
      light: colors.white,
      dark: colors.black,
    },
    extend: {
      // backgroundImage: {
      //   'project-preview': "url('Untitled.png')",
      // },
      colors: {
        primary: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          925: "#181818",
          950: "#121212",
          DEFAULT: "#181818",
        },
        secondary: {
          DEFAULT: "#121212",
        },
        vsblack: {
          DEFAULT: "#3F3F46",
        },
        accent: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efaa",
          400: "#4ade7d",
          500: "#22c55a",
          600: "#16a346",
          700: "#15803a",
          800: "#166531",
          900: "#14532a",
          950: "#052e13",
          DEFAULT: "#166531",
        },
      },
      fontFamily: {
        "source-code": ["Source Code Pro", "monospace"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
