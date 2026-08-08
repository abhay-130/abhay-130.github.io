import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { sanityClient } from './data/sanityClient';
import { blogArticles as staticBlogArticles } from './data/blogData';

interface BlogArticle {
    id: string;
    title: string;
    date: string;
    category?: string;
    description?: string;
    image: string;
    youtubeUrl?: string;
}

const Blog: React.FC = () => {
    const [articles, setArticles] = useState<BlogArticle[]>([]);

    // Format date string to "13-May-2026"
    const formatDate = (dateStr: string): string => {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return dateStr;

        const day = String(d.getDate()).padStart(2, '0');
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = monthNames[d.getMonth()];
        const year = d.getFullYear();

        return `${day}-${month}-${year}`;
    };

    // Helper function to sort articles by date (newest first)
    const sortArticlesByNewest = (items: BlogArticle[]): BlogArticle[] => {
        return [...items].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            if (isNaN(dateA) || isNaN(dateB)) {
                return b.date.localeCompare(a.date);
            }
            return dateB - dateA;
        });
    };

    useEffect(() => {
        // Fetch latest 3 blog posts from Sanity sorted by date descending
        const query = `*[_type == "post"] | order(date desc)[0...3] {
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
            })
            .catch((error) => {
                console.warn("Sanity fetch error (falling back to static blog data):", error);
                setArticles(sortArticlesByNewest(staticBlogArticles));
            });
    }, []);

    // Main featured post is the newest one (index 0)
    const mainArticle = articles.length > 0 ? articles[0] : null;
    // Side posts are the next 2 recent posts
    const sideArticles = articles.slice(1, 3);

    return (
        <section id="blogs" className="w-full">
            {/* Header Section */}
            <div className="flex flex-row justify-between items-end mb-8 sm:mb-10 md:mb-12 gap-2 sm:gap-4">
                {/* Left Side: Title */}
                <div>
                    <div className="inline-flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-theme-red animate-pulse" />
                        <p className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[2px] sm:tracking-[3px] text-theme-red">
                            Our Corner
                        </p>
                    </div>
                    <h2 className="text-xl min-[400px]:text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-black -tracking-wide leading-tight text-light-text dark:text-dark-text">
                        Latest Blog/Articles
                    </h2>
                </div>

                {/* Right Side: Button */}
                <Link 
                    to="/blogs" 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="whitespace-nowrap px-7 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm rounded-full border-2 border-theme-red font-bold uppercase tracking-wider text-light-text dark:text-dark-text hover:bg-theme-red hover:text-white dark:hover:text-white transition-colors duration-300 shadow-sm"
                >
                    EXPLORE MORE →
                </Link>
            </div>

            {/* Articles Grid Layout */}
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-stretch">
                {/* Featured Main Article */}
                {mainArticle && (
                    <div className="lg:w-2/3 group flex flex-col">
                        <Link 
                            to={`/blogs/${mainArticle.id}`}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="block overflow-hidden rounded-[2rem] mb-5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 relative shadow-lg group-hover:shadow-2xl group-hover:shadow-theme-red/10 transition-all duration-500"
                        >
                            <div className="relative w-full aspect-[16/9] overflow-hidden">
                                {/* Category Badge */}
                                {mainArticle.category && (
                                    <span className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md text-white text-xs font-mono font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                                        {mainArticle.category}
                                    </span>
                                )}
                                <img 
                                    src={mainArticle.image} 
                                    alt={mainArticle.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </Link>

                        {/* Date */}
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-theme-red" />
                            <p className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-light-text-muted dark:text-dark-text-muted">
                                {formatDate(mainArticle.date)}
                            </p>
                        </div>

                        {/* Title */}
                        <Link 
                            to={`/blogs/${mainArticle.id}`}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-snug text-light-text dark:text-white group-hover:text-theme-red transition-colors cursor-pointer mb-3">
                                {mainArticle.title}
                            </h3>
                        </Link>

                        {/* Description */}
                        {mainArticle.description && (
                            <p className="text-sm sm:text-base text-light-text-muted dark:text-dark-text-muted leading-relaxed line-clamp-3 mb-4">
                                {mainArticle.description}
                            </p>
                        )}

                        <Link 
                            to={`/blogs/${mainArticle.id}`}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-theme-red hover:underline mt-auto"
                        >
                            <span>Read Full Article</span>
                            <span>→</span>
                        </Link>
                    </div>
                )}

                {/* Side Articles */}
                <div className="lg:w-1/3 flex flex-col justify-between gap-6 sm:gap-8">
                    {sideArticles.map((article) => (
                        <div key={article.id} className="group flex flex-col p-4 rounded-2xl bg-gray-50/50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 hover:border-theme-red/30 transition-all duration-300">
                            <Link 
                                to={`/blogs/${article.id}`}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="block overflow-hidden rounded-xl mb-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 relative"
                            >
                                <div className="relative w-full aspect-[16/10] overflow-hidden">
                                    {/* Category Badge */}
                                    {article.category && (
                                        <span className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                                            {article.category}
                                        </span>
                                    )}
                                    <img 
                                        src={article.image} 
                                        alt={article.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                                    />
                                </div>
                            </Link>

                            {/* Date */}
                            <p className="text-xs font-mono font-bold uppercase tracking-wider text-light-text-muted dark:text-dark-text-muted mb-1.5">
                                {formatDate(article.date)}
                            </p>

                            {/* Title */}
                            <Link 
                                to={`/blogs/${article.id}`}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <h4 className="text-base sm:text-lg font-bold leading-snug text-light-text dark:text-white group-hover:text-theme-red transition-colors cursor-pointer">
                                    {article.title}
                                </h4>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;