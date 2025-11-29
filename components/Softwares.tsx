import React from 'react';

const skillsLogos = [
    '/landing-page-images/autocad-2.svg',
    '/landing-page-images/c.svg',
    '/landing-page-images/canva-wordmark-2.svg',
    '/landing-page-images/figma-icon.svg',
    '/landing-page-images/github-icon.svg',
    '/landing-page-images/logo-blender.svg',
    '/landing-page-images/python-5.svg',
    '/landing-page-images/react.svg',
];

const Softwares: React.FC = () => {
    return (
        <section className="w-full overflow-hidden">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-5 md:mb-6 tracking-widest">SOFTWARE I USE</h2>

            <div
                className="relative w-full bg-gray-100 dark:bg-gray-800 py-3 sm:py-4"
                style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
            >
                <style>{`
                    @keyframes scroll-ltr {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-scroll-ltr {
                        display: flex;
                        width: max-content;
                        animation: scroll-ltr 15s linear infinite;
                    }
                    .animate-scroll-ltr:hover { animation-play-state: paused; }
                `}</style>

                <div className="animate-scroll-ltr">
                    {/* Using mr-12 on ALL items ensures exact spacing calculations for the loop */}
                    {[...skillsLogos, ...skillsLogos].map((logo, i) => (
                        <img
                            key={i} src={logo} alt="Skill"
                            className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain mr-8 sm:mr-10 md:mr-12"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Softwares;