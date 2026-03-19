import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import { Trash2 } from 'lucide-react';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, subtotal, itemCount } = useCart();
  const navigate = useNavigate();

  if (itemCount === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-serif mb-6 text-slate-900 dark:text-white border-b border-primary/20 pb-4">Your Cart is Empty</h1>
        <p className="text-slate-500 mb-8">It feels a little light in here. Discover our latest collections.</p>
        <Link to="/shop">
          <Button size="lg">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:flex gap-12">
      <div className="lg:w-2/3">
        <h1 className="text-4xl font-serif mb-8 text-slate-900 dark:text-white border-b border-primary/20 pb-4">Your Cart ({itemCount} items)</h1>
        
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={`${item.product.id}-${index}`} className="flex gap-6 py-6 border-b border-slate-200 dark:border-slate-800">
              <Link to={`/product/${item.product.id}`} className="w-24 h-32 md:w-32 md:h-40 flex-shrink-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url('${item.product.image}')` }} />
              
              <div className="flex-1 flex flex-col justify-between py-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-lg text-slate-900 dark:text-white">
                      <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
                    </h3>
                    <p className="text-sm text-slate-500 italic mt-1">
                      {item.color} {item.size ? ` / Size ${item.size}` : ''}
                    </p>
                  </div>
                  <p className="font-bold text-accent-gold">₦{(item.product.price * item.quantity).toLocaleString()}</p>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-full h-[40px]">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size, item.color)} className="px-3 text-slate-500 hover:text-slate-900 dark:hover:text-white">-</button>
                    <span className="font-bold w-4 text-center text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size, item.color)} className="px-3 text-slate-500 hover:text-slate-900 dark:hover:text-white">+</button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                    className="text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium"
                  >
                    <Trash2 className="w-4 h-4" /> <span className="hidden sm:inline">Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-1/3 mt-12 lg:mt-0">
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 border border-slate-100 dark:border-slate-800 sticky top-28">
          <h3 className="text-xl font-serif mb-6 text-slate-900 dark:text-white">Order Summary</h3>
          
          <div className="space-y-4 text-sm mb-6">
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="flex justify-between text-slate-600 dark:text-slate-300">
              <span>Taxes</span>
              <span>Calculated at checkout</span>
            </div>
          </div>
          
          <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mb-8">
            <div className="flex justify-between font-bold text-lg text-slate-900 dark:text-white">
              <span>Estimated Total</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
          </div>
          
          <Button fullWidth size="lg" onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </Button>
          
          <div className="mt-6 flex items-center justify-center gap-4 opacity-50 grayscale">
            {/* Payment icons mock */}
            <span className="font-bold text-xl uppercase tracking-tighter">VISA</span>
            <span className="font-bold text-xl uppercase tracking-tighter">AMEX</span>
            <span className="font-bold text-xl uppercase tracking-tighter">MC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
