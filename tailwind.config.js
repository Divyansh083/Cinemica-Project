/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        divyansh: {
          50: "#ffe8e8",
          100: "#f3c1c3",
          200: "#e5999c",
          300: "#da7175",
          400: "#ecf4a4e",
          500: "#b53035",
          600: "#8e2528",
          700: "#661a1d",
          800: "#3e0d10",
          900: "#1b0203",
        },
        bms: {
          50: "#ffe8e8",
          100: "#f3c1c3",
          200: "#e5999c",
          300: "#da7175",
          400: "#ecf4a4e",
          500: "#b53035",
          600: "#8e2528",
          700: "#333",
          800: "#2b3147",
          900: "#1b0203",
        },
      },
    },
  },
  plugins: [],
};
