/// <reference types="vite/client" />
import React, { useEffect, useState } from 'react';
import ResizableButton from './ResizableButton';
import { sanityClient } from './data/sanityClient';
import { CameraIcon, StarIcon } from './icons';

interface CarouselImageItem {
    url: string;
    caption?: string;
}

interface SocialMediaPost {
    id: string;
    title: string;
    location?: string;
    image: string;
    carouselImages?: CarouselImageItem[];
    youtubeUrl?: string;
    gridSpan?: string;
}

interface WatchlistItem {
    dateWatched: string;
    year: string;
    title: string;
    rating: string;
    cast?: string;
    director?: string;
    genre?: string;
    country?: string;
    comments?: string;
}

// Custom Location SVG Icon
const LocationPinIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 345 512" 
        fill="currentColor" 
        className={`inline-block shrink-0 ${className}`}
    >
        <path d="M160.916 0H183.02C184.637 0.564122 194.385 1.45004 197.032 1.88432C207.5 3.52293 217.782 6.1918 227.725 9.852C268.277 24.7786 301.185 55.2885 319.132 94.5977C324.74 106.918 328.767 119.899 331.115 133.231C336.96 166.309 331.76 190.193 319.935 221.32C305.365 259.673 284.487 297.975 263.235 333.05C242.827 366.872 220.565 399.54 196.547 430.9C193.942 434.237 174.952 459.673 170.715 456.578C162.348 450.465 152.863 438.085 146.369 429.698C122.447 397.968 100.285 366.53 80.0118 332.015C52.2328 284.723 20.3476 228.899 11.4106 174.049C7.10757 147.641 16.3851 111.292 28.2281 88.0455C48.5071 48.1905 84.4506 18.5667 127.445 6.27357C134.22 4.3451 141.104 2.82695 148.062 1.72737C151.119 1.27008 158.428 0.913657 160.916 0ZM176.2 209.937C205.24 207.663 226.95 182.304 224.725 153.263C222.5 124.221 197.177 102.467 168.132 104.645C139.018 106.828 117.202 132.223 119.433 161.333C121.664 190.442 147.095 212.216 176.2 209.937Z" />
        <path d="M228.062 432.062C234.577 432.297 241.105 433.153 247.577 433.91C270.937 436.64 324.047 444.548 340.215 462.043C342.502 464.518 344.215 467.615 344.102 471.078C343.972 475.193 341.522 478.602 338.587 481.275C318.66 499.437 256.855 507.83 229.76 509.835C222.582 510.312 215.402 510.728 208.217 511.075C205.39 511.215 198.317 511.36 196.01 512H148.4C145.254 511.17 138.497 511.18 134.994 511.013C128.049 510.648 121.109 510.208 114.173 509.69C89.5659 507.668 15.2151 498.758 1.71586 476.85C0.165114 474.333 -0.401384 471.37 0.292616 468.48C1.66437 462.765 7.12287 458.515 11.9381 455.688C33.5591 442.988 70.3964 436.99 95.3659 434.025C102.114 433.225 109.184 432.18 115.974 432.215C124.29 442.982 132.15 454.35 141.112 464.698C148.144 472.818 157.938 486.008 169.192 487.825C175.107 488.78 180.737 486.87 185.22 483.06C197.995 472.33 208.39 457.515 218.67 444.448C220.59 442.008 226.35 433.68 228.062 432.062Z" />
    </svg>
);

const SocialIcons = {
    LinkedIn: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    ),
    X: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.617l-5.21-6.816-6.022 6.816h-3.308l7.73-8.807-8.359-10.69h6.785l4.596 6.144 5.432-6.144z" />
        </svg>
    ),
    Discord: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4464.8245-.6667 1.2835-2.244-.2852-4.5892-.2852-6.8257 0-.228-.4706-.464-.9245-.683-1.299-.02-.043-.06-.06-.1-.05-.02.01-.03.03-.02.05-1.683.44-3.22.99-4.54 1.6-.03.02-.05.05-.05.08-.02.08-.01.15.02.23-1.16 2.1-1.74 4.56-1.74 7.06 0 4.7 2.01 8.81 5.1 11.36.03.02.07.03.1.02.05-.02.08-.06.08-.11 0-.04-.01-.08-.04-.11-.53-.41-1.02-.9-1.45-1.45-.05-.06-.05-.14-.01-.2.04-.06.12-.08.18-.04 3.53 2.16 7.64 2.16 11.17 0 .06.04.14.02.18-.04.04-.06.04-.12.01-.2-.43.55-.92 1.04-1.45 1.45-.03.03-.04.07-.04.11 0 .05.03.09.08.11.03.01.07 0 .1-.02 3.09-2.55 5.1-6.66 5.1-11.36 0-2.5-.58-4.96-1.74-7.06-.03-.08-.04-.15-.02-.23.01-.03-.01-.06-.04-.08zM8.021 15.3316c-1.3867 0-2.5167-1.203-2.5167-2.683s1.13-2.683 2.5167-2.683c1.3866 0 2.5166 1.203 2.5166 2.683s-1.13 2.683-2.5166 2.683zm4.9833 0c-1.3867 0-2.5167-1.203-2.5167-2.683s1.13-2.683 2.5167-2.683c1.3866 0 2.5166 1.203 2.5166 2.683s-1.13 2.683-2.5166 2.683z" />
        </svg>
    ),
    Reddit: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.21 14.43c0 1.06-.86 1.92-1.92 1.92s-1.92-.86-1.92-1.92.86-1.92 1.92-1.92 1.92.86 1.92 1.92zm-6.3-5.49c1.06 0 1.92-.86 1.92-1.92s-.86-1.92-1.92-1.92.86-1.92 1.92 1.92.86 1.92 1.92 1.92zm-2.13 6.21c.35-.45.96-.6 1.41-.25.45.35.6.96.25 1.41-1.1 1.42-2.79 2.26-4.74 2.26-1.95 0-3.64-.84-4.74-2.26-.35-.45-.1-1.06.35-1.41.45-.35 1.06-.1 1.41.35.79.97 1.95 1.55 3.33 1.55s2.54-.58 3.33-1.55zm8.43-2.93c1.06 0 1.92-.86 1.92-1.92s-.86-1.92-1.92-1.92-1.92.86-1.92 1.92.86 1.92 1.92 1.92z" />
        </svg>
    ),
    Facebook: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
    ),
    Instagram: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
        </svg>
    ),
    Threads: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
            <path d="M14.131 2.012c-2.836.03-5.32.954-7.103 2.63-1.785 1.677-2.62 3.985-2.62 6.358 0 2.25.78 4.4 2.386 6.04 1.65 1.68 3.91 2.61 6.33 2.61s4.68-.93 6.33-2.61c1.607-1.64 2.386-3.79 2.386-6.04 0-2.373-.835-4.68-2.62-6.358-1.783-1.677-4.267-2.6-7.103-2.63zm-3.13 16.623c-1.25-.2-2.3-.7-3.13-1.43-.83-.73-1.38-1.68-1.63-2.78-.25-1.1-.2-2.25.13-3.3.33-1.05.9-1.98 1.68-2.73.78-.75 1.73-1.3 2.78-1.6.9-.26 1.8-.3 2.7-.1.9.2 1.75.63 2.5 1.25.75.63 1.33 1.43 1.7 2.35.2.48.3.98.3 1.48s-.1 1-.3 1.48c-.37.92-.95 1.72-1.7 2.35-.75.62-1.6 1.05-2.5 1.25-.9.2-1.8.16-2.7-.1z" />
        </svg>
    ),
    WhatsApp: () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95l-1.44 5.26 5.39-1.41c1.44.84 3.08 1.31 4.8 1.31h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.16h-.01c-1.5 0-2.98-.4-4.3-1.15l-.31-.18-3.2 1.05 1.07-3.11-.2-.33c-.83-1.38-1.27-2.98-1.27-4.64 0-4.54 3.69-8.23 8.24-8.23 4.54 0 8.23 3.69 8.23 8.23s-3.69 8.23-8.23 8.23zm4.49-5.45c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.14-.25-.02-.39.11-.5.12-.11.25-.29.38-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.06 0 1.22.88 2.39 1 2.56.12.17 1.75 2.67 4.24 3.74 2.49 1.07 2.49.71 2.94.69.45-.02 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.05-.12-.2-.19-.44-.31z" />
        </svg>
    ),
};

const getGridSpanClass = (spanKey?: string) => {
    const key = spanKey?.toLowerCase();
    switch (key) {
        case '2x1':
            return 'md:col-span-2 md:row-span-1';
        case '1x2':
            return 'md:col-span-1 md:row-span-2';
        case '2x2':
            return 'md:col-span-2 md:row-span-2';
        case '3x1':
            return 'md:col-span-3 md:row-span-1';
        case '1x1':
        default:
            return 'md:col-span-1 md:row-span-1';
    }
};

const getImageAspectClass = (spanKey?: string) => {
    const key = spanKey?.toLowerCase();
    switch (key) {
        case '2x1':
            return 'aspect-[2/1] min-h-[220px] max-h-[380px]';
        case '3x1':
            return 'aspect-[3/1] min-h-[260px] max-h-[440px]';
        case '1x2':
            return 'aspect-[1/2] min-h-[420px]';
        case '2x2':
            return 'aspect-[1/1] min-h-[320px] max-h-[580px]';
        case '1x1':
        default:
            return 'aspect-[4/3] sm:aspect-[1/1] md:aspect-[4/3]';
    }
};

const SocialCard: React.FC<{ post: SocialMediaPost }> = ({ post }) => {
    const rawImages = [
        ...(post.image ? [post.image] : []),
        ...(post.carouselImages && post.carouselImages.length > 0 ? post.carouselImages.map(item => item.url) : [])
    ];
    const images = Array.from(new Set(rawImages.filter(Boolean)));
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className={`flex flex-col p-3.5 rounded-[2.2rem] bg-gray-100 dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 shadow-lg transition-colors duration-300 ${getGridSpanClass(post.gridSpan)}`}>
            
            {/* INNER IMAGE CONTAINER */}
            <div className={`relative w-full rounded-[1.6rem] overflow-hidden bg-gray-200 dark:bg-black/80 flex items-center justify-center shrink-0 ${getImageAspectClass(post.gridSpan)}`}>
                {post.youtubeUrl ? (
                    <a href={post.youtubeUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                        <img
                            src={post.image}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 pointer-events-none"
                        />
                        <img
                            src={post.image}
                            alt={post.title}
                            className="relative z-10 w-full h-full object-contain"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-12 h-12 rounded-full bg-theme-red/90 text-white flex items-center justify-center shadow-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </a>
                ) : images.length > 1 ? (
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                        <img
                            src={images[currentIndex]}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 pointer-events-none"
                        />

                        <div
                            className="flex w-full h-full transition-transform duration-500 ease-out z-10"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {images.map((imgUrl, idx) => (
                                <div key={idx} className="w-full h-full shrink-0 flex items-center justify-center p-1">
                                    <img
                                        src={imgUrl}
                                        alt={`${post.title} - ${idx + 1}`}
                                        className="w-full h-full object-contain max-h-[580px]"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-3 right-3 z-20 inline-flex items-center gap-1 bg-black/60 dark:bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[10px] font-mono text-white font-bold">
                            <CameraIcon className="w-3.5 h-3.5" /> {images.length}
                        </div>
                    </div>
                ) : (
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                        <img
                            src={post.image}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 pointer-events-none"
                        />
                        <img
                            src={post.image}
                            alt={post.title}
                            className="relative z-10 w-full h-full object-contain max-h-[580px]"
                        />
                    </div>
                )}
            </div>

            {/* BOTTOM DETAILS & CONTROLS BAR */}
            <div className="pt-3 px-1 pb-1 flex flex-col gap-1.5 w-full">
                <div className="flex items-center justify-between gap-2 w-full flex-wrap">
                    {post.location ? (
                        <div className="flex items-center gap-1.5 text-theme-red font-mono font-extrabold text-[11px] uppercase tracking-wider min-w-0 max-w-full">
                            <LocationPinIcon className="w-3.5 h-3.5 fill-theme-red text-theme-red shrink-0" />
                            <span className="break-words">{post.location}</span>
                        </div>
                    ) : <div />}

                    {images.length > 1 && (
                        <div className="flex items-center gap-1.5 shrink-0 bg-black/10 dark:bg-black/50 px-2.5 py-1 rounded-full border border-black/10 dark:border-white/10 ml-auto">
                            <button
                                onClick={prevSlide}
                                aria-label="Previous Slide"
                                className="w-6 h-6 rounded-full bg-black/20 dark:bg-white/20 hover:bg-theme-red dark:hover:bg-theme-red text-black dark:text-white hover:text-white flex items-center justify-center text-xs font-bold transition-colors"
                            >
                                ‹
                            </button>

                            <div className="flex items-center gap-1">
                                {images.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${
                                            currentIndex === idx ? 'w-3.5 bg-black dark:bg-white' : 'w-1.5 bg-black/30 dark:bg-white/30'
                                        }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                aria-label="Next Slide"
                                className="w-6 h-6 rounded-full bg-black/20 dark:bg-white/20 hover:bg-theme-red dark:hover:bg-theme-red text-black dark:text-white hover:text-white flex items-center justify-center text-xs font-bold transition-colors"
                            >
                                ›
                            </button>
                        </div>
                    )}
                </div>

                <h3 className="text-light-text dark:text-white font-black text-base sm:text-lg tracking-wide leading-snug break-words w-full">
                    {post.title}
                </h3>
            </div>

        </div>
    );
};

/* --- WATCHLIST TABLE COMPONENT --- */
const WatchlistSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'movies' | 'webseries'>('movies');

    const moviesData: WatchlistItem[] = [
        { dateWatched: "2023-12-09", year: "2018", title: "Qismat", rating: "8", cast: "Ammy Virk, Sargun Mehta, Hardeep Gill", director: "Jagdeep Sidhu", genre: "Love Story, Romance", country: "India", comments: "Based on true love story" },
        { dateWatched: "2023-11-20", year: "2019", title: "Hellboy", rating: "8", cast: "David Harbour", director: "", genre: "Action, Fantasy", country: "", comments: "" },
        { dateWatched: "2023-10-15", year: "2009", title: "Inglourious Basterds", rating: "8", cast: "Brad Pitt", director: "", genre: "War, Drama", country: "", comments: "" },
        { dateWatched: "2023-09-02", year: "2014", title: "The Imitation Game", rating: "6", cast: "", director: "", genre: "Biography, Drama", country: "", comments: "world war 2 story" },
        { dateWatched: "2023-08-10", year: "2019", title: "Coma", rating: "6", cast: "", director: "", genre: "Sci-Fi", country: "Russia", comments: "define the coma condition" },
        { dateWatched: "2023-07-22", year: "2014", title: "Fury", rating: "8", cast: "", director: "", genre: "War, Action", country: "", comments: "" },
        { dateWatched: "2023-06-18", year: "1998", title: "Saving Private Ryan", rating: "8", cast: "", director: "Steven Spielberg", genre: "War", country: "", comments: "Save ryan in war world 2" },
        { dateWatched: "2023-05-12", year: "1995", title: "Jumanji", rating: "8", cast: "", director: "", genre: "Game, Adventure", country: "", comments: "" },
        { dateWatched: "2023-05-11", year: "1995", title: "Jumanji", rating: "8", cast: "", director: "", genre: "Game, Adventure", country: "", comments: "" },
        { dateWatched: "2023-05-10", year: "1995", title: "Jumanji", rating: "8", cast: "", director: "", genre: "Game, Adventure", country: "", comments: "" },
        { dateWatched: "2023-04-01", year: "1998", title: "Patch Adams", rating: "8", cast: "Robin Williams, Phillip Seymour Hoffman, Monia Potter", director: "Tom Shadyac", genre: "Biography", country: "United States", comments: "medical system based" },
        { dateWatched: "2023-03-14", year: "2003", title: "Munna Bhai M.B.B.S.", rating: "7", cast: "", director: "", genre: "Comedy, Drama", country: "India", comments: "" },
        { dateWatched: "2023-03-13", year: "2003", title: "Munna Bhai M.B.B.S.", rating: "7", cast: "", director: "", genre: "Comedy, Drama", country: "India", comments: "" },
        { dateWatched: "2023-02-10", year: "2012", title: "That's My Boy", rating: "8", cast: "", director: "", genre: "Comedy", country: "", comments: "" },
        { dateWatched: "2023-01-20", year: "2006", title: "The God must be curzy I", rating: "6", cast: "", director: "", genre: "Comedy", country: "", comments: "" },
        { dateWatched: "2023-01-19", year: "2006", title: "The God must be curzy II", rating: "6", cast: "", director: "", genre: "Comedy", country: "", comments: "" },
        { dateWatched: "2023-01-05", year: "2023", title: "The Bad Guys", rating: "9", cast: "", director: "", genre: "Animation", country: "", comments: "" },
        { dateWatched: "2022-12-25", year: "2021", title: "Tenet", rating: "10", cast: "", director: "Crrisktopher Nolan", genre: "Time Travel, Action", country: "", comments: "" },
        { dateWatched: "2022-11-12", year: "2014", title: "John Wick", rating: "8", cast: "", director: "", genre: "Action", country: "", comments: "" },
        { dateWatched: "2022-10-01", year: "2017", title: "John Wick 2", rating: "9", cast: "", director: "", genre: "Action", country: "", comments: "" },
        { dateWatched: "2022-09-15", year: "2019", title: "John Wick 3", rating: "8", cast: "", director: "", genre: "Action", country: "", comments: "" },
        { dateWatched: "2022-08-20", year: "2014", title: "The Kingsman", rating: "10", cast: "", director: "", genre: "Action", country: "", comments: "" },
        { dateWatched: "2022-08-19", year: "2017", title: "The Kingsman", rating: "10", cast: "", director: "", genre: "Action", country: "", comments: "" },
        { dateWatched: "2022-07-01", year: "2005", title: "Bunty aur Babli", rating: "7", cast: "Abhishek Bachan, Rani Mukharje, Amitabh Bachan", director: "Shaad Ali", genre: "Comedy, Romance", country: "India", comments: "songs are good story also good" }
    ];

    const webSeriesData: WatchlistItem[] = [
        { dateWatched: "2023-11-01", year: "2017-2022", title: "Money Heist", rating: "10", cast: "Alvaro Morte, Pedro Alonso, Itziar Ituno, Najwa Nimri", director: "Alex Pina", genre: "Thriller", country: "Spain", comments: "Season 1-5" },
        { dateWatched: "2023-10-10", year: "2019-2023", title: "Sex Education", rating: "10", cast: "Kedar Williams Stirling, Gillian Anderson", director: "Runyararo Mapfumo, Michelle Savill", genre: "Drama", country: "UK", comments: "Season 1-8" },
        { dateWatched: "2023-09-15", year: "2017-2019", title: "End of the fucking world", rating: "8", cast: "Jessica Barden, Alex Lawther, Steve Oram", director: "Tcherniak, Lucy Forbes, Destiny Ekaragha", genre: "Drama", country: "UK", comments: "Season 1-2" },
        { dateWatched: "2023-08-20", year: "2011-2019", title: "Games of Thrones", rating: "9", cast: "Harington, Jason Momoa, Maisie Williams", director: "D.B. Weiss, David Benioff", genre: "Drama, Politics, Adventures", country: "USA", comments: "Season 1-8" },
        { dateWatched: "2023-07-11", year: "2015-2021", title: "Younger", rating: "7", cast: "Tortorella, Debi Mazar, Peter Hermann", director: "Peter Lauer, Tamra Davis, Jennifer Arnold, Miriam Shor", genre: "Drama, Publicing", country: "USA", comments: "Season 1-9" },
        { dateWatched: "2023-06-05", year: "2020", title: "Scam 1992: The Harshad Mehta Story", rating: "8", cast: "Shreya Dhanwanthary, Hemant Kher", director: "Hansal Mehta", genre: "Drama, History scam", country: "India", comments: "" },
        { dateWatched: "2023-05-18", year: "2023", title: "Scam 2003: The Telgi Story", rating: "8", cast: "Kirandeep Kaur, Gagan Dev Riar, Sana Amin Sheikh", director: "Tushar Hiranadani", genre: "Drama, History scam", country: "India", comments: "" },
        { dateWatched: "2023-04-12", year: "2023", title: "Bodies", rating: "5", cast: "Stephen Graham, Kyle Soller, Amaka Okfor", director: "Marco Kreuzpaintner", genre: "Drama, Sci-Fi, History, Thriller", country: "UK", comments: "" },
        { dateWatched: "2023-03-30", year: "2023", title: "Gen V", rating: "10", cast: "", director: "", genre: "", country: "", comments: "" },
        { dateWatched: "2023-02-14", year: "2021-2022", title: "The Boys", rating: "9", cast: "", director: "", genre: "", country: "", comments: "" },
        { dateWatched: "2023-01-22", year: "2023", title: "Big Vape: The rise and fall of juul", rating: "6", cast: "", director: "", genre: "Psychology", country: "", comments: "" }
    ];

    // Sort items by Date Watched (Newest First)
    const currentList = (activeTab === 'movies' ? moviesData : webSeriesData).sort((a, b) => 
        new Date(b.dateWatched).getTime() - new Date(a.dateWatched).getTime()
    );

    return (
        <section className="w-full my-12 p-6 sm:p-8 rounded-[2.5rem] bg-gray-50/80 dark:bg-[#1a1a1a]/80 border border-black/10 dark:border-white/10 shadow-xl backdrop-blur-md">
            
            {/* Header + Tab Switcher */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-black/10 dark:border-white/10">
                <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[3px] text-theme-red block mb-1">
                        PERSONAL MEDIA LOG
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-light-text dark:text-dark-text">
                        Movies & Series Watched
                    </h3>
                </div>

                {/* Tab Switcher */}
                <div className="inline-flex p-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                    <button
                        onClick={() => setActiveTab('movies')}
                        className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                            activeTab === 'movies'
                                ? 'bg-theme-red text-white shadow-md'
                                : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                        }`}
                    >
                        Movies ({moviesData.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('webseries')}
                        className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                            activeTab === 'webseries'
                                ? 'bg-theme-red text-white shadow-md'
                                : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                        }`}
                    >
                        Web Series ({webSeriesData.length})
                    </button>
                </div>
            </div>

            {/* Scrollable Container Fixed to ~13 Rows Height */}
            <div className="w-full overflow-x-auto overflow-y-auto max-h-[580px] rounded-2xl border border-black/5 dark:border-white/5 custom-scrollbar">
                <table className="w-full text-left text-xs sm:text-sm font-poppins border-collapse">
                    
                    {/* Sticky Table Header */}
                    <thead className="sticky top-0 bg-gray-200/90 dark:bg-black/90 backdrop-blur-md text-light-text dark:text-dark-text font-mono uppercase text-[11px] tracking-wider z-10 border-b border-black/10 dark:border-white/10">
                        <tr>
                            <th className="py-3.5 px-4">Title</th>
                            <th className="py-3.5 px-4">Year</th>
                            <th className="py-3.5 px-4 text-center">Rating</th>
                            <th className="py-3.5 px-4">Genre</th>
                            <th className="py-3.5 px-4 hidden md:table-cell">Cast & Director</th>
                            <th className="py-3.5 px-4 hidden lg:table-cell">Country</th>
                            <th className="py-3.5 px-4">Comments</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-black/5 dark:divide-white/5">
                        {currentList.map((item, idx) => (
                            <tr 
                                key={idx} 
                                className="hover:bg-theme-red/5 transition-colors duration-150 group text-light-text dark:text-dark-text"
                            >
                                <td className="py-3.5 px-4 font-bold text-sm text-black dark:text-white group-hover:text-theme-red transition-colors min-w-[160px]">
                                    {item.title}
                                </td>
                                <td className="py-3.5 px-4 font-mono text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                    {item.year || '—'}
                                </td>
                                <td className="py-3.5 px-4 text-center whitespace-nowrap">
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-theme-red/10 text-theme-red font-mono font-bold text-xs border border-theme-red/20">
                                        <StarIcon className="w-3 h-3 fill-current" /> {item.rating}/10
                                    </span>
                                </td>
                                <td className="py-3.5 px-4 font-mono text-xs text-gray-600 dark:text-gray-300 min-w-[120px]">
                                    {item.genre || '—'}
                                </td>
                                <td className="py-3.5 px-4 hidden md:table-cell text-xs text-gray-500 dark:text-gray-400 min-w-[180px]">
                                    <div>{item.cast || '—'}</div>
                                    {item.director && (
                                        <div className="text-[10px] font-mono text-gray-400 dark:text-gray-500">Dir: {item.director}</div>
                                    )}
                                </td>
                                <td className="py-3.5 px-4 hidden lg:table-cell font-mono text-xs text-gray-500 dark:text-gray-400">
                                    {item.country || '—'}
                                </td>
                                <td className="py-3.5 px-4 text-xs italic text-gray-500 dark:text-gray-400 max-w-[200px] truncate">
                                    {item.comments || '—'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Custom Scrollbar Styles */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                    height: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(239, 68, 68, 0.3);
                    border-radius: 9999px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(239, 68, 68, 0.7);
                }
            `}</style>

        </section>
    );
};

const SocialLifePage: React.FC = () => {
    const [galleryPosts, setGalleryPosts] = useState<SocialMediaPost[]>([]);

    // EXACT CASING MATCH FOR PUBLIC ASSETS
    const carouselImages = [
        { src: "/social-life-page-images/image1.JPG", caption: "Virasat'25 Team Jams" },
        { src: "/social-life-page-images/image2.JPG", caption: "Professional Life" },
        { src: "/social-life-page-images/image3.JPG", caption: "Site Visiting" },
        { src: "/social-life-page-images/image4.JPG", caption: "My Circle" },
        { src: "/social-life-page-images/image5.JPG", caption: "Unscripted Offline Life" }
    ];

    const [carouselIndex, setCarouselIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [carouselImages.length]);

    useEffect(() => {
        const query = `*[_type == "socialPost"] | order(date desc) {
            "id": _id,
            title,
            location,
            "image": image.asset->url,
            "carouselImages": carouselImages[] {
                "url": asset->url,
                caption
            },
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
                console.warn("Sanity social posts fetch error:", err);
            });
    }, []);

    const socialLinks = [
        {
        name: "Instagram",
        url: "https://www.instagram.com/abhay_130_",
        color: "bg-[#E4405F]/10 hover:bg-[#E4405F] text-[#E4405F] hover:text-white border-[#E4405F]/20",
        icon: (
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        )
        },
        {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhay-kishor-y130s",
        color: "bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border-[#0A66C2]/20",
        icon: (
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
        )
        },
        {
        name: "WhatsApp",
        url: "https://wa.me/918273746070",
        color: "bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border-[#25D366]/20",
        icon: (
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
        )
        },
        {
        name: "Facebook",
        url: "https://www.facebook.com/abhay130s",
        color: "bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border-[#1877F2]/20",
        icon: (
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
        )
        },
        {
        name: "Snapchat",
        url: "https://www.snapchat.com/add/abhayy_130",
        color: "bg-[#FFFC00]/10 hover:bg-[#FFFC00] text-[#FFFC00] hover:text-black border-[#FFFC00]/20",
        icon: (
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12 1.8c-4.6 0-8.4 3.3-8.4 7.7 0 2.5 1.5 4.7 3.7 6.1.3.2.5.6.5 1v1.6c0 .7.8 1.1 1.3.7l2.2-1.6c.3-.2.7-.3 1.1-.3h.7c.4 0 .8.1 1.1.3l2.2 1.6c.5.4 1.3 0 1.3-.7v-1.6c0-.4.2-.8.5-1 2.2-1.4 3.7-3.6 3.7-6.1 0-4.4-3.8-7.7-8.4-7.7zm-3.7 8c0-1.8 1.5-3.2 3.2-3.2 1.7 0 3.2 1.4 3.2 3.2 0 1.8-1.5 3.2-3.2 3.2-1.7 0-3.2-1.4-3.2-3.2zm7.2 7.2c-.8.6-1.7 1-3.1 1s-2.3-.4-3.1-1l-.5.9c1.3 1.3 2.8 1.8 3.6 1.8.8 0 2.3-.5 3.6-1.8l-.5-.9z"/>
            </svg>
        )
        },
        {
        name: "X / Twitter",
        url: "https://x.com/abhay__130",
        color: "bg-black/10 dark:bg-white/10 hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black border-black/10 dark:border-white/20",
        icon: (
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
        )
        },
        {
        name: "Threads",
        url: "https://www.threads.net/abhay_130_",
        color: "bg-black/10 dark:bg-white/10 hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black border-black/10 dark:border-white/20",
        icon: (
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.186 24c-3.52 0-6.422-1.12-8.318-3.237C2.083 18.8 1.152 15.82 1.152 12c0-3.882.936-6.88 2.73-8.8 1.888-2.023 4.782-3.1 8.304-3.1 3.593 0 6.55 1.127 8.442 3.237 1.704 1.9 2.585 4.7 2.585 8.163h-3.414c0-2.58-.622-4.59-1.802-5.83C17.062 4.49 14.97 3.65 12.186 3.65c-2.73 0-4.8.84-5.992 2.02-1.284 1.272-1.932 3.328-1.932 6.33 0 3.03.648 5.12 1.932 6.42 1.192 1.21 3.262 2.05 5.992 2.05 3.032 0 5.093-.97 6.072-2.122l2.628 2.148C19.345 22.25 16.275 24 12.186 24z"/>
            </svg>
        )
        },
        {
        name: "Behance",
        url: "https://www.behance.net/abhaykishor130",
        color: "bg-[#1769FF]/10 hover:bg-[#1769FF] text-[#1769FF] hover:text-white border-[#1769FF]/20",
        icon: (
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M22 7h-7V5h7v2zm-1.708 11.233c-1.082 1.173-2.658 1.767-4.729 1.767-2.029 0-3.667-.611-4.912-1.833-1.246-1.223-1.869-2.883-1.869-4.981 0-2.032.618-3.666 1.853-4.899 1.235-1.234 2.822-1.851 4.759-1.851 1.869 0 3.37.564 4.502 1.694 1.133 1.129 1.699 2.68 1.699 4.652 0 .408-.046.817-.138 1.228h-9.754c.123 1.173.538 2.062 1.245 2.668.707.605 1.583.908 2.628.908 1.506 0 2.613-.564 3.32-1.693l1.396 1.34zm-8.868-6.195h6.602c-.061-.954-.383-1.688-.966-2.203-.583-.514-1.352-.771-2.306-.771-.953 0-1.737.265-2.351.796-.614.531-.941 1.257-.979 2.178zM2.83 18.5h4.945c1.475 0 2.62-.315 3.435-.945.815-.63 1.223-1.521 1.223-2.673 0-.785-.208-1.428-.623-1.928-.415-.5-1.022-.841-1.821-1.023.63-.199 1.115-.515 1.455-.948.34-.433.51-.983.51-1.65 0-.968-.348-1.722-1.045-2.262C10.212 6.531 9.2 6.26 7.873 6.26H2.83V18.5zm3.104-9.69h1.751c.645 0 1.13.12 1.455.361.325.241.488.59.488 1.047 0 .438-.172.784-.518 1.037-.345.253-.872.38-1.581.38H5.934V8.81zm0 4.887h2.013c.739 0 1.298.14 1.677.42.379.28.568.677.568 1.192 0 .546-.196.963-.588 1.251-.392.288-.981.432-1.767.432H5.934V13.697z"/>
            </svg>
        )
        },
    ];

    const scrollToGallery = () => {
        document.getElementById('gallery-grid')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20">
            
            {/* --- HERO SECTION --- */}
            <section className="pb-12 sm:pb-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 w-full">
                
                {/* LEFT TEXT STORY */}
                <div className="flex-1 flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-red/10 border border-theme-red/20 text-theme-red text-xs font-mono font-bold tracking-widest uppercase mb-4">
                        <span className="w-2 h-2 rounded-full bg-theme-red animate-pulse" />
                        <span>OFF-DUTY CHRONICLES</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold -tracking-wide leading-tight text-black dark:text-white">
                        Proof That <br />
                        <span className="text-theme-red">AbhaY Has A Life.</span>
                    </h2>

                    <p className="text-sm sm:text-base text-light-text-muted dark:text-dark-text-muted leading-relaxed max-w-xl mb-12 mt-4">
                        Believe it or not, I do leave my desk! Between ArchiCAD rendering and React builds, here's a raw collection of campus chaos, road trips, night outs, and all unscripted moments.
                    </p>

                    {/* Vibe Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {['IITRoorkee', 'RoadTrips', 'NightOuts', 'PureRandomness'].map((tag, idx) => (
                            <span 
                                key={idx}
                                className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-light-text-muted dark:text-dark-text-muted"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <ResizableButton 
                        onClick={scrollToGallery} 
                        size={13} 
                        className="px-8 py-3.5 text-black dark:text-white hover:bg-theme-red dark:hover:bg-theme-red hover:text-white dark:hover:text-white font-extrabold uppercase tracking-wider rounded-full text-xs sm:text-sm transition-all duration-300 shadow-md"
                    >
                        EXPLORE GALLERY ↓
                    </ResizableButton>
                </div>

                {/* RIGHT HARDCODED 5-PHOTO AUTO CAROUSEL CONTAINER */}
                <div className="flex-1 w-full flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[540px] cursor-pointer overflow-hidden rounded-[2rem] border border-black/10 dark:border-white/10 shadow-xl group">
                        
                        <div className="overflow-hidden relative aspect-[4/3] w-full bg-black/40">
                            {/* Carousel Track */}
                            <div 
                                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
                            >
                                {carouselImages.map((img, idx) => (
                                    <div key={idx} className="w-full h-full shrink-0 relative flex items-center justify-center">
                                        <img 
                                            src={img.src} 
                                            alt={img.caption}
                                            className="object-cover w-full h-full" 
                                            onError={(e) => {
                                                (e.target as HTMLElement).style.display = 'none';
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Caption & Indicators Scrim */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                            
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10 pointer-events-none">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-xs font-mono font-bold tracking-wider uppercase drop-shadow-md">
                                        {carouselImages[carouselIndex].caption}
                                    </span>
                                </div>

                                {/* Slide Bullet Indicators */}
                                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                                    {carouselImages.map((_, idx) => (
                                        <span 
                                            key={idx}
                                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                                carouselIndex === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            {/* --- SINGLE-LINE RESPONSIVE SOCIAL CHANNELS BAR --- */}
            <section className="py-6 border-y border-gray-200 dark:border-gray-800 my-6">
                <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted mb-4">
                    Connect Across Channels
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 w-full">
                    {socialLinks.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-2 p-2.5 rounded-2xl border font-bold text-[11px] uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${social.color}`}
                        >
                            {social.icon}
                            <span className="truncate">{social.name}</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* --- GALLERY GRID SECTION --- */}
            <section id="gallery-grid" className="py-12">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <span className="text-xs font-bold text-theme-red uppercase tracking-[3px]">Visual Log</span>
                        <h2 className="text-2xl sm:text-3xl uppercase font-black text-light-text dark:text-dark-text mt-1">
                            Staggered Perspectives
                        </h2>
                    </div>
                    <span className="text-xs font-mono font-bold uppercase text-light-text-muted dark:text-dark-text-muted hidden sm:inline">
                        {galleryPosts.length} Moments Recorded
                    </span>
                </div>

                {galleryPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                        {galleryPosts.map((post) => (
                            <SocialCard key={post.id} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="w-full p-12 text-center rounded-[2rem] bg-gray-50 dark:bg-white/5 border border-dashed border-black/10 dark:border-white/10 my-4">
                        <p className="text-sm font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted">
                            New Social Moments Coming Soon
                        </p>
                    </div>
                )}
            </section>

            {/* --- WATCHLIST TABLE SECTION --- */}
            <WatchlistSection />

            {/* --- CREATIVE QUOTE BOX --- */}
            <section className="w-full my-8 p-8 rounded-[2.5rem] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[3px] text-theme-red block mb-2">
                            LIFESTYLE PHILOSOPHY
                        </span>
                        <p className="text-lg sm:text-xl font-medium italic font-serif leading-relaxed text-light-text dark:text-dark-text">
                            "Stepping away from CAD grids and IDE screens isn't a distraction—it's where the real inspiration is born."
                        </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-theme-red" />
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted">
                            Always Exploring.
                        </span>
                    </div>
                </div>
            </section>

            {/* --- CALL TO ACTION --- */}
            <section className="py-16 px-6 text-center">
                <h3 className="text-2xl sm:text-3xl font-black mb-3 text-light-text dark:text-dark-text">
                    Want to hear the stories behind these moments?
                </h3>
                <p className="text-sm sm:text-base text-light-text-muted dark:text-dark-text-muted mb-8 max-w-lg mx-auto">
                    Let's catch up over coffee, chat about architecture, or brainstorm your next web project.
                </p>
                <ResizableButton 
                    onClick={() => window.location.href = 'mailto:abhaykishor130@gmail.com'} 
                    size={13} 
                    className="px-8 py-3.5 text-black dark:text-white hover:bg-theme-red dark:hover:bg-theme-red hover:text-white dark:hover:text-white font-extrabold uppercase tracking-wider rounded-full text-xs sm:text-sm transition-all duration-300 shadow-md"
                >
                    GET IN TOUCH →
                </ResizableButton>
            </section>

        </main>
    );
};

export default SocialLifePage;
