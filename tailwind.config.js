export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      mobile: "480px",
      tablet: "768px",
      laptop: "976px",
      desktop: "1440px",
    },
    fontFamily: {
      "Roboto-Thin": ["roboto-thin", "sans-serif"],
      "Roboto-Light": ["roboto-light", "sans-serif"],
      "Roboto-ExLight": ["roboto-ex-light", "sans-serif"],
      "Roboto-Regular": ["roboto-regular", "sans-serif"],
      "Roboto-Medium": ["roboto-medium", "sans-serif"],
      "Roboto-SemiBold": ["roboto-semiBold", "sans-serif"],
      "Roboto-Bold": ["roboto-bold", "sans-serif"],
      "Roboto-Black": ["roboto-black", "sans-serif"],
      //
      //
      "Poppins-Thin": ["poppins-thin", "sans-serif"],
      "Poppins-Light": ["poppins-light", "sans-serif"],
      "Poppins-Regular": ["poppins-regular", "sans-serif"],
      "Poppins-Medium": ["poppins-medium", "sans-serif"],
      "Poppins-Bold": ["poppins-bold", "sans-serif"],
      "Poppins-Black": ["poppins-black", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
