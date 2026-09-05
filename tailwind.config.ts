import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./data/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ink: {
          base: "#0A0A0A",
          raised: "#101010",
          line: "#1E1E1E",
          faint: "#4A4A4A",
          dim: "#6E6E6E",
          muted: "#9A9A9A",
          fg: "#EDEDED",
        },
        ember: {
          DEFAULT: "#FF5B2E",
          soft: "#FF8A63",
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest: "0.22em",
      },
      maxWidth: {
        prose: "62ch",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
