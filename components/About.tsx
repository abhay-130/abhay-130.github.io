
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <section id="about" className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 lg:gap-12 w-full">
            <div className="flex-1 w-full">
                <img src="/landing-page-images/abhay-profile.JPG" alt="Abhay Kishor" className="rounded-3xl object-cover w-full h-auto" />
            </div>
            <div className="flex-1 flex flex-col items-start px-4 sm:px-0">
                <p className="font-semibold text-sm sm:text-base md:text-[18px] mt-[0px] tracking-wide">ABHAY KISHOR</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] mt-[3px] font-semibold leading-tight">A Designer Who Loves to Build, Tell Stories and... watching cinema.</h2>
                <p className="text-sm sm:text-base md:text-[13px] mt-6 sm:mt-8 md:mt-[30px] text-light-text-muted dark:text-dark-text-muted leading-loose">
                    I'm an architecture student at the Department of Architecture & Planning, IIT Roorkee. My practice moves between architecture, graphics, and visual media, inspired by materials, music, and everyday interactions.
                </p>
                <Link to="/about" className="text-xs sm:text-sm md:text-[13px] mt-4 sm:mt-6 md:mt-[20px] px-3 sm:px-4 py-2 rounded-full font-semibold text-black dark:text-light-text transition-colors hover:bg-black hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg">
                    About ME...
                </Link>
            </div>
        </section>
    );
};

export default About;
