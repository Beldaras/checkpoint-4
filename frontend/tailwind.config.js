/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        caveat: ["Caveat", "sans-serif"],
      },
      colors: {
        darkgreen: "#05ACB0",
        purple: "#272350",
        red: "#E53750",
        darkBlue: "#090979",
        lightBlue: "#00d4ff",
      },
      dropShadow: {
        button: "0 20px 40px rgba(0, 0, 0, 0.1)",
        filter: "0px 7px 15px rgba(0, 0, 0, 0.05)",
      },
      scale: {
        2: "0.2",
        3: "0.3",
        4: "0.4",
        5: "0.5",
        6: "0.6",
        7: "0.7",
      },
      placeholder: {
        placeholderDarkgreen: "#05ACB0",
        placeholderPurple: "#05ACB0",
      },
    },
  },
  plugins: [],
};
