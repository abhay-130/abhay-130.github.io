import React from 'react';
import ResizableButton from './ResizableButton';

const CurtainCall: React.FC = () => {
  const handleDownload = () => {
    const resumeUrl = '/Resume/AbhaY-resume.pdf'; // Make sure this matches your file name!
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'AbhaY_resume.pdf'; // The name the user sees when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12 w-full">
      <div className="flex-1 space-y-6 sm:space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold leading-tight">
          You've seen the past. Let's build the future.
        </h2>
        <p className="text-base sm:text-lg text-light-text-muted dark:text-dark-text-muted">
          That was a glimpse into my creative journey at IIT Roorkee so far. But the best projects are the ones I haven't started yet. Ready to be part of the next one?
        </p>
        <ResizableButton onClick={handleDownload} size={13} className="bg-theme-red text-white dark:text-dark-text rounded-full hover:opacity-80 transition-opacity px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
          Download CV
        </ResizableButton>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto">
        <img src="/landing-page-images/conclusion-image.jpg" alt="Thank You" className="w-full max-w-[550px] h-auto rounded-3xl object-cover" />
      </div>
    </section>
  );
};

export default CurtainCall;
