'use client';
import ProductCard from '@/app/components/ProductCard';
import { products } from '@/lib/products';
import Image from 'next/image';

export default function ShopPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Massive Hero Banner */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
        <Image 
          src="https://estrip.in/cdn/shop/files/2_25.png?width=1200" 
          alt="Shop All Products" 
          fill 
          className="object-cover opacity-40 mix-blend-screen"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-[var(--color-primary)] font-black tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block">E-strip Eco-Friendly Cleaning</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Shop All Products</h1>
          <p className="text-gray-300 font-medium text-lg md:text-xl max-w-2xl mx-auto">High-performance cleaning solutions without the plastic waste. Good for your home, better for the planet.</p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="bg-white border-b border-gray-100 sticky top-[64px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-3 overflow-x-auto hide-scrollbar">
          {['All Products', 'Laundry', 'Kitchen', 'Bathroom', 'Bundles'].map((cat, i) => (
            <button key={cat} className={`whitespace-nowrap px-6 py-2 rounded-full font-bold text-sm transition-colors border ${i === 0 ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-900 hover:text-gray-900'}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Promo Banner Mid-Page */}
      <div className="w-full bg-[#E30613] text-white py-3 px-4 text-center">
        <span className="font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[18px]">redeem</span>
          Free Shipping on all orders over ₹599
        </span>
      </div>

      {/* Product Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center opacity-80">
          <div className="flex flex-col items-center group cursor-pointer">
            <span className="material-symbols-outlined text-[48px] mb-4 text-gray-900 group-hover:-translate-y-2 transition-transform">eco</span>
            <span className="font-black text-sm text-gray-900 uppercase tracking-widest">Plastic Free</span>
            <p className="text-xs text-gray-500 mt-2 font-medium">100% compostable boxes</p>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <span className="material-symbols-outlined text-[48px] mb-4 text-gray-900 group-hover:-translate-y-2 transition-transform">cruelty_free</span>
            <span className="font-black text-sm text-gray-900 uppercase tracking-widest">Cruelty Free</span>
            <p className="text-xs text-gray-500 mt-2 font-medium">Never tested on animals</p>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <span className="material-symbols-outlined text-[48px] mb-4 text-gray-900 group-hover:-translate-y-2 transition-transform">science</span>
            <span className="font-black text-sm text-gray-900 uppercase tracking-widest">Non-Toxic</span>
            <p className="text-xs text-gray-500 mt-2 font-medium">No harsh chemicals</p>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <span className="material-symbols-outlined text-[48px] mb-4 text-gray-900 group-hover:-translate-y-2 transition-transform">airport_shuttle</span>
            <span className="font-black text-sm text-gray-900 uppercase tracking-widest">Fast Delivery</span>
            <p className="text-xs text-gray-500 mt-2 font-medium">Ships out same day</p>
          </div>
        </div>
      </section>

    </div>
  );
}
