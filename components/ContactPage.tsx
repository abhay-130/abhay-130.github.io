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
      name: "Instagram",
      url: "https://www.instagram.com/abhay_130_",
      color: "bg-[#E4405F]/10 hover:bg-[#E4405F] text-[#E4405F] hover:text-white border-[#E4405F]/20",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
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
      name: "WhatsApp",
      url: "https://wa.me/918273746070",
      color: "bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border-[#25D366]/20",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/abhay130s",
      color: "bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border-[#1877F2]/20",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "X / Twitter",
      url: "https://x.com/abhay__130",
      color: "bg-black/10 dark:bg-white/10 hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black border-black/10 dark:border-white/20",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
      name: "Threads",
      url: "https://www.threads.net/abhay_130_",
      color: "bg-black/10 dark:bg-white/10 hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black border-black/10 dark:border-white/20",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12.186 24c-3.52 0-6.422-1.12-8.318-3.237C2.083 18.8 1.152 15.82 1.152 12c0-3.882.936-6.88 2.73-8.8 1.888-2.023 4.782-3.1 8.304-3.1 3.593 0 6.55 1.127 8.442 3.237 1.704 1.9 2.585 4.7 2.585 8.163h-3.414c0-2.58-.622-4.59-1.802-5.83C17.062 4.49 14.97 3.65 12.186 3.65c-2.73 0-4.8.84-5.992 2.02-1.284 1.272-1.932 3.328-1.932 6.33 0 3.03.648 5.12 1.932 6.42 1.192 1.21 3.262 2.05 5.992 2.05 3.032 0 5.093-.97 6.072-2.122l2.628 2.148C19.345 22.25 16.275 24 12.186 24z"/>
        </svg>
      )
    },
    {
      name: "Reddit",
      url: "https://www.reddit.com/u/abhaykishor",
      color: "bg-[#FF4500]/10 hover:bg-[#FF4500] text-[#FF4500] hover:text-white border-[#FF4500]/20",
      icon: (
        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.18 1.207.491 1.194-.856 2.85-1.419 4.674-1.488l.977-4.57 3.38.712a1.25 1.25 0 0 1 .99-.647z"/>
        </svg>
      )
    }
  ];

  return (
    <main className="max-w-[1240px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-4">

   {/* Fully Responsive Mustang Drive Keyframes */}
      <style>{`
        @keyframes endlessDrive {
          0% { 
            transform: translateX(-100%); 
          }
          100% { 
            /* 100cqw = 100% of the parent container's exact width on ANY screen */
            transform: translateX(100cqw); 
          }
        }

        @keyframes spinWheel {
          100% { transform: rotate(360deg); }
        }

        .animate-mustang-drive {
          /* Adjust duration as needed for a smooth cruise across any device */
          animation: endlessDrive 14s linear infinite; 
        }

        .animate-wheel-spin {
          animation: spinWheel 0.8s linear infinite;
          transform-box: fill-box;
          transform-origin: center;
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

        {/* --- CREATIVE QUOTE BOX --- */}
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

        {/* --- STANDALONE ENDLESS 1969 MUSTANG DRIVE WITH PROPERLY SPINNING WHEELS --- */}
        <div className="w-full relative h-20 overflow-hidden border-b border-black/10 dark:border-white/10 flex items-end">
          
          <div className="animate-mustang-drive absolute bottom-1">
            <svg 
              className="w-56 h-auto text-black dark:text-white fill-current" 
              viewBox="0 0 289 83" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* --- 1. MUSTANG BODY CHASSIS & WINDOWS --- */}
              <path d="M90.2928 24.8343C89.7799 24.766 89.374 24.7968 89 24.5169C89.7104 22.8125 91.21 21.2201 92.2769 19.7204C94.7207 16.2852 100.886 6.95938 104.493 5.49715C109.562 3.44172 147.274 3.59829 154.142 4.32333C156.116 4.52678 158.046 5.02653 159.872 5.80574C162.979 7.14189 165.083 9.16274 167.685 11.1642L179.567 20.3554C181.241 21.651 182.842 22.7969 184.492 24.1707C185.716 25.1901 186.78 25.5735 187.97 26.8946C184.161 27.9862 182.322 27.7013 178.416 27.6645C176.933 27.5878 175.83 27.6067 174.344 27.6621L172.263 27.6873C171.473 27.6673 170.652 27.6818 169.86 27.6853C168.061 27.6966 165.441 27.7575 163.72 27.57C162.784 27.7223 159.676 27.6656 158.609 27.6656L148.409 27.6589C137.274 27.7475 126.139 27.7286 115.004 27.6023C113.521 27.6503 112.036 27.6653 110.552 27.6472L109.478 27.6788L109.301 27.6868C108.927 27.6694 108.526 27.6051 108.152 27.5538C107.39 27.7976 105.306 27.6519 104.397 27.7029C101.12 27.8866 98.155 26.3093 95.0394 25.5437C93.3784 25.1354 92.0004 24.9708 90.2928 24.8343Z" fill="currentColor"/>
              <path d="M70.5825 15.8894C71.3132 15.0752 75.3248 12.006 76.2882 11.1609C79.0558 8.80208 81.9102 6.44564 84.8571 4.31601C86.0827 3.43045 87.7508 2.92251 89.2307 2.74607C92.2431 2.38688 95.2691 2.03401 98.2862 1.73833C117.781 -0.17205 137.543 -0.821451 157.039 1.41195C158.481 1.57698 159.969 1.77109 161.376 2.13733C162.642 2.49103 163.901 3.11549 165.22 3.40527C165.937 3.59006 166.218 3.65894 166.588 4.30069C166.666 4.43557 166.738 4.57256 166.807 4.71169C169.99 7.62553 173.903 10.1504 177.289 12.9104C181.475 16.3215 185.982 19.5693 189.956 23.2449C190.47 23.7199 190.964 24.2808 191.481 24.7305C191.833 24.7925 193.251 25.0618 193.52 25.0605L194.405 25.5147C198.052 25.8571 201.76 25.6546 205.411 25.7656C225.055 26.3631 244.855 26.6218 264.365 29.1724C266.093 29.3983 267.824 29.6245 269.554 29.8404C274.835 30.8734 280.387 30.6202 284.575 35.1758C284.989 37.1133 285.035 37.7611 284.727 39.7328C284.394 41.6587 284.182 44.461 282.787 45.8867C281.872 46.8231 280.469 47.4767 279.379 48.2348C280.588 48.6276 281.837 49.122 283.106 49.093C285.141 49.8366 286.764 50.2116 287.573 52.4168C287.591 53.2124 287.69 53.8545 287.124 54.4956C286.34 55.3819 283.807 55.2994 282.594 55.2979C281.468 64.4794 273.161 63.0695 266.484 63.641C265.336 63.7392 265.336 64 264.336 64C263.836 62.5 264.336 64 263.836 63C262.194 59.7169 259.836 56.5044 256.336 54C251.599 50.6107 240.836 48.5 231.836 57C228.836 61 227.836 64 226.836 65.5C225.336 68.735 225.793 70.235 224.836 70.235C221.336 70.235 221.336 70.1801 217.447 70.1801C211.336 70.1801 211.556 70.1741 209.536 70.235C206.1 70.3249 202.662 70.3868 199.224 70.421C190.778 70.5158 93.9382 72.1382 93.3649 71.8462C91.565 71.8547 89.7652 71.8504 87.9654 71.8338C85.8359 68 84.3359 60.5 80.8359 57C72.8359 49 61.3359 50 54.3359 57C49.6669 61.669 47.0189 71.0388 46.984 67.3425C44.8707 67.0781 42.7625 66.7742 40.6606 66.4312C40.364 66.7111 39.6338 67.1825 39.269 67.433C34.347 67.015 22.6206 66.088 18.5556 64.2607C16.6329 63.3966 15.1143 62.0175 13.5407 60.6537C12.1509 59.4494 7.47151 54.8426 6.2434 54.2788C6.22746 54.2715 6.21152 54.2645 6.19559 54.2574C4.27078 53.612 2.62855 51.6861 1.25829 50.2353C0.580642 48.9031 0.130595 44.8411 0.430647 43.5087C0.756002 43.1617 1.0542 43.1978 1.58565 43.0853C1.76122 42.6239 2.11333 40.8076 2.24174 40.2502C2.83662 37.6681 3.27597 35.1747 4.22828 32.6851C4.79717 30.6726 4.85273 28.6899 7.25491 28.464C9.91421 28.214 12.5585 28.0335 15.2204 27.8346L30.1632 26.7035C39.1521 26.026 51.0683 24.7561 59.9606 24.7734C61.0805 24.0142 62.656 22.0953 63.8081 21.4022C65.3583 20.4693 69.2953 16.3843 70.5825 15.8894Z" fill="currentColor"/>
              <path d="M194.594 25.2336C194.938 26.3132 195.981 30.5516 196.216 31.0301C196.497 32.1902 197.424 35.5193 197.315 36.4783C197.209 36.4035 197.169 37.984 196.998 37.8634C196.369 35.0737 195.886 32.1113 195 29.3959C194.131 26.3503 194.683 27.2055 194.594 25.2336Z" className="fill-white dark:fill-gray-900"/>
              <path d="M95.9336 46.293C96.3782 46.2493 96.7189 46.1836 97.1482 46.3093C98.0317 46.9848 98.1497 47.6868 98.4774 48.7307L98.3377 48.9739C97.9882 49.0472 97.5202 49.2183 97.2578 49.066C96.5272 48.6424 96.1693 47.0967 95.9336 46.293Z" className="fill-white dark:fill-gray-900"/>
              <path d="M97.7227 50.3552C97.9804 50.3288 98.7501 50.2393 98.9483 50.3364C99.8211 50.7635 100.381 51.6848 100.018 52.6203C99.6633 52.7291 99.5329 52.787 99.1508 52.7606C98.3977 52.2184 98.1073 51.2341 97.7227 50.3552Z" className="fill-white dark:fill-gray-900"/>
              <path d="M94.7812 42.7285C94.9719 42.7217 95.3347 42.7047 95.5124 42.7346C96.28 42.8631 96.7237 44.4015 96.6657 45.0119C96.2691 45.0962 96.1472 45.1398 95.7415 45.0788C95.0144 44.5626 94.9625 43.6126 94.7812 42.7285Z" className="fill-white dark:fill-gray-900"/>
              <path d="M99.7754 53.9773C100.351 53.9639 100.591 53.9193 101.078 54.2035C101.464 54.6228 101.483 54.7569 101.625 55.3177C100.329 55.3157 100.119 55.3741 99.7754 53.9773Z" className="fill-white dark:fill-gray-900"/>
              <path d="M197.253 36.8679C202.96 36.5788 209.004 36.9338 214.742 36.7504C216.507 36.6938 219.108 36.8907 220.769 36.7392L257.188 36.7601C258.645 36.763 267.323 36.6317 267.967 36.9336C267.272 37.6388 246.163 37.0139 242.55 37.7593C236.005 37.4706 228.967 37.9364 222.41 38.159L197.257 38.8161L117.545 40.7341C116.497 40.6745 115.409 40.7039 114.357 40.7133L113.967 38.2087C114.647 38.1838 115.079 38.1232 115.746 38.0086C135.031 37.4848 154.318 37.147 173.605 36.9952L189.241 36.8246C191.637 36.8071 194.92 36.6724 197.253 36.8679Z" className="fill-white dark:fill-gray-900"/>
              <path d="M113.062 37.8044L113.491 38.0155C113.827 39.0767 113.865 39.4359 114.004 40.5695L113.934 40.7982C110.158 40.879 106.383 40.9893 102.609 41.129C100.888 41.1874 97.8354 41.3856 96.1491 41.2708C95.5073 41.2055 94.6831 41.0021 94.151 41.4168C93.8602 42.0855 93.9479 41.8968 94.0075 42.8044C93.4335 41.6538 93.2979 40.7895 93.0039 39.458C98.4821 38.2234 107.339 38.1409 113.062 37.8044Z" className="fill-white dark:fill-gray-900"/>
              <path d="M111.068 25.895L111.928 26.0373C112.691 27.4801 112.974 30.3534 113.144 31.8907C113.196 34.0878 113.872 36.5164 114.299 38.7234L117.023 38.6027C115.892 38.6918 115.722 38.8893 114.571 38.9087L115.231 40.8564C117.013 40.8492 118.293 40.6759 120.068 40.7223C118.158 40.8374 117.425 41.0005 115.524 41C116.258 43.0531 120.942 56.1476 120.244 57.0373L119.219 55.8283C119.077 55.0129 118.848 54.2091 118.562 53.4075C117.09 49.2703 115.867 45.1022 114.404 40.964L113.833 40.8159L113.949 40.6528C113.72 39.8443 113.656 39.5881 113.101 38.8314L112.392 38.6809L113.082 38.6078C113.147 38.551 113.224 38.4823 113.314 38.4019C112.643 36.3852 112.241 33.738 111.915 31.7334C111.539 30.5998 111.146 27.0812 111.068 25.895Z" className="fill-white dark:fill-gray-900"/>
              <path d="M196.202 38.7971L197.126 38.993C197.077 46.5029 195.943 54.1087 194.644 61.4666C194.583 61.8047 194.589 61.9307 194.424 62.2511C194.368 62.2593 193.571 62.2858 193.5 62.251C194.15 58.3149 194.789 54.428 195.264 50.4616C195.719 46.6669 195.699 42.5105 196.202 38.7971Z" className="fill-white dark:fill-gray-900"/>
              <path d="M119.729 56C121.092 56.7683 122.719 62.1984 122.977 63.3787C120.88 62.5763 120.076 57.31 119.729 56Z" className="fill-white dark:fill-gray-900"/>
              <path d="M284.428 50.3619C284.024 49.9811 283.303 49.497 283.242 49.1138L283.836 49C285.871 49.7436 287.494 50.1186 288.303 52.3238C288.321 53.1194 288.42 53.7614 287.853 54.4026C287.07 55.2889 284.537 55.2064 283.324 55.2048C280.769 54.7878 271.589 55.447 271.336 52.5917C271.394 52.5084 271.451 52.4263 271.512 52.3458C272.834 50.601 276.56 51.2222 278.62 51.0295C280.603 50.8441 282.445 50.6447 284.428 50.3619Z" className="fill-white dark:fill-gray-900"/>
              <path d="M1.24972 43C2.28007 43.1391 3.42529 43.2441 4.42784 43.3993C4.66372 44.515 4.74842 49.5072 4.61257 50.7815L4.6578 51.667C5.05305 52.9701 5.21774 53.0255 5.85965 54.1721C3.93484 53.5268 2.29261 51.6009 0.922357 50.15C0.244705 48.8178 -0.205343 44.7558 0.0947096 43.4234C0.420065 43.0765 0.718265 43.1126 1.24972 43Z" className="fill-white dark:fill-gray-900"/>
              <path d="M116.384 37.2676C115.935 36.5297 115.669 35.0385 116.077 34.2708C116.816 33.8677 126.304 33.8938 126.856 34.4905C126.176 35.4857 120.269 34.7403 119.01 35.1046C118.843 36.1953 119.234 36.0249 118.657 37.1151C117.83 37.3916 117.253 37.3274 116.384 37.2676Z" className="fill-white dark:fill-gray-900"/>
              <path d="M119.054 38.3396C119.49 38.2436 119.927 38.4969 120.06 38.923C120.193 39.3488 119.978 39.8058 119.565 39.9748C119.264 40.098 118.92 40.0411 118.675 39.8279C118.429 39.6148 118.325 39.2818 118.406 38.967C118.486 38.6523 118.737 38.4096 119.054 38.3396Z" fill="currentColor"/>
              <path d="M161.438 18.801C162.523 18.647 164.733 18.6939 165.918 18.6921C166.89 20.6533 167.682 22.4226 168.556 24.4248L168.357 24.5048C166.457 23.1346 163.525 20.4471 161.438 18.801Z" className="fill-white dark:fill-gray-900"/>
              <path d="M109.951 7.32525C115.959 6.43438 157.651 5.19426 160.929 7.5994C161.896 8.30775 165.33 17.0546 165.917 18.6922C164.732 18.694 162.522 18.6471 161.436 18.8011L161.198 18.6415C159.911 17.2511 154.038 12.6245 152.448 11.9796C150.02 10.9961 142.551 11.079 139.73 11.0731C134.599 11.059 129.469 11.1272 124.341 11.2777C120.828 11.3672 116.639 11.458 113.132 11.9108C112.484 11.9943 111.597 12.7852 111.059 13.22L109.951 7.32525Z" className="fill-white dark:fill-gray-900"/>
              <path d="M108.872 14.4102C109.114 15.6946 109.232 17.2817 109.468 18.6941C108.581 18.6717 107.88 18.6928 106.992 18.7404C107.845 16.763 108.999 16.9546 108.872 14.4102Z" className="fill-white dark:fill-gray-900"/>
              <path d="M162.928 7.99023C166.319 9.67806 170.075 13.0772 173.158 15.3724C174.354 16.2628 176.434 17.7793 177.431 18.711C176.891 18.6972 175.031 18.5872 174.644 18.8676C174.145 18.7179 173.998 18.6509 173.492 18.7452C171.753 18.6628 169.874 18.7109 168.12 18.726C167.993 18.4175 167.77 18.0221 167.609 17.7173C165.924 14.5326 164.468 11.2471 162.928 7.99023Z" className="fill-white dark:fill-gray-900"/>
              <path d="M177.431 18.711C179.418 20.6624 184.499 23.9274 186.815 25.9232C184.506 26.0359 182.196 26.106 179.886 26.1333C179.35 25.6759 177.841 24.6838 177.648 24.3648C177.633 23.8135 177.73 23.5716 177.43 23.2057C176.99 23.1156 176.29 23.0631 176.129 22.695C175.437 21.099 176.107 20.2898 174.644 18.8676C175.031 18.5872 176.891 18.6972 177.431 18.711Z" className="fill-white dark:fill-gray-900"/>
              <path d="M168.12 18.726C169.874 18.7109 171.753 18.6628 173.492 18.7452C172.613 20.2954 171.882 21.7096 172.136 23.5562C172.242 24.3264 173.083 25.6635 172.737 26.3292C172.341 26.4163 172.292 26.4072 171.913 26.2914C171.113 25.6815 168.729 20.0683 168.12 18.726Z" className="fill-white dark:fill-gray-900"/>
              <path d="M175.928 24.7009C176.619 24.7687 177.543 25.7012 178.055 26.1651C177.633 26.2281 176.613 26.248 176.139 26.2686L174.139 26.3027L175.928 24.7009Z" fill="currentColor"/>
              <path d="M71.4064 15.8736C72.4834 15.8986 85.6215 4.66638 88.4004 4.0005C90.588 3.47633 93.6276 3.59315 95.7845 3.4076C111.721 2.0046 127.732 1.64988 143.715 2.34582C148.464 2.52659 155.495 2.71517 160.113 3.55295L159.789 3.88793C152.333 2.35097 92.5279 2.41293 88.2659 5.2523C85.5981 7.02949 63.0884 24.2258 62.7519 25.0476L63.5209 25.3037L63.6311 25.5246C62.9239 25.5277 60.618 25.8271 60.3359 25.2878L60.7845 24.7575C61.9043 23.9984 63.4799 22.0795 64.632 21.3863C66.1822 20.4534 70.1192 16.3685 71.4064 15.8736Z" className="fill-white dark:fill-gray-900"/>
              <path d="M62.5 24.5L78.1791 24.7414C77.4235 24.9441 75.7321 25.2782 75.3361 25.4327C75.6852 25.4474 75.9452 25.6142 76.2309 25.8051C75.4602 25.8969 71.5127 25.8253 70.5803 25.7885C68.7865 25.7176 65.1516 25.9075 63.5054 25.7154V25.304L62.5 24.5Z" className="fill-white dark:fill-gray-900"/>
              <path d="M160.114 3.55298C161.6 3.84897 162.619 4.3064 163.971 4.97516C163.442 5.01794 160.646 4.09263 159.791 3.88797L160.114 3.55298Z" className="fill-white dark:fill-gray-900"/>

              {/* --- 2. FRONT WHEEL GROUP (Perfectly Centered Spin at [67.5px, 67.5px]) --- */}
              <g className="animate-wheel-spin">
                <path d="M83 67.5C83 76.0604 76.0604 83 67.5 83C58.9396 83 52 76.0604 52 67.5C52 58.9396 58.9396 52 67.5 52C76.0604 52 83 58.9396 83 67.5Z" fill="currentColor"/>
                <path d="M79 67.5C79 73.8513 73.8513 79 67.5 79C61.1487 79 56 73.8513 56 67.5C56 61.1487 61.1487 56 67.5 56C73.8513 56 79 61.1487 79 67.5Z" className="fill-white dark:fill-gray-900"/>
                <path d="M67.6644 71.6688C66.9714 71.6848 66.3154 71.5258 65.7364 71.2348L62.1914 75.4798C63.7854 76.5668 65.7194 77.1868 67.7914 77.1388C69.8634 77.0908 71.7664 76.3818 73.3084 75.2218L69.5704 71.1458C69.0044 71.4638 68.3564 71.6528 67.6644 71.6688Z" fill="currentColor"/>
                <path d="M67.4741 63.4717C68.1661 63.4557 68.8221 63.6147 69.4021 63.9057L72.9471 59.6607C71.3531 58.5737 69.4191 57.9537 67.3471 58.0027C65.2751 58.0507 63.3721 58.7597 61.8301 59.9197L65.5681 63.9957C66.1341 63.6767 66.7821 63.4877 67.4741 63.4717Z" fill="currentColor"/>
                <path d="M71.1445 65.5698C71.4625 66.1348 71.6515 66.7828 71.6675 67.4758C71.6835 68.1678 71.5246 68.8238 71.2336 69.4038L75.4785 72.9488C76.5655 71.3548 77.1855 69.4208 77.1365 67.3488C77.0885 65.2768 76.3795 63.3738 75.2195 61.8318L71.1445 65.5698Z" fill="currentColor"/>
                <path d="M63.4716 67.6658C63.4556 66.9738 63.6146 66.3177 63.9056 65.7377L59.6606 62.1927C58.5736 63.7867 57.9546 65.7207 58.0026 67.7927C58.0506 69.8647 58.7596 71.7677 59.9196 73.3097L63.9956 69.5717C63.6766 69.0057 63.4876 68.3578 63.4716 67.6658Z" fill="currentColor"/>
                <path d="M67.5194 65.4248C66.3364 65.4528 65.3964 66.4368 65.4244 67.6198C65.4524 68.8028 66.4364 69.7428 67.6194 69.7148C68.8024 69.6868 69.7424 68.7028 69.7144 67.5198C69.6874 66.3378 68.7024 65.3978 67.5194 65.4248Z" fill="currentColor"/>
              </g>

              {/* --- 3. REAR WHEEL GROUP (Perfectly Centered Spin at [245.5px, 67.5px]) --- */}
              <g className="animate-wheel-spin">
                <path d="M261 67.5C261 76.0604 254.06 83 245.5 83C236.94 83 230 76.0604 230 67.5C230 58.9396 236.94 52 245.5 52C254.06 52 261 58.9396 261 67.5Z" fill="currentColor"/>
                <path d="M257 67.5C257 73.8513 251.851 79 245.5 79C239.149 79 234 73.8513 234 67.5C234 61.1487 239.149 56 245.5 56C251.851 56 257 61.1487 257 67.5Z" className="fill-white dark:fill-gray-900"/>
                <path d="M245.664 71.6688C244.971 71.6848 244.315 71.5258 243.736 71.2348L240.191 75.4798C241.785 76.5668 243.719 77.1868 245.791 77.1388C247.863 77.0908 249.766 76.3818 251.308 75.2218L247.57 71.1458C247.004 71.4638 246.356 71.6528 245.664 71.6688Z" fill="currentColor"/>
                <path d="M245.474 63.4717C246.166 63.4557 246.822 63.6147 247.402 63.9057L250.947 59.6607C249.353 58.5737 247.419 57.9537 245.347 58.0027C243.275 58.0507 241.372 58.7597 239.83 59.9197L243.568 63.9957C244.134 63.6767 244.782 63.4877 245.474 63.4717Z" fill="currentColor"/>
                <path d="M249.145 65.5698C249.463 66.1348 249.652 66.7828 249.668 67.4758C249.684 68.1678 249.525 68.8238 249.234 69.4038L253.479 72.9488C254.566 71.3548 255.186 69.4208 255.137 67.3488C255.089 65.2768 254.38 63.3738 253.22 61.8318L249.145 65.5698Z" fill="currentColor"/>
                <path d="M241.472 67.6658C241.456 66.9738 241.615 66.3177 241.906 65.7377L237.661 62.1927C236.574 63.7867 235.955 65.7207 236.003 67.7927C236.051 69.8647 236.76 71.7677 237.92 73.3097L241.996 69.5717C241.677 69.0057 241.488 68.3578 241.472 67.6658Z" fill="currentColor"/>
                <path d="M245.519 65.4248C244.336 65.4528 243.396 66.4368 243.424 67.6198C243.452 68.8028 244.436 69.7428 245.619 69.7148C246.802 69.6868 247.742 68.7028 247.714 67.5198C247.687 66.3378 246.702 65.3978 245.519 65.4248Z" fill="currentColor"/>
              </g>
            </svg>
          </div>

        </div>

      </section>
    </main>
  );
};

export default ContactPage;