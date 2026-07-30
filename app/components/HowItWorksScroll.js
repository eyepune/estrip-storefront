'use client';
import { useEffect, useRef, useState } from 'react';

export default function HowItWorksScroll({ totalFrames = 300, folderName = "how-it-works-frames", scrollProgress }) {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(4, '0');
      img.src = `/${folderName}/${frameNumber}.webp`;
      
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (i === 1 && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      };
      
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
  }, [totalFrames, folderName]);

  // Handle Scroll to map frame smoothly
  const currentFrame = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const renderLoop = () => {
      // Calculate target frame from the Framer Motion scrollProgress value
      const targetFrameValue = scrollProgress.get() * (totalFrames - 1);
      
      // Lerp (Linear Interpolation) for buttery smooth scrubbing
      currentFrame.current += (targetFrameValue - currentFrame.current) * 0.1;

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

      rafId.current = requestAnimationFrame(renderLoop);
    };

    rafId.current = requestAnimationFrame(renderLoop); // Start loop
    
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [images, totalFrames, scrollProgress]);

  return (
    <div className="absolute inset-0 w-full h-full bg-black">
      {imagesLoaded < totalFrames * 0.1 && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10 text-white font-bold">
          Loading 3D Sequence... {Math.round((imagesLoaded / totalFrames) * 100)}%
        </div>
      )}
      <canvas 
        ref={canvasRef} 
        width={1280} 
        height={720} 
        className="w-full h-full object-cover opacity-80"
      />
    </div>
  );
}
