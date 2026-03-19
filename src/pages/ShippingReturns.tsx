export default function ShippingReturns() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
         <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Customer Care</span>
        <h1 className="text-5xl font-serif mb-6 text-slate-900 dark:text-white">Shipping & <span className="italic">Returns</span></h1>
        <div className="w-24 h-px bg-accent-gold mx-auto"></div>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-serif mb-6 text-slate-900 dark:text-white flex items-center gap-3">
            <span className="material-symbols-outlined text-accent-gold text-4xl">local_shipping</span> Shipping Policy
          </h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              We process all orders within 1-2 business days. Once beautifully wrapped and dispatched from our New York studio, you will receive an email containing a tracking number.
            </p>
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 border border-slate-100 dark:border-slate-800 my-8">
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-4">
                  <span className="font-bold text-slate-900 dark:text-white">Standard Domestic (US)</span>
                  <span>3-5 Business Days — $15 (Free over $200)</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-4">
                  <span className="font-bold text-slate-900 dark:text-white">Express Domestic (US)</span>
                  <span>1-2 Business Days — $35</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span className="font-bold text-slate-900 dark:text-white">International Delivery</span>
                  <span>7-14 Business Days — Calculated at checkout</span>
                </li>
              </ul>
            </div>
            <p className="text-sm">
              *Please note that international customers are responsible for any applicable duties and taxes charged by their country's customs office.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-serif mb-6 text-slate-900 dark:text-white flex items-center gap-3">
            <span className="material-symbols-outlined text-accent-gold text-4xl">assignment_return</span> Returns & Exchanges
          </h2>
          <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              We want you to feel completely confident in your Silkura pieces. If something isn't quite right, we accept returns and exchanges within <strong>30 days of delivery</strong>.
            </p>
            <div className="border-l-4 border-accent-gold pl-6 py-2 my-8">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Conditions for Return:</h4>
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
  );
}
