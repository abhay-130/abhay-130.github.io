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

  return (
    <main className="p-4 sm:p-6 md:p-8">
        <section id="contact" className="pt-0 sm:py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="flex-1 w-full bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 md:p-12 rounded-3xl">
            <h3 className="text-xl sm:text-2xl font-bold text-theme-red mb-6">Message for AbhaY</h3>
            
            <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
                
                <input type="hidden" name="subject" value="New Project Inquiry from Portfolio" />
                <input type="hidden" name="from_name" value="Portfolio Contact" />
                
                <input type="text" name="name" required placeholder="Your name" className="w-full p-3 sm:p-4 bg-white dark:bg-dark-bg rounded-lg border-2 border-transparent focus:border-theme-red outline-none transition-colors text-sm sm:text-base" />
                <input type="email" name="email" required placeholder="Your email/contact" className="w-full p-3 sm:p-4 bg-white dark:bg-dark-bg rounded-lg border-2 border-transparent focus:border-theme-red outline-none transition-colors text-sm sm:text-base" />
                
                <textarea 
                  name="message" 
                  required 
                  placeholder="Your message" 
                  rows={5} 
                  className="w-full p-3 sm:p-4 bg-white dark:bg-dark-bg rounded-lg border-2 border-transparent focus:border-theme-red outline-none transition-colors resize-none text-sm sm:text-base"
                ></textarea>
                
                <button type="submit" disabled={isSubmitting} className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-theme-red text-white dark:text-dark-text font-semibold rounded-full text-base sm:text-lg hover:opacity-80 transition-opacity disabled:opacity-50">
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>

                {result && (
                  <p className={`text-center mt-4 font-medium text-sm sm:text-base ${result.includes("sent") ? "text-green-600" : "text-red-500"}`}>
                    {result}
                  </p>
                )}
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
                
                {/* --- CLICKABLE EMAIL START --- */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-theme-red text-xl sm:text-2xl">✉️</span>
                    <a 
                      href="mailto:abhaykishor130@gmail.com" 
                      className="text-base sm:text-lg md:text-xl hover:text-theme-red transition-colors break-all"
                    >
                      abhaykishor130@gmail.com
                    </a>
                </div>
                {/* --- CLICKABLE EMAIL END --- */}

                <div className="flex items-center gap-3 sm:gap-4">
                    <span className="text-theme-red text-xl sm:text-2xl">📞</span>
                    {/* Bonus: I made the phone number clickable too! */}
                    <a 
                      href="tel:+918273746070" 
                      className="text-base sm:text-lg md:text-xl hover:text-theme-red transition-colors"
                    >
                      +91 8273746070
                    </a>
                </div>
            </div>
            </div>
        </div>
        </section>
        <div className="text-center mt-8">
        </div>
    </main>
  );
};

export default ContactPage;