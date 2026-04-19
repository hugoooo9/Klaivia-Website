import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "noir-profond": "#1E1E2E",
        "noir-carte": "#282838",
        "noir-surface": "#33334A",
        "violet-principal": "#9B6BFF",
        "violet-glow": "#C89AFF",
        "violet-subtil": "rgba(155, 107, 255, 0.15)",
        "blanc": "#FFFFFF",
        "gris-texte": "#DCDCE8",
        "gris-border": "#43435A",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #7C3AED 100%)",
        "gradient-violet": "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
      },
      boxShadow: {
        "glow": "0 0 20px rgba(124, 58, 237, 0.3)",
        "glow-lg": "0 0 40px rgba(124, 58, 237, 0.4)",
        "glow-xl": "0 0 60px rgba(124, 58, 237, 0.5)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
