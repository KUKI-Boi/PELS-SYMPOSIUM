import QRCode from 'qrcode';
import jsQR from 'jsqr';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const URL = 'https://forms.gle/cmyjq4Q8tgVz64Xe7';

async function generateOfficialQR() {
  const cardWidth = 1200;
  const cardHeight = 1500;

  const size = 37;
  const margin = 3;
  const scale = 22; // QR size = (37 + 6) * 22 = 946 px
  const qrPixelDim = (size + margin * 2) * scale; // 946 px

  console.log(`Generating QR code buffer (${qrPixelDim}x${qrPixelDim})...`);
  const qrBaseBuffer = await QRCode.toBuffer(URL, {
    errorCorrectionLevel: 'H',
    margin: margin,
    scale: scale,
    color: { dark: '#081325', light: '#ffffff' }
  });

  // Center logo overlay for the QR code
  const logoRadius = 104;
  const centerCoord = qrPixelDim / 2;

  const qrCenterOverlay = `
    <svg width="${qrPixelDim}" height="${qrPixelDim}">
      <!-- Outer White Border Mask -->
      <circle cx="${centerCoord}" cy="${centerCoord}" r="${logoRadius}" fill="#ffffff" />
      <circle cx="${centerCoord}" cy="${centerCoord}" r="${logoRadius - 6}" fill="#081325" stroke="#ff840c" stroke-width="4.5" />
      <circle cx="${centerCoord}" cy="${centerCoord}" r="${logoRadius - 22}" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4 6" opacity="0.7" />

      <!-- Energy Lightning Bolt -->
      <path d="M ${centerCoord + 7} ${centerCoord - 38} L ${centerCoord - 18} ${centerCoord + 2} L ${centerCoord - 2} ${centerCoord + 2} L ${centerCoord - 8} ${centerCoord + 38} L ${centerCoord + 18} ${centerCoord - 2} L ${centerCoord + 2} ${centerCoord - 2} Z" fill="#ffb703" />

      <!-- Typography -->
      <text x="${centerCoord}" y="${centerCoord - 48}" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="800" letter-spacing="2.5" fill="#38bdf8">
        IEEE PELS
      </text>
      <text x="${centerCoord}" y="${centerCoord + 58}" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="900" letter-spacing="3" fill="#ffffff">
        SIA 2026
      </text>
    </svg>
  `;

  const compositedQR = await sharp(qrBaseBuffer)
    .composite([{ input: Buffer.from(qrCenterOverlay) }])
    .png()
    .toBuffer();

  // Test scan the composited QR itself
  const checkRaw = await sharp(compositedQR).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const checkCode = jsQR(new Uint8ClampedArray(checkRaw.data), checkRaw.info.width, checkRaw.info.height);
  console.log('Composited QR scan check:', checkCode ? 'PASS (' + checkCode.data + ')' : 'FAIL');

  // Now assemble the full high-res poster card (1200 x 1500)
  const qrTop = 220;
  const qrLeft = (cardWidth - qrPixelDim) / 2; // (1200 - 946) / 2 = 127 px

  const posterSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${cardWidth}" height="${cardHeight}" viewBox="0 0 ${cardWidth} ${cardHeight}">
      <defs>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="16" stdDeviation="30" flood-color="#0284c7" flood-opacity="0.16" />
          <feDropShadow dx="0" dy="4" stdDeviation="10" flood-color="#000000" flood-opacity="0.08" />
        </filter>
        <linearGradient id="primaryGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#0284c7" />
          <stop offset="100%" stop-color="#ff840c" />
        </linearGradient>
      </defs>

      <!-- Outer Light Background -->
      <rect width="${cardWidth}" height="${cardHeight}" fill="#f1f5f9" />

      <!-- Main White Content Card -->
      <rect x="40" y="36" width="${cardWidth - 80}" height="${cardHeight - 72}" rx="36" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" filter="url(#shadow)" />

      <!-- Blueprint Framing Accents -->
      <path d="M 60 74 L 60 52 L 82 52" fill="none" stroke="#0284c7" stroke-width="3.5" stroke-linecap="round" />
      <path d="M ${cardWidth - 60} 74 L ${cardWidth - 60} 52 L ${cardWidth - 82} 52" fill="none" stroke="#ff840c" stroke-width="3.5" stroke-linecap="round" />
      <path d="M 60 ${cardHeight - 74} L 60 ${cardHeight - 52} L 82 ${cardHeight - 52}" fill="none" stroke="#0284c7" stroke-width="3.5" stroke-linecap="round" />
      <path d="M ${cardWidth - 60} ${cardHeight - 74} L ${cardWidth - 60} ${cardHeight - 52} L ${cardWidth - 82} ${cardHeight - 52}" fill="none" stroke="#ff840c" stroke-width="3.5" stroke-linecap="round" />

      <!-- Header Content -->
      <g text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
        <rect x="${cardWidth / 2 - 250}" y="56" width="500" height="28" rx="14" fill="#0284c7" fill-opacity="0.1" />
        <text x="${cardWidth / 2}" y="74.5" font-size="12" font-weight="700" letter-spacing="2.5" fill="#0284c7">
          IEEE PELS &amp; IEEE IES BANGALORE CHAPTERS
        </text>
        <text x="${cardWidth / 2}" y="118" font-size="27" font-weight="900" letter-spacing="1" fill="#081325">
          SYMPOSIUM ON INDUSTRIAL AUTOMATION 2026
        </text>
        <text x="${cardWidth / 2}" y="142" font-size="13" font-weight="600" letter-spacing="3" fill="#64748b">
          AUTOMATION CONNECTS IDEAS TO A SMARTER TOMORROW
        </text>
        <text x="${cardWidth / 2}" y="166" font-size="12" font-weight="500" fill="#94a3b8">
          CHRIST (Deemed to be University) • Kengeri Campus, Bengaluru
        </text>
      </g>

      <!-- Frame around the QR Code -->
      <rect x="${qrLeft - 8}" y="${qrTop - 8}" width="${qrPixelDim + 16}" height="${qrPixelDim + 16}" rx="18" fill="none" stroke="#e2e8f0" stroke-width="1.5" />

      <!-- Footer Call to Action -->
      <g text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif">
        <rect x="${cardWidth / 2 - 280}" y="${cardHeight - 270}" width="560" height="52" rx="26" fill="url(#primaryGrad)" />
        <text x="${cardWidth / 2}" y="${cardHeight - 238}" font-size="18" font-weight="800" letter-spacing="2" fill="#ffffff">
          SCAN FOR ATTENDEE FEEDBACK
        </text>

        <text x="${cardWidth / 2}" y="${cardHeight - 188}" font-size="14.5" font-weight="700" fill="#081325">
          Mandatory Submission for IEEE Certificate of Participation
        </text>
        <text x="${cardWidth / 2}" y="${cardHeight - 162}" font-size="12.5" font-weight="400" fill="#64748b">
          Department of Electrical and Electronics Engineering • 25–26 November 2026
        </text>
        <text x="${cardWidth / 2}" y="${cardHeight - 138}" font-size="12" font-family="monospace" font-weight="600" fill="#0284c7">
          https://forms.gle/cmyjq4Q8tgVz64Xe7
        </text>
      </g>
    </svg>
  `;

  // Composite the final poster
  const finalPoster = await sharp(Buffer.from(posterSvg))
    .composite([
      {
        input: compositedQR,
        top: Math.round(qrTop),
        left: Math.round(qrLeft),
      }
    ])
    .png({ quality: 100 })
    .toBuffer();

  const publicPng = path.resolve('public/feedback-qr.png');
  const artifactPng = path.resolve('C:\\Users\\SAMSUNG\\.gemini\\antigravity\\brain\\ec7ac7e6-310b-4fc8-8676-337c8c656cf3\\feedback-qr.png');

  fs.writeFileSync(publicPng, finalPoster);
  fs.writeFileSync(artifactPng, finalPoster);

  console.log('Saved Final Poster to:', publicPng);
  console.log('Saved Final Poster to Artifact:', artifactPng);

  // Full Poster Scan Verification
  const testFull = await sharp(finalPoster).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const finalCode = jsQR(new Uint8ClampedArray(testFull.data), testFull.info.width, testFull.info.height);
  console.log('Full Poster Decoded Result:', finalCode ? 'PASS (' + finalCode.data + ')' : 'FAIL');
}

generateOfficialQR().catch(console.error);
