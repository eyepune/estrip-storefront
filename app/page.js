'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/app/components/ProductCard';
import ScrollVideoSequence from '@/app/components/ScrollVideoSequence';
import RoomByRoomShowcase from '@/app/components/RoomByRoomShowcase';
import HomepagePurchaseWidget from '@/app/components/HomepagePurchaseWidget';
import PoweredByNature from '@/app/components/PoweredByNature';
import UGCVideoCard from '@/app/components/UGCVideoCard';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <div className="bg-[var(--color-surface)] min-h-screen">
      
      {/* 1 & 2. Hero Banner (Scroll Video Sequence with Callout) */}
      <ScrollVideoSequence totalFrames={760}>
        <div className="flex flex-col items-center justify-center p-6 text-center">
          
          {/* Category Filter Navigation (Hero) */}
          <div className="flex gap-3 overflow-x-auto hide-scrollbar scrollbar-hide justify-center mb-6 w-full max-w-full pointer-events-auto">
            {[
              { id: 'floorings', label: 'For Floorings', icon: 'cleaning_services', color: 'var(--color-primary)' },
              { id: 'laundry', label: 'For Laundry', icon: 'local_laundry_service', color: 'var(--color-secondary)' },
              { id: 'kitchen', label: 'For Kitchen', icon: 'restaurant', color: 'var(--color-tertiary)' },
            ].map((cat) => (
              <Link 
                key={cat.id} 
                href={`/shop?category=${cat.id}`}
                className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-105 group"
              >
                <span className="material-symbols-outlined text-[16px] group-hover:text-[var(--color-primary)] transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {cat.icon}
                </span>
                {cat.label}
              </Link>
            ))}
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] mb-6 tracking-tight">
            The Future of Clean.
          </h2>
          <p className="text-xl md:text-2xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium max-w-2xl mb-10 bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm">
            Scroll to see how our plant-powered sheets dissolve instantly and power through stains.
          </p>
          <a href="/shop" className="pointer-events-auto btn bg-white text-rose-600 px-12 py-4 text-sm font-black tracking-widest uppercase rounded-[9999px] ring-4 ring-rose-600 shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:bg-rose-600 hover:text-white transition-all duration-300">
            Shop Now
          </a>
        </div>
      </ScrollVideoSequence>

      {/* 3. Impact Bar */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-500 to-rose-500 text-white py-3 md:py-4 overflow-hidden relative shadow-inner border-y border-white/10">
        {/* Subtle noise/texture overlay for a premium matte finish */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
        <div className="flex whitespace-nowrap animate-marquee w-max relative z-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] drop-shadow-sm">🌏 100% Plastic-Free Packaging</span>
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-yellow-300 drop-shadow-sm">Make the Switch Today</span>
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] drop-shadow-sm">✨ Tough on Indian Stains</span>
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-yellow-300 drop-shadow-sm">Safe for Sensitive Skin</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Featured Promo Cards Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-[var(--color-surface-container-low)]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-[var(--color-on-surface)] mb-4 tracking-tight">Our Best Sellers</h2>
          <p className="text-[var(--color-on-surface-variant)] font-medium text-lg">Save up to 50% when you bundle.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. New Launch Banner */}
      <ScrollVideoSequence totalFrames={300} folderName="spray-frames">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 w-full px-4 pointer-events-none">
          <div className="text-left md:w-1/2 pointer-events-auto">
            <span className="bg-white/10 border border-white/20 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block backdrop-blur-sm shadow-sm">New Launch</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-md">Meet the Stain Remover Spray.</h2>
            <p className="text-gray-200 text-lg md:text-xl font-medium max-w-xl mb-10 leading-relaxed drop-shadow-md">An enzyme-activated spot cleaner that lifts fresh stains in seconds before they permanently set.</p>
            <Link href="/products/stain-remover-spray" className="inline-block w-full md:w-auto text-center btn bg-white text-rose-600 px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest ring-4 ring-rose-600 hover:bg-rose-600 hover:text-white shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1">
              Shop Now — Up to 33% Off
            </Link>
          </div>
          <div className="md:w-1/2 w-full flex justify-center md:justify-end pointer-events-auto">
            <div className="w-full max-w-xl aspect-video rounded-2xl border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative ring-1 ring-white/10 group bg-black/40 backdrop-blur-md">
              <video 
                src="/Turmeric_stain_dissolving_on_fabric_202607292226.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 mix-blend-screen"
              />
            </div>
          </div>
        </div>
      </ScrollVideoSequence>

      {/* 7. Shop By Category */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center text-[var(--color-on-surface)] mb-12 tracking-tight">Shop By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { 
              name: 'Laundry', 
              img: 'https://estrip.in/cdn/shop/files/pdp_s3.png?width=400', 
              link: '/shop?category=laundry',
              borderHover: 'group-hover:border-blue-600',
              text: 'text-blue-600',
              ring: 'ring-blue-600',
              bgHover: 'group-hover:bg-blue-600'
            },
            { 
              name: 'Kitchen', 
              img: 'https://estrip.in/cdn/shop/files/pdp_s4.png?width=400', 
              link: '/shop?category=dish',
              borderHover: 'group-hover:border-yellow-500',
              text: 'text-yellow-600', // Slightly darker text for readability on white
              ring: 'ring-yellow-500',
              bgHover: 'group-hover:bg-yellow-500'
            },
            { 
              name: 'Bathroom', 
              img: 'https://estrip.in/cdn/shop/files/pdp_s5.png?width=400', 
              link: '/shop?category=floor',
              borderHover: 'group-hover:border-pink-500',
              text: 'text-pink-500',
              ring: 'ring-pink-500',
              bgHover: 'group-hover:bg-pink-500'
            },
            { 
              name: 'Baby Care', 
              img: 'https://estrip.in/cdn/shop/files/pdp_s1_1.png?width=400', 
              link: '/shop?category=baby',
              borderHover: 'group-hover:border-purple-500',
              text: 'text-purple-500',
              ring: 'ring-purple-500',
              bgHover: 'group-hover:bg-purple-500'
            }
          ].map((cat, i) => (
            <Link key={i} href={cat.link} className="group flex flex-col items-center">
              <div className={`w-full aspect-square bg-[var(--color-surface-container-low)] rounded-2xl overflow-hidden mb-4 relative p-6 border border-[var(--color-outline-variant)] ${cat.borderHover} transition-colors`}>
                <Image src={cat.img} alt={cat.name} fill className="object-contain mix-blend-multiply p-4 group-hover:scale-110 transition-transform duration-500" unoptimized />
              </div>
              <span className={`btn bg-white ${cat.text} w-full py-3 rounded-full text-xs font-black tracking-widest uppercase ring-4 ${cat.ring} ${cat.bgHover} group-hover:text-white transition-all duration-300 shadow-sm`}>
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. Before & After Social Proof */}
      <section className="bg-white py-20 md:py-24 px-4 border-y border-gray-100 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-gray-900">Seeing is Believing.</h2>
            <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">Watch how our plant-based enzymes break down the toughest stains across your home.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                src: "/Floor_cleaner_before_and_after_202607292324.mp4",
                badge: "Floor Cleaner",
                quote: "\"Even muddy paw prints disappeared instantly!\"",
                borderColor: "ring-[var(--color-tertiary)]", // Bright Blue/Cyan
                badgeColor: "bg-[var(--color-tertiary)]"
              },
              {
                src: "/Cleaning_comparison_white_cotton…_1080p_202607292321.mp4",
                badge: "Laundry Detergent",
                quote: "\"Completely vanished in cold water!\"",
                borderColor: "ring-[var(--color-primary)]", // Pink
                badgeColor: "bg-[var(--color-primary)]"
              },
              {
                src: "/Dishwashing_cleaning_comparison_…_1080p_202607292326.mp4",
                badge: "Dishwashing",
                quote: "\"Cuts through baked-on grease like magic.\"",
                borderColor: "ring-[var(--color-secondary)]", // Purple
                badgeColor: "bg-[var(--color-secondary)]"
              }
            ].map((v, i) => (
              <div key={i} className={`bg-white rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] aspect-[4/5] relative group cursor-pointer ring-4 ${v.borderColor} hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-300`}>
                <video 
                  ref={(el) => { if (el) { el.muted = true; el.play().catch(()=>{}); } }}
                  src={v.src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Gradient Overlay just for text readability at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"></div>

                <div className="absolute inset-0 flex flex-col justify-between p-5 pointer-events-none">
                  <div className={`self-end ${v.badgeColor} px-3 py-1.5 rounded-full text-[11px] font-black tracking-widest text-white shadow-sm uppercase`}>
                    {v.badge}
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg text-white drop-shadow-md leading-snug">{v.quote}</p>
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
      <section className="bg-[var(--color-surface-container)] py-16 px-4 border-t border-[var(--color-outline-variant)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-[var(--color-outline-variant)]">
              <span className="material-symbols-outlined text-[32px] text-[var(--color-secondary)]">rate_review</span>
            </div>
            <h4 className="font-black text-[var(--color-on-surface)] text-sm tracking-wide uppercase">10,000+ Reviews</h4>
            <p className="text-xs text-[var(--color-on-surface-variant)] mt-1 font-medium">From happy customers</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-[var(--color-outline-variant)]">
              <span className="material-symbols-outlined text-[32px] text-[var(--color-tertiary)]">eco</span>
            </div>
            <h4 className="font-black text-[var(--color-on-surface)] text-sm tracking-wide uppercase">Plastic Free</h4>
            <p className="text-xs text-[var(--color-on-surface-variant)] mt-1 font-medium">100% compostable packaging</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-[var(--color-outline-variant)]">
              <span className="material-symbols-outlined text-[32px] text-[var(--color-primary)]">local_shipping</span>
            </div>
            <h4 className="font-black text-[var(--color-on-surface)] text-sm tracking-wide uppercase">Carbon Neutral</h4>
            <p className="text-xs text-[var(--color-on-surface-variant)] mt-1 font-medium">Shipping on every order</p>
          </div>
        </div>
      </section>

      {/* 11. Room-by-Room Ecosystem */}
      <RoomByRoomShowcase />

      {/* 12. Benefit Grid */}
      <section className="py-16 px-4 bg-[var(--color-surface-container-low)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-on-surface)] mb-3 tracking-tight">Small Sheets. Massive Impact.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border-4 border-[var(--color-tertiary)] group">
              <div className="aspect-video bg-[var(--color-primary)]/5 relative overflow-hidden">
                <video 
                  src="/E-STRIP_VS_PLASTIC_comparison_1080p_202607300203.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-black text-[var(--color-on-surface)] mb-2">No Plastic Jugs</h3>
                <p className="text-[var(--color-on-surface-variant)] text-sm font-medium">Over 1 billion plastic laundry jugs are discarded every year. Our cardboard packaging is 100% compostable and recyclable.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border-4 border-[var(--color-primary)] group">
              <div className="aspect-video bg-[var(--color-tertiary)]/5 relative overflow-hidden flex items-center justify-center">
                <video 
                  src="/Detergent_sheet_dissolving_in_water_202607300149.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-black text-[var(--color-on-surface)] mb-2">No Artificial Dyes</h3>
                <p className="text-[var(--color-on-surface-variant)] text-sm font-medium">Traditional detergents are 90% water and packed with optical brighteners and synthetic dyes. We use only what's needed to clean.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border-4 border-[var(--color-secondary)] group">
              <div className="aspect-video bg-[var(--color-secondary)]/5 relative overflow-hidden flex items-center justify-center">
                <video 
                  src="/E-STRIP_VS_LIQUIDS_comparison_1080p_202607300242.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-black text-[var(--color-on-surface)] mb-2">Lightweight & Pre-Measured</h3>
                <p className="text-[var(--color-on-surface-variant)] text-sm font-medium">No more measuring sticky liquid or dealing with messy powder spills. Simply toss in one ultra-concentrated sheet and you're done.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Value Props Bar */}
      <section className="bg-[var(--primary-deep)] text-white py-8 border-y border-[var(--color-secondary)]/20">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-6">
          <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[var(--color-primary)]">public</span><span className="font-bold tracking-widest uppercase text-sm">Planet First</span></div>
          <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[var(--color-primary)]">science</span><span className="font-bold tracking-widest uppercase text-sm">No Nasties</span></div>
          <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[var(--color-primary)]">delete</span><span className="font-bold tracking-widest uppercase text-sm">Less Waste</span></div>
          <div className="flex items-center gap-3"><span className="material-symbols-outlined text-[var(--color-primary)]">group</span><span className="font-bold tracking-widest uppercase text-sm">People Powered</span></div>
        </div>
      </section>

      {/* 14. Plant Derived Ingredients Carousel */}
      <PoweredByNature />

      {/* 15. UGC Video Reviews */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-[var(--color-on-surface)] mb-12 tracking-tight">Don't just take our word for it.</h2>
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 snap-x">
            {[
              { id: 1, src: '/Woman_cleaning_stained_shirt_wit…_202607300326.mp4', text: 'Haldi stains gone in one wash?! 🤯✨', handle: '@priya_lifestyle' }, 
              { id: 2, src: '/Hand_places_E-Strip_box_shelf_202607300335.mp4', text: 'Ditching plastic jugs was the best decision 🗑️', handle: '@modern_home_diaries' }, 
              { id: 3, src: '/Hand_drops_detergent_sheet_bucket_202607300337.mp4', text: 'No chalky powder residue left behind 🫧', handle: '@neha_daily' }, 
              { id: 4, src: '/Professional_packing_suitcase_wi…_202607300342.mp4', text: 'Best hack for traveling & hostels ✈️🎒', handle: '@rohan_travels' }, 
              { id: 5, src: '/Mother_folding_baby_clothes_bed_202607300347.mp4', text: 'No harsh chemicals = happy baby skin 👶🌿', handle: '@mama_and_me_vlogs' }
            ].map((video) => (
              <UGCVideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>


      {/* 17. Retailer Logos (Skipped/Merged with As Seen In for simplicity) */}
      
      {/* 18 & 19. Customer Review Carousel */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[var(--color-on-surface)] mb-2 tracking-tight">Over 10,000 Happy Customers</h2>
          <div className="flex justify-center text-[#FFC107] text-2xl mb-12">★★★★★</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', text: 'Absolutely love these sheets. They take up zero space in my laundry room and my clothes have never smelled better. Even got out a stubborn grass stain on my son\'s jeans.' },
              { name: 'David L.', text: 'I was skeptical about moving away from liquid, but E-strip proved me wrong. It dissolves perfectly in cold water and the subscription makes it so I never run out.' },
              { name: 'Priya K.', text: 'The fact that there is no plastic jug to throw away makes me so happy. The clean is incredible and it\'s gentle on my sensitive skin. Highly recommend the Ultimate Bundle!' },
            ].map((review, i) => (
              <div key={i} className="bg-[var(--color-surface-container-low)] p-8 rounded-2xl border border-[var(--color-outline-variant)] text-left flex flex-col h-full shadow-sm">
                <div className="flex text-[#FFC107] text-lg mb-4">★★★★★</div>
                <p className="text-[var(--color-on-surface)] font-medium leading-relaxed mb-6 flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center font-black text-[var(--color-primary)]">{review.name.charAt(0)}</div>
                  <div>
                    <p className="font-black text-[var(--color-on-surface)] text-sm">{review.name}</p>
                    <p className="text-xs text-[var(--color-on-surface-variant)] font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-[var(--color-tertiary)]">verified</span> Verified Buyer</p>
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
