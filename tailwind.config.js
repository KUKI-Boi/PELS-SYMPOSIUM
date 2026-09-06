/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#071018',
        surface: '#0B1721',
        light: '#F2F4F2',
        accent: '#8FF0CF',
        secondaryAccent: '#64D8FF',
        foreground: '#EEF5F7',
        muted: '#9EAAB3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
