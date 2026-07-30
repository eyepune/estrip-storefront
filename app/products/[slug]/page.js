'use client';
import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = {
  'dishwashing-cleaning-sheets': { title: 'Dishwashing Cleaning Sheets', img: '/Dishwashing Cleaning Sheets.webp', price: 499 },
  'floor-cleaner-sheets': { title: 'Floor Cleaner Sheets', img: '/Floor Cleaner Sheets.webp', price: 399 },
  'proenzyme-5x-laundry-detergent-sheets': { title: 'ProEnzyme 5X Laundry Detergent Sheets', img: '/ProEnzyme 5X Laundry Detergent Sheets.webp', price: 999 },
  'smartclean-3x-laundry-detergent-sheets': { title: 'SmartClean 3X Laundry Detergent Sheets', img: '/SmartClean 3X Laundry Detergent Sheets.webp', price: 899 },
  'softtouch-baby-detergent-sheets': { title: 'SoftTouch Baby Detergent Sheets', img: '/SoftTouch Baby Detergent Sheets.webp', price: 949 },
  'stain-remover-spray': { title: 'Stain Remover Spray', img: '/Stain Remover Spray.webp', price: 299 },
};

export default function ProductPage({ params }) {
  const [quantity, setQuantity] = useState(1);
  const [activeVariant, setActiveVariant] = useState('Fresh Linen');
  const [accordionOpen, setAccordionOpen] = useState('description');
  const [added, setAdded] = useState(false);

  const isPromise = params && typeof params.then === 'function';
  const unwrappedParams = isPromise ? use(params) : params;
  const slug = unwrappedParams?.slug || 'smartclean-3x-laundry-detergent-sheets';
  const product = products[slug] || products['smartclean-3x-laundry-detergent-sheets'];

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen text-gray-900 pb-20 md:pb-0 font-sans selection:bg-[var(--color-primary)] selection:text-white">
      
      {/* 1. Trust Badges Bar */}
      <div className="bg-gray-50 border-b border-gray-100 py-3 px-4 hidden md:flex justify-center gap-8 md:gap-16 text-xs font-bold text-gray-600 tracking-widest uppercase">
        <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">local_shipping</span> Free shipping above ₹999</span>

        <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">eco</span> Climate Pledge Friendly</span>
        <span className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">public</span> Indian Brand</span>
      </div>

      <main className="max-w-7xl mx-auto md:px-6">
        {/* 2. Hero / Buy Box Section */}
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-8 md:py-16 px-4 md:px-0">
          
          {/* LEFT: Visuals */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6">
            {/* Gallery */}
            <div className="relative aspect-[4/5] md:aspect-square bg-gray-50 rounded-3xl overflow-hidden shadow-sm group">
              <div className="absolute top-6 left-6 z-10 bg-[var(--color-primary)] text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">Best Seller</div>
              <Image 
                src={product.img} 
                alt={product.title} 
                fill 
                className="object-contain p-8 md:p-16 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" 
                unoptimized
              />
            </div>

            {/* Scent Notes Block */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
              <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">Fragrance Profile</h4>
              <div className="flex gap-8 md:gap-16 justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined text-[var(--color-primary)]">local_florist</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Magnolia</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined text-[var(--color-primary)]">air</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Fresh Breeze</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                    <span className="material-symbols-outlined text-[var(--color-primary)]">spa</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Aloe</span>
                </div>
              </div>
            </div>

            {/* Secure Checkout Payments (Moved to Left Side) */}
            <div className="flex flex-col gap-6 bg-gray-50 p-8 rounded-3xl border border-gray-100 items-center justify-center text-center mt-2">
              <span className="text-sm font-black uppercase tracking-widest text-gray-500 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">lock</span> 100% Secure Checkout
              </span>
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                {[
                  { src: '/visa_1_color_card.svg', alt: 'Visa' },
                  { src: '/upi_color_card.svg', alt: 'UPI' },
                  { src: '/googlepay_color_card.svg', alt: 'Google Pay' },
                  { src: '/mastercard_color_card.svg', alt: 'Mastercard' },
                  { src: '/paytm_color_card.svg', alt: 'Paytm' },
                  { src: '/phonepe_color_card.svg', alt: 'PhonePe' },
                ].map(payment => (
                  <img 
                    key={payment.alt} 
                    src={payment.src} 
                    alt={payment.alt} 
                    className="h-10 md:h-12 w-auto object-contain opacity-80 mix-blend-multiply" 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Buy Box */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <div className="mb-6 flex items-center gap-2 text-sm font-bold text-gray-600">
              <div className="flex text-yellow-400 text-lg">★★★★★</div>
              <span>Rated 4.8/5 by 2,134 purchasers</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4 leading-none">{product.title}</h1>
            
            <div className="flex items-end gap-3 mb-8">
              <span className="text-3xl font-black text-gray-900">₹{product.price}.00</span>
              <span className="text-lg font-bold text-gray-400 line-through mb-1">₹{product.price + 300}.00</span>
            </div>

            <div className="w-full h-px bg-gray-100 mb-8"></div>

            {/* Variant Selector */}
            <div className="mb-8">
              <label className="block text-sm font-black uppercase tracking-widest text-gray-900 mb-4">Scent: {activeVariant}</label>
              <div className="flex flex-wrap gap-3">
                {['Fresh Linen', 'Fragrance Free', 'Lavender'].map(v => (
                  <button 
                    key={v}
                    onClick={() => setActiveVariant(v)}
                    className={`px-6 py-3 rounded-full text-sm font-bold border-2 transition-all ${activeVariant === v ? 'border-rose-600 bg-rose-600 text-white shadow-md' : 'border-gray-200 bg-white text-gray-500 hover:border-rose-600 hover:text-rose-600'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center justify-between border border-gray-200 rounded-full px-6 h-14 sm:w-1/3 bg-gray-50">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-400 hover:text-gray-900 text-xl font-bold px-2">-</button>
                <span className="font-black text-lg">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-gray-400 hover:text-gray-900 text-xl font-bold px-2">+</button>
              </div>
              <button 
                onClick={handleAddToCart}
                className={`flex-1 h-14 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg active:scale-95 ${added ? 'bg-emerald-500 text-white ring-4 ring-emerald-500' : 'bg-white text-rose-600 ring-4 ring-rose-600 hover:bg-rose-600 hover:text-white'}`}
              >
                {added ? 'Added to Cart' : `Add to Cart - ₹${(product.price * quantity).toFixed(2)}`}
              </button>
            </div>

            {/* Mini Trust & Payments */}
            <div className="flex flex-col items-center gap-4 mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Free Shipping over ₹999</p>
              <div className="flex gap-2 grayscale opacity-60">
                {/* Dummy Payment Icons */}
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                <div className="w-10 h-6 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Certifications Row */}
            <div className="flex justify-between items-center py-6 border-y border-gray-100 mb-8">
              <div className="flex flex-col items-center gap-2"><span className="material-symbols-outlined text-gray-400">recycling</span><span className="text-[10px] font-bold text-gray-500 uppercase">Plastic Free</span></div>
              <div className="flex flex-col items-center gap-2"><span className="material-symbols-outlined text-gray-400">cruelty_free</span><span className="text-[10px] font-bold text-gray-500 uppercase">Cruelty Free</span></div>
              <div className="flex flex-col items-center gap-2"><span className="material-symbols-outlined text-gray-400">psychiatry</span><span className="text-[10px] font-bold text-gray-500 uppercase">Plant Based</span></div>
              <div className="flex flex-col items-center gap-2"><span className="material-symbols-outlined text-gray-400">water_drop</span><span className="text-[10px] font-bold text-gray-500 uppercase">Dissolves</span></div>
            </div>

            {/* Accordions */}
            <div className="flex flex-col border-t border-gray-100">
              {['description', 'ingredients', 'sustainability'].map((tab) => (
                <div key={tab} className="border-b border-gray-100">
                  <button 
                    onClick={() => setAccordionOpen(accordionOpen === tab ? '' : tab)}
                    className="w-full py-6 flex justify-between items-center text-left hover:text-[var(--color-primary)] transition-colors group"
                  >
                    <span className="font-black text-sm uppercase tracking-widest text-gray-900 group-hover:text-[var(--color-primary)]">{tab}</span>
                    <span className="material-symbols-outlined font-bold">{accordionOpen === tab ? 'remove' : 'add'}</span>
                  </button>
                  {accordionOpen === tab && (
                    <div className="pb-6 text-gray-500 text-sm leading-relaxed font-medium">
                      {tab === 'description' && 'Our zero-waste laundry detergent sheets pack ultra-concentrated cleaning power into a tiny, pre-measured strip that instantly dissolves in water. No more heavy plastic jugs or messy liquids.'}
                      {tab === 'ingredients' && 'Coconut oil extract (Surfactant), PVA (Biodegradable matrix), Enzyme blend, Essential oils (Fragrance). 100% free of parabens, phosphates, and bleach.'}
                      {tab === 'sustainability' && 'Packaged in 100% compostable cardboard. Our ultra-lightweight design reduces transport emissions by 94% compared to traditional liquid detergents.'}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      {/* 3. "How To Use" Alternating Section */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight text-gray-900">How to use E-Strip.</h2>
          
          <div className="flex flex-col gap-8 md:gap-16">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 relative aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Toss" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-8xl font-black text-gray-200 mb-2">1</h3>
                <h4 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Toss the sheet.</h4>
                <p className="text-lg text-gray-500 font-medium">Drop a single E-strip directly into your washer drum. For large or heavily soiled loads, simply toss in two.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 relative aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Add Clothes" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-8xl font-black text-gray-200 mb-2">2</h3>
                <h4 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Add your laundry.</h4>
                <p className="text-lg text-gray-500 font-medium">Add your clothes on top. It works perfectly in all machines, including HE front-loaders and top-loaders.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 relative aspect-video bg-gray-200 rounded-3xl overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Clean" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-8xl font-black text-gray-200 mb-2">3</h3>
                <h4 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Enjoy the clean.</h4>
                <p className="text-lg text-gray-500 font-medium">The sheet instantly dissolves in hot or cold water, leaving zero residue and delivering an incredibly powerful clean.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Benefits Carousel (Baya Style) */}
      <section className="py-24 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
            {[
              { t: 'Skin & Eco-Friendly', d: 'Hypoallergenic and free from harsh chemicals.', i: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&q=80&w=400' },
              { t: 'Powerful Clean', d: 'Enzyme-based formula tackles tough stains easily.', i: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=400' },
              { t: 'Simple & Convenient', d: 'No measuring, no mess, no heavy jugs to lift.', i: 'https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?auto=format&fit=crop&q=80&w=400' },
              { t: 'Sustainable Choice', d: '100% plastic-free compostable packaging.', i: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400' },
            ].map((b, idx) => (
              <div key={idx} className="min-w-[280px] sm:min-w-[320px] snap-start flex flex-col bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <img src={b.i} alt={b.t} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="font-black text-xl text-gray-900 mb-2">{b.t}</h4>
                  <p className="text-sm font-medium text-gray-500 leading-relaxed">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How We Compare (Baya Style Table) */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight text-gray-900">How we compare.</h2>
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            {/* Header */}
            <div className="grid grid-cols-3 bg-white border-b border-gray-200">
              <div className="p-6"></div>
              <div className="p-6 flex flex-col items-center justify-center bg-blue-50 border-x border-blue-100">
                <span className="text-2xl font-black text-[var(--color-on-surface)] tracking-tighter">E-strip<span className="text-[var(--color-primary)]">.</span></span>
              </div>
              <div className="p-6 flex flex-col items-center justify-center opacity-50 grayscale">
                <span className="text-lg font-black text-gray-600 tracking-tighter">Traditional</span>
              </div>
            </div>
            {/* Rows */}
            {[
              '100% Plastic Free',
              'Pre-measured',
              'Zero harsh chemicals',
              'Lightweight',
              'Works in cold water'
            ].map((feat, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-gray-100 last:border-0">
                <div className="p-6 flex items-center"><span className="text-sm font-bold text-gray-600">{feat}</span></div>
                <div className="p-6 flex items-center justify-center bg-blue-50/50 border-x border-blue-100/50">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center"><span className="material-symbols-outlined text-[14px]">check</span></div>
                </div>
                <div className="p-6 flex items-center justify-center">
                  {feat === 'Works in cold water' ? (
                     <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center"><span className="material-symbols-outlined text-[14px]">check</span></div>
                  ) : (
                     <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center"><span className="material-symbols-outlined text-[14px]">close</span></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 50/50 Reviews & Lifestyle */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 bg-[var(--primary-deep)] text-white p-12 rounded-3xl flex flex-col justify-center">
            <div className="flex text-yellow-400 text-2xl mb-6">★★★★★</div>
            <h3 className="text-3xl font-black tracking-tight mb-6 leading-tight">"Honestly, I was skeptical at first, but these sheets clean better than my old liquid detergent and take up zero space."</h3>
            <p className="font-bold text-gray-400">— Sarah J., Verified Buyer</p>
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 rounded-3xl overflow-hidden aspect-square md:aspect-auto h-[400px] md:h-auto">
            <img src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800" alt="Lifestyle Laundry" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 7. Key Ingredients Slider */}
      <section className="py-24 px-4 bg-[var(--color-primary)]/5 border-y border-[var(--color-primary)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">What's inside.</h2>
            <button className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform hidden md:block">View All</button>
          </div>
          <div className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar">
            {['Plant-based Surfactant', 'Enzyme Blend', 'Coconut Oil Extract', 'Natural Fragrance'].map((ing, idx) => (
              <div key={idx} className="min-w-[260px] bg-white p-8 rounded-3xl border border-blue-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[var(--color-primary)] text-3xl">water_drop</span>
                </div>
                <h4 className="font-black text-lg text-gray-900 mb-2">{ing}</h4>
                <p className="text-sm font-medium text-gray-500">Breaks down tough stains and lifts dirt from fabrics effortlessly.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Mobile Sticky ATC (Shopify Parity) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div>
          <p className="text-xs font-black text-gray-500 uppercase">Total</p>
          <p className="text-lg font-black text-gray-900">₹{(product.price * quantity).toFixed(2)}</p>
        </div>
        <button onClick={handleAddToCart} className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all ${added ? 'bg-emerald-500 text-white' : 'bg-[var(--color-primary)] text-white'}`}>
          {added ? 'Added!' : 'Add to Cart'}
        </button>
      </div>

    </div>
  );
}
