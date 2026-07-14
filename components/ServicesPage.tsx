/// <reference types="vite/client" />
import React from 'react';
import { Link } from 'react-router-dom';
import ResizableButton from './ResizableButton';

// Refined Icons with a more professional architectural/tech feel
function ArchIcon() {
  return (
    <div className="w-14 h-14 bg-theme-red/10 rounded-2xl flex items-center justify-center text-theme-red text-3xl">
      🏛️
    </div>
  );
}
function TechIcon() {
  return (
    <div className="w-14 h-14 bg-theme-red/10 rounded-2xl flex items-center justify-center text-theme-red text-3xl">
      💻
    </div>
  );
}
function ConsultIcon() {
  return (
    <div className="w-14 h-14 bg-theme-red/10 rounded-2xl flex items-center justify-center text-theme-red text-3xl">
      🤝
    </div>
  );
}

const services = [
  {
    icon: <ArchIcon />,
    title: 'Architectural Design',
    subtitle: 'Spaces & Structures',
    description: 'Specializing in residential housing, front elevations, and interior design. I bridge the gap between Saharanpur’s local needs and modern architectural standards.',
    tags: ['3D Modeling', 'Front Elevation', 'Interior Design', 'BIM']
  },
  {
    icon: <TechIcon />,
    title: 'Digital Solutions',
    subtitle: 'Code & Visuals',
    description: 'I build high-performance websites and mobile apps for startups. From Figma designs to full-stack React/Android deployment.',
    tags: ['Web Apps', 'Android Apps', 'UI/UX', 'Branding']
  },
  {
    icon: <ConsultIcon />,
    title: 'Consultancy',
    subtitle: 'Guidance & Strategy',
    description: 'Offering expert property consultancy and career mentorship for students. I help you navigate the complexity of land value and career paths.',
    tags: ['Property Advice', 'Mentorship', 'Career Growth', 'Execution']
  },
];

const ServicesPage: React.FC = () => {
  return (
    /* Adjusted margins and padding to match Footer exactly */
    <main className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <section id="services" className="sm:pb-16 md:pb-24">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <p className="text-theme-red font-bold text-sm sm:text-base uppercase tracking-[4px] mb-4">My Expertise</p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold -tracking-wide leading-tight">
                    Architecture. Tech. <br />Consultancy.
                </h2>
            </div>
            <p className="text-lg text-light-text-muted dark:text-dark-text-muted max-w-sm">
                Combining the precision of an IIT architect with the agility of a full-stack developer.
            </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
            <div 
                key={index} 
                className="group p-8 sm:p-10 rounded-[2.5rem] bg-gray-50 dark:bg-gray-900 border border-transparent hover:border-theme-red/30 transition-all duration-500 hover:shadow-2xl hover:shadow-theme-red/5"
            >
                <div className="mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-3 origin-left">
                    {service.icon}
                </div>
                
                <p className="text-theme-red font-bold text-xs uppercase tracking-widest mb-2">{service.subtitle}</p>
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 group-hover:text-theme-red transition-colors">{service.title}</h3>
                
                <p className="text-light-text-muted dark:text-dark-text-muted text-base leading-relaxed mb-8">
                    {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-xs font-semibold shadow-sm border border-gray-100 dark:border-gray-700">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 p-8 sm:p-16 rounded-[3rem] bg-black dark:bg-white text-white dark:text-black flex flex-col items-center text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">Need a custom solution for your next project?</h3>
            <p className="text-gray-400 dark:text-gray-500 text-lg mb-10 max-w-2xl">
                Whether it's a front elevation for your house, a mobile app for your business, or career guidance, I'm here to build it with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                    <ResizableButton size={15} className="bg-theme-red text-white px-10 py-4 rounded-full font-bold">
                        Book a Consultation
                    </ResizableButton>
                </Link>
                <a href="tel:+918273746070">
                    <ResizableButton size={15} className="border-2 border-white dark:border-black px-10 py-4 rounded-full font-bold">
                        Call Me Directly
                    </ResizableButton>
                </a>
            </div>
        </div>
        </section>

        <div className="text-center mt-12 mb-8">
            <Link to="/" className="text-sm font-bold uppercase tracking-widest hover:text-theme-red transition-colors">
                ← Back to Home
            </Link>
        </div>
    </main>
  );
};

export default ServicesPage;