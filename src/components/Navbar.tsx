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
  const [scrolled, setScrolled] = useState(false);
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

  // Track scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className={isMobile ? "mt-4 glass-card overflow-hidden" : "absolute top-full right-0 mt-3 w-80 glass-card shadow-2xl overflow-hidden z-50"}
      >
        {searchResults.length > 0 ? (
          <div>
            {searchResults.map((product) => (
              <Link 
                key={product.id} 
                to={`/product/${product.id}`}
                className="flex items-center gap-4 p-3 hover:bg-primary/10 transition-colors border-b border-primary/10 last:border-0"
              >
                <div 
                  className="w-12 h-16 bg-cover bg-center rounded-lg bg-slate-100 dark:bg-slate-800 flex-shrink-0"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold font-serif text-slate-900 dark:text-white truncate">{product.name}</h4>
                  <p className="text-xs text-slate-400 italic truncate">{product.category}</p>
                </div>
                <div className="text-sm font-bold text-accent-gold whitespace-nowrap">
                  ₦{product.price.toLocaleString()}
                </div>
              </Link>
            ))}
            <button 
              onClick={handleSearch}
              className="w-full text-center p-3 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-accent-gold hover:bg-primary/5 transition-colors"
            >
              View All Results
            </button>
          </div>
        ) : (
          <div className="p-4 text-center text-sm text-slate-400 italic">
            No products match "{searchQuery}"
          </div>
        )}
      </div>
    );
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass shadow-lg shadow-primary/5' 
        : 'bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Mobile Menu Button - Left */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="p-2 hover:bg-primary/15 rounded-full transition-all duration-300 text-slate-900 dark:text-white relative z-50 focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 transform transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-6 h-6 transform transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Logo - Center on Mobile, Left on Desktop */}
        <div className="flex items-center gap-12 flex-1 md:flex-none justify-center md:justify-start">
          <Link to="/" className="flex items-center gap-2.5 group cursor-pointer relative z-50" onClick={closeMenu}>
            <span className="material-symbols-outlined text-primary text-3xl transform group-hover:rotate-[20deg] group-hover:scale-110 transition-all duration-500">flare</span>
            <h2 className="text-2xl font-bold tracking-tight font-serif italic text-slate-900 dark:text-slate-100 group-hover:text-primary-dark dark:group-hover:text-primary transition-colors duration-300">Silkura</h2>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-sm font-medium link-underline pb-1 transition-colors duration-300 text-slate-700 dark:text-slate-300 hover:text-primary-dark dark:hover:text-primary">Collections</Link>
            <Link to="/about" className="text-sm font-medium link-underline pb-1 transition-colors duration-300 text-slate-700 dark:text-slate-300 hover:text-primary-dark dark:hover:text-primary">Our Story</Link>
            <Link to="/contact" className="text-sm font-medium link-underline pb-1 transition-colors duration-300 text-slate-700 dark:text-slate-300 hover:text-primary-dark dark:hover:text-primary">Contact Us</Link>
          </nav>
        </div>

        {/* Icons - Right */}
        <div className="flex items-center gap-2 sm:gap-5 relative z-50">
          <div className="relative hidden lg:block">
            <form onSubmit={handleSearch} className="flex items-center glass rounded-full px-4 py-2 relative z-20 focus-within:shadow-md focus-within:shadow-primary/10 transition-shadow duration-300">
              <button type="submit" className="text-slate-400 hover:text-accent-gold transition-colors duration-300">
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

          <Link to="/cart" className="p-2.5 hover:bg-primary/15 rounded-full transition-all duration-300 relative text-slate-900 dark:text-white group" onClick={closeMenu}>
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            {itemCount > 0 && (
              <span className="absolute top-0.5 right-0.5 w-5 h-5 gradient-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-md animate-scale-in">
                {itemCount}
              </span>
            )}
          </Link>
          <Link to="/login" className="hidden sm:flex items-center justify-center p-2.5 hover:bg-primary/15 rounded-full transition-all duration-300 text-slate-900 dark:text-white group">
            <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden fixed inset-0 top-20 h-[calc(100vh-5rem)] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-40 overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col min-h-full p-8">
          <nav className="flex flex-col gap-8 text-3xl font-serif mt-6 px-2">
            <Link to="/" onClick={closeMenu} className="hover:text-primary hover:italic hover:translate-x-3 transition-all duration-300 block w-max text-slate-900 dark:text-white">Home</Link>
            <Link to="/shop" onClick={closeMenu} className="hover:text-primary hover:italic hover:translate-x-3 transition-all duration-300 block w-max text-slate-900 dark:text-white">Collections</Link>
            <Link to="/about" onClick={closeMenu} className="hover:text-primary hover:italic hover:translate-x-3 transition-all duration-300 block w-max text-slate-900 dark:text-white">Our Story</Link>
            <Link to="/contact" onClick={closeMenu} className="hover:text-primary hover:italic hover:translate-x-3 transition-all duration-300 block w-max text-slate-900 dark:text-white">Contact Us</Link>
          </nav>
          
          <div className="mt-auto pt-12 pb-8 px-2 flex-grow flex flex-col justify-end">
            <div className="flex flex-col gap-5 mb-8">
              <Link to="/login" onClick={closeMenu} className="w-full gradient-primary text-white py-4 flex justify-center items-center gap-2 rounded-full font-bold uppercase tracking-widest text-sm mb-4 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                <User className="w-4 h-4" /> Sign In / Register
              </Link>
              <Link to="/size-guide" onClick={closeMenu} className="text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-primary transition-colors duration-300">Size Guide</Link>
              <Link to="/shipping-returns" onClick={closeMenu} className="text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-primary transition-colors duration-300">Shipping & Returns</Link>
              <Link to="/faq" onClick={closeMenu} className="text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-primary transition-colors duration-300">FAQ</Link>
            </div>
            
            <div className="pt-8 border-t border-primary/15 relative z-50">
              <form onSubmit={handleSearch} className="flex items-center glass rounded-full px-5 py-3.5 w-full focus-within:shadow-md focus-within:shadow-primary/10 transition-shadow relative z-20">
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
