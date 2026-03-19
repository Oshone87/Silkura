import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Story</span>
        <h1 className="text-5xl md:text-6xl font-serif mb-6 text-slate-900 dark:text-white">Redefining <span className="italic">Luxury</span></h1>
        <div className="w-24 h-px bg-accent-gold mx-auto"></div>
      </div>

      <div className="space-y-12">
        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="aspect-[4/5] bg-slate-200 dark:bg-slate-800 rounded-xl bg-cover bg-center shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjuMvA2tauEBIzIAN_ac3vzJNZubdotLGQs1ReHBb8XegZxcrN-p8iO-zH04Ei4D8iG_h7xA8qm1O73rz8mjkEaqt6E1MEQ_GXera55tky8WaxJwPdDJVg9Z3DEsDTVfTwocPqxrxaFCn_oq-7KSp3i3b50T2DaO16diGS9EfC7yG9gsenheme7_Dbmdh-Mor3o9g4_TvFQn3Yl_G6R3TbTqfTg1u-c1VwKKrcVLlSU1-heDOwL5E04zOPP7pqlIpJ24O_Lda8bgO4')" }} />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-serif text-slate-900 dark:text-white">The Artisan Touch</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Founded in 2020 in the vibrant heart of Lagos, Nigeria, Silkura was born from a simple belief: that the closest garments to our skin should be the most thoughtfully crafted. 
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Every seam, every contour, and every detail is meticulously considered by our master artisans to ensure a garment that feels as exquisite as it looks. We view lingerie not just as clothing, but as a foundation of confidence and self-expression.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="flex flex-col md:flex-row-reverse gap-12 items-center bg-white dark:bg-slate-800/20 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="md:w-1/2">
            <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-full bg-cover bg-center shadow-inner overflow-hidden border-8 border-white dark:border-slate-900" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531123897727-8f129e1ebfa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }} />
          </div>
          <div className="md:w-1/2 space-y-6">
            <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Meet Our Founder</span>
            <h2 className="text-4xl font-serif text-slate-900 dark:text-white">Ose</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-2 border-accent-gold pl-4">
              "I wanted to create a brand that speaks to the modern woman's desire for unapologetic elegance, rooted in the rich, vibrant energy of my home."
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Hailing from Lagos, Nigeria, Ose envisioned Silkura as a bridge between world-class luxury and authentic African entrepreneurial spirit. Disenchanted with the lack of premium, inclusive luxury lingerie that truly celebrated diverse bodies without compromising on aesthetic appeal, she set out to create her own. 
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Today, Ose oversees every design directly from the Lagos design studio, ensuring that Silkura remains true to its founding promise of bringing empowering, sensuous luxury from Nigeria to the rest of the world.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="aspect-[4/5] bg-slate-200 dark:bg-slate-800 rounded-xl bg-cover bg-center shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOIXUGzfxrrbqqQso1II08eoDWISi9ANasrJVSnD-PF6FNSLMB5BCWZHVNeB_iJvzz7JDX_GZq4addzGAl_1H3kSu1igusbWBRqwHtkaPzbCwCJk1gvwv8uIw1OD4FY9ofYZIytA_kV40SFCihYhd7Jr6VtW6Ib9-b92z9b5hsvPzq1Tu4_yUeRZr3-wsIrqrxpp6gZUWwPoDNQ3qYqytOSPnJJRmMxE7cED2Rt25J-EImAMhrZGl3egPrgAGnJ0jiTzKxeQA2SQT2')" }} />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-serif text-slate-900 dark:text-white">Sustainable Luxury</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Our commitment to quality extends to our ethical practices. We source 100% natural Mulberry silk from sustainable mills that prioritize both environmental stewardship and fair labor conditions.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              By producing in small, curated batches, we eliminate excess waste and ensure that every piece meets our exacting standards. When you wear Silkura, you are wrapped in a heritage of responsibility and uncompromising elegance.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-24 text-center bg-primary/10 py-16 px-6 rounded-2xl border border-primary/20">
        <h3 className="text-3xl font-serif mb-6 text-slate-900 dark:text-white">Experience the Collection</h3>
        <Link to="/shop" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-colors">
          Explore Now
        </Link>
      </div>
    </div>
  );
}
