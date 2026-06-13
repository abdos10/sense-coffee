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
            DEFAULT: "#C9A66B",
            light: "#D4B981",
          },
          cream: "#F8F4EE",
          espresso: "#2B1B14",
        },
      },
      scale: {
        "103": "1.03",
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
