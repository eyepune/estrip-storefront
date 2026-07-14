"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis } from '@studio-freight/react-lenis';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAiFinderOpen, setIsAiFinderOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleAiFinder = () => setIsAiFinderOpen(!isAiFinderOpen);
  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Ensure video is ready before measuring duration
      const initScroll = () => {
        if (!videoRef.current) return;
        
        // Pin the video and scrub it
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5, // Faster, more responsive scrubbing
          onUpdate: (self) => {
            if (videoRef.current && videoRef.current.duration) {
              videoRef.current.currentTime = self.progress * videoRef.current.duration;
            }
          }
        });

        // Keep text visible for much longer while scrolling
        gsap.to(textRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=80%", // Keep text visible for 80% of the scroll track
            scrub: true
          },
          opacity: 0,
          y: -50
        });
      };

      if (videoRef.current) {
        if (videoRef.current.readyState >= 1) {
          initScroll();
        } else {
          videoRef.current.addEventListener('loadedmetadata', initScroll);
        }
      }

      // Smart Video Pausing (Performance Optimization)
      const autoVideos = document.querySelectorAll('.auto-pause');
      autoVideos.forEach((vid) => {
        ScrollTrigger.create({
          trigger: vid,
          start: "top bottom",
          end: "bottom top",
          onEnter: () => vid.play(),
          onLeave: () => vid.pause(),
          onEnterBack: () => vid.play(),
          onLeaveBack: () => vid.pause(),
        });
      });

      // Connected Scroll Reveal Animations
      const fadeElements = document.querySelectorAll('.fade-up-element');
      fadeElements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      });

      // How It Works GSAP Parallax (Replacing React State)
      const creativeCards = document.querySelectorAll('.creative-card');
      creativeCards.forEach((card, i) => {
        const yOffset = i === 1 ? -50 : 100; // Middle card moves opposite
        gsap.to(card, {
          y: yOffset,
          ease: "none",
          scrollTrigger: {
            trigger: "#how-it-works",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

    }, containerRef);
    
    return () => {
      ctx.revert();
    };
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
      setCart(cart.map(item => 
        item.name === product.name ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    if (!isCartOpen) setIsCartOpen(true);
  };

  const removeFromCart = (name) => {
    setCart(cart.filter(item => item.name !== name));
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.qty), 0);
  const cartCount = cart.reduce((count, item) => count + item.qty, 0);

  const products = [
    { name: "SmartClean 3X", price: 353, image: "https://estrip.in/cdn/shop/files/pdp_s3.png?v=1783917395&width=480", desc: "Daily laundry detergent sheets for regular clothes." },
    { name: "ProEnzyme 5X", price: 432, popular: true, badge: "Best for Tough Stains", image: "https://estrip.in/cdn/shop/files/pdp_s2.png?v=1783917324&width=480", desc: "Heavy-duty cleaning for sweat, oil, and tough stains." },
    { name: "SoftTouch Baby", price: 393, image: "https://estrip.in/cdn/shop/files/pdp_s1_1.png?v=1783917607&width=480", desc: "Gentle detergent sheets specifically for baby clothes." },
    { name: "Floor Cleaner Sheets", price: 399, image: "https://estrip.in/cdn/shop/files/pdp_s5.png?v=1783917728&width=480", desc: "Streak-free cleaning on every floor. 1 sheet per bucket." },
    { name: "Dishwashing Sheets", price: 349, image: "https://estrip.in/cdn/shop/files/pdp_s4.png?v=1783917481&width=480", desc: "Tough on grease, gentle on hands. 1 sheet equals 1 wash." },
    { name: "Stain Remover Spray", price: 299, image: "https://estrip.in/cdn/shop/files/pdp_s6.png?v=1783917213&width=480", desc: "New Launch! Lifts fresh stains in seconds before they set." }
  ];

  const videos = [
    "/Products_montage_estrip.in_1080p_202607150148.mp4",
    "https://estrip.in/cdn/shop/videos/c/vp/d29b7ae031584e43b2b5a962c6fa3242/d29b7ae031584e43b2b5a962c6fa3242.HD-1080p-2.5Mbps-83923587.mp4?v=0",
    "https://estrip.in/cdn/shop/videos/c/vp/cc477b58b27645de92cac0397a62efc1/cc477b58b27645de92cac0397a62efc1.HD-1080p-2.5Mbps-83923629.mp4?v=0",
    "https://estrip.in/cdn/shop/videos/c/vp/5c65d194fefc4f55aec1a4ff48136fb0/5c65d194fefc4f55aec1a4ff48136fb0.HD-1080p-2.5Mbps-83923669.mp4?v=0",
  ];

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothTouch: true }}>
      {/* Navbar */}
      <nav className="glass-nav sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="logo block relative w-24 h-10">
            <Image src="https://estrip.in/cdn/shop/files/Primary-Logo_Blue-scaled_1.png?v=1777612281" alt="E-strip Logo" fill className="object-contain" sizes="96px" priority />
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="font-medium hover:text-[var(--primary-blue)] transition">Benefits</a>
            <a href="#how-it-works" className="font-medium hover:text-[var(--primary-blue)] transition">How It Works</a>
            <a href="#pricing" className="font-medium hover:text-[var(--primary-blue)] transition">Shop</a>
            <a href="#faq" className="font-medium hover:text-[var(--primary-blue)] transition">FAQ</a>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={toggleAiFinder} className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full font-semibold hover:scale-105 transition shadow-lg shadow-purple-500/30">
              <i className="fa-solid fa-wand-magic-sparkles mr-2"></i> AI Strip Finder
            </button>
            <div className="relative cursor-pointer text-[var(--primary-blue)] text-xl" onClick={toggleCart}>
              <i className="fa-solid fa-cart-shopping"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Cinematic Video Scrubbing Hero Section */}
        <section ref={containerRef} className="relative h-[300vh] bg-black">
          
          {/* Sticky Video Container */}
          <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
            
            {/* The Scrubbable Video */}
            <video 
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover opacity-50"
              src="/Products_montage_estrip.in_1080p_202607150148.mp4"
              muted 
              playsInline
              preload="auto"
            />
            
            {/* Foreground Overlay Text */}
            <div ref={textRef} className="relative z-20 text-center max-w-4xl mx-auto px-6 mt-20">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold text-sm mb-6 pointer-events-auto border border-white/30">
                🍃 100% Plant-Based & Plastic-Free
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-2xl">
                The Future of Clean is Here.
              </h1>
              <p className="text-xl text-gray-200 font-medium mb-8 max-w-2xl mx-auto drop-shadow-md">
                Drop the heavy bottles and messy liquids. E-strip delivers 5X the cleaning power in one dissolvable, eco-friendly sheet.
              </p>
              
              <div className="flex justify-center gap-4 mb-8 pointer-events-auto">
                <a href="#pricing" className="bg-[var(--primary-blue)] text-white px-8 py-3 text-lg rounded-full hover:scale-105 transition">Shop Now</a>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-2 text-white/80 animate-pulse mt-12">
                <span className="text-sm tracking-widest uppercase">Scroll to explore</span>
                <i className="fa-solid fa-chevron-down text-2xl"></i>
              </div>
            </div>
            
            {/* Bottom Gradient for smooth transition to next section */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </section>

        {/* Features / Benefits */}
        <section className="py-24 relative overflow-hidden bg-black" id="features">
          <video 
            muted 
            playsInline 
            loop
            preload="none"
            className="auto-pause absolute inset-0 w-full h-full object-cover opacity-30"
            src="/Products_montage_estrip.in_1080p_202607150148.mp4"
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="fade-up-element text-4xl font-bold text-center mb-16 text-white drop-shadow-lg">Why Switch to E-strip?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "fa-leaf", title: "Eco-Friendly", desc: "Zero plastic packaging. Completely biodegradable sheets that leave no trace." },
                { icon: "fa-droplet-slash", title: "Pre-Measured", desc: "No more pouring, no more spills. Just drop a sheet in and you're good to go." },
                { icon: "fa-bolt", title: "Powerful Clean", desc: "Micro-bubble technology and plant-based enzymes tackle the toughest Indian grease." },
                { icon: "fa-pump-soap", title: "Hard Water Safe", desc: "Formulated to work brilliantly in hard water without leaving white chalky residues." }
              ].map((feature, i) => (
                <div key={i} className="fade-up-element bg-gray-50 p-8 rounded-2xl text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl text-[var(--primary-blue)] mb-6"><i className={`fa-solid ${feature.icon}`}></i></div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Creative Layout */}
        <section className="py-24 bg-gray-50" id="how-it-works">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="creative-card group">
                <div className="creative-img transition-transform duration-500 group-hover:scale-[1.05] relative h-full">
                  <Image src="https://estrip.in/cdn/shop/files/1_31.png?v=1783498397" alt="Laundry strips" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="creative-content relative z-10 p-6 bg-white/90 m-4 rounded-xl shadow-lg backdrop-blur-md">
                  <h3 className="text-xl font-bold mb-2">Time to Strip</h3>
                  <p className="text-sm">The power of regular brands compressed into a lightweight strip that gives your clothes a proper good wash. <strong>Strip for the planet.</strong></p>
                </div>
              </div>
              <div className="creative-card group">
                <div className="creative-img transition-transform duration-500 group-hover:scale-[1.05] relative h-full">
                   <Image src="https://estrip.in/cdn/shop/files/2_25.png?v=1783498480" alt="Machine use" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="creative-content relative z-10 p-6 bg-white/90 m-4 rounded-xl shadow-lg backdrop-blur-md">
                  <h3 className="text-xl font-bold mb-2">Easy to use</h3>
                  <p className="text-sm">Pop the strip directly into the drum of your washing machine alongside clothes & start. Suitable for all types of machines.</p>
                </div>
              </div>
              <div className="creative-card group">
                <div className="creative-img relative overflow-hidden group-hover:scale-[1.05] transition-transform duration-500 h-full">
                  <video muted playsInline loop preload="none" className="auto-pause absolute inset-0 w-full h-full object-cover" src="/Products_montage_estrip.in_1080p_202607150148.mp4" />
                </div>
                <div className="creative-content">
                  <h3>Micro-Enzyme Tech</h3>
                  <p>Watch as plant-based enzymes break down tough stains at the fiber level, leaving no residue behind.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing / Shop */}
        <section className="py-24 bg-white" id="pricing">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="fade-up-element text-4xl font-bold text-center mb-16">Choose Your Clean</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <div key={i} className={`fade-up-element flex flex-col bg-white border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative ${product.popular ? 'border-[var(--primary-blue)] shadow-lg' : 'border-gray-200'}`}>
                  {product.popular && (
                    <div className="absolute top-4 -right-8 bg-[var(--primary-blue)] text-white px-8 py-1 text-sm font-bold rotate-45 z-10 shadow-md">
                      {product.badge}
                    </div>
                  )}
                  <div className="h-64 bg-gray-50 relative mix-blend-multiply flex items-center justify-center">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-4" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-6 flex-1">{product.desc}</p>
                    <div className="text-3xl font-bold text-[var(--primary-blue)] mb-6">
                      ₹ {product.price}.00
                    </div>
                    <button 
                      onClick={() => addToCart(product)}
                      className="btn btn-primary w-full"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription Upsell Section */}
        <section className="py-32 relative overflow-hidden bg-black text-white flex items-center justify-center">
          <video 
            muted 
            playsInline 
            loop
            preload="none"
            className="auto-pause absolute inset-0 w-full h-full object-cover opacity-50"
            src="/Products_montage_estrip.in_1080p_202607150148.mp4"
          />
          <div className="fade-up-element relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-2xl">Never run out of clean.</h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
              Subscribe and save 15% on every order. Modify, skip, or cancel your shipments at any time—no questions asked.
            </p>
            <a href="#pricing" className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-[var(--primary-blue)] hover:text-white transition-colors duration-300 shadow-xl inline-block">
              Setup Subscription
            </a>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="py-24 bg-gray-50 overflow-hidden" id="videos">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Watch Estrip in Action</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Real cleaning. Real transformations. Real people switching to smarter cleaning.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {videos.map((vid, idx) => (
                <div key={idx} className="fade-up-element relative rounded-2xl overflow-hidden shadow-lg group aspect-[9/16] bg-black">
                  <video 
                    src={vid} 
                    className="auto-pause absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
                    muted 
                    loop 
                    playsInline 
                    preload="none"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-play text-white text-xl"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="relative w-32 h-10 mb-6 brightness-0 invert">
              <Image src="https://estrip.in/cdn/shop/files/Primary-Logo_Blue-scaled_1.png?v=1777612281" alt="E-strip Logo" fill className="object-contain object-left" sizes="128px" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              High-quality performance and planetary responsibility shouldn't be a choice—they must go hand in hand.
            </p>
          </div>
          
          <div>
            <h4 className="font-mono text-sm mb-6 uppercase tracking-widest text-gray-500 font-bold">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Laundry Sheets</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Floor Cleaner</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Dishwashing Sheets</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Stain Remover Spray</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-sm mb-6 uppercase tracking-widest text-gray-500 font-bold">Company</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Wholesale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono text-sm mb-6 uppercase tracking-widest text-gray-500 font-bold">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe for zero-waste tips and exclusive discounts.</p>
            <div className="flex">
              <input type="email" placeholder="Your email address" className="bg-white/10 px-4 py-3 rounded-l-lg w-full focus:outline-none focus:bg-white/20 text-sm text-white transition-colors duration-300 border border-transparent focus:border-gray-500" />
              <button className="bg-[var(--primary-blue)] px-6 py-3 rounded-r-lg text-sm font-bold hover:bg-blue-600 transition-colors duration-300">Join</button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} E-strip India. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm" onClick={toggleCart}></div>
          <div className="fixed top-0 right-0 h-full w-full md:w-96 bg-white z-[101] shadow-2xl flex flex-col transform transition-transform">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button onClick={toggleCart} className="text-2xl text-gray-500 hover:text-black">&times;</button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
              ) : (
                <div className="flex flex-col gap-4">
                  {cart.map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b pb-4">
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-gray-500 text-sm">₹{item.price} x {item.qty}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-[var(--primary-blue)]">₹{item.price * item.qty}</span>
                        <button onClick={() => removeFromCart(item.name)} className="text-red-500 hover:text-red-700">
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="p-6 border-t bg-gray-50">
              <div className="flex justify-between items-center mb-6 text-xl font-bold">
                <span>Total:</span>
                <span className="text-[var(--primary-blue)]">₹{cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-full text-lg py-4">Checkout via Shopify</button>
            </div>
          </div>
        </>
      )}

      {/* AI Chat Bubbles */}
      <div className="floating-chat-btn" onClick={toggleChat}>
        <i className="fa-solid fa-message"></i>
      </div>

      {isChatOpen && (
        <div className="floating-chat-window">
          <div className="bg-[var(--primary-blue)] text-white p-4 flex justify-between items-center">
            <span className="font-bold">E-strip AI Assistant</span>
            <button onClick={toggleChat} className="hover:text-gray-300"><i className="fa-solid fa-xmark"></i></button>
          </div>
          <div className="p-4 h-64 overflow-y-auto bg-gray-50 flex flex-col gap-2">
            <div className="bg-white border p-3 rounded-xl max-w-[85%] self-start text-sm">
              Hi there! I'm integrated directly into the new React platform. How can I help you today?
            </div>
          </div>
          <div className="p-3 border-t bg-white flex gap-2">
            <input type="text" placeholder="Ask me anything..." className="flex-1 border rounded-full px-4 py-2 outline-none text-sm" />
            <button className="bg-[var(--primary-blue)] text-white w-10 h-10 rounded-full flex items-center justify-center"><i className="fa-solid fa-paper-plane"></i></button>
          </div>
        </div>
      )}
    </ReactLenis>
  );
}
