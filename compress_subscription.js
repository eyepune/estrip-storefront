const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir);

// Find the new subscription video
const subVideoFileName = files.find(f => f.startsWith('Estrip_subscription_video_sequence') && f.endsWith('.mp4'));

if (!subVideoFileName) {
    console.error('❌ Could not find the subscription video in the public folder.');
    process.exit(1);
}

const inputVideo = path.join(publicDir, subVideoFileName);
const outputVideo = path.join(publicDir, 'subscription_bg_compressed.mp4');

console.log(`Found video: ${subVideoFileName}`);
console.log('Compressing specifically for the Subscription section...');

ffmpeg(inputVideo)
    .outputOptions([
        '-vf', 'scale=-2:480',
        '-c:v', 'libx264',
        '-pix_fmt', 'yuv420p',
        '-crf', '28',
        '-preset', 'fast',
        '-an'
    ])
    .output(outputVideo)
    .on('progress', (progress) => {
        if (progress.percent) {
            process.stdout.write(`Compressing: ${progress.percent.toFixed(1)}%\r`);
        }
    })
    .on('end', () => {
        console.log('\n\n✅ Video compression complete! Created public/subscription_bg_compressed.mp4');
    })
    .on('error', (err) => {
        console.error('\n❌ Error compressing video:', err);
    })
    .run();
