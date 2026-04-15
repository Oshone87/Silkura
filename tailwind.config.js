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
              "primary": "#e8a0bf",
              "primary-light": "#f5d0e0",
              "primary-dark": "#c77daa",
              "background-light": "#fdf8f9",
              "background-dark": "#1a0a10",
              "accent-gold": "#c9a96e",
              "accent-rose": "#ff6b9d",
          },
          fontFamily: {
              "serif": ["Playfair Display", "serif"],
              "sans": ["DM Sans", "sans-serif"]
          },
          borderRadius: {
              "DEFAULT": "0.5rem",
              "lg": "1rem",
              "xl": "1.5rem",
              "2xl": "2rem",
              "full": "9999px"
          },
          keyframes: {
              'fade-in-up': {
                  '0%': { opacity: '0', transform: 'translateY(30px)' },
                  '100%': { opacity: '1', transform: 'translateY(0)' },
              },
              'fade-in': {
                  '0%': { opacity: '0' },
                  '100%': { opacity: '1' },
              },
              'shimmer': {
                  '0%': { backgroundPosition: '-200% 0' },
                  '100%': { backgroundPosition: '200% 0' },
              },
              'glow-pulse': {
                  '0%, 100%': { boxShadow: '0 0 20px rgba(232, 160, 191, 0.3)' },
                  '50%': { boxShadow: '0 0 40px rgba(232, 160, 191, 0.6)' },
              },
              'float': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-10px)' },
              },
              'scale-in': {
                  '0%': { opacity: '0', transform: 'scale(0.95)' },
                  '100%': { opacity: '1', transform: 'scale(1)' },
              },
              'slide-up': {
                  '0%': { opacity: '0', transform: 'translateY(100%)' },
                  '100%': { opacity: '1', transform: 'translateY(0)' },
              },
          },
          animation: {
              'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
              'fade-in': 'fade-in 0.6s ease-out forwards',
              'shimmer': 'shimmer 3s linear infinite',
              'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
              'float': 'float 6s ease-in-out infinite',
              'scale-in': 'scale-in 0.5s ease-out forwards',
              'slide-up': 'slide-up 0.4s ease-out forwards',
          },
      },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
