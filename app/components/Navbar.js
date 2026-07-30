'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import CartSidebar from './CartSidebar';

const navLinks = [
  { label: 'Shop All', href: '/shop' },
  { label: 'How it Works', href: '/how-it-works' },
  { label: 'Sustainability', href: '/mission' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const { totalItems, setIsOpen, isNavHidden } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      {/* Fraud Warning Banner (Only on Home Page) */}
      {pathname === '/' && (
        <div className="w-full bg-[var(--primary-deep)] text-white text-[11px] sm:text-[13px] py-1.5 px-4 text-center z-40 relative flex items-center justify-center gap-1.5 tracking-wide">
          <span className="text-[var(--color-primary)] text-[14px]">⚠️</span> 
          <span>We never ask for extra payment on prepaid orders. Any such calls are fraud. Do not share personal or payment details. Report to 1930 or cybercrime.gov.in</span>
        </div>
      )}

      {/* Sticky Header Container */}
      <div className="sticky top-0 z-50 w-full flex flex-col items-center">
        
        {/* Scrolling Announcement Bar */}
        <div className="w-full bg-gradient-to-r from-blue-600 via-purple-500 to-rose-500 text-white text-[11px] sm:text-xs font-bold py-2.5 overflow-hidden flex items-center relative shadow-md border-b border-white/10">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
          <div className="flex whitespace-nowrap animate-marquee w-max relative z-10">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 sm:gap-16 px-4 sm:px-8">
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span> FREE SHIPPING on orders over ₹599</span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>sell</span> Use code <span className="underline text-[#ffe8e8]">CLEAN20</span> for 20% off</span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> Rated 4.9/5 by our customers</span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span> Plastic-Free & Planet-Friendly</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating / Fixed Main Header */}
        <div className={`w-full grid transition-all duration-500 ease-in-out ${isNavHidden ? 'grid-rows-[0fr] opacity-0 -translate-y-4 pointer-events-none' : 'grid-rows-[1fr] opacity-100 translate-y-0'}`}>
          <div className="overflow-hidden">
            <header className={`w-full transition-all duration-500 flex justify-center ${scrolled ? 'px-4 sm:px-6 mt-3' : 'px-0 mt-0'}`}>
              <nav className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 ${
            scrolled 
              ? 'h-[60px] sm:h-[64px] bg-white/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(35,0,255,0.08)] border border-white/60 rounded-full px-5 sm:px-8' 
              : 'h-[72px] sm:h-[88px] bg-white/95 backdrop-blur-md border-b border-gray-100/50 px-4 sm:px-6 lg:px-8 shadow-sm'
          }`}>
            
            {/* Logo */}
            <Link href="/" className={`flex-shrink-0 relative hover:scale-105 transition-all duration-500 flex items-center justify-center z-50 ${scrolled ? 'w-40 sm:w-48 h-12 sm:h-16' : 'w-56 sm:w-64 h-16 sm:h-20'}`}>
              <img 
                src="/Logo.png" 
                alt="E-strip Logo" 
                className="w-full h-full object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/bundles" className="bg-red-600 hover:brightness-110 text-white px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all animate-pulse duration-2000">
                All in 1 Bundle (50% OFF)
              </Link>
              {navLinks.map(l => {
                const isActive = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));
                return (
                <Link key={l.href} href={l.href} className={`relative text-sm font-black transition-colors group ${isActive ? 'text-[var(--color-primary)]' : 'text-gray-800 hover:text-[var(--color-primary)]'}`}>
                  {l.label}
                  <span className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-300 bg-[var(--color-primary)] ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              )})}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Cart */}
              <button
                onClick={() => setIsOpen(true)}
                className={`relative p-2 rounded-full transition-colors bouncy-hover flex items-center justify-center hover:bg-[var(--color-primary)]/10 text-gray-800`}
                aria-label="Open cart"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>shopping_bag</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--color-primary)] text-white text-[10px] font-bold min-w-[20px] h-[20px] rounded-full flex items-center justify-center px-1 shadow-md border-2 border-white">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Account */}
              <Link href="/account" className={`hidden sm:flex p-2 rounded-full transition-colors bouncy-hover items-center justify-center hover:bg-[var(--color-primary)]/10 text-gray-800`}>
                <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>person</span>
              </Link>

              {/* Mobile hamburger */}
              <button
                className={`md:hidden p-2 rounded-full transition-colors flex items-center justify-center hover:bg-[var(--color-primary)]/10 text-gray-800`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '26px' }}>
                  {mobileOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu - Absolute positioned below the header */}
          <div className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ease-in-out px-4 sm:px-6 ${mobileOpen ? 'max-h-[600px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0 pointer-events-none'}`}>
            <div className="px-6 py-6 flex flex-col gap-2 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-white/50">
              {navLinks.map(l => {
                const isActive = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href));
                return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-base font-black ${isActive ? 'text-[var(--color-primary)]' : 'text-gray-800 hover:text-[var(--color-primary)]'} py-3 border-b border-gray-100/50 transition-colors flex items-center justify-between group`}
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                  <span className={`material-symbols-outlined text-[18px] transition-all text-[var(--color-primary)] ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}>arrow_forward</span>
                </Link>
              )})}
              <Link href="/account" className="text-base font-black text-gray-800 hover:text-[var(--color-primary)] py-3 transition-colors flex items-center justify-between group" onClick={() => setMobileOpen(false)}>
                My Account
                <span className="material-symbols-outlined text-[18px] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-primary)]">arrow_forward</span>
              </Link>
            </div>
          </div>
            </header>
          </div>
        </div>
      </div>

      <CartSidebar />
    </>
  );
}
