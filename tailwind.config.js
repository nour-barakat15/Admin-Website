/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // This keeps searching through all files in app and its subdirectories
    "./app/components/Navbar.tsx", // Specifically targets the Navbar component
    "./app/components/Sidebar.tsx", // Specifically targets the Sidebar component
    "./app/layout.tsx", // Targets layout file
    "./app/page.tsx", // Targets main page file
    "./app/global.css" // Targets global CSS file if necessary
  ],
  theme: {
    extend: {
      colors: {
        'Primary': '#F1722A',
        'Secondary': '#093D56',
        
      },
    },
  },
  plugins: [],
};
