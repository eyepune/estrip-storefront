"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function Home() {
  const { addItem } = useCart();
  
  const pipVideoRef = useRef(null);
  const heroSectionRef = useRef(null);
  const [hasPlayedWithSound, setHasPlayedWithSound] = useState(false);
  const [pipMuted, setPipMuted] = useState(false); // start unmuted

  const actionLaundryRef = useRef(null);
  const actionFloorRef = useRef(null);
  const actionDishRef = useRef(null);
  const [playingVideos, setPlayingVideos] = useState({});

  const handleActionVideoClick = (id, videoElement) => {
    if (!videoElement) return;
    if (videoElement.paused) {
      // Pause all other action videos
      [actionLaundryRef, actionFloorRef, actionDishRef].forEach(ref => {
        if (ref.current && ref.current !== videoElement) {
          ref.current.pause();
        }
      });
      videoElement.play().catch(() => {});
    } else {
      videoElement.pause();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!pipVideoRef.current || !heroSectionRef.current) return;
      const heroBottom = heroSectionRef.current.getBoundingClientRect().bottom;
      
      // If hero is out of view (scrolled past)
      if (heroBottom < 100) {
        pipVideoRef.current.muted = true;
        setPipMuted(true);
      } else {
        // If hero is in view, and we haven't successfully played with sound yet
        if (!hasPlayedWithSound) {
          pipVideoRef.current.muted = false;
          const playPromise = pipVideoRef.current.play();
          if (playPromise !== undefined) {
             playPromise.then(() => {
                setHasPlayedWithSound(true);
                setPipMuted(false);
             }).catch(() => {
                // Autoplay with sound blocked by browser. Fallback to muted
                pipVideoRef.current.muted = true;
                setPipMuted(true);
                pipVideoRef.current.play().catch(() => {});
             });
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasPlayedWithSound]);
  
  const testimonials = [
    {
      quote: "I'll never go back to liquid jugs again!",
      author: "Sarah J., Verified Eco-Warrior",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
    },
    {
      quote: "My laundry has never smelled fresher. So easy to use!",
      author: "David M., Busy Parent",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"
    },
    {
      quote: "Love how much space this saves in my small apartment.",
      author: "Emily R., Minimalist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  return (
    <div className="overflow-x-hidden text-[var(--color-on-background)]">
      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-80 pointer-events-none"
          >
            <source src="/A_high-end_cinematic_product_showcase_202607201836.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>

        <div className="container mx-auto px-8 relative z-10 py-24 text-center flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-bold">
              <span className="material-symbols-outlined text-[var(--color-primary-fixed)] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              5-Star Rated by 10k+ Customers
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 150" width="24" height="16" className="inline-block rounded-sm shadow-sm">
                <rect width="225" height="150" fill="#138808"/>
                <rect width="225" height="100" fill="#ffffff"/>
                <rect width="225" height="50" fill="#FF9933"/>
                <circle cx="112.5" cy="75" r="20" fill="#000080"/>
              </svg>
              Made specially for Indians
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1.1] mb-6 tracking-tight text-white drop-shadow-lg">
            The Future of <br /><span className="text-[var(--color-primary-fixed)]">Clean is Here</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-white/90 font-medium max-w-2xl mx-auto drop-shadow-md px-4">
            Powerful, Eco-friendly, and Easy to Use Detergent Sheets. No plastic jugs, no mess, just joy.
          </p>
          <Link href="/shop" className="inline-flex bg-[var(--color-primary)] hover:bg-[var(--color-surface-tint)] text-white px-10 py-5 rounded-full font-black text-xl pill-shadow-primary bouncy-hover transition-all items-center gap-3">
            SHOP NOW
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        {/* Mini PIP Video Box */}
        <div className="absolute bottom-10 right-10 z-20 w-48 aspect-[9/16] rounded-2xl overflow-hidden border-2 border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hidden lg:block hover:scale-105 transition-transform duration-300 cursor-pointer group">
          <video 
            ref={pipVideoRef}
            autoPlay 
            loop 
            muted={pipMuted}
            playsInline 
            className="w-full h-full object-cover"
            onClick={(e) => {
              // Toggle mute manually on click if desired
              e.currentTarget.muted = !e.currentTarget.muted;
              setPipMuted(e.currentTarget.muted);
            }}
          >
            <source src="/Indian_mother_dropping_detergent…_1080p_202607210209.mp4" type="video/mp4" />
          </video>
          {pipMuted && (
            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-1.5 rounded-full text-white pointer-events-none">
              <span className="material-symbols-outlined text-[16px]">volume_off</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1.5 border border-white/20 shadow-lg pointer-events-none">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            See it work
          </div>
        </div>
      </section>

      {/* Trust Marquee */}
      <div className="w-full bg-[var(--color-surface-container-highest)] border-y border-[var(--color-outline-variant)] overflow-hidden py-3 flex items-center relative z-20">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {/* We duplicate the content twice to allow infinite side-scrolling without jumping */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center justify-around gap-12 px-6">
              {['Lab Tested & Certified', '100% Plastic Free', 'Safe for Sensitive Skin', 'Zero Waste Packaging', 'Biodegradable Formula', 'Cruelty Free', 'Lab Tested & Certified', '100% Plastic Free'].map((text, j) => (
                <div key={`${i}-${j}`} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[var(--color-primary)] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-sm font-bold text-[var(--color-on-surface-variant)] uppercase tracking-wider">{text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Shop by Category */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-on-surface)] mb-4">Shop by Category</h2>
            <p className="text-[var(--color-on-surface-variant)] text-lg">Solutions for every corner of your home.</p>
          </div>
          <div className="hidden md:block">
            <Link href="/shop" className="flex items-center gap-2 text-[var(--color-primary)] font-bold text-lg hover:underline">
              View all Categories <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Laundry */}
          <Link href="/shop?category=laundry" className="block bg-white p-6 rounded-xl shadow-sm border-2 border-[var(--color-primary-container)] group bouncy-hover cursor-pointer">
            <div className="aspect-square mb-6 overflow-hidden rounded-lg bg-[var(--color-surface-container)] relative">
              <video 
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
                <source src="/Hand_places_sheet_washing_machine_202607201936.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-black text-[var(--color-primary)] mb-2">Laundry Sheets</h3>
              <p className="text-[var(--color-on-surface-variant)] text-sm mb-6">Powerful & Eco-friendly cleaning for all fabrics.</p>
              <button className="w-full bg-[var(--color-primary)] py-3 rounded-full text-white font-bold pill-shadow-primary text-sm tracking-wide">SHOP LAUNDRY</button>
            </div>
          </Link>
          {/* Baby */}
          <Link href="/shop?category=baby" className="block bg-white p-6 rounded-xl shadow-sm border-2 border-[var(--color-tertiary-container)] group bouncy-hover cursor-pointer">
            <div className="aspect-square mb-6 overflow-hidden rounded-lg bg-[var(--color-surface-container)] relative">
              <video 
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
                <source src="/Baby_laundry_detergent_sheets_use_202607201947.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-black text-[var(--color-tertiary)] mb-2">Baby Laundry</h3>
              <p className="text-[var(--color-on-surface-variant)] text-sm mb-6">Gentle & Safe formula for delicate newborn skin.</p>
              <button className="w-full bg-[var(--color-tertiary)] py-3 rounded-full text-white font-bold pill-shadow-tertiary text-sm tracking-wide">SHOP BABY</button>
            </div>
          </Link>
          {/* Dish */}
          <Link href="/shop?category=dish" className="block bg-white p-6 rounded-xl shadow-sm border-2 border-[var(--color-secondary-container)] group bouncy-hover cursor-pointer">
            <div className="aspect-square mb-6 overflow-hidden rounded-lg bg-[var(--color-surface-container)] relative">
              <video 
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
                <source src="/Dishwashing_sheets_in_dishwasher_202607202000.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-black text-[var(--color-secondary)] mb-2">Dishwashing Sheets</h3>
              <p className="text-[var(--color-on-surface-variant)] text-sm mb-6">Grease-Cutting & Clean finish for every plate.</p>
              <button className="w-full bg-[var(--color-secondary)] py-3 rounded-full text-white font-bold text-sm tracking-wide shadow-[0_4px_16px_rgba(124,82,170,0.2)]">SHOP DISH</button>
            </div>
          </Link>
          {/* Floor */}
          <Link href="/shop?category=floor" className="block bg-white p-6 rounded-xl shadow-sm border-2 border-[var(--color-primary-fixed)] group bouncy-hover cursor-pointer">
            <div className="aspect-square mb-6 overflow-hidden rounded-lg bg-[var(--color-surface-container)] relative">
              <video 
                autoPlay loop muted playsInline 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              >
                <source src="/Floor_cleaner_sheet_dissolves_202607201951.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-black text-[var(--color-primary-container)] mb-2">Floor Cleaner</h3>
              <p className="text-[var(--color-on-surface-variant)] text-sm mb-6">Streak-Free & Disinfects all hard floor surfaces.</p>
              <button className="w-full bg-[var(--color-primary-container)] py-3 rounded-full text-[var(--color-on-primary-container)] font-bold text-sm tracking-wide shadow-[0_4px_16px_rgba(240,128,192,0.2)]">SHOP FLOOR</button>
            </div>
          </Link>
        </div>
      </section>

      {/* Why e-strip? Section */}
      <section className="bg-[var(--color-secondary-container)] py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover mix-blend-multiply opacity-60"
          >
            <source src="/Soap_bubbles_floating_on_white_202607202024.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container mx-auto px-8 relative z-10 text-center max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--color-on-secondary-container)] mb-16">Why e-strip?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-xl shadow-xl flex flex-col items-center bouncy-hover">
              <div className="w-24 h-24 bg-[var(--color-tertiary-fixed)] rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-[var(--color-tertiary)] text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
              </div>
              <h4 className="text-2xl font-black text-[var(--color-on-surface)] mb-4">20x Super Concentrated</h4>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed">A single sheet packs more cleaning power than heavy liquid detergents, minus the water and weight.</p>
            </div>
            <div className="bg-white p-12 rounded-xl shadow-xl flex flex-col items-center bouncy-hover">
              <div className="w-24 h-24 bg-[var(--color-primary-fixed)] rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-[var(--color-primary)] text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </div>
              <h4 className="text-2xl font-black text-[var(--color-on-surface)] mb-4">Hypoallergenic & Safe</h4>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed">No harsh chemicals, paraben-free, and phosphate-free. Safe for your most sensitive family members.</p>
            </div>
            <div className="bg-white p-12 rounded-xl shadow-xl flex flex-col items-center bouncy-hover">
              <div className="w-24 h-24 bg-[var(--color-secondary-fixed)] rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-[var(--color-secondary)] text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>cruelty_free</span>
              </div>
              <h4 className="text-2xl font-black text-[var(--color-on-surface)] mb-4">100% Vegan & Cruelty-Free</h4>
              <p className="text-[var(--color-on-surface-variant)] leading-relaxed">Never tested on animals. Plant-based ingredients that are kind to the earth and its inhabitants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* See us in Action */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--color-on-surface)] mb-4">See us in Action</h2>
          <p className="text-[var(--color-on-surface-variant)] text-lg">Watch how e-strip transforms your cleaning routine.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            className="md:col-span-2 aspect-video bg-[var(--color-surface-container)] rounded-xl overflow-hidden relative group cursor-pointer"
            onClick={() => handleActionVideoClick('laundry', actionLaundryRef.current)}
          >
              <video 
                ref={actionLaundryRef}
                preload="none"
                src="/Indian_woman_using_laundry_sheet_202607202058.mp4" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                loop
                playsInline
                onPlay={() => setPlayingVideos(prev => ({ ...prev, laundry: true }))}
                onPause={() => setPlayingVideos(prev => ({ ...prev, laundry: false }))}
              />
            <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-all ${playingVideos['laundry'] ? 'bg-black/0 opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
              <div className="w-20 h-20 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center pill-shadow-primary transition-all">
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {playingVideos['laundry'] ? 'pause' : 'play_arrow'}
                </span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-white pointer-events-none">
              <h4 className="text-2xl font-black drop-shadow-md">The e-strip Revolution</h4>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div 
              className="flex-1 aspect-video bg-[var(--color-surface-container)] rounded-xl overflow-hidden relative group cursor-pointer"
              onClick={() => handleActionVideoClick('floor', actionFloorRef.current)}
            >
                <video 
                  ref={actionFloorRef}
                  preload="none"
                  src="/Indian_person_mopping_floor_202607202105.mp4" 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  loop
                  playsInline
                  onPlay={() => setPlayingVideos(prev => ({ ...prev, floor: true }))}
                  onPause={() => setPlayingVideos(prev => ({ ...prev, floor: false }))}
                />
              <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-all ${playingVideos['floor'] ? 'bg-black/0 opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                <div className="w-12 h-12 bg-[var(--color-tertiary)] text-white rounded-full flex items-center justify-center pill-shadow-tertiary transition-all">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {playingVideos['floor'] ? 'pause' : 'play_arrow'}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white pointer-events-none">
                <p className="font-bold text-sm drop-shadow-md">Spotless Floors</p>
              </div>
            </div>
            <div 
              className="flex-1 aspect-video bg-[var(--color-surface-container)] rounded-xl overflow-hidden relative group cursor-pointer"
              onClick={() => handleActionVideoClick('dish', actionDishRef.current)}
            >
                <video 
                  ref={actionDishRef}
                  preload="none"
                  src="/Indian_man_using_dishwashing_sheet_202607202106.mp4" 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  loop
                  playsInline
                  onPlay={() => setPlayingVideos(prev => ({ ...prev, dish: true }))}
                  onPause={() => setPlayingVideos(prev => ({ ...prev, dish: false }))}
                />
              <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-all ${playingVideos['dish'] ? 'bg-black/0 opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                <div className="w-12 h-12 bg-[var(--color-secondary)] text-white rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(124,82,170,0.2)] transition-all">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {playingVideos['dish'] ? 'pause' : 'play_arrow'}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-white pointer-events-none">
                <p className="font-bold text-sm drop-shadow-md">Sparkling Dishes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Promo Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          <div className="md:col-span-2 bg-[var(--color-primary)] rounded-xl p-10 flex flex-col justify-end text-white relative overflow-hidden group">
            <Image fill src="/Whole_Home_Cleaning_Kit_arranged_202607210117.jpeg" alt="Zero Waste Packaging" className="object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0 pointer-events-none"></div>
            <div className="relative z-10 drop-shadow-md">
              <h3 className="text-4xl font-black mb-4">Zero Waste Packaging</h3>
              <p className="text-lg opacity-100 max-w-md font-medium">Our envelopes are 100% compostable. No plastic jugs ending up in landfills or oceans.</p>
            </div>
          </div>
          <div className="bg-[var(--color-tertiary)] rounded-xl p-10 flex flex-col justify-between text-white bouncy-hover relative overflow-hidden group">
            <Image fill src="/Baby_blankets_and_teddy_bear_202607210121.jpeg" alt="Travel Friendly" className="object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0 pointer-events-none"></div>
            <span className="material-symbols-outlined text-5xl relative z-10 drop-shadow-md">travel_explore</span>
            <div className="relative z-10 drop-shadow-md">
              <h3 className="text-2xl font-black mb-2">Travel Friendly</h3>
              <p className="text-sm opacity-100 font-medium">Lightweight sheets that fit anywhere. Perfect for trips and laundry on the go.</p>
            </div>
          </div>
          <div className="bg-[var(--color-secondary)] rounded-xl p-10 flex items-center justify-center text-center text-white relative overflow-hidden bouncy-hover group">
            <Image fill src="/Kitchen_sink_and_laundry_basket_202607210119.jpeg" alt="Save 20%" className="object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700 z-0" />
            <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none"></div>
            <div className="relative z-10 drop-shadow-md">
              <div className="text-5xl font-black mb-2">Save 20%</div>
              <p className="font-bold opacity-100">On your first subscription box.</p>
              <Link href="/shop" className="mt-6 inline-block bg-white text-[var(--color-secondary)] px-6 py-3 rounded-full font-black text-sm hover:scale-105 transition-transform shadow-lg drop-shadow-none">JOIN THE CLUB</Link>
            </div>
          </div>
          <div 
            className="md:col-span-2 bg-[var(--color-surface-container-highest)] rounded-xl relative overflow-hidden group cursor-default min-h-[300px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 p-10 flex items-center gap-8 transition-opacity duration-1000 ${currentTestimonial === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              >
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-[var(--color-on-surface)] mb-4 italic">"{t.quote}"</h3>
                  <div className="flex items-center gap-2 mb-2">
                    {[1,2,3,4,5].map(i => (
                      <span key={i} className="material-symbols-outlined text-[var(--color-primary)]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-[var(--color-on-surface-variant)] font-bold">— {t.author}</p>
                </div>
                <div className="w-32 h-32 rounded-full bg-[var(--color-primary-fixed)] overflow-hidden hidden md:block relative shadow-inner shrink-0">
                  <Image unoptimized fill alt={t.author} src={t.image} className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
