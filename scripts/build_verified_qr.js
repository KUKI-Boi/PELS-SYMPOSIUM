import QRCode from 'qrcode';
import jsQR from 'jsqr';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const URL = 'https://forms.gle/cmyjq4Q8tgVz64Xe7';

async function main() {
  const qr = QRCode.create(URL, { errorCorrectionLevel: 'H' });
  const size = qr.modules.size; // 37
  console.log('QR Matrix size:', size);

  // We want to generate an artistic branded QR code:
  // - Eye targets: Stylish branded concentric colors (deep navy outer, white middle, electric cyan/orange center)
  // - Data modules: Smooth rounded elements in brand gradient (electric cyan to orange/navy)
  // - Center emblem: Clean circular shield with SIA 2026 / PELS icon
  // - Outer card: Full poster card with top header and bottom clear call to action

  // Let's find the sweet spot for module styling that scans 100% reliably
  const cellSize = 26;
  const padding = 120;
  const qrPixelWidth = size * cellSize; // 37 * 26 = 962
  const totalWidth = qrPixelWidth + padding * 2; // 1202
  const totalHeight = totalWidth + 180; // 1382

  const qrOffsetX = padding;
  const qrOffsetY = padding + 40;

  const centerR = (size - 1) / 2;
  const centerC = (size - 1) / 2;
  const centerLogoRadiusPx = 4.2 * cellSize; // ~109 px

  function isFinder(r, c) {
    if (r <= 6 && c <= 6) return true;
    if (r <= 6 && c >= size - 7) return true;
    if (r >= size - 7 && c <= 6) return true;
    return false;
  }

  function isFinderSeparator(r, c) {
    if (r === 7 && c <= 7) return true;
    if (c === 7 && r <= 7) return true;
    if (r === 7 && c >= size - 8) return true;
    if (c === size - 8 && r <= 7) return true;
    if (r === size - 8 && c <= 7) return true;
    if (c === 7 && r >= size - 8) return true;
    return false;
  }

  function inCenterArea(r, c) {
    const cx = qrOffsetX + (c + 0.5) * cellSize;
    const cy = qrOffsetY + (r + 0.5) * cellSize;
    const centerPxX = qrOffsetX + (centerC + 0.5) * cellSize;
    const centerPxY = qrOffsetY + (centerR + 0.5) * cellSize;
    return Math.hypot(cx - centerPxX, cy - centerPxY) < centerLogoRadiusPx + 4;
  }

  let modulesSvg = '';

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (isFinder(r, c) || isFinderSeparator(r, c)) continue;
      if (inCenterArea(r, c)) continue;

      if (qr.modules.get(r, c)) {
        const x = qrOffsetX + c * cellSize;
        const y = qrOffsetY + r * cellSize;
        const cx = x + cellSize / 2;
        const cy = y + cellSize / 2;

        // Position-based color gradient
        const distFromCenter = Math.hypot(c - centerC, r - centerR) / (size / 1.4);
        let color = '#0f172a'; // Deep slate navy
        if (distFromCenter > 0.6) {
          color = '#ea580c'; // Vibrant Orange
        } else if (distFromCenter > 0.3) {
          color = '#0284c7'; // Electric Cyan Blue
        }

        // Rounded module (smooth aesthetic with high scan contrast)
        const inset = 1.8;
        const w = cellSize - inset * 2;
        const rx = 6;
        modulesSvg += `<rect x="${(x + inset).toFixed(2)}" y="${(y + inset).toFixed(2)}" width="${w.toFixed(2)}" height="${w.toFixed(2)}" rx="${rx}" fill="${color}" />\n`;
      }
    }
  }

  // Draw High-Precision Branded Eyes (7x7 outer, 5x5 middle white, 3x3 inner)
  function drawEye(topR, leftC, outerColor, innerColor) {
    const x = qrOffsetX + leftC * cellSize;
    const y = qrOffsetY + topR * cellSize;
    const w7 = 7 * cellSize;
    const w5 = 5 * cellSize;
    const w3 = 3 * cellSize;

    return `
      <!-- Finder Eye at (${topR}, ${leftC}) -->
      <rect x="${x}" y="${y}" width="${w7}" height="${w7}" rx="20" fill="${outerColor}" />
      <rect x="${x + cellSize}" y="${y + cellSize}" width="${w5}" height="${w5}" rx="14" fill="#ffffff" />
      <rect x="${x + 2 * cellSize}" y="${y + 2 * cellSize}" width="${w3}" height="${w3}" rx="8" fill="${innerColor}" />
      <circle cx="${x + 3.5 * cellSize}" cy="${y + 3.5 * cellSize}" r="6" fill="#ffffff" opacity="0.3" />
    `;
  }

  const eyeTL = drawEye(0, 0, '#0f172a', '#ea580c');
  const eyeTR = drawEye(0, size - 7, '#0f172a', '#0284c7');
  const eyeBL = drawEye(size - 7, 0, '#0f172a', '#0284c7');

  const centerCenterPxX = qrOffsetX + (centerC + 0.5) * cellSize;
  const centerCenterPxY = qrOffsetY + (centerR + 0.5) * cellSize;

  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} ${totalHeight}" width="${totalWidth}" height="${totalHeight}">
  <defs>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="28" flood-color="#0284c7" flood-opacity="0.16" />
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000000" flood-opacity="0.08" />
    </filter>
    <filter id="badgeShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="#000000" flood-opacity="0.25" />
    </filter>
    <linearGradient id="headerGradient" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#ea580c" />
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#020817" />
    </linearGradient>
    <linearGradient id="boltGrad" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="100%" stop-color="#ea580c" />
    </linearGradient>
  </defs>

  <!-- Background Base -->
  <rect width="${totalWidth}" height="${totalHeight}" fill="#f1f5f9" />

  <!-- Clean White Card with Drop Shadow -->
  <rect x="36" y="30" width="${totalWidth - 72}" height="${totalHeight - 60}" rx="36" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" filter="url(#cardShadow)" />

  <!-- Blueprint Corner Markers -->
  <path d="M 56 66 L 56 46 L 76 46" fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round" />
  <path d="M ${totalWidth - 56} 66 L ${totalWidth - 56} 46 L ${totalWidth - 76} 46" fill="none" stroke="#ea580c" stroke-width="3" stroke-linecap="round" />
  <path d="M 56 ${totalHeight - 66} L 56 ${totalHeight - 46} L 76 ${totalHeight - 46}" fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round" />
  <path d="M ${totalWidth - 56} ${totalHeight - 66} L ${totalWidth - 56} ${totalHeight - 46} L ${totalWidth - 76} ${totalHeight - 46}" fill="none" stroke="#ea580c" stroke-width="3" stroke-linecap="round" />

  <!-- Header Header Text -->
  <g text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
    <rect x="${totalWidth / 2 - 240}" y="48" width="480" height="26" rx="13" fill="#0284c7" fill-opacity="0.1" />
    <text x="${totalWidth / 2}" y="65" font-size="11.5" font-weight="700" letter-spacing="2.5" fill="#0284c7">
      IEEE PELS &amp; IEEE IES BANGALORE CHAPTERS
    </text>
    <text x="${totalWidth / 2}" y="104" font-size="24" font-weight="900" letter-spacing="1" fill="#0f172a">
      SYMPOSIUM ON INDUSTRIAL AUTOMATION 2026
    </text>
    <text x="${totalWidth / 2}" y="125" font-size="12" font-weight="600" letter-spacing="3" fill="#64748b">
      AUTOMATION CONNECTS IDEAS TO A SMARTER TOMORROW
    </text>
  </g>

  <!-- QR Modules -->
  <g id="modules">
    ${modulesSvg}
  </g>

  <!-- Eyes -->
  ${eyeTL}
  ${eyeTR}
  ${eyeBL}

  <!-- Center Branded Shield -->
  <g id="centerBadge" filter="url(#badgeShadow)">
    <!-- White Boundary Shield -->
    <circle cx="${centerCenterPxX}" cy="${centerCenterPxY}" r="${centerLogoRadiusPx}" fill="#ffffff" />
    <!-- Gradient Circle -->
    <circle cx="${centerCenterPxX}" cy="${centerCenterPxY}" r="${centerLogoRadiusPx - 6}" fill="url(#badgeGrad)" stroke="#ea580c" stroke-width="3.5" />
    <circle cx="${centerCenterPxX}" cy="${centerCenterPxY}" r="${centerLogoRadiusPx - 20}" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4 6" opacity="0.6" />

    <!-- Lightning Bolt / Energy Vector -->
    <path d="M ${centerCenterPxX + 6} ${centerCenterPxY - 36} L ${centerCenterPxX - 18} ${centerCenterPxY + 2} L ${centerCenterPxX - 2} ${centerCenterPxY + 2} L ${centerCenterPxX - 8} ${centerCenterPxY + 36} L ${centerCenterPxX + 18} ${centerCenterPxY - 2} L ${centerCenterPxX + 2} ${centerCenterPxY - 2} Z" fill="url(#boltGrad)" />

    <text x="${centerCenterPxX}" y="${centerCenterPxY - 48}" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="800" letter-spacing="2.5" fill="#38bdf8">
      IEEE PELS
    </text>
    <text x="${centerCenterPxX}" y="${centerCenterPxY + 54}" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="900" letter-spacing="3" fill="#ffffff">
      SIA 2026
    </text>
  </g>

  <!-- Bottom CTA Section -->
  <g text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
    <rect x="${totalWidth / 2 - 280}" y="${totalHeight - 210}" width="560" height="46" rx="23" fill="url(#headerGradient)" />
    <text x="${totalWidth / 2}" y="${totalHeight - 181}" font-size="16.5" font-weight="800" letter-spacing="2" fill="#ffffff">
      SCAN FOR ATTENDEE FEEDBACK
    </text>
    <text x="${totalWidth / 2}" y="${totalHeight - 138}" font-size="13.5" font-weight="600" fill="#0f172a">
      Mandatory Submission for Official IEEE Certificate of Participation
    </text>
    <text x="${totalWidth / 2}" y="${totalHeight - 116}" font-size="12" font-weight="500" fill="#64748b">
      CHRIST (Deemed to be University) • Kengeri Campus, Bengaluru
    </text>
    <text x="${totalWidth / 2}" y="${totalHeight - 96}" font-size="11" font-family="monospace" font-weight="600" fill="#0284c7">
      https://forms.gle/cmyjq4Q8tgVz64Xe7
    </text>
  </g>
</svg>
`;

  // Write SVG & PNG
  const publicDir = path.resolve('public');
  const svgPath = path.join(publicDir, 'feedback-qr.svg');
  const pngPath = path.join(publicDir, 'feedback-qr.png');
  const artifactPath = path.resolve('C:\\Users\\SAMSUNG\\.gemini\\antigravity\\brain\\ec7ac7e6-310b-4fc8-8676-337c8c656cf3\\feedback-qr.png');

  fs.writeFileSync(svgPath, svgContent, 'utf8');

  await sharp(Buffer.from(svgContent))
    .png({ quality: 100 })
    .toFile(pngPath);

  fs.copyFileSync(pngPath, artifactPath);

  console.log('Saved SVG & PNG successfully.');

  // Now verify that the QR area scans cleanly!
  // We crop just the QR code region (from qrOffsetX-margin to qrOffsetX+qrPixelWidth+margin)
  const qrCrop = await sharp(pngPath)
    .extract({
      left: Math.floor(qrOffsetX - 20),
      top: Math.floor(qrOffsetY - 20),
      width: Math.floor(qrPixelWidth + 40),
      height: Math.floor(qrPixelWidth + 40),
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const decoded = jsQR(new Uint8ClampedArray(qrCrop.data), qrCrop.info.width, qrCrop.info.height);
  console.log('----------------------------------------------------');
  console.log('QR SCAN TEST RESULT:', decoded ? 'PASS' : 'FAIL');
  if (decoded) {
    console.log('Decoded Payload:', decoded.data);
  }
  console.log('----------------------------------------------------');
}

main().catch(console.error);
