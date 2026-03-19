import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function OrderConfirmation() {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
        <span className="material-symbols-outlined text-4xl text-accent-gold">check_circle</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-serif mb-6 text-slate-900 dark:text-white">Thank You for <br/><span className="italic">Your Order</span></h1>
      
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
        Your order #{orderNumber} has been successfully placed. We've sent a confirmation email with your order details and tracking information.
      </p>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 border border-slate-100 dark:border-slate-800 mb-10 text-left">
        <h3 className="font-bold uppercase tracking-widest text-sm mb-4 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-4">What's Next?</h3>
        <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <li className="flex gap-3">
            <span className="material-symbols-outlined text-accent-gold text-lg">inventory_2</span>
            <span>Your order is currently being beautifully packaged by our artisans.</span>
          </li>
          <li className="flex gap-3">
            <span className="material-symbols-outlined text-accent-gold text-lg">local_shipping</span>
            <span>You will receive a shipping notification once your package is dispatched.</span>
          </li>
          <li className="flex gap-3">
            <span className="material-symbols-outlined text-accent-gold text-lg">support_agent</span>
            <span>If you have any questions, our concierge team is always here to help.</span>
          </li>
        </ul>
      </div>

      <Link to="/shop">
        <Button size="lg">Return to Store</Button>
      </Link>
    </div>
  );
}
