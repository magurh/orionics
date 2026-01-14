import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "hsl(210 20% 96%)",
        muted: "hsl(215 16% 72%)",
        panel: "hsl(222 40% 14%)",
        panel2: "hsl(224 36% 18%)",
        border: "hsl(222 22% 26%)",
        accent: "hsl(205 95% 60%)",
        accent2: "hsl(254 92% 70%)"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0,0,0,0.35)"
      }
    },
  },
  plugins: [],
} satisfies Config;
