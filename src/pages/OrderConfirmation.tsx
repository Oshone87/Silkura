import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function OrderConfirmation() {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="relative overflow-hidden">
      <div className="orb orb-pink w-80 h-80 top-20 -right-20 opacity-10" />
      <div className="orb orb-gold w-56 h-56 bottom-20 -left-10 opacity-10" />

      <div className="max-w-2xl mx-auto px-6 py-24 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/30 animate-glow-pulse">
            <span className="material-symbols-outlined text-4xl text-white">check_circle</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-slate-900 dark:text-white">Thank You for <br/><span className="italic gradient-text bg-gradient-to-r from-primary to-accent-gold">Your Order</span></h1>
          
          <p className="text-lg text-slate-500 mb-8 leading-relaxed font-light">
            Your order #{orderNumber} has been successfully placed. We've sent a confirmation email with your order details and tracking information.
          </p>
        </div>

        <div className="glass-card p-8 mb-10 text-left relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="absolute inset-0 shimmer opacity-3" />
          <h3 className="font-bold uppercase tracking-widest text-sm mb-4 text-slate-900 dark:text-white border-b border-primary/15 pb-4 relative z-10">What's Next?</h3>
          <ul className="space-y-4 text-sm text-slate-500 relative z-10">
            {[
              { icon: 'inventory_2', text: 'Your order is currently being beautifully packaged by our artisans.' },
              { icon: 'local_shipping', text: 'You will receive a shipping notification once your package is dispatched.' },
              { icon: 'support_agent', text: 'If you have any questions, our concierge team is always here to help.' },
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <span className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-base">{item.icon}</span>
                </span>
                <span className="mt-1">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Link to="/shop">
            <Button size="lg">Return to Store</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
