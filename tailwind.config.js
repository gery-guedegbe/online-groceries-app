/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gilroy-Regular"],
        gilroy: ["Gilroy-Regular"],
        "gilroy-medium": ["Gilroy-Medium"],
        "gilroy-semibold": ["Gilroy-SemiBold"],
        "gilroy-bold": ["Gilroy-Bold"],
      },
      colors: {
        primary: "#53B175",
        white: "#FFFFFF",
        black: "#000000",
        orange: "#F3603F",
        primaryBlue: "#5383EC",
        secondaryBlue: "#5383EC",
        neutral300: "#FCFCFC",
        neutral400: "#FFF9FF",
        neutral500: "#E2E2E2",
        neutral550: "#E6E6E6",
        neutral600: "#7C7C7C",
        neutral700: "#828282",
        neutral800: "#030303",
        neutral900: "#181725",
      },
    },
  },
  plugins: [],
};
