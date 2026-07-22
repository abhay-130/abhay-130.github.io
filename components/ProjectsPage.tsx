/// <reference types="vite/client" />
import React from 'react';
import { Link } from 'react-router-dom';
import ResizableButton from './ResizableButton';

const projectItems = [
  { 
    image: '/landing-page-images/architecture.jpg', 
    title: 'Flavyo App', 
    category: 'Full-Stack Development',
    description: 'Android ice cream application with Jetpack Compose & Supabase backend.',
    link: '#' 
  },
  { 
    image: '/landing-page-images/design.JPG', 
    title: 'City Library Saharanpur', 
    category: 'Branding & Identity',
    description: 'Full identity design including logo and large-scale horizontal banner (10ft x 4ft).',
    link: '#' 
  },
  { 
    image: '/landing-page-images/code.JPG', 
    title: 'Ancient Urbanism', 
    category: 'Architecture Thesis',
    description: 'Researching Chola dynasty urban patterns and radiocarbon dating applications.',
    link: '#' 
  },
  { 
    image: '/landing-page-images/career.jpeg', 
    title: 'Chhattisgarh Internship', 
    category: 'Vernacular Architecture',
    description: 'Documentation of traditional mud house construction techniques.',
    link: '#' 
  },
  { 
    image: '/landing-page-images/social.jpg', 
    title: 'Virasat’26', 
    category: 'Leadership & Events',
    description: 'Convener of IIT Roorkee’s heritage fest, managing 8+ major workshops.',
    link: '#' 
  },
];

const ProjectsPage: React.FC = () => {
  return (
    /* Adjusted margins and padding to match Footer exactly */
    <main className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      {/* --- HEADER SECTION --- */}
      <section id="projects" className="pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-theme-red font-bold text-sm sm:text-base uppercase tracking-[4px] mb-4">Portfolio</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold -tracking-wide leading-tight mb-6">
              Selected Works <br /> & Studies
            </h2>
            <p className="text-lg text-light-text-muted dark:text-dark-text-muted leading-relaxed">
              A collection of architectural designs, modern web applications, and leadership roles that define my journey at IIT Roorkee.
            </p>
          </div>
          
          <a 
            href="https://www.behance.net/abhaykishor130" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border-2 border-theme-red font-bold text-theme-red hover:bg-theme-red hover:text-white transition-all transform hover:scale-105"
          >
            VIEW PORTFOLIO
          </a>
        </div>

        {/* --- DYNAMIC PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projectItems.map((item, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-gray-900 transition-all duration-500 hover:shadow-2xl hover:shadow-theme-red/10 ${
                index % 3 === 0 ? 'md:col-span-2 h-[400px] md:h-[600px]' : 'h-[500px]'
              }`}
            >
              {/* Image with Parallax-like effect */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80" 
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Content Box */}
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col items-start transform transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-theme-red font-bold text-xs uppercase tracking-widest mb-3 bg-white/10 backdrop-blur-md px-3 py-1 rounded-md">
                  {item.category}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/70 text-base md:text-lg mb-6 max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.description}
                </p>
                <Link to={item.link}>
                  <ResizableButton 
                    size={14} 
                    className="bg-white text-black font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-theme-red hover:text-white transition-all"
                  >
                    View Project Case Study
                  </ResizableButton>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER NAVIGATION --- */}
      <div className="text-center py-24">
        <h3 className="text-2xl font-bold mb-8">Got a specific project in mind?</h3>
        <Link to="/contact">
           <ResizableButton size={15} className="bg-theme-red text-white px-10 py-4 rounded-full shadow-xl shadow-theme-red/20">
             Start a Conversation
           </ResizableButton>
        </Link>
        <div className="mt-12">
            <Link to="/" className="text-sm font-bold uppercase tracking-widest hover:text-theme-red transition-colors">
                ← Back to Home
            </Link>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;