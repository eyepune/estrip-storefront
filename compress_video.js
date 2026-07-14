const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const path = require('path');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const inputVideo = path.join(__dirname, 'public', 'Products_montage_estrip.in_1080p_202607150148.mp4');
const outputVideo = path.join(__dirname, 'public', 'bg-video-compressed.mp4');

console.log('Compressing background video... This will generate a lightweight 480p version.');

ffmpeg(inputVideo)
    .outputOptions([
        '-vf scale=-1:480', // Scale to 480p
        '-c:v libx264',     // Use H.264 codec for wide compatibility
        '-crf 28',          // High compression (lower quality, much smaller file)
        '-preset fast',
        '-an'               // Remove audio entirely
    ])
    .output(outputVideo)
    .on('progress', (progress) => {
        if (progress.percent) {
            process.stdout.write(`Compressing: ${progress.percent.toFixed(1)}%\r`);
        }
    })
    .on('end', () => {
        console.log('\n\n✅ Video compression complete! Created public/bg-video-compressed.mp4');
    })
    .on('error', (err) => {
        console.error('\n❌ Error compressing video:', err);
    })
    .run();
