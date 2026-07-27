'use client';
import { motion } from 'framer-motion';

export default function ComparisonTable() {
  const features = [
    { name: '100% Plastic Free Packaging', us: true, them: false },
    { name: 'Pre-measured (No mess)', us: true, them: false },
    { name: 'Zero harsh chemicals', us: true, them: false },
    { name: 'Carbon neutral delivery', us: true, them: false },
    { name: 'Works in hot & cold water', us: true, them: true },
    { name: 'Cruelty-Free', us: true, them: false },
    { name: 'Lightweight & Space Saving', us: true, them: false },
  ];

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">WHY CHOOSE US?</h2>
        <p className="text-gray-500 font-medium text-lg">See how we stack up against traditional supermarket brands.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100">
        
        {/* Header Row */}
        <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
          <div className="p-4 md:p-6 flex items-center justify-center border-r border-gray-200">
            <span className="font-bold text-gray-400 uppercase tracking-widest text-xs md:text-sm">Features</span>
          </div>
          <div className="p-4 md:p-6 flex flex-col items-center justify-center border-r border-gray-200 bg-[var(--color-primary)]/5">
            <img src="https://estrip.in/cdn/shop/files/Primary-Logo_Blue-scaled_1.png?v=1777612281" alt="E-strip Logo" className="h-6 md:h-10 object-contain mb-1" />
            <span className="text-[10px] md:text-xs font-bold text-[var(--color-primary)] mt-1 uppercase tracking-widest bg-[var(--color-primary)]/10 px-2 py-0.5 rounded-full">Winner</span>
          </div>
          <div className="p-4 md:p-6 flex flex-col items-center justify-center opacity-50 grayscale">
            <span className="text-lg md:text-xl font-black tracking-tighter text-gray-600">Traditional</span>
            <span className="text-lg md:text-xl font-black tracking-tighter text-gray-600">Liquids</span>
          </div>
        </div>

        {/* Feature Rows */}
        {features.map((feature, idx) => (
          <div key={idx} className={`grid grid-cols-3 border-b border-gray-100 hover:bg-gray-50/50 transition-colors ${idx === features.length - 1 ? 'border-b-0' : ''}`}>
            
            <div className="p-4 md:p-6 flex items-center border-r border-gray-100">
              <span className="font-bold text-gray-700 text-sm md:text-base">{feature.name}</span>
            </div>
            
            <div className="p-4 md:p-6 flex items-center justify-center border-r border-gray-100 bg-[var(--color-primary)]/5">
              {feature.us ? (
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-emerald-600 text-[20px] font-bold">check</span>
                </div>
              ) : (
                <span className="material-symbols-outlined text-gray-300">remove</span>
              )}
            </div>
            
            <div className="p-4 md:p-6 flex items-center justify-center">
              {feature.them ? (
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center opacity-50">
                  <span className="material-symbols-outlined text-emerald-600 text-[20px] font-bold">check</span>
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-red-500 text-[20px] font-bold">close</span>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-2xl font-black text-gray-900 mb-2">₹5.88 per wash</p>
        <p className="text-gray-500 font-medium text-sm mb-6">When you subscribe to the Ultimate Bundle</p>
        <a href="#bundle-widget" className="btn bg-[var(--primary-deep)] text-white hover:opacity-90 px-12 py-4 text-sm font-bold tracking-widest uppercase rounded-[9999px] inline-block shadow-lg">
          Make The Switch
        </a>
      </div>
    </section>
  );
}
