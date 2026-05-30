import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFile } from "node:fs/promises";

// run: npm i -D sharp png-to-ico && node scripts/gen-favicons.mjs
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 32 32"><rect width="32" height="32" fill="#14171f"/><path d="M6 11 L10 21 L16 13.5 L22 21 L26 11" fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const buf = Buffer.from(svg);
const sizes = { "favicon-16.png": 16, "favicon-32.png": 32, "apple-touch-icon.png": 180, "icon-192.png": 192, "icon-512.png": 512 };
for (const [name, size] of Object.entries(sizes)) {
  await sharp(buf).resize(size, size).png().toFile(`public/${name}`);
}
const ico = await pngToIco([
  await sharp(buf).resize(32, 32).png().toBuffer(),
  await sharp(buf).resize(16, 16).png().toBuffer(),
]);
await writeFile("public/favicon.ico", ico);
console.log("favicons generated");
