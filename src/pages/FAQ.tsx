export default function FAQ() {
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
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Support</span>
        <h1 className="text-5xl font-serif mb-6 text-slate-900 dark:text-white">Frequently Asked <span className="italic">Questions</span></h1>
        <div className="w-24 h-px bg-accent-gold mx-auto"></div>
      </div>

      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-xl font-serif mb-4 text-slate-900 dark:text-white">{faq.question}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
