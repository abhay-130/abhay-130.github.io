
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center">
        <div className="flex-1 w-full bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 md:p-12 rounded-3xl">
          <h3 className="text-xl sm:text-2xl font-bold text-theme-red mb-6">Message for AbhaY</h3>
          <form className="space-y-4 sm:space-y-6">
            <input type="text" placeholder="Your name" className="w-full p-3 sm:p-4 bg-white dark:bg-dark-bg rounded-lg border-2 border-transparent focus:border-theme-red outline-none transition-colors text-sm sm:text-base" />
            <input type="email" placeholder="Your email/contact" className="w-full p-3 sm:p-4 bg-white dark:bg-dark-bg rounded-lg border-2 border-transparent focus:border-theme-red outline-none transition-colors text-sm sm:text-base" />
            <textarea placeholder="Your message" rows={5} className="w-full p-3 sm:p-4 bg-white dark:bg-dark-bg rounded-lg border-2 border-transparent focus:border-theme-red outline-none transition-colors text-sm sm:text-base resize-none"></textarea>
            <button type="submit" className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-theme-red text-white dark:text-dark-text font-semibold rounded-full text-base sm:text-lg hover:opacity-80 transition-opacity">
              SEND MESSAGE
            </button>
          </form>
        </div>
        <div className="flex-1 w-full flex flex-col items-start gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold -tracking-wide leading-tight">Let's Build Something Awesome.</h2>
            <p className="text-light-text-muted dark:text-dark-text-muted text-base sm:text-lg leading-relaxed">
              Got a project? A crazy idea? Or just want to debate which wine in Roorkee is the best? Hit me up.
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-theme-red text-xl sm:text-2xl">📍</span>
              <p className="text-base sm:text-lg md:text-xl"> IIT Roorkee, India</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-theme-red text-xl sm:text-2xl">✉️</span>
              <a href="mailto:abhaykishor130@gmail.com" className="text-base sm:text-lg md:text-xl hover:text-theme-red transition-colors break-all">abhaykishor130@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-theme-red text-xl sm:text-2xl">📞</span>
              <a href="tel:+918273746070" className="text-base sm:text-lg md:text-xl hover:text-theme-red transition-colors">+91 8273746070</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
