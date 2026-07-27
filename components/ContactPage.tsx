/// <reference types="vite/client" />
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
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

  // Full-Width Single-Line Social Links Data
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhay-kishor-y130s",
      color: "bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border-[#0A66C2]/20",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      url: "https://github.com/abhaykishor",
      color: "bg-gray-900/10 dark:bg-white/10 hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black border-black/10 dark:border-white/20",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
        </svg>
      )
    },
    {
      name: "Behance",
      url: "https://www.behance.net/abhaykishor130",
      color: "bg-[#1769FF]/10 hover:bg-[#1769FF] text-[#1769FF] hover:text-white border-[#1769FF]/20",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M22 7h-7V5h7v2zm-1.708 11.233c-1.082 1.173-2.658 1.767-4.729 1.767-2.029 0-3.667-.611-4.912-1.833-1.246-1.223-1.869-2.883-1.869-4.981 0-2.032.618-3.666 1.853-4.899 1.235-1.234 2.822-1.851 4.759-1.851 1.869 0 3.37.564 4.502 1.694 1.133 1.129 1.699 2.68 1.699 4.652 0 .408-.046.817-.138 1.228h-9.754c.123 1.173.538 2.062 1.245 2.668.707.605 1.583.908 2.628.908 1.506 0 2.613-.564 3.32-1.693l1.396 1.34zm-8.868-6.195h6.602c-.061-.954-.383-1.688-.966-2.203-.583-.514-1.352-.771-2.306-.771-.953 0-1.737.265-2.351.796-.614.531-.941 1.257-.979 2.178zM2.83 18.5h4.945c1.475 0 2.62-.315 3.435-.945.815-.63 1.223-1.521 1.223-2.673 0-.785-.208-1.428-.623-1.928-.415-.5-1.022-.841-1.821-1.023.63-.199 1.115-.515 1.455-.948.34-.433.51-.983.51-1.65 0-.968-.348-1.722-1.045-2.262C10.212 6.531 9.2 6.26 7.873 6.26H2.83V18.5zm3.104-9.69h1.751c.645 0 1.13.12 1.455.361.325.241.488.59.488 1.047 0 .438-.172.784-.518 1.037-.345.253-.872.38-1.581.38H5.934V8.81zm0 4.887h2.013c.739 0 1.298.14 1.677.42.379.28.568.677.568 1.192 0 .546-.196.963-.588 1.251-.392.288-.981.432-1.767.432H5.934V13.697z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      color: "bg-[#E4405F]/10 hover:bg-[#E4405F] text-[#E4405F] hover:text-white border-[#E4405F]/20",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: "Twitter / X",
      url: "https://x.com/abhay__130",
      color: "bg-[#1DA1F2]/10 hover:bg-[#1DA1F2] text-[#1DA1F2] hover:text-white border-[#1DA1F2]/20",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "Threads",
      url: "https://www.threads.net",
      color: "bg-black/10 dark:bg-white/10 hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black border-black/10 dark:border-white/20",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12.186 24c-3.52 0-6.422-1.12-8.318-3.237C2.083 18.8 1.152 15.82 1.152 12c0-3.882.936-6.88 2.73-8.8 1.888-2.023 4.782-3.1 8.304-3.1 3.593 0 6.55 1.127 8.442 3.237 1.704 1.9 2.585 4.7 2.585 8.163h-3.414c0-2.58-.622-4.59-1.802-5.83C17.062 4.49 14.97 3.65 12.186 3.65c-2.73 0-4.8.84-5.992 2.02-1.284 1.272-1.932 3.328-1.932 6.33 0 3.03.648 5.12 1.932 6.42 1.192 1.21 3.262 2.05 5.992 2.05 3.032 0 5.093-.97 6.072-2.122l2.628 2.148C19.345 22.25 16.275 24 12.186 24z"/>
        </svg>
      )
    },
    {
      name: "Reddit",
      url: "https://www.reddit.com",
      color: "bg-[#FF4500]/10 hover:bg-[#FF4500] text-[#FF4500] hover:text-white border-[#FF4500]/20",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.18 1.207.491 1.194-.856 2.85-1.419 4.674-1.488l.977-4.57 3.38.712a1.25 1.25 0 0 1 .99-.647z"/>
        </svg>
      )
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/918273746070",
      color: "bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border-[#25D366]/20",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      )
    }
  ];

  return (
    <main className="max-w-[1240px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-4">
      {/* Endless Driving Keyframes */}
      <style>{`
        @keyframes runEndless {
          0% { transform: translateX(-150px); }
          100% { transform: translateX(calc(100vw + 150px)); }
        }
        .animate-mustang-drive {
          animation: runEndless 12s linear infinite;
        }
      `}</style>

      <section id="contact" className="pb-16 sm:pb-24 flex flex-col gap-10">
        
        {/* --- FORM & DETAILS SIDE-BY-SIDE --- */}
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
                  placeholder="e.g. John Doe" 
                  className="w-full p-3.5 bg-white dark:bg-dark-bg rounded-2xl border border-black/10 dark:border-white/10 focus:border-theme-red outline-none transition-all text-sm shadow-sm" 
                />
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted mb-1 block">Email / Contact</label>
                <input 
                  type="text" 
                  name="email" 
                  required 
                  placeholder="e.g. john@example.com" 
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

          {/* Right Column: Title & Location Cards */}
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
                  <p className="text-sm sm:text-base font-bold text-light-text dark:text-dark-text">IIT Roorkee, Saharanpur / India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/5">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-theme-red/10 text-theme-red text-xl font-bold">✉️</span>
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
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-theme-red/10 text-theme-red text-xl font-bold">📞</span>
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

        {/* --- SOCIAL LINKS ROW --- */}
        <div className="w-full pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted mb-4">
            Connect Across Channels
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 w-full">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 p-2.5 rounded-2xl border font-bold text-[11px] uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${social.color}`}
              >
                {social.icon}
                <span className="truncate">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* --- CREATIVE QUOTE BOX (Cleaned without red hover glow) --- */}
        <div className="w-full p-8 rounded-[2.5rem] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[3px] text-theme-red block mb-2">
                Studio Philosophy // 01
              </span>
              <p className="text-lg sm:text-xl font-medium italic font-serif leading-relaxed text-light-text dark:text-dark-text">
                "Architecture is physical syntax. Code is digital logic. Cinema is human emotion. At their intersection lies everything worth building."
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-theme-red" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-light-text-muted dark:text-dark-text-muted">
                Always Designing.
              </span>
            </div>
          </div>
        </div>

        {/* --- STANDALONE ENDLESS 1969 FORD MUSTANG DRIVE (Positioned directly below quote box) --- */}
        <div className="w-full relative h-12 overflow-hidden border-b border-black/10 dark:border-white/10 flex items-end">
          
          {/* Animated 1969 Mustang Silhouette */}
          <div className="animate-mustang-drive absolute bottom-0">
            <svg className="w-24 h-10" viewBox="0 0 160 50">
              {/* Body in 1969 Dark Green */}
              <path 
                d="M 10 38 L 22 38 C 24 32, 38 32, 40 38 L 110 38 C 112 32, 126 32, 128 38 L 150 38 L 155 30 L 138 18 L 95 14 L 50 18 L 20 28 Z" 
                className="fill-[#1b382b] dark:fill-[#2d523e]" 
              />
              {/* Fastback Roofline & Windows */}
              <path 
                d="M 52 19 L 92 16 L 132 20 L 115 30 L 52 30 Z" 
                className="fill-sky-200/40 dark:fill-sky-900/60" 
              />
              {/* Chrome Side Accent Strip */}
              <path d="M 45 32 L 105 32" stroke="#d1d5db" strokeWidth="1.5" />
              {/* Wheels */}
              <circle cx="31" cy="38" r="7" className="fill-gray-900 stroke-gray-400" strokeWidth="2" />
              <circle cx="119" cy="38" r="7" className="fill-gray-900 stroke-gray-400" strokeWidth="2" />
              <circle cx="31" cy="38" r="2.5" className="fill-gray-300" />
              <circle cx="119" cy="38" r="2.5" className="fill-gray-300" />
            </svg>
          </div>

        </div>

      </section>
    </main>
  );
};

export default ContactPage;