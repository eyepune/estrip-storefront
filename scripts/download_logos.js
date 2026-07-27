const fs = require('fs');
const https = require('https');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public', 'certifications');

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

const logos = [
    {
        name: 'oecd.svg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/OECD_logo.svg'
    },
    {
        name: 'nabl.png',
        url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/07/National_Accreditation_Board_for_Testing_and_Calibration_Laboratories_logo.svg/1200px-National_Accreditation_Board_for_Testing_and_Calibration_Laboratories_logo.svg.png'
    },
    {
        name: 'ifra.svg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/IFRA_logo.svg' // Fallback or direct SVG if available
    }
];

logos.forEach(logo => {
    const filePath = path.join(publicDir, logo.name);
    https.get(logo.url, (res) => {
        if (res.statusCode === 200) {
            const file = fs.createWriteStream(filePath);
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${logo.name}`);
            });
        } else {
            console.error(`Failed to download ${logo.name} (Status: ${res.statusCode})`);
        }
    }).on('error', (err) => {
        console.error(`Error downloading ${logo.name}: ${err.message}`);
    });
});
