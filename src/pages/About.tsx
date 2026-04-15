import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb orb-pink w-96 h-96 -top-40 -right-40 opacity-15" />
      <div className="orb orb-gold w-72 h-72 top-1/3 -left-20 opacity-10" />
      <div className="orb orb-rose w-56 h-56 bottom-1/4 -right-10 opacity-10" />

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <span className="text-accent-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-slate-900 dark:text-white">Redefining <span className="italic gradient-text bg-gradient-to-r from-primary to-accent-gold">Luxury</span></h1>
          <div className="w-24 h-0.5 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-20">
          <section className="flex flex-col md:flex-row gap-12 items-center animate-on-scroll">
            <div className="md:w-1/2">
              <div className="aspect-[4/5] bg-slate-200 dark:bg-slate-800 rounded-2xl bg-cover bg-center shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjuMvA2tauEBIzIAN_ac3vzJNZubdotLGQs1ReHBb8XegZxcrN-p8iO-zH04Ei4D8iG_h7xA8qm1O73rz8mjkEaqt6E1MEQ_GXera55tky8WaxJwPdDJVg9Z3DEsDTVfTwocPqxrxaFCn_oq-7KSp3i3b50T2DaO16diGS9EfC7yG9gsenheme7_Dbmdh-Mor3o9g4_TvFQn3Yl_G6R3TbTqfTg1u-c1VwKKrcVLlSU1-heDOwL5E04zOPP7pqlIpJ24O_Lda8bgO4')" }}
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6 animate-on-scroll stagger-2">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white">About Silkura</h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg font-light">
                Founded on March 8th, 2025, in the heart of Lagos, Nigeria, Silkura was created with one intention — to make every woman feel confident, soft, and effortlessly beautiful in her own skin.
              </p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                Silkura is more than a brand. It is a feeling. A quiet luxury. A gentle reminder that confidence begins with how you feel in your own skin. At Silkura, we believe that what you wear closest to your body should be the most intentional. Each piece is thoughtfully curated with love, designed to embrace your form, elevate your confidence, and reflect your femininity in the most delicate yet powerful way.
              </p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                Every Silkura piece is made to make you feel <span className="font-bold text-slate-800 dark:text-white">SEEN</span> and <span className="font-bold text-slate-800 dark:text-white">BEAUTIFUL</span>. It's more than just a lingerie brand — Silkura is a feeling, a quiet confidence, a soft power, a reminder that you deserve to feel beautiful at all times.
              </p>
              <p className="gradient-text bg-gradient-to-r from-primary to-accent-gold font-semibold italic text-lg">
                Curated with love. Worn with confidence. 💗
              </p>
            </div>
          </section>

          {/* Founder Section */}
          <section className="flex flex-col md:flex-row-reverse gap-12 items-center glass-card p-8 md:p-12 animate-on-scroll relative overflow-hidden">
            {/* Decorative shimmer */}
            <div className="absolute inset-0 shimmer opacity-5" />
            
            <div className="md:w-1/2 animate-on-scroll stagger-1">
              <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-full bg-cover bg-center shadow-xl shadow-primary/10 overflow-hidden border-8 border-white/80 dark:border-slate-900/80 hover:scale-[1.02] transition-transform duration-500" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531123897727-8f129e1ebfa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }} />
            </div>
            <div className="md:w-1/2 space-y-6 relative z-10 animate-on-scroll stagger-2">
              <span className="text-accent-gold font-bold tracking-[0.3em] uppercase text-xs mb-2 block">Meet Our Founder</span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white">Oseikere</h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                Oseikere is the founder of Silkura, a brand created with the modern woman in mind. She wanted to build something that feels elegant, confident, and real. Something women can wear and feel good in — without holding back.
              </p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                Based in Lagos, Nigeria, Oseikere saw that there weren't many luxury lingerie brands that truly fit and flatter different body types while still looking beautiful. Instead of settling, she decided to create her own. She stays involved in the design process, making sure every piece from Silkura reflects what the brand stands for — comfort, beauty, confidence and high-end quality.
              </p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                To Oseikere, Silkura is more than just a brand. It's about helping women feel good in their own skin and bringing something refined, beautiful and relaxing out of Nigeria to the world.
              </p>
            </div>
          </section>

        </div>

        <div className="mt-24 text-center animate-on-scroll relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 gradient-primary opacity-15" />
          <div className="absolute inset-0 shimmer opacity-5" />
          <div className="relative z-10 py-20 px-6">
            <h3 className="text-3xl md:text-4xl font-serif mb-6 text-slate-900 dark:text-white">Experience the Collection</h3>
            <Link to="/shop">
              <Button className="gradient-primary text-white shadow-xl shadow-primary/30 hover:shadow-2xl px-12 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300">
                Explore Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
  return <button className={className} {...props}>{children}</button>;
}
