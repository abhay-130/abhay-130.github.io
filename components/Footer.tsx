import React from 'react';

const Footer: React.FC = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/abhay-kishor-y130s',
            label: 'in',
            icon: (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
            )
        },
        {
            name: 'Behance',
            url: 'https://www.behance.net/abhaykishor130',
            label: 'Bē',
            icon: (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 7h-7V5h7v2zm-1.7 8c0-2.3-1.4-3.7-3.5-3.7-2.3 0-3.8 1.6-3.8 3.8 0 2.4 1.5 3.9 3.9 3.9 1.8 0 3.1-.9 3.5-2.2h-2c-.2.5-.8.8-1.5.8-.9 0-1.6-.5-1.7-1.4h5.1c0-.4 0-.8 0-1.2zm-5.1-1c.1-.8.7-1.3 1.5-1.3.8 0 1.4.5 1.5 1.3h-3zm-7.2 6H2V5h5.8c2.4 0 3.8 1.1 3.8 2.7 0 1.1-.6 1.9-1.5 2.3 1.2.4 2 1.4 2 2.8 0 1.8-1.4 3.2-4.1 3.2zm-3.7-7.2h3.1c1 0 1.6-.4 1.6-1.2 0-.8-.6-1.2-1.6-1.2H4v2.4zm0 5.2h3.4c1.1 0 1.8-.5 1.8-1.4 0-.9-.7-1.4-1.8-1.4H4v2.8z"/>
                </svg>
            )
        },
        {
            name: 'X (Twitter)',
            url: 'https://x.com/abhay__130',
            label: 'X',
            icon: (
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
            )
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/abhay_130_',
            label: 'Ig',
            icon: (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            )
        },
        {
            name: 'Threads',
            url: 'https://www.threads.net/abhay_130_',
            label: 'Th',
            icon: (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.001 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12.001 12 6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12zm4.17 17.514c-1.321 1.258-3.15 1.956-5.15 1.956-3.818 0-6.921-2.91-6.921-6.837 0-3.928 3.103-6.838 6.921-6.838 3.725 0 6.657 2.762 6.657 6.42 0 2.684-1.637 4.544-3.87 4.544-1.077 0-1.921-.59-2.196-1.554h-.08c-.462.964-1.408 1.554-2.584 1.554-1.794 0-3.033-1.309-3.033-3.069 0-2.316 1.898-3.92 4.808-3.92.693 0 1.436.096 2.115.269v-.416c0-1.764-1.128-2.68-2.82-2.68-1.257 0-2.334.468-3.001 1.231l-1.334-1.333c1.077-1.18 2.744-1.769 4.603-1.769 2.923 0 5.026 1.615 5.026 4.718v4.923c0 .82.257 1.282.795 1.282 1.154 0 2.103-1.23 2.103-3.23 0-3.026-2.359-5.282-5.487-5.282-3.129 0-5.488 2.256-5.488 5.282 0 3.026 2.359 5.282 5.488 5.282 1.205 0 2.334-.333 3.257-.923l.872 1.487z"/>
                </svg>
            )
        },
        {
            name: 'Reddit',
            url: 'https://www.reddit.com/u/abhaykishor',
            label: 'Re',
            icon: (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.562-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.562-1.249-1.25-1.249zm-4.466 3.99a.33.33 0 0 0-.232.098.33.33 0 0 0 0 .465c.708.709 1.847.95 2.948.95 1.101 0 2.239-.241 2.948-.95a.33.33 0 0 0 0-.465.33.33 0 0 0-.465 0c-.546.546-1.492.748-2.483.748-.991 0-1.938-.202-2.483-.748a.33.33 0 0 0-.233-.098z"/>
                </svg>
            )
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/8273746070',
            label: 'Wa',
            icon: (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
            )
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/abhay130s',
            label: 'f',
            icon: (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            )
        }
    ];

    return (
        <footer className="bg-gray-50 dark:bg-black/50 border-t border-gray-200/50 dark:border-gray-800/50 w-full">
            {/* 
              CONTAINER: 
              max-w-[1280px] matches your floating header bounds.
              px-8 sm:px-12 md:px-16 keeps text tucked inside the header edges.
            */}
            <div className="max-w-[1280px] mx-auto pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 px-8 sm:px-12 md:px-16">
                
                {/* Main Flex Container */}
                <div className="flex flex-col md:flex-row items-start md:items-stretch justify-between gap-10 mb-10 sm:mb-12 md:mb-16">
                    
                    {/* LEFT SIDE: Brand & Socials */}
                    <div className="flex-1 w-full md:w-auto">
                        <a href="#" className="font-poppins font-bold text-2xl sm:text-3xl dark:text-dark-text relative inline-block group">
                            AbhaY
                            <span className="block h-[1px] w-12 sm:w-16 bg-current mt-1 transition-all duration-300 group-hover:w-20"></span>
                            <span className="block h-[1px] w-8 sm:w-10 bg-current mt-1 transition-all duration-300 group-hover:w-14"></span>
                        </a>

                        {/* Social icons grid (Strictly 4 on top, 4 on bottom) */}
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
                                {['Home', 'About', 'Services', 'Blogs'].map((item) => (
                                    <li key={item}>
                                        <a 
                                            href="#" 
                                            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-theme-red dark:hover:text-theme-red transition-colors"
                                        >
                                            {item}
                                        </a>
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
                                {['Branding', 'Design', 'Marketing', 'Development'].map((item) => (
                                    <li key={item}>
                                        <a 
                                            href="#" 
                                            className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-theme-red dark:hover:text-theme-red transition-colors"
                                        >
                                            {item}
                                        </a>
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
                        <a href="/terms" className="hover:underline">Terms of Use</a>
                        <span className="mx-2">•</span>
                        <a href="/privacy" className="hover:underline">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;