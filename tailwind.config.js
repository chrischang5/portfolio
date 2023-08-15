/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#1E1E1E",
        },
        vsblack: {
          500: "#3F3F46"
        }
      },
      fontFamily: {
        "source-code": ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [],
};
