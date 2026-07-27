'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/app/components/ProductCard';
import ScrollVideoSequence from '@/app/components/ScrollVideoSequence';
import ComparisonTable from '@/app/components/ComparisonTable';
import HomepagePurchaseWidget from '@/app/components/HomepagePurchaseWidget';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1 & 2. Hero Banner (Scroll Video Sequence with Callout) */}
      <ScrollVideoSequence totalFrames={300} />

      {/* 3. Impact Bar */}
      <section className="bg-[var(--color-primary)] text-white py-4 md:py-6 overflow-hidden relative shadow-inner">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 md:gap-20 px-5 md:px-10">
              <span className="text-xl md:text-2xl font-black uppercase tracking-widest">🌏 Over 8,200,000 Plastic Bottles Saved</span>
              <span className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#ffe8e8]">Make the Switch Today</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Featured Promo Cards Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-gray-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Our Best Sellers</h2>
          <p className="text-gray-500 font-medium text-lg">Save up to 50% when you bundle.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. New Launch Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-left md:w-2/3">
            <span className="bg-yellow-400 text-yellow-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block shadow-sm">New Launch</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">Meet the Stain Remover Spray</h2>
            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-xl">Enzyme-activated spot cleaner that lifts fresh stains in seconds before they set.</p>
          </div>
          <div className="md:w-1/3 flex justify-end w-full">
            <Link href="/products/stain-remover-spray" className="w-full md:w-auto text-center btn bg-yellow-400 hover:bg-yellow-300 text-yellow-900 px-10 py-5 rounded-[9999px] font-black text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(250,204,21,0.3)] hover:-translate-y-1 transition-transform">
              Shop Now — Up to 33% Off
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Shop By Category */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-12 tracking-tight">Shop By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: 'Laundry', img: 'https://estrip.in/cdn/shop/files/pdp_s3.png?width=400', link: '/shop?category=laundry' },
            { name: 'Kitchen', img: 'https://estrip.in/cdn/shop/files/pdp_s4.png?width=400', link: '/shop?category=dish' },
            { name: 'Bathroom', img: 'https://estrip.in/cdn/shop/files/pdp_s5.png?width=400', link: '/shop?category=floor' },
            { name: 'Baby Care', img: 'https://estrip.in/cdn/shop/files/pdp_s1_1.png?width=400', link: '/shop?category=baby' }
          ].map((cat, i) => (
            <Link key={i} href={cat.link} className="group flex flex-col items-center">
              <div className="w-full aspect-square bg-[#f6f6f6] rounded-2xl overflow-hidden mb-4 relative p-6 border border-gray-100 group-hover:border-gray-300 transition-colors">
                <Image src={cat.img} alt={cat.name} fill className="object-contain mix-blend-multiply p-4 group-hover:scale-110 transition-transform duration-500" unoptimized />
              </div>
              <span className="btn bg-[var(--primary-deep)] text-white w-full py-3 rounded-full text-xs font-bold tracking-widest group-hover:bg-[var(--color-primary)] transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. Before & After Social Proof */}
      <section className="bg-gray-900 py-24 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-white">Seeing is Believing.</h2>
            <p className="text-gray-400 font-medium text-lg">Watch how our plant-based enzymes break down the toughest stains.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((v) => (
              <div key={v} className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] relative">
                {/* Fallback to image if video not present, using estrip assets */}
                <Image src={`https://estrip.in/cdn/shop/files/2_25.png?width=600`} alt={`Proof ${v}`} fill className="object-cover opacity-80 mix-blend-screen" unoptimized />
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="self-end bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-widest border border-white/20">
                    Turmeric Stain
                  </div>
                  <div>
                    <span className="material-symbols-outlined text-4xl mb-2 text-[var(--color-primary)] drop-shadow-md">play_circle</span>
                    <p className="font-bold text-lg drop-shadow-md">"Completely vanished in cold water!"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Homepage Purchase Widget */}
      <HomepagePurchaseWidget />

      {/* 10. Trust Badges */}
      <section className="bg-[#f6f6f6] py-16 px-4 border-t border-gray-200">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
              <span className="material-symbols-outlined text-[32px] text-gray-900">verified</span>
            </div>
            <h4 className="font-black text-gray-900 text-sm tracking-wide uppercase">30-Day Guarantee</h4>
            <p className="text-xs text-gray-500 mt-1 font-medium">Love it or your money back</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
              <span className="material-symbols-outlined text-[32px] text-gray-900">rate_review</span>
            </div>
            <h4 className="font-black text-gray-900 text-sm tracking-wide uppercase">10,000+ Reviews</h4>
            <p className="text-xs text-gray-500 mt-1 font-medium">From happy customers</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
              <span className="material-symbols-outlined text-[32px] text-gray-900">eco</span>
            </div>
            <h4 className="font-black text-gray-900 text-sm tracking-wide uppercase">Plastic Free</h4>
            <p className="text-xs text-gray-500 mt-1 font-medium">100% compostable packaging</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
              <span className="material-symbols-outlined text-[32px] text-gray-900">local_shipping</span>
            </div>
            <h4 className="font-black text-gray-900 text-sm tracking-wide uppercase">Carbon Neutral</h4>
            <p className="text-xs text-gray-500 mt-1 font-medium">Shipping on every order</p>
          </div>
        </div>
      </section>

      {/* 11. Comparison Table */}
      <ComparisonTable />

      {/* 12. Benefit Grid */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Small Sheets. Massive Impact.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
              <div className="aspect-[4/3] bg-pink-50 relative overflow-hidden">
                <Image src="/images/plastic_waste.png" alt="No Plastic" fill className="object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply" unoptimized />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-black text-gray-900 mb-3">No Plastic Jugs</h3>
                <p className="text-gray-500 font-medium">Over 1 billion plastic laundry jugs are discarded every year. Our cardboard packaging is 100% compostable and recyclable.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
              <div className="aspect-[4/3] bg-blue-50 relative overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-[100px] text-blue-200">water_drop</span>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-black text-gray-900 mb-3">No Artificial Dyes</h3>
                <p className="text-gray-500 font-medium">Traditional detergents are 90% water and packed with optical brighteners and synthetic dyes. We use only what's needed to clean.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
              <div className="aspect-[4/3] bg-emerald-50 relative overflow-hidden flex items-center justify-center">
                <span className="material-symbols-outlined text-[100px] text-emerald-200">scale</span>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-black text-gray-900 mb-3">Lightweight & Pre-Measured</h3>
                <p className="text-gray-500 font-medium">No more measuring sticky liquid or dealing with messy powder spills. Simply toss in one ultra-concentrated sheet and you're done.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Value Props Bar */}
      <section className="bg-[var(--primary-deep)] text-white py-8 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-6">
          <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[var(--color-primary)]">public</span><span className="font-bold tracking-widest uppercase text-sm">Planet First</span></div>
          <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[var(--color-primary)]">science</span><span className="font-bold tracking-widest uppercase text-sm">No Nasties</span></div>
          <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[var(--color-primary)]">delete</span><span className="font-bold tracking-widest uppercase text-sm">Less Waste</span></div>
          <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[var(--color-primary)]">group</span><span className="font-bold tracking-widest uppercase text-sm">People Powered</span></div>
        </div>
      </section>

      {/* 14. Plant Derived Ingredients Carousel */}
      <section className="py-24 px-4 bg-white relative overflow-hidden border-y border-gray-100">
        <div className="absolute inset-0 opacity-5 bg-[url('/images/coconut_splash.png')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight text-gray-900">Powered by Nature.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><span className="material-symbols-outlined">psychiatry</span></div>
              <h4 className="font-black text-lg mb-2 text-gray-900">Coconut Surfactants</h4>
              <p className="text-gray-500 text-sm font-medium">Naturally lifts dirt and grease without stripping fabrics.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><span className="material-symbols-outlined">bubble_chart</span></div>
              <h4 className="font-black text-lg mb-2 text-gray-900">5-Enzyme Blend</h4>
              <p className="text-gray-500 text-sm font-medium">Targets specific stains like proteins, starches, and oils at the molecular level.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><span className="material-symbols-outlined">water_drop</span></div>
              <h4 className="font-black text-lg mb-2 text-gray-900">Essential Oils</h4>
              <p className="text-gray-500 text-sm font-medium">Provides a light, natural scent without overpowering synthetic fragrances.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4"><span className="material-symbols-outlined">layers</span></div>
              <h4 className="font-black text-lg mb-2 text-gray-900">PVA Film</h4>
              <p className="text-gray-500 text-sm font-medium">A biodegradable polymer that dissolves completely leaving zero microplastics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 15. UGC Video Reviews */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 mb-12 tracking-tight">Don't just take our word for it.</h2>
          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x">
            {[1, 2, 3, 4, 5].map((v) => (
              <div key={v} className="w-[280px] shrink-0 aspect-[9/16] bg-gray-100 rounded-2xl overflow-hidden relative shadow-lg snap-center">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <span className="material-symbols-outlined text-6xl text-gray-400">play_circle</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex text-yellow-400 text-[14px] mb-1">★★★★★</div>
                  <p className="text-white font-bold text-sm leading-tight">"This completely changed how I do laundry!"</p>
                  <p className="text-gray-300 text-xs mt-1">@ecocleaner_{v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Brand Mission */}
      <section className="w-full bg-[#f6f6f6] py-24 text-center px-4 border-y border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Why E-strip?</h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium mb-10 leading-relaxed">
            We looked at the cleaning aisle and saw a problem: outdated formats that were heavy on the planet and weak on performance. We believe that high-quality performance and planetary responsibility shouldn't be a choice—they must go hand in hand. Every sheet we produce is a step towards a cleaner home and a healthier earth.
          </p>
          <Link href="/about" className="btn bg-gray-900 text-white hover:bg-[var(--color-primary)] px-10 py-4 rounded-[9999px] font-bold text-sm tracking-widest shadow-lg">
            Read Our Full Story
          </Link>
        </div>
      </section>

      {/* 17. Retailer Logos (Skipped/Merged with As Seen In for simplicity) */}
      
      {/* 18 & 19. Customer Review Carousel */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-2 tracking-tight">Over 10,000 Happy Customers</h2>
          <div className="flex justify-center text-[#FFC107] text-2xl mb-12">★★★★★</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', text: 'Absolutely love these sheets. They take up zero space in my laundry room and my clothes have never smelled better. Even got out a stubborn grass stain on my son\'s jeans.' },
              { name: 'David L.', text: 'I was skeptical about moving away from liquid, but E-strip proved me wrong. It dissolves perfectly in cold water and the subscription makes it so I never run out.' },
              { name: 'Priya K.', text: 'The fact that there is no plastic jug to throw away makes me so happy. The clean is incredible and it\'s gentle on my sensitive skin. Highly recommend the Ultimate Bundle!' },
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-left flex flex-col h-full shadow-sm">
                <div className="flex text-[#FFC107] text-lg mb-4">★★★★★</div>
                <p className="text-gray-700 font-medium leading-relaxed mb-6 flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-black text-gray-500">{review.name.charAt(0)}</div>
                  <div>
                    <p className="font-black text-gray-900 text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500 font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-emerald-500">verified</span> Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
