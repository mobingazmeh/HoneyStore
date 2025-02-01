/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        A: '#f7ece5',
        B: '#fddb05',
        C: '#a13502',
      },
      animation: {
        rotate: 'rotate 10s linear infinite', // تنظیم انیمیشن چرخش
      },
      keyframes: {
        rotate: {
          '0%': {
            transform: 'rotate(0deg)', // شروع از 0 درجه
          },
          '100%': {
            transform: 'rotate(360deg)', // چرخش به 360 درجه
          },
        },
      },
    },
  },
  plugins: [],
};
