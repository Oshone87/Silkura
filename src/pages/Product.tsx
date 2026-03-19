import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import { Star } from 'lucide-react';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || 'Classic');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return <div className="p-20 text-center text-2xl font-serif">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 lg:flex gap-16">
      {/* Images */}
      <div className="lg:w-1/2 space-y-4">
        <div 
          className="aspect-[3/4] rounded-xl bg-cover bg-center shadow-md border border-primary/20"
          style={{ backgroundImage: `url('${product.image}')` }}
        />
      </div>

      {/* Details */}
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <nav className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-6">
          <Link to="/" className="hover:text-accent-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-accent-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 dark:text-white">{product.name}</span>
        </nav>

        <h1 className="text-4xl lg:text-5xl font-serif mb-4 text-slate-900 dark:text-white">{product.name}</h1>
        <p className="text-2xl font-bold text-accent-gold mb-6">₦{product.price.toLocaleString()}</p>

        <div className="flex items-center gap-1 mb-8">
          {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-accent-gold fill-current" />)}
          <span className="text-sm text-slate-500 ml-2 italic">128 Reviews</span>
        </div>

        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          {product.description || "The epitome of modern luxury. Hand-crafted with our signature silk to provide unparalleled comfort and elegance. Perfect for lounging or layering."}
        </p>

        <div className="border-t border-primary/20 pt-8 mt-8 space-y-6">
          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Color: </span>
                <span className="text-sm italic text-slate-500">{selectedColor}</span>
              </div>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-transform ${selectedColor === color ? 'border-accent-gold scale-110' : 'border-transparent hover:scale-105'}`}
                    style={{ backgroundColor: color === 'Classic Black' ? '#000' : color === 'Ivory White' ? '#f8f8f8' : color === 'Rosewater Pink' ? '#fadadd' : '#ccc' }}
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
              <Link to="/size-guide" className="text-xs text-slate-500 underline hover:text-accent-gold transition-colors">Size Guide</Link>
            </div>
            <div className="flex gap-3 flex-wrap">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg border text-sm font-medium transition-colors
                    ${selectedSize === size 
                      ? 'border-accent-gold bg-accent-gold text-white' 
                      : 'border-slate-300 text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:text-slate-300'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-full h-[56px]">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-5 text-lg text-slate-500 hover:text-slate-900 dark:hover:text-white">-</button>
              <span className="font-bold w-4 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-5 text-lg text-slate-500 hover:text-slate-900 dark:hover:text-white">+</button>
            </div>
            <Button 
              size="lg" 
              fullWidth 
              onClick={handleAddToCart}
              className={isAdded ? "bg-green-600 text-white hover:bg-green-700" : ""}
            >
              {isAdded ? "Added to Cart" : "Add to Cart"}
            </Button>
          </div>
        </div>

        <div className="mt-12 space-y-4 text-sm text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">local_shipping</span> Free complimentary shipping on orders over ₦350,000</p>
          <p className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">assignment_return</span> 30-day elegant returns</p>
        </div>
      </div>
    </div>
  );
}
