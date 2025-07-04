/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        black: ["Poppins-Black", "sans-serif"],
        bold: ["Poppins-Bold", "sans-serif"],
        semiBold: ["Poppins-SemiBold", "sans-serif"],
        medium: ["Poppins-Medium", "sans-serif"],
        regular: ["Poppins-Regular", "sans-serif"],
        light: ["Poppins-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
