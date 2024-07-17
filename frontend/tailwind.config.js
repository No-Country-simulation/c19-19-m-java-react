/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customGrayLight: "#FBFBFB",
        customGray: "#F2F2F2",
        customGreenLight: "#F5FFF8",
        customGreen: "#3B764C",
        customBrown: "#363230",
        customGrayDark: "#2E2E2E",
        customBlue: "#5289F3",
        customBlueDark: "#202937",
      },
      fontFamily: {
        txBarlow: ["Barlow", "sans-serif"],
        txPoppins: ["Poppins", "sans-serif"],
        txTitle: ["Caveat Brush", "sans-serif"],
        txSpartan: ["League Spartan", "sans-serif"],
        txMogra: ["Mogra", "sans-serif"],
        txSansita: ["Sansita", "serif"],
      },
    },
  },
  plugins: [],
};
