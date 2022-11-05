/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "repeat(8, minmax(100vh, 1fr))"
      },
      colors: {
        bpisg: "#2ec4b6",
        bpisg2: "#1c9b8e",
        bpisb: "#353866",
        bpisgry: "#7c7c7c",
        bpisgry2: "#aeaeae",
        bpisshdwless: "rgba(17, 17, 17, 0.65)",
        bpisshdw: "rgba(17, 17, 17, 0.75)",
        bpishide: "rgba(0, 0, 0, 0)",
      },
      fontSize: {
        "4xl": "2.4rem",
      },
      spacing: {
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
      divideWidth: {
        1: "1px",
        3: "3px",
      },
      maxWidth: {
        qfix: "1519px",
      },
      keyframes: {
        zoom: {
          "0%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        zoom: "zoom 3s ease-in-out 1",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow"), require("tailwind-scrollbar")],
};
