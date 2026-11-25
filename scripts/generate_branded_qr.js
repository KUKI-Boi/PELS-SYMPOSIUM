import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const URL = 'https://forms.gle/cmyjq4Q8tgVz64Xe7';

async function generateBrandedQR() {
  console.log('Generating QR matrix with Level H for:', URL);
  const qr = QRCode.create(URL, { errorCorrectionLevel: 'H' });
  const size = qr.modules.size; // 37
  
  const width = 1200;
  const height = 1350; // extra space for bottom label
  const qrAreaSize = 920;
  const offsetX = (width - qrAreaSize) / 2; // 140
  const offsetY = 140;
  const cellSize = qrAreaSize / size; // ~24.86 px
  
  const centerRow = (size - 1) / 2; // 18
  const centerCol = (size - 1) / 2; // 18
  const logoRadiusInModules = 4.8; // ~119 px radius

  // Check if a coordinate is in finder patterns
  function isFinderPattern(r, c) {
    if (r <= 7 && c <= 7) return true; // Top-Left
    if (r <= 7 && c >= size - 8) return true; // Top-Right
    if (r >= size - 8 && c <= 7) return true; // Bottom-Left
    return false;
  }

  // Check if a coordinate is in the central logo exclusion zone
  function isInCenterLogo(r, c) {
    const dist = Math.hypot(r - centerRow, c - centerCol);
    return dist < logoRadiusInModules;
  }

  // Build SVG data modules
  let modulesSvg = '';
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (isFinderPattern(r, c)) continue;
      if (isInCenterLogo(r, c)) continue;

      if (qr.modules.get(r, c)) {
        const cx = offsetX + (c + 0.5) * cellSize;
        const cy = offsetY + (r + 0.5) * cellSize;
        
        // Gradient color based on position
        const distFromCenter = Math.hypot(c - centerCol, r - centerRow) / (size / 1.4);
        const radius = cellSize * 0.42;
        
        // Color transition from vibrant Cyan/Navy to Orange
        let fillColor;
        if (distFromCenter < 0.45) {
          fillColor = '#0284c7'; // Vibrant Cyan Blue
        } else if (distFromCenter < 0.75) {
          fillColor = '#0f172a'; // Deep Navy
        } else {
          fillColor = '#ff840c'; // PELS Orange
        }

        modulesSvg += `<circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="${radius.toFixed(2)}" fill="${fillColor}" />\n`;
      }
    }
  }

  // Helper to draw eye (finder pattern) with concentric circles
  function drawEye(centerModuleR, centerModuleC, outerColor, innerColor) {
    const cx = offsetX + (centerModuleC + 0.5) * cellSize;
    const cy = offsetY + (centerModuleR + 0.5) * cellSize;
    const rOuter = 3.5 * cellSize;
    const rMiddle = 2.5 * cellSize;
    const rInner = 1.5 * cellSize;

    return `
      <!-- Eye at (${centerModuleR}, ${centerModuleC}) -->
      <g>
        <circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="${rOuter.toFixed(2)}" fill="${outerColor}" />
        <circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="${rMiddle.toFixed(2)}" fill="#ffffff" />
        <circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="${rInner.toFixed(2)}" fill="${innerColor}" />
        <circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="${(rInner * 0.35).toFixed(2)}" fill="#ffffff" opacity="0.3" />
      </g>
    `;
  }

  const eyeTL = drawEye(3, 3, '#0f172a', '#ff840c');
  const eyeTR = drawEye(3, size - 4, '#0f172a', '#0284c7');
  const eyeBL = drawEye(size - 4, 3, '#0f172a', '#0284c7');

  const centerPxX = offsetX + (centerCol + 0.5) * cellSize;
  const centerPxY = offsetY + (centerRow + 0.5) * cellSize;
  const centerPixelRadius = logoRadiusInModules * cellSize;

  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <!-- Card Background Shadow & Gradients -->
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#0284c7" flood-opacity="0.18" />
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000000" flood-opacity="0.08" />
    </filter>

    <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000000" flood-opacity="0.35" />
    </filter>

    <linearGradient id="headerGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#ff840c" />
    </linearGradient>

    <linearGradient id="centerBadgeGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#021024" />
    </linearGradient>

    <linearGradient id="boltGrad" x1="0" y1="0" x2="0.8" y2="1">
      <stop offset="0%" stop-color="#ffe272" />
      <stop offset="100%" stop-color="#ff840c" />
    </linearGradient>
  </defs>

  <!-- Canvas Outer Background -->
  <rect width="${width}" height="${height}" fill="#f8fafc" />

  <!-- Inner Branded Card -->
  <rect x="40" y="30" width="${width - 80}" height="${height - 60}" rx="36" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" filter="url(#cardShadow)" />

  <!-- Subtle Blueprint Tech Corners -->
  <path d="M 60 70 L 60 50 L 80 50" fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round" />
  <path d="M ${width - 60} 70 L ${width - 60} 50 L ${width - 80} 50" fill="none" stroke="#ff840c" stroke-width="3" stroke-linecap="round" />
  <path d="M 60 ${height - 70} L 60 ${height - 50} L 80 ${height - 50}" fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round" />
  <path d="M ${width - 60} ${height - 70} L ${width - 60} ${height - 50} L ${width - 80} ${height - 50}" fill="none" stroke="#ff840c" stroke-width="3" stroke-linecap="round" />

  <!-- Top Header Title -->
  <g text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
    <rect x="${width / 2 - 230}" y="48" width="460" height="26" rx="13" fill="#0284c7" fill-opacity="0.1" />
    <text x="${width / 2}" y="65" font-size="12" font-weight="700" letter-spacing="2.5" fill="#0284c7">
      IEEE PELS &amp; IEEE IES BANGALORE CHAPTERS
    </text>
    <text x="${width / 2}" y="105" font-size="24" font-weight="900" letter-spacing="1" fill="#0f172a">
      SYMPOSIUM ON INDUSTRIAL AUTOMATION 2026
    </text>
    <text x="${width / 2}" y="125" font-size="12" font-weight="500" letter-spacing="3" fill="#64748b">
      AUTOMATION CONNECTS IDEAS TO A SMARTER TOMORROW
    </text>
  </g>

  <!-- QR Matrix Modules -->
  <g id="qrModules">
    ${modulesSvg}
  </g>

  <!-- Eyes / Finder Patterns -->
  ${eyeTL}
  ${eyeTR}
  ${eyeBL}

  <!-- Central Logo Badge (Layered & Circular with Shadow) -->
  <g id="centerLogo" filter="url(#logoGlow)">
    <!-- Outer White Ring Isolation Zone -->
    <circle cx="${centerPxX.toFixed(2)}" cy="${centerPxY.toFixed(2)}" r="${centerPixelRadius.toFixed(2)}" fill="#ffffff" />
    <circle cx="${centerPxX.toFixed(2)}" cy="${centerPxY.toFixed(2)}" r="${(centerPixelRadius - 6).toFixed(2)}" fill="url(#centerBadgeGrad)" stroke="#ff840c" stroke-width="3" />
    
    <!-- Orbit Rings -->
    <circle cx="${centerPxX.toFixed(2)}" cy="${centerPxY.toFixed(2)}" r="${(centerPixelRadius - 22).toFixed(2)}" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4 6" opacity="0.6" />

    <!-- Central Lightning Bolt Icon -->
    <path d="M ${centerPxX + 8} ${centerPxY - 42} L ${centerPxX - 22} ${centerPxY + 2} L ${centerPxX - 2} ${centerPxY + 2} L ${centerPxX - 10} ${centerPxY + 42} L ${centerPxX + 22} ${centerPxY - 4} L ${centerPxX + 2} ${centerPxY - 4} Z" fill="url(#boltGrad)" />

    <!-- Small SIA 2026 label inside badge -->
    <text x="${centerPxX}" y="${centerPxY + 62}" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" letter-spacing="3" fill="#ffffff">
      SIA 2026
    </text>
    <text x="${centerPxX}" y="${centerPxY - 54}" text-anchor="middle" font-family="'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="700" letter-spacing="2" fill="#38bdf8">
      IEEE PELS
    </text>
  </g>

  <!-- Bottom CTA & Instructions -->
  <g text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
    <!-- Highlight Pill Box -->
    <rect x="${width / 2 - 280}" y="${height - 235}" width="560" height="48" rx="24" fill="url(#headerGrad)" />
    <text x="${width / 2}" y="${height - 204}" font-size="18" font-weight="800" letter-spacing="1.5" fill="#ffffff">
      SCAN FOR ATTENDEE FEEDBACK
    </text>

    <!-- Subtext Details -->
    <text x="${width / 2}" y="${height - 160}" font-size="14" font-weight="600" fill="#0f172a">
      Mandatory Submission for Official IEEE Certificate of Participation
    </text>
    <text x="${width / 2}" y="${height - 138}" font-size="12" font-weight="400" fill="#64748b">
      CHRIST (Deemed to be University) • Kengeri Campus, Bengaluru
    </text>
    <text x="${width / 2}" y="${height - 118}" font-size="11" font-family="monospace" font-weight="500" fill="#0284c7">
      https://forms.gle/cmyjq4Q8tgVz64Xe7
    </text>
  </g>
</svg>
`;

  // Output paths
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const svgPath = path.join(publicDir, 'feedback-qr.svg');
  const pngPath = path.join(publicDir, 'feedback-qr.png');
  const artifactPath = path.resolve('C:\\Users\\SAMSUNG\\.gemini\\antigravity\\brain\\ec7ac7e6-310b-4fc8-8676-337c8c656cf3\\feedback-qr.png');

  fs.writeFileSync(svgPath, svgContent, 'utf8');
  console.log('Saved SVG to:', svgPath);

  // Convert to high-resolution PNG (1200x1350)
  await sharp(Buffer.from(svgContent))
    .png({ quality: 100 })
    .toFile(pngPath);
  console.log('Saved PNG to:', pngPath);

  // Also save copy to brain artifact directory so it's readily accessible
  fs.copyFileSync(pngPath, artifactPath);
  console.log('Saved Artifact to:', artifactPath);
}

generateBrandedQR().catch(err => {
  console.error('Error generating QR:', err);
  process.exit(1);
});
