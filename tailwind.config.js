/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          colors: {
              "primary": "#fadbde",
              "background-light": "#f8f6f6",
              "background-dark": "#211113",
              "accent-gold": "#d4af37",
          },
          fontFamily: {
              "serif": ["Noto Serif", "serif"],
              "sans": ["Noto Sans", "sans-serif"]
          },
          borderRadius: {
              "DEFAULT": "0.5rem",
              "lg": "1rem",
              "xl": "1.5rem",
              "full": "9999px"
          },
      },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
