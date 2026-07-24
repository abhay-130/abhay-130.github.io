/// <reference types="vite/client" />
import React, { useEffect, useState } from 'react';
import ResizableButton from './ResizableButton';
import { sanityClient } from './data/sanityClient';

interface SocialMediaPost {
    id: string;
    title: string;
    location?: string;
    image: string;
    youtubeUrl?: string;
    gridSpan?: string;
}

const SocialIcons = {
    LinkedIn: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    ),
    X: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.617l-5.21-6.816-6.022 6.816h-3.308l7.73-8.807-8.359-10.69h6.785l4.596 6.144 5.432-6.144z" />
        </svg>
    ),
    Discord: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4464.8245-.6667 1.2835-2.244-.2852-4.5892-.2852-6.8257 0-.228-.4706-.464-.9245-.683-1.299-.02-.043-.06-.06-.1-.05-.02.01-.03.03-.02.05-1.683.44-3.22.99-4.54 1.6-.03.02-.05.05-.05.08-.02.08-.01.15.02.23-1.16 2.1-1.74 4.56-1.74 7.06 0 4.7 2.01 8.81 5.1 11.36.03.02.07.03.1.02.05-.02.08-.06.08-.11 0-.04-.01-.08-.04-.11-.53-.41-1.02-.9-1.45-1.45-.05-.06-.05-.14-.01-.2.04-.06.12-.08.18-.04 3.53 2.16 7.64 2.16 11.17 0 .06.04.14.02.18-.04.04-.06.04-.12.01-.2-.43.55-.92 1.04-1.45 1.45-.03.03-.04.07-.04.11 0 .05.03.09.08.11.03.01.07 0 .1-.02 3.09-2.55 5.1-6.66 5.1-11.36 0-2.5-.58-4.96-1.74-7.06-.03-.08-.04-.15-.02-.23.01-.03-.01-.06-.04-.08zM8.021 15.3316c-1.3867 0-2.5167-1.203-2.5167-2.683s1.13-2.683 2.5167-2.683c1.3866 0 2.5166 1.203 2.5166 2.683s-1.13 2.683-2.5166 2.683zm4.9833 0c-1.3867 0-2.5167-1.203-2.5167-2.683s1.13-2.683 2.5167-2.683c1.3866 0 2.5166 1.203 2.5166 2.683s-1.13 2.683-2.5166 2.683z" />
        </svg>
    ),
    Reddit: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.21 14.43c0 1.06-.86 1.92-1.92 1.92s-1.92-.86-1.92-1.92.86-1.92 1.92-1.92 1.92.86 1.92 1.92zm-6.3-5.49c1.06 0 1.92-.86 1.92-1.92s-.86-1.92-1.92-1.92-1.92.86-1.92 1.92.86 1.92 1.92 1.92zm-2.13 6.21c.35-.45.96-.6 1.41-.25.45.35.6.96.25 1.41-1.1 1.42-2.79 2.26-4.74 2.26-1.95 0-3.64-.84-4.74-2.26-.35-.45-.1-1.06.35-1.41.45-.35 1.06-.1 1.41.35.79.97 1.95 1.55 3.33 1.55s2.54-.58 3.33-1.55zm8.43-2.93c1.06 0 1.92-.86 1.92-1.92s-.86-1.92-1.92-1.92-1.92.86-1.92 1.92.86 1.92 1.92 1.92z" />
        </svg>
    ),
    Facebook: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
    ),
    Instagram: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
        </svg>
    ),
    Threads: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M14.131 2.012c-2.836.03-5.32.954-7.103 2.63-1.785 1.677-2.62 3.985-2.62 6.358 0 2.25.78 4.4 2.386 6.04 1.65 1.68 3.91 2.61 6.33 2.61s4.68-.93 6.33-2.61c1.607-1.64 2.386-3.79 2.386-6.04 0-2.373-.835-4.68-2.62-6.358-1.783-1.677-4.267-2.6-7.103-2.63zm-3.13 16.623c-1.25-.2-2.3-.7-3.13-1.43-.83-.73-1.38-1.68-1.63-2.78-.25-1.1-.2-2.25.13-3.3.33-1.05.9-1.98 1.68-2.73.78-.75 1.73-1.3 2.78-1.6.9-.26 1.8-.3 2.7-.1.9.2 1.75.63 2.5 1.25.75.63 1.33 1.43 1.7 2.35.2.48.3.98.3 1.48s-.1 1-.3 1.48c-.37.92-.95 1.72-1.7 2.35-.75.62-1.6 1.05-2.5 1.25-.9.2-1.8.16-2.7-.1z" />
        </svg>
    ),
    WhatsApp: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95l-1.44 5.26 5.39-1.41c1.44.84 3.08 1.31 4.8 1.31h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.16h-.01c-1.5 0-2.98-.4-4.3-1.15l-.31-.18-3.2 1.05 1.07-3.11-.2-.33c-.83-1.38-1.27-2.98-1.27-4.64 0-4.54 3.69-8.23 8.24-8.23 4.54 0 8.23 3.69 8.23 8.23s-3.69 8.23-8.23 8.23zm4.49-5.45c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.5.12-.11.25-.29.38-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.06 0 1.22.88 2.39 1 2.56.12.17 1.75 2.67 4.24 3.74 2.49 1.07 2.49.71 2.94.69.45-.02 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.05-.12-.2-.19-.44-.31z" />
        </svg>
    ),
};

const defaultGalleryImages = [
    { 
        id: '1',
        image: "/landing-page-images/DSC_0180.JPG", 
        title: "Campus Vibes",
        gridSpan: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto"
    },
    { 
        id: '2',
        image: "/landing-page-images/trip1.jpg", 
        title: "Weekend Getaway",
        gridSpan: "md:col-span-1 md:row-span-1 aspect-[4/5] md:aspect-auto"
    },
    { 
        id: '3',
        image: "/landing-page-images/event1.jpg", 
        title: "Virasat'26 Planning",
        gridSpan: "md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto"
    },
    { 
        id: '4',
        image: "/landing-page-images/chaos1.jpg", 
        title: "Architecture Studio Life",
        gridSpan: "md:col-span-1 md:row-span-1 aspect-square md:aspect-auto"
    },
    { 
        id: '5',
        image: "/landing-page-images/trip2.jpg", 
        title: "Mountain Treks",
        gridSpan: "md:col-span-2 md:row-span-1 aspect-[16/9] md:aspect-auto"
    },
    { 
        id: '6',
        image: "/landing-page-images/random1.jpg", 
        title: "Random Moments",
        gridSpan: "md:col-span-3 md:row-span-1 aspect-[21/9] md:aspect-auto"
    },
];

const SocialLifePage: React.FC = () => {
    const [galleryPosts, setGalleryPosts] = useState<SocialMediaPost[]>(defaultGalleryImages);

    useEffect(() => {
        // GROQ Query to fetch Sanity Social Posts sorted by newest date
        const query = `*[_type == "socialPost"] | order(date desc) {
            "id": _id,
            title,
            location,
            "image": image.asset->url,
            youtubeUrl,
            gridSpan
        }`;

        sanityClient
            .fetch(query)
            .then((data: SocialMediaPost[]) => {
                if (data && data.length > 0) {
                    setGalleryPosts(data);
                }
            })
            .catch((err) => {
                console.warn("Sanity social posts fetch error (using fallback items):", err);
            });
    }, []);

    const socialLinks = [
        { 
            name: 'LinkedIn', 
            url: 'https://linkedin.com/in/abhay-kishor-y130s', 
            color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]', 
            icon: <SocialIcons.LinkedIn />
        },
        { 
            name: 'X', 
            url: 'https://x.com/abhay__130', 
            color: 'hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white', 
            icon: <SocialIcons.X />
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/your_handle',
            color: 'hover:text-[#E1306C] hover:border-[#E1306C]',
            icon: <SocialIcons.Instagram />
        },
        {
            name: 'Threads',
            url: 'https://threads.net/@your_handle',
            color: 'hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white',
            icon: <SocialIcons.Threads />
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/918273746070',
            color: 'hover:text-[#25D366] hover:border-[#25D366]',
            icon: <SocialIcons.WhatsApp />
        },
        { 
            name: 'Discord', 
            url: 'https://discordapp.com/users/your_discord_id', 
            color: 'hover:text-[#5865F2] hover:border-[#5865F2]', 
            icon: <SocialIcons.Discord />
        },
        { 
            name: 'Reddit', 
            url: 'https://reddit.com/user/your_username', 
            color: 'hover:text-[#FF4500] hover:border-[#FF4500]', 
            icon: <SocialIcons.Reddit />
        },
        { 
            name: 'Facebook', 
            url: 'https://facebook.com/abhay130s', 
            color: 'hover:text-[#1877F2] hover:border-[#1877F2]', 
            icon: <SocialIcons.Facebook />
        },
    ];

    const scrollToGallery = () => {
        document.getElementById('gallery-grid')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
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
                            src={galleryPosts[0]?.image || "/landing-page-images/DSC_0180.JPG"} 
                            alt="Featured Moment" 
                            className="rounded-[2rem] object-cover w-full max-w-[600px] h-[400px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" 
                        />
                        <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl hidden sm:block">
                            <p className="font-bold text-sm">📍 {galleryPosts[0]?.location || 'IIT Roorkee'}</p>
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
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-white/20 scale-100 group-hover/btn:scale-110 transition-transform duration-300 shrink-0">
                                {link.icon}
                            </div>
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                    {galleryPosts.map((post) => (
                        <div 
                            key={post.id} 
                            className={`group relative overflow-hidden rounded-[24px] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 ${post.gridSpan || 'md:col-span-1 md:row-span-1'}`}
                        >
                            {post.youtubeUrl ? (
                                <a href={post.youtubeUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    {/* Play Overlay Icon for Video Links */}
                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                        <div className="w-12 h-12 rounded-full bg-theme-red/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5">
                                                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            ) : (
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            )}
                            
                            {/* Linear Shadow Scrim Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            
                            {/* Visual Title & Location Details on Hover */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end z-10 pointer-events-none">
                                {post.location && (
                                    <p className="text-xs text-theme-red font-bold uppercase tracking-widest mb-1">
                                        📍 {post.location}
                                    </p>
                                )}
                                <h4 className="text-white font-bold text-base sm:text-lg tracking-wide font-sans translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {post.title}
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