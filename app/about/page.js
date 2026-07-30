'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pb-24">
      
      {/* Massive Hero */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[var(--primary-deep)]">
        <Image 
          src="/images/hero_background.png" 
          alt="Our Story" 
          fill 
          className="object-cover opacity-50 mix-blend-screen"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-deep)] via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Cleaning up the cleaning industry.</h1>
          <p className="text-[var(--color-primary-fixed)] font-medium text-xl max-w-2xl mx-auto">We're on a mission to eliminate single-use plastic from every laundry room in India.</p>
        </div>
      </section>

      {/* The Problem (Split Block) */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
            <Image src="/images/plastic_waste.png" alt="Plastic Waste" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 mix-blend-multiply" unoptimized />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-[var(--color-primary)] font-black tracking-widest uppercase text-xs mb-4 block">The Problem</span>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-on-surface)] mb-6 leading-tight">90% water, packed in plastic.</h2>
            <p className="text-[var(--color-on-surface-variant)] font-medium text-lg mb-6 leading-relaxed">
              Traditional liquid detergents are mostly water. You are paying to ship heavy water in giant single-use plastic jugs across the country. Over 1 billion of these jugs are thrown away every year, and less than 10% are actually recycled.
            </p>
            <p className="text-[var(--color-on-surface-variant)] font-medium text-lg leading-relaxed">
              We knew there had to be a better way to get clean clothes without destroying the planet in the process.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution (Split Block Reverse) */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-[var(--color-tertiary)]/5">
            <Image src="https://estrip.in/cdn/shop/files/pdp_s3.png?width=800" alt="E-strip Sheets" fill className="object-contain p-12 mix-blend-multiply" unoptimized />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-[var(--color-tertiary)] font-black tracking-widest uppercase text-xs mb-4 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-on-surface)] mb-6 leading-tight">Zero plastic. Maximum power.</h2>
            <p className="text-[var(--color-on-surface-variant)] font-medium text-lg mb-6 leading-relaxed">
              E-strip takes all the active cleaning ingredients from premium detergents, removes the water, and compresses them into a lightweight, pre-measured sheet. 
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 font-bold text-[var(--color-on-surface)]">
                <span className="material-symbols-outlined text-[var(--color-tertiary)] text-[24px]">eco</span>
                100% Compostable Cardboard Packaging
              </li>
              <li className="flex items-center gap-3 font-bold text-[var(--color-on-surface)]">
                <span className="material-symbols-outlined text-[var(--color-tertiary)] text-[24px]">local_shipping</span>
                Carbon Neutral Shipping
              </li>
              <li className="flex items-center gap-3 font-bold text-[var(--color-on-surface)]">
                <span className="material-symbols-outlined text-[var(--color-tertiary)] text-[24px]">water_drop</span>
                Dissolves completely in hot or cold water
              </li>
            </ul>
            <Link href="/shop" className="btn bg-[var(--color-primary)] text-white hover:brightness-110 px-8 py-4 rounded-[9999px] font-bold text-sm tracking-widest shadow-[0_10px_30px_rgba(224,64,160,0.25)] inline-block">
              Shop The Solution
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-[var(--color-surface-container)] py-24 px-4 border-y border-[var(--color-outline-variant)]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-[var(--color-primary)]/10 rounded-full mx-auto mb-8 overflow-hidden shadow-inner border-2 border-[var(--color-primary)]/20">
            <Image src="https://estrip.in/cdn/shop/files/pdp_s1_1.png?width=200" alt="Founder" width={96} height={96} className="object-cover" unoptimized />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--color-on-surface)] mb-6 tracking-tight">"We wanted to build a company our kids would be proud of."</h2>
          <p className="text-[var(--color-on-surface-variant)] text-lg font-medium leading-relaxed mb-8">
            When we realized the massive environmental impact of our daily household chores, we couldn't unsee it. We spent two years working with chemists to formulate a plant-based sheet that actually works as well as the toxic supermarket brands. E-strip is the result of that obsessive journey.
          </p>
          <span className="font-black text-[var(--color-on-surface)] tracking-widest uppercase text-sm">— The Founders</span>
        </div>
      </section>

      {/* Impact Stat Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center text-[var(--color-on-surface)] mb-16 tracking-tight">Our Impact So Far</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border-2 border-[var(--color-outline-variant)] rounded-3xl p-10 text-center hover:border-[var(--color-primary)] transition-colors">
            <span className="text-5xl md:text-6xl font-black text-[var(--color-primary)] block mb-4">8M+</span>
            <h4 className="font-black text-[var(--color-on-surface)] text-lg uppercase tracking-widest mb-2">Plastic Bottles</h4>
            <p className="text-[var(--color-on-surface-variant)] font-medium">Saved from landfills and oceans.</p>
          </div>
          <div className="bg-white border-2 border-[var(--color-outline-variant)] rounded-3xl p-10 text-center hover:border-[var(--color-tertiary)] transition-colors">
            <span className="text-5xl md:text-6xl font-black text-[var(--color-tertiary)] block mb-4">100k+</span>
            <h4 className="font-black text-[var(--color-on-surface)] text-lg uppercase tracking-widest mb-2">Trees Planted</h4>
            <p className="text-[var(--color-on-surface-variant)] font-medium">To offset our carbon footprint.</p>
          </div>
          <div className="bg-white border-2 border-[var(--color-outline-variant)] rounded-3xl p-10 text-center hover:border-[var(--color-secondary)] transition-colors">
            <span className="text-5xl md:text-6xl font-black text-[var(--color-secondary)] block mb-4">15k+</span>
            <h4 className="font-black text-[var(--color-on-surface)] text-lg uppercase tracking-widest mb-2">Families Switched</h4>
            <p className="text-[var(--color-on-surface-variant)] font-medium">To a cleaner, greener routine.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
