'use client';
import { Suspense, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import ProductCard from '@/app/components/ProductCard';
import { products } from '@/lib/products';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setIsNavHidden } = useCart();
  const gridRef = useRef(null);
  
  // Detect if user is scrolling through the products
  const isGridInView = useInView(gridRef, { margin: "0px 0px -50% 0px" });

  useEffect(() => {
    setIsNavHidden(isGridInView);
    return () => setIsNavHidden(false); // cleanup on unmount
  }, [isGridInView, setIsNavHidden]);

  const categoryParam = searchParams.get('category');
  
  // Map internal categories with icons and specific brand colors for dynamic styling
  const categories = [
    { id: 'all', label: 'All Products', icon: 'grid_view', color: 'var(--primary-blue)' },
    { id: 'laundry', label: 'For Laundry', icon: 'local_laundry_service', color: 'var(--color-secondary)' },
    { id: 'floorings', label: 'For Floorings', icon: 'cleaning_services', color: 'var(--color-primary)' },
    { id: 'kitchen', label: 'For Kitchen', icon: 'restaurant', color: 'var(--color-tertiary)' },
    { id: 'baby', label: 'For Babycare', icon: 'child_care', color: '#a855f7' }
  ];

  const activeCategory = categoryParam || 'all';
  const activeColor = categories.find(c => c.id === activeCategory)?.color || 'var(--primary-blue)';

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleCategoryClick = (catId) => {
    if (catId === 'all') {
      router.push('/shop');
    } else {
      router.push(`/shop?category=${catId}`);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* High-Converting Typographic Header (Replaces massive hero) */}
      <section className="pt-16 pb-12 px-4 text-center max-w-4xl mx-auto">
        <span className="text-[var(--color-primary)] font-black tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">
          E-strip Eco-Friendly Cleaning
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
          Shop All Products
        </h1>
        <p className="text-gray-500 font-medium text-lg md:text-xl max-w-2xl mx-auto">
          High-performance cleaning solutions without the plastic waste. Good for your home, better for the planet.
        </p>
      </section>

      {/* Category Filter Navigation (Sticky, Centered, Dynamic Colors) */}
      {/* Sticks right under the Global Navbar's scrolling announcement bar (which is ~40px) */}
      <section className="bg-white/95 backdrop-blur-xl border-y border-[var(--color-outline-variant)] sticky top-[38px] sm:top-[40px] z-40 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-3 overflow-x-auto hide-scrollbar scrollbar-hide md:justify-center">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button 
                key={cat.id} 
                onClick={() => handleCategoryClick(cat.id)}
                className={`shrink-0 flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-[var(--color-surface-container-low)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)]'
                }`}
                style={isActive ? { background: cat.color, borderColor: cat.color, boxShadow: `0 8px 25px ${cat.color}30` } : {}}
              >
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {cat.icon}
                </span>
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Trust Strip (Moved above products to build instant confidence) */}
      <section className="bg-gray-50 py-8 border-b border-[var(--color-outline-variant)]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center group">
            <span className="material-symbols-outlined text-[32px] md:text-[40px] mb-2 text-[var(--color-primary)]">eco</span>
            <span className="font-black text-[10px] md:text-xs text-[var(--color-on-surface)] uppercase tracking-widest">Plastic Free</span>
          </div>
          <div className="flex flex-col items-center group">
            <span className="material-symbols-outlined text-[32px] md:text-[40px] mb-2 text-[var(--color-secondary)]">cruelty_free</span>
            <span className="font-black text-[10px] md:text-xs text-[var(--color-on-surface)] uppercase tracking-widest">Cruelty Free</span>
          </div>
          <div className="flex flex-col items-center group">
            <span className="material-symbols-outlined text-[32px] md:text-[40px] mb-2 text-[var(--color-tertiary)]">science</span>
            <span className="font-black text-[10px] md:text-xs text-[var(--color-on-surface)] uppercase tracking-widest">Non-Toxic</span>
          </div>
          <div className="flex flex-col items-center group">
            <span className="material-symbols-outlined text-[32px] md:text-[40px] mb-2 text-[var(--color-primary)]">airport_shuttle</span>
            <span className="font-black text-[10px] md:text-xs text-[var(--color-on-surface)] uppercase tracking-widest">Fast Delivery</span>
          </div>
        </div>
      </section>

      {/* Product Grid (Wrapped in Ref to hide Navbar when in view) */}
      <section ref={gridRef} className="py-16 px-4 max-w-7xl mx-auto min-h-[50vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 font-medium">No products found for this category.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>}>
      <ShopContent />
    </Suspense>
  );
}
