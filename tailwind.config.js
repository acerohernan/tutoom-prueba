/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#28ABB9",
      },
      screens: {
        lg: "1020px",
        xl: "1200px",
      },
      fontSize: {
        "2xl": "1.625rem",
        "4xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
