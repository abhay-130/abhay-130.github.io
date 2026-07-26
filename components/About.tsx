import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <section id="about" className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 lg:gap-14 w-full">
            
            {/* Left Column: Image Container with Creative Accents */}
            <div className="flex-1 w-full relative group">
                {/* Background Glow Accent */}
                <div className="absolute -inset-1 bg-gradient-to-r from-theme-red/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Profile Image Frame */}
                <div className="relative overflow-hidden rounded-[2rem] bg-gray-100 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-xl">
                    <img 
                        src="/landing-page-images/abhay-profile.JPG" 
                        alt="Abhay Kishor" 
                        className="rounded-[2rem] object-cover w-full h-[380px] sm:h-[460px] md:h-[500px] transition-transform duration-700 ease-out group-hover:scale-105" 
                    />

                    {/* Creative Floating Badge: Architectural Grid Concept */}
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 backdrop-blur-md bg-white/80 dark:bg-black/70 border border-white/20 dark:border-white/10 px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-theme-red animate-pulse" />
                        <div>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-light-text-muted dark:text-dark-text-muted">Domain</p>
                            <p className="text-xs font-black tracking-wide text-light-text dark:text-dark-text">Arch & Planning @ IIT Roorkee</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Creative Content & Interactive Elements */}
            <div className="flex-1 flex flex-col items-start px-2 sm:px-0">
                {/* Section Subhead Badge */}
                <div className="flex items-center gap-2 mb-3">
                    <p className="font-bold lg:text-[20px] text-theme-red tracking-[5px] uppercase">
                       ABHAY KISHOR
                    </p>
                </div>

                {/* Main Headline */}
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold leading-snug tracking-tight text-light-text dark:text-dark-text">
                    A Designer Who Loves to Build, Tell Stories and... <span className="text-theme-red">Watch Cinema.</span>
                </h2>

                {/* Bio Paragraph */}
                <p className="text-sm sm:text-base md:text-[15px] mt-4 sm:mt-5 text-light-text-muted dark:text-dark-text-muted leading-relaxed">
                    I'm an architecture student at the Department of Architecture & Planning, IIT Roorkee. My practice moves between architecture, graphics, and visual media, inspired by materials, music, and everyday interactions.
                </p>

                {/* Creative Element 1: Discipline Skill Pill Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                    {['Spatial Design', 'Brand Identity', 'UI/UX', 'Cinema'].map((tag, idx) => (
                        <span 
                            key={idx}
                            className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-light-text dark:text-dark-text"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Creative Element 2: Quick Stat/Fact Counters */}
                <div className="grid grid-cols-2 gap-6 w-full my-6 py-4 border-y border-gray-200 dark:border-gray-800">
                    <div>
                        <p className="text-xl sm:text-2xl font-black text-light-text dark:text-dark-text">IIT Roorkee</p>
                        <p className="text-xs font-semibold text-light-text-muted dark:text-dark-text-muted uppercase tracking-wider mt-0.5">Architecture & Planning</p>
                    </div>
                    <div>
                        <p className="text-xl sm:text-2xl font-black text-theme-red">Integrative</p>
                        <p className="text-xs font-semibold text-light-text-muted dark:text-dark-text-muted uppercase tracking-wider mt-0.5">Build • Design • Media</p>
                    </div>
                </div>

                {/* Creative Action Button */}
                <Link 
                    to="/about" 
                    className="group relative inline-flex items-center gap-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest px-6 py-3.5 rounded-full text-white bg-black dark:bg-white dark:text-black overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        About ME... 
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                    <div className="absolute inset-0 bg-theme-red translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </Link>
            </div>
        </section>
    );
};

export default About;