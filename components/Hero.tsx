import React, { useState, useEffect } from 'react';

// Define the structure for our language objects
interface LanguageContent {
  lang: string;
  line1: string; // The "Hi, I'm" part
  line2: string; // The "AbhaY!" part (will get the gradient)
}

const Hero: React.FC = () => {
  // 1. STATE: Keeps track of which language index is currently showing
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. DATA: The list of languages in the specific order you requested
  // Order: Hindi -> English -> Urdu -> Punjabi -> Others
  const languages: LanguageContent[] = [
    { lang: 'Hindi', line1: "नमस्ते, मैं", line2: "अभय हूँ!" },
    { lang: 'English', line1: "Hi, I'm", line2: "Ansh!" },
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

  // 3. EFFECT: Cycles through the array every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 4000); // 3000ms = 3 seconds

    // Cleanup function to stop the timer if the component unmounts
    return () => clearInterval(interval);
  }, [languages.length]);

  return (
    <section
      id="home"
      className="
        w-full
        flex flex-col lg:flex-row 
        items-center lg:items-start justify-start
        bg-white dark:bg-dark-bg
        
        !pt-[80px] lg:!pt-[80px] 
        !pb-[60px]  lg:!pb-[50px]
        !pl-[20px]  lg:!pl-[100px]
        !pr-[20px]  lg:!pr-[100px]
        
        gap-[50px] lg:gap-[80px]
        
        overflow-hidden
      "
    >
      
      {/* 1. TEXT SECTION */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:w-1/2 lg:mt-[20px]">
        
        <span className="mb-[15px] py-[8px] px-[16px] rounded-full bg-gray-100 dark:bg-gray-800 text-[12px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">
          Architecture & Design
        </span>

        {/* DYNAMIC HEADING SECTION */}
        <h1 className="font-poppins font-extrabold text-[40px] sm:text-[60px] lg:text-[90px] leading-[1.1] text-gray-900 dark:text-white mb-[20px] min-h-[140px] lg:min-h-[200px]">
          {/* We use a transition effect here implicitly by React re-rendering */}
          <span className="block animate-fade-in">
            {languages[currentIndex].line1}
          </span> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 block">
            {languages[currentIndex].line2}
          </span>
        </h1>

        <p className="font-poppins text-[16px] sm:text-[18px] text-gray-600 dark:text-gray-400 max-w-[500px] mb-[40px]">
          Welcome to my creative corner. I'm an <span className="font-bold text-gray-900 dark:text-gray-100">Architecture Student at IIT Roorkee</span> and a graphic designer passionate about visual storytelling.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-[20px]">
          <button 
            onClick={() => { window.location.hash = '#projects' }}
            className="px-[40px] py-[15px] rounded-full bg-red-600 text-white font-semibold text-[16px] hover:bg-red-700 transition-colors"
          >
            View My Work
          </button>

          <a
            href="#contact"
            className="text-[16px] font-medium text-gray-900 dark:text-white hover:text-red-600 transition-colors"
          >
            Contact Me →
          </a>
        </div>
      </div>

      {/* 2. IMAGE SECTION */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src="landing-page-images/abhay-profile.JPG"
          alt="Abhay Kishor"
          className="
            object-cover rounded-[20px] shadow-2xl
            w-[300px] h-[350px] 
            sm:w-[400px] sm:h-[500px] 
            lg:w-[500px] lg:h-[600px]
          "
        />
      </div>

    </section>
  );
};

export default Hero;