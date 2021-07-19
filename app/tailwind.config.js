module.exports = {
  purge: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        title: {
          black: "#2D3748",
          gray: "#718096",
        },
        footer: {
          bg: "#E8E8E8",
        },
      },
      typography: () => ({
        DEFAULT: {
          css: {
            color: "#718096",
            "h1, h2, h3, h4, h5, h6": {
              color: "#2D3748",
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
