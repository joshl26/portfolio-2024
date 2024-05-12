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
        roboto: ["var(--font-roboto)"],
        ubuntu: ["var(--font-ubuntu)"],
        ayer: ["Ayer Poster Medium", "sans-serif"],
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
          paddingTop: "0.5rem",
          paddingBottom: "0.25rem",
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",
          transition: "0.5s ease-out",
          fontSize: "2rem",
        },
        ".showcased-btn:hover": {
          display: "flex",
          alignItems: "center",
          borderRadius: "9999px",
          borderWidth: "1px",
          paddingTop: "0.5rem",
          paddingBottom: "0.25rem",
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",
          backgroundColor: "white",
          color: "black",
          transition: "0.5s ease-in",
        },
      });
    }),
  ],
};
export default config;
