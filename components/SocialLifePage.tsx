/// <reference types="vite/client" />
import React from 'react';
import ResizableButton from './ResizableButton';

const SocialLifePage: React.FC = () => {
    // Gallery items updated with custom asymmetric grid spans for a dynamic layout
    const galleryImages = [
        { 
            src: "/landing-page-images/DSC_0180.JPG", 
            alt: "Main Gallery", 
            title: "Campus Vibes",
            gridClass: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto"
        },
        { 
            src: "/landing-page-images/trip1.jpg", 
            alt: "Trip 1", 
            title: "Weekend Getaway",
            gridClass: "md:col-span-1 md:row-span-1 aspect-[4/5] md:aspect-auto"
        },
        { 
            src: "/landing-page-images/event1.jpg", 
            alt: "Event 1", 
            title: "Virasat'26 Planning",
            gridClass: "md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto"
        },
        { 
            src: "/landing-page-images/chaos1.jpg", 
            alt: "Chaos", 
            title: "Architecture Studio Life",
            gridClass: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto"
        },
        { 
            src: "/landing-page-images/trip2.jpg", 
            alt: "Trip 2", 
            title: "Mountain Treks",
            gridClass: "md:col-span-2 md:row-span-1 aspect-[16/9] md:aspect-auto"
        },
        { 
            src: "/landing-page-images/random1.jpg", 
            alt: "Random", 
            title: "Random Moments",
            gridClass: "md:col-span-3 md:row-span-1 aspect-[21/9] md:aspect-auto"
        },
    ];

   // Update these string paths and URLs with your actual profile links and image assets
    // Replace 'abhay-130' and the placeholders below with your exact handles/usernames
    const socialLinks = [
        { 
            name: 'LinkedIn', 
            url: 'https://linkedin.com/in/abhay-kishor-y130s', 
            color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]', 
            // Try fetching live, but falls back to your crisp local photo if blocked
            img: 'https://unavatar.io/linkedin/abhay-kishor-y130s?fallback=https://abhaykishor.me/landing-page-images/DSC_0180.JPG' 
        },
        { 
            name: 'X', 
            url: 'https://x.com/your_handle', 
            color: 'hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white', 
            img: 'https://unavatar.io/twitter/your_handle?fallback=https://abhaykishor.me/landing-page-images/DSC_0180.JPG' 
        },
        { 
            name: 'Discord', 
            url: 'https://discordapp.com/users/your_discord_id', 
            color: 'hover:text-[#5865F2] hover:border-[#5865F2]', 
            img: 'https://unavatar.io/discord/your_discord_id?fallback=https://abhaykishor.me/landing-page-images/DSC_0180.JPG' 
        },
        { 
            name: 'Reddit', 
            url: 'https://reddit.com/user/your_username', 
            color: 'hover:text-[#FF4500] hover:border-[#FF4500]', 
            img: 'https://unavatar.io/reddit/your_username?fallback=https://abhaykishor.me/landing-page-images/DSC_0180.JPG' 
        },
        { 
            name: 'Facebook', 
            url: 'https://facebook.com/your_profile', 
            color: 'hover:text-[#1877F2] hover:border-[#1877F2]', 
            img: 'https://unavatar.io/facebook/your_profile?fallback=https://abhaykishor.me/landing-page-images/DSC_0180.JPG' 
        },
    ];

    const scrollToGallery = () => {
        document.getElementById('gallery-grid')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        /* Adjusted margins and padding to match Footer exactly */
        <main className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            {/* --- HERO SECTION --- */}
            <section className="sm:pb-16 md:pb-24 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 w-full">
                <div className="flex-1 flex flex-col items-start px-4 sm:px-0">
                    <p className="text-sm sm:text-base mb-2 font-normal tracking-[3px] text-theme-red uppercase">Life Beyond Design</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] mb-4 font-extrabold leading-tight -tracking-wide">
                        Proof That I Have a Life
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-light-text-muted dark:text-dark-text-muted leading-relaxed max-w-xl">
                        Believe it or not, I do leave my desk! Between ArchiCAD and React, I find time for campus chaos, travel, and the occasional sanity-saving coffee run.
                    </p>
                    <ResizableButton 
                        onClick={scrollToGallery} 
                        size={14} 
                        className="px-6 py-3 mt-8 text-white bg-theme-red rounded-full hover:opacity-80 transition-all shadow-lg shadow-theme-red/20"
                    >
                        Explore Gallery
                    </ResizableButton>
                </div>
                
                <div className="flex-1 flex justify-center lg:justify-end w-full">
                    <div className="relative group">
                        <img 
                            src="/landing-page-images/DSC_0180.JPG" 
                            alt="Featured Moment" 
                            className="rounded-[2rem] object-cover w-full max-w-[600px] h-[400px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" 
                        />
                        <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl hidden sm:block">
                            <p className="font-bold text-sm">📍 IIT Roorkee</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SOCIAL MEDIA CHANNELS HUB (3:2 ASPECT RATIO CHIPS) --- */}
            <section className="pt-12 pb-6 border-t border-gray-100 dark:border-white/10">
                <p className="text-xs font-bold tracking-[3px] text-theme-red uppercase mb-5">Connect Digitally</p>
                <div className="flex flex-wrap gap-4 sm:gap-5">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group/btn flex flex-col items-center justify-center gap-2.5 w-52 h-32 text-xs font-semibold uppercase tracking-wider bg-transparent rounded-2xl border border-gray-200 dark:border-white/10 text-light-text-muted dark:text-dark-text-muted transition-all duration-300 ${link.color} hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.03] dark:hover:shadow-white/[0.02]`}
                        >
                            {/* Profile Image Container inside the Chip */}
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-white/20 scale-100 group-hover/btn:scale-110 transition-transform duration-300 shrink-0">
                                <img 
                                    src={link.img} 
                                    alt={`${link.name} Avatar`} 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* Chip Label */}
                            <span className="font-sans font-bold tracking-widest text-[11px] text-center">{link.name}</span>
                        </a>
                    ))}
                </div>
            </section>


            {/* --- GALLERY GRID SECTION (ASYMMETRIC MASONRY STYLE) --- */}
            <section id="gallery-grid" className="py-16">
                <div className="mb-10">
                    <p className="text-xs font-bold tracking-[3px] text-theme-red uppercase">Visual Log</p>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight uppercase font-sans mt-1">Staggered Perspectives</h3>
                </div>

                {/* 3-Column Complex Grid Framework with Defined Row Increments */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                    {galleryImages.map((image, index) => (
                        <div 
                            key={index} 
                            className={`group relative overflow-hidden rounded-[24px] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 ${image.gridClass}`}
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                            />
                            {/* Linear Shadow Scrim Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Visual Title Details on Hover */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                                <h4 className="text-white font-bold text-base sm:text-lg tracking-wide font-sans translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {image.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- CALL TO ACTION --- */}
            <section className="py-20 text-center bg-gray-50 dark:bg-gray-900/50 rounded-[3rem] mb-12">
                <h3 className="text-2xl font-bold mb-4">Want to hear the stories behind the photos?</h3>
                <p className="text-light-text-muted dark:text-dark-text-muted mb-8">Let's catch up over coffee or a quick call.</p>
                <ResizableButton 
                    onClick={() => window.location.href = 'mailto:abhaykishor130@gmail.com'} 
                    size={13} 
                    className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full"
                >
                    Get in Touch
                </ResizableButton>
            </section>
        </main>
    );
};

export default SocialLifePage;