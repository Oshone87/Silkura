import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import { Trash2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, subtotal, itemCount } = useCart();
  const navigate = useNavigate();
  const scrollRef = useScrollAnimation();

  if (itemCount === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="animate-fade-in-up">
          <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-3xl text-white">shopping_bag</span>
          </div>
          <h1 className="text-4xl font-serif mb-6 text-slate-900 dark:text-white">Your Cart is Empty</h1>
          <p className="text-slate-400 mb-8 font-light text-lg">It feels a little light in here. Discover our latest collections.</p>
          <Link to="/shop">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={scrollRef} className="relative overflow-hidden">
      <div className="orb orb-pink w-72 h-72 -top-20 -right-20 opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 py-12 lg:flex gap-12 relative z-10">
        <div className="lg:w-2/3">
          <div className="animate-on-scroll">
            <span className="text-accent-gold font-medium tracking-[0.3em] uppercase text-xs mb-3 block">Shopping Bag</span>
            <h1 className="text-4xl font-serif mb-8 text-slate-900 dark:text-white border-b border-primary/15 pb-4">Your Cart <span className="text-slate-400 font-light text-2xl">({itemCount} items)</span></h1>
          </div>
          
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={`${item.product.id}-${index}`} className={`animate-on-scroll stagger-${index + 1} flex gap-6 py-6 border-b border-primary/10 group`}>
                <Link to={`/product/${item.product.id}`} className="w-24 h-32 md:w-32 md:h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-md shadow-primary/5 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.product.image}')` }} 
                  />
                </Link>
                
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif text-lg text-slate-900 dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors duration-300">
                        <Link to={`/product/${item.product.id}`}>{item.product.name}</Link>
                      </h3>
                      <p className="text-sm text-slate-400 italic mt-1">
                        {item.color} {item.size ? ` / Size ${item.size}` : ''}
                      </p>
                    </div>
                    <p className="font-bold gradient-text bg-gradient-to-r from-primary to-accent-gold text-lg">₦{(item.product.price * item.quantity).toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-primary/15 rounded-full h-[40px] transition-colors hover:border-primary/30">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size, item.color)} className="px-3 text-slate-400 hover:text-primary transition-colors duration-300">-</button>
                      <span className="font-bold w-4 text-center text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size, item.color)} className="px-3 text-slate-400 hover:text-primary transition-colors duration-300">+</button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                      className="text-slate-300 hover:text-red-400 transition-all duration-300 flex items-center gap-1 text-sm font-medium hover:scale-105"
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
          <div className="glass-card p-8 sticky top-28 animate-on-scroll stagger-3 relative overflow-hidden">
            <div className="absolute inset-0 shimmer opacity-3" />
            <h3 className="text-xl font-serif mb-6 text-slate-900 dark:text-white relative z-10">Order Summary</h3>
            
            <div className="space-y-4 text-sm mb-6 relative z-10">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Shipping</span>
                <span className="italic text-slate-400">Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Taxes</span>
                <span className="italic text-slate-400">Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t border-primary/15 pt-4 mb-8 relative z-10">
              <div className="flex justify-between font-bold text-lg text-slate-900 dark:text-white">
                <span>Estimated Total</span>
                <span className="gradient-text bg-gradient-to-r from-primary to-accent-gold">₦{subtotal.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="relative z-10">
              <Button fullWidth size="lg" onClick={() => navigate('/checkout')}>
                Proceed to Checkout
              </Button>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-4 opacity-40 relative z-10">
              {/* Payment icons mock */}
              <span className="font-bold text-xl uppercase tracking-tighter">VISA</span>
              <span className="font-bold text-xl uppercase tracking-tighter">AMEX</span>
              <span className="font-bold text-xl uppercase tracking-tighter">MC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
