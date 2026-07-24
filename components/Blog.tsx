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
            <div className="flex flex-row justify-between items-end mb-8 sm:mb-10 md:mb-12 gap-2 sm:gap-4">
                {/* Left Side: Text */}
                <div>
                    <p className="text-xs sm:text-base font-medium uppercase tracking-[2px] sm:tracking-[3px]">Our Corner</p>
                    <h2 className="text-xl min-[400px]:text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold -tracking-wide leading-tight">
                        Latest Blog/Articles
                    </h2>
                </div>

                {/* Right Side: Button */}
                <Link 
                    to="/blogs" 
                    className="whitespace-nowrap px-3 py-1.5 sm:px-6 sm:py-3 text-xs sm:text-base rounded-full border-2 border-theme-red font-semibold hover:bg-theme-red hover:text-white dark:hover:text-dark-text transition-colors"
                >
                    EXPLORE MORE
                </Link>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12">
                {/* Featured Main Article */}
                {mainArticle && (
                    <div className="lg:w-2/3">
                        <Link to={`/blogs/${mainArticle.id}`}>
                            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl mb-4 sm:mb-6 bg-black/5 dark:bg-white/5">
                                {/* Category Badge on Top-Left */}
                                {mainArticle.category && (
                                    <span className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20">
                                        {mainArticle.category}
                                    </span>
                                )}
                                <img 
                                    src={mainArticle.image} 
                                    alt={mainArticle.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                                />
                            </div>
                        </Link>
                        {/* Formatted Date */}
                        <p className="text-sm sm:text-base md:text-lg text-light-text-muted dark:text-dark-text-muted mb-2">
                            {formatDate(mainArticle.date)}
                        </p>
                        <Link to={`/blogs/${mainArticle.id}`}>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug hover:text-theme-red transition-colors cursor-pointer mb-3">
                                {mainArticle.title}
                            </h3>
                        </Link>

                        {/* Starting 2-3 lines description */}
                        {mainArticle.description && (
                            <p className="text-sm sm:text-base md:text-lg text-light-text-muted dark:text-dark-text-muted leading-relaxed line-clamp-3">
                                {mainArticle.description}
                            </p>
                        )}
                    </div>
                )}

                {/* Side Articles */}
                <div className="lg:w-1/3 flex flex-col gap-6 sm:gap-8">
                    {sideArticles.map((article) => (
                        <div key={article.id} className="flex flex-col">
                            <Link to={`/blogs/${article.id}`}>
                                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl mb-2 bg-black/5 dark:bg-white/5">
                                    {/* Category Badge on Top-Left */}
                                    {article.category && (
                                        <span className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                                            {article.category}
                                        </span>
                                    )}
                                    <img 
                                        src={article.image} 
                                        alt={article.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                                    />
                                </div>
                            </Link>
                            {/* Formatted Date */}
                            <p className="text-xs sm:text-sm text-light-text-muted dark:text-dark-text-muted mb-1">
                                {formatDate(article.date)}
                            </p>
                            <Link to={`/blogs/${article.id}`}>
                                <h4 className="text-base sm:text-lg md:text-xl font-semibold leading-normal hover:text-theme-red transition-colors cursor-pointer">
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