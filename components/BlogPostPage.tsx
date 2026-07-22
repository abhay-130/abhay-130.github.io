import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sanityClient } from './data/sanityClient';
import { blogArticles } from './data/blogData';

interface ArticleDetail {
    id: string;
    title: string;
    date: string;
    category: string;
    description?: string;
    content?: string;
    image: string;
    youtubeUrl?: string;
}

const BlogPostPage: React.FC = () => {
    // 1. Get the ID or Slug from the URL
    const { id } = useParams<{ id: string }>();

    const [article, setArticle] = useState<ArticleDetail | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // 2. Fetch from Sanity (or fallback to static data)
    useEffect(() => {
        window.scrollTo(0, 0);

        if (!id) return;

        // Query Sanity by _id or slug
        const query = `*[_type == "post" && (_id == $id || slug.current == $id)][0] {
            "id": _id,
            title,
            date,
            category,
            description,
            "image": mainImage.asset->url,
            youtubeUrl
        }`;

        sanityClient
            .fetch(query, { id })
            .then((data) => {
                if (data) {
                    setArticle(data);
                } else {
                    // Fallback to static blog data if not found in Sanity
                    const staticMatch = blogArticles.find((a) => a.id === id);
                    if (staticMatch) setArticle(staticMatch);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.warn("Sanity fetch error (falling back to static data):", err);
                const staticMatch = blogArticles.find((a) => a.id === id);
                if (staticMatch) setArticle(staticMatch);
                setLoading(false);
            });
    }, [id]);

    // Helper for YouTube embeds
    const getYouTubeEmbedUrl = (url?: string) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
    };

    // 3. Loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-bg text-black dark:text-white">
                <p className="text-sm font-semibold tracking-widest uppercase animate-pulse">Loading Article...</p>
            </div>
        );
    }

    // 4. Handle invalid IDs (User types a wrong URL or document not found)
    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
                <h2 className="text-2xl font-bold mb-4">Article not found</h2>
                <Link to="/blogs" className="text-theme-red hover:underline">Back to Blogs</Link>
            </div>
        );
    }

    const embedUrl = getYouTubeEmbedUrl(article.youtubeUrl);

    // 5. Render the Blog
    return (
        <main className="max-w-[1000px] mx-auto w-full px-6 sm:px-8 md:px-12 pb-12 sm:pb-20">
            
            {/* Header */}
            <header className="mb-10 text-center">
                <p className="text-theme-red font-bold uppercase tracking-widest text-sm mb-3">{article.category}</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">{article.title}</h1>
                <p className="text-sm text-gray-500">{article.date}</p>
            </header>

            {/* Hero Image / YouTube Media Container */}
            <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-xl bg-black/5 dark:bg-white/5">
                {embedUrl ? (
                    <iframe
                        src={embedUrl}
                        title={article.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : article.image ? (
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                ) : null}
            </div>

            {/* Content Body */}
            <article className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-lg sm:text-xl leading-relaxed text-light-text dark:text-dark-text whitespace-pre-line">
                    {article.description || article.content}
                </p>
            </article>

            {/* --- BOTTOM NAVIGATION --- */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-10 text-center mt-12">
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