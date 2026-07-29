/// <reference types="vite/client" />
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ResizableButton from './ResizableButton';
import { sanityClient } from './data/sanityClient';
import { PortableText } from '@portabletext/react';

interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  mainImage: string;
  galleryImages?: string[];
  videoUrl?: string;
  externalLink?: string;
  client?: string;
  timeline?: string;
  role?: string;
  techStack?: string[];
  fullCaseStudy?: string;
}

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (!slug) return;

    // GROQ Query to fetch single project by slug from Sanity
    const query = `*[_type == "project" && slug.current == $slug][0] {
      "id": _id,
      title,
      category,
      description,
      "mainImage": mainImage.asset->url,
      "galleryImages": gallery[].asset->url,
      videoUrl,
      externalLink,
      client,
      timeline,
      role,
      techStack,
      fullCaseStudy
    }`;

    sanityClient
      .fetch(query, { slug })
      .then((data: ProjectDetail) => {
        if (data) {
          setProject(data);
          setActiveImage(data.mainImage);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn('Error fetching project details from Sanity:', err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <main className="max-w-[1240px] mx-auto px-6 py-20 text-center font-mono text-sm font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted">
        Loading Case Study...
      </main>
    );
  }

  if (!project) {
    return (
      <main className="max-w-[1240px] mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-black mb-4">Project Not Found</h2>
        <p className="text-light-text-muted dark:text-dark-text-muted mb-8">
          The requested case study could not be loaded or doesn't exist.
        </p>
        <button
          onClick={() => navigate('/projects')}
          className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-extrabold text-xs uppercase tracking-wider rounded-full"
        >
          ← Back to Projects
        </button>
      </main>
    );
  }

  const allImages = [
    project.mainImage,
    ...(project.galleryImages || []),
  ].filter(Boolean);

  return (
    <main className="max-w-[1240px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-4">
      
      {/* Hero Title Block */}
      <section className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-red/10 border border-theme-red/20 text-theme-red text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <span>{project.category}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black -tracking-wide leading-[1.12] text-light-text dark:text-dark-text mb-6">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-light-text-muted dark:text-dark-text-muted leading-relaxed max-w-3xl">
          {project.description}
        </p>
      </section>

      {/* Meta Specs Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-[2rem] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-10">
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted mb-1">
            Role
          </p>
          <p className="text-sm font-extrabold text-light-text dark:text-dark-text">
            {project.role || 'Design & Dev'}
          </p>
        </div>

        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted mb-1">
            Timeline / Date
          </p>
          <p className="text-sm font-extrabold text-light-text dark:text-dark-text">
            {project.timeline || '2026'}
          </p>
        </div>

        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted mb-1">
            Client / Context
          </p>
          <p className="text-sm font-extrabold text-light-text dark:text-dark-text">
            {project.client || 'IIT Roorkee'}
          </p>
        </div>

        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted mb-1">
            Live Link
          </p>
          {project.externalLink ? (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-extrabold text-theme-red hover:underline"
            >
              Visit Project ↗
            </a>
          ) : (
            <p className="text-sm font-extrabold text-light-text dark:text-dark-text">
              Internal Study
            </p>
          )}
        </div>
      </section>

      {/* Main Feature Media Showcase */}
      <section className="mb-12">
        <div className="w-full h-[360px] sm:h-[500px] md:h-[620px] rounded-[2.5rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl mb-4 bg-gray-100 dark:bg-gray-900">
          <img
            src={activeImage || project.mainImage}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        {/* Thumbnail Selector */}
        {allImages.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-2 custom-scrollbar">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`w-20 sm:w-24 h-16 rounded-2xl overflow-hidden border-2 shrink-0 transition-all ${
                  activeImage === img
                    ? 'border-theme-red scale-105 shadow-md'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Shot ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Tech Stack Pills */}
      {project.techStack && project.techStack.length > 0 && (
        <section className="mb-10">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted mb-3">
            Tools & Stacks Utilized
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-mono font-bold text-light-text dark:text-dark-text"
              >
                ⚡ {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Full Case Study Breakdown */}
        {project.fullCaseStudy && (
            <section className="p-8 sm:p-12 rounded-[2.5rem] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-12 shadow-lg">
                <span className="text-[12px] font-mono font-bold uppercase tracking-[1.5px] text-theme-red block mb-6">
                CASE STUDY DETAILS
                </span>
                <div className="prose dark:prose-invert max-w-none text-light-text dark:text-dark-text leading-relaxed space-y-4">
                {typeof project.fullCaseStudy === 'string' ? (
                    <p className="whitespace-pre-line text-sm sm:text-base">{project.fullCaseStudy}</p>
                ) : (
                    <PortableText value={project.fullCaseStudy} />
                )}
                </div>
            </section>
        )}

      {/* Embedded Video Showcase (if present) */}
      {project.videoUrl && (
        <section className="mb-12">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-theme-red mb-3">
            Video Demonstration
          </p>
          <div className="w-full aspect-video rounded-[2.5rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-xl bg-black">
            <iframe
              src={project.videoUrl.replace('watch?v=', 'embed/')}
              title={`${project.title} Video`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* Footer Navigation CTA */}
      <section className="py-12 text-center border-t border-gray-200 dark:border-gray-800 mt-12">
        <h3 className="text-2xl font-black mb-6 text-light-text dark:text-dark-text">
          Want to discuss a project?
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
            to="/projects"
            className="px-6 py-3.5 border border-black/20 dark:border-white/20 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-full text-light-text dark:text-dark-text hover:bg-black/5 dark:hover:bg-white/5 transition-all"
          >
            ← All Works
          </Link>

          <Link to="/contact">
            <ResizableButton
              size={14}
              className="text-black dark:text-white hover:bg-theme-red dark:hover:bg-theme-red hover:text-white dark:hover:text-white font-extrabold uppercase tracking-wider rounded-full px-5 py-3.5 text-xs sm:text-sm transition-all duration-300 shadow-md"
            >
              START A CONVERSATION →
            </ResizableButton>
          </Link>
          
        </div>
      </section>

    </main>
  );
};

export default ProjectDetailPage;