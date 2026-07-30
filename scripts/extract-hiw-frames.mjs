import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

const publicDir = path.join(process.cwd(), 'public');
const outputDir = path.join(publicDir, 'how-it-works-frames');

// Videos to stitch
const videos = [
  'E-STRIP_VS_LIQUIDS_comparison_1080p_202607300242.mp4',
  'Detergent_sheet_dissolving_in_water_202607300149.mp4',
  'Soap_bubbles_floating_on_white_202607202024.mp4'
];

console.log('Preparing to stitch videos and extract frames...');

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
} else {
  // Clean existing frames
  fs.readdirSync(outputDir).forEach(file => {
    fs.unlinkSync(path.join(outputDir, file));
  });
}

// Create the concat file for FFmpeg
const concatFilePath = path.join(process.cwd(), 'stitch.txt');
const concatContent = videos.map(v => `file 'public/${v}'`).join('\n');
fs.writeFileSync(concatFilePath, concatContent);

console.log('Stitching videos and extracting webp frames (This might take a minute)...');

try {
  const ffmpegPath = ffmpegInstaller.path;
  // Use a complex filter to ensure they are all scaled to 1280x720, concatenated, and output as webp
  // We extract at 15fps to keep the total frame count manageable for scrolling
  execSync(`"${ffmpegPath}" -y -f concat -safe 0 -i stitch.txt -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,fps=15" -q:v 5 "${outputDir}/%04d.webp"`, { stdio: 'inherit' });
  console.log('✅ Successfully extracted all frames to /public/how-it-works-frames!');
} catch (error) {
  console.error('❌ Error extracting frames:', error.message);
} finally {
  if (fs.existsSync(concatFilePath)) {
    fs.unlinkSync(concatFilePath);
  }
}
