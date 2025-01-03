import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
        primary: "#010511",
        secondary: "#fff",
        tertiary: "#ffbe00",
        accent: "#ca1f3d",
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
