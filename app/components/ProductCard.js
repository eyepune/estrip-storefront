'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function ProductCard({ product, view = 'desktop' }) {
  const { addItem } = useCart();
  const [isSubscription, setIsSubscription] = useState(false);
  const [frequency, setFrequency] = useState('30');

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (isSubscription) {
      addItem({ ...product, subscriptionMode: true, subscriptionDiscount: 15, frequency });
    } else {
      addItem(product);
    }
  };

  if (view === 'mobile') {
    return (
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`bg-white/70 backdrop-blur-xl p-4 rounded-3xl shadow-xl border border-white/50 flex flex-col group cursor-pointer`}
      >
        <Link href="/products/smartclean-3x" className="relative w-full aspect-square bg-surface-container-low rounded-lg overflow-hidden mb-4 block">
          <img className="w-full h-full object-cover" alt={product.name} src={product.image} />
          {product.badge && (
            <div className="absolute top-2 right-2 flex gap-1">
              <span className={`bg-${product.color}-fixed text-on-${product.color}-fixed text-[10px] font-bold px-2 py-1 rounded-full uppercase`}>
                {product.badge}
              </span>
            </div>
          )}
        </Link>
        <div className="flex justify-between items-start mb-1">
          <div className="flex items-center gap-1 text-on-surface-variant text-sm font-bold">
            <span className="material-symbols-outlined text-yellow-500 scale-75" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            {product.rating}
          </div>
          <span className="text-on-surface-variant text-sm font-medium">{product.reviews} Reviews</span>
        </div>
        <Link href="/products/smartclean-3x">
          <h2 className="text-lg font-black text-on-surface leading-tight mb-1 hover:text-primary transition-colors">{product.name}</h2>
        </Link>
        <p className="text-sm text-on-surface-variant mb-2 flex-grow">{product.description}</p>
        {product.loads && <div className="text-xs font-bold text-tertiary mb-3">{product.loads}</div>}
        <div className="flex bg-surface-container-low rounded-lg p-1 mb-2 gap-1">
          <button 
            onClick={(e) => { e.preventDefault(); setIsSubscription(false); }}
            className={`flex-1 text-xs font-bold py-2 rounded-md transition-all ${!isSubscription ? 'bg-white shadow text-on-surface' : 'text-on-surface-variant hover:bg-surface-variant'}`}
          >
            One-Time
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); setIsSubscription(true); }}
            className={`flex-1 text-[11px] font-bold py-2 rounded-md transition-all ${isSubscription ? 'bg-white shadow text-primary' : 'text-on-surface-variant hover:bg-surface-variant'}`}
          >
            Subscribe -15%
          </button>
        </div>
        {isSubscription && (
          <select 
            value={frequency} 
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full text-xs font-bold border border-outline-variant rounded p-2 mb-4 bg-white text-on-surface outline-none cursor-pointer"
          >
            <option value="15">Delivery: Every 15 Days</option>
            <option value="30">Delivery: Every 30 Days</option>
            <option value="45">Delivery: Every 45 Days</option>
            <option value="60">Delivery: Every 60 Days</option>
          </select>
        )}
        <div className={`flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/30 ${!isSubscription ? 'mt-4' : ''}`}>
          <span className={`text-xl font-black text-${product.color || 'primary'}`}>
            {isSubscription ? `₹${(product.price * 0.85).toFixed(2)}` : `₹${product.price}`}
          </span>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className={`whitespace-nowrap flex-shrink-0 bg-primary hover:bg-surface-tint text-white px-6 py-2 rounded-full font-bold text-sm pill-shadow-primary transition-colors flex items-center gap-2`}
          >
            <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
            Add to Cart
          </motion.button>
        </div>
      </motion.div>
    );
  }

  // Desktop view
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`bg-white/70 backdrop-blur-xl rounded-3xl p-6 flex flex-col gap-6 shadow-xl transition-all h-full border border-white/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] group`}
    >
      <Link href="/products/smartclean-3x" className="w-full aspect-square rounded-lg overflow-hidden shrink-0 bg-surface-container cursor-pointer block">
        <img alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src={product.image} />
      </Link>
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-start mb-2">
            {product.badge && (
              <span className={`bg-${product.color || 'tertiary'}-fixed text-on-${product.color || 'tertiary'}-fixed-variant px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider`}>
                {product.badge}
              </span>
            )}
            <div className="flex items-center gap-1 bg-surface-container-low px-2 py-1 rounded-full">
              <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="text-sm font-bold">{product.rating}</span>
            </div>
          </div>
          <Link href="/products/smartclean-3x">
            <h2 className="text-xl font-black text-on-surface mb-2 hover:text-primary transition-colors">{product.name}</h2>
          </Link>
          <p className="text-on-surface-variant text-sm font-medium mb-2">{product.description}</p>
          {product.loads && <div className="text-xs font-bold text-tertiary mb-3">{product.loads}</div>}
        </div>
        <div className="flex bg-surface-container-low rounded-lg p-1 mb-2 gap-1">
          <button 
            onClick={(e) => { e.preventDefault(); setIsSubscription(false); }}
            className={`flex-1 text-xs font-bold py-2 rounded-md transition-all ${!isSubscription ? 'bg-white shadow text-on-surface' : 'text-on-surface-variant hover:bg-surface-variant'}`}
          >
            One-Time
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); setIsSubscription(true); }}
            className={`flex-1 text-[11px] font-bold py-2 rounded-md transition-all ${isSubscription ? 'bg-white shadow text-primary' : 'text-on-surface-variant hover:bg-surface-variant'}`}
          >
            Subscribe -15%
          </button>
        </div>
        {isSubscription && (
          <select 
            value={frequency} 
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full text-xs font-bold border border-outline-variant rounded p-2 mb-4 bg-white text-on-surface outline-none cursor-pointer"
          >
            <option value="15">Delivery: Every 15 Days</option>
            <option value="30">Delivery: Every 30 Days</option>
            <option value="45">Delivery: Every 45 Days</option>
            <option value="60">Delivery: Every 60 Days</option>
          </select>
        )}
        <div className={`flex items-center justify-between ${!isSubscription ? 'mt-4' : ''}`}>
          <span className={`text-2xl font-black text-${product.color || 'tertiary'}`}>
            {isSubscription ? `₹${(product.price * 0.85).toFixed(2)}` : `₹${product.price}`}
          </span>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            className={`whitespace-nowrap flex-shrink-0 bg-${product.color || 'tertiary'} text-white px-6 py-2 rounded-full font-black hover:bg-${product.color || 'tertiary'}-container hover:text-on-${product.color || 'tertiary'}-container transition-colors shadow-md hover:shadow-lg`}
          >
            Quick Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
