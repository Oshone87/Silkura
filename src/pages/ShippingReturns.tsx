import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ShippingReturns() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="relative overflow-hidden">
      <div className="orb orb-pink w-72 h-72 -top-20 -left-20 opacity-10" />
      <div className="orb orb-gold w-56 h-56 bottom-20 -right-10 opacity-10" />

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Customer Care</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-slate-900 dark:text-white">Shipping & <span className="italic gradient-text bg-gradient-to-r from-primary to-accent-gold">Returns</span></h1>
          <div className="w-24 h-0.5 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-16">
          <section className="animate-on-scroll">
            <h2 className="text-3xl font-serif mb-6 text-slate-900 dark:text-white flex items-center gap-3">
              <span className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center text-white shadow-md shadow-primary/20">
                <span className="material-symbols-outlined">local_shipping</span>
              </span>
              Shipping Policy
            </h2>
            <div className="space-y-6 text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              <p>
                We process all orders within 1-2 business days. Once beautifully wrapped and dispatched from our New York studio, you will receive an email containing a tracking number.
              </p>
              <div className="glass-card p-8 my-8">
                <ul className="space-y-4">
                  {[
                    { label: 'Standard Domestic (US)', detail: '3-5 Business Days — $15 (Free over $200)' },
                    { label: 'Express Domestic (US)', detail: '1-2 Business Days — $35' },
                    { label: 'International Delivery', detail: '7-14 Business Days — Calculated at checkout' },
                  ].map((item, idx) => (
                    <li key={idx} className={`flex justify-between ${idx < 2 ? 'border-b border-primary/10 pb-4' : 'pt-2'}`}>
                      <span className="font-bold text-slate-900 dark:text-white">{item.label}</span>
                      <span>{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm italic">
                *Please note that international customers are responsible for any applicable duties and taxes charged by their country's customs office.
              </p>
            </div>
          </section>

          <section className="animate-on-scroll stagger-2">
            <h2 className="text-3xl font-serif mb-6 text-slate-900 dark:text-white flex items-center gap-3">
              <span className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center text-white shadow-md shadow-primary/20">
                <span className="material-symbols-outlined">assignment_return</span>
              </span>
              Returns & Exchanges
            </h2>
            <div className="space-y-6 text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              <p>
                We want you to feel completely confident in your Silkura pieces. If something isn't quite right, we accept returns and exchanges within <strong className="text-slate-800 dark:text-white font-medium">30 days of delivery</strong>.
              </p>
              <div className="border-l-4 border-accent-gold pl-6 py-2 my-8 bg-accent-gold/5 rounded-r-xl p-6">
                <h4 className="font-bold text-slate-900 dark:text-white mb-3">Conditions for Return:</h4>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Items must be unworn, unwashed, and in their original condition.</li>
                  <li>All original tags must remain attached.</li>
                  <li>For hygiene reasons, panties and bodysuits must have the protective liner intact. If the liner is removed or altered, the item becomes final sale.</li>
                </ul>
              </div>
              <p>
                To initiate a return or exchange, please visit our Returns Portal or contact our concierge team with your order number. A return shipping label will be provided. A $10 return processing fee will be deducted from your refund for domestic returns.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
