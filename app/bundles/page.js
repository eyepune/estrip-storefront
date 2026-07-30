'use client';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function BundlesPage() {
  const { addItem } = useCart();
  const [addedId, setAddedId] = useState(null);

  const bundles = [
    {
      id: 'starter-bundle',
      name: 'The Starter Kit',
      subtitle: 'Perfect for trying out our eco-friendly essentials.',
      price: 699,
      comparePrice: 852,
      discount: '18% OFF',
      image: 'https://estrip.in/cdn/shop/files/pdp_s3.png?width=800',
      features: ['1x SmartClean 3X (60 Loads)', '1x Dishwashing Sheets (60 Loads)']
    },
    {
      id: 'family-bundle',
      name: 'The Family Pack',
      subtitle: 'Everything you need for a busy, messy household.',
      price: 1399,
      comparePrice: 1775,
      discount: '21% OFF',
      badge: 'Most Popular',
      image: 'https://estrip.in/cdn/shop/files/pdp_s1_1.png?width=800',
      features: ['2x SmartClean 3X (120 Loads)', '1x SoftTouch Baby (60 Loads)', '1x Dishwashing Sheets', '1x Stain Remover Spray']
    },
    {
      id: 'ultimate-bundle',
      name: 'The Ultimate Home',
      subtitle: 'Completely eliminate plastic from your cleaning routine.',
      price: 1999,
      comparePrice: 2603,
      discount: '23% OFF',
      image: 'https://estrip.in/cdn/shop/files/pdp_s4.png?width=800',
      features: ['2x SmartClean 3X', '2x Dishwashing Sheets', '1x Floor Cleaner', '1x SoftTouch Baby', '1x Stain Remover']
    }
  ];

  const handleAddToCart = (bundle) => {
    addItem({
      ...bundle,
      subscriptionMode: false,
    });
    setAddedId(bundle.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <div className="bg-[var(--color-surface-container-low)] min-h-screen pb-24">
      
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--primary-deep)] to-[var(--color-secondary)] text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-[var(--color-primary)] font-black tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">Bundle & Save</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">The Best Value.</h1>
          <p className="text-[var(--color-primary-fixed)] font-medium text-lg md:text-xl">Stock up on your eco-friendly favorites and save up to 25%. Free shipping included on all bundles.</p>
        </div>
      </section>

      {/* Bundles Container */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="flex flex-col gap-12">
          {bundles.map((bundle, idx) => (
            <div key={bundle.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all">
              
              {/* Image Side */}
              <div className={`w-full md:w-1/2 relative bg-gray-50 min-h-[300px] md:min-h-[400px] flex items-center justify-center p-8 ${idx % 2 === 1 ? 'md:order-last' : ''}`}>
                <Image src={bundle.image} alt={bundle.name} fill className="object-contain p-8 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" unoptimized />
                <div className="absolute top-6 left-6 bg-[var(--color-primary)] text-white text-xs font-black px-4 py-2 rounded-[4px] uppercase tracking-widest shadow-md">
                  {bundle.discount}
                </div>
                {bundle.badge && (
                  <div className="absolute top-6 right-6 bg-[var(--color-tertiary)] text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-md">
                    {bundle.badge}
                  </div>
                )}
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">{bundle.name}</h2>
                <p className="text-gray-500 font-medium text-lg mb-8">{bundle.subtitle}</p>
                
                <div className="mb-8">
                  <h4 className="text-xs font-black tracking-widest uppercase text-gray-400 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {bundle.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 font-bold text-gray-700">
                        <span className="material-symbols-outlined text-[var(--color-primary)] text-[20px]">check_circle</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex flex-col">
                    <span className="text-gray-400 line-through font-bold text-lg">₹{bundle.comparePrice}</span>
                    <span className="text-4xl font-black text-gray-900">₹{bundle.price}</span>
                  </div>
                  
                  <button 
                    onClick={() => handleAddToCart(bundle)}
                    className={`btn w-full sm:w-auto h-[60px] px-10 rounded-[9999px] font-black text-sm uppercase tracking-widest shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 ${addedId === bundle.id ? 'bg-emerald-500 text-white shadow-emerald-500/30' : 'bg-[var(--color-primary)] hover:brightness-110 text-white shadow-[0_10px_30px_rgba(224,64,160,0.3)]'}`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{addedId === bundle.id ? 'check' : 'shopping_bag'}</span>
                    {addedId === bundle.id ? 'Added' : 'Add Bundle'}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
