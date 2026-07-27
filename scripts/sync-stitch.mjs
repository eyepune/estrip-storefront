import fs from 'fs';
import path from 'path';
import https from 'https';

const downloadFile = (fileUrl, filePath) => {
  return new Promise((resolve, reject) => {
    https.get(fileUrl, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
        return downloadFile(res.headers.location, filePath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get '${fileUrl}' (${res.statusCode})`));
      }
      const stream = fs.createWriteStream(filePath);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve(filePath);
      });
      stream.on('error', reject);
    }).on('error', reject);
  });
};

async function main() {
  const jsonPath = 'C:/Users/found/.gemini/antigravity/brain/8b5d0df4-035f-491d-aaa5-d8d49a34d1fc/.system_generated/steps/427/output.txt';
  const outDir = path.join(process.cwd(), 'stitch_exports');
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const rawData = fs.readFileSync(jsonPath, 'utf8');
  const data = JSON.parse(rawData);

  console.log(`Found ${data.screens.length} screens. Downloading HTML...`);

  let count = 0;
  for (const screen of data.screens) {
    let title = screen.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    
    // Remove consecutive underscores
    title = title.replace(/_+/g, '_');
    
    const isMobile = screen.deviceType === 'MOBILE' ? 'mobile' : (screen.deviceType === 'DESKTOP' ? 'desktop' : 'unknown');
    const safeTitle = `${title}_${isMobile}`;
    
    if (screen.htmlCode && screen.htmlCode.downloadUrl) {
      console.log(`Downloading HTML for: ${screen.title} -> ${safeTitle}.html`);
      const destPath = path.join(outDir, `${safeTitle}.html`);
      try {
        await downloadFile(screen.htmlCode.downloadUrl, destPath);
        count++;
      } catch (e) {
        console.error(`Failed to download ${safeTitle}.html`, e.message);
      }
    }
  }
  
  console.log(`Finished downloading ${count} HTML pages to ./stitch_exports/`);
}

main().catch(console.error);
