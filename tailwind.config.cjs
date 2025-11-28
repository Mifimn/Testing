/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: '#0369a1',
          dark: '#075985',
          light: '#0ea5e9',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          dark: '#0891b2',
          light: '#22d3ee',
        },
        urgent: {
          DEFAULT: '#dc2626',
          dark: '#b91c1c',
        },
        'pale-blue': '#f0f9ff',
        'slate-text': '#1e293b',
      },
    },
  },
  plugins: [],
}