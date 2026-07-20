'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';

const product = {
  id: 'smartclean-3x',
  name: 'SmartClean 3X Laundry Sheets',
  price: 599,
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4_7xb6D0h6kaWhRbdLqEx12I3Jm9uUiWqahZEM-aKVGELrZ8TspyV0P9pZOWpNcgcqIkWZzlO5rBrYJf6zXO4LwE4cCpMNpuVQOMgwLTwYRg3R4_1oKjWJbX8HPnPqafLuZHUc09NVFhdSHJr_zWqGAIjh0f5mveKxi0-z-ewUQGOQbVQJSZs6eBbPTtcLZekKY6Z11jeiruvLMiDtKllbUrVsBH7XnAWEV6FetVoGm-AhTeSNPxIlgDEecf_TuN7YT8QqKQ7IeXd'
};

const bundleProduct = {
  id: 'bundle-clean-power',
  name: 'The Clean Power Bundle',
  price: 999,
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4_7xb6D0h6kaWhRbdLqEx12I3Jm9uUiWqahZEM-aKVGELrZ8TspyV0P9pZOWpNcgcqIkWZzlO5rBrYJf6zXO4LwE4cCpMNpuVQOMgwLTwYRg3R4_1oKjWJbX8HPnPqafLuZHUc09NVFhdSHJr_zWqGAIjh0f5mveKxi0-z-ewUQGOQbVQJSZs6eBbPTtcLZekKY6Z11jeiruvLMiDtKllbUrVsBH7XnAWEV6FetVoGm-AhTeSNPxIlgDEecf_TuN7YT8QqKQ7IeXd'
};

export default function SmartCleanPage() {
  const { addItem } = useCart();
  const [isSubscription, setIsSubscription] = useState(false);
  const [frequency, setFrequency] = useState('30');

  const handleAddToCart = (item, subscribe = isSubscription) => {
    if (subscribe) {
      addItem({ ...item, subscriptionMode: true, subscriptionDiscount: 15, frequency });
    } else {
      addItem(item);
    }
  };

  return (
    <div className="bg-background min-h-screen text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
    <div className="bg-background min-h-screen text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      
      {/* Desktop View */}
      <div className="hidden md:block">
        <main className="max-w-7xl mx-auto px-6 py-12 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-xl ring-1 ring-black/5 bouncy-hover">
                <img alt="SmartClean 3X Laundry Sheets Packaging" className="w-full h-full object-cover" src={product.image} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-tertiary text-white px-6 py-3 rounded-full font-bold pill-shadow-tertiary animate-bounce">
                30 Sheets = 60 Loads!
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-sm font-bold">Best Seller</span>
                  <div className="flex text-primary">
                    {[1,2,3,4,5].map(s => (
                      <span key={s} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                </div>
                <h1 className="text-5xl font-black text-on-surface leading-tight tracking-tight mb-2">SmartClean 3X <span className="text-primary">Laundry Sheets</span></h1>
                <p className="text-2xl font-bold text-secondary">₹{product.price} <span className="text-sm font-medium text-on-surface-variant line-through ml-2">₹19.99</span></p>
              </div>
              <div className="bg-surface-container p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-tertiary">eco</span>
                  <h3 className="font-bold text-on-surface">Scent: Spring Meadow</h3>
                </div>
                <p className="text-on-surface-variant">A crisp, revitalizing breeze of freshly cut grass and morning dew that lingers on your fabrics for days.</p>
              </div>

              <div className="flex flex-col gap-3 mb-2">
                <label className={`cursor-pointer flex items-center justify-between p-4 rounded-xl border-2 transition-all ${!isSubscription ? 'border-primary bg-primary-fixed/10' : 'border-outline-variant bg-white shadow-sm hover:border-primary/50'}`} onClick={() => setIsSubscription(false)}>
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${!isSubscription ? 'border-primary' : 'border-outline'}`}>
                      {!isSubscription && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                    </div>
                    <span className="font-bold text-on-surface">One-Time Purchase</span>
                  </div>
                  <span className="font-black text-on-surface">₹{product.price}</span>
                </label>
                
                <label className={`cursor-pointer flex flex-col p-4 rounded-xl border-2 transition-all ${isSubscription ? 'border-primary bg-primary-fixed/10' : 'border-outline-variant bg-white shadow-sm hover:border-primary/50'}`} onClick={() => setIsSubscription(true)}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSubscription ? 'border-primary' : 'border-outline'}`}>
                        {isSubscription && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                      </div>
                      <span className="font-bold text-on-surface">Subscribe & Save 15%</span>
                    </div>
                    <span className="font-black text-primary">₹{(product.price * 0.85).toFixed(2)}</span>
                  </div>
                  <div className="ml-8 mt-2">
                    {isSubscription ? (
                      <select 
                        value={frequency} 
                        onChange={(e) => { e.stopPropagation(); setFrequency(e.target.value); }}
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm font-bold border border-outline-variant rounded p-2 bg-white text-on-surface outline-none cursor-pointer w-full max-w-[200px]"
                      >
                        <option value="15">Delivery: Every 15 Days</option>
                        <option value="30">Delivery: Every 30 Days</option>
                        <option value="45">Delivery: Every 45 Days</option>
                        <option value="60">Delivery: Every 60 Days</option>
                      </select>
                    ) : (
                      <p className="text-sm text-on-surface-variant">Cancel anytime.</p>
                    )}
                  </div>
                </label>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(product)}
                    className="bg-primary text-white font-black px-12 py-4 rounded-full text-xl transition-all pill-shadow-primary flex-1 hover:bg-primary-hover"
                  >
                    Add to Cart
                  </motion.button>
                  <button className="border-2 border-primary text-primary p-4 rounded-full hover:bg-primary-fixed transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
                <p className="text-center text-sm text-on-surface-variant font-medium">Free shipping on orders over ₹599</p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-outline-variant">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-outline-variant shadow-sm">
                  <span className="material-symbols-outlined text-secondary">workspace_premium</span>
                  <span className="text-sm font-bold text-secondary">Vegan</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-outline-variant shadow-sm">
                  <span className="material-symbols-outlined text-secondary">health_and_safety</span>
                  <span className="text-sm font-bold text-secondary">Hypoallergenic</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-outline-variant shadow-sm">
                  <span className="material-symbols-outlined text-secondary">cruelty_free</span>
                  <span className="text-sm font-bold text-secondary">Cruelty Free</span>
                </div>
              </div>
            </motion.div>
          </div>

          <section className="mb-24">
            <h2 className="text-3xl font-black mb-12 text-center text-on-surface">Laundry Simplified in <span className="text-tertiary">3 Steps</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'content_cut', color: 'primary', title: 'Tear & Toss', desc: 'Tear off a single sheet for regular loads or use a half sheet for smaller ones.' },
                { icon: 'local_laundry_service', color: 'tertiary', title: 'Wash & Go', desc: 'Works in all machines, including HE. Dissolves instantly in hot or cold water.' },
                { icon: 'bubble_chart', color: 'secondary', title: 'Pure Freshness', desc: 'Enjoy sparkling clean clothes with zero plastic waste and zero mess.' }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-white p-8 rounded-lg shadow-xl text-center bouncy-hover border-t-4 border-${step.color}`}
                >
                  <div className={`w-16 h-16 bg-${step.color}-fixed rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <span className={`material-symbols-outlined text-${step.color} text-3xl`}>{step.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                  <p className="text-on-surface-variant">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-black mb-8 text-on-surface">Frequently Bought <span className="text-primary">Together</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-surface-container-low p-8 rounded-lg">
              <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-white p-4 shadow-lg bouncy-hover">
                <img alt="Stain Remover Spray Bottle" className="w-full aspect-square object-contain mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA832W0Rt11LnRax6qXgDLkp1bHHx_nWl_LCbmoG7YzMPm3BXmByWVDpucdT9t12yNv_gSOBXYeJ6I531ZH4_Co4e0x-yB3weG4Anib1vICQOjFAjMYi2ItnqiUgq5ejOXktTS0VMGHKXpTsKyaxuCQSbvRrV3Ac6ff0ZpKb9KaN2_ewV527QUJgj4yiw_g5Uj7unIP9tDlwKHYA_Zg36t52n7O5--30rETcNGwCPgFR5O5DpnNgpnz3NkfgwQf7NNv0sG91LngghM" />
                <h3 className="font-bold text-lg">Stain Remover Spray</h3>
                <p className="text-secondary font-bold">₹9.50</p>
                <button 
                  onClick={() => handleAddToCart({id: 'stain-spray', name: 'Stain Remover Spray', price: 9.50})}
                  className="mt-4 w-full bg-secondary text-white py-2 rounded-full font-bold hover:bg-on-secondary-fixed-variant transition-colors"
                >
                  Add Accessory
                </button>
              </div>
              <div className="md:col-span-8 flex flex-col justify-center p-6 bg-tertiary-container/10 rounded-xl border-2 border-dashed border-tertiary">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-white shadow">
                    <img alt="Sheets" className="w-full h-full object-cover" src={product.image} />
                  </div>
                  <span className="text-3xl font-black text-tertiary">+</span>
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-white shadow">
                    <img alt="Spray" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA832W0Rt11LnRax6qXgDLkp1bHHx_nWl_LCbmoG7YzMPm3BXmByWVDpucdT9t12yNv_gSOBXYeJ6I531ZH4_Co4e0x-yB3weG4Anib1vICQOjFAjMYi2ItnqiUgq5ejOXktTS0VMGHKXpTsKyaxuCQSbvRrV3Ac6ff0ZpKb9KaN2_ewV527QUJgj4yiw_g5Uj7unIP9tDlwKHYA_Zg36t52n7O5--30rETcNGwCPgFR5O5DpnNgpnz3NkfgwQf7NNv0sG91LngghM" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-on-surface mb-2">{bundleProduct.name}</h3>
                <p className="text-on-surface-variant mb-6">Combine our SmartClean sheets with the heavy-duty Stain Remover for the ultimate eco-friendly laundry experience.</p>
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-black text-primary">₹{bundleProduct.price}</span>
                  <span className="text-lg text-on-surface-variant line-through">₹24.49</span>
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(bundleProduct, true)}
                    className="ml-auto bg-primary text-white px-8 py-3 rounded-full font-bold pill-shadow-primary hover:scale-105 transition-transform"
                  >
                    Bundle &amp; Save 10%
                  </motion.button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <main className="max-w-md mx-auto">
          <section className="relative overflow-hidden">
            <div className="flex overflow-x-auto snap-x hide-scrollbar">
              <div className="flex-none w-full snap-center aspect-square">
                <img alt="SmartClean 3X Laundry Sheets Packaging" className="w-full h-full object-cover" src={product.image}/>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-tertiary text-white px-4 py-1 rounded-full font-bold text-sm pink-shadow animate-bounce">
              Eco-Friendly
            </div>
          </section>

          <section className="p-6 space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Top Rated</span>
                <div className="flex items-center text-secondary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-xs font-bold ml-1">4.9 (1,240 Reviews)</span>
                </div>
              </div>
              <h1 className="text-3xl font-black text-on-surface leading-tight">SmartClean 3X Laundry Detergent Sheets</h1>
              <p className="text-tertiary font-bold text-lg">Fresh Linen Scent</p>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black text-primary">₹{product.price}</span>
              <span className="text-on-surface-variant line-through font-medium">₹24.00</span>
              <span className="text-error font-bold bg-error-container px-2 py-0.5 rounded-lg text-sm">Save 20%</span>
            </div>
            <div className="flex flex-col gap-3 my-6">
                <label className={`cursor-pointer flex items-center justify-between p-4 rounded-xl border-2 transition-all ${!isSubscription ? 'border-primary bg-primary-fixed/10' : 'border-outline-variant bg-white shadow-sm'}`} onClick={() => setIsSubscription(false)}>
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${!isSubscription ? 'border-primary' : 'border-outline'}`}>
                      {!isSubscription && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                    </div>
                    <span className="font-bold text-on-surface text-sm">One-Time</span>
                  </div>
                  <span className="font-black text-on-surface">₹{product.price}</span>
                </label>
                
                <label className={`cursor-pointer flex flex-col p-4 rounded-xl border-2 transition-all ${isSubscription ? 'border-primary bg-primary-fixed/10' : 'border-outline-variant bg-white shadow-sm'}`} onClick={() => setIsSubscription(true)}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSubscription ? 'border-primary' : 'border-outline'}`}>
                        {isSubscription && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                      </div>
                      <span className="font-bold text-on-surface text-sm">Subscribe & Save 15%</span>
                    </div>
                    <span className="font-black text-primary">₹{(product.price * 0.85).toFixed(2)}</span>
                  </div>
                  <div className="ml-8 mt-2">
                    {isSubscription ? (
                      <select 
                        value={frequency} 
                        onChange={(e) => { e.stopPropagation(); setFrequency(e.target.value); }}
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm font-bold border border-outline-variant rounded p-2 bg-white text-on-surface outline-none cursor-pointer w-full"
                      >
                        <option value="15">Delivery: Every 15 Days</option>
                        <option value="30">Delivery: Every 30 Days</option>
                        <option value="45">Delivery: Every 45 Days</option>
                        <option value="60">Delivery: Every 60 Days</option>
                      </select>
                    ) : (
                      <p className="text-xs text-on-surface-variant">Cancel anytime.</p>
                    )}
                  </div>
                </label>
              </div>

            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAddToCart(product)}
              className="w-full bg-primary text-white font-black px-12 py-4 rounded-full text-xl pill-shadow-primary"
            >
              Add to Cart
            </motion.button>
          </section>
        </main>
      </div>

      </div>
    </div>
  );
}
