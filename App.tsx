import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
// import ThemeToggle from './components/ThemeToggle'; // Removed since it's in Header now
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import SocialLifePage from './components/SocialLifePage';
import ServicesPage from './components/ServicesPage';
import BlogsPage from './components/BlogsPage';
import ContactPage from './components/ContactPage';
import ScrollToTop from './components/ScrollToTop';

const sectionSpacing =
  'py-12 sm:py-16 md:py-24 px-7 sm:px-8 md:px-12 lg:px-16 xl:px-20';

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
  <main className="max-w-[1440px] mx-auto w-full">
    {homeSections.map(({ key, element }) => (
      <div key={key} className={sectionSpacing}>
        {element}
      </div>
    ))}
  </main>
);

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <div className="bg-white dark:bg-dark-bg text-light-text dark:text-dark-text font-poppins transition-colors duration-400 ease-in-out overflow-x-hidden">
      <ScrollToTop />

      {/* Theme logic is passed to Header */}
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/social-life" element={<SocialLifePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;