import React from 'react';
import { ServiceItem } from '../types';

// Local services data
function BrandingIcon() {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="40" fill="#D9D9D9" />
        <path d="M48.28 25H31.72C30.043 25 28.666 26.31 28.81 27.98L30.43 46.02C30.542 47.373 31.643 48.36 32.999 48.36H47.001C48.357 48.36 49.458 47.373 49.57 46.02L51.19 27.98C51.334 26.31 49.957 25 48.28 25Z" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 52C36 54.2091 37.7909 56 40 56C42.2091 56 44 54.2091 44 52" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function DesignIcon() {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="40" fill="#D9D9D9" />
        <path d="M29 27L51 27" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
        <path d="M29 53L51 53" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 27V53" stroke="#121212" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function MarketingIcon() {
  return (
    <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0">
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="40" fill="#D9D9D9" />
        <path d="M51 30H29V50C29 51.1046 29.8954 52 31 52H49C50.1046 52 51 51.1046 51 50V30Z" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 30V26C35 24.8954 35.8954 24 37 24H43C44.1046 24 45 24.8954 45 26V30" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

const services: ServiceItem[] = [
  {
    icon: <BrandingIcon />,
    title: 'Architecture & Spaces',
    description: 'I design buildings that look good and (hopefully) stand up. Focused on sustainable, functional, and culturally rich spaces.',
    projects: 3,
  },
  {
    icon: <DesignIcon />,
    title: 'Graphic & UI/UX Design',
    description: 'Making things look pretty is my superpower. I craft logos, branding, and layouts that catch the eye and do not let go.',
    projects: 7,
  },
  {
    icon: <MarketingIcon />,
    title: 'Web Development',
    description: 'I speak fluent React & Tailwind. I build websites that are fast, responsive, and cooler than your average template.',
    projects: 3,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="w-full py-6">
      
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12 md:mb-16 flex flex-col items-center gap-2">
        <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[4px] text-theme-red">
          SERVICES
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black -tracking-wide leading-tight text-light-text dark:text-dark-text">
          How I Can Help You
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col p-6 sm:p-8 rounded-[2rem] bg-gray-50/50 dark:bg-white/[0.02] border border-black/10 dark:border-white/10 hover:border-theme-red/50 dark:hover:border-theme-red/50 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2 group"
          >
            {/* Service Header: Icon & Title */}
            <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-black leading-snug text-light-text dark:text-dark-text group-hover:text-theme-red transition-colors">
                {service.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-light-text-muted dark:text-dark-text-muted text-sm sm:text-base leading-relaxed flex-grow mb-6 sm:mb-8">
              {service.description}
            </p>

            {/* Projects Done Counter Badge */}
            <div className="flex items-center gap-4 pt-4 border-t border-black/5 dark:border-white/5">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                <div className="absolute inset-0 bg-black dark:bg-white rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                <p className="absolute inset-0 flex items-center justify-center font-mono font-black text-lg sm:text-xl text-theme-red z-10">
                  {service.projects}+
                </p>
              </div>
              <div>
                <p className="font-extrabold text-sm sm:text-base text-light-text dark:text-dark-text">
                  Projects Done
                </p>
                <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted">
                  Shipped & Live
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Explore Button */}
      <div className="text-center mt-10 sm:mt-12 md:mt-16">
        <a 
          href="./services" 
          className="inline-block px-7 sm:px-8 py-3 sm:py-3.5 rounded-full border-2 border-theme-red text-theme-red dark:text-theme-red font-extrabold text-sm sm:text-base uppercase tracking-wider hover:bg-theme-red hover:text-white dark:hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          Explore Now →
        </a>
      </div>

    </section>
  );
};

export default Services;