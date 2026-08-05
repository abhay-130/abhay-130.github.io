import React from 'react';
import { Link } from 'react-router-dom';

const projectItems = [
  { image: '/landing-page-images/architecture.jpg', title: 'Architecture', category: 'Spaces & Structures Body' },
  { image: '/landing-page-images/design.JPG', title: 'Design', category: 'Brand & Identity' },
  { image: '/landing-page-images/code.JPG', title: 'Codes', category: 'Code & Logic' },
  { image: '/landing-page-images/career.jpeg', title: 'Tutor', category: 'The Listener & Mentor' },
  { image: '/landing-page-images/social.jpg', title: 'Social Life', category: 'Myself & People' },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32 w-full">
      
      {/* Header Section */}
      <div className="flex flex-row justify-between items-end mb-8 sm:mb-10 md:mb-12 gap-2 sm:gap-4">
        {/* Left Side: Title */}
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-theme-red animate-pulse" />
            <p className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[2px] sm:tracking-[3px] text-theme-red">
              Projects / Personal
            </p>
          </div>
          <h2 className="text-xl min-[400px]:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black -tracking-wide leading-tight text-light-text dark:text-dark-text">
            Latest Works
          </h2>
        </div>

        {/* Right Side: Header Button with Bottom-to-Top Fill */}
        <Link 
          to="/projects" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="relative overflow-hidden group border-2 border-theme-red rounded-full px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-light-text dark:text-dark-text transition-colors duration-300 shadow-sm"
        >
          {/* Animated fill layer starting from bottom */}
          <span className="absolute bottom-0 left-0 w-full h-0 bg-theme-red transition-all duration-300 ease-out group-hover:h-full z-0" />
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            EXPLORE MORE →
          </span>
        </Link>
      </div>

      {/* Horizontal Scroll Cards Track with Custom High-Contrast Scrollbar */}
      <div className="custom-projects-scrollbar flex overflow-x-auto space-x-4 sm:space-x-6 md:space-x-8 pb-6 sm:pb-8 -mx-4 sm:-mx-0 px-4 sm:px-0 snap-x snap-mandatory">
        {projectItems.map((item, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 snap-start w-[280px] h-[400px] sm:w-[320px] sm:h-[450px] md:w-[420px] md:h-[560px] rounded-[2rem] overflow-hidden relative group border border-black/10 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-theme-red/10 transition-all duration-500"
          >
            {/* Background Image */}
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/95"></div>

            {/* Bottom Content Card */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white transform transition-transform duration-300 group-hover:-translate-y-1">
              <p className="text-xs sm:text-sm font-mono text-theme-red font-bold uppercase tracking-wider mb-1">
                {item.category}
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 tracking-tight">
                {item.title}
              </h3>

              {/* CARD BUTTON WITH BOTTOM-TO-TOP FILL ANIMATION */}
              <Link 
                to="/projects" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="relative overflow-hidden group/btn inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm rounded-full bg-white text-black font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md border border-white"
              >
                {/* Bottom-to-top fill background layer */}
                <span className="absolute bottom-0 left-0 w-full h-0 bg-theme-red transition-all duration-300 ease-out group-hover/btn:h-full z-0" />
                
                {/* Button Text & Arrow */}
                <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-white">
                  Explore More
                </span>
                <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-white transform group-hover/btn:translate-x-1 duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CUSTOM HORIZONTAL SCROLLBAR STYLING */}
      <style>{`
        /* Scrollbar track container */
        .custom-projects-scrollbar::-webkit-scrollbar {
          height: 10px;
        }

        /* Track background: White in Light Theme, Black in Dark Theme */
        .custom-projects-scrollbar::-webkit-scrollbar-track {
          background-color: #ffffff;
          border-radius: 9999px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        :is(.dark) .custom-projects-scrollbar::-webkit-scrollbar-track {
          background-color: #000000;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        /* Thick stick indicator: Opposite contrasting color */
        .custom-projects-scrollbar::-webkit-scrollbar-thumb {
          background-color: #000000;
          border-radius: 9999px;
          border: 2px solid transparent;
        }

        :is(.dark) .custom-projects-scrollbar::-webkit-scrollbar-thumb {
          background-color: #ffffff;
          border: 2px solid transparent;
        }

        /* Hover effect on scrollbar stick */
        .custom-projects-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #e63946;
        }
      `}</style>

    </section>
  );
};

export default Projects;