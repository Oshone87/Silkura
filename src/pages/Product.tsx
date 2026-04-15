import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import { Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const scrollRef = useScrollAnimation();
  
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || 'Classic');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return <div className="p-20 text-center text-2xl font-serif text-slate-900 dark:text-white">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div ref={scrollRef} className="relative overflow-hidden">
      <div className="orb orb-pink w-72 h-72 -top-20 -right-20 opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 lg:flex gap-16 relative z-10">
        {/* Images */}
        <div className="lg:w-1/2 space-y-4 animate-on-scroll">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-primary/10 group relative cursor-zoom-in">
            {product.image.endsWith('.mov') || product.image.endsWith('.mp4') ? (
              <video
                src={product.image}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${product.image}')` }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Details */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 animate-on-scroll stagger-2">
          <nav className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-primary transition-colors duration-300">Home</Link>
            <span className="text-primary/30">/</span>
            <Link to="/shop" className="hover:text-primary transition-colors duration-300">Shop</Link>
            <span className="text-primary/30">/</span>
            <span className="text-slate-700 dark:text-slate-300">{product.name}</span>
          </nav>

          <h1 className="text-4xl lg:text-5xl font-serif mb-4 text-slate-900 dark:text-white">{product.name}</h1>
          <p className="text-2xl font-bold gradient-text bg-gradient-to-r from-primary to-accent-gold mb-6">₦{product.price.toLocaleString()}</p>

          <div className="flex items-center gap-1 mb-8">
            {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-accent-gold fill-current" />)}
            <span className="text-sm text-slate-400 ml-2 italic">128 Reviews</span>
          </div>

          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 font-light text-lg">
            {product.description || "The epitome of modern luxury. Hand-crafted with our signature silk to provide unparalleled comfort and elegance. Perfect for lounging or layering."}
          </p>

          <div className="border-t border-primary/15 pt-8 mt-8 space-y-6">
            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Color: </span>
                  <span className="text-sm italic text-slate-400">{selectedColor}</span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-300 hover:scale-110 ${selectedColor === color ? 'border-primary scale-110 shadow-md shadow-primary/30' : 'border-transparent hover:border-primary/30'}`}
                      style={{ backgroundColor: color === 'Classic Black' || color === 'Black' || color === 'Midnight Blue' || color === 'Onyx Black' ? '#111' : color === 'Ivory White' || color === 'Cream' ? '#f8f8f8' : color === 'Rosewater Pink' || color === 'Rosewater' || color === 'Blush Pink' ? '#fadadd' : color === 'Burgundy' || color === 'Crimson Red' ? '#4A0404' : color === 'Champagne' || color === 'Soft Sand' ? '#F7E7CE' : '#ccc' }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Size:</span>
                <Link to="/size-guide" className="text-xs text-slate-400 hover:text-primary transition-colors duration-300 underline underline-offset-2">Size Guide</Link>
              </div>
              <div className="flex gap-3 flex-wrap">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105
                      ${selectedSize === size 
                        ? 'gradient-primary text-white shadow-md shadow-primary/30' 
                        : 'border border-slate-200 text-slate-600 hover:border-primary dark:border-slate-700 dark:text-slate-300'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-full h-[56px] transition-colors hover:border-primary/30">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-5 text-lg text-slate-400 hover:text-primary transition-colors duration-300">-</button>
                <span className="font-bold w-4 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-5 text-lg text-slate-400 hover:text-primary transition-colors duration-300">+</button>
              </div>
              <Button 
                size="lg" 
                fullWidth 
                onClick={handleAddToCart}
                className={isAdded ? "bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/30" : ""}
              >
                {isAdded ? "✓ Added to Cart" : "Add to Cart"}
              </Button>
            </div>
          </div>

          <div className="mt-12 space-y-4 text-sm text-slate-400">
            <p className="flex items-center gap-3"><span className="material-symbols-outlined text-[18px] text-primary">local_shipping</span> Free complimentary shipping on orders over ₦350,000</p>
            <p className="flex items-center gap-3"><span className="material-symbols-outlined text-[18px] text-primary">assignment_return</span> 30-day elegant returns</p>
          </div>
        </div>
      </div>
    </div>
  );
}
