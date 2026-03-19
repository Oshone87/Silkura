import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { products } from '../data/products';

export default function Home() {
  const bestSellers = products.filter(p => p.isBestseller).slice(0, 4);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[870px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <div 
            className="w-full h-full bg-cover bg-center opacity-70"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjuMvA2tauEBIzIAN_ac3vzJNZubdotLGQs1ReHBb8XegZxcrN-p8iO-zH04Ei4D8iG_h7xA8qm1O73rz8mjkEaqt6E1MEQ_GXera55tky8WaxJwPdDJVg9Z3DEsDTVfTwocPqxrxaFCn_oq-7KSp3i3b50T2DaO16diGS9EfC7yG9gsenheme7_Dbmdh-Mor3o9g4_TvFQn3Yl_G6R3TbTqfTg1u-c1VwKKrcVLlSU1-heDOwL5E04zOPP7pqlIpJ24O_Lda8bgO4')" }}
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white drop-shadow-sm">
            Feel Confident. <br/> <span className="italic">Feel Silkura.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-light tracking-wide">
            Experience the ultimate in luxury silk and hand-crafted lace, designed for your most intimate moments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/shop">
              <Button size="lg" className="bg-primary hover:bg-white text-slate-900 shadow-lg">Shop Now</Button>
            </Link>
            <Link to="/shop">
              <Button size="lg" className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20">
                New Arrivals
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-slate-900 dark:text-white">Curated Collections</h2>
          <div className="w-24 h-px bg-accent-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Signature Silk", image: products[0].image, category: "Silk Lingerie", action: "Shop Silk" },
            { title: "Midnight Noir", image: products[8].image, category: "Loungewear", action: "Shop Noir" },
            { title: "Essential Lounge", image: products[10].image, category: "Loungewear", action: "Explore Lounge" }
          ].map((col, idx) => (
            <Link to={`/shop?category=${col.category}`} key={idx} className="group relative h-[500px] overflow-hidden rounded-xl cursor-pointer block">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${col.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white text-3xl font-serif mb-2">{col.title}</h3>
                <p className="text-white/80 text-sm uppercase tracking-widest font-semibold">{col.action}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-primary/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-2 text-slate-900 dark:text-white">Our Best Sellers</h2>
              <p className="text-slate-500 italic">Loved by women all around the world.</p>
            </div>
            <Link to="/shop" className="text-accent-gold font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all mt-4 md:mt-0">
              View All Products <span className="material-symbols-outlined">east</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <div 
                className="h-[600px] bg-cover bg-center" 
                style={{ backgroundImage: `url('${products[3].image}')` }}
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-accent-gold/20 rounded-full blur-2xl -z-10"></div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm">Since 2020</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-slate-900 dark:text-white">
              The Art of <br/><span className="italic">Intimate Luxury</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              At Silkura, we believe that true luxury begins closest to the skin. Every piece in our collection is a celebration of femininity, crafted by master artisans who have perfected the delicate balance between timeless elegance and modern comfort.
            </p>
            <Link to="/about" className="inline-block border-b-2 border-accent-gold pb-1 font-serif text-lg italic hover:text-accent-gold transition-colors text-slate-900 dark:text-white">
              Discover Our Craft
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900">Join the Silkura Circle</h2>
          <p className="text-slate-700 text-lg">Receive exclusive previews, styling tips, and private sale access.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="flex-1 px-6 py-4 rounded-full border-none focus:ring-2 focus:ring-accent-gold text-slate-900 outline-none" 
              placeholder="Your email address" 
              type="email"
              required
            />
            <button type="submit" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors uppercase tracking-widest text-sm">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-slate-500 italic">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
        </div>
      </section>
    </main>
  );
}
