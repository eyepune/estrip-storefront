'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Product3DViewer from '../components/Product3DViewer';

export default function HowItWorksPage() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Opacity maps for the 3 text blocks
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.33, 1], [1, 1, 0, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.66, 1], [0, 0, 1, 0, 0]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.6, 0.8, 1], [0, 0, 1, 1]);

  // Image display logic (we can use opacity to crossfade)
  const img1Op = useTransform(scrollYProgress, [0, 0.33, 1], [1, 0, 0]);
  const img2Op = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.66, 1], [0, 0, 1, 0, 0]);
  const img3Op = useTransform(scrollYProgress, [0, 0.6, 0.8, 1], [0, 0, 1, 1]);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[var(--color-primary)] selection:text-white">
      
      {/* 3D Interactive Hero */}
      <section className="relative w-full h-[80vh] bg-[#f8f9fa] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <Product3DViewer />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center pointer-events-none">
          <span className="bg-[#e040a0] text-white px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-6 shadow-xl">A New Era of Laundry</span>
          <h1 className="text-5xl md:text-8xl font-black text-[#0f172a] mb-6 tracking-tight drop-shadow-2xl mix-blend-multiply">
            Powerful Clean.<br/>No Plastic Waste.
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 font-bold max-w-2xl bg-white/50 backdrop-blur-md p-4 rounded-2xl shadow-sm">
            Drag the box above to explore. Scroll down to see the magic.
          </p>
        </div>
      </section>

      {/* STRIPS-STYLE STORYLINE SECTION */}
      <section ref={containerRef} className="relative w-full h-[300vh] bg-white">
        <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden">
          
          {/* LEFT: Sticky Images Crossfading */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-full relative bg-gray-100 flex-shrink-0">
            {/* Image 1 */}
            <motion.div style={{ opacity: img1Op }} className="absolute inset-0 w-full h-full">
              <img src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=1200" alt="Pods" className="w-full h-full object-cover" />
            </motion.div>
            {/* Image 2 */}
            <motion.div style={{ opacity: img2Op }} className="absolute inset-0 w-full h-full">
              <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=1200" alt="Dissolve" className="w-full h-full object-cover" />
            </motion.div>
            {/* Image 3 */}
            <motion.div style={{ opacity: img3Op }} className="absolute inset-0 w-full h-full">
              <img src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=1200" alt="Ocean" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* RIGHT: Scrolling Text Storyline */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-full flex flex-col justify-center px-8 md:px-24 bg-white relative">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-center px-8 md:px-24">
              
              <motion.div style={{ opacity: opacity1 }} className="absolute w-[80%] md:w-auto">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 leading-tight tracking-tight">
                  like pods, but <i className="text-[#0096cc]">way</i> better
                </h2>
                <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
                  easier than liquid, better for the planet.
                </p>
              </motion.div>

              <motion.div style={{ opacity: opacity2 }} className="absolute w-[80%] md:w-auto">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 leading-tight tracking-tight">
                  dissolves <span className="text-[#e040a0]">completely</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
                  releasing powerful ingredients for a fresh look and feel.
                </p>
              </motion.div>

              <motion.div style={{ opacity: opacity3 }} className="absolute w-[80%] md:w-auto">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 leading-tight tracking-tight">
                  less plastic and more <span className="text-[#00D4FF]">fun</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
                  the ocean is for fish - not plastic silly! A switch to strips is a switch to a plastic-free lifestyle.
                </p>
              </motion.div>

            </div>
          </div>
          
        </div>
      </section>

      {/* Visual CTA */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200" alt="Clean Home" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight">Ready for a cleaner home?</h2>
          <Link href="/products/smartclean-3x-laundry-detergent-sheets" className="btn bg-white text-gray-900 hover:bg-[#e040a0] hover:text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl transition-all inline-block hover:scale-105">
            Shop Starter Kits
          </Link>
        </div>
      </section>

    </div>
  );
}
