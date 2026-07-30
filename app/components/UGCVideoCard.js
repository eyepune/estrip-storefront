'use client';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

export default function UGCVideoCard({ video }) {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { amount: 0.5 }); // Triggers when 50% visible
  const [isUnmuted, setIsUnmuted] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        setIsUnmuted(false); // Auto mute when out of view
      }
    }
  }, [isInView]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isUnmuted;
    }
  }, [isUnmuted]);

  return (
    <div 
      className="w-[240px] md:w-[260px] shrink-0 aspect-[9/16] bg-[var(--color-surface-container)] rounded-3xl overflow-hidden relative shadow-lg snap-center group cursor-pointer"
      onPointerEnter={(e) => { if (e.pointerType === 'mouse') setIsUnmuted(true); }}
      onPointerLeave={(e) => { if (e.pointerType === 'mouse') setIsUnmuted(false); }}
      onClick={() => setIsUnmuted(!isUnmuted)}
    >
      <video
        ref={videoRef}
        src={video.src}
        loop
        playsInline
        muted // Default muted
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      
      {/* Play/Sound Indicator */}
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center transition-opacity duration-300">
        <span className={`material-symbols-outlined text-white text-[16px] transition-all duration-300 ${isUnmuted ? 'opacity-100 scale-100' : 'opacity-60 scale-90'}`}>
          {isUnmuted ? 'volume_up' : 'volume_off'}
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
