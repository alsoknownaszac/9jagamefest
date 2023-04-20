/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "3xs": "360px",
      "2xs": "414px",
      xs: "480px",
      sm: "576px",
      md: "640px",
      lg: "768px",
      xl: "976px",
      "2xl": "1024px",
    },
    extend: {
      backgroundImage: {
        hero: "url('/bg.png')",
        s1img2: "url('/s1img2.png')",
        FAQ_bg1: "url('/FAQ_bg1.svg')",
        FAQ_bg2: "url('/FAQ_bg2.svg')",
        FAQ_bg3: "url('/FAQ_bg3.svg')",
      },
      screens: {
        "3xl": "1280px",
        "4xl": "1440px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "2rem",
        md: "3.5rem",
        lg: "2rem",
        xl: "4.5rem",
      },
    },
  },
  plugins: [],
};
