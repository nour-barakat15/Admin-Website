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
      width: {
        '140': '35rem'
      }
      // boxShadow: {
      //   'custom-lg': '0 10px 30px rgba(0, 0, 0, 1)', // Custom shadow example
      // },
    },
  },
  plugins: [],
};
