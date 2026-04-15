import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { SlidersHorizontal } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const searchQuery = searchParams.get('q') || '';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory === 'lingerie' ? 'Silk Lingerie' : 'All');
  const [sortBy, setSortBy] = useState('featured');
  const scrollRef = useScrollAnimation();

  const categories = ['All', 'Silk Lingerie'];

  const filteredProducts = useMemo(() => {
    let result = products;
    
    // Apply Category Filter
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Apply String Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || (p.description || '').toLowerCase().includes(q));
    }

    // Apply Sorting
    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    }
    return result;
  }, [activeCategory, sortBy, searchQuery]);

  return (
    <div ref={scrollRef} className="relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb orb-pink w-72 h-72 -top-20 -right-20 opacity-10" />
      <div className="orb orb-gold w-56 h-56 top-1/2 -left-20 opacity-10" />

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12 gap-6 border-b border-primary/15 pb-8 animate-on-scroll">
          <div>
            <span className="text-accent-gold font-medium tracking-[0.3em] uppercase text-xs mb-3 block">Shop</span>
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-slate-900 dark:text-white">
              {searchQuery ? `Search Results` : `The Collection`}
            </h1>
            <div className="w-16 h-0.5 gradient-primary rounded-full mb-4" />
            {searchQuery && (
              <p className="text-slate-400 text-sm">Showing results for "<span className="font-bold text-slate-900 dark:text-white">{searchQuery}</span>"</p>
            )}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest px-5 py-2.5 glass rounded-full hover:bg-primary/10 transition-all duration-300 whitespace-nowrap">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm font-medium glass rounded-full px-5 py-2.5 focus:ring-primary focus:border-primary outline-none cursor-pointer dark:text-slate-200 transition-all duration-300"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-28 animate-on-scroll">
              <h3 className="font-bold uppercase tracking-widest text-sm mb-6 text-slate-900 dark:text-white">Categories</h3>
              <ul className="space-y-4">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setActiveCategory(cat)}
                      className={`text-sm transition-all duration-300 text-left w-full flex items-center gap-2 ${activeCategory === cat ? 'text-primary font-bold italic translate-x-2' : 'text-slate-400 font-medium hover:text-primary hover:translate-x-1'}`}
                    >
                      {activeCategory === cat && <span className="w-1.5 h-1.5 rounded-full gradient-primary inline-block" />}
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center text-slate-400 italic font-light text-lg">No products found for this category.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, idx) => (
                  <div key={product.id} className={`animate-on-scroll stagger-${(idx % 6) + 1}`}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
