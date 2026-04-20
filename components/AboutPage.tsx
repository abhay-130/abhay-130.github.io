/// <reference types="vite/client" />
import React from 'react';
import { Link } from 'react-router-dom';
import ResizableButton from './ResizableButton';

const AboutPage: React.FC = () => {
    // Dynamic data for your expertise
    const expertise = [
        { title: "Architecture", skills: ["ArchiCAD", "AutoCAD", "BIM", "Urban Planning"] },
        { title: "Development", skills: ["React", "Tailwind CSS", "Jetpack Compose", "Firebase"] },
        { title: "Design", skills: ["Figma", "Visual Storytelling", "Graphic Design", "UI/UX"] }
    ];

    return (
        /* Updated main container to match Footer margins */
        <main className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            {/* --- HERO SECTION: The Persona --- */}
            <section id="about" className="pt-8 sm:py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
                <div className="flex-1 w-full relative group">
                    <img 
                        src="/landing-page-images/abhay-profile.JPG" 
                        alt="Abhay Kishor" 
                        className="rounded-[2.5rem] object-cover w-full h-[400px] md:h-[550px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]" 
                    />
                    <div className="absolute -bottom-6 -left-6 bg-theme-red text-white p-6 rounded-3xl hidden lg:block shadow-xl">
                        <p className="text-2xl font-bold">4th Year</p>
                        <p className="text-sm opacity-90 text-white">Architecture @ IITR</p>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-start px-2 sm:px-0">
                    <p className="font-bold text-theme-red text-sm sm:text-base tracking-[4px] uppercase mb-4">The Architect & Developer</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold leading-tight -tracking-wide">
                        Building spaces, coding dreams, and... <span className="text-gray-400 dark:text-gray-500 italic">watching cinema.</span>
                    </h2>
                    
                    <div className="space-y-6 mt-8">
                        <p className="text-base sm:text-lg text-light-text-muted dark:text-dark-text-muted leading-relaxed">
                            I'm an architecture student at **IIT Roorkee** with a passion for balancing the physical world with the digital one. My work moves between the precision of BIM and the fluidity of React, all tied together by a love for visual storytelling.
                        </p>
                        <p className="text-base sm:text-lg text-light-text-muted dark:text-dark-text-muted leading-relaxed">
                            Whether I'm documenting **vernacular mud houses in Chhattisgarh** or managing teams for **Virasat’26**, I value execution over theory. I'm building for the local streets of Saharanpur and the global web.
                        </p>
                    </div>

                    <div className="flex gap-4 mt-10">
                        <ResizableButton onClick={() => window.open('/path-to-your-resume.pdf')} size={14} className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-bold">
                            Download CV
                        </ResizableButton>
                        <Link to="/contact">
                            <ResizableButton size={14} className="border-2 border-black dark:border-white px-6 py-3 rounded-full font-bold hover:bg-theme-red hover:border-theme-red hover:text-white transition-all">
                                Let's Talk
                            </ResizableButton>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- EXPERTISE SECTION: The Skills --- */}
            <section className="py-20">
                <h3 className="text-2xl font-bold mb-12 text-center">My Creative Toolkit</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expertise.map((item, i) => (
                        <div key={i} className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-[2rem] border border-transparent hover:border-theme-red transition-colors group">
                            <h4 className="text-xl font-bold mb-4 text-theme-red">{item.title}</h4>
                            <div className="flex flex-wrap gap-2">
                                {item.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-800 rounded-lg text-sm font-medium shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- BEYOND THE DESK: The Stories --- */}
            <section className="py-20 border-t border-gray-100 dark:border-gray-800">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 order-2 md:order-1">
                        <h3 className="text-3xl font-bold mb-6">Beyond the Blueprints</h3>
                        <p className="text-lg text-light-text-muted dark:text-dark-text-muted mb-6">
                            When I'm not designing front elevations or debugging code, you'll find me:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <span className="text-2xl">🎬</span>
                                <span className="text-lg">Analyzing the visual language of World Cinema.</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="text-2xl">⛰️</span>
                                <span className="text-lg">Exploring vernacular architecture in rural India.</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="text-2xl">🤝</span>
                                <span className="text-lg">Mentoring students and coordinating cultural fests.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 order-1 md:order-2 grid grid-cols-2 gap-4">
                        <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse"></div>
                        <div className="h-40 bg-gray-100 dark:bg-gray-900 rounded-2xl animate-pulse"></div>
                        <div className="h-40 bg-gray-100 dark:bg-gray-900 rounded-2xl animate-pulse"></div>
                        <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse"></div>
                    </div>
                </div>
            </section>

            <div className="text-center py-12">
                <Link to="/" className="text-sm font-bold uppercase tracking-widest hover:text-theme-red transition-colors">
                    ← Back to Home
                </Link>
            </div>
        </main>
    );
};

export default AboutPage;