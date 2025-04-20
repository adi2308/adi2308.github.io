/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

