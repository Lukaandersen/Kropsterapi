import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#555060",
        primaryLight: "#EAE9E5",
        lightBeige: "#E1DFD9",
        mediumBeige: "#D1CABA",
        darkBeige: "#A49785",
        lightBlue: "#ADC9D5",
        lightPurple: "#BDB6C6",
        darkBlue: "#7891A9",
        darkPurple: "#716D91",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      fontSize: {
        h1D: "48px",
        h2D: "40px",
        h3D: "32px",
        p: "16px",
        h1M: "30px",
        h2M: "28px",
        h3M: "26px",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(7, 6, 0, 0.25)",
        "4xl": ["0 35px 35px rgba(0, 0, 0, 0.25)", "0 45px 65px rgba(0, 0, 0, 0.15)"],
      },
    },
  },
  plugins: [],
};
export default config;
