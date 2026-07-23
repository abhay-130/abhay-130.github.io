import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="max-w-[1000px] mx-auto w-full px-6 sm:px-10 pt-6 sm:pt-10 pb-16 sm:pb-24 text-black dark:text-white min-h-screen">
            
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-2">
                Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 mb-8 sm:mb-10">Last Updated: July 2026</p>

            <article className="prose dark:prose-invert max-w-none space-y-8 text-base sm:text-lg leading-relaxed text-light-text-muted dark:text-dark-text-muted">
                <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">1. Overview</h2>
                    <p>
                        Your privacy is important. This Privacy Policy outlines the types of personal information that may be collected when you visit <strong>abhaykishor.me</strong> and how that data is protected and used.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">2. Information Collection</h2>
                    <p>
                        This website operates primarily as an informational portfolio and blog platform. We do not sell, rent, or trade your personal information.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Contact Forms:</strong> If you submit an inquiry via the contact form, your name, email address, and message will be collected strictly to respond to your request.</li>
                        <li><strong>Analytics & Server Logs:</strong> Basic non-identifiable usage statistics (e.g., browser type, referring domain, page visits) may be processed to monitor site performance and security.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">3. Third-Party Services & Cookies</h2>
                    <p>
                        This site utilizes trusted third-party service providers to deliver dynamic content and hosting capabilities:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Sanity.io:</strong> Content management system used to store and deliver blog content and images.</li>
                        <li><strong>Embedded Media:</strong> Embedded content (such as YouTube videos) may set third-party cookies or track interaction in accordance with their respective privacy policies.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">4. Data Security</h2>
                    <p>
                        We implement standard security protocols (including SSL encryption) to ensure your connection to this Website is secure. However, no data transmission over the Internet can be guaranteed as 100% secure.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">5. Updates to This Policy</h2>
                    <p>
                        This Privacy Policy may be updated periodically to reflect changes in site features or legal requirements. Revisions will be posted directly to this page with an updated modification date.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3">6. Contact</h2>
                    <p>
                        If you have any questions or concerns regarding this Privacy Policy, please get in touch via the contact section on the main portfolio page.
                    </p>
                </section>
            </article>

            {/* Back to Home Link with matching top spacing */}
            <div className="mt-12 sm:mt-16 pt-6 border-t border-gray-200 dark:border-gray-800">
                <Link to="/" className="inline-block text-theme-red font-bold uppercase tracking-[3px] text-xs sm:text-sm hover:underline">
                    ← Back to Home
                </Link>
            </div>

        </main>
    );
};

export default PrivacyPage;