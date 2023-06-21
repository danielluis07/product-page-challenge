/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        mainorange: "hsl(26, 100%, 55%)",
        paleorange: "hsl(25, 100%, 94%)",
        verydarkblue: "hsl(220, 13%, 13%)",
        grayishblue: "hsl(220, 14%, 75%)",
        lightgrayishblue: "hsl(223, 64%, 98%)",
        mainwhite: "hsl(0, 0%, 100%)",
        opacityblack: "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [],
};
