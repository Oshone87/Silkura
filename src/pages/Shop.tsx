import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { SlidersHorizontal } from 'lucide-react';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const searchQuery = searchParams.get('q') || '';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory === 'lingerie' ? 'Silk Lingerie' : initialCategory === 'lounge' ? 'Loungewear' : 'All');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Silk Lingerie', 'Loungewear'];

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
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12 gap-6 border-b border-primary/20 pb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-slate-900 dark:text-white">
            {searchQuery ? `Search Results` : `The Collection`}
          </h1>
          <div className="w-16 h-px bg-accent-gold mb-4"></div>
          {searchQuery && (
            <p className="text-slate-500 text-sm">Showing results for "<span className="font-bold text-slate-900 dark:text-white">{searchQuery}</span>"</p>
          )}
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest px-4 py-2 border rounded-full hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800 transition-colors whitespace-nowrap">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
          
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm font-medium border rounded-full px-4 py-2 bg-transparent focus:ring-accent-gold focus:border-accent-gold dark:border-slate-700 dark:text-slate-200 outline-none cursor-pointer"
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
          <div className="sticky top-28">
            <h3 className="font-bold uppercase tracking-widest text-sm mb-6 text-slate-900 dark:text-white">Categories</h3>
            <ul className="space-y-4">
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm hover:text-accent-gold transition-colors text-left w-full ${activeCategory === cat ? 'text-accent-gold font-bold italic' : 'text-slate-500 font-medium'}`}
                  >
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
            <div className="py-20 text-center text-slate-500 italic">No products found for this category.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
