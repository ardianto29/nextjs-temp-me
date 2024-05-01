const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = /** @satisfies {import('tailwindcss').Config} */ ({
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", //
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: "#fff",
        black: "#000",
      },
    },
    container: {
      center: true,
      screens: {
        md: "90rem",
      },
    },
    screens: {
      xs: "360px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addBase, addComponents }) => {
      addBase({
        "html, body": {
          "@apply scroll-smooth scroll-pt-12": {},
        },
      });

      addComponents({
        ".ts-h1": {
          "@apply text-[2.75rem] xl:text-[4rem] font-bold leading-normal": {},
        },
        ".ts-h2": {
          "@apply text-[2rem] xl:text-[2.5rem] font-bold leading-normal": {},
        },
        ".ts-h3": {
          "@apply text-[1.75rem] xl:text-[2rem] font-bold leading-normal": {},
        },
        ".ts-h4": {
          "@apply text-2xl xl:text-[1.75rem] font-semibold leading-6": {},
        },
        ".ts-lg": {
          "@apply font-inter text-xl leading-8": {},
        },
        ".ts-base": {
          "@apply font-inter text-base leading-6": {},
        },
        ".ts-sm": {
          "@apply font-inter text-xs leading-6": {},
        },
      });
    }),
  ],
});
