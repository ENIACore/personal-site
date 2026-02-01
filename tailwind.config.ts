import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // Updated to match Tokyo Night accents
        "neon-glow": "0 0 10px #00ffd2, 0 0 2px #ff4499",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Tokyo Night palette (your provided hex values)
        "tokyo-cyan": "#00ffd2",
        "tokyo-pink": "#ff4499",
        "tokyo-black": "#000000",
        "tokyo-navy": "#0a0047",
        "tokyo-blue": "#004687",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities: { [key: string]: { "--fall-distance": string } } = {};
      for (let i = 20; i <= 45; i++) {
        newUtilities[`.fall-${i}`] = {
          "--fall-distance": `${i}vh`,
        };
      }
      addUtilities(newUtilities);
    }),
  ],
};

export default config;
