import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
      backgroundImage: {
        'heroImage': "url('/hostel-management-system/frontend/public/images/h-image.jpg')"        
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)'},
          to: { transform: 'translate(-100%)'},
        },
      },
      colors: {
        purple: "#CBACF9",
        headerColor: "#878787",
        primaryLight: "#0252CD",
        primaryDark: "#191f41",
        secondary: "#FFBE62",
        challengeRed: "#E15A46",
        learningsGreen: "#02BC7D",
        cross: "#424B5C",
        crossDark: "#F6F7F9",
        white500: "#6F74A7",
        white800: "#f2f2f2",
        white900: "#FFFFFF",
        black200: "#191e24",
        black300: "#1d232a",
        black400: "#778295",
        graphicOffWhite: "#F9FBFC",
        graphicOffWhite2: "#E5F1FF",
        graphicOffWhite3: "#F7F7F7",
        graphicTurquoise: "#1AE5FF",
        graphicLighterBlue: "#A9CCEA",
        graphicPaleBlue: "#289DF2",
        graphicLightBlue: "#2889DB",
        graphicMidBlue: "#287DD1",
        graphicDarkBlue: "#284D89",
        graphicDarkerBlue: "#28385E",
        graphicDarkestBlue: "#282E5C",
        graphicGrey: "#0F3775",
        graphicDarkGrey: "#0F3157",
        graphicPaleRed: "#FF5C66",
        graphicLightRed: "#FF4D6B",
      },

    },
  },
  plugins: [],
};
export default config;
