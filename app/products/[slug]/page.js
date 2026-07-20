'use client';
import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug, products } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import ProductCard from '../../components/ProductCard';

export default function ProductPage({ params }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [isSubscription, setIsSubscription] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [added, setAdded] = useState(false);

  const price = isSubscription ? Math.round(product.price * 0.85) : product.price;
  const related = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addItem(product, isSubscription);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const reviews = [
    { name: 'Priya S.', rating: 5, date: '2 weeks ago', text: 'Absolutely love this! Dissolved instantly in cold water and my clothes came out perfectly clean.', verified: true },
    { name: 'Rahul M.', rating: 5, date: '1 month ago', text: 'Got out a stubborn turmeric stain. Shocked at how well it worked. Highly recommend!', verified: true },
    { name: 'Anjali K.', rating: 4, date: '3 weeks ago', text: 'Great product, eco-friendly packaging is a bonus. Will definitely reorder.', verified: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#e040a0] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#e040a0] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            <div className="relative aspect-square bg-gray-50 rounded-3xl overflow-hidden mb-4 border border-gray-100">
              <Image
                src={product.images[selectedImage] || product.image}
                alt={product.name}
                fill
                className="object-contain p-10"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                unoptimized
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#e040a0] to-[#c0208a] text-white text-xs font-black px-3 py-1 rounded-full">
                  {product.badge}
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-20 rounded-xl bg-gray-50 border-2 overflow-hidden transition-all ${selectedImage === i ? 'border-[#e040a0]' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <Image src={img} alt={`${product.name} view ${i + 1}`} fill className="object-contain p-2" sizes="80px" unoptimized />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-0.5">{[1,2,3,4,5].map(s => <span key={s} className="text-amber-400">★</span>)}</div>
              <span className="text-sm text-gray-500 font-medium">{product.rating} ({product.reviews.toLocaleString()} reviews)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-1">{product.name}</h1>
            <p className="text-gray-500 text-lg mb-6">{product.subtitle}</p>

            {/* Subscription Toggle */}
            {product.subscription && (
              <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl p-4 mb-6 border border-pink-100">
                <p className="text-xs font-black text-gray-600 uppercase tracking-widest mb-3">Purchase Option</p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setIsSubscription(false)}
                    className={`py-3 px-4 rounded-xl font-bold text-sm transition-all border-2 ${!isSubscription ? 'border-[#e040a0] bg-white text-[#e040a0] shadow-md' : 'border-transparent bg-white/50 text-gray-500 hover:border-gray-300'}`}
                  >
                    One-time<br />
                    <span className="font-black text-lg">{!isSubscription ? '' : ''}₹{product.price}</span>
                  </button>
                  <button
                    onClick={() => setIsSubscription(true)}
                    className={`py-3 px-4 rounded-xl font-bold text-sm transition-all border-2 relative ${isSubscription ? 'border-emerald-500 bg-white text-emerald-700 shadow-md' : 'border-transparent bg-white/50 text-gray-500 hover:border-gray-300'}`}
                  >
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full whitespace-nowrap">SAVE {product.subscriptionDiscount}%</span>
                    Subscribe & Save<br />
                    <span className="font-black text-lg text-emerald-700">₹{Math.round(product.price * 0.85)}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-black text-[#e040a0]">₹{price}</span>
              <span className="text-xl text-gray-400 line-through">₹{product.comparePrice}</span>
              <span className="bg-emerald-100 text-emerald-700 text-sm font-black px-3 py-1 rounded-full">{product.discount}% OFF</span>
            </div>

            {/* Qty + ATC */}
            <div className="flex gap-4 mb-6">
              <div className="flex items-center border-2 border-gray-200 rounded-full overflow-hidden">
                <button className="w-12 h-12 text-gray-600 hover:bg-gray-50 font-bold text-xl transition-colors" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                <span className="w-10 text-center font-black text-gray-900">{qty}</span>
                <button className="w-12 h-12 text-gray-600 hover:bg-gray-50 font-bold text-xl transition-colors" onClick={() => setQty(q => q + 1)}>+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-3 rounded-full font-black text-lg transition-all flex items-center justify-center gap-2 ${added ? 'bg-emerald-500 text-white' : 'bg-gradient-to-r from-[#e040a0] to-[#c0208a] text-white hover:scale-105 shadow-lg shadow-pink-200'}`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '22px', fontVariationSettings: "'FILL' 1" }}>
                  {added ? 'check_circle' : 'shopping_bag'}
                </span>
                {added ? 'Added!' : `Add to Cart · ₹${(price * qty).toLocaleString()}`}
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {product.features.map(f => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="material-symbols-outlined text-emerald-500" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  {f}
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
              {['🔒 Secure Payment', '🚚 Free Ship ₹599+', '↩️ Easy Returns', '🌿 Eco-Certified'].map(b => (
                <span key={b} className="text-xs font-semibold text-gray-500">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex gap-6 overflow-x-auto">
            {['description', 'ingredients', 'reviews'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 font-bold text-sm capitalize whitespace-nowrap border-b-2 transition-all ${activeTab === tab ? 'border-[#e040a0] text-[#e040a0]' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                {tab === 'reviews' ? `Reviews (${product.reviews.toLocaleString()})` : tab}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-3xl">
          {activeTab === 'description' && (
            <div>
              <p className="text-gray-600 leading-relaxed text-lg">{product.longDesc}</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {product.features.map(f => (
                  <div key={f} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <span className="material-symbols-outlined text-[#e040a0]" style={{ fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-sm font-semibold text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'ingredients' && (
            <div>
              <p className="text-gray-600 mb-4">Made with 8 plant-based ingredients. Free from harsh chemicals, parabens, SLS, and optical brighteners.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {['Indian Soap Nuts (Reetha)', 'Coconut Surfactants', '5-Enzyme Blend', 'Citrus Extract', 'Corn Starch', 'Vegetable Glycerin', 'Baking Soda', 'Biodegradable PVA Film'].map(i => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <span className="material-symbols-outlined text-emerald-500" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>eco</span>
                    <span className="text-sm font-semibold text-gray-700">{i}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {reviews.map((r, i) => (
                <div key={i} className="p-5 border border-gray-100 rounded-2xl">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="font-black text-gray-900 mr-2">{r.name}</span>
                      {r.verified && <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">Verified Purchase</span>}
                    </div>
                    <span className="text-xs text-gray-400">{r.date}</span>
                  </div>
                  <div className="flex mb-2">{[1,2,3,4,5].map(s => <span key={s} className={`text-sm ${s <= r.rating ? 'text-amber-400' : 'text-gray-200'}`}>★</span>)}</div>
                  <p className="text-gray-600 leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-black text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Mobile ATC */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-100 px-4 py-3 safe-area-bottom">
        <button
          onClick={handleAddToCart}
          className={`w-full py-4 rounded-full font-black text-base flex items-center justify-center gap-2 transition-all ${added ? 'bg-emerald-500 text-white' : 'bg-gradient-to-r from-[#e040a0] to-[#c0208a] text-white shadow-lg'}`}
        >
          {added ? '✓ Added to Cart' : `Add to Cart · ₹${(price * qty).toLocaleString()}`}
        </button>
      </div>
    </div>
  );
}
