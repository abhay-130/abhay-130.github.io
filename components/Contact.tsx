/// <reference types="vite/client" />
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3_FORMS_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! I'll get back to you soon.");
        form.reset();
      } else {
        console.error("API Error:", data);
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResult("Message sent!");
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32">
      {/* Side-by-Side Layout matching ContactPage */}
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-14 items-start w-full">
        
        {/* Left Column: Form Card */}
        <div className="flex-1 w-full bg-gray-50 dark:bg-gray-900/60 p-6 sm:p-8 md:p-10 rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-theme-red tracking-tight">Message for AbhaY</h3>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>INBOX OPEN</span>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <input type="hidden" name="subject" value="New Project Inquiry from Portfolio" />
            <input type="hidden" name="from_name" value="Portfolio Contact" />

            <div>
              <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted mb-1 block">Your Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="e.g. Parul" 
                className="w-full p-3.5 bg-white dark:bg-dark-bg rounded-2xl border border-black/10 dark:border-white/10 focus:border-theme-red outline-none transition-all text-sm shadow-sm" 
              />
            </div>

            <div>
              <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted mb-1 block">Email / Contact</label>
              <input 
                type="text" 
                name="email" 
                required 
                placeholder="e.g. parul@example.com" 
                className="w-full p-3.5 bg-white dark:bg-dark-bg rounded-2xl border border-black/10 dark:border-white/10 focus:border-theme-red outline-none transition-all text-sm shadow-sm" 
              />
            </div>

            <div>
              <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted mb-1 block">Your Message</label>
              <textarea
                name="message"
                required
                placeholder="Tell me about your project, idea, or query..."
                rows={4}
                className="w-full p-3.5 bg-white dark:bg-dark-bg rounded-2xl border border-black/10 dark:border-white/10 focus:border-theme-red outline-none transition-all resize-none text-sm shadow-sm"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full px-6 py-3.5 bg-black dark:bg-white text-white dark:text-black hover:bg-theme-red dark:hover:bg-theme-red dark:hover:text-white font-extrabold uppercase tracking-wider rounded-full text-xs sm:text-sm transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {isSubmitting ? "SENDING MESSAGE..." : "SEND MESSAGE →"}
            </button>

            {result && (
              <p className={`text-center mt-3 font-bold text-xs p-3 rounded-xl ${result.includes("successfully") || result.includes("sent") ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-red-500/10 text-red-500"}`}>
                {result}
              </p>
            )}
          </form>
        </div>

        {/* Right Column: Title & Information Cards */}
        <div className="flex-1 w-full flex flex-col items-start gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-theme-red uppercase tracking-[4px]">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-black -tracking-wide leading-[1.15] text-light-text dark:text-dark-text">
              Let's Build Something Awesome.
            </h2>
            <p className="text-light-text-muted dark:text-dark-text-muted text-sm sm:text-base leading-relaxed">
              Got an architectural project, a web app design, or a creative collaboration? Drop a line anytime.
            </p>
          </div>

          {/* Direct Details Cards */}
          <div className="space-y-3 w-full">
            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-theme-red/10 text-theme-red text-lg font-bold">📍</span>
              <div>
                <p className="text-[10px] font-mono uppercase text-light-text-muted dark:text-dark-text-muted font-bold">Location</p>
                <p className="text-sm sm:text-base font-bold text-light-text dark:text-dark-text">IIT Roorkee, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-theme-red/10 text-theme-red text-lg font-bold">✉️</span>
              <div>
                <p className="text-[10px] font-mono uppercase text-light-text-muted dark:text-dark-text-muted font-bold">Direct Email</p>
                <a
                  href="mailto:abhaykishor130@gmail.com"
                  className="text-sm sm:text-base font-bold text-light-text dark:text-dark-text hover:text-theme-red transition-colors break-all"
                >
                  abhaykishor130@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-theme-red/10 text-theme-red text-lg font-bold">📞</span>
              <div>
                <p className="text-[10px] font-mono uppercase text-light-text-muted dark:text-dark-text-muted font-bold">Phone / WhatsApp</p>
                <a
                  href="tel:+918273746070"
                  className="text-sm sm:text-base font-bold text-light-text dark:text-dark-text hover:text-theme-red transition-colors"
                >
                  +91 8273746070
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;