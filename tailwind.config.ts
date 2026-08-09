import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          void: "#03060f",
          deep: "#060a18",
          panel: "#0a1124",
          line: "#15203f",
        },
        electric: {
          DEFAULT: "#2f7bff",
          bright: "#4d9dff",
          glow: "#63b3ff",
          deep: "#0b3aa8",
        },
        cyan: {
          neon: "#3fe0ff",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(79,157,255,0.35), 0 0 40px rgba(47,123,255,0.15)",
        "neon-cyan": "0 0 22px rgba(63,224,255,0.35)",
      },
      backgroundImage: {
        "grid-blue":
          "linear-gradient(rgba(47,123,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(47,123,255,0.08) 1px, transparent 1px)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        scan: "scan 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
