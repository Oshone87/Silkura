import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const scrollRef = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I care for my silk garments?",
      answer: "We recommend hand washing your silk garments in cold water using a gentle, pH-neutral detergent formulated specifically for silk. Never wring or twist the fabric. Lay flat to dry away from direct sunlight."
    },
    {
      question: "What is your return policy?",
      answer: "We offer elegant 30-day returns on unworn, unwashed items with tags still attached. Hygienic liners must be intact on all panties and bodysuits. Visit our Shipping & Returns page for more details."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship globally! International shipping rates are calculated at checkout based on your delivery address. Please note that customs duties and taxes are the responsibility of the recipient."
    },
    {
      question: "How do I find my size?",
      answer: "Our sizes generally run true to standard US sizing. We highly recommend reviewing our detailed Size Guide, which provides specific measurements for each category, to ensure the perfect fit."
    },
    {
      question: "Are your materials sustainably sourced?",
      answer: "Absolutely. Our Mulberry silk is ethically sourced from sustainable mills that prioritize environmental stewardship, and our lace is produced in small batches to minimize waste."
    }
  ];

  return (
    <div ref={scrollRef} className="relative overflow-hidden">
      <div className="orb orb-pink w-72 h-72 -top-20 -right-20 opacity-10" />
      <div className="orb orb-gold w-56 h-56 bottom-40 -left-10 opacity-10" />

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Support</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-slate-900 dark:text-white">Frequently Asked <span className="italic gradient-text bg-gradient-to-r from-primary to-accent-gold">Questions</span></h1>
          <div className="w-24 h-0.5 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`animate-on-scroll stagger-${index + 1} glass-card overflow-hidden transition-all duration-500 ${openIndex === index ? 'shadow-lg shadow-primary/10' : 'hover:shadow-md hover:shadow-primary/5'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
              >
                <h3 className="text-lg md:text-xl font-serif text-slate-900 dark:text-white pr-4 group-hover:text-primary-dark dark:group-hover:text-primary transition-colors duration-300">{faq.question}</h3>
                <ChevronDown className={`w-5 h-5 text-accent-gold flex-shrink-0 transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-6 md:px-8 pb-6 md:pb-8 text-slate-500 dark:text-slate-400 leading-relaxed font-light">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
