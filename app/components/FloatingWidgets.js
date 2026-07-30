'use client';
import { usePathname } from 'next/navigation';

export default function FloatingWidgets() {
  const pathname = usePathname() || '';
  const isProductPage = pathname.includes('/products/');
  
  // On product pages, we have a sticky Add To Cart bar at the bottom on mobile.
  // We need to push the widgets up so they align right above it.
  const bottomClassLeft = isProductPage ? "bottom-28 md:bottom-8" : "bottom-6 md:bottom-8";
  const bottomClassRight = isProductPage ? "bottom-28 md:bottom-8" : "bottom-6 md:bottom-8";

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* WhatsApp Button - Left */}
      <div className={`absolute ${bottomClassLeft} left-4 md:left-8 pointer-events-auto flex items-center group z-40 transition-all duration-300`}>
        <button 
          onClick={() => alert("WhatsApp placeholder clicked!")}
          className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse effect */}
          <span className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-75"></span>
          <i className="fab fa-whatsapp text-2xl md:text-3xl"></i>
        </button>
        {/* Hover Tooltip */}
        <div className="absolute left-14 md:left-16 bg-white text-gray-800 text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
          Chat with us!
        </div>
      </div>

    </div>
  );
}
