/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#07bf8b",

          secondary: "#e031ab",

          accent: "#e2669c",

          neutral: "#211627",

          "base-100": "#E0E0EB",

          info: "#2459E0",

          success: "#53E4C0",

          warning: "#F7B84B",

          error: "#E12D5D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
