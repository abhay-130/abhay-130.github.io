import React from 'react';
import ResizableButton from './ResizableButton';
import { useNavigate } from 'react-router-dom';

const SocialLife: React.FC = () => {
    const navigate = useNavigate();
    const handleNavigation = () => {
        window.scrollTo(0, 0);
        navigate('/social-life');
    };
    return (
        // Changed lg:flex-row to md:flex-row so the side-by-side layout starts on Tablets
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 w-full">
            <div className="flex-1 flex flex-col items-start">
                <p className="text-sm sm:text-base mb-[0] font-normal tracking-[3px]">Social Life</p>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-4 font-bold leading-tight">
                    Proof That I Have a Life
                </h2>

                {/* --- MOBILE IMAGE --- */}
                {/* Visible ONLY on Mobile (< 768px). Hidden on Tablet & up. */}
                <div className="w-full mb-6 md:hidden">
                    <img 
                        src="/landing-page-images/DSC_0180.JPG" 
                        alt="Gallery" 
                        className="rounded-3xl object-cover w-full h-auto" 
                    />
                </div>
                {/* -------------------- */}

                <p className="text-sm sm:text-base md:text-[16px] text-light-text-muted dark:text-dark-text-muted">
                    Believe it or not, I do leave my desk! Here's a collection of campus chaos, weekend trips, and all the random moments that keep me sane between deadlines.
                </p>
                
                <ResizableButton onClick={(handleNavigation)} size={13} className="px-3 sm:px-4 py-2 mt-6 sm:mt-8 text-sm sm:text-base hover:bg-theme-red hover:text-white dark:hover:text-dark-text transition-colors">
                    View Gallery
                </ResizableButton>
            </div>

            {/* --- TABLET & DESKTOP IMAGE --- */}
            {/* Hidden on Mobile. Visible on Tablet & up (>= 768px). */}
            <div className="hidden md:flex flex-1 justify-center lg:justify-end w-full lg:w-auto">
                <img 
                    src="/landing-page-images/DSC_0180.JPG" 
                    alt="Gallery" 
                    className="rounded-3xl object-cover w-full max-w-[700px] h-auto" 
                />
            </div>
            {/* ------------------------------ */}
        </section>
    );
};

export default SocialLife;