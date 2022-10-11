/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './utils/**/*.{md,vue,js}',
    './utils/.vitepress/**/*.{html,js,vue,ts,md}'
  ],
  plugins: [
    require("daisyui")
  ]
}
