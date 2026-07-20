'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[var(--color-surface-container-highest)] pt-20 pb-28 rounded-t-[3rem] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-16">
          {/* Brand - Span 4 */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 text-[var(--color-primary)] opacity-5 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
              <span className="material-symbols-outlined text-[250px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            </div>
            <div>
              <div className="relative w-32 h-12 mb-6">
                <Image src="https://estrip.in/cdn/shop/files/Primary-Logo_Blue-scaled_1.png?v=1777612281" alt="E-strip" fill className="object-contain object-left" sizes="128px" unoptimized />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-sm relative z-10 font-medium">
                High-performance cleaning. Zero compromise. Plastic-free, planet-first, people-safe.
              </p>
            </div>
            <div className="flex gap-4 relative z-10">
              {[
                { icon: 'fa-instagram', label: 'Instagram' },
                { icon: 'fa-facebook-f', label: 'Facebook' },
                { icon: 'fa-youtube', label: 'YouTube' },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label} className="w-11 h-11 rounded-full bg-[var(--color-surface-container)] flex items-center justify-center text-[var(--color-primary)] hover:text-white hover:bg-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300 shadow-md">
                  <i className={`fab ${s.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links - Span 4 */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 bg-[var(--color-secondary-container)] rounded-3xl p-8 shadow-sm relative overflow-hidden group">
            <div className="absolute -left-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none text-[var(--color-secondary)]">
              <span className="material-symbols-outlined text-[150px]" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
            </div>
            <div className="relative z-10">
              <h4 className="text-sm font-black text-[var(--color-on-secondary-container)] uppercase tracking-widest mb-6">Shop</h4>
              <ul className="space-y-4 text-sm font-semibold text-[var(--color-on-secondary-container)]/80">
                {[
                  { label: 'Laundry Sheets', href: '/shop?category=laundry' },
                  { label: 'Dishwashing Sheets', href: '/shop?category=dish' },
                  { label: 'Baby Formula', href: '/shop?category=baby' },
                  { label: 'Floor Cleaner', href: '/shop?category=floor' },
                  { label: 'All Products', href: '/shop' },
                ].map(l => (
                  <li key={l.href}><Link href={l.href} className="hover:text-[var(--color-secondary)] transition-colors inline-block">{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="relative z-10">
              <h4 className="text-sm font-black text-[var(--color-on-secondary-container)] uppercase tracking-widest mb-6">Company</h4>
              <ul className="space-y-4 text-sm font-semibold text-[var(--color-on-secondary-container)]/80">
                {[
                  { label: 'Our Mission', href: '/mission' },
                  { label: 'Sustainability', href: '/mission#sustainability' },
                  { label: 'My Account', href: '/account' },
                  { label: 'Subscriptions', href: '/account/subscriptions' },
                  { label: 'Contact Us', href: '/contact' },
                ].map(l => (
                  <li key={l.label}><Link href={l.href} className="hover:text-[var(--color-secondary)] transition-colors inline-block">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter - Span 4 */}
          <div className="lg:col-span-4 bg-[var(--color-primary)] rounded-3xl p-8 flex flex-col justify-between shadow-sm text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <h4 className="text-2xl font-black mb-3">Join the Club</h4>
              <p className="text-sm opacity-90 mb-6 font-medium">Subscribe to our newsletter for eco-tips and exclusive 20% off launch access.</p>
              <form onSubmit={e => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/20 border border-white/20 rounded-full px-5 py-3 text-sm text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/30 transition-all min-w-0"
                />
                <button type="submit" className="bg-white text-[var(--color-primary)] rounded-full px-6 py-3 text-sm font-black hover:scale-105 transition-transform flex-shrink-0 shadow-lg drop-shadow-none">
                  Subscribe
                </button>
              </form>
            </div>
            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-2 relative z-10">
              {['🔒 Secure Checkout', '🌿 Eco Certified', '⭐ 4.9 Rating'].map(b => (
                <span key={b} className="text-xs font-bold bg-white/20 rounded-full px-3 py-1.5 backdrop-blur-md">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-200 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-gray-500 text-center md:text-left">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} E-strip India. All rights reserved. Designed and developed by <a href="https://www.eyepune.com" target="_blank" rel="noopener noreferrer" className="text-[#dc143c] hover:underline font-black">EyE PunE</a>. Made with 💚 for the planet. <span className="inline-flex items-center justify-center gap-1.5 ml-1 mt-2 md:mt-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 150" width="18" height="12" className="inline-block rounded-sm"><rect width="225" height="150" fill="#138808"/><rect width="225" height="100" fill="#ffffff"/><rect width="225" height="50" fill="#FF9933"/><circle cx="112.5" cy="75" r="20" fill="#000080"/></svg> Made specially for Indians.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map(l => (
              <a key={l} href="#" className="hover:text-[var(--color-primary)] transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
