/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "Soft-Blue": "hsl(231, 69%, 60%)",
        "Soft-Red": "hsl(0, 94%, 66%)",
        "Grayish-Blue": "hsl(229, 8%, 60%)",
        "Very-Dark-Blue": "hsl(229, 31%, 21%)",
      },
      fontFamily: {
        Rubik: "'Rubik', sans-serif",
      },
    },
  },
  plugins: [],
};
