// app/components/Navbar.tsx

import React, { useState } from "react";
import { FaGlobe, FaMoon, FaSun, FaSearch } from 'react-icons/fa'; // Import necessary icons
import { useTranslation } from 'next-i18next'; // Import useTranslation
import i18next from 'i18next'; // Import i18next

function Navbar() {
  const { t } = useTranslation("common"); // Use the correct namespace for translations
  const [isDarkMode, setIsDarkMode] = useState(false); // State for theme toggle
  const [currentLanguage, setCurrentLanguage] = useState('en'); // State for current language

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Here you would also add logic to change the theme of your application
  };

  const changeLanguage = (lang: string) => { // Explicitly declare lang as a string
    i18next.changeLanguage(lang); // Change the language using i18next
    setCurrentLanguage(lang); // Update the current language state
  };

  return (
    <div className="w-[1313px] fixed top-0 left-70 flex items-center h-16 px-6 bg-white shadow-lg md:shadow-2xl justify-between z-50"> {/* Set width to full and fixed position */}
      {/* Left Side: Search Bar */}
      <div className="flex-grow max-w-md relative">
        <FaSearch className="absolute left-3 top-3 text-black" />
        <input
          type="text"
          placeholder={t('search')} // Translated placeholder
          className="w-full pl-9 pr-4 py-2 border border-Secondary rounded-full shadow-sm focus:outline-none focus:ring-Primary focus:border-Primary placeholder-black text-black"
        />
      </div>

      {/* Right Side: Theme Toggle, Language Icon, and Profile Image */}
      <div className="flex items-center ml-6 space-x-1"> {/* Added spacing between elements */}
        {/* Theme Change Button */}
        <button 
          className="rounded-full hover:bg-gray-200 focus:outline-none"
          onClick={toggleTheme}
        >
          {isDarkMode ? (
            <FaSun className="text-black text-xl" /> // Sun icon for light mode
          ) : (
            <FaMoon className="text-black text-xl" /> // Moon icon for dark mode
          )}
        </button>

        {/* Language Icon */}
        <button 
          className="p-3 rounded-full hover:bg-gray-200 focus:outline-none"
          onClick={() => changeLanguage(currentLanguage === 'en' ? 'tr' : 'en')} // Toggle between English and Turkish
        >
          <FaGlobe className="text-black text-xl" /> {/* Globe icon in black */}
        </button>

        {/* Profile Image */}
        <div className="relative w-10 h-10 rounded-full cursor-pointer bg-gray-200">
          <img src="/logo.png" alt="Profile" className="w-full h-full rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Navbar; // This line exports the component
