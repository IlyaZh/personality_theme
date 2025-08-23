/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.hbs",
    "./partials/**/*.hbs",
    "./assets/js/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': 'var(--gh-font-heading)',
        'body': 'var(--gh-font-body)',
      },
      colors: {
        'ghost-accent': 'var(--ghost-accent-color)',
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
}
