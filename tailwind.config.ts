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
        teal: {
          950: "#091413",
          900: "#0E1F1C",
          850: "#132523",
          800: "#172F2B",
          700: "#1E3B36",
          600: "#274B45",
          500: "#34615A",
        },
        gold: {
          100: "#FAF5EC",
          200: "#F2E6CE",
          300: "#E3CCA0",
          400: "#D5B87A",
          500: "#C5A467",
          600: "#B48F50",
          700: "#947239",
          800: "#755729",
        },
        ivory: {
          50: "#FAF9F6",
          100: "#F6F4EE",
          200: "#EDE9DF",
          300: "#DFD9CB",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Cinzel", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        elegant: "0 20px 40px -15px rgba(10, 25, 23, 0.15)",
        darkglow: "0 20px 50px -10px rgba(0, 0, 0, 0.4)",
        goldglow: "0 10px 25px -5px rgba(197, 164, 103, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
