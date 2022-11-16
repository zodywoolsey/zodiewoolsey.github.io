/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#97f",
            "secondary": "#f79",
            "accent": "#0f9",
            "neutral": "#059",
            "base-100": "#013",
            "info": "#0f9",
            "success": "#36f",
            "warning": "#ff0",
            "error": "#f22",
          },
        },
      ],
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}