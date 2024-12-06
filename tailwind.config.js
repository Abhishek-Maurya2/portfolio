/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textSlate: "#8892b0",
        lightSlate: "#ccd6f6",
        HeadingGray: "rgb(150,155,165)",
        primary: "#0c1324",
        bgNavy: "#0a192f",
        bgLightNavy: "#112240",
        textGreen: "#64ffda",
        secondary: "rgba(0, 212, 255, 1)",
        // headingColor: 'rgba(9, 9, 121, 1)',
        HeadingBlue: "#07e7ec",
        headingPurple: "#002ddc",
        primaryPurple: "#b20fe7",
        secondaryPurple: "#5d00ff",
        headingColor: "#090e22",
        primaryPink: "rgba(236, 0, 140, 1)",
        secondaryPink: "rgba(252, 103, 103, 1)",
      },
      letterSpacing: {
        1: "0.18rem",
        2: "0.12rem",
        3: "1.5rem",
        4: "2rem",
      },
      fontFamily: {
        sans: ["SF Mono"],
      },
      keyframes: {
        giggleLeft: {
          "0%": {
            transform: "translateX(5px)",
          },
          "50%": {
            transform: "translateX(-5px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        giggleRight: {
          "0%": {
            transform: "translateX(-5px)",
          },
          "50%": {
            transform: "translateX(5px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        giggleDown: {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(5px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        giggleLeft: "giggleLeft 300ms ease-in-out ",
        giggleRight: "giggleRight 300ms ease-in-out",
        giggleDown: "giggleDown  1000ms ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
