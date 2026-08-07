/// <reference types="vite/client" />
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ResizableButton from './ResizableButton';
import { sanityClient } from './data/sanityClient';

interface Testimonial {
  id?: string;
  name: string;
  role: string;
  text: string;
}

// Refined Professional SVGs
const ArchIcon = () => (
  <div className="w-14 h-14 bg-theme-red/10 dark:bg-theme-red/20 rounded-2xl flex items-center justify-center text-theme-red">
    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
      <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm0 2.84L18.99 11H17v8h-2v-6H9v6H7v-8H5.01L12 4.84z"/>
    </svg>
  </div>
);

const TechIcon = () => (
  <div className="w-14 h-14 bg-theme-red/10 dark:bg-theme-red/20 rounded-2xl flex items-center justify-center text-theme-red">
    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zm-7-2h2v-2h-2v2zm0-4h2V8h-2v4zm-4 4h2v-6H9v6zm-4 0h2v-4H5v4z"/>
    </svg>
  </div>
);

const ConsultIcon = () => (
  <div className="w-14 h-14 bg-theme-red/10 dark:bg-theme-red/20 rounded-2xl flex items-center justify-center text-theme-red">
    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
  </div>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-theme-red shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const services = [
  {
    id: 'architecture',
    icon: <ArchIcon />,
    title: 'Architectural Planning',
    subtitle: 'Physical Spaces',
    description: 'Helping homeowners and local clients in Saharanpur with 3D front elevations, house planning, and basic interior layouts.',
    deliverables: [
      '3D Front Elevations & Renders',
      'Residential Floor Plans & Layouts',
      'Basic Interior Concepts',
      '2D Working Drawings'
    ],
    tags: ['ArchiCAD', 'AutoCAD', '3D Elevations', 'Floor Plans']
  },
  {
    id: 'digital',
    icon: <TechIcon />,
    title: 'Web & Digital Design',
    subtitle: 'Digital Projects',
    description: 'Building clean, functional websites and mobile app layouts for personal projects, portfolios, or small businesses.',
    deliverables: [
      'Responsive Websites & Landing Pages',
      'Simple Web Applications',
      'UI/UX Layouts in Figma',
      'Logos & Banner Graphics'
    ],
    tags: ['React', 'Tailwind CSS', 'Figma', 'Android Basics']
  },
  {
    id: 'consultancy',
    icon: <ConsultIcon />,
    title: 'General Advice',
    subtitle: 'Guidance & Mentorship',
    description: 'Open to sharing my learnings as a student, discussing house layout ideas, or providing career advice to junior students.',
    deliverables: [
      'House Plan & Property Discussions',
      'Portfolio & Design Feedback',
      'Student Mentorship & Guidance',
      'Project Brainstorming'
    ],
    tags: ['Consultation', 'Guidance', 'Portfolio Review']
  },
];

const fallbackTestimonials: Testimonial[] = [
  {
    name: 'City Library Saharanpur',
    role: 'Branding & Signage Client',
    text: 'Abhay designed our main horizontal banner and logo identity. His spatial clarity and attention to layout made the output look very neat and welcoming.',
  },
  {
    name: 'Residential Elevation Client',
    role: 'Saharanpur Project',
    text: 'Working with Abhay on our house elevation gave us clear 3D views before starting actual masonry work. He listened carefully to our family’s needs.',
  },
  {
    name: 'Architecture Junior',
    role: 'Mentorship & Portfolio Guidance',
    text: 'He helped me clean up my portfolio software workflow and offered genuine tips on ArchiCAD grid setups. Very accessible and supportive.',
  }
];

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);

  const handleInquiry = (serviceTitle: string) => {
    navigate('/contact', { state: { subject: `Inquiry regarding ${serviceTitle}` } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fetch dynamic testimonials from Sanity Studio
  useEffect(() => {
    const query = `*[_type == "testimonial"] | order(_createdAt desc) {
      "id": _id,
      name,
      role,
      "text": quote
    }`;

    sanityClient
      .fetch(query)
      .then((data: Testimonial[]) => {
        if (data && data.length > 0) {
          setTestimonials(data);
        }
      })
      .catch((err) => {
        console.warn("Sanity testimonials fetch error:", err);
      });
  }, []);

  // Duplicate testimonial list to ensure seamless infinite looping animation
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <main className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <section id="services" className="pb-12 sm:pb-16 md:pb-24">
        
        {/* --- HERO HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8 border-b border-gray-200 dark:border-gray-800 pb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-red/10 border border-theme-red/20 text-theme-red text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-theme-red animate-pulse" />
              <span>MY EXPERTISE</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold -tracking-wide leading-tight text-black dark:text-white">
              Architecture. Coding. <span className="text-theme-red">Creative Design.</span>
            </h2>
          </div>

          <div className="max-w-md flex flex-col items-start lg:items-end">
            <p className="text-sm sm:text-base text-light-text-muted dark:text-dark-text-muted leading-relaxed max-w-xl space-y-4 mb-12">
              I am an architecture undergraduate at IIT Roorkee who also works on web development and graphic design. Here is how I can help on your next project.
            </p>

            <a href="mailto:abhaykishor130@gmail.com" className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-theme-red hover:underline">
              <span>✉️ Email: abhaykishor130@gmail.com</span>
            </a>
          </div>
        </div>

        {/* --- SIMPLE INFO STRIP --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-[2rem] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-16">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black text-theme-red">IIT Roorkee</span>
            <span className="text-xs font-mono uppercase tracking-wider text-light-text-muted dark:text-dark-text-muted">4th Year Architecture</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black text-light-text dark:text-dark-text">Hands-On</span>
            <span className="text-xs font-mono uppercase tracking-wider text-light-text-muted dark:text-dark-text-muted">Dedicated Work</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black text-light-text dark:text-dark-text">Dual Focus</span>
            <span className="text-xs font-mono uppercase tracking-wider text-light-text-muted dark:text-dark-text-muted">Design & Frontend</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black text-theme-red">Direct</span>
            <span className="text-xs font-mono uppercase tracking-wider text-light-text-muted dark:text-dark-text-muted">Personal Communication</span>
          </div>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group flex flex-col justify-between p-8 sm:p-10 rounded-[2.5rem] bg-gray-50 dark:bg-[#1a1a1a] border border-black/5 dark:border-white/10 hover:border-theme-red/40 transition-all duration-500 hover:shadow-2xl hover:shadow-theme-red/10 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="transform transition-transform group-hover:scale-110 group-hover:rotate-3 origin-left duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-light-text-muted dark:text-dark-text-muted">
                    {service.subtitle}
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-black mb-4 text-light-text dark:text-white group-hover:text-theme-red transition-colors">
                  {service.title}
                </h2>
                
                <p className="text-light-text-muted dark:text-dark-text-muted text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* DELIVERABLES CHECKLIST */}
                <div className="mb-8 pt-4 border-t border-gray-200/60 dark:border-gray-800">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-theme-red block mb-3">
                    What I can assist with:
                  </span>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-light-text dark:text-gray-300">
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* TAGS */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {service.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 bg-white dark:bg-black/50 rounded-lg text-[11px] font-mono font-semibold border border-gray-200 dark:border-gray-800 text-light-text-muted dark:text-dark-text-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* CARD CTA BUTTON */}
                <button
                  onClick={() => handleInquiry(service.title)}
                  className="w-full py-3.5 px-6 rounded-full bg-black/5 dark:bg-white/10 hover:bg-theme-red dark:hover:bg-theme-red text-light-text dark:text-white hover:text-white dark:hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Ask About {service.subtitle}</span>
                  <span className="transform transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* --- SIMPLE APPROACH SECTION --- */}
        <div className="mt-20 p-8 sm:p-12 rounded-[2.5rem] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-[3px] text-theme-red block mb-2">
              MY APPROACH
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-light-text dark:text-white">
              Why work with me on your project?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800">
              <span className="text-theme-red font-mono font-bold text-lg block mb-2">01.</span>
              <h3 className="font-extrabold text-base mb-2 text-light-text dark:text-white">Design Discipline</h3>
              <p className="text-xs sm:text-sm text-light-text-muted dark:text-dark-text-muted leading-relaxed">
                My architectural background gives me a habit of keeping things organized, detailed, and structured.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800">
              <span className="text-theme-red font-mono font-bold text-lg block mb-2">02.</span>
              <h3 className="font-extrabold text-base mb-2 text-light-text dark:text-white">Combined Skills</h3>
              <p className="text-xs sm:text-sm text-light-text-muted dark:text-dark-text-muted leading-relaxed">
                Able to handle both physical drafting/elevation ideas and digital web layouts comfortably.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800">
              <span className="text-theme-red font-mono font-bold text-lg block mb-2">03.</span>
              <h3 className="font-extrabold text-base mb-2 text-light-text dark:text-white">Direct Communication</h3>
              <p className="text-xs sm:text-sm text-light-text-muted dark:text-dark-text-muted leading-relaxed">
                You will talk and work directly with me throughout the entire process.
              </p>
            </div>
          </div>
        </div>

        {/* --- DYNAMIC SANITY USER EXPERIENCES MARQUEE (RIGHT TO LEFT) --- */}
        <div className="mt-20 overflow-hidden relative w-full">
          <div className="mb-10 text-center max-w-2xl mx-auto px-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[3px] text-theme-red block mb-2">
              CLIENT & PEER FEEDBACK
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-light-text dark:text-white">
              Real Experiences & Words
            </h2>
          </div>

          {/* INFINITE MARQUEE CAROUSEL CONTAINER */}
          <div className="relative w-full overflow-hidden group">
            
            {/* Left/Right Edge Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white dark:from-dark-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white dark:from-dark-bg to-transparent z-10 pointer-events-none" />

            {/* MARQUEE TRACK (PAUSES ON HOVER) */}
            <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused] py-2">
              {marqueeItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="w-[300px] sm:w-[380px] shrink-0 flex flex-col justify-between p-7 rounded-[2rem] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm hover:border-theme-red/30 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-light-text dark:text-gray-300 italic leading-relaxed mb-6 font-serif">
                      "{item.text}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200/60 dark:border-gray-800">
                    <h3 className="font-bold text-sm text-light-text dark:text-white">
                      {item.name}
                    </h3>
                    <span className="text-[11px] font-mono text-light-text-muted dark:text-dark-text-muted uppercase tracking-wider block mt-0.5">
                      {item.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* --- CALL TO ACTION SECTION (REVERSED CONTAINER) --- */}
        <div className="mt-20 p-8 sm:p-16 rounded-[3rem] bg-gray-100 dark:bg-[#121212] border border-black/10 dark:border-white/15 text-light-text dark:text-white flex flex-col items-center text-center relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-red/10 border border-theme-red/20 text-theme-red text-xs font-mono font-bold tracking-widest uppercase mb-6">
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 max-w-3xl leading-tight text-light-text dark:text-white">
            Need help with a plan, elevation, or website?
          </h2>

          <p className="text-light-text-muted dark:text-dark-text-muted text-base sm:text-xl mb-10 max-w-2xl leading-relaxed">
            Feel free to send a message or give a quick call to discuss what you need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link to="/contact" className="w-auto">
              <ResizableButton 
                size={15} 
                className="bg-theme-red text-white hover:bg-theme-red/90 px-8 py-4 rounded-full font-black uppercase tracking-wider text-xs sm:text-sm shadow-xl inline-flex items-center justify-center whitespace-nowrap"
              >
                Send Message →
              </ResizableButton>
            </Link>

            <a href="tel:+918273746070" className="w-auto">
              <ResizableButton 
                size={15} 
                className="border-2 border-black/20 dark:border-white/20 text-light-text dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-8 py-4 rounded-full font-black uppercase tracking-wider text-xs sm:text-sm transition-all inline-flex items-center justify-center whitespace-nowrap"
              >
                📞 +91 82737 46070
              </ResizableButton>
            </a>
          </div>
        </div>

      </section>

      {/* CSS KEYFRAMES FOR RIGHT-TO-LEFT MARQUEE */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </main>
  );
};

export default ServicesPage;