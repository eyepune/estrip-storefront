'use client';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartSidebar() {
  const { items, isOpen, setIsOpen, totalItems, subtotal, shippingProgress, amountToFreeShipping, updateQty, updateFrequency, removeItem } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[101] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-black text-gray-900">Your Cart</h2>
            <p className="text-xs text-gray-500">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <span className="material-symbols-outlined text-gray-600" style={{ fontSize: '20px' }}>close</span>
          </button>
        </div>

        {/* Free shipping progress */}
        <div className="px-6 py-3 bg-pink-50">
          {amountToFreeShipping > 0 ? (
            <p className="text-xs font-semibold text-gray-700 mb-2">
              Add <span className="text-[#e040a0] font-black">₹{amountToFreeShipping}</span> more for FREE shipping 🚀
            </p>
          ) : (
            <p className="text-xs font-bold text-emerald-600 mb-2">🎉 You've unlocked FREE shipping!</p>
          )}
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#e040a0] to-[#0096cc] rounded-full transition-all duration-500"
              style={{ width: `${shippingProgress}%` }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <span className="material-symbols-outlined text-gray-200 mb-4" style={{ fontSize: '64px' }}>shopping_bag</span>
              <p className="text-gray-500 font-semibold mb-2">Your cart is empty</p>
              <p className="text-gray-400 text-sm mb-6">Add something amazing from our store!</p>
              <Link
                href="/shop"
                onClick={() => setIsOpen(false)}
                className="bg-[#e040a0] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#c0208a] transition-colors"
              >
                Shop All Products
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.filter(i => i.subscriptionMode).length > 0 && (
                <div className="mb-2">
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-3 border-b border-gray-100 pb-2">Subscriptions</h3>
                  <div className="flex flex-col gap-4">
                    {items.filter(i => i.subscriptionMode).map((item, i) => {
                      const price = Math.round(item.price * (1 - (item.subscriptionDiscount || 15) / 100));
                      return (
                        <div key={`${item.id}-${item.subscriptionMode}`} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                          {/* Image */}
                          <div className="w-20 h-20 bg-gray-50 rounded-xl flex-shrink-0 relative overflow-hidden">
                            <Image src={item.image} alt={item.name} fill className="object-contain p-2" sizes="80px" unoptimized />
                          </div>

                          {/* Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-2">
                              <div>
                                <h4 className="text-sm font-bold text-gray-900 leading-tight">{item.name}</h4>
                                <div className="flex flex-col gap-1 mt-1">
                                  <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full inline-block w-fit">
                                    Subscribe & Save {item.subscriptionDiscount || 15}%
                                  </span>
                                  <select 
                                    value={item.frequency || '30'}
                                    onChange={(e) => updateFrequency(item.id, e.target.value, item.subscriptionMode)}
                                    className="text-[10px] font-bold border border-gray-200 rounded p-1 bg-white text-gray-600 outline-none w-fit shadow-sm"
                                  >
                                    <option value="15">Every 15 Days</option>
                                    <option value="30">Every 30 Days</option>
                                    <option value="45">Every 45 Days</option>
                                    <option value="60">Every 60 Days</option>
                                  </select>
                                </div>
                              </div>
                              <button onClick={() => removeItem(item.id, item.subscriptionMode)} className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0">
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                              </button>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                              {/* Qty stepper */}
                              <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                                <button
                                  className="w-8 h-8 flex items-center justify-center hover:bg-pink-50 text-gray-600 transition-colors text-lg font-bold"
                                  onClick={() => updateQty(item.id, item.qty - 1, item.subscriptionMode)}
                                >−</button>
                                <span className="w-8 text-center text-sm font-bold text-gray-900">{item.qty}</span>
                                <button
                                  className="w-8 h-8 flex items-center justify-center hover:bg-pink-50 text-gray-600 transition-colors text-lg font-bold"
                                  onClick={() => updateQty(item.id, item.qty + 1, item.subscriptionMode)}
                                >+</button>
                              </div>
                              <span className="font-black text-gray-900">₹{(price * item.qty).toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              
              {items.filter(i => !i.subscriptionMode).length > 0 && (
                <div className="mb-2">
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-3 border-b border-gray-100 pb-2">One-Time Purchases</h3>
                  <div className="flex flex-col gap-4">
                    {items.filter(i => !i.subscriptionMode).map((item, i) => {
                      const price = item.price;
                      return (
                        <div key={`${item.id}-${item.subscriptionMode}`} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                          {/* Image */}
                          <div className="w-20 h-20 bg-gray-50 rounded-xl flex-shrink-0 relative overflow-hidden">
                            <Image src={item.image} alt={item.name} fill className="object-contain p-2" sizes="80px" unoptimized />
                          </div>

                          {/* Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start gap-2">
                              <div>
                                <h4 className="text-sm font-bold text-gray-900 leading-tight">{item.name}</h4>
                                <span className="text-[10px] bg-gray-100 text-gray-600 font-bold px-2 py-0.5 rounded-full inline-block w-fit mt-1">
                                  One-Time Purchase
                                </span>
                              </div>
                              <button onClick={() => removeItem(item.id, item.subscriptionMode)} className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0">
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                              </button>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                              {/* Qty stepper */}
                              <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                                <button
                                  className="w-8 h-8 flex items-center justify-center hover:bg-pink-50 text-gray-600 transition-colors text-lg font-bold"
                                  onClick={() => updateQty(item.id, item.qty - 1, item.subscriptionMode)}
                                >−</button>
                                <span className="w-8 text-center text-sm font-bold text-gray-900">{item.qty}</span>
                                <button
                                  className="w-8 h-8 flex items-center justify-center hover:bg-pink-50 text-gray-600 transition-colors text-lg font-bold"
                                  onClick={() => updateQty(item.id, item.qty + 1, item.subscriptionMode)}
                                >+</button>
                              </div>
                              <span className="font-black text-gray-900">₹{(price * item.qty).toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Upsell */}
              <div className="mt-2 p-4 bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl border border-pink-100">
                <p className="text-xs font-bold text-gray-700 mb-1">🎁 Customers also love...</p>
                <p className="text-xs text-gray-500">Add <span className="font-bold text-[#e040a0]">ProEnzyme 5X</span> for tough stain protection — ₹432</p>
                <Link href="/products/proenzyme-5x" onClick={() => setIsOpen(false)} className="text-xs font-bold text-[#e040a0] hover:underline">View Product →</Link>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-xl font-black text-gray-900">₹{subtotal.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-400 mb-4">Taxes and shipping calculated at checkout</p>
            <Link
              href="/checkout"
              onClick={() => setIsOpen(false)}
              className="w-full bg-gradient-to-r from-[#e040a0] to-[#0096cc] text-white py-4 rounded-full font-black text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>lock</span>
              Secure Checkout · ₹{subtotal.toLocaleString()}
            </Link>
            <button
              className="w-full text-center text-sm text-gray-400 hover:text-gray-600 mt-3 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
