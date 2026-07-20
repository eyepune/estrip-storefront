'use client';

export default function FloatingWidgets() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* WhatsApp Button - Left */}
      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 pointer-events-auto flex items-center group">
        <button 
          onClick={() => alert("WhatsApp placeholder clicked!")}
          className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 z-10"
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

      {/* AI Chatbot Button - Right */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 pointer-events-auto flex items-center justify-end group">
        <button 
          onClick={() => alert("AI Chatbot placeholder clicked!")}
          className="relative flex items-center justify-center gap-2 md:gap-3 h-12 md:h-14 px-5 md:px-8 bg-[var(--color-secondary)] text-white rounded-full hover:-translate-y-1 transition-transform duration-300 z-10 shadow-2xl"
          aria-label="Open AI Chatbot"
        >
          <span className="material-symbols-outlined text-xl md:text-2xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>robot_2</span>
          <span className="font-bold text-sm md:text-lg tracking-wide whitespace-nowrap">Chat</span>
        </button>
      </div>
    </div>
  );
}
