'use client';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

export default function UGCVideoCard({ video }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5 }); // Triggers when 50% visible of the static container
  const iconRef = useRef(null);

  // Eliminate React state for unmuting to avoid expensive re-renders on hover
  const toggleMute = (forceUnmute = null) => {
    if (!videoRef.current || !iconRef.current) return;
    
    const isCurrentlyUnmuted = !videoRef.current.muted;
    const shouldBeUnmuted = forceUnmute !== null ? forceUnmute : !isCurrentlyUnmuted;
    
    videoRef.current.muted = !shouldBeUnmuted;
    
    // Direct DOM manipulation for zero-latency hover updates
    iconRef.current.innerText = shouldBeUnmuted ? 'volume_up' : 'volume_off';
    if (shouldBeUnmuted) {
      iconRef.current.classList.remove('opacity-60', 'scale-90');
      iconRef.current.classList.add('opacity-100', 'scale-100');
    } else {
      iconRef.current.classList.remove('opacity-100', 'scale-100');
      iconRef.current.classList.add('opacity-60', 'scale-90');
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        toggleMute(false); // Auto mute when out of view
      }
    }
  }, [isInView]);

  return (
    <div 
      ref={containerRef}
      className="w-[240px] md:w-[260px] shrink-0 aspect-[9/16] bg-[var(--color-surface-container)] rounded-3xl overflow-hidden relative shadow-lg snap-center group cursor-pointer translate-z-0"
      onPointerEnter={(e) => { if (e.pointerType === 'mouse') toggleMute(true); }}
      onPointerLeave={(e) => { if (e.pointerType === 'mouse') toggleMute(false); }}
      onClick={() => toggleMute()}
    >
      <video
        ref={videoRef}
        src={video.src}
        loop
        playsInline
        muted // Default muted
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
      />
      
      {/* Play/Sound Indicator */}
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center transition-opacity duration-300">
        <span ref={iconRef} className="material-symbols-outlined text-white text-[16px] transition-all duration-300 opacity-60 scale-90">
          volume_off
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-surface-container-high)] opacity-0">
        {/* Placeholder for when video is loading or hidden, keeping for structure if needed */}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
        <div className="flex text-[#FFC107] text-[14px] mb-2">★★★★★</div>
        <p className="text-white font-black text-sm md:text-base leading-snug drop-shadow-md">"{video.text}"</p>
        <p className="text-white/80 text-xs mt-2 font-medium">{video.handle}</p>
      </div>
    </div>
  );
}
