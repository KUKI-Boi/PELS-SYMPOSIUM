import React from 'react';
import { motion } from 'framer-motion';

const items = [
  "INDUSTRIAL AUTOMATION",
  "INDUSTRIAL ELECTRONICS",
  "PLC",
  "HMI",
  "VFD",
  "ACADEMIA × INDUSTRY",
  "IEEE PELS",
  "INNOVATION",
  "PRECISION",
];

export default function EventStrip() {
  return (
    <div className="w-full bg-accent text-background py-3 overflow-hidden flex whitespace-nowrap relative border-y border-accent/50 z-30">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          duration: 30, 
          ease: "linear" 
        }}
        className="flex gap-8 items-center"
      >
        {/* Render twice for seamless loop */}
        {[...items, ...items, ...items].map((item, index) => (
          <React.Fragment key={index}>
            <span className="font-display font-bold uppercase tracking-widest text-sm">
              {item}
            </span>
            <span className="w-1.5 h-1.5 bg-background rounded-full" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
