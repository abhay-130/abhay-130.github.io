
import React, { useState } from 'react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
    {
        question: 'Architecture or Graphic Design? Which one comes first?',
        answer: 'Why choose? Architecture builds the structure, and Design gives it a soul. I use the logic of one to fuel the creativity of the other.',
    },
    {
        question: 'Do you actually code, or just use website builders?',
        answer: 'I get my hands dirty! I design in Figma and code in React & Tailwind, ensuring your website feels exactly as unique as the design.',
    },
    {
        question: 'Is it true that Architecture students at IIT never sleep?',
        answer: 'I just to say that my relationship with caffeine is very committed. I sleep enough to function, but stay awake enough to make sure every pixel is perfect.',
    },
    {
        question: 'Can you handle my project alongside your degree?',
        answer: 'Absolutely. I’ve mastered the art of time management (survival skill!). If I take your project on, I’m 100% dedicated to shipping it on time.',
    },
    {
        question: 'Where are you based? Can we meet?',
        answer: 'I’m currently on the beautiful IIT Roorkee campus (dodging monkeys). If you aren’t nearby, I’m always available for a virtual coffee chat!',
    },
    {
        question: 'Do your designs always work on the first try?',
        answer: 'Ha! I wish. My process is usually 10% designing and 90% fixing things I broke while trying to be "innovative."',
    },
    {
        question: 'What do you do when the WiFi goes down?',
        answer: 'I grab my camera and head out. Whether its street photography or hiking, I need fresh air to reset my creative brain.',
    },
    {
        question: 'Any hidden talents besides design?',
        answer: 'I make a mean Maggi and I’m surprisingly good at finding the best street food spots in any new city.',
    },
];

const FaqAccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-300 dark:border-gray-700 pt-0 sm:py-4">
            <button
                className="w-full flex justify-between items-center text-left gap-3 sm:gap-4"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className={`flex-1 text-base sm:text-lg md:text-xl font-bold ${isOpen ? 'text-theme-red' : ''}`}>{item.question}</h3>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 rounded-full bg-theme-red text-white transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-3 sm:mt-4' : 'max-h-0'}`}>
                <p className="text-sm sm:text-base text-light-text-muted dark:text-dark-text-muted leading-relaxed">{item.answer}</p>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    return (
        <section id="faq" className="flex flex-col md:flex-row items-start gap-8 sm:gap-10 lg:gap-12 w-full">
            {/* Left Side: Sticky Header */}
            <div className="md:w-1/3 flex flex-col items-start gap-4 sm:gap-6 md:sticky md:top-24 w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">Frequently Asked Questions</h2>
                <p className="text-sm sm:text-base text-light-text-muted dark:text-dark-text-muted leading-relaxed">
                    Can't find the answer you're looking for? Please chat with our friendly team.
                </p>
                <a href="#contact" className="mt-4 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full border-2 border-light-text dark:border-dark-text font-semibold hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-colors">
                    Ask More
                </a>
            </div>

            {/* Right Side: Scrollable List */}
            <div className="md:w-2/3 mt-8 md:mt-0 h-auto md:h-[360px] overflow-y-auto pr-0 md:pr-4 custom-scrollbar w-full">
                {faqData.map((item, index) => (
                    <FaqAccordionItem key={index} item={item} />
                ))}
            </div>
        </section>
    );
};

export default Faq;
