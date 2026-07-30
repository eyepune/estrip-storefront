'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function PoweredByNature() {
  const cards = [
    {
      title: 'Coconut Surfactants',
      description: 'Naturally lifts dirt and grease without stripping fabrics.',
      icon: 'psychiatry',
      colorClass: 'text-rose-500',
      bgClass: 'bg-rose-50',
      ringClass: 'group-hover:ring-rose-200'
    },
    {
      title: '5-Enzyme Blend',
      description: 'Targets specific stains like proteins, starches, and oils at the molecular level.',
      icon: 'bubble_chart',
      colorClass: 'text-blue-500',
      bgClass: 'bg-blue-50',
      ringClass: 'group-hover:ring-blue-200'
    },
    {
      title: 'Essential Oils',
      description: 'Provides a light, natural scent without overpowering synthetic fragrances.',
      icon: 'water_drop',
      colorClass: 'text-yellow-500',
      bgClass: 'bg-yellow-50',
      ringClass: 'group-hover:ring-yellow-200'
    },
    {
      title: 'PVA Film',
      description: 'A biodegradable polymer that dissolves completely leaving zero microplastics.',
      icon: 'layers',
      colorClass: 'text-purple-500',
      bgClass: 'bg-purple-50',
      ringClass: 'group-hover:ring-purple-200'
    }
  ];

  // Icons for the falling background animation with real-life colors
  const fallingIcons = [
    { icon: 'eco', color: 'text-green-400' },
    { icon: 'water_drop', color: 'text-blue-400' },
    { icon: 'spa', color: 'text-emerald-400' },
    { icon: 'bubble_chart', color: 'text-cyan-400' },
    { icon: 'park', color: 'text-green-500' },
    { icon: 'psychiatry', color: 'text-rose-400' }
  ];

  const [drops, setDrops] = useState([]);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "200px 0px" });

  useEffect(() => {
    const generatedDrops = Array.from({ length: 15 }).map((_, i) => {
      const item = fallingIcons[i % fallingIcons.length];
      return {
        id: i,
        icon: item.icon,
        color: item.color,
        left: `${(i * 6) + 5}%`,
        duration: 15 + Math.random() * 10,
        delay: Math.random() * -20,
        size: 20 + Math.random() * 20
      };
    });
    setDrops(generatedDrops);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden border-y border-gray-100">
      
      {/* Falling Background Icons - Sticky to viewport for smooth fall during scroll */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <div className="sticky top-0 w-full h-[100svh] overflow-hidden">
          {isInView && drops.map((drop) => (
            <motion.div
              key={drop.id}
              className={`absolute top-0 flex items-center justify-center ${drop.color}`}
              style={{ left: drop.left }}
              initial={{ y: '-10svh', rotate: 0 }}
              animate={{ y: '110svh', rotate: 360 }}
              transition={{
                duration: drop.duration,
                delay: drop.delay,
                repeat: Infinity,
                ease: 'linear'
              }}
            >
              <span 
                className="material-symbols-outlined" 
                style={{ fontSize: `${drop.size}px`, fontVariationSettings: "'FILL' 1" }}
              >
                {drop.icon}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="bg-green-100 text-green-700 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-4 inline-block">100% Plant Derived</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mt-2">Powered by Nature.</h2>
          <p className="text-gray-500 font-medium text-lg mt-4 max-w-2xl mx-auto">
            We stripped out the harsh chemicals, optical brighteners, and synthetic dyes. What's left is pure, concentrated cleaning power.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group ring-4 ring-transparent flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 ${card.bgClass} ${card.colorClass} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm ${card.ringClass} ring-4 ring-transparent`}>
                <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {card.icon}
                </span>
              </div>
              <h4 className="font-black text-xl mb-3 text-gray-900">{card.title}</h4>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
