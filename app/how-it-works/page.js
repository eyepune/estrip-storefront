'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Product3DViewer from '../components/Product3DViewer';
import HowItWorksScroll from '../components/HowItWorksScroll';

const useCases = [
  {
    id: 'machine-wash',
    icon: 'local_laundry_service',
    title: 'Machine Wash',
    subtitle: 'Front-load, top-load & HE machines',
    color: 'var(--color-primary)',
    steps: [
      { step: '01', title: 'Toss It In', desc: 'Place one E-strip sheet directly on top of your clothes in the drum. No measuring, no mess.' },
      { step: '02', title: 'Select & Start', desc: 'Choose any cycle — hot or cold. The sheet activates and dissolves within seconds of water contact.' },
      { step: '03', title: 'Enjoy Fresh Clothes', desc: 'Remove your laundry smelling fresh and feeling soft. The sheet dissolves completely — zero residue.' },
    ],
    tips: ['Use 1 sheet for loads up to 6kg', 'Tear in half for smaller loads', 'Works in all water temperatures', 'Safe for all fabric types including silk & wool'],
    image: 'https://estrip.in/cdn/shop/files/pdp_s3.png?width=600',
  },
  {
    id: 'bucket-wash',
    icon: 'water',
    title: 'Bucket / Hand Wash',
    subtitle: 'Perfect for Indian homes — balti & hand wash',
    color: 'var(--color-secondary)',
    steps: [
      { step: '01', title: 'Fill Your Bucket', desc: 'Fill a bucket or tub with water (hot or cold). Tear one sheet in half or use a full sheet for heavy loads.' },
      { step: '02', title: 'Drop & Dissolve', desc: 'Drop the sheet into the water and swirl for 10-15 seconds. Watch it dissolve into a powerful cleaning solution.' },
      { step: '03', title: 'Soak & Scrub', desc: 'Add your clothes, soak for 15-30 minutes for tough stains. Scrub as needed, then rinse clean.' },
    ],
    tips: ['Tear sheet in half for 1-2 garments', 'Pre-soak tough stains like turmeric or chai', 'Gentle enough for delicates & sarees', 'No harsh chemicals means safe on colours'],
    image: 'https://estrip.in/cdn/shop/files/pdp_s2.png?width=600',
  },
  {
    id: 'dishwashing',
    icon: 'countertops',
    title: 'Dishwashing',
    subtitle: 'Grease-cutting power for every dish',
    color: 'var(--color-tertiary)',
    steps: [
      { step: '01', title: 'Wet Your Sponge', desc: 'Wet a sponge or scrub pad, then place a dishwashing sheet on top. Squeeze a few times to lather up.' },
      { step: '02', title: 'Scrub Away', desc: 'The concentrated formula creates a rich, grease-cutting lather. One sheet handles 20-30 dishes easily.' },
      { step: '03', title: 'Rinse Clean', desc: 'Rinse dishes under water. No soapy film, no chemical residue — just sparkling clean utensils.' },
    ],
    tips: ['One sheet does a full sink of dishes', 'Cut in half for lighter loads', 'Removes dried-on masala and oil stains', 'Safe for non-stick cookware'],
    image: 'https://estrip.in/cdn/shop/files/pdp_s4.png?width=600',
  },
  {
    id: 'stain-removal',
    icon: 'auto_fix_high',
    title: 'Stain Removal',
    subtitle: 'Enzyme-powered spot treatment',
    color: 'var(--color-primary)',
    steps: [
      { step: '01', title: 'Spot The Stain', desc: 'Identify the stain while it is still fresh. Our stain remover spray works best on fresh stains before they set.' },
      { step: '02', title: 'Spray & Wait', desc: 'Spray the stain remover directly onto the affected area. Let the enzymes work their magic for 5-10 minutes.' },
      { step: '03', title: 'Blot or Wash', desc: 'Blot with a clean cloth or toss into the wash. Watch even stubborn turmeric, coffee, and grass stains vanish.' },
    ],
    tips: ['Works on turmeric, chai, coffee, wine & grease', 'Apply within 30 minutes for best results', 'Safe on colored fabrics', 'Can also be used as a pre-wash treatment'],
    image: 'https://estrip.in/cdn/shop/files/pdp_s5.png?width=600',
  },
  {
    id: 'floor-cleaning',
    icon: 'mop',
    title: 'Floor Cleaning',
    subtitle: 'From tiles to marble — one sheet cleans all',
    color: 'var(--color-secondary)',
    steps: [
      { step: '01', title: 'Dissolve In Water', desc: 'Drop one floor cleaner sheet into a bucket of water. It dissolves in seconds, releasing a fresh cleaning solution.' },
      { step: '02', title: 'Mop Away', desc: 'Dip your mop or cloth and clean your floors as usual. The plant-based formula lifts dirt without harsh chemicals.' },
      { step: '03', title: 'Air Dry', desc: 'No rinsing needed. Floors dry streak-free with a subtle, natural fragrance. Safe for kids and pets.' },
    ],
    tips: ['One sheet cleans up to 500 sq ft', 'Safe for marble, tile, granite & wood', 'No harsh fumes or chemical smell', 'Pet-friendly and child-safe formula'],
    image: 'https://estrip.in/cdn/shop/files/pdp_s1_1.png?width=600',
  },
];

export default function HowItWorksPage() {
  const [activeUseCase, setActiveUseCase] = useState(0);
  const videoRef = useRef(null);
  const isVideoInView = useInView(videoRef, { margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoInView) {
        videoRef.current.play().catch(e => console.log('Autoplay blocked by browser policy'));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoInView]);

  const current = useCases[activeUseCase];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[var(--color-primary)] selection:text-white">
      
      {/* 2-Column Hero Section */}
      <section className="relative w-full min-h-[80vh] bg-[var(--color-surface-container-low)] flex items-center overflow-hidden py-20 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <span className="bg-[var(--color-primary)] text-white px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-6 shadow-xl">A New Era of Cleaning</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-on-surface)] mb-6 tracking-tight drop-shadow-sm mix-blend-multiply leading-tight">
              Powerful Clean.<br/>No Plastic Waste.
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-on-surface-variant)] font-bold max-w-xl">
              Drop it in. Watch it dissolve. Experience the smartest way to do laundry.
            </p>
          </div>

          {/* Right: High-End Hero Media */}
          <div className="w-full md:w-1/2 relative flex justify-center mt-10 md:mt-0">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-black group">
              <video 
                ref={videoRef}
                src="/Hero 3d Animation.mp4" 
                autoPlay 
                loop 
                playsInline
                controls
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
         USE CASE DETAILED SECTIONS
         ═══════════════════════════════════════════════ */}
      
      {/* Section Header */}
      <section className="py-20 px-4 bg-[var(--color-surface-container-low)] border-y border-[var(--color-outline-variant)]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[var(--color-primary)] font-black tracking-widest uppercase text-xs mb-4 block">Every Use Case Covered</span>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--color-on-surface)] mb-6 tracking-tight">One Product. Many Ways to Clean.</h2>
          <p className="text-lg md:text-xl text-[var(--color-on-surface-variant)] font-medium max-w-2xl mx-auto">
            Whether you use a washing machine, hand wash in a bucket, or need to tackle stubborn stains — we have you covered.
          </p>
        </div>
      </section>

      {/* Use Case Tab Navigation */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-[var(--color-outline-variant)] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto hide-scrollbar scrollbar-hide md:justify-center">
          {useCases.map((uc, idx) => (
            <button
              key={uc.id}
              onClick={() => setActiveUseCase(idx)}
              className={`shrink-0 flex items-center gap-2 px-5 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeUseCase === idx
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-[var(--color-surface-container-low)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)]'
              }`}
              style={activeUseCase === idx ? { background: uc.color, boxShadow: `0 8px 25px ${uc.color}30` } : {}}
            >
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>{uc.icon}</span>
              {uc.title}
            </button>
          ))}
        </div>
      </section>

      {/* Active Use Case Detail */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Use Case Header */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-20">
            {/* Product Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative aspect-square bg-[var(--color-surface-container-low)] rounded-3xl overflow-hidden shadow-xl border border-[var(--color-outline-variant)]">
                <img 
                  src={current.image} 
                  alt={current.title} 
                  className="w-full h-full object-contain p-8 mix-blend-multiply"
                />
                <div 
                  className="absolute top-4 left-4 text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-md flex items-center gap-2"
                  style={{ background: current.color }}
                >
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>{current.icon}</span>
                  {current.title}
                </div>
              </div>
            </div>

            {/* Title + Steps */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-black text-[var(--color-on-surface)] mb-3 tracking-tight">{current.title}</h3>
              <p className="text-lg text-[var(--color-on-surface-variant)] font-medium mb-10">{current.subtitle}</p>

              {/* Steps */}
              <div className="space-y-8">
                {current.steps.map((step, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg shrink-0 shadow-lg group-hover:scale-110 transition-transform"
                      style={{ background: current.color }}
                    >
                      {step.step}
                    </div>
                    <div className="pt-1">
                      <h4 className="text-xl font-black text-[var(--color-on-surface)] mb-1">{step.title}</h4>
                      <p className="text-[var(--color-on-surface-variant)] font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="rounded-3xl p-8 md:p-12 border-2 border-dashed" style={{ borderColor: `${current.color}40`, background: `${current.color}05` }}>
            <h4 className="text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2" style={{ color: current.color }}>
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
              Pro Tips for {current.title}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {current.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] mt-0.5 shrink-0" style={{ color: current.color }}>check_circle</span>
                  <span className="text-[var(--color-on-surface)] font-medium">{tip}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* All Use Cases Overview Grid */}
      <section className="py-20 px-4 bg-[var(--color-surface-container-low)] border-t border-[var(--color-outline-variant)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-[var(--color-on-surface)] mb-4 tracking-tight">Works Everywhere You Clean.</h2>
          <p className="text-center text-[var(--color-on-surface-variant)] font-medium text-lg mb-16 max-w-2xl mx-auto">
            One brand for your entire cleaning routine — laundry to floors, machine to bucket.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {useCases.map((uc, idx) => (
              <button
                key={uc.id}
                onClick={() => { setActiveUseCase(idx); window.scrollTo({ top: document.querySelector('.sticky.top-0.z-30')?.offsetTop - 10, behavior: 'smooth' }); }}
                className="bg-white rounded-2xl p-6 text-center border border-[var(--color-outline-variant)] hover:shadow-xl transition-all group cursor-pointer"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-md group-hover:scale-110 transition-transform"
                  style={{ background: uc.color }}
                >
                  <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>{uc.icon}</span>
                </div>
                <h4 className="font-black text-[var(--color-on-surface)] text-sm mb-1">{uc.title}</h4>
                <p className="text-xs text-[var(--color-on-surface-variant)] font-medium">{uc.subtitle}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Visual CTA */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200" alt="Clean Home" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--primary-deep)]/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready for a cleaner home?</h2>
          <Link href="/products/smartclean-3x-laundry-detergent-sheets" className="btn bg-[var(--color-primary)] text-white hover:brightness-110 px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(224,64,160,0.35)] transition-all inline-block hover:scale-105">
            Shop Starter Kits
          </Link>
        </div>
      </section>

    </div>
  );
}
