/** @type {import('tailwindcss').Config} */
import lineClamp from '@tailwindcss/line-clamp'; 
import scrollbar from 'tailwindcss-scrollbar';
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
  plugins: [
    // require('@tailwindcss/line-clamp'),
    lineClamp,
    scrollbar,
  ],
};
