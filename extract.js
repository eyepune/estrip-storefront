const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const fs = require('fs');
const path = require('path');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const videoPath = path.join(__dirname, 'public', 'Products_montage_estrip.in_1080p_202607150148.mp4');
const outputDir = path.join(__dirname, 'public', 'frames');

// Create directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Extracting frames... This may take a minute or two.');
console.log('Target: 720p WebP images (Optimized for Canvas)');

ffmpeg(videoPath)
    .outputOptions([
        '-vf scale=-1:720', // Scale to 720p to keep memory low on devices
        '-c:v libwebp',     // Convert to lightweight webp
        '-q:v 60',          // 60% quality (good balance of size and visual fidelity)
        '-r 30'             // Force 30 fps to limit the number of frames loaded into RAM
    ])
    .output(path.join(outputDir, '%04d.webp'))
    .on('progress', (progress) => {
        if (progress.frames) {
            process.stdout.write(`Extracted ${progress.frames} frames...\r`);
        }
    })
    .on('end', () => {
        console.log('\n\n✅ Frame extraction complete!');
        console.log('You can now use the new Canvas Engine.');
    })
    .on('error', (err) => {
        console.error('\n❌ Error extracting frames:', err);
    })
    .run();
