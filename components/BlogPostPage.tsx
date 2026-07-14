// src/components/BlogPostPage.tsx

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogArticles } from './data/blogData';

const BlogPostPage: React.FC = () => {
    // 1. Get the ID from the URL
    const { id } = useParams<{ id: string }>();

    // 2. Find the article that matches this ID
    const article = blogArticles.find(a => a.id === id);

    // 3. Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // 4. Handle invalid IDs (User types a wrong URL)
    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
                <h2 className="text-2xl font-bold mb-4">Article not found</h2>
                <Link to="/blogs" className="text-theme-red hover:underline">Back to Blogs</Link>
            </div>
        );
    }

    // 5. Render the Blog
    return (
        <main className="max-w-[1000px] mx-auto w-full px-6 sm:px-8 md:px-12 pb-12 sm:pb-20">
            
            {/* Header */}
            <header className="mb-10 text-center">
                <p className="text-theme-red font-bold uppercase tracking-widest text-sm mb-3">{article.category}</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">{article.title}</h1>
                <p className="text-sm text-gray-500">{article.date}</p>
            </header>

            {/* Hero Image */}
            <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-xl">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>

            {/* Content Body */}
            <article className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-lg sm:text-xl leading-relaxed text-light-text dark:text-dark-text whitespace-pre-line">
                    {article.content}
                </p>
            </article>

            {/* --- BOTTOM NAVIGATION (Moved here) --- */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-10 text-center">
                <Link 
                    to="/blogs" 
                    className="inline-flex items-center text-sm font-semibold text-light-text-muted dark:text-dark-text-muted hover:text-theme-red transition-colors px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    ← Back to All Stories
                </Link>
            </div>
        </main>
    );
};

export default BlogPostPage;