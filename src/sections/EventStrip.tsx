import React from 'react';
import { motion } from 'framer-motion';

const items = [
  "FREE REGISTRATION FOR EVERYONE",
  "25–26 NOVEMBER 2026",
  "INDUSTRIAL AUTOMATION",
  "AUTOMATION CONNECTS IDEAS TO A SMARTER TOMORROW",
  "PLC • HMI • VFD • NODE-RED",
  "IT-OT INTEGRATION",
  "IEEE PELS & IEEE IES",
  "PEOPLE | TECHNOLOGY | INDUSTRY | A SUSTAINABLE TOMORROW",
  "ZERO PARTICIPATION FEE",
  "ACADEMIA × INDUSTRY",
  "HANDS-ON WORKSHOPS",
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
