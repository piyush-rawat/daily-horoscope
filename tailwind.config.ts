import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // pacifico: ["Pacifico", "sans-serif"],
        // bebasNeue: ["Bebas Neue", "sans-serif"],
        // indieFlower: ["Indie Flower", "sans-serif"],
        pacifico: "var(--font-pacifico)",
        bebasNeue: "var(--font-bebasNeue)",
        indieFlower: "var(--font-indieFlower)",
      },
    },
  },
  plugins: [],
};
export default config;
