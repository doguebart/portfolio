/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto",
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "menu-slide-in": "menu-slide-in 0.5s ease-in",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "menu-slide-in": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
