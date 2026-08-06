import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { sanityClient } from './data/sanityClient';
import { blogArticles as staticBlogArticles } from './data/blogData';

interface BlogArticle {
    id: string;
    title: string;
    date: string;
    category: string;
    description: string;
    image: string;
    youtubeUrl?: string;
}

const BlogsPage: React.FC = () => {
    const [articles, setArticles] = useState<BlogArticle[]>([]);
    const [loading, setLoading] = useState(true);

    // Helper function to sort articles by date (newest first)
    const sortArticlesByNewest = (items: BlogArticle[]): BlogArticle[] => {
        return [...items].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            // If date string parsing fails, fallback to standard string comparison
            if (isNaN(dateA) || isNaN(dateB)) {
                return b.date.localeCompare(a.date);
            }
            return dateB - dateA;
        });
    };

    useEffect(() => {
        // GROQ Query to fetch all Blog Posts from Sanity sorted by published date (descending)
        const query = `*[_type == "post"] | order(date desc) {
            "id": coalesce(slug.current, _id),
            title,
            date,
            category,
            description,
            "image": mainImage.asset->url,
            youtubeUrl
        }`;

        sanityClient
            .fetch(query)
            .then((data: BlogArticle[]) => {
                if (data && data.length > 0) {
                    setArticles(sortArticlesByNewest(data));
                } else {
                    setArticles(sortArticlesByNewest(staticBlogArticles));
                }
                setLoading(false);
            })
            .catch((error) => {
                console.warn("Sanity fetch error (falling back to static blog data):", error);
                setArticles(sortArticlesByNewest(staticBlogArticles));
                setLoading(false);
            });
    }, []);

    // Helper function to extract YouTube Embed URLs if present
    const getYouTubeEmbedUrl = (url?: string) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
    };

    return (
        <main className="max-w-[1440px] mx-auto w-full bg-white dark:bg-dark-bg min-h-screen flex flex-col">
            <section
                id="blogs"
                className="flex-grow pb-12 sm:pb-16 md:pb-24 px-7 sm:px-8 md:px-12 lg:px-16 xl:px-20"
            >
                {/* Header Section */}
                <div className="flex flex-row justify-between items-end mb-12 sm:mb-16 gap-4 border-b border-gray-200 dark:border-gray-800 pb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-red/10 border border-theme-red/20 text-theme-red text-xs font-mono font-bold tracking-widest uppercase mb-4">
                        <span className="w-2 h-2 rounded-full bg-theme-red animate-pulse" />
                        <span>MY JOURNAL</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold -tracking-wide leading-tight text-black dark:text-white">
                            Thoughts & <span className="text-theme-red">Stories.</span>
                        </h2>
                    </div>
                </div>

                {/* Creative Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {articles.map((article) => {
                        const embedUrl = getYouTubeEmbedUrl(article.youtubeUrl);

                        return (
                            <div
                                key={article.id}
                                className="group flex flex-col h-full"
                            >
                                {/* Media Container */}
                                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] w-full bg-black/5 dark:bg-white/5">
                                    {embedUrl ? (
                                        <iframe
                                            src={embedUrl}
                                            title={article.title}
                                            className="w-full h-full border-0 rounded-2xl"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <Link to={`/blogs/${article.id}`} className="block w-full h-full">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                        </Link>
                                    )}

                                    {/* Overlay Date Badge */}
                                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm text-black dark:text-white pointer-events-none">
                                        {article.date}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow">
                                    <p className="text-xs font-semibold text-theme-red uppercase tracking-wider mb-2">
                                        {article.category}
                                    </p>

                                    <Link to={`/blogs/${article.id}`} className="group-hover:text-theme-red transition-colors">
                                        <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-3 cursor-pointer text-black dark:text-white hover:text-theme-red dark:hover:text-theme-red">
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
                        );
                    })}
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