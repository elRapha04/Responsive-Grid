/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.1, 2.7, 0.98, 1)",
        "out-expo": "cubic-bezier(1, 0.25, 0.1, 1)",
      },
    },
  },
  plugins: [],
};
