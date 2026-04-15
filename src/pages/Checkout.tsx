import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Checkout() {
  const { items, subtotal, clearCart, itemCount } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'usdt'>('bank');
  const scrollRef = useScrollAnimation();

  if (itemCount === 0) {
    return <div className="p-20 text-center text-xl font-serif text-slate-900 dark:text-white">Your cart is empty. Please add items to checkout.</div>;
  }

  const shipping = subtotal > 300000 ? 0 : 25000;
  const taxes = subtotal * 0.08;
  const total = subtotal + shipping + taxes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate('/order-confirmation');
  };

  return (
    <div ref={scrollRef} className="relative overflow-hidden">
      <div className="orb orb-pink w-72 h-72 -top-20 -right-20 opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 py-12 lg:flex gap-16 flex-row-reverse relative z-10">
        
        {/* Order Summary (Right on Desktop, Top on Mobile) */}
        <div className="lg:w-5/12 mb-12 lg:mb-0">
          <div className="glass-card p-8 sticky top-28 text-slate-900 dark:text-white animate-on-scroll relative overflow-hidden">
            <div className="absolute inset-0 shimmer opacity-3" />
            <h3 className="text-xl font-serif mb-6 border-b border-primary/15 pb-4 relative z-10">Order Summary</h3>
            
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 relative z-10">
              {items.map((item, i) => (
                <div key={i} className="flex gap-4 items-center group">
                  <div className="relative">
                    <div className="w-16 h-20 rounded-lg bg-cover bg-center border border-primary/10 shadow-sm transition-transform duration-300 group-hover:scale-105" style={{ backgroundImage: `url('${item.product.image}')` }} />
                    <span className="absolute -top-2 -right-2 w-5 h-5 gradient-primary text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 text-sm">
                    <h4 className="font-bold font-serif">{item.product.name}</h4>
                    <p className="text-slate-400 italic text-xs">{item.color} / {item.size}</p>
                  </div>
                  <div className="font-bold text-sm text-accent-gold">
                    ₦{(item.product.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 text-sm border-t border-primary/15 pt-6 relative z-10">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Shipping {shipping === 0 && <span className="text-green-500 ml-1 font-medium">(Free)</span>}</span>
                <span>₦{shipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Taxes (8%)</span>
                <span>₦{taxes.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="border-t border-primary/15 mt-6 pt-6 relative z-10">
              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span className="gradient-text bg-gradient-to-r from-primary to-accent-gold">₦{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Checkout Form (Left on Desktop, Bottom on Mobile) */}
        <div className="lg:w-7/12">
          <div className="animate-on-scroll">
            <span className="text-accent-gold font-medium tracking-[0.3em] uppercase text-xs mb-3 block">Checkout</span>
            <h1 className="text-3xl md:text-4xl font-serif mb-8 text-slate-900 dark:text-white">Secure Checkout</h1>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Contact */}
            <section className="animate-on-scroll stagger-1">
              <h2 className="text-xl font-serif mb-4 text-slate-900 dark:text-white">Contact Information</h2>
              <InputField label="Email Address" type="email" required placeholder="your@email.com" />
            </section>

            {/* Shipping */}
            <section className="animate-on-scroll stagger-2">
              <h2 className="text-xl font-serif mb-4 text-slate-900 dark:text-white">Shipping Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField label="First Name" required />
                <InputField label="Last Name" required />
                <InputField label="Address" className="sm:col-span-2" required />
                <InputField label="City" required />
                <InputField label="State / Province" required />
                <InputField label="ZIP / Postal Code" required />
                <InputField label="Country" required defaultValue="Nigeria" />
              </div>
            </section>

            {/* Payment */}
            <section className="animate-on-scroll stagger-3">
              <h2 className="text-xl font-serif mb-4 text-slate-900 dark:text-white">Payment Method</h2>
              
              <div className="space-y-4">
                {/* Bank Transfer Option */}
                <label className={`block rounded-2xl p-5 cursor-pointer transition-all duration-300 ${paymentMethod === 'bank' ? 'glass-card shadow-md shadow-primary/10 border-primary/30' : 'border border-slate-200 dark:border-slate-700 hover:border-primary/30'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center p-0.5">
                      {paymentMethod === 'bank' && <div className="w-full h-full gradient-primary rounded-full" />}
                    </div>
                    <div className="flex-1 flex justify-between items-center text-slate-900 dark:text-white font-medium">
                      <span>Direct Bank Transfer (NGN)</span>
                      <span className="material-symbols-outlined text-slate-400">account_balance</span>
                    </div>
                  </div>
                  {paymentMethod === 'bank' && (
                    <div className="mt-4 ml-9 text-sm text-slate-500 p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-primary/10">
                      <p className="mb-2">Please transfer the total amount to the following Nigerian bank account:</p>
                      <p className="font-bold text-slate-900 dark:text-white mb-1">Bank: GTBank</p>
                      <p className="font-bold text-slate-900 dark:text-white mb-1">Account Name: Silkura Ltd</p>
                      <p className="font-bold text-slate-900 dark:text-white mb-3">Account Number: 0123456789</p>
                      <p className="italic text-xs text-slate-400">Your order will be processed once payment is confirmed.</p>
                    </div>
                  )}
                  <input type="radio" value="bank" checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} className="hidden" />
                </label>

                {/* USDT Crypto Option */}
                <label className={`block rounded-2xl p-5 cursor-pointer transition-all duration-300 ${paymentMethod === 'usdt' ? 'glass-card shadow-md shadow-primary/10 border-primary/30' : 'border border-slate-200 dark:border-slate-700 hover:border-primary/30'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center p-0.5">
                      {paymentMethod === 'usdt' && <div className="w-full h-full gradient-primary rounded-full" />}
                    </div>
                    <div className="flex-1 flex justify-between items-center text-slate-900 dark:text-white font-medium">
                      <span>USDT Crypto (TRC20)</span>
                      <span className="text-teal-500 font-bold">₮</span>
                    </div>
                  </div>
                  {paymentMethod === 'usdt' && (
                    <div className="mt-4 ml-9 text-sm text-slate-500 p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-primary/10 break-all">
                      <p className="mb-2">Please send the exact USDT amount to our TRC20 wallet address:</p>
                      <p className="font-mono font-bold text-slate-900 dark:text-white bg-slate-100/80 dark:bg-slate-900/80 p-3 rounded-lg selectable mb-3 border border-primary/10 text-xs sm:text-sm">
                        TXZYqVp4bQ7M1m...3h9KxN5W
                      </p>
                      <InputField label="Transaction Hash / ID" placeholder="Paste TXID here" required={paymentMethod === 'usdt'} />
                    </div>
                  )}
                  <input type="radio" value="usdt" checked={paymentMethod === 'usdt'} onChange={() => setPaymentMethod('usdt')} className="hidden" />
                </label>
              </div>
            </section>

            <div className="animate-on-scroll stagger-4">
              <Button type="submit" size="lg" fullWidth>
                Complete Order • ₦{total.toLocaleString()}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
