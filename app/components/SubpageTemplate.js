import Image from 'next/image';
import Link from 'next/link';

export default function SubpageTemplate({ title, subtitle, category, children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col pt-16">
      <main className="flex-grow">
        
        {/* Dynamic Header */}
        <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-100 text-center px-4">
          <div className="max-w-4xl mx-auto">
            {category && (
              <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full font-bold text-xs mb-6 uppercase tracking-widest">
                {category}
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">{title}</h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
            )}
          </div>
        </div>

        {/* Dynamic Children or Fallback */}
        <div className="w-full">
          {children ? (
            children
          ) : (
            <div className="max-w-4xl mx-auto px-4 py-24">
              <div className="prose prose-lg text-gray-600 max-w-none bg-white p-6 sm:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 text-center">
                <p className="lead text-lg sm:text-xl mb-6 font-bold">Welcome to the {title} page.</p>
                <p className="mb-4 text-sm sm:text-base font-medium">We are currently in the final stages of integrating our live Shopify Storefront API. Once connected, this page will automatically populate with real-time dynamic data.</p>
                <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                  <Link href="/shop" className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white px-10 py-4 rounded-full font-black hover:scale-105 transition-transform active:scale-95 shadow-lg text-sm sm:text-base uppercase tracking-widest">Return to Shop</Link>
                </div>
              </div>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
