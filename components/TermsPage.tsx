import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="max-w-[1000px] mx-auto w-full px-6 sm:px-10 pt-6 sm:pt-10 pb-16 sm:pb-24 text-black dark:text-white min-h-screen">
            
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-2">
                Terms of Use
            </h1>
            <p className="text-sm text-gray-500 mb-8 sm:mb-10">Last Updated: July 2026</p>

            <article className="prose dark:prose-invert max-w-none space-y-8 text-base sm:text-lg leading-relaxed text-light-text-muted dark:text-dark-text-muted">
                <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using <strong>abhaykishor.me</strong> (the "Website"), you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use this Website.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">2. Intellectual Property Rights</h2>
                    <p>
                        All content hosted on this site—including but not limited to architectural models, graphic designs, code repositories, UI designs, articles, images, and logos—is the intellectual property of <strong>Abhay Kishor</strong> unless otherwise stated.
                    </p>
                    <p className="mt-2">
                        You may not reproduce, distribute, modify, or republish any material from this website without explicit written consent.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">3. Use of Content & Personal Projects</h2>
                    <p>
                        The case studies, design concepts, and blogs published on this site are intended solely for personal, promotional, and informational showcase purposes. Third-party branding assets or logos featured in showcase projects remain the property of their respective owners.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">4. External Links & Services</h2>
                    <p>
                        This Website may contain links to third-party services, social media platforms, or external content repositories (e.g., Behance, LinkedIn, GitHub, YouTube). Abhay Kishor is not responsible for the content, privacy policies, or practices of any third-party websites.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">5. Disclaimer of Warranties</h2>
                    <p>
                        This Website is provided on an "as-is" and "as-available" basis without warranties of any kind, express or implied. While every effort is made to maintain accurate information and bug-free performance, no guarantees are made regarding uninterrupted access.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">6. Contact Information</h2>
                    <p>
                        For questions regarding these Terms of Use, feel free to reach out via the official contact form or directly through linked social channels.
                    </p>
                </section>
            </article>

            {/* Back to Home Link with generous top spacing */}
            <div className="mt-12 sm:mt-16 pt-6 border-t border-gray-200 dark:border-gray-800">
                <Link to="/" className="inline-block text-theme-red font-bold uppercase tracking-[3px] text-xs sm:text-sm hover:underline">
                    ← Back to Home
                </Link>
            </div>

        </main>
    );
};

export default TermsPage;