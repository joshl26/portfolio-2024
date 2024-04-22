import type { Config } from "tailwindcss";

import typography from "@tailwindcss/typography";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        raleway: ["var(--font-raleway)"],
        cabin: ["var(--font-cabin)"],
        nunito: ["var(--font-nunito)"],
        lusitana: ["var(--font-lusitana)"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    typography,
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    plugin(function ({ addComponents }: any) {
      addComponents({
        ".showcased-btn": {
          display: "flex",
          alignItems: "center",
          borderRadius: "9999px",
          borderWidth: "1px",
          padding: "0.5rem",
          transition: "0.5s ease-out",
        },
        ".showcased-btn:hover": {
          display: "flex",
          alignItems: "center",
          borderRadius: "9999px",
          borderWidth: "1px",
          padding: "0.5rem",
          backgroundColor: "white",
          color: "black",
          transition: "0.5s ease-in",
        },
      });
    }),
  ],
};
export default config;
