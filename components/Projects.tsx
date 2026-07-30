import React from 'react';

const projectItems = [
  { image: '/landing-page-images/architecture.jpg', title: 'Architecture', category: 'Spaces & Structures Body' },
  { image: '/landing-page-images/design.JPG', title: 'Design', category: 'Brand & Identity' },
  { image: '/landing-page-images/code.JPG', title: 'Codes', category: 'Code & Logic' },
  { image: '/landing-page-images/career.jpeg', title: 'Career talks', category: 'The listerner and a Mentor' },
  { image: '/landing-page-images/social.jpg', title: 'Social things', category: 'For myself and people' },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      <div className="flex flex-row justify-between items-end mb-8 sm:mb-10 md:mb-12 gap-2 sm:gap-4">
        {/* Left Side: Text */}
        <div>
          <p className="text-xs sm:text-base font-medium uppercase tracking-[2px] sm:tracking-[3px]">Projects</p>
          {/* Reduced text-3xl to text-xl/2xl on mobile to fit next to button */}
          <h2 className="text-xl min-[400px]:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold -tracking-wide leading-tight">
            Latest Works
          </h2>
        </div>

        {/* Right Side: Button */}
        {/* Removed mt-4, reduced padding (px-3 py-1) and text size (text-xs) for mobile */}
        <a 
          href="./projects" 
          className="whitespace-nowrap px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-base rounded-full border-2 border-theme-red font-semibold hover:bg-theme-red hover:text-white dark:hover:text-dark-text transition-colors"
        >
          EXPLORE MORE →
        </a>
      </div>

      <div className="flex overflow-x-auto space-x-4 sm:space-x-6 md:space-x-8 pb-4 sm:pb-6 md:pb-8 scrollbar-thin scrollbar-thumb-theme-red scrollbar-track-gray-200 dark:scrollbar-track-gray-700 -mx-4 sm:-mx-0 px-4 sm:px-0">
        {projectItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-[280px] h-[400px] sm:w-[320px] sm:h-[450px] md:w-[448px] md:h-[576px] rounded-2xl overflow-hidden relative group">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 text-white">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">{item.title}</h3>
              <p className="text-sm sm:text-base md:text-lg">{item.category}</p>
              <a href="./projects" className="mt-3 sm:mt-4 inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border-2 border-white text-black bg-white font-semibold hover:bg-transparent hover:text-white transition-colors">
                Explore More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
