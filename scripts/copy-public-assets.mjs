import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const brainDir = 'C:\\Users\\found\\.gemini\\antigravity\\brain\\cc19cbf7-24ef-463e-a9f6-72c43e2c0c91';
const assetsDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const files = fs.readdirSync(brainDir);

const mappings = {
  'hero_background': 'hero_background.png',
  'product_box': 'product_box.png',
  'plastic_waste': 'plastic_waste.png',
  'coconut_splash': 'coconut_splash.png'
};

Object.entries(mappings).forEach(([prefix, newName]) => {
  const match = files.find(f => f.startsWith(prefix) && f.endsWith('.png'));
  if (match) {
    const sourcePath = path.join(brainDir, match);
    const destPath = path.join(assetsDir, newName);
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✅ Copied ${newName} to Next.js public/images/ folder.`);
  } else {
    console.log(`❌ Could not find image starting with ${prefix} in artifacts.`);
  }
});
