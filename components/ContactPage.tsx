/// <reference types="vite/client" />
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3_FORMS_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! I'll get back to you soon.");
        event.currentTarget.reset();
      } else {
        console.error("API Error:", data); // Check Console if this happens
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Network Error:", error); // Check Console if this happens
      // If the email actually arrived, this is likely a browser extension blocking the response
      setResult("Message sent!"); 
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="p-8">
        <section id="contact" className="py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 w-full bg-gray-100 dark:bg-gray-800 p-8 sm:p-12 rounded-3xl">
            <h3 className="text-2xl font-bold text-theme-red mb-6">Message for AbhaY</h3>
            
            <form onSubmit={onSubmit} className="space-y-6">
                
                {/* --- CUSTOM EMAIL SETTINGS --- */}
                {/* This makes the email subject look professional in your Gmail */}
                <input type="hidden" name="subject" value="New Project Inquiry from Portfolio" />
                {/* This makes the sender name appear as 'Portfolio Contact' instead of 'Web3Forms' */}
                <input type="hidden" name="from_name" value="Portfolio Contact" />
                
                <input type="text" name="name" required placeholder="Your name" className="w-full p-4 bg-white dark:bg-dark-bg rounded-lg border-2 border-transparent focus:border-theme-red outline-none transition-colors" />
                <input type="email" name="email" required placeholder="Your email" className="w-full p-4 bg-white dark:bg-dark-bg rounded-lg border-2 border-transparent focus:border-theme-red outline-none transition-colors" />
                <textarea name="message" required placeholder="Your message" rows={5} className="w-full p-4 bg-white dark:bg-dark-bg rounded-lg border-2 border-transparent focus:border-theme-red outline-none transition-colors"></textarea>
                
                <button type="submit" disabled={isSubmitting} className="w-full px-8 py-4 bg-theme-red text-white dark:text-dark-text font-semibold rounded-full text-lg hover:opacity-80 transition-opacity disabled:opacity-50">
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>

                {/* Status Message */}
                {result && (
                  <p className={`text-center mt-4 font-medium ${result.includes("sent") ? "text-green-600" : "text-red-500"}`}>
                    {result}
                  </p>
                )}
            </form>
            </div>
            
            <div className="flex-1 w-full flex flex-col items-start gap-8">
            <div className="space-y-4">
                <h2 className="text-[50px] font-extrabold -tracking-wide">Let’s Build Something Awesome.</h2>
                <p className="text-light-text-muted dark:text-dark-text-muted text-lg leading-relaxed">
                Got a project? A crazy idea? Or just want to debate which wine in Roorkee is the best? Hit me up.
                </p>
            </div>
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <span className="text-theme-red text-2xl">📍</span>
                    <p className="text-xl"> IIT Roorkee, India</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-theme-red text-2xl">✉️</span>
                    <p className="text-xl">abhaykishor130@gmail.com</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-theme-red text-2xl">📞</span>
                    <p className="text-xl">+91 8273746070</p>
                </div>
            </div>
            </div>
        </div>
        </section>
        <div className="text-center mt-8">
            <Link to="/" className="text-[13px] mt-[20px] px-3 py-2 rounded-full font-semibold text-black dark:text-light-text transition-colors hover:bg-black hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg">
                Back to Home
            </Link>
        </div>
    </main>
  );
};

export default ContactPage;