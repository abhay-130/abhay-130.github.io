import React, { useState, useEffect } from 'react';
import { sanityClient } from './data/sanityClient';

interface LanguageContent {
  lang: string;
  line1: string; 
  line2: string; 
}

const fallbackImage = 'landing-page-images/abhay-profile.JPG';

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heroImageUrl, setHeroImageUrl] = useState<string>(fallbackImage);

  const languages: LanguageContent[] = [
    { lang: 'Hindi', line1: "नमस्ते, मैं", line2: "अभय हूँ!" },
    { lang: 'English', line1: "Hi, I'm", line2: "AbhaY!" },
    { lang: 'Urdu', line1: "سلام، میں", line2: "ابھے ہوں!" },
    { lang: 'Punjabi', line1: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ਮੈਂ", line2: "ਅਭੈ ਹਾਂ!" },
    { lang: 'Bengali', line1: "নমস্কার, আমি", line2: "অভয়!" },
    { lang: 'Tamil', line1: "வணக்கம், நான்", line2: "அபய்!" },
    { lang: 'Telugu', line1: "నమస్కారం, నేను", line2: "అభయ్!" },
    { lang: 'Marathi', line1: "नमस्कार, मी", line2: "अभय आहे!" },
    { lang: 'Gujarati', line1: "નમસ્તે, હું", line2: "અભય છું!" },
    { lang: 'Kannada', line1: "ನಮಸ್ಕಾರ, ನಾನು", line2: "ಅಭಯ್!" },
    { lang: 'Malayalam', line1: "നമസ്കാരം, ഞാൻ", line2: "അഭയ്!" },
  ];

  useEffect(() => {
    const query = `*[_type == "heroImage"][0]{
      "url": image.asset->url
    }`;

    sanityClient
      .fetch(query)
      .then((data) => {
        if (data && data.url) {
          setHeroImageUrl(data.url);
        }
      })
      .catch((err) => {
        console.warn('Sanity hero image fetch error:', err);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [languages.length]);

  return (
    <section
      id="home"
      className="
        w-full
        flex flex-col lg:flex-row 
        items-center justify-between
        bg-white dark:bg-dark-bg
        pt-2 sm:pt-2 pb-0
        px-6 sm:px-12 md:px-16 lg:px-24
        gap-6 lg:gap-8 xl:gap-10
        max-w-[1280px] mx-auto
        -mb-12 sm:-mb-16 md:-mb-5
      "
    >
      {/* 1. TEXT SECTION */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:flex-1 min-w-0">
        
        {/* CENTERED BADGE */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="inline-flex items-center gap-2 mb-6 py-1.5 px-4 rounded-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[12px] font-mono font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300">
            <span className="w-2 h-2 rounded-full bg-theme-red" />
            <span>Architecture & Design</span>
          </div>
        </div>

        {/* REDUCED SIZE HEADING */}
        <h1 className="font-poppins font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-gray-900 dark:text-white mb-6 min-h-[140px] sm:min-h-[170px] lg:min-h-[210px] flex flex-col justify-center leading-[1.12] sm:leading-[1.15]">
          <span 
            key={`line1-${currentIndex}`} 
            className="block py-0.5 animate-fade-in transition-all duration-500"
          >
            {languages[currentIndex].line1}
          </span> 
          <span 
            key={`line2-${currentIndex}`}
            className="text-theme-red block py-0.5 animate-fade-in transition-all duration-500"
          >
            {languages[currentIndex].line2}
          </span>
        </h1>

        {/* PARAGRAPH */}
        <p className="font-poppins text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-8 leading-relaxed">
          Welcome to my creative corner. I'm an <span className="font-bold text-gray-900 dark:text-gray-100">Architecture Student at IIT Roorkee</span> and a graphic designer passionate about visual storytelling.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button 
            onClick={() => { window.location.hash = '#projects' }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-theme-red text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-theme-red/90 transition-colors duration-300"
          >
            View My Work
          </button>

          <a
            href="#contact" 
            className="w-full sm:w-auto text-center px-7 py-4 rounded-full border border-black/10 dark:border-white/10 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white hover:border-theme-red hover:text-theme-red dark:hover:text-theme-red transition-colors duration-300 group"
          >
            <span>Contact Me</span>
            <span className="inline-block transform group-hover:translate-x-1 transition-transform ml-1">→</span>
          </a>
        </div>
      </div>

      {/* 2. FIXED SIZE PHOTO CONTAINER (NO BADGE OVERLAY) */}
      <div className="flex-shrink-0 shrink-0 w-[280px] sm:w-[380px] lg:w-[440px] xl:w-[480px] flex justify-center lg:justify-end">
        <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-black/10 dark:border-white/10">
          <img
            src={heroImageUrl}
            alt="Abhay Kishor"
            className="w-full h-full object-cover rounded-[2rem]"
          />
        </div>
      </div>

      {/* Keyframe for Fade Effect */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>

    </section>
  );
};

export default Hero;