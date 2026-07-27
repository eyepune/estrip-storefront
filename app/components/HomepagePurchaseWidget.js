'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function HomepagePurchaseWidget() {
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isSubscription, setIsSubscription] = useState(true);
  const [frequency, setFrequency] = useState('30');

  // Hardcoded bundle product for the widget based on the 3 core products
  const bundle = {
    id: 'ultimate-bundle',
    name: 'The Ultimate Home Bundle',
    subtitle: 'SmartClean 3X + ProEnzyme 5X + Dishwashing Sheets',
    price: 1134, // 353 + 432 + 349
    comparePrice: 1417, 
    discount: 20,
    rating: 4.9,
    reviews: 4210,
    category: 'bundles',
    image: 'https://estrip.in/cdn/shop/files/pdp_s3.png?v=1783917395&width=480', // Using SmartClean image as placeholder
    images: [
      'https://estrip.in/cdn/shop/files/pdp_s3.png?v=1783917395&width=480',
      'https://estrip.in/cdn/shop/files/pdp_s2.png?v=1783917324&width=480',
      'https://estrip.in/cdn/shop/files/pdp_s4.png?v=1783917481&width=480',
    ]
  };

  const finalPrice = isSubscription ? Math.round(bundle.price * 0.85) : bundle.price;

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (isSubscription) {
      addItem({ ...bundle, subscriptionMode: true, subscriptionDiscount: 15, frequency });
    } else {
      addItem(bundle);
    }
    // Automatically trigger cart sidebar opening is handled inside addItem or the Navbar context in some implementations
  };

  return (
    <section id="bundle-widget" className="py-24 px-4 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Media Gallery */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="relative w-full aspect-square bg-[#f6f6f6] rounded-2xl overflow-hidden shadow-inner border border-gray-100">
            <Image
              src={bundle.images[selectedImage]}
              alt={bundle.name}
              fill
              className="object-contain p-8 mix-blend-multiply"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              unoptimized
            />
            <div className="absolute top-4 left-4 bg-[#E30613] text-white text-xs font-black px-4 py-1.5 rounded-[4px] uppercase tracking-widest shadow-md">
              SAVE 50% TODAY
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {bundle.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`relative aspect-square rounded-xl bg-gray-50 border-2 overflow-hidden transition-all ${selectedImage === i ? 'border-gray-900 shadow-md' : 'border-transparent hover:border-gray-300'}`}
              >
                <Image src={img} alt={`${bundle.name} view ${i + 1}`} fill className="object-contain p-2" unoptimized />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Purchase Form */}
        <div className="w-full lg:w-1/2 flex flex-col pt-2">
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => <span key={s} className="text-[#FFC107] material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
            </div>
            <span className="text-sm text-gray-500 font-bold">{bundle.rating} ({bundle.reviews.toLocaleString()} reviews)</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 leading-tight tracking-tight">{bundle.name}</h2>
          <p className="text-gray-600 text-lg mb-8 font-medium max-w-lg">{bundle.subtitle}</p>

          {/* Pricing Block */}
          <div className="flex items-baseline gap-4 mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-200">
            <span className="text-4xl font-black text-[#E30613]">₹{finalPrice}</span>
            <span className="text-2xl text-gray-400 line-through font-bold">₹{bundle.comparePrice}</span>
            <span className="bg-emerald-100 text-emerald-700 text-xs font-black px-3 py-1 rounded-[4px] tracking-wide uppercase ml-auto">
              IN STOCK - SHIPS TODAY
            </span>
          </div>

          {/* Subscription Toggle */}
          <div className="mb-8">
            <p className="text-sm font-black text-gray-900 uppercase tracking-widest mb-4">Select Purchase Option</p>
            <div className="flex flex-col gap-3">
              <label 
                className={`flex flex-col p-5 rounded-xl transition-all border-2 cursor-pointer ${isSubscription ? 'border-gray-900 bg-white shadow-lg ring-4 ring-gray-900/5' : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-gray-300'}`}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-4">
                    <input type="radio" checked={isSubscription} onChange={() => setIsSubscription(true)} className="w-5 h-5 text-gray-900 focus:ring-gray-900" />
                    <span className={`font-black text-lg ${isSubscription ? 'text-gray-900' : 'text-gray-600'}`}>Subscribe & Save 15%</span>
                  </div>
                  <span className="font-black text-xl text-gray-900">₹{Math.round(bundle.price * 0.85)}</span>
                </div>
                {isSubscription && (
                  <div className="pl-9 pr-2">
                    <ul className="text-sm text-gray-600 font-medium space-y-2 mb-4">
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span> Never run out of clean</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span> Cancel or pause anytime</li>
                      <li className="flex items-center gap-2"><span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span> Free shipping guaranteed</li>
                    </ul>
                    <select 
                      value={frequency} 
                      onChange={(e) => setFrequency(e.target.value)}
                      className="w-full text-sm font-bold border-2 border-gray-200 rounded-lg p-3 bg-gray-50 text-gray-900 focus:outline-none focus:border-gray-900 cursor-pointer"
                    >
                      <option value="30">Delivery: Every 1 Month (Recommended)</option>
                      <option value="60">Delivery: Every 2 Months</option>
                      <option value="90">Delivery: Every 3 Months</option>
                    </select>
                  </div>
                )}
              </label>

              <label 
                className={`flex justify-between items-center p-5 rounded-xl transition-all border-2 cursor-pointer ${!isSubscription ? 'border-gray-900 bg-white shadow-lg ring-4 ring-gray-900/5' : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-gray-300'}`}
              >
                <div className="flex items-center gap-4">
                  <input type="radio" checked={!isSubscription} onChange={() => setIsSubscription(false)} className="w-5 h-5 text-gray-900 focus:ring-gray-900" />
                  <span className={`font-bold text-lg ${!isSubscription ? 'text-gray-900' : 'text-gray-600'}`}>One-time Purchase</span>
                </div>
                <span className="font-black text-xl text-gray-900">₹{bundle.price}</span>
              </label>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#E30613] hover:bg-red-700 text-white h-[64px] rounded-[9999px] font-black text-lg tracking-widest uppercase shadow-[0_10px_30px_rgba(227,6,19,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(227,6,19,0.4)] flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
            Add to Cart — ₹{finalPrice}
          </button>
          
          <div className="flex items-center justify-center gap-2 mt-6 text-gray-500 text-sm font-bold">
            <span className="material-symbols-outlined text-[18px]">lock</span>
            Secure checkout. 30-day money-back guarantee.
          </div>

        </div>
      </div>
    </section>
  );
}
