import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        default: "2rem",
        xs: "1rem",
        sm: "2rem",
        lg: "0rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
      colors: {
        primary: "#00afde",
        secondary: "#354a54",
        "secondary-dark": "#0d222b",
        "secondary-light": "#607680",
        "primary-light": "#63e1ff",
        "primary-dark": "#0080ac",
        "off-white": "#ECF0F1",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "about-section": "url('/images/About.webp')",
        "hero-section": "url('/images/Hero.webp')",
        "parallax-section": "url('/images/Parallax.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
