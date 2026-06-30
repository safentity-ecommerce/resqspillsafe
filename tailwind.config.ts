import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f4c336",
        "primary-hover": "#e4ae12",
        surface: {
          light: "#f8f8f8",
          muted: "#f2f2f2",
          dark: "#2d2d2d",
        },
        text: {
          primary: "#010103",
          secondary: "#706f7b",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "133rem",
      },
    },
  },
  plugins: [],
}

export default config
