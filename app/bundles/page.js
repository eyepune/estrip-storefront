'use client';
import { motion } from 'framer-motion';
import ProductCard from '@/app/components/ProductCard';

const bundles = [
  {
    id: 'bundle-whole-home',
    name: 'The Whole Home Kit',
    price: 1499,
    description: 'The ultimate eco-friendly overhaul for your entire household. Includes 3x Laundry, 2x Dishwashing, 1x Baby Sensitive.',
    image: '/Whole_Home_Cleaning_Kit_arranged_202607210117.jpeg',
    badge: 'Save 30%',
    rating: '5.0',
    reviews: '3,842',
    color: 'tertiary',
    loads: 'Includes 360 Loads Total'
  },
  {
    id: 'bundle-kitchen-laundry',
    name: 'Kitchen & Laundry',
    price: 999,
    description: 'Our best-selling essentials for a sparkling clean home. Includes 2x Laundry, 2x Dishwashing, Microfiber Cloth.',
    image: '/Kitchen_sink_and_laundry_basket_202607210119.jpeg',
    badge: 'Popular',
    rating: '4.9',
    reviews: '2,310',
    color: 'secondary',
    loads: 'Includes 240 Loads Total'
  },
  {
    id: 'bundle-baby-sensitive',
    name: 'Baby & Sensitive',
    price: 1199,
    description: 'Pure, powerful cleaning designed for the most delicate skin. Includes 4x Baby Laundry, Fragrance-Free Option.',
    image: '/Baby_blankets_and_teddy_bear_202607210121.jpeg',
    badge: 'Hypoallergenic',
    rating: '4.8',
    reviews: '1,504',
    color: 'primary',
    loads: 'Includes 240 Loads Total'
  }
];

export default function BundlesPage() {
  return (
    <div className="relative min-h-screen selection:bg-[var(--color-primary-fixed)] selection:text-[var(--color-on-primary-fixed)]">
      
      {/* Immersive Video Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#f8f9ff] to-[#fff5fa]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover mix-blend-multiply opacity-50"
        >
          <source src="/White_linen_towels_stacked_neatly_202607210041.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 pt-8">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight mb-4 drop-shadow-sm"
              >
                Starter Kits & <span className="text-[var(--color-tertiary)]">Bundles</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg sm:text-xl text-gray-700 font-medium drop-shadow-sm"
              >
                Switch to a cleaner lifestyle with our curated starter kits. Save up to 30% when you bundle your favorite eco-friendly laundry and kitchen sheets.
              </motion.p>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {bundles.map((bundle, index) => (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={bundle} view="desktop" />
              </motion.div>
            ))}
          </div>

          {/* Mobile Grid */}
          <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-6 mb-24">
            {bundles.map((bundle, index) => (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={bundle} view="mobile" />
              </motion.div>
            ))}
          </div>

          {/* Banner */}
          <div className="bg-white/60 backdrop-blur-2xl border border-white/50 rounded-3xl p-6 sm:p-12 text-center relative overflow-hidden shadow-xl">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[var(--color-primary-fixed)] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[var(--color-tertiary-fixed)] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 drop-shadow-sm">Build Your Own Bundle</h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-8 font-medium">
                Mix and match your favorite products to create a custom cleaning routine that works perfectly for your home.
              </p>
              <button className="bg-[var(--color-primary)] text-white font-black py-4 px-10 rounded-full pill-shadow-primary hover:scale-105 transition-transform active:scale-95 text-base sm:text-lg">
                Start Building
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
