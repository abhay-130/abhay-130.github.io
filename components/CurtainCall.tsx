import React from 'react';
import ResizableButton from './ResizableButton';

const CurtainCall: React.FC = () => {
  const handleDownload = () => {
    const resumeUrl = '/Resume/AbhaYKishor_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'AbhaYKishor_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 w-full py-6">
      
      {/* LEFT COLUMN: ENRICHED TEXT CONTAINER */}
      <div className="flex-1 flex flex-col items-start gap-5 sm:gap-6">
        <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-theme-red animate-pulse" />
            <p className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[2px] sm:tracking-[3px] text-theme-red">
              Future Endeavors
            </p>
          </div>
      
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-black -tracking-wide leading-[1.12] text-light-text dark:text-dark-text">
          You've seen the past. <br className="hidden sm:inline" />
          <span className="text-theme-red">Let's build the future.</span>
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-light-text-muted dark:text-dark-text-muted leading-relaxed max-w-xl">
          That was a glimpse into my creative journey at IIT Roorkee so far. But the best architectural spaces and digital experiences are the ones we haven't built yet. Ready to start the next big thing?
        </p>

        {/* Feature Vibe Badges */}
        <div className="flex flex-wrap gap-2.5 my-1">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-xs font-mono font-bold text-light-text dark:text-dark-text">
            <span className="text-theme-red">🏛️</span> Architecture & UX
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-xs font-mono font-bold text-light-text dark:text-dark-text">
            <span className="text-emerald-500">⚡</span> Rapid Prototyping
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-xs font-mono font-bold text-light-text dark:text-dark-text">
            <span className="text-amber-500">📍</span> IIT Roorkee
          </div>
        </div>

        {/* Action Buttons Group */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <ResizableButton 
            onClick={handleDownload} 
            size={13} 
            className="bg-theme-red text-white dark:text-dark-text rounded-full hover:opacity-80 transition-opacity px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-bold uppercase tracking-wider"
          >
            Download CV ↓
          </ResizableButton>
        </div>

      </div>

      {/* RIGHT COLUMN: ORIGINAL UNTOUCHED IMAGE CONTAINER */}
      <div className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto">
        <img 
          src="/landing-page-images/conclusion-image.jpg" 
          alt="Thank You" 
          className="w-full max-w-[550px] h-auto rounded-3xl object-cover" 
        />
      </div>

    </section>
  );
};

export default CurtainCall;