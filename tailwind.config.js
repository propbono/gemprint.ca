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
        default: "1.5rem",
        lg: "0rem",
      },
    },
    extend: {
      colors: {
        primary: "#00afde",
        secondary: "#354a54",
      },
      backgroundImage: {
        "about-section": "url('/images/About.webp')",
        "hero-section": "url('/images/Hero.webp')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
