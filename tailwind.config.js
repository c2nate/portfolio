/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 🌞 Light mode
        light: {
          bg: '#EBE5DA',
          card: '#051526',
          text: '#1e1e1e',
          accent: '#2563eb', // blue-600
        },
        // 🌚 Dark mode
        dark: {
          bg: '#051526',
          card: '#171717',
          text: '#e5e7eb',
          accent: '#60a5fa', // blue-400
        },
      },
    },
  },
  plugins: [],
}
