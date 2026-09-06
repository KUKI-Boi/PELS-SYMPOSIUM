const fs = require('fs');
const files = [
  'src/App.tsx',
  'src/layout/Footer.tsx',
  'src/layout/Header.tsx',
  'src/sections/About.tsx',
  'src/sections/Committee.tsx',
  'src/sections/Contact.tsx',
  'src/sections/Hero.tsx',
  'src/sections/Presentations.tsx',
  'src/sections/Program.tsx',
  'src/sections/Registration.tsx',
  'src/sections/Speakers.tsx',
  'src/sections/Venue.tsx',
  'src/components/Reveal.tsx',
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  const changed = c
    .replace(/^import React from 'react';\n/m, '')
    .replace(/^import { ScrollTrigger } from 'gsap\/ScrollTrigger';\n/m, '')
    .replace(/^import \{ useState, useRef, useEffect \} from 'react';\n/m, "import { useState, useRef, useEffect } from 'react';\n")
  ;
  // For Reveal specifically, we need ScrollTrigger — keep it
  if (f.includes('Reveal')) return;
  if (c !== changed) {
    fs.writeFileSync(f, changed);
    console.log('Fixed: ' + f);
  }
});
