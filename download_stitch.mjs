import fs from 'fs';
import https from 'https';

const downloadFile = (url, path) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
        return downloadFile(res.headers.location, path).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
      }
      const stream = fs.createWriteStream(path);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve(path);
      });
      stream.on('error', reject);
    }).on('error', reject);
  });
};

async function main() {
  const htmlUrl = 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzQyMWYzZGRhYmQxODQzZjNiZGFkZTEyZTc4ZDViOGM5EgsSBxCL563H6gIYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzA0NTUxMDA3MjI5MDA1MTA2MQ&filename=&opi=89354086';
  const imageUrl = 'https://lh3.googleusercontent.com/aida/AP1WRLtRSoJG-E3mm7VwhCwu85JfmDaIn5MUtOgqlAZuIa0XekuLA9Eb8WkEKjoFwi8RJIjAXQ6QQOBxB49uUwt8lbZSkVHYHpdZIba7LxqdB8__7pjcSo_bmX_wWOyEtMqvhBZjLMdDRyFJ8D49l0tKbNdjyMh76I-A6A4PL4a_WbGf06NLg4w5cyKrAPhxjmpG-gPUiAe5pg4ij3ebnNrNZ5lglcskmMKCo0MOhPeaJ_dTbmn9HpXrxAalTOPD';

  console.log('Downloading Stitch HTML and Image...');
  try {
    await downloadFile(htmlUrl, 'stitch_homepage.html');
    await downloadFile(imageUrl, 'stitch_homepage.png');
    console.log('Successfully downloaded stitch_homepage.html and stitch_homepage.png');
  } catch (error) {
    console.error('Error downloading files:', error);
  }
}

main();
