import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { socialLinks } from './data/socialLinks';

const Footer: React.FC = () => {
    const location = useLocation();

    // Smooth scroll helper when clicking links
    const handleLinkClick = (path: string) => {
        // If already on the target route, smooth scroll to top
        if (location.pathname === path || (path === '/' && location.pathname === '/')) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        } else {
            // Slight delay ensures route transition finishes before scrolling up
            setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }, 50);
        }
    };


    // MANUALLY EDIT PATHS HERE AS NEEDED
    const menuLinks = [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blogs', path: '/blogs' },
    ];

    const serviceLinks = [
        { name: 'Architecture', path: '/services' },
        { name: 'Design', path: '/services' },
        { name: 'Consultancy', path: '/services' },
        { name: 'Code', path: '/services' },
    ];

    return (
        <footer className="bg-gray-50 dark:bg-black/50 border-t border-gray-200/50 dark:border-gray-800/50 w-full">
            <div className="max-w-[1280px] mx-auto pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 px-8 sm:px-12 md:px-16">
                
                {/* Main Flex Container */}
                <div className="flex flex-col md:flex-row items-start md:items-stretch justify-between gap-10 mb-10 sm:mb-12 md:mb-16">
                    
                    {/* LEFT SIDE: Brand & Socials */}
                    <div className="flex-1 w-full md:w-auto">
                        <Link 
                            to="/" 
                            onClick={() => handleLinkClick('/')}
                            className="font-poppins font-bold text-2xl sm:text-3xl dark:text-dark-text relative inline-block group"
                        >
                            AbhaY
                            <span className="block h-[1px] w-12 sm:w-16 bg-current mt-1 transition-all duration-300 group-hover:w-20"></span>
                            <span className="block h-[1px] w-8 sm:w-10 bg-current mt-1 transition-all duration-300 group-hover:w-14"></span>
                        </Link>

                        {/* Social icons grid */}
                        <div className="mt-5 grid grid-cols-4 gap-2.5 w-fit">
                            {socialLinks.map((social) => (
                                <a 
                                    key={social.name}
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label={social.name}
                                    title={social.name}
                                    className="w-9 h-9 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-full hover:border-theme-red hover:bg-theme-red hover:text-white dark:hover:border-theme-red dark:hover:bg-theme-red dark:hover:text-white transition-all duration-300 text-gray-700 dark:text-gray-300 shadow-sm hover:scale-105"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Menu & Service Lists */}
                    <div className="flex flex-row md:ml-auto items-start md:items-stretch justify-between sm:justify-start gap-12 sm:gap-16 md:gap-20 lg:gap-24 w-full md:w-auto">
                        
                        {/* Menu Column */}
                        <div className="flex-1 sm:flex-none">
                            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-[3px] text-gray-900 dark:text-white mb-4">
                                Menu
                            </h4>
                            <ul className="space-y-2.5">
                                {menuLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link 
                                            to={item.path} 
                                            onClick={() => handleLinkClick(item.path)}
                                            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-theme-red dark:hover:text-theme-red transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service Column */}
                        <div className="flex-1 sm:flex-none">
                            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-[3px] text-gray-900 dark:text-white mb-4">
                                Service
                            </h4>
                            <ul className="space-y-2.5">
                                {serviceLinks.map((item, idx) => (
                                    <li key={`${item.name}-${idx}`}>
                                        <Link 
                                            to={item.path} 
                                            onClick={() => handleLinkClick(item.path)}
                                            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-theme-red dark:hover:text-theme-red transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm gap-3">
                    <p className="opacity-70 text-center sm:text-left">
                        Copyright ©2026 AbhaY. All Rights Reserved.
                    </p>
                    <p className="opacity-70 text-center sm:text-right hover:opacity-100 transition-opacity">
                        <Link 
                            to="/terms" 
                            onClick={() => handleLinkClick('/terms')}
                            className="hover:underline"
                        >
                            Terms of Use
                        </Link>
                        <span className="mx-2">•</span>
                        <Link 
                            to="/privacy" 
                            onClick={() => handleLinkClick('/privacy')}
                            className="hover:underline"
                        >
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;