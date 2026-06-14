import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F8F4EE",
          dark: "#3B241A",
          coffee: "#5C3D2E",
          gold: {
            DEFAULT: "#DAAA1BF6",
            light: "#EEC165",
          },
          cream: "#F8F4EE",
          espresso: "#2B1B14",
        },
      },
      scale: {
        "103": "1.03",
        "104": "1.04",
      },
      fontFamily: {
        arabic: ["var(--font-arabic)", "Tahoma", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Tahoma", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
