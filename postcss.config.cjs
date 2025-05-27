module.exports = {
  plugins: [
    // This plugin processes Tailwind directives (@tailwind) and generates the CSS.
    require('tailwindcss'),
    // This plugin adds vendor prefixes to CSS rules (e.g., -webkit-, -moz-) for browser compatibility.
    require('autoprefixer'),
  ],
};