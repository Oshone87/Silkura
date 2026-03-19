import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { products } from '../data/products';

export default function Navbar() {
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDesktopSuggest, setShowDesktopSuggest] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setSearchQuery('');
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      closeMenu();
      setShowDesktopSuggest(false);
      setSearchQuery('');
    }
  };

  // Suggestion filtering
  const searchResults = products.filter(p => 
    searchQuery.trim() && 
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (p.description || '').toLowerCase().includes(searchQuery.toLowerCase()))
  ).slice(0, 4); // show top 4 matches

  const SuggestionList = ({ isMobile = false }) => {
    if (!searchQuery.trim()) return null;
    
    return (
      <div 
        onMouseDown={(e) => e.preventDefault()} // Prevent input blur before click registers
        className={isMobile ? "mt-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm" : "absolute top-full right-0 mt-3 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl overflow-hidden z-50"}
      >
        {searchResults.length > 0 ? (
          <div>
            {searchResults.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border-b border-slate-100 dark:border-slate-800 last:border-0"
              >
                <div 
                  className="w-12 h-16 bg-cover bg-center rounded bg-slate-100 dark:bg-slate-800 flex-shrink-0"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold font-serif text-slate-900 dark:text-white truncate">{product.name}</h4>
                  <p className="text-xs text-slate-500 italic truncate">{product.category}</p>
                </div>
                <div className="text-sm font-bold text-accent-gold whitespace-nowrap">
                  ₦{product.price.toLocaleString()}
                </div>
              </Link>
            ))}
            <button 
              onClick={handleSearch}
              className="w-full text-center p-3 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-accent-gold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              View All Results
            </button>
          </div>
        ) : (
          <div className="p-4 text-center text-sm text-slate-500 italic">
            No products match "{searchQuery}"
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-lg border-b border-primary/20 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Mobile Menu Button - Left */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="p-2 hover:bg-primary/20 rounded-full transition-colors text-slate-900 dark:text-white relative z-50 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 transform transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 transform transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Logo - Center on Mobile, Left on Desktop */}
        <div className="flex items-center gap-12 flex-1 md:flex-none justify-center md:justify-start">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer relative z-50" onClick={closeMenu}>
            <span className="material-symbols-outlined text-primary text-3xl transform group-hover:rotate-12 transition-transform">flare</span>
            <h2 className="text-2xl font-bold tracking-tight font-serif italic text-slate-900 dark:text-slate-100">Silkura</h2>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-sm font-medium hover:text-primary transition-colors text-slate-900 dark:text-slate-200">Collections</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors text-slate-900 dark:text-slate-200">Our Story</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors text-slate-900 dark:text-slate-200">Contact Us</Link>
          </nav>
        </div>

        {/* Icons - Right */}
        <div className="flex items-center gap-2 sm:gap-6 relative z-50">
          <div className="relative hidden lg:block">
            <form onSubmit={handleSearch} className="flex items-center bg-white dark:bg-slate-800 rounded-full px-4 py-1.5 border border-primary/30 relative z-20">
              <button type="submit" className="text-slate-400 hover:text-accent-gold transition-colors">
                <Search className="w-4 h-4 mr-2" />
              </button>
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowDesktopSuggest(true)}
                onBlur={() => setTimeout(() => setShowDesktopSuggest(false), 200)}
                className="bg-transparent border-none focus:ring-0 text-sm w-40 outline-none dark:text-white text-slate-900 placeholder:text-slate-400" 
                placeholder="Search..." 
                type="text"
              />
            </form>
            {showDesktopSuggest && <SuggestionList />}
          </div>

          <Link to="/cart" className="p-2 hover:bg-primary/20 rounded-full transition-colors relative text-slate-900 dark:text-white" onClick={closeMenu}>
            <ShoppingBag className="w-6 h-6" />
            {itemCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-accent-gold text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-md animate-pulse">
                {itemCount}
              </span>
            )}
          </Link>
          <Link to="/login" className="hidden sm:flex items-center justify-center p-2 hover:bg-primary/20 rounded-full transition-colors text-slate-900 dark:text-white">
            <User className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden fixed inset-0 top-20 h-[calc(100vh-5rem)] bg-background-light dark:bg-background-dark transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) z-40 overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col min-h-full bg-slate-50 dark:bg-slate-900 p-8">
          <nav className="flex flex-col gap-8 text-3xl font-serif mt-6 px-2">
            <Link to="/" onClick={closeMenu} className="hover:text-accent-gold hover:italic hover:translate-x-2 transition-all block w-max text-slate-900 dark:text-white">Home</Link>
            <Link to="/shop" onClick={closeMenu} className="hover:text-accent-gold hover:italic hover:translate-x-2 transition-all block w-max text-slate-900 dark:text-white">Collections</Link>
            <Link to="/about" onClick={closeMenu} className="hover:text-accent-gold hover:italic hover:translate-x-2 transition-all block w-max text-slate-900 dark:text-white">Our Story</Link>
            <Link to="/contact" onClick={closeMenu} className="hover:text-accent-gold hover:italic hover:translate-x-2 transition-all block w-max text-slate-900 dark:text-white">Contact Us</Link>
          </nav>
          
          <div className="mt-auto pt-12 pb-8 px-2 flex-grow flex flex-col justify-end">
            <div className="flex flex-col gap-5 mb-8">
              <Link to="/size-guide" onClick={closeMenu} className="text-sm font-medium uppercase tracking-widest text-slate-500 hover:text-accent-gold transition-colors">Size Guide</Link>
              <Link to="/shipping-returns" onClick={closeMenu} className="text-sm font-medium uppercase tracking-widest text-slate-500 hover:text-accent-gold transition-colors">Shipping & Returns</Link>
              <Link to="/faq" onClick={closeMenu} className="text-sm font-medium uppercase tracking-widest text-slate-500 hover:text-accent-gold transition-colors">FAQ</Link>
            </div>
            
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 relative z-50">
              <form onSubmit={handleSearch} className="flex items-center bg-white dark:bg-slate-800 rounded-full px-5 py-3.5 w-full border border-primary/30 shadow-sm focus-within:border-accent-gold transition-colors relative z-20">
                <button type="submit" className="text-slate-400 hover:text-accent-gold transition-colors">
                  <Search className="w-5 h-5 mr-3" />
                </button>
                <input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 text-base w-full outline-none dark:text-white text-slate-900 placeholder:text-slate-400" 
                  placeholder="Search products..." 
                  type="text"
                />
              </form>
              <SuggestionList isMobile={true} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
