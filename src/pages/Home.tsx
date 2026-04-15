import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { products } from '../data/products';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Home() {
  const bestSellers = products.filter(p => p.isBestseller).slice(0, 4);
  const scrollRef = useScrollAnimation();

  return (
    <main ref={scrollRef}>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center scale-105"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjuMvA2tauEBIzIAN_ac3vzJNZubdotLGQs1ReHBb8XegZxcrN-p8iO-zH04Ei4D8iG_h7xA8qm1O73rz8mjkEaqt6E1MEQ_GXera55tky8WaxJwPdDJVg9Z3DEsDTVfTwocPqxrxaFCn_oq-7KSp3i3b50T2DaO16diGS9EfC7yG9gsenheme7_Dbmdh-Mor3o9g4_TvFQn3Yl_G6R3TbTqfTg1u-c1VwKKrcVLlSU1-heDOwL5E04zOPP7pqlIpJ24O_Lda8bgO4')" }}
          />
          {/* Rich gradient overlay */}
          <div className="absolute inset-0 gradient-hero" />
          {/* Shimmer overlay */}
          <div className="absolute inset-0 shimmer opacity-20" />
        </div>

        {/* Decorative orbs */}
        <div className="orb orb-pink w-96 h-96 -bottom-20 -left-20 animate-float opacity-20" />
        <div className="orb orb-gold w-72 h-72 -top-10 -right-10 animate-float opacity-15" style={{ animationDelay: '3s' }} />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <span className="inline-block text-primary-light/80 text-sm font-medium tracking-[0.3em] uppercase mb-6 animate-fade-in">Curated with Love 💗</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 text-white drop-shadow-lg animate-fade-in-up leading-tight">
            Feel Confident. <br/> <span className="italic gradient-text bg-gradient-to-r from-primary-light to-accent-gold">Feel Silkura.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-12 font-light tracking-wide animate-fade-in-up max-w-xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Luxury lingerie designed to embrace your form, elevate your confidence, and celebrate your femininity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/shop">
              <Button size="lg" className="gradient-primary text-white shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 px-12">Shop Now</Button>
            </Link>
            <Link to="/shop">
              <Button size="lg" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40">
                New Arrivals
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent" />
      </section>

      {/* Featured Collections Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent-gold font-medium tracking-[0.3em] uppercase text-sm mb-3 block">Discover</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-5 text-slate-900 dark:text-white">Curated Collections</h2>
          <div className="w-24 h-0.5 gradient-primary mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Silk Spell Obsidian Black", image: "/img/IMG_7102.JPG", category: "Silk Lingerie", action: "Shop Now" },
            { title: "Silk Spell Burgundy", image: "/img/IMG_7143.JPG", category: "Silk Lingerie", action: "Shop Now" }
          ].map((col, idx) => (
            <Link to={`/shop?category=${col.category}`} key={idx} className={`animate-on-scroll stagger-${idx + 1} group relative h-[600px] overflow-hidden rounded-2xl cursor-pointer block shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700`}>
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${col.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:from-black/80 transition-colors duration-500" />
              {/* Shimmer on hover */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-3xl font-serif mb-2 group-hover:translate-y-0 translate-y-1 transition-transform duration-500">{col.title}</h3>
                <p className="text-white/70 text-sm uppercase tracking-widest font-semibold flex items-center gap-2 group-hover:text-primary-light transition-colors duration-500">
                  {col.action} <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="relative py-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 dark:from-primary/5 dark:via-primary/8 dark:to-primary/5" />
        <div className="orb orb-rose w-80 h-80 top-0 right-0 opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-on-scroll">
            <div>
              <span className="text-accent-gold font-medium tracking-[0.3em] uppercase text-sm mb-3 block">Most Loved</span>
              <h2 className="text-3xl md:text-5xl font-serif mb-2 text-slate-900 dark:text-white">Our Best Sellers</h2>
              <p className="text-slate-400 italic font-light">Loved by women all around the world.</p>
            </div>
            <Link to="/shop" className="text-accent-gold font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all mt-4 md:mt-0 group">
              View All Products <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map((product, idx) => (
              <div key={product.id} className={`animate-on-scroll stagger-${idx + 1}`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-6 overflow-hidden relative">
        <div className="orb orb-gold w-96 h-96 -bottom-20 left-1/4 opacity-10" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative animate-on-scroll">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 group">
              <div 
                className="h-[600px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url('/img/lingerie_closet.png')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-float" />
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-accent-gold/15 rounded-full blur-2xl -z-10 animate-float" style={{ animationDelay: '2s' }} />
          </div>
          <div className="lg:w-1/2 space-y-8 animate-on-scroll stagger-2">
            <span className="text-accent-gold font-bold tracking-[0.3em] uppercase text-sm">Since 2025</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-slate-900 dark:text-white">
              The Art of <br/><span className="italic gradient-text bg-gradient-to-r from-primary to-accent-gold">Intimate Luxury</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg font-light">
              At Silkura, we believe that true luxury begins closest to the skin. Every piece in our collection is a celebration of femininity, crafted to provide unparalleled comfort and elegance.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 border-b-2 border-accent-gold pb-1 font-serif text-lg italic hover:text-accent-gold transition-all duration-300 text-slate-900 dark:text-white group">
              Discover Our Story <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <div className="absolute inset-0 shimmer opacity-10" />
        <div className="orb orb-gold w-72 h-72 -top-20 -right-20 opacity-20" />
        <div className="orb orb-rose w-56 h-56 -bottom-10 -left-10 opacity-20" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-serif text-white drop-shadow-sm">Join the Silkura Circle</h2>
          <p className="text-white/80 text-lg font-light">Receive exclusive previews, styling tips, and private sale access.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="flex-1 px-6 py-4 rounded-full border-none bg-white/20 backdrop-blur-md text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/40 focus:bg-white/30 outline-none transition-all duration-300" 
              placeholder="Your email address" 
              type="email"
              required
            />
            <button type="submit" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-white/90 hover:shadow-xl transition-all duration-300 uppercase tracking-widest text-sm hover:scale-105">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-white/50 italic">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
        </div>
      </section>
    </main>
  );
}
