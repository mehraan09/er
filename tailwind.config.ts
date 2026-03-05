import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["'Cormorant Garamond'", "Georgia", "serif"],
        dancing: ["'Dancing Script'", "cursive"],
        dm: ["'DM Sans'", "system-ui", "sans-serif"],
        romantic: ["var(--font-cormorant)"],
      },
    },
  },
  plugins: [],
};
export default config;
