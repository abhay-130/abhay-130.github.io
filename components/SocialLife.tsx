import React, { useState, useEffect } from 'react';
import ResizableButton from './ResizableButton';
import { useNavigate } from 'react-router-dom';

const SocialLife: React.FC = () => {
  const navigate = useNavigate();

  const images = [
    "/landing-page-images/photo1.JPG",
    "/landing-page-images/photo2.JPG",
    "/landing-page-images/photo3.JPG",
    "/landing-page-images/photo4.JPG"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide to the next image every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/social-life');
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16 w-full py-8">
      
      {/* --- LEFT: TEXT STORY & CALL TO ACTION --- */}
      <div className="flex-1 flex flex-col items-start order-2 md:order-1">
        
        {/* Badge Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-red/10 border border-theme-red/20 text-theme-red text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-theme-red animate-pulse" />
          <span>OFF-DUTY CHRONICLES</span>
        </div>

        {/* Solid Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black -tracking-wide leading-[1.15] text-light-text dark:text-dark-text mb-4">
          Proof That 
          <br />
          <span className="text-theme-red"> 
            AbhaY Has A Life.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-light-text-muted dark:text-dark-text-muted leading-relaxed max-w-xl mb-6">
          Believe it or not, I do leave my desk! Here's a raw collection of campus chaos, weekend road trips, late-night architectural jams, and all the unscripted moments that keep me sane between deadlines.
        </p>

        {/* Quick Vibe Highlights */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['Campus Chaos', 'Road Trips', 'Night-Outs', 'Pure Randomness'].map((tag, idx) => (
            <span 
              key={idx}
              className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-light-text-muted dark:text-dark-text-muted"
            >
              #{tag}
            </span>
          ))}
        </div>

        <ResizableButton
          onClick={handleNavigation}
          size={13}
          className="px-6 py-3 text-sm sm:text-base font-extrabold uppercase tracking-wider rounded-full text-black dark:text-white hover:bg-theme-red dark:hover:bg-theme-red dark:hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          EXPLORE GALLERY →
        </ResizableButton>
      </div>

      {/* --- RIGHT: SIMPLE CAROUSEL IMAGE CONTAINER WITH SUBTLE DROP SHADOW --- */}
      <div className="flex-1 w-full order-1 md:order-2 flex justify-center">
        <div 
          onClick={handleNavigation}
          className="relative w-full max-w-[540px] cursor-pointer group overflow-hidden rounded-[2rem] border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Image Slider Wrapper */}
          <div className="overflow-hidden relative aspect-[4/3] w-full">
            
            {/* Carousel Track */}
            <div 
              className="flex w-full h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((imgSrc, index) => (
                <div key={index} className="w-full h-full shrink-0 relative">
                  <img
                    src={imgSrc}
                    alt={`Gallery moment ${index + 1}`}
                    loading="lazy"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              ))}
            </div>

            {/* Gradient Overlay & Photo Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10 pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase drop-shadow-md">
                  IIT Roorkee & Beyond
                </span>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                {images.map((_, idx) => (
                  <span 
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default SocialLife;