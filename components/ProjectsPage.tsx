/// <reference types="vite/client" />
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ResizableButton from './ResizableButton';
import { sanityClient } from './data/sanityClient';

export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug?: string;
  category: string;
  description: string;
  mainImage: string;
  galleryImages?: string[];
  videoUrl?: string;
  externalLink?: string;
  gridSpan?: string;
  featured?: boolean;
}

const fallbackProjects: ProjectItem[] = [
  {
    id: '1',
    title: 'Flavyo App',
    category: 'Full-Stack Development',
    description: 'Android ice cream application built with Jetpack Compose UI & Supabase backend architecture.',
    mainImage: '/landing-page-images/architecture.jpg',
    externalLink: 'https://github.com/abhaykishor',
  },
  {
    id: '2',
    title: 'City Library Saharanpur',
    category: 'Branding & Identity',
    description: 'Full corporate identity design including custom logos and a large-scale horizontal outdoor banner (10ft x 4ft).',
    mainImage: '/landing-page-images/design.JPG',
    externalLink: 'https://www.behance.net/abhaykishor130',
  },
  {
    id: '3',
    title: 'Ancient Urbanism Research',
    category: 'Architecture Thesis',
    description: 'Researching Chola dynasty urban settlement philosophies and radiocarbon dating applications in historic planning.',
    mainImage: '/landing-page-images/code.JPG',
  },
  {
    id: '4',
    title: 'Chhattisgarh Internship',
    category: 'Vernacular Architecture',
    description: 'Field documentation of traditional mud house construction techniques, spatial integration, and local material usage.',
    mainImage: '/landing-page-images/career.jpeg',
  },
  {
    id: '5',
    title: 'Virasat’26 Heritage Fest',
    category: 'Leadership & Events',
    description: 'Served as Convener for IIT Roorkee’s heritage fest, managing multi-disciplinary teams and coordinating 8+ major workshops.',
    mainImage: '/landing-page-images/social.jpg',
  },
];

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>(fallbackProjects);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [categories, setCategories] = useState<string[]>(['All']);

  useEffect(() => {
    // GROQ Query to fetch Projects from Sanity Studio
    const query = `*[_type == "project"] | order(publishedAt desc) {
      "id": _id,
      title,
      "slug": slug.current,
      category,
      description,
      "mainImage": mainImage.asset->url,
      "galleryImages": gallery[].asset->url,
      videoUrl,
      externalLink,
      gridSpan,
      featured
    }`;

    sanityClient
      .fetch(query)
      .then((data: ProjectItem[]) => {
        if (data && data.length > 0) {
          setProjects(data);
          
          // Extract unique categories dynamically from Sanity
          const uniqueCats = ['All', ...Array.from(new Set(data.map((p) => p.category).filter(Boolean)))];
          setCategories(uniqueCats);
        }
      })
      .catch((err) => {
        console.warn('Sanity projects fetch error (using fallback items):', err);
      });
  }, []);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="max-w-[1240px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-4">
      
      {/* --- HEADER SECTION --- */}
      <section id="projects" className="pb-12 sm:pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-red/10 border border-theme-red/20 text-theme-red text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-theme-red animate-pulse" />
              <span>SELECTED WORKS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black -tracking-wide leading-[1.15] text-light-text dark:text-dark-text mb-4">
              Architecture, Code <br />
              <span className="text-theme-red">& Visual Identity.</span>
            </h1>
            <p className="text-sm sm:text-base text-light-text-muted dark:text-dark-text-muted leading-relaxed">
              A curated portfolio of architectural studies, mobile apps, brand identities, and leadership projects completed at IIT Roorkee and beyond.
            </p>
          </div>

          <a 
            href="https://www.behance.net/abhaykishor130" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-black/20 dark:border-white/20 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-light-text dark:text-dark-text hover:bg-theme-red hover:text-white hover:border-theme-red transition-all duration-300 shadow-sm shrink-0"
          >
            BEHANCE PORTFOLIO ↗
          </a>
        </div>

        {/* --- DYNAMIC CATEGORY FILTER TABS --- */}
        {categories.length > 1 && (
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-800 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-md'
                    : 'bg-gray-100 dark:bg-white/5 text-light-text-muted dark:text-dark-text-muted hover:bg-black/10 dark:hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* --- DYNAMIC PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {filteredProjects.map((item, index) => {
            const isFullWidth = index % 3 === 0;

            return (
              <div 
                key={item.id} 
                className={`group relative overflow-hidden rounded-[2.5rem] bg-gray-50 dark:bg-gray-900/60 border border-black/5 dark:border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                  isFullWidth ? 'md:col-span-2 h-[420px] md:h-[580px]' : 'h-[480px] md:h-[520px]'
                }`}
              >
                {/* Main Media Image */}
                <img 
                  src={item.mainImage} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                
                {/* Gradient Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
                
                {/* Video Play Badge (If video exists in Sanity) */}
                {item.videoUrl && (
                  <div className="absolute top-6 right-6 z-20">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold">
                      <svg className="w-3.5 h-3.5 fill-theme-red" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      VIDEO CASE STUDY
                    </span>
                  </div>
                )}

                {/* Content Overlay Box */}
                <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-10 w-full flex flex-col items-start z-10">
                  <span className="text-theme-red font-mono font-bold text-xs uppercase tracking-widest mb-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {item.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-2xl line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    {item.externalLink ? (
                      <a 
                        href={item.externalLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-white text-black hover:bg-theme-red hover:text-white font-extrabold uppercase tracking-wider text-xs rounded-full transition-all duration-300 shadow-md"
                      >
                        VIEW LIVE PROJECT ↗
                      </a>
                    ) : item.slug ? (
                      <Link to={`/projects/${item.slug}`}>
                        <ResizableButton 
                          size={13} 
                          className="bg-white text-black font-extrabold uppercase tracking-wider text-xs px-6 py-2.5 rounded-full hover:bg-theme-red hover:text-white transition-all duration-300"
                        >
                          CASE STUDY →
                        </ResizableButton>
                      </Link>
                    ) : null}

                    {/* Gallery Count Pill */}
                    {item.galleryImages && item.galleryImages.length > 0 && (
                      <span className="text-[11px] font-mono text-white/70 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
                        📷 {item.galleryImages.length} Shots
                      </span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="text-center py-16 px-6 bg-gray-50 dark:bg-gray-900/60 rounded-[2.5rem] border border-black/5 dark:border-white/10 my-8 shadow-lg">
        <h3 className="text-2xl sm:text-3xl font-black mb-3 text-light-text dark:text-dark-text">
          Have a specific project or blueprint in mind?
        </h3>
        <p className="text-sm sm:text-base text-light-text-muted dark:text-dark-text-muted mb-8 max-w-lg mx-auto">
          Whether it's architectural approvals, elevations, or custom web development—let's build it together.
        </p>

        <Link to="/contact">
          <ResizableButton 
            size={14} 
            className="bg-black dark:bg-white text-white dark:text-black hover:bg-theme-red dark:hover:bg-theme-red dark:hover:text-white font-extrabold uppercase tracking-wider rounded-full px-8 py-3.5 text-xs sm:text-sm transition-all duration-300 shadow-md"
          >
            START A CONVERSATION →
          </ResizableButton>
        </Link>

        <div className="mt-8">
          <Link 
            to="/" 
            className="text-xs font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted hover:text-theme-red transition-colors"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </section>

    </main>
  );
};

export default ProjectsPage;