/** @type {import('tailwindcss').Config} */
module.exports = {
  // The 'content' array is crucial! It tells Tailwind where to find your class names.
  // Tailwind will scan these files and only include the CSS for classes it finds.
  content: [
    "./index.html", // For the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // For all JavaScript/TypeScript/JSX/TSX files in the src directory and its subdirectories
  ],
  theme: {
    // The 'extend' object allows you to add to Tailwind's default theme (colors, spacing, etc.)
    // without overwriting it.
    extend: {
      // Example: You could add custom colors here
      // colors: {
      //   'primary-blue': '#3490dc',
      // },
    },
  },
  plugins: [], // This is where you'd add any Tailwind plugins (e.g., @tailwindcss/forms)
}