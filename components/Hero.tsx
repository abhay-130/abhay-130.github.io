import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="
        w-full
        flex flex-col lg:flex-row 
        
        /* CHANGED: 
           1. items-center (keeps mobile centered horizontally)
           2. lg:items-start (stops desktop from forcing vertical center) 
           3. justify-start (keeps content at the top of the main axis)
        */
        items-center lg:items-start justify-start
        
        bg-white dark:bg-dark-bg
        
        /* This is the distance from the top of the screen */
        /* 0px would hide it behind the navbar. 80-100px is usually safe. */
        
        !pt-[80px] lg:!pt-[80px] 
        !pb-[60px]  lg:!pb-[50px]
        !pl-[20px]  lg:!pl-[100px]
        !pr-[20px]  lg:!pr-[100px]
        
        gap-[50px] lg:gap-[80px]
        
        overflow-hidden
      "
    >
      
      {/* 1. TEXT SECTION */}
      {/* Added lg:mt-[40px] to align text nicely with the image top if needed */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:w-1/2 lg:mt-[20px]">
        
        <span className="mb-[15px] py-[8px] px-[16px] rounded-full bg-gray-100 dark:bg-gray-800 text-[12px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">
          Architecture & Design
        </span>

        <h1 className="font-poppins font-extrabold text-[40px] sm:text-[60px] lg:text-[90px] leading-[1.1] text-gray-900 dark:text-white mb-[20px]">
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
            AbhaY!
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