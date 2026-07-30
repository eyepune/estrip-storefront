const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

async function createFrames() {
  const framesDir = path.join(__dirname, 'public', 'frames');
  
  if (!fs.existsSync(framesDir)) {
    fs.mkdirSync(framesDir, { recursive: true });
  }

  // Use placehold.co images for the 3 scenes
  const scenes = [
    'https://placehold.co/1920x1080/4a90e2/ffffff.png?text=Flooring+Scene',
    'https://placehold.co/1920x1080/50e3c2/ffffff.png?text=Laundry+Scene',
    'https://placehold.co/1920x1080/b8e986/ffffff.png?text=Strip+Flying+Scene'
  ];

  console.log('Loading source images...');
  const imgs = await Promise.all(scenes.map(src => loadImage(src)));

  const width = 1920;
  const height = 1080;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  const numFrames = 300;
  
  console.log(`Generating ${numFrames} frames...`);
  
  for (let i = 0; i < numFrames; i++) {
    const progress = i / numFrames;
    ctx.clearRect(0, 0, width, height);
    
    if (progress < 0.33) {
      // Scene 1: Flooring
      ctx.drawImage(imgs[0], 0, 0, width, height);
    } else if (progress < 0.66) {
      // Transition: Flooring -> Laundry
      const t = (progress - 0.33) / 0.33;
      ctx.globalAlpha = 1;
      ctx.drawImage(imgs[0], 0, 0, width, height);
      ctx.globalAlpha = t;
      ctx.drawImage(imgs[1], 0, 0, width, height);
    } else if (progress < 0.8) {
      // Scene 2: Laundry
      ctx.globalAlpha = 1;
      ctx.drawImage(imgs[1], 0, 0, width, height);
    } else {
      // Transition: Laundry -> Strip Flying
      const t = (progress - 0.8) / 0.2;
      ctx.globalAlpha = 1;
      ctx.drawImage(imgs[1], 0, 0, width, height);
      ctx.globalAlpha = t;
      ctx.drawImage(imgs[2], 0, 0, width, height);
    }
    
    ctx.globalAlpha = 1; // Reset alpha
    
    // Save frame as WebP
    const frameNumber = (i + 1).toString().padStart(4, '0');
    const outPath = path.join(framesDir, `${frameNumber}.webp`);
    
    // Canvas doesn't support webp export out of the box in node without extra compilation sometimes, 
    // but Next.js ScrollVideoSequence component looks for webp. Let's output png and rename to webp for now to satisfy the loader,
    // or we can just output standard PNG buffers and write them.
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outPath, buffer);
    
    if ((i + 1) % 50 === 0) {
      console.log(`Generated ${i + 1} frames`);
    }
  }
  
  console.log('All frames generated successfully in public/frames/');
}

createFrames().catch(console.error);
