import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SizeGuide() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef} className="relative overflow-hidden">
      <div className="orb orb-pink w-72 h-72 -top-20 -right-20 opacity-10" />
      <div className="orb orb-gold w-56 h-56 bottom-20 -left-10 opacity-10" />

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-accent-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Fit & Sizing</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-slate-900 dark:text-white">Find Your <span className="italic gradient-text bg-gradient-to-r from-primary to-accent-gold">Perfect Fit</span></h1>
          <div className="w-24 h-0.5 gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Silkura garments are designed to drape beautifully and feel completely weightless. Use the measurements below to find your ideal size across our collections.
          </p>
        </div>

        <div className="space-y-16">
          {/* Lingerie / General Sizing */}
          <div className="glass-card p-8 overflow-x-auto animate-on-scroll">
            <h3 className="text-2xl font-serif mb-6 text-slate-900 dark:text-white">General Sizing</h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary/20 text-slate-900 dark:text-white">
                  <th className="py-4 font-bold">Size</th>
                  <th className="py-4 font-bold">US</th>
                  <th className="py-4 font-bold">Bust (in)</th>
                  <th className="py-4 font-bold">Waist (in)</th>
                  <th className="py-4 font-bold">Hips (in)</th>
                </tr>
              </thead>
              <tbody className="text-slate-500 dark:text-slate-400">
                {[
                  { size: 'XS', us: '0-2', bust: '32-33', waist: '24-25', hips: '34.5-35.5' },
                  { size: 'S', us: '4-6', bust: '34-35', waist: '26-27', hips: '36.5-37.5' },
                  { size: 'M', us: '8-10', bust: '36-37', waist: '28-29', hips: '38.5-39.5' },
                  { size: 'L', us: '12-14', bust: '38.5-40', waist: '30.5-32', hips: '41-42.5' },
                  { size: 'XL', us: '16', bust: '41.5', waist: '33.5', hips: '44' },
                ].map((row, idx) => (
                  <tr key={row.size} className={`border-b border-primary/10 hover:bg-primary/5 transition-colors duration-300 ${idx === 4 ? 'border-b-0' : ''}`}>
                    <td className="py-4 font-bold text-slate-900 dark:text-white">{row.size}</td>
                    <td className="py-4">{row.us}</td>
                    <td className="py-4">{row.bust}</td>
                    <td className="py-4">{row.waist}</td>
                    <td className="py-4">{row.hips}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="animate-on-scroll stagger-2">
            <h3 className="text-2xl font-serif mb-4 text-slate-900 dark:text-white">How to Measure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                { title: 'Bust', desc: 'Measure around the fullest part of your bust, keeping the measuring tape parallel to the floor.' },
                { title: 'Waist', desc: 'Measure around your natural waistline, which is the narrowest part of your torso.' },
                { title: 'Hips', desc: 'Stand with your feet together and measure around the fullest part of your hips.' },
              ].map((item, idx) => (
                <div key={item.title} className={`glass-card p-6 hover-lift stagger-${idx + 3}`}>
                  <h4 className="font-bold text-accent-gold uppercase tracking-widest text-sm mb-3">{item.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
