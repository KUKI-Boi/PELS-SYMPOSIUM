import QRCode from 'qrcode';
import jsQR from 'jsqr';
import sharp from 'sharp';

const URL = 'https://forms.gle/cmyjq4Q8tgVz64Xe7';

async function testStyle(roundCornersEye, centerLogoRadius, dotRadiusFactor) {
  const qr = QRCode.create(URL, { errorCorrectionLevel: 'H' });
  const size = qr.modules.size;
  const cellSize = 24;
  const margin = 4 * cellSize;
  const dim = size * cellSize + 2 * margin;

  const centerRow = (size - 1) / 2;
  const centerCol = (size - 1) / 2;

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${dim}" height="${dim}" viewBox="0 0 ${dim} ${dim}">
    <rect width="${dim}" height="${dim}" fill="#ffffff" />`;

  function isFinder(r, c) {
    if (r <= 6 && c <= 6) return true;
    if (r <= 6 && c >= size - 7) return true;
    if (r >= size - 7 && c <= 6) return true;
    return false;
  }

  function inCenter(r, c) {
    return Math.hypot(r - centerRow, c - centerCol) < centerLogoRadius;
  }

  // Draw modules
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (isFinder(r, c)) continue;
      if (inCenter(r, c)) continue;
      if (qr.modules.get(r, c)) {
        const cx = margin + (c + 0.5) * cellSize;
        const cy = margin + (r + 0.5) * cellSize;
        svg += `<circle cx="${cx}" cy="${cy}" r="${cellSize * dotRadiusFactor}" fill="#0f172a" />`;
      }
    }
  }

  // Draw Eyes
  function drawEye(topR, leftC, rx) {
    const x = margin + leftC * cellSize;
    const y = margin + topR * cellSize;
    const w7 = 7 * cellSize;
    const w5 = 5 * cellSize;
    const w3 = 3 * cellSize;
    
    // Outer 7x7
    svg += `<rect x="${x}" y="${y}" width="${w7}" height="${w7}" rx="${rx}" fill="#0f172a" />`;
    // Middle 5x5
    svg += `<rect x="${x + cellSize}" y="${y + cellSize}" width="${w5}" height="${w5}" rx="${rx * 0.7}" fill="#ffffff" />`;
    // Center 3x3
    svg += `<rect x="${x + 2 * cellSize}" y="${y + 2 * cellSize}" width="${w3}" height="${w3}" rx="${rx * 0.5}" fill="#ff840c" />`;
  }

  drawEye(0, 0, roundCornersEye * cellSize);
  drawEye(0, size - 7, roundCornersEye * cellSize);
  drawEye(size - 7, 0, roundCornersEye * cellSize);

  // Center logo
  if (centerLogoRadius > 0) {
    const cx = margin + (centerCol + 0.5) * cellSize;
    const cy = margin + (centerRow + 0.5) * cellSize;
    svg += `<circle cx="${cx}" cy="${cy}" r="${centerLogoRadius * cellSize}" fill="#ffffff" stroke="#ff840c" stroke-width="4" />`;
    svg += `<text x="${cx}" y="${cy + 6}" font-size="28" font-family="sans-serif" font-weight="bold" fill="#0284c7" text-anchor="middle">SIA</text>`;
  }

  svg += `</svg>`;

  const buf = await sharp(Buffer.from(svg)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const code = jsQR(new Uint8ClampedArray(buf.data), buf.info.width, buf.info.height);
  return code ? code.data : null;
}

(async () => {
  for (const rx of [0, 1, 2, 3.5]) { // 0=square, 1=slightly rounded, 2=smooth rounded, 3.5=circle!
    for (const logoR of [0, 3.5, 4.2, 5.0]) {
      const res = await testStyle(rx, logoR, 0.44);
      console.log(`rx=${rx}, logoR=${logoR} => ${res ? 'SUCCESS (' + res + ')' : 'FAIL'}`);
    }
  }
})();
