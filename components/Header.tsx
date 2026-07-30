import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle'; 

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Smooth scroll helper for logo and active nav links
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  // Handles clicking on navigation links
  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);

    // If already on the clicked page, smooth scroll to the top
    if (location.pathname === path || (path === '/' && location.pathname === '/')) {
      scrollToTop();
    } else {
      // Small timeout ensures react-router route change happens before scrolling to top
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, 50);
    }
  };

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Social Life', path: '/social-life' },
    { name: 'Services', path: '/services' },
    { name: 'Blogs', path: '/blogs' },
  ];

  return (
    // Fixed wrapper is transparent so the "pill" looks floating
    <header className="fixed top-0 left-0 right-0 z-40 bg-transparent transition-all duration-300 pt-4 sm:pt-6 px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20">
      
      {/* THE GLASS PILL */}
      <div className="max-w-[1440px] mx-auto h-16 md:h-20 flex items-center justify-between px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20 
                      bg-white/10 dark:bg-black/20 backdrop-blur-md 
                      border border-white/20 dark:border-white/10 
                      rounded-full shadow-lg">
        
        {/* 1. LOGO / BRAND NAME - Scrolls to top on click */}
        <div className="flex-shrink-0">
          <Link 
            to="/" 
            onClick={() => handleNavClick('/')}
            className="font-bold text-lg sm:text-2xl hover:text-theme-red dark:hover:text-theme-red transition-colors"
          >
            ABHAY KISHOR
          </Link>
        </div>

        {/* 2. DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => handleNavClick(item.path)}
              className="text-sm xl:text-base font-bold uppercase tracking-widest whitespace-nowrap hover:text-theme-red dark:hover:text-theme-red transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* 3. CONTACT BUTTON */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              onClick={() => handleNavClick('/contact')}
              className="px-6 py-2 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-theme-red hover:text-white transition-all shadow-md"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Menu (Mobile/Tablet) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden py-1 px-3 rounded-full border border-white/20 font-semibold hover:bg-white/10 transition-colors flex-shrink-0 text-light-text dark:text-dark-text"
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
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-24 left-4 right-4 z-30 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <nav className="flex flex-col px-6 py-8 space-y-6">
            {[...navItems, { name: 'Contact', path: '/contact' }].map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                onClick={() => handleNavClick(item.path)}
                className="text-xl font-bold uppercase tracking-tight hover:text-theme-red dark:hover:text-theme-red transition-colors text-light-text dark:text-dark-text"
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