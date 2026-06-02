// Generates app/icon.png, app/apple-icon.png, and app/favicon.ico from the
// brand lightbulb mark, composited on a solid charcoal (#1C1C1C) rounded
// background so the icon is crisp and visible at small sizes on light + dark
// tab bars.
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFile } from "node:fs/promises";

const SRC = "public/1695-logo-icon-transparent.png";

// Charcoal rounded-square background + centered lightbulb → PNG buffer
async function composeBuffer({ size, radius, pad }) {
  const bg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
       <rect width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#1C1C1C"/>
     </svg>`
  );

  const logoSize = size - pad * 2;
  const logo = await sharp(SRC)
    .resize(logoSize, logoSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();

  return sharp(bg)
    .composite([{ input: logo, top: pad, left: pad }])
    .png()
    .toBuffer();
}

async function generatePng({ size, radius, pad, out }) {
  const buf = await composeBuffer({ size, radius, pad });
  await writeFile(out, buf);
  console.log(`✓ ${out} (${size}x${size})`);
}

// App-Router PNG icons
await generatePng({ size: 48, radius: 10, pad: 4, out: "app/icon.png" });
await generatePng({ size: 180, radius: 38, pad: 18, out: "app/apple-icon.png" });

// Multi-resolution favicon.ico (16/32/48) so /favicon.ico itself serves the mark
const icoSizes = [
  { size: 16, radius: 3, pad: 1 },
  { size: 32, radius: 7, pad: 3 },
  { size: 48, radius: 10, pad: 4 },
];
const icoPngs = await Promise.all(icoSizes.map((s) => composeBuffer(s)));
const ico = await pngToIco(icoPngs);
await writeFile("app/favicon.ico", ico);
console.log("✓ app/favicon.ico (16/32/48)");
