import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        RobotoThin: ["roboto-thin", "sans-serif"],
        RobotoRegular: ["roboto-reg", "sans-serif"],
        RobotoMedium: ["roboto-med", "sans-serif"],
        RobotoLight: ["roboto-light", "sans-serif"],
        RobotoBold: ["roboto-bold", "sans-serif"],
        RobotoBlack: ["roboto-black", "sans-serif"],
      },
      colors: {
        primary: "#0466c8",
        secondary: "#8b2fc9",
        tertiary: "#00c49a",
        accent: "#ca1f3d",
        "surf-1": "#f8f9fa",
        "surf-2": "#e9ecef",
        "surf-3": "#dee2e6",
        "surf-4": "#ced4da",
        "surf-5": "#adb5bd",
        "surf-6": "#6c757d",
        "surf-7": "#495057",
        "surf-8": "#343a40",
        "surf-9": "#212529",
      },
      backgroundImage: {
        auth: "url(./assets/images/gaming-pc-6.jpg)",
      },
    },
    colors: {
      ...colors, // اضافه کردن رنگ‌های پیش‌فرض Tailwind
    },
  },
  plugins: [],
};
