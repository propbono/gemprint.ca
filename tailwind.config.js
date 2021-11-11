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
       sans: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        primary: "#00afde",
        secondary: "#354a54",
      },
      backgroundImage: {
        "about-section": "url('/images/About.webp')",
        "hero-section": "url('/images/Hero.webp')",
        "parallax-section": "url('/images/parallax.webp')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
