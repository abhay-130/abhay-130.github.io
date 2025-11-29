
import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../types';

// Local services data (moved from constants.tsx)
function BrandingIcon() {
  return (
    <div className="relative w-16 h-16">
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#D9D9D9"/>
        <path d="M48.28 25H31.72C30.043 25 28.666 26.31 28.81 27.98L30.43 46.02C30.542 47.373 31.643 48.36 32.999 48.36H47.001C48.357 48.36 49.458 47.373 49.57 46.02L51.19 27.98C51.334 26.31 49.957 25 48.28 25Z" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 52C36 54.2091 37.7909 56 40 56C42.2091 56 44 54.2091 44 52" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
function DesignIcon() {
  return (
    <div className="relative w-16 h-16">
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#D9D9D9"/>
        <path d="M29 27L51 27" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
        <path d="M29 53L51 53" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
        <path d="M40 27V53" stroke="#121212" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}
function MarketingIcon() {
  return (
    <div className="relative w-16 h-16">
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#D9D9D9"/>
        <path d="M51 30H29V50C29 51.1046 29.8954 52 31 52H49C50.1046 52 51 51.1046 51 50V30Z" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M35 30V26C35 24.8954 35.8954 24 37 24H43C44.1046 24 45 24.8954 45 26V30" stroke="#121212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

const ServicesPage: React.FC = () => {
  return (
    <main className="p-4 sm:p-6 md:p-8">
        <section id="services" className="pt-0 sm:py-16 md:py-24">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <p className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-[3px] text-light-text dark:text-dark-text">Services</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold -tracking-wide leading-tight">How I Can Help You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-13">
            {services.map((service, index) => (
            <div key={index} className="flex flex-col p-6 sm:p-8 rounded-3xl border border-light-text dark:border-dark-text transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                {service.icon}
                <h3 className="text-xl sm:text-2xl font-semibold max-w-[10rem] leading-snug">{service.title}</h3>
                </div>
                <p className="text-light-text-muted dark:text-dark-text-muted text-sm sm:text-base leading-relaxed flex-grow">
                {service.description}
                </p>
                <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                    <div className="absolute inset-0 bg-light-text dark:bg-dark-text rounded-full"></div>
                    <p className="absolute inset-0 flex items-center justify-center font-bold text-lg sm:text-xl text-theme-red">{service.projects}+</p>
                </div>
                <p className="font-medium text-sm sm:text-base">Projects Done</p>
                </div>
            </div>
            ))}
        </div>
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
            <a href="#projects" className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-theme-red font-semibold text-base sm:text-lg hover:bg-theme-red hover:text-white dark:hover:text-dark-text transition-colors">
                Explore Now
            </a>
        </div>
        </section>
        <div className="text-center mt-8">
            <Link to="/" className="text-xs sm:text-sm md:text-[13px] mt-[20px] px-3 sm:px-4 py-2 rounded-full font-semibold text-black dark:text-light-text transition-colors hover:bg-black hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg">
                Back to Home
            </Link>
        </div>
    </main>
  );
};

export default ServicesPage;
