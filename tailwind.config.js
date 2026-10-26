/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F0E4",       // light-mode page background (tint of Oatmeal)
        oat: "#E8DCC6",         // Oatmeal
        pine: {
          DEFAULT: "#1F3B2E",   // Pine Green
          soft: "#4A5F54",      // muted text on light backgrounds
          line: "#35584A",      // borders and surfaces in dark mode
        },
        lilac: {
          DEFAULT: "#CBB3E8",   // Soft Lilac
          deep: "#6B4A9A",      // Lilac for text and icons on light backgrounds
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};