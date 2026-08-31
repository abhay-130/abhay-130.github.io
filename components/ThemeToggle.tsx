
import React from 'react';
import { MoonIcon, SunIcon } from './icons';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  variant?: 'fixed' | 'relative'; // Add variant prop
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme, variant = 'fixed' }) => {
  const baseClasses = "sun-and-moon px-2 py-1 rounded-full bg-gray-900 dark:bg-gray-500 text-base sm:text-lg transition-transform duration-300 ease-in-out hover:scale-110";
  
  const variantClasses = variant === 'fixed' 
    ? "fixed top-4 sm:top-6 md:top-7 right-3 sm:right-4 md:right-5 z-50"
    : "relative z-10";
  
  return (
    <button
      onClick={toggleTheme}
      className={`${baseClasses} ${variantClasses}`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;
