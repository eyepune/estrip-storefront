import ProductCard from '@/app/components/ProductCard';

export const metadata = {
  title: 'Shop All | E-strip',
};

const products = [
  {
    id: '1',
    name: 'SmartClean Laundry (Spring Meadow)',
    description: 'Powerful Enzyme RapidLift Formula for tough stains.',
    price: 599,
    rating: 4.8,
    reviews: 92,
    badge: 'Best Seller',
    color: 'tertiary',
    loads: '60 Loads',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4_7xb6D0h6kaWhRbdLqEx12I3Jm9uUiWqahZEM-aKVGELrZ8TspyV0P9pZOWpNcgcqIkWZzlO5rBrYJf6zXO4LwE4cCpMNpuVQOMgwLTwYRg3R4_1oKjWJbX8HPnPqafLuZHUc09NVFhdSHJr_zWqGAIjh0f5mveKxi0-z-ewUQGOQbVQJSZs6eBbPTtcLZekKY6Z11jeiruvLMiDtKllbUrVsBH7XnAWEV6FetVoGm-AhTeSNPxIlgDEecf_TuN7YT8QqKQ7IeXd',
  },
  {
    id: '2',
    name: 'ProEnzyme Laundry (Deep Clean)',
    description: 'Ultra-concentrated formula for heavy loads.',
    price: 699,
    rating: 4.8,
    reviews: 74,
    badge: 'Extra Strong',
    color: 'primary',
    loads: '60 Loads',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPw7dp9qUop0Gd157GRNSM-I7LC5a-4xoHyFq_w2MYd0BdtGL2zviFIivvsg38rV-ncLQGXLgmFmcmFdaso39bh_XaolQhheAxalMTVmUtpfVFWcKu8ZFA18iOAeWq2DXT003yBti9MYpAIIm3wJwVaDj5DLhtcuKUiY-a9RTxkuaU1wIovXxZKDBO00YJSTpgpqnMG3Aqc_IyBRf4YrZiK348nJ8TVrYMYC-Pmhubioq-vY5PlyxzfhlPJ9ipvvLNWJzSHxNrfM98',
  },
  {
    id: '3',
    name: 'Baby Laundry (Soft Blossom)',
    description: 'Gentle care for sensitive skin. No dyes or harsh chemicals.',
    price: 649,
    rating: 4.9,
    reviews: 124,
    badge: 'Hypoallergenic',
    color: 'secondary',
    loads: '60 Loads',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFSPn6HtCae4MOYwuGsHSvYLe2_KmIt4ojrwaSI3hCCrBLsoE89f-k_aflBN5s8Cy6mAkCp7fYQOxJZppClGS2BVfRIEAEppYAiqwcksiaCYYPIqyfudjOmUZdRakaMN1n8MM6j11Oagp8x5J_yJ8W3sD-Sq7priRHzAagLtLniiGvVrmvxxFJXOxIbXcELAAmHp26OTf0VSrIAZcbSym5wpK2-dbtjhRGnB14plt2poVVh_DbNLDtqGx8ZqSKYG_iN6ClqKqu6Ozs',
  },
  {
    id: '4',
    name: 'Dishwashing Sheets (Citrus Fresh)',
    description: 'Degreasing power that leaves dishes sparkling.',
    price: 499,
    rating: 4.7,
    reviews: 56,
    badge: 'Kitchen',
    color: 'tertiary',
    loads: '60 Loads',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmcNmjoXRLGscG3Oktx0wj4CJL1XBXxGLfOlH_YTH_3bj1XcmAoHAzpPqE7l5kOOTD7QVr8CX-ypd8TxjHYrJBe8Rdxzy6F8n1n-rHt2v2Sx6n2luIxxwryaoTZzgOeJOWr10fUpij4fphmx4n12EIy5x59-LZvQoUrb_cXYZEjL-MXnIy7sI2tbA3kRQMqIknb9cfU0kqgzaeY2UxqJ1fh_4E1H1wrJDSPmwLBwKl89yvooRayFlhgsNhKOFaW25kdrx1TLgJ7WOo',
  },
  {
    id: '5',
    name: 'Floor Cleaner Sheets (Floral Breeze)',
    description: 'Dissolvable sheets for all hard floor types.',
    price: 549,
    rating: 4.6,
    reviews: 38,
    badge: 'Home Care',
    color: 'primary',
    loads: '60 Mops',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJmY6zMhW74VoclvS4xYbRtmGw0n42DWneUKaeLq-bYb9UaU170q_IP2rc8UwLdpbkVsFZytfwSTws15g_rKFq2-RTjwr2j5DxhbytJaykbwDgE3lrrmXisyXYK48rIrGsR9gUoKC71y493kbBQMTHWFDUDhl5TNIQ2-i6cQcAqJKgCmv9ki9aI5EqYBq134iZPTBY_8qbxrtfwr22BHccEF_Pql3vHHn8uZ269PI5VvvBjF13dy4qNzALxPuRFoFLDWvHmgQX5HUp',
  },
  {
    id: 'stain-spray',
    name: 'Stain Remover Spray',
    description: 'Tough on stains, gentle on fabrics.',
    price: 399,
    rating: 4.8,
    reviews: 210,
    badge: 'Accessory',
    color: 'secondary',
    loads: '1 Bottle (200ml)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA832W0Rt11LnRax6qXgDLkp1bHHx_nWl_LCbmoG7YzMPm3BXmByWVDpucdT9t12yNv_gSOBXYeJ6I531ZH4_Co4e0x-yB3weG4Anib1vICQOjFAjMYi2ItnqiUgq5ejOXktTS0VMGHKXpTsKyaxuCQSbvRrV3Ac6ff0ZpKb9KaN2_ewV527QUJgj4yiw_g5Uj7unIP9tDlwKHYA_Zg36t52n7O5--30rETcNGwCPgFR5O5DpnNgpnz3NkfgwQf7NNv0sG91LngghM',
  }
];

export default function ShopPage() {
  return (
    <div className="relative min-h-screen selection:bg-[var(--color-primary-fixed)] selection:text-[var(--color-on-primary-fixed)]">
      
      {/* Immersive Bubble Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#f0f4ff] to-[#fff0f8]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover mix-blend-multiply opacity-60"
        >
          <source src="/Soap_bubbles_floating_on_white_202607202024.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 pt-16">
        
        {/* Desktop View */}
        <div className="hidden md:block">
          <main className="max-w-7xl mx-auto px-6 pb-24">
            <div className="mb-12 text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight drop-shadow-md">Cleaning simplified. <span className="text-[var(--color-primary)]">Planets saved.</span></h1>
              <p className="text-gray-800 text-lg max-w-2xl mx-auto font-medium drop-shadow-sm">Welcome to the Future of Cleaning – Eco-Friendly, Effective, Easy Sheets that deliver powerful results without the plastic waste.</p>
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/70 backdrop-blur-md border border-white/40 text-[var(--color-primary)] rounded-full font-bold text-sm shadow-lg">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                Over 1 Million Sheets Shipped Worldwide
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12">
              <aside className="w-full lg:w-72 space-y-8 shrink-0">
                {/* Category Refinement Bento */}
                <section className="bg-white/60 backdrop-blur-2xl border border-white/50 p-8 rounded-3xl shadow-xl space-y-8">
                  <div>
                    <h3 className="text-xl font-black text-[var(--color-secondary)] mb-6 flex items-center gap-2">Refine by Category</h3>
                    <div className="space-y-4">
                      {['Laundry', 'Kitchen', 'Floor'].map(item => (
                        <label key={item} className="flex items-center gap-3 group cursor-pointer">
                          <input className="w-6 h-6 rounded-md border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)] cursor-pointer transition-all group-hover:scale-110 shadow-sm" type="checkbox"/>
                          <span className="font-bold text-gray-700 group-hover:text-[var(--color-primary)] transition-colors">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </section>
                
                {/* Promo Bento Box */}
                <div className="bg-white/60 backdrop-blur-2xl border border-white/50 p-8 rounded-3xl shadow-xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <p className="font-black text-3xl mb-2 text-[var(--color-primary)] drop-shadow-sm">Save 20%</p>
                    <p className="text-sm font-medium mb-6 opacity-90 text-gray-800">On your first bundle order! Use code: CLEANERPLANET</p>
                    <button className="w-full bg-[var(--color-primary)] text-white font-black py-3 rounded-full hover:shadow-lg pill-shadow-primary transition-all active:scale-95">Claim Offer</button>
                  </div>
                  <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-125 transition-transform duration-700 text-[var(--color-primary)]">
                    <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                  </div>
                </div>
              </aside>
              
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
                  {products.map(p => (
                    <ProductCard key={p.id} product={p} view="desktop" />
                  ))}
                </div>

                {/* Subscriptions & Bundles Promo */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/60 backdrop-blur-2xl border border-white/50 p-8 rounded-3xl shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4">
                        <span className="material-symbols-outlined text-sm">local_shipping</span>
                        Auto-Delivery
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 mb-2">Never Run Out Again</h3>
                      <p className="text-gray-700 font-medium mb-6 max-w-sm">Subscribe to your favorite products and save 15% on every order. Modify or cancel anytime.</p>
                      <button className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-full font-black text-sm pill-shadow-primary hover:scale-105 transition-transform">Learn About Subscriptions</button>
                    </div>
                  </div>
                  <div className="bg-[var(--color-secondary)]/90 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all">
                    <div className="absolute -right-10 -bottom-10 opacity-20 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                      <span className="material-symbols-outlined text-[150px]" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                    </div>
                    <div className="relative z-10 text-white">
                      <div className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4">
                        <span className="material-symbols-outlined text-sm">sell</span>
                        Bundle & Save
                      </div>
                      <h3 className="text-2xl font-black mb-2">The Complete Home Bundle</h3>
                      <p className="font-medium mb-6 max-w-sm opacity-90">Get Laundry, Dish, and Floor sheets in one zero-waste box and save 25% instantly.</p>
                      <button className="bg-white text-[var(--color-secondary)] px-6 py-3 rounded-full font-black text-sm hover:scale-105 transition-transform shadow-lg drop-shadow-none">Shop Bundles</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          <main className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
            <section className="mb-10 rounded-3xl bg-white/60 backdrop-blur-2xl border border-white/50 p-6 md:p-10 shadow-xl relative overflow-hidden flex flex-col items-center justify-between gap-6 text-center">
              <div className="relative z-10 max-w-xl text-center">
                <h1 className="text-3xl font-black text-gray-900 leading-tight mb-4 tracking-tight drop-shadow-sm">
                  Cleaning simplified. <span className="text-[var(--color-primary)]">Planets saved.</span>
                </h1>
                <p className="text-base text-gray-800 font-medium mb-4">
                  Eco-Friendly, Effective, Easy Sheets. Zero plastic, zero mess, maximum cleaning power.
                </p>
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full font-bold text-xs">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                  Over 1 Million Sheets Shipped Worldwide
                </div>
              </div>
            </section>
            
            <div className="flex flex-col gap-8">
              <section className="flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {products.map(p => (
                    <ProductCard key={p.id} product={p} view="mobile" />
                  ))}
                </div>

                {/* Subscriptions & Bundles Promo (Mobile) */}
                <div className="flex flex-col gap-6">
                  <div className="bg-white/60 backdrop-blur-2xl border border-white/50 p-6 rounded-3xl shadow-xl relative overflow-hidden">
                    <div className="inline-flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-3">
                      <span className="material-symbols-outlined text-xs">local_shipping</span>
                      Auto-Delivery
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Subscribe & Save 15%</h3>
                    <p className="text-gray-700 text-sm font-medium mb-4">Never run out. Modify or cancel anytime.</p>
                    <button className="w-full bg-[var(--color-primary)] text-white px-6 py-3 rounded-full font-black text-sm pill-shadow-primary">Learn More</button>
                  </div>
                  <div className="bg-[var(--color-secondary)]/90 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl shadow-xl relative overflow-hidden text-white">
                    <div className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-3">
                      <span className="material-symbols-outlined text-xs">sell</span>
                      Bundle & Save
                    </div>
                    <h3 className="text-xl font-black mb-2">Complete Home Bundle</h3>
                    <p className="text-sm font-medium mb-4 opacity-90">Get everything in one box and save 25%.</p>
                    <button className="w-full bg-white text-[var(--color-secondary)] px-6 py-3 rounded-full font-black text-sm shadow-lg">Shop Bundles</button>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>

        {/* Global Shop Page Additions (Rendered on both Desktop & Mobile) */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 pb-32">
          
          {/* How to Use Section */}
          <section className="mt-16 md:mt-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-gray-900 drop-shadow-sm">As Easy as 1-2-3</h2>
              <p className="text-gray-700 font-medium mt-2">No measuring, no mess, no heavy jugs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: '1', title: 'Toss it in', desc: 'Place one sheet directly into the drum of your washer.', icon: 'water_drop' },
                { step: '2', title: 'Add clothes', desc: 'Load your laundry on top of the sheet.', icon: 'checkroom' },
                { step: '3', title: 'Press start', desc: 'Works perfectly in hot or cold water, all machine types.', icon: 'play_circle' },
              ].map(s => (
                <div key={s.step} className="bg-white/60 backdrop-blur-2xl border border-white/50 p-8 rounded-3xl shadow-xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 bg-[var(--color-primary-fixed)] text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">Step {s.step}: {s.title}</h3>
                  <p className="text-gray-700 font-medium">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Scent & Ingredients Showcase */}
          <section className="mt-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-gray-900 drop-shadow-sm">Nature's Finest Ingredients</h2>
              <p className="text-gray-700 font-medium mt-2">Hover over our signature scents to reveal their plant-based power.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Spring Meadow', color: 'primary', desc: 'Fresh, crisp, and revitalizing.', ingredients: ['Coconut Oil Extract', 'Enzyme Blend', 'Natural Floral Oils'] },
                { name: 'Soft Blossom', color: 'secondary', desc: 'Gentle, soothing, and hypoallergenic.', ingredients: ['Aloe Vera Extract', 'Soap Nut Extract', 'Chamomile'] },
                { name: 'Citrus Fresh', color: 'tertiary', desc: 'Bright, zesty, and grease-cutting.', ingredients: ['Lemon Peel Oil', 'Plant-derived Surfactants', 'Citric Acid'] },
              ].map(scent => (
                <div key={scent.name} className={`bg-[var(--color-${scent.color}-container)]/80 backdrop-blur-2xl border border-white/40 p-8 rounded-3xl shadow-xl relative overflow-hidden group h-64 flex flex-col justify-end cursor-crosshair`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-0"></div>
                  <div className={`absolute inset-0 p-8 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 bg-[var(--color-${scent.color})]/90 backdrop-blur-md transition-all duration-500 z-20 translate-y-4 group-hover:translate-y-0`}>
                    <h4 className={`text-[var(--color-on-${scent.color})] font-black text-lg mb-4 border-b border-[var(--color-on-${scent.color})]/30 pb-2`}>Key Ingredients</h4>
                    <ul className={`text-[var(--color-on-${scent.color})]/90 font-medium space-y-2 text-sm`}>
                      {scent.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                  </div>
                  <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-2xl font-black text-white mb-2">{scent.name}</h3>
                    <p className="text-white/90 font-medium text-sm">{scent.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Press Marquee */}
          <section className="mt-24 overflow-hidden relative border border-white/50 bg-white/40 backdrop-blur-xl py-6 rounded-3xl shadow-lg">
            <div className="flex whitespace-nowrap animate-marquee w-max items-center">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center justify-around gap-16 px-8">
                  {[
                    { name: 'VOGUE', type: 'text' },
                    { name: 'FORBES', type: 'text' },
                    { name: 'EcoWatch', type: 'text' },
                    { name: 'Green Seal Certified', type: 'icon', icon: 'verified' },
                    { name: 'Cruelty Free', type: 'icon', icon: 'cruelty_free' },
                    { name: '1% for the Planet', type: 'text' },
                  ].map((item, j) => (
                    <div key={`${i}-${j}`} className="flex items-center gap-2 text-gray-600 hover:text-[var(--color-primary)] transition-colors cursor-default">
                      {item.type === 'icon' && <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>}
                      <span className={`text-2xl ${item.type === 'icon' ? 'font-bold text-xl' : 'font-black tracking-widest'}`}>{item.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-24 max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-gray-900 drop-shadow-sm">Frequently Asked Questions</h2>
              <p className="text-gray-700 font-medium mt-2">Everything you need to know about switching to E-strip.</p>
            </div>
            <div className="space-y-4">
              {[
                { q: 'Are E-strips safe for HE (High Efficiency) machines?', a: 'Yes! Our low-sudsing formula is perfectly safe and highly effective in all washing machines, including HE, front-loaders, and top-loaders.' },
                { q: 'Does it dissolve completely in cold water?', a: 'Absolutely. E-strips are designed to dissolve instantly in hot or cold water, leaving zero residue on your clothes or in the machine.' },
                { q: 'Are your products safe for sensitive skin?', a: 'Yes, especially our Baby Formula (Soft Blossom) which is hypoallergenic, dermatologist-tested, and free from harsh chemicals and dyes.' },
                { q: 'How does the subscription work?', a: 'You can subscribe to any product and save 15%. You choose the delivery frequency (every 15, 30, 45, or 60 days). You can skip, modify, or cancel your subscription at any time from your account.' }
              ].map((faq, idx) => (
                <details key={idx} className="group bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl shadow-md cursor-pointer transition-all hover:bg-white/80 open:bg-white/90">
                  <summary className="flex items-center justify-between p-6 font-bold text-gray-900 list-none [&::-webkit-details-marker]:hidden outline-none">
                    {faq.q}
                    <span className="material-symbols-outlined text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-45">add_circle</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 font-medium leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
