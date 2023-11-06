/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#06b6d4",
        dark: "#0f172a",
        secondary: "#94a3b8",
      },
      screens: {
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
};
