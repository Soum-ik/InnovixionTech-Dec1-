/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Dhurjati: ["Dhurjati", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "home-bg": "url('./src/images/mainbg.jpg')",
      },
      screens: {
        xxxS: "390px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      colors: {
        botton: "#E50914",
      },
    },
  },
  plugins: [[require("daisyui")]],
};
