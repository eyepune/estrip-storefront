'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function RoomByRoomShowcase() {
  const [activeRoom, setActiveRoom] = useState('floors');

  const rooms = [
    {
      id: 'floors',
      title: 'Floors',
      icon: 'cleaning_services',
      productName: 'Floor Cleaner Sheets',
      headline: 'Streak-free shine in seconds with 99.9% antibacterial power.',
      features: ['1 sheet per bucket', 'Works on tile, marble & wood', 'Pine fresh scent without residue'],
      image: 'https://estrip.in/cdn/shop/files/pdp_s5.png?v=1783917728&width=480',
      bgColor: 'bg-pink-50/50',
      ringColor: 'ring-pink-500',
      accentColor: 'text-pink-600',
      buttonColor: 'text-pink-600 ring-pink-600 hover:bg-pink-600',
      buttonText: 'Shop All Floorings',
      href: '/shop?category=floorings'
    },
    {
      id: 'laundry',
      title: 'Laundry Room',
      icon: 'local_laundry_service',
      productName: 'SmartClean 3X',
      headline: 'Tackle tough Indian stains without the plastic jugs.',
      features: ['Plant-based enzymes', 'Safe on colors', 'Dissolves instantly in cold water'],
      image: 'https://estrip.in/cdn/shop/files/pdp_s3.png?v=1783917395&width=480',
      bgColor: 'bg-blue-50/50',
      ringColor: 'ring-blue-500',
      accentColor: 'text-blue-600',
      buttonColor: 'text-blue-600 ring-blue-600 hover:bg-blue-600',
      buttonText: 'Shop All Laundry',
      href: '/shop?category=laundry'
    },
    {
      id: 'kitchen',
      title: 'Kitchen',
      icon: 'countertops',
      productName: 'Dishwashing Sheets',
      headline: 'Cut through heavy grease. Gentle on your hands.',
      features: ['Instant grease-cutting power', 'Zero harsh SLS', 'One sheet equals one wash'],
      image: 'https://estrip.in/cdn/shop/files/pdp_s4.png?v=1783917481&width=480',
      bgColor: 'bg-yellow-50/50',
      ringColor: 'ring-yellow-500',
      accentColor: 'text-yellow-600',
      buttonColor: 'text-yellow-600 ring-yellow-600 hover:bg-yellow-600',
      buttonText: 'Shop All Kitchen',
      href: '/shop?category=kitchen'
    },
    {
      id: 'babycare',
      title: 'Babycare',
      icon: 'child_care',
      productName: 'SoftTouch Baby',
      headline: 'Dermatologist tested. Safe for newborns from day one.',
      features: ['Hypoallergenic & fragrance-free', 'No optical brighteners', 'Gentle on sensitive skin'],
      image: 'https://estrip.in/cdn/shop/files/pdp_s1_1.png?v=1783917607&width=480',
      bgColor: 'bg-purple-50/50',
      ringColor: 'ring-purple-500',
      accentColor: 'text-purple-600',
      buttonColor: 'text-purple-600 ring-purple-600 hover:bg-purple-600',
      buttonText: 'Shop All Babycare',
      href: '/shop?category=baby'
    }
  ];

  const current = rooms.find(r => r.id === activeRoom) || rooms[0];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-black text-[var(--color-on-surface)] mb-4 tracking-tight">One Sheet. Every Room.</h2>
        <p className="text-[var(--color-on-surface-variant)] font-medium text-lg max-w-2xl mx-auto">
          E-Strip is a complete, whole-home cleaning ecosystem. Replace every heavy plastic jug in your house with our ultra-concentrated sheets.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
        
        {/* Navigation Tabs */}
        <div className="flex flex-nowrap overflow-x-auto hide-scrollbar border-b border-gray-100 bg-gray-50/50">
          {rooms.map((room) => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(room.id)}
              className={`flex-1 min-w-[120px] py-5 px-4 font-black text-xs md:text-sm uppercase tracking-widest transition-all border-b-2 flex flex-col items-center gap-2 ${
                activeRoom === room.id 
                  ? `border-[var(--color-primary)] text-gray-900 bg-white shadow-sm` 
                  : `border-transparent text-gray-400 hover:text-gray-900 hover:bg-gray-50`
              }`}
            >
              <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: activeRoom === room.id ? "'FILL' 1" : "'FILL' 0" }}>
                {room.icon}
              </span>
              {room.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className={`p-8 md:p-12 transition-colors duration-500 ${current.bgColor}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row gap-12 items-center"
            >
              
              {/* Image Side */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className={`relative w-full max-w-md aspect-square bg-white rounded-2xl shadow-xl border border-gray-100 p-8 ring-4 ${current.ringColor} ring-opacity-20`}>
                  <Image 
                    src={current.image} 
                    alt={current.productName} 
                    fill 
                    className="object-contain p-6 hover:scale-105 transition-transform duration-500" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className={`absolute -top-4 -right-4 ${current.accentColor} bg-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md border border-gray-100`}>
                    {current.title} Essential
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 text-left">
                <span className={`text-sm font-black uppercase tracking-widest mb-2 block ${current.accentColor}`}>
                  {current.productName}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  {current.headline}
                </h3>
                
                <ul className="space-y-4 mb-8">
                  {current.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`material-symbols-outlined text-[24px] ${current.accentColor} mt-0.5`} style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      <span className="text-gray-700 font-medium text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={current.href}
                  className={`inline-block bg-white ${current.buttonColor} ring-4 px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-widest hover:text-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1`}
                >
                  {current.buttonText}
                </Link>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
