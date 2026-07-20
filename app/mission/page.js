export const metadata = {
  title: 'Our Mission | E-strip',
};

export default function PageComponent() {
  return (
    <div className="relative min-h-screen selection:bg-[var(--color-primary-fixed)] selection:text-[var(--color-on-primary-fixed)]">
      
      {/* Immersive Video Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#f8f9ff] to-[#fff5fa]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover mix-blend-multiply opacity-50"
        >
          <source src="/Drone_shot_above_green_forest_202607210047.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10">
        
        {/* Global Mission Page (Unified for Desktop and Mobile) */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 overflow-hidden">
          
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto mb-24 pt-10">
            <span className="inline-block bg-[var(--color-primary-fixed)] text-[var(--color-on-primary-fixed-variant)] font-bold px-6 py-2 rounded-full mb-6 shadow-sm">OUR MISSION</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-gray-900 mb-6 drop-shadow-sm leading-tight">Clean Clothes,<br /><span className="text-[var(--color-tertiary)]">Greener Planet.</span></h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed font-medium drop-shadow-sm px-2">We’re reinventing laundry to be as kind to the Earth as it is to your favorite t-shirt. Zero plastic, zero mess, total joy.</p>
            <button className="bg-[var(--color-primary)] text-white font-black py-4 px-10 rounded-full text-lg pill-shadow-primary hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
              Join the Movement
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </section>

          {/* Values Grid */}
          <section className="mb-24">
            <div className="mb-12 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2 drop-shadow-sm">The e-strip Way</h2>
              <p className="text-lg sm:text-xl text-gray-700 font-medium">Comprehensive Solutions for a Sustainable Home</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="md:col-span-2 bg-white/60 backdrop-blur-2xl border border-white/50 p-6 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <div className="w-16 h-16 bg-[var(--color-tertiary-fixed)] flex items-center justify-center rounded-full mb-8 shadow-inner">
                    <span className="material-symbols-outlined text-[var(--color-tertiary)] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">Eco-Friendly Vision</h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">Our vision is a world where doing laundry doesn't mean compromising the health of our oceans. We've developed a zero-waste formula that dissolves completely, leaving nothing behind but freshness.</p>
                </div>
                <div className="mt-8 sm:mt-12 flex flex-wrap gap-2 sm:gap-3">
                  <span className="px-4 py-2 bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)] font-bold rounded-full text-sm">Biodegradable</span>
                  <span className="px-4 py-2 bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)] font-bold rounded-full text-sm">Ocean Safe</span>
                  <span className="px-4 py-2 bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)] font-bold rounded-full text-sm">Carbon Neutral</span>
                </div>
              </div>

              <div className="bg-[var(--color-primary-container)]/80 backdrop-blur-2xl border border-white/40 p-6 sm:p-10 rounded-3xl text-[var(--color-on-primary-container)] shadow-xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 bg-white/40 backdrop-blur-md flex items-center justify-center rounded-full mb-8 shadow-inner">
                  <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>biotech</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4">Plant-Powered Science</h3>
                <p className="opacity-90 leading-relaxed text-base sm:text-lg font-medium">Harnessing the cleaning power of nature. Our enzyme-rich formula targets tough stains without the harsh chemicals of traditional detergents.</p>
              </div>

              <div className="bg-[var(--color-secondary)] p-6 sm:p-10 rounded-3xl text-white shadow-xl flex flex-col justify-center hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                   <span className="material-symbols-outlined text-9xl">recycling</span>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>recycling</span>
                    <h3 className="text-2xl font-black leading-tight">Plastic-Free Commitment</h3>
                  </div>
                  <p className="text-base sm:text-lg opacity-90 mb-4 sm:mb-8 font-medium">We have successfully eliminated 500,000+ plastic jugs from landfills this year alone. Our packaging is 100% compostable cardboard.</p>
                </div>
              </div>

              <div className="md:col-span-2 bg-white/40 backdrop-blur-xl border border-white/50 p-6 sm:p-10 rounded-3xl shadow-lg flex flex-col md:flex-row gap-8 items-center hover:-translate-y-2 transition-transform duration-300">
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3">Total Transparency</h3>
                  <p className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base">No hidden ingredients. No confusing labels. Just honest, effective cleaning that you can feel good about using in your home.</p>
                </div>
                <div className="flex-shrink-0 grid grid-cols-2 gap-4 w-full md:w-auto">
                  <div className="p-4 bg-white/80 rounded-2xl flex flex-col items-center shadow-sm">
                    <span className="text-[var(--color-tertiary)] font-black text-2xl">100%</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Vegan</span>
                  </div>
                  <div className="p-4 bg-white/80 rounded-2xl flex flex-col items-center shadow-sm">
                    <span className="text-[var(--color-primary)] font-black text-2xl">0%</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Parabens</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Impact Section */}
          <section className="mb-24 flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[var(--color-primary-fixed)] rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color-tertiary-fixed)] rounded-full blur-3xl opacity-50"></div>
                <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white/40">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-[300px] sm:h-[500px] object-cover"
                  >
                    <source src="/Family_holding_detergent_sheet_1080p_202607210138.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight drop-shadow-sm">Small Strips.<br /><span className="text-[var(--color-primary)]">Big Impact.</span></h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-[var(--color-secondary)]">
                    <span className="material-symbols-outlined font-bold">check</span>
                  </div>
                  <p className="text-gray-700 font-medium text-base sm:text-lg pt-1">Traditional detergent is up to 90% water. We removed the water and kept only the power.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-[var(--color-secondary)]">
                    <span className="material-symbols-outlined font-bold">check</span>
                  </div>
                  <p className="text-gray-700 font-medium text-base sm:text-lg pt-1">Lightweight shipping means 94% fewer CO2 emissions during transport compared to heavy jugs.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-[var(--color-secondary)]">
                    <span className="material-symbols-outlined font-bold">check</span>
                  </div>
                  <p className="text-gray-700 font-medium text-base sm:text-lg pt-1">Hypoallergenic and dermatologist-tested for the most sensitive skin types.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/60 backdrop-blur-2xl border border-white/50 p-6 sm:p-16 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <span className="material-symbols-outlined text-9xl">bubble_chart</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4 drop-shadow-sm">Ready to start your journey?</h2>
              <p className="text-gray-700 font-medium text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">Join 50,000+ eco-warriors making a difference one load at a time.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
                <input className="px-6 py-4 rounded-full border-2 border-white focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/20 outline-none w-full sm:w-auto min-w-0 sm:min-w-[300px] bg-white/80 shadow-sm" placeholder="Enter your email" type="email" />
                <button className="bg-[var(--color-primary)] text-white font-black py-4 px-10 rounded-full pill-shadow-primary hover:scale-105 transition-transform whitespace-nowrap active:scale-95 text-base sm:text-lg">
                  Join the Movement
                </button>
              </div>
              <p className="text-sm text-gray-500 font-bold mt-6">Get 15% off your first bundle. Cancel anytime.</p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
