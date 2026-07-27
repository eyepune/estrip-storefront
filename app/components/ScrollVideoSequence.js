'use client';
import { useEffect, useRef, useState } from 'react';

export default function ScrollVideoSequence({ totalFrames = 300 }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      // Format to 4 digits (e.g., 0001.webp)
      const frameNumber = i.toString().padStart(4, '0');
      img.src = `/frames/${frameNumber}.webp`;
      
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        // Draw the first frame immediately once it loads
        if (i === 1 && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      };
      
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
  }, [totalFrames]);

  // Handle Scroll to map frame smoothly
  const targetFrame = useRef(0);
  const currentFrame = useRef(0);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      let scrollProgress = -containerTop / (containerHeight - windowHeight);
      scrollProgress = Math.max(0, Math.min(1, scrollProgress));
      
      targetProgress.current = scrollProgress;
      targetFrame.current = scrollProgress * (totalFrames - 1);
    };

    const renderLoop = () => {
      // Lerp (Linear Interpolation) for buttery smooth scrubbing
      currentFrame.current += (targetFrame.current - currentFrame.current) * 0.1;
      currentProgress.current += (targetProgress.current - currentProgress.current) * 0.1;

      // 1. Draw Image
      const frameIndex = Math.min(totalFrames - 1, Math.max(0, Math.round(currentFrame.current)));
      const img = images[frameIndex];
      
      if (img && img.complete && canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;  
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
                      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }

      // 2. Parallax and fade effect for text
      if (textContainerRef.current) {
        const textOpacity = 1 - (currentProgress.current * 3);
        const translateY = currentProgress.current * 100;
        textContainerRef.current.style.opacity = Math.max(0, textOpacity);
        textContainerRef.current.style.transform = `translateY(${translateY}px)`;
        textContainerRef.current.style.pointerEvents = textOpacity <= 0 ? 'none' : 'auto';
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
  }, [images, totalFrames]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '300vh' }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center">
        {imagesLoaded < totalFrames * 0.1 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10 text-white font-bold">
            Loading Animation... {Math.round((imagesLoaded / totalFrames) * 100)}%
          </div>
        )}
        <canvas 
          ref={canvasRef} 
          width={1920} 
          height={1080} 
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/10 to-transparent pointer-events-none"></div>

        {/* Overlay Content */}
        <div ref={textContainerRef} className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl mb-6 tracking-tight">
            The Future of Clean.
          </h2>
          <p className="text-xl md:text-2xl text-white drop-shadow-xl font-medium max-w-2xl mb-10">
            Scroll to see how our plant-powered sheets dissolve instantly and power through stains.
          </p>
          <a href="/shop" className="pointer-events-auto btn bg-white text-gray-900 hover:bg-gray-200 px-12 py-4 text-sm font-bold tracking-widest uppercase rounded-[9999px] shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
