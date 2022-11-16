/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  daisyui: {
    themes: [
      {
        pupper: {
          "primary": "#90f",
          "secondary": "#f79",
          "accent": "#0f9",
          "neutral": "#203",
          "base-100": "#202",
          "base-200": "#101",
          "base-300": "#080008",
          "info": "#0f9",
          "success": "#36f",
          "warning": "#ff0",
          "error": "#f22",
        },
      },
    ],
  },
  theme: {
    extend: {
      screens: {
        'xxs': '300px',
        'xs': '400px',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
