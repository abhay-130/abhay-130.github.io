import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Softwares from './components/Softwares';
import SocialLife from './components/SocialLife';
import Faq from './components/Faq';
import Blog from './components/Blog';
import Contact from './components/Contact';
import CurtainCall from './components/CurtainCall';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import SocialLifePage from './components/SocialLifePage';
import ServicesPage from './components/ServicesPage';
import BlogsPage from './components/BlogsPage';
import ContactPage from './components/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import BlogPostPage from './components/BlogPostPage';
import DrivePage from './components/DrivePage';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';


// Standardized equal vertical padding while preserving initial side paddings (px-7 sm:px-8 md:px-12 lg:px-16)
const sectionSpacing =
  'py-12 sm:py-16 md:py-15 px-7 sm:px-8 md:px-12 lg:px-16';

// Preserved initial page shell class
const pageShellClassName =
  'max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-24 sm:pt-28 md:pt-32';

const homeSections = [
  { key: 'hero', element: <Hero /> },
  { key: 'services', element: <Services /> },
  { key: 'projects', element: <Projects /> },
  { key: 'about', element: <About /> },
  { key: 'softwares', element: <Softwares /> },
  { key: 'social-life', element: <SocialLife /> },
  { key: 'faq', element: <Faq /> },
  { key: 'blog', element: <Blog /> },
  { key: 'contact', element: <Contact /> },
  { key: 'curtain-call', element: <CurtainCall /> },
];

const HomePage: React.FC = () => (
  <main className="w-full flex flex-col">
    {homeSections.map(({ key, element }, index) => (
      <div 
        key={key} 
        className={index === 0 ? `${sectionSpacing} !pt-0` : sectionSpacing}
      >
        {element}
      </div>
    ))}
  </main>
);

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  
  const isDrivePage = location.pathname === '/drive';

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

      // 1. Standalone Fullscreen Render for Drive Page
        if (isDrivePage) {
          return (
            <div className="w-screen h-screen overflow-hidden bg-black">
              <ScrollToTop />
              <Routes>
                <Route path="/drive" element={<DrivePage />} />
              </Routes>
            </div>
          );
        }

        // 2. Standard Shell Render for All Other Pages
        return (
          <div className="bg-white dark:bg-dark-bg text-light-text dark:text-dark-text font-poppins transition-colors duration-400 ease-in-out overflow-x-hidden">
            <ScrollToTop />

      {/* Header with Theme Switcher */}
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <div className={pageShellClassName}>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/social-life" element={<SocialLifePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/drive" element={<DrivePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;