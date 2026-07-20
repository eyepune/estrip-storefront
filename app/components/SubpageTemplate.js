import Image from 'next/image';
import Link from 'next/link';

export default function SubpageTemplate({ title, category }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-16">
      <main className="flex-grow py-12 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-block px-3 py-1 bg-gray-200 text-gray-700 rounded-full font-semibold text-xs mb-6 uppercase tracking-wider">
            {category}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a3a36] mb-8">{title}</h1>
          <div className="prose prose-lg text-gray-600 max-w-none bg-white p-6 sm:p-12 rounded-3xl shadow-xl border border-gray-100/50">
            <p className="lead text-lg sm:text-xl mb-6">Welcome to the {title} page. This is a premium placeholder page for the E-strip storefront.</p>
            <p className="mb-4 text-sm sm:text-base">We are currently in the final stages of integrating our live Shopify Storefront API. Once connected, this page will automatically populate with real-time dynamic data, inventory counts, and rich text descriptions pulled directly from your Shopify admin dashboard.</p>
            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link href="/#pricing" className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-black hover:scale-105 transition-transform active:scale-95 shadow-lg pill-shadow-primary text-sm sm:text-base">Return to Shop</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
