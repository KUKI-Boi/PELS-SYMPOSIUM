import QRCode from 'qrcode';
import jsQR from 'jsqr';
import sharp from 'sharp';

async function testDarkEyesWithAccents() {
  const size = 37;
  const margin = 3;
  const scale = 20;
  const pixelDim = (size + margin * 2) * scale; // 860

  const qrBuf = await QRCode.toBuffer('https://forms.gle/cmyjq4Q8tgVz64Xe7', {
    errorCorrectionLevel: 'H',
    margin: margin,
    scale: scale,
    color: { dark: '#0a1628', light: '#ffffff' } // Deep high-contrast tech navy
  });

  const overlaySvg = `
    <svg width="${pixelDim}" height="${pixelDim}">
      <!-- Center Emblem Badge (radius 92px) -->
      <circle cx="${pixelDim / 2}" cy="${pixelDim / 2}" r="92" fill="#ffffff" stroke="#ff840c" stroke-width="5"/>
      <circle cx="${pixelDim / 2}" cy="${pixelDim / 2}" r="82" fill="#071326"/>
      <circle cx="${pixelDim / 2}" cy="${pixelDim / 2}" r="64" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3 5"/>

      <!-- Golden Electric Lightning Bolt -->
      <path d="M ${pixelDim / 2 + 6} ${pixelDim / 2 - 32} L ${pixelDim / 2 - 16} ${pixelDim / 2 + 2} L ${pixelDim / 2 - 2} ${pixelDim / 2 + 2} L ${pixelDim / 2 - 7} ${pixelDim / 2 + 32} L ${pixelDim / 2 + 16} ${pixelDim / 2 - 2} L ${pixelDim / 2 + 2} ${pixelDim / 2 - 2} Z" fill="#ffb703"/>

      <!-- Clean Typography -->
      <text x="${pixelDim / 2}" y="${pixelDim / 2 - 42}" fill="#38bdf8" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="9" font-weight="800" letter-spacing="2" text-anchor="middle">IEEE PELS</text>
      <text x="${pixelDim / 2}" y="${pixelDim / 2 + 48}" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="900" letter-spacing="2.5" text-anchor="middle">SIA 2026</text>
    </svg>
  `;

  const composited = await sharp(qrBuf)
    .composite([{ input: Buffer.from(overlaySvg) }])
    .png()
    .toBuffer();

  const { data, info } = await sharp(composited).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const decoded = jsQR(new Uint8ClampedArray(data), info.width, info.height);
  console.log('Result with High Contrast Dark Eyes + Center Emblem =>', decoded ? 'PASS (' + decoded.data + ')' : 'FAIL');
}

testDarkEyesWithAccents();
