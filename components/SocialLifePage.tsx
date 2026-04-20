/// <reference types="vite/client" />
import React from 'react';
import ResizableButton from './ResizableButton';

const SocialLifePage: React.FC = () => {
    // Array of your images - replace these paths with your actual image files
    const galleryImages = [
        { src: "/landing-page-images/DSC_0180.JPG", alt: "Main Gallery", title: "Campus Vibes" },
        { src: "/landing-page-images/trip1.jpg", alt: "Trip 1", title: "Weekend Getaway" },
        { src: "/landing-page-images/event1.jpg", alt: "Event 1", title: "Virasat'26 Planning" },
        { src: "/landing-page-images/chaos1.jpg", alt: "Chaos", title: "Architecture Studio Life" },
        { src: "/landing-page-images/trip2.jpg", alt: "Trip 2", title: "Mountain Treks" },
        { src: "/landing-page-images/random1.jpg", alt: "Random", title: "Random Moments" },
    ];

    const scrollToGallery = () => {
        document.getElementById('gallery-grid')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        /* Adjusted margins and padding to match Footer exactly */
        <main className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            {/* --- HERO SECTION --- */}
            <section className="pt-0 sm:py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 w-full">
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

            {/* --- GALLERY GRID SECTION --- */}
            <section id="gallery-grid" className="py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <div 
                            key={index} 
                            className="relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800 group h-[300px] sm:h-[400px]"
                        >
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay info on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <p className="text-white font-bold text-xl">{image.title}</p>
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