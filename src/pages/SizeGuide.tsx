export default function SizeGuide() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Fit & Sizing</span>
        <h1 className="text-5xl font-serif mb-6 text-slate-900 dark:text-white">Find Your <span className="italic">Perfect Fit</span></h1>
        <div className="w-24 h-px bg-accent-gold mx-auto mb-8"></div>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Silkura garments are designed to drape beautifully and feel completely weightless. Use the measurements below to find your ideal size across our collections.
        </p>
      </div>

      <div className="space-y-16">
        {/* Lingerie / General Sizing */}
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 overflow-x-auto">
          <h3 className="text-2xl font-serif mb-6 text-slate-900 dark:text-white">General Sizing</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white">
                <th className="py-4 font-bold">Size</th>
                <th className="py-4 font-bold">US</th>
                <th className="py-4 font-bold">Bust (in)</th>
                <th className="py-4 font-bold">Waist (in)</th>
                <th className="py-4 font-bold">Hips (in)</th>
              </tr>
            </thead>
            <tbody className="text-slate-600 dark:text-slate-400">
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="py-4 font-bold">XS</td>
                <td className="py-4">0-2</td>
                <td className="py-4">32-33</td>
                <td className="py-4">24-25</td>
                <td className="py-4">34.5-35.5</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="py-4 font-bold">S</td>
                <td className="py-4">4-6</td>
                <td className="py-4">34-35</td>
                <td className="py-4">26-27</td>
                <td className="py-4">36.5-37.5</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="py-4 font-bold">M</td>
                <td className="py-4">8-10</td>
                <td className="py-4">36-37</td>
                <td className="py-4">28-29</td>
                <td className="py-4">38.5-39.5</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="py-4 font-bold">L</td>
                <td className="py-4">12-14</td>
                <td className="py-4">38.5-40</td>
                <td className="py-4">30.5-32</td>
                <td className="py-4">41-42.5</td>
              </tr>
              <tr>
                <td className="py-4 font-bold">XL</td>
                <td className="py-4">16</td>
                <td className="py-4">41.5</td>
                <td className="py-4">33.5</td>
                <td className="py-4">44</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-2xl font-serif mb-4 text-slate-900 dark:text-white">How to Measure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="border border-primary/20 p-6 rounded-xl">
              <h4 className="font-bold text-accent-gold uppercase tracking-widest text-sm mb-2">Bust</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Measure around the fullest part of your bust, keeping the measuring tape parallel to the floor.</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-xl">
              <h4 className="font-bold text-accent-gold uppercase tracking-widest text-sm mb-2">Waist</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Measure around your natural waistline, which is the narrowest part of your torso.</p>
            </div>
            <div className="border border-primary/20 p-6 rounded-xl">
              <h4 className="font-bold text-accent-gold uppercase tracking-widest text-sm mb-2">Hips</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Stand with your feet together and measure around the fullest part of your hips.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
