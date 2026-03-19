import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Default config for quick add
    addToCart(product, 1, 'M', product.colors?.[0] || 'Default');
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow aspect-[3/4]">
        {product.isBestseller && (
          <div className="absolute top-4 left-4 z-10 bg-accent-gold text-white text-[10px] px-2 py-1 uppercase tracking-tighter rounded">
            Bestseller
          </div>
        )}
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${product.image}')` }}
        />
        <button 
          onClick={handleQuickAdd}
          className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 py-3 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity text-slate-900 dark:text-white"
        >
          Quick Add +
        </button>
      </div>
      <div className="mt-4">
        <h4 className="font-serif text-lg text-slate-900 dark:text-white">{product.name}</h4>
        <p className="text-slate-500 text-sm italic mb-2">{product.colors?.[0] || 'Classic'}</p>
        <p className="font-bold text-accent-gold">₦{product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}
