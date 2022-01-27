module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
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
        "about-section": "url('/images/About.webp')",
        "hero-section": "url('/images/Hero.webp')",
        "parallax-section": "url('/images/Parallax.webp')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
