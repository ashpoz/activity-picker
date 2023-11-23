/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        checkmark: "url('src/assets/icons/checkmark.svg')"
      }
    }
  },
  plugins: []
}