
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
        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 w-full">
            <div className="flex-1 flex flex-col items-start">
                <p className="text-sm sm:text-base mb-[0] font-normal tracking-[3px]">Social Life</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-4 font-bold leading-tight">Proof That I Have a Life</h2>
                {/* Resizable button: pass size as number (px) or string (e.g. '2rem') */}

                <p className="text-sm sm:text-base md:text-[16px] text-light-text-muted dark:text-dark-text-muted">
                    Believe it or not, I do leave my desk! Here's a collection of campus chaos, weekend trips, and all the random moments that keep me sane between deadlines.
                </p>
                <ResizableButton onClick={(handleNavigation)} size={13} className="px-3 sm:px-4 py-2 mt-6 sm:mt-8 text-sm sm:text-base hover:bg-theme-red hover:text-white dark:hover:text-dark-text transition-colors">
                    View Gallery
                </ResizableButton>

            </div>
            <div className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto">
                <img src="/landing-page-images/DSC_0180.JPG" alt="Gallery" className="rounded-3xl object-cover w-full max-w-[700px] h-auto" />
            </div>
        </section>
    );
};

export default SocialLife;
