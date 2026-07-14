import React from 'react';
import { Link } from 'react-router-dom';
// Make sure this path points to your actual data file location
// If BlogsPage is in src/components/ and blogData is in src/data/, use '../data/blogData'
import { blogArticles } from './data/blogData';

const BlogsPage: React.FC = () => {
    return (
        <main className="max-w-[1440px] mx-auto w-full bg-white dark:bg-dark-bg min-h-screen flex flex-col">
            <section
                id="blogs"
                className="flex-grow pb-12 sm:pb-16 md:pb-24 px-7 sm:px-8 md:px-12 lg:px-16 xl:px-20"
            >

                {/* Header Section */}
                <div className="flex flex-row justify-between items-end mb-12 sm:mb-16 gap-4 border-b border-gray-200 dark:border-gray-800 pb-8">
                    <div>
                        <p className="text-xs sm:text-base font-medium uppercase tracking-[3px] text-theme-red mb-2">
                            The Journal
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold -tracking-wide leading-tight">
                            Thoughts & Stories
                        </h2>
                    </div>
                </div>

                {/* Creative Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {blogArticles.map((article) => (
                        <div
                            key={article.id}
                            className="group flex flex-col h-full"
                        >
                            {/* Image Container with Link */}
                            <Link to={`/blogs/${article.id}`} className="block relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] w-full">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                {/* Overlay Date Badge */}
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm text-black dark:text-white">
                                    {article.date}
                                </div>
                            </Link>

                            {/* Content - Aligned and Clean */}
                            <div className="flex flex-col flex-grow">
                                <p className="text-xs font-semibold text-theme-red uppercase tracking-wider mb-2">
                                    {article.category}
                                </p>

                                <Link to={`/blogs/${article.id}`} className="group-hover:text-theme-red transition-colors">
                                    <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-3 cursor-pointer">
                                        {article.title}
                                    </h3>
                                </Link>

                                <p className="text-light-text-muted dark:text-dark-text-muted text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                                    {article.description}
                                </p>

                                {/* "Read More" Link */}
                                <div className="mt-auto pt-4">
                                    <Link
                                        to={`/blogs/${article.id}`}
                                        className="inline-flex items-center text-sm font-semibold border-b-2 border-transparent hover:border-theme-red transition-colors pb-0.5 text-black dark:text-white"
                                    >
                                        Read Story
                                        <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Minimal Footer Link */}
            <div className="text-center py-12 border-t border-gray-100 dark:border-gray-800">
                <Link to="/" className="text-sm font-semibold text-light-text-muted dark:text-dark-text-muted hover:text-black dark:hover:text-white transition-colors">
                    ← Back to Home
                </Link>
            </div>
        </main>
    );
};

export default BlogsPage;