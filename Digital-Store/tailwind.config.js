/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      rotate: {
        '165': '165deg', // Rotação de 30°
        '159': '159deg', // Rotação de 135°
        '-60': '-60deg', // Rotação de -60° (anti-horário)
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}