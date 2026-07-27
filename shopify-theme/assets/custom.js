document.addEventListener("DOMContentLoaded", function () {
  
  // ==========================================
  // Hero 3D Scroll Canvas Engine
  // ==========================================
  const container = document.getElementById("hero-scroll-container");
  const canvas = document.getElementById("hero-canvas");
  const loader = document.getElementById("hero-loader");
  const loaderText = document.getElementById("hero-loader-text");
  const textContainer = document.getElementById("hero-text-container");

  if (container && canvas) {
    const totalFrames = 300;
    const images = [];
    let imagesLoaded = 0;
    let targetFrame = 0;
    let currentFrame = 0;
    let targetProgress = 0;
    let currentProgress = 0;
    let rafId = null;
    let ctx = canvas.getContext("2d");

    // Preload images
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(4, "0");
      
      // Note: In a real Shopify theme, you would upload these to the Files section and grab the CDN URL.
      // For now, we are pointing back to the same relative path for testing.
      img.src = `/frames/${frameNumber}.webp`;
      
      img.onload = () => {
        imagesLoaded++;
        if (loaderText) {
          loaderText.textContent = Math.round((imagesLoaded / totalFrames) * 100) + "%";
        }
        
        // Hide loader when 10% are loaded
        if (imagesLoaded > totalFrames * 0.1 && loader) {
          loader.style.opacity = "0";
          setTimeout(() => loader.style.display = "none", 500);
        }

        // Draw first frame immediately
        if (i === 1) {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      };
      
      images.push(img);
    }

    // Scroll Handler
    function handleScroll() {
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      let scrollProgress = -containerTop / (containerHeight - windowHeight);
      scrollProgress = Math.max(0, Math.min(1, scrollProgress));
      
      targetProgress = scrollProgress;
      targetFrame = scrollProgress * (totalFrames - 1);
    }

    // Render Loop (Lerp)
    function renderLoop() {
      currentFrame += (targetFrame - currentFrame) * 0.1;
      currentProgress += (targetProgress - currentProgress) * 0.1;

      // Draw Image
      const frameIndex = Math.min(totalFrames - 1, Math.max(0, Math.round(currentFrame)));
      const img = images[frameIndex];
      
      if (img && img.complete) {
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;  
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }

      // Text Parallax
      if (textContainer) {
        const textOpacity = 1 - (currentProgress * 3);
        const translateY = currentProgress * 100;
        textContainer.style.opacity = Math.max(0, textOpacity);
        textContainer.style.transform = `translateY(${translateY}px)`;
        textContainer.style.pointerEvents = textOpacity <= 0 ? "none" : "auto";
      }

      rafId = requestAnimationFrame(renderLoop);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    rafId = requestAnimationFrame(renderLoop);
  }
});
