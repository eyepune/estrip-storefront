'use client';
import { useEffect, useRef, useState } from 'react';

export default function ScrollVideoSequence({ totalFrames = 300, folderName = "frames", frameStep = 6, children }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isLoadingRef = useRef(true);

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i += frameStep) {
      const img = new Image();
      // Format to 4 digits (e.g., 0001.webp)
      const frameNumber = i.toString().padStart(4, '0');
      img.src = `/${folderName}/${frameNumber}.webp`;
      
      img.onload = () => {
        loadedCount++;
        
        const totalToLoad = Math.ceil(totalFrames / frameStep);
        // Turn off loading screen once 10% of frames are ready
        if (loadedCount >= totalToLoad * 0.1 && isLoadingRef.current) {
          isLoadingRef.current = false;
          setIsLoading(false);
        }

        // Draw the first frame immediately once it loads
        if (i === 1 && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d', { alpha: false });
          ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      };
      
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
  }, [totalFrames, folderName, frameStep]);

  // Handle Scroll to map frame smoothly
  const targetFrame = useRef(0);
  const currentFrame = useRef(0);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const lastDrawnFrame = useRef(-1);
  const rafId = useRef(null);
  const bounds = useRef({ top: 0, height: 0 });

  // Cache bounds to prevent layout thrashing
  useEffect(() => {
    const updateBounds = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        bounds.current.top = rect.top + window.scrollY;
        bounds.current.height = rect.height;
      }
    };
    
    // Slight delay to ensure layout is settled
    setTimeout(updateBounds, 500);
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!bounds.current.height) return;
      
      const scrollY = window.scrollY;
      const containerTop = bounds.current.top - scrollY;
      const containerHeight = bounds.current.height;
      const windowHeight = window.innerHeight;
      
      let scrollProgress = -containerTop / (containerHeight - windowHeight);
      scrollProgress = Math.max(0, Math.min(1, scrollProgress));
      
      const loadedFramesCount = Math.ceil(totalFrames / frameStep);
      targetProgress.current = scrollProgress;
      targetFrame.current = scrollProgress * (loadedFramesCount - 1);
    };

    const renderLoop = () => {
      // Only process and draw if we actually need to animate (saves massive CPU/GPU)
      if (Math.abs(targetProgress.current - currentProgress.current) > 0.001) {
        // Lerp (Linear Interpolation) for buttery smooth scrubbing
        currentFrame.current += (targetFrame.current - currentFrame.current) * 0.1;
        currentProgress.current += (targetProgress.current - currentProgress.current) * 0.1;

        // 1. Draw Image (ONLY if frame changed)
        const loadedFramesCount = Math.ceil(totalFrames / frameStep);
        const frameIndex = Math.min(loadedFramesCount - 1, Math.max(0, Math.round(currentFrame.current)));
        
        if (frameIndex !== lastDrawnFrame.current) {
          const img = images[frameIndex];
          
          if (img && img.complete && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d', { alpha: false }); // Optimize for opaque images
            
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);
            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;  
            
            // Note: clearRect is not needed since we draw over the entire canvas (opaque)
            ctx.drawImage(img, 0, 0, img.width, img.height,
                          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
                          
            lastDrawnFrame.current = frameIndex;
          }
        }

        // 2. Parallax and fade effect for text
        if (textContainerRef.current) {
          const textOpacity = 1 - (currentProgress.current * 3);
          const translateY = currentProgress.current * 100;
          textContainerRef.current.style.opacity = Math.max(0, textOpacity);
          textContainerRef.current.style.transform = `translateY(${translateY}px)`;
          textContainerRef.current.style.pointerEvents = textOpacity <= 0 ? 'none' : 'auto';
        }
      }

      rafId.current = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculate
    rafId.current = requestAnimationFrame(renderLoop); // Start loop
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [images, totalFrames, frameStep]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '350vh' }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10 text-white font-bold">
            <span className="animate-pulse">Loading Animation...</span>
          </div>
        )}
        <canvas 
          ref={canvasRef} 
          width={1920} 
          height={1080} 
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/10 pointer-events-none"></div>

        {/* Overlay Content */}
        <div ref={textContainerRef} className="absolute inset-0 z-20 w-full h-full flex items-center justify-center pointer-events-none">
          {children || (
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] mb-6 tracking-tight">
                The Future of Clean.
              </h2>
              <p className="text-xl md:text-2xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium max-w-2xl mb-10 bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm">
                Scroll to see how our plant-powered sheets dissolve instantly and power through stains.
              </p>
              <a href="/shop" className="pointer-events-auto btn bg-white text-rose-600 px-12 py-4 text-sm font-black tracking-widest uppercase rounded-[9999px] ring-4 ring-rose-600 shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:bg-rose-600 hover:text-white transition-all duration-300">
                Shop Now
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
