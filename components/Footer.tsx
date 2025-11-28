import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 dark:bg-black/50">
            <div className="max-w-[1440px] mx-auto pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                
                {/* Main Flex Container */}
                <div className="flex flex-col md:flex-row items-start md:items-stretch justify-between gap-10 mb-8 sm:mb-10 md:mb-12">
                    
                    {/* LEFT SIDE: Brand & Socials */}
                    <div className="ml-0 md:ml-3 flex-1 w-full md:w-auto">
                        <a href="#" className="font-poppins font-bold text-2xl sm:text-3xl dark:text-dark-text relative inline-block">
                            AbhaY
                            <span className="block h-[1px] w-12 sm:w-16 bg-current mt-1"></span>
                            <span className="block h-[1px] w-8 sm:w-10 bg-current mt-1"></span>
                        </a>
                        <div className="mt-3 flex space-x-3">
                            {/* LinkedIn */}
                            <a 
                                href="https://www.linkedin.com/in/abhay-kishor-y130s" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-8 h-8 flex items-center justify-center border-2 border-light-text dark:border-dark-text rounded-full hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors text-sm"
                            >
                                in
                            </a>

                            {/* Behance */}
                            <a 
                                href="https://www.behance.net/abhaykishor130" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-8 h-8 flex items-center justify-center border-2 border-light-text dark:border-dark-text rounded-full hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors text-sm"
                            >
                                Bē
                            </a>
                            
                            {/* X (Twitter) */}
                            <a 
                                href="https://x.com/abhay__130" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-8 h-8 flex items-center justify-center border-2 border-light-text dark:border-dark-text rounded-full hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors text-sm"
                            >
                                X
                            </a>
                            
                            {/* Facebook */}
                            <a 
                                href="https://www.facebook.com/abhay130s" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-8 h-8 flex items-center justify-center border-2 border-light-text dark:border-dark-text rounded-full hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors text-sm"
                            >
                                f
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Menu & Service Lists */}
                    {/* CHANGED: 'flex-col' -> 'flex-row' to make them sit side-by-side on mobile */}
                    {/* ADDED: 'justify-between sm:justify-start' to spread them out nicely on mobile */}
                    <div className="flex flex-row md:ml-auto items-start md:items-stretch justify-between sm:justify-start gap-12 sm:gap-12 md:gap-16 lg:gap-20 w-full md:w-auto">
                        
                        {/* Menu Column */}
                        <div className="flex-1 sm:flex-none">
                            <h4 className="font-bold text-base sm:text-lg uppercase tracking-[3px] text-theme-white mb-3 sm:mb-4">Menu</h4>
                            <ul className="space-y-2">
                                {['Home', 'About', 'Services', 'Blogs'].map(item => (
                                    <li key={item}><a href="#" className="text-sm sm:text-base hover:text-theme-red transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Service Column */}
                        <div className="flex-1 sm:flex-none">
                            <h4 className="font-bold text-base sm:text-lg uppercase tracking-[3px] text-theme-white mb-3 sm:mb-4">Service</h4>
                            <ul className="space-y-2">
                                {['Branding', 'Design', 'Marketing', 'Development'].map(item => (
                                    <li key={item}><a href="#" className="text-sm sm:text-base hover:text-theme-red transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-300 dark:border-gray-700 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-light-text-muted dark:text-dark-text-muted text-xs sm:text-sm">
                    <p style={{ opacity: .3 }}>Copyright © 2024 Abhay. All Rights Reserved.</p>
                    <p className="mt-2 md:mt-0" style={{ opacity: .3 }}>Terms of Use | Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;