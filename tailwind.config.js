/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: { Onest: ["Onest"] } },
    screens: {
      "  2xl": { min: "1600px" },
      laptop: { max: "1200px" },
    },
  },
  plugins: [],
};
