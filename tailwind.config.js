/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway"],
        playwrite: ["Playwrite Portugal"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [require("daisyui", "@tailwindcdd/forms")],
  daisyui: {
    themes: ["autumn"],
  },
};
