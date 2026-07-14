import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle'; 

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Fixed wrapper is now transparent so the "pill" looks like it's floating
    <header className="fixed top-0 left-0 right-0 z-40 bg-transparent transition-all duration-300 pt-4 sm:pt-6">
      
      {/* THE GLASS PILL: Added rounded-full, border, and backdrop-blur */}
      <div className="max-w-[1440px] mx-auto h-16 md:h-20 flex items-center justify-between px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20 
                      bg-white/10 dark:bg-black/20 backdrop-blur-md 
                      border border-white/20 dark:border-white/10 
                      rounded-full shadow-lg mx-4 sm:mx-10 md:mx-12 lg:mx-16 xl:mx-20">
        
        {/* 1. LOGO */}
        <div className="flex-shrink-0">
          <Link to="/" className="font-bold text-lg sm:text-2xl hover:text-theme-red dark:hover:text-theme-red transition-colors">
            ABHAY KISHOR
          </Link>
        </div>

        {/* 2. DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {[
            { name: 'About', path: '/about' },
            { name: 'Projects', path: '/projects' },
            { name: 'Social Life', path: '/social-life' },
            { name: 'Services', path: '/services' },
            { name: 'Blogs', path: '/blogs' },
            ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="text-sm xl:text-base font-bold uppercase tracking-widest whitespace-nowrap hover:text-theme-red dark:hover:text-theme-red transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* 3. CONTACT BUTTON - Matches the white pill in your image */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="px-6 py-2 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-theme-red hover:text-white transition-all shadow-md"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Menu (Mobile/Tablet) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden py-1 px-3 rounded-full border border-white/20 font-semibold hover:bg-white/10 transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

           {/* Theme Toggle */}
           <div className="flex items-center">
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} variant="relative" />
          </div>

        </div>
      </div>
      
      {/* Mobile Menu - Also given a glass effect to match */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-24 left-4 right-4 z-30 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <nav className="flex flex-col px-6 py-8 space-y-6">
            {
            [
              { name: 'About', path: '/about' },
              { name: 'Projects', path: '/projects' },
              { name: 'Social Life', path: '/social-life' },
              { name: 'Services', path: '/services' },
              { name: 'Blogs', path: '/blogs' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-bold uppercase tracking-tight hover:text-theme-red dark:hover:text-theme-red transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;