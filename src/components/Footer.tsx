import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark pt-20 pb-10 border-t border-primary/20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="space-y-6 lg:pr-12">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">flare</span>
            <h2 className="text-2xl font-bold font-serif italic text-slate-900 dark:text-slate-100">Silkura</h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Celebrating elegance and empowerment through artisanal craftsmanship and the finest natural silks.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-primary transition-colors text-slate-900 dark:text-white" href="#" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Collections</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><Link className="hover:text-primary transition-colors" to="/shop?category=lingerie">Silk Lingerie</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/shop?category=lounge">Loungewear</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/shop">New Arrivals</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Customer Care</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><Link className="hover:text-primary transition-colors" to="/size-guide">Size Guide</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/shipping-returns">Shipping & Returns</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/contact">Contact Us</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/faq">FAQ</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-primary/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-xs">© 2024 Silkura Luxury Lingerie. All Rights Reserved.</p>
        <div className="flex gap-8">
          <Link className="text-slate-400 text-xs hover:text-primary transition-colors" to="#">Privacy Policy</Link>
          <Link className="text-slate-400 text-xs hover:text-primary transition-colors" to="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
