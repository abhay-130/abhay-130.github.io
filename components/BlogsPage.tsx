
import React from 'react';
import { Link } from 'react-router-dom';

const blogArticles = [
    {
        image: '/blog-images/landingpage-blogs-images/IMG_9832.jpg',
        date: '24 APR 2024',
        title: 'Why Ancient Indian Cities Were Smarter Than Us',
        isMain: true,
    },
    {
        image: '/blog-images/landingpage-blogs-images/IMG_9988.jpeg',
        date: '20 APR 2024',
        title: 'Lost in Transit: My Adventures Outside Roorkee',
        isMain: false,
    },
    {
        image: '/blog-images/landingpage-blogs-images/muhchodi.jpg',
        date: '15 APR 2024',
        title: 'Surviving IIT Roorkee: Dosti, trips & Deadlines',
        isMain: false,
    },
];

const BlogsPage: React.FC = () => {
    const mainArticle = blogArticles.find(a => a.isMain);
    const sideArticles = blogArticles.filter(a => !a.isMain);

    return (
        <main className="p-4 sm:p-6 md:p-8">
            <section id="blogs" className="pt-0 sm:py-16 md:py-24">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-10 md:mb-12 gap-4">
                    <div>
                        <p className="text-sm sm:text-base font-medium uppercase tracking-[3px]">Our Corner</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold -tracking-wide leading-tight">Latest Blog/Articles</h2>
                    </div>
                    <a href="#" className="mt-4 md:mt-0 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full border-2 border-theme-red font-semibold hover:bg-theme-red hover:text-white dark:hover:text-dark-text transition-colors">
                        EXPLORE MORE
                    </a>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12">
                    {mainArticle && (
                        <div className="lg:w-2/3">
                            <img src={mainArticle.image} alt={mainArticle.title} className="w-full h-auto object-cover rounded-3xl mb-4 sm:mb-6"/>
                            <p className="text-sm sm:text-base md:text-lg text-light-text-muted dark:text-dark-text-muted mb-2">{mainArticle.date}</p>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug hover:text-theme-red transition-colors cursor-pointer">
                                <span className="font-semibold italic">Why Ancient Indian Cities Were Smarter </span> Than Us, <span className="font-normal">The story of the design</span>
                            </h3>
                        </div>
                    )}
                    <div className="lg:w-1/3 flex flex-col gap-4 sm:gap-6">
                        {sideArticles.map((article, index) => (
                            <div key={index} className="flex flex-col">
                                <img src={article.image} alt={article.title} className="w-full h-auto object-cover rounded-xl mb-2"/>
                                <p className="text-xs sm:text-sm text-light-text-muted dark:text-dark-text-muted mb-1">{article.date}</p>
                                <h4 className="text-base sm:text-lg md:text-xl font-semibold leading-normal hover:text-theme-red transition-colors cursor-pointer">{article.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="text-center mt-8">
                <Link to="/" className="text-xs sm:text-sm md:text-[13px] mt-[20px] px-3 sm:px-4 py-2 rounded-full font-semibold text-black dark:text-light-text transition-colors hover:bg-black hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg">
                    Back to Home
                </Link>
            </div>
        </main>
    );
};

export default BlogsPage;
