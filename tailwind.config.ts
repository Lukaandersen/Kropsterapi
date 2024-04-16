import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   
      colors: {
  primaryPurple: '#555060',
  primaryLight: '#EAE9E5',
  lightBeige: '#E1DFD9',
  mediumBeige: '#D1CABA',
  darkBeige: '#A49785',
  lightBlue: '#ADC9D5',
  lightPurple: '#BDB6C6',
  darkBlue: '#7891A9',
  darkPurple: '#716D91',



      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
