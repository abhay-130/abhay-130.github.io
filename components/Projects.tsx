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
    <section id="projects" className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-10 md:mb-12 gap-4">
        <div>
          <p className="text-sm sm:text-base font-medium uppercase tracking-[3px]">Projects</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold -tracking-wide leading-tight">Latest Works</h2>
        </div>
        <a href="#" className="mt-4 md:mt-0 px-3 sm:px-4 py-2 text-sm sm:text-base rounded-full border-2 border-theme-red font-semibold hover:bg-theme-red hover:text-white dark:hover:text-dark-text transition-colors">
          EXPLORE MORE
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
              <a href="#" className="mt-3 sm:mt-4 inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border-2 border-white text-black bg-white font-semibold hover:bg-transparent hover:text-white transition-colors">
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
