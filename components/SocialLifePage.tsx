/// <reference types="vite/client" />
import React, { useEffect, useState } from 'react';
import ResizableButton from './ResizableButton';
import { socialLinks } from './data/socialLinks';
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
