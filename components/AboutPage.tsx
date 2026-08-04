/// <reference types="vite/client" />
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ResizableButton from './ResizableButton';

const AboutPage: React.FC = () => {
    // Active tab state for the story switcher
    const [activeTab, setActiveTab] = useState<'arch' | 'dev' | 'cinema'>('arch');

    // Creative skill taxonomy with proficiency indicators
    const expertise = [
        {
            title: "Architecture & Spatial",
            description: "Translating site contexts into climate-responsive physical structures.",
            skills: ["ArchiCAD", "AutoCAD", "BIM", "Vernacular Typologies", "Urban Planning"],
            accent: "from-amber-500/10 to-orange-500/5",
            border: "hover:border-amber-500/50"
        },
        {
            title: "Frontend & Code",
            description: "Crafting scalable web apps & interactive design systems.",
            skills: ["React", "Tailwind CSS", "Vite", "Jetpack Compose", "TypeScript", "Firebase"],
            accent: "from-blue-500/10 to-indigo-500/5",
            border: "hover:border-blue-500/50"
        },
        {
            title: "Brand & Visual Media",
            description: "Blending identity systems, UI layouts, and storytelling.",
            skills: ["Figma", "UI/UX", "Brand Systems", "Signage Layouts", "Editorial Design"],
            accent: "from-theme-red/10 to-rose-500/5",
            border: "hover:border-theme-red/50"
        }
    ];

    return (
        <main className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative overflow-hidden">
            
            {/* --- HERO SECTION --- */}
            <section id="about" className="pt-6 sm:pt-10 pb-16 md:pb-24 flex flex-col md:flex-row items-center gap-10 sm:gap-14 lg:gap-20 relative">
                
                {/* Left Column: Portrait with Architectural Blueprint Grid Details */}
                <div className="flex-1 w-full relative group">
                    {/* Background Subtle Red Blur */}
                    <div className="absolute -inset-2 bg-gradient-to-tr from-theme-red/20 via-transparent to-transparent rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

                    {/* Image Container */}
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-100 dark:bg-white/5 border border-black/10 dark:border-white/10 shadow-2xl">
                        <img 
                            src="/landing-page-images/abhay-profile.JPG" 
                            alt="Abhay Kishor" 
                            className="rounded-[2.5rem] object-cover w-full h-[420px] sm:h-[500px] md:h-[580px] transition-transform duration-700 ease-out group-hover:scale-105" 
                        />

                        {/* Architectural Blueprint Grid Lines Overlay (Interactive) */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                        {/* Top Floating Badge */}
                        <div className="absolute top-6 right-6 backdrop-blur-md bg-black/60 text-white text-xs font-mono px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>STATUS: DESIGNING & BUILDING</span>
                        </div>

                        {/* Bottom Hero Card */}
                        <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/80 dark:bg-black/70 p-5 sm:p-6 rounded-3xl border border-white/30 dark:border-white/10 shadow-xl flex items-center justify-between">
                            <div>
                                <p className="text-xl sm:text-2xl font-black tracking-tight text-light-text dark:text-dark-text">@IIT_ROORKEE</p>
                                <p className="text-xs sm:text-sm font-semibold text-theme-red uppercase tracking-wider">Dept. of Architecture & Planning</p>
                            </div>
                            <div className="hidden sm:block text-right">
                                <span className="text-[10px] font-mono uppercase text-light-text-muted dark:text-dark-text-muted block">Focus</span>
                                <span className="text-xs font-extrabold text-light-text dark:text-dark-text">Physical × Digital</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Narrative Header */}
                <div className="flex-1 flex flex-col items-start px-2 sm:px-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-theme-red/10 border border-theme-red/20 mb-4">
                        <span className="w-2 h-2 rounded-full bg-theme-red" />
                        <p className="font-bold text-xs sm:text-sm text-theme-red tracking-[3px] uppercase">ABHAY KISHOR</p>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-[1.15] tracking-tight text-light-text dark:text-dark-text">
                        Building spaces, coding dreams, and... <span className="text-theme-red italic font-serif">watching cinema.</span>
                    </h1>
                    
                    <div className="space-y-4 mt-6">
                        <p className="text-base sm:text-lg text-light-text-muted dark:text-dark-text-muted leading-relaxed">
                            I'm an architecture student at <strong className="text-light-text dark:text-dark-text">IIT Roorkee</strong> with a passion for balancing the physical world with the digital one. My work moves seamlessly between the structural precision of BIM and the fluid interactivity of React.
                        </p>
                        <p className="text-base sm:text-lg text-light-text-muted dark:text-dark-text-muted leading-relaxed">
                            Whether documenting vernacular mud house typologies in Chhattisgarh or steering high-scale cultural events like <strong className="text-light-text dark:text-dark-text">Virasat’26</strong>, I value tangible execution over theoretical rhetoric.
                        </p>
                    </div>

                    {/* Interactive Stat Highlight Cards */}
                    <div className="grid grid-cols-2 gap-4 w-full mt-8">
                        <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10">
                            <p className="text-2xl sm:text-3xl font-black text-light-text dark:text-dark-text">IIT Roorkee</p>
                            <p className="text-xs font-semibold text-light-text-muted dark:text-dark-text-muted uppercase tracking-wider mt-1">Arch & Planning</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10">
                            <p className="text-2xl sm:text-3xl font-black text-theme-red">Hybrid</p>
                            <p className="text-xs font-semibold text-light-text-muted dark:text-dark-text-muted uppercase tracking-wider mt-1">Spatial + Full-Stack</p>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <ResizableButton 
                            onClick={() => window.open('/Resume/AbhaYKishor_Resume.pdf')} 
                            size={14} 
                            className="text-black dark:text-white px-7 py-3.5 rounded-full font-extrabold uppercase tracking-wider text-xs shadow-lg hover:bg-theme-red dark:hover:bg-theme-red hover:text-white dark:hover:text-white transition-all"
                        >
                            Download CV ↓
                        </ResizableButton>
                        <Link to="/contact">
                            <ResizableButton 
                                size={14} 
                                className="border-2 border-black/20 dark:border-white/20 px-7 py-3.5 rounded-full font-extrabold uppercase tracking-wider text-xs hover:border-theme-red hover:bg-theme-red hover:text-white transition-all"
                            >
                                Let's Talk →
                            </ResizableButton>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- EXPERTISE SECTION: The Toolkit --- */}
            <section className="py-16 sm:py-24 border-t border-gray-200 dark:border-gray-800">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="font-bold text-xs sm:text-sm text-theme-red tracking-[4px] uppercase mb-2">Capabilities</p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-light-text dark:text-dark-text tracking-tight">
                        My Creative Toolkit
                    </h2>
                    <p className="text-sm sm:text-base text-light-text-muted dark:text-dark-text-muted mt-3">
                        A multidisciplinary toolkit constructed across architectural studios, digital product labs, and visual design systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expertise.map((item, i) => (
                        <div 
                            key={i} 
                            className={`p-8 rounded-[2.5rem] bg-gradient-to-b ${item.accent} bg-gray-50 dark:bg-white/[0.02] border border-black/5 dark:border-white/10 ${item.border} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group flex flex-col justify-between`}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-mono font-bold text-theme-red uppercase tracking-widest">0{i + 1} // DOMAIN</span>
                                    <div className="w-2 h-2 rounded-full bg-theme-red/40 group-hover:bg-theme-red transition-colors" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-extrabold mb-3 text-light-text dark:text-dark-text">{item.title}</h3>
                                <p className="text-xs sm:text-sm text-light-text-muted dark:text-dark-text-muted mb-6 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5 dark:border-white/5">
                                {item.skills.map(skill => (
                                    <span 
                                        key={skill} 
                                        className="px-3.5 py-1.5 bg-white dark:bg-white/10 rounded-full text-xs font-bold text-light-text dark:text-dark-text border border-black/5 dark:border-white/10 shadow-sm transition-transform duration-200 hover:scale-105"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- INTERACTIVE STORY SWITCHER SECTION --- */}
            <section className="py-16 sm:py-24 border-t border-gray-200 dark:border-gray-800">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    
                    {/* Left Column: Interactive Narrative Tab Control */}
                    <div className="flex-1 w-full">
                        <p className="font-bold text-xs sm:text-sm text-theme-red tracking-[4px] uppercase mb-2">Philosophy</p>
                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-light-text dark:text-dark-text tracking-tight">
                            Beyond the Blueprints
                        </h2>
                        
                        <p className="text-base text-light-text-muted dark:text-dark-text-muted mb-8 leading-relaxed">
                            Click through the perspectives below to explore how spatial design, frontend development, and cinematic visual language intersect in my practice.
                        </p>

                        {/* Interactive Tab Pills */}
                        <div className="flex flex-col gap-3">
                            {[
                                { id: 'arch', label: '01. Vernacular & Spatial Research', emoji: '🏛️' },
                                { id: 'dev', label: '02. Digital Products & Web Tools', emoji: '💻' },
                                { id: 'cinema', label: '03. Cinema & Visual Storytelling', emoji: '🎬' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`w-full text-left p-4 sm:p-5 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-between ${
                                        activeTab === tab.id 
                                            ? 'bg-black text-white dark:bg-white dark:text-black shadow-xl translate-x-2' 
                                            : 'bg-gray-100 dark:bg-white/5 text-light-text-muted dark:text-dark-text-muted hover:bg-gray-200 dark:hover:bg-white/10'
                                    }`}
                                >
                                    <span className="flex items-center gap-3">
                                        <span>{tab.emoji}</span>
                                        <span>{tab.label}</span>
                                    </span>
                                    <span className="text-xs font-mono">{activeTab === tab.id ? '● ACTIVE' : '→'}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Dynamic Content Card */}
                    <div className="flex-1 w-full min-h-[380px] p-8 sm:p-10 rounded-[2.5rem] bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 flex flex-col justify-between shadow-xl relative overflow-hidden">
                        
                        {/* Decorative Accent Ring */}
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-theme-red/10 rounded-full blur-3xl pointer-events-none" />

                        {activeTab === 'arch' && (
                            <div className="space-y-4 animate-fadeIn">
                                <span className="text-xs font-mono text-theme-red uppercase font-bold tracking-widest">FIELDWORK & CONTEXT</span>
                                <h3 className="text-2xl font-black text-light-text dark:text-dark-text">Documenting Vernacular Systems</h3>
                                <p className="text-light-text-muted dark:text-dark-text-muted leading-relaxed text-sm sm:text-base">
                                    During fieldwork in Chhattisgarh, I documented traditional mud house typologies, local bamboo construction, and climate-responsive site strategies. I believe ancient settlement principles hold the answers to modern sustainable architecture.
                                </p>
                                <div className="pt-4 flex items-center gap-4 text-xs font-bold text-theme-red">
                                    <span>• Climate Passive Design</span>
                                    <span>• Material Authenticity</span>
                                </div>
                            </div>
                        )}

                        {activeTab === 'dev' && (
                            <div className="space-y-4 animate-fadeIn">
                                <span className="text-xs font-mono text-theme-red uppercase font-bold tracking-widest">SOFTWARE & UI/UX</span>
                                <h3 className="text-2xl font-black text-light-text dark:text-dark-text">Crafting Fluid User Interfaces</h3>
                                <p className="text-light-text-muted dark:text-dark-text-muted leading-relaxed text-sm sm:text-base">
                                    From designing Android applications with Jetpack Compose (like Flavyo) to deploying custom React portfolio architectures with Tailwind CSS and Vite, I build web experiences that prioritize speed, typography, and scannability.
                                </p>
                                <div className="pt-4 flex items-center gap-4 text-xs font-bold text-theme-red">
                                    <span>• React & Vite</span>
                                    <span>• Tailwind CSS</span>
                                    <span>• Jetpack Compose</span>
                                </div>
                            </div>
                        )}

                        {activeTab === 'cinema' && (
                            <div className="space-y-4 animate-fadeIn">
                                <span className="text-xs font-mono text-theme-red uppercase font-bold tracking-widest">VISUAL MEDIA & FRAMES</span>
                                <h3 className="text-2xl font-black text-light-text dark:text-dark-text">Architectural Frame & Cinema</h3>
                                <p className="text-light-text-muted dark:text-dark-text-muted leading-relaxed text-sm sm:text-base">
                                    Cinema is architecture in motion. Analyzing frame composition, lighting depth, and spatial pacing in world cinema informs every physical model and web layout I design.
                                </p>
                                <div className="pt-4 flex items-center gap-4 text-xs font-bold text-theme-red">
                                    <span>• Spatial Composition</span>
                                    <span>• Visual Storytelling</span>
                                </div>
                            </div>
                        )}

                        <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs font-bold text-light-text-muted dark:text-dark-text-muted">
                            <span>Abhay Kishor // Studio Practice</span>
                            <Link to="/blogs" className="text-theme-red hover:underline flex items-center gap-1">
                                Read My Stories →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- BOTTOM NAVIGATION --- */}
            <div className="text-center py-16">
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-widest px-8 py-4 rounded-full border border-black/10 dark:border-white/10 text-light-text dark:text-dark-text hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:shadow-lg"
                >
                    ← Return to Portfolio Home
                </Link>
            </div>
        </main>
    );
};

export default AboutPage;