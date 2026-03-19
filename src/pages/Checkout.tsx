import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function Checkout() {
  const { items, subtotal, clearCart, itemCount } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'usdt'>('bank');

  if (itemCount === 0) {
    return <div className="p-20 text-center text-xl font-serif">Your cart is empty. Please add items to checkout.</div>;
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
    <div className="max-w-7xl mx-auto px-6 py-12 lg:flex gap-16 flex-row-reverse">
      
      {/* Order Summary (Right on Desktop, Top on Mobile) */}
      <div className="lg:w-5/12 mb-12 lg:mb-0">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 border border-slate-100 dark:border-slate-800 sticky top-28 text-slate-900 dark:text-white">
          <h3 className="text-xl font-serif mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">Order Summary</h3>
          
          <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
            {items.map((item, i) => (
              <div key={i} className="flex gap-4 items-center">
                <div className="relative">
                  <div className="w-16 h-20 rounded bg-cover bg-center border border-slate-200 dark:border-slate-700" style={{ backgroundImage: `url('${item.product.image}')` }} />
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-slate-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1 text-sm">
                  <h4 className="font-bold font-serif">{item.product.name}</h4>
                  <p className="text-slate-500 italic text-xs">{item.color} / {item.size}</p>
                </div>
                <div className="font-bold text-sm text-accent-gold">
                  ₦{(item.product.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-3 text-sm border-t border-slate-200 dark:border-slate-700 pt-6">
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Shipping {shipping === 0 && <span className="text-green-600 ml-1">(Free)</span>}</span>
              <span>₦{shipping.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-400">
              <span>Taxes (8%)</span>
              <span>₦{taxes.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="border-t border-slate-200 dark:border-slate-700 mt-6 pt-6">
            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span className="text-accent-gold">₦{total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Form (Left on Desktop, Bottom on Mobile) */}
      <div className="lg:w-7/12">
        <h1 className="text-3xl font-serif mb-8 text-slate-900 dark:text-white">Secure Checkout</h1>
        
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Contact */}
          <section>
            <h2 className="text-xl font-serif mb-4 text-slate-900 dark:text-white">Contact Information</h2>
            <InputField label="Email Address" type="email" required placeholder="your@email.com" />
          </section>

          {/* Shipping */}
          <section>
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
          <section>
            <h2 className="text-xl font-serif mb-4 text-slate-900 dark:text-white">Payment Method</h2>
            
            <div className="space-y-4">
              {/* Bank Transfer Option */}
              <label className={`block border rounded-xl p-4 cursor-pointer transition-colors ${paymentMethod === 'bank' ? 'border-accent-gold bg-accent-gold/5 dark:bg-accent-gold/10' : 'border-slate-200 dark:border-slate-700 hover:border-accent-gold/50'}`}>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full border-2 border-accent-gold flex items-center justify-center p-0.5">
                    {paymentMethod === 'bank' && <div className="w-full h-full bg-accent-gold rounded-full" />}
                  </div>
                  <div className="flex-1 flex justify-between items-center text-slate-900 dark:text-white font-medium">
                    <span>Direct Bank Transfer (NGN)</span>
                    <span className="material-symbols-outlined text-slate-400">account_balance</span>
                  </div>
                </div>
                {paymentMethod === 'bank' && (
                  <div className="mt-4 ml-9 text-sm text-slate-600 dark:text-slate-400 p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                    <p className="mb-2">Please transfer the total amount to the following Nigerian bank account:</p>
                    <p className="font-bold text-slate-900 dark:text-white mb-1">Bank: GTBank</p>
                    <p className="font-bold text-slate-900 dark:text-white mb-1">Account Name: Silkura Ltd</p>
                    <p className="font-bold text-slate-900 dark:text-white mb-3">Account Number: 0123456789</p>
                    <p className="italic text-xs">Your order will be processed once payment is confirmed.</p>
                  </div>
                )}
                <input type="radio" value="bank" checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} className="hidden" />
              </label>

              {/* USDT Crypto Option */}
              <label className={`block border rounded-xl p-4 cursor-pointer transition-colors ${paymentMethod === 'usdt' ? 'border-accent-gold bg-accent-gold/5 dark:bg-accent-gold/10' : 'border-slate-200 dark:border-slate-700 hover:border-accent-gold/50'}`}>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full border-2 border-accent-gold flex items-center justify-center p-0.5">
                    {paymentMethod === 'usdt' && <div className="w-full h-full bg-accent-gold rounded-full" />}
                  </div>
                  <div className="flex-1 flex justify-between items-center text-slate-900 dark:text-white font-medium">
                    <span>USDT Crypto (TRC20)</span>
                    <span className="text-teal-500 font-bold">₮</span>
                  </div>
                </div>
                {paymentMethod === 'usdt' && (
                  <div className="mt-4 ml-9 text-sm text-slate-600 dark:text-slate-400 p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 break-all">
                    <p className="mb-2">Please send the exact USDT amount to our TRC20 wallet address:</p>
                    <p className="font-mono font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-900 p-2 rounded selectable mb-3 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm">
                      TXZYqVp4bQ7M1m...3h9KxN5W
                    </p>
                    <InputField label="Transaction Hash / ID" placeholder="Paste TXID here" required={paymentMethod === 'usdt'} />
                  </div>
                )}
                <input type="radio" value="usdt" checked={paymentMethod === 'usdt'} onChange={() => setPaymentMethod('usdt')} className="hidden" />
              </label>
            </div>
          </section>

          <Button type="submit" size="lg" fullWidth>
            Complete Order • ₦{total.toLocaleString()}
          </Button>
        </form>
      </div>

    </div>
  );
}
