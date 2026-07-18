import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand — deep clinical crimson, not a generic red
        crimson: {
          50: "#FDF2F4",
          100: "#FBE4E8",
          200: "#F5C1CB",
          300: "#E8899C",
          400: "#D95470",
          500: "#C81E3A", // primary
          600: "#A9152F",
          700: "#8A1128",
          800: "#690D1F",
          900: "#450915",
        },
        // Deep ink navy — text & dark sections
        ink: {
          50: "#F4F5F7",
          100: "#E4E6EA",
          200: "#CDD1D9",
          300: "#8C93A3",
          400: "#6B7280",
          500: "#454C5C",
          600: "#333A47",
          700: "#262B36",
          800: "#1A1E27",
          900: "#0F1218", // near-black base
        },
        // Amber — urgency / emergency signals
        amber: {
          400: "#F0B54C",
          500: "#E8A33D",
          600: "#C9822A",
        },
        // Teal — verified / health / success
        vital: {
          400: "#2BA88F",
          500: "#1F8A70",
          600: "#166B57",
        },
        canvas: "#FAFAF8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "pulse-line": "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 200 40%27%3E%3Cpath d=%27M0 20 L60 20 L70 4 L82 36 L94 20 L200 20%27 fill=%27none%27 stroke=%27%23C81E3A%27 stroke-width=%272%27/%3E%3C/svg%3E')",
      },
      keyframes: {
        pulseLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        floatUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        pulseLine: "pulseLine 2.4s ease-in-out infinite",
        floatUp: "floatUp 0.6s ease-out forwards",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
