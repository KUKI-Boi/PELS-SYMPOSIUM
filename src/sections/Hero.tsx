import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import { eventData } from '../data/event';
import InteractiveScribble from '../components/InteractiveScribble';
import ConcentricBlueprintRings from '../components/ConcentricBlueprintRings';
import robotImg from '../assets/hero-robot-orange-v2-transparent.png';

export default function Hero() {
  const [isTouched, setIsTouched] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* ── Layer 1: Base canvas — grid texture (z-0) ───────────── */}
      <div className="absolute inset-0 z-0 bg-hero-glow">
        <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-40" />
      </div>

      {/* ── Layer 2: Scribble field (z-10) ─────────────────────── */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {/* Left Side */}
        <InteractiveScribble top="25%" left="-2%" size={120} speed={40} rotateInit={15} variant={1} opacity={0.28} />
        <InteractiveScribble top="38%" left="1%" size={140} speed={48} rotateInit={-25} variant={3} opacity={0.27} /> 
        <InteractiveScribble top="-2%" left="10%" size={50} speed={60} rotateInit={-10} variant={2} opacity={0.30} />
        <InteractiveScribble top="55%" left="-4%" size={80} speed={55} rotateInit={45} variant={4} opacity={0.25} />
        <InteractiveScribble top="68%" left="-6%" size={130} speed={62} rotateInit={12} variant={1} opacity={0.26} />
        <InteractiveScribble top="75%" left="-2%"  size={110} speed={45} rotateInit={-30} variant={3} opacity={0.27} />
        <InteractiveScribble top="85%" left="15%" size={60} speed={70} rotateInit={20} variant={5} opacity={0.29} />
        <InteractiveScribble top="92%" left="28%" size={95} speed={55} rotateInit={-18} variant={4} opacity={0.28} />
        
        {/* Top Center & Bottom Center */}
        <InteractiveScribble top="-6%" left="42%" size={90} speed={80} rotateInit={-15} variant={1} opacity={0.26} /> 
        <InteractiveScribble top="-2%" left="58%" size={65} speed={75} rotateInit={25} variant={2} opacity={0.29} />
        <InteractiveScribble top="78%" left="45%" size={55} speed={65} rotateInit={5} variant={2} opacity={0.30} />
        <InteractiveScribble top="95%" left="40%" size={110} speed={45} rotateInit={-5} variant={3} opacity={0.27} />
        <InteractiveScribble top="75%" left="58%" size={130} speed={40} rotateInit={-25} variant={4} opacity={0.28} />

        {/* Right Side */}
        <InteractiveScribble top="5%"  left="85%" size={120} speed={50} rotateInit={10} variant={1} opacity={0.29} />
        <InteractiveScribble top="-5%" left="70%" size={80} speed={75} rotateInit={-40} variant={5} opacity={0.26} />
        <InteractiveScribble top="22%" left="96%" size={85} speed={60} rotateInit={18} variant={3} opacity={0.28} />
        <InteractiveScribble top="30%" left="62%" size={140} speed={35} rotateInit={55} variant={1} opacity={0.27} />
        <InteractiveScribble top="28%" left="80%" size={50} speed={60} rotateInit={-15} variant={2} opacity={0.30} />
        <InteractiveScribble top="42%" left="52%" size={75} speed={65} rotateInit={-10} variant={4} opacity={0.26} />
        <InteractiveScribble top="45%" left="92%" size={90} speed={85} rotateInit={15} variant={3} opacity={0.25} />
        <InteractiveScribble top="58%" left="98%" size={115} speed={50} rotateInit={-22} variant={1} opacity={0.29} />
        <InteractiveScribble top="70%" left="78%" size={150} speed={45} rotateInit={-10} variant={5} opacity={0.28} />
        <InteractiveScribble top="88%" left="90%" size={100} speed={70} rotateInit={35} variant={2} opacity={0.27} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Event Title & Details */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {/* Organizer Unit Header */}
          <div className="flex items-start gap-4">
            <div className="h-px w-8 bg-accent mt-2.5 shrink-0" />
            <p className="font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] text-accent uppercase leading-relaxed">
              IEEE PELS BANGALORE CHAPTER • CHRIST UNIVERSITY<br/>
              PELS SBC
            </p>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold uppercase leading-[1.02] tracking-tight">
            <span className="text-white block">SYMPOSIUM ON</span>
            <span className="text-accent block">INDUSTRIAL</span>
            <span className="text-secondaryAccent block">AUTOMATION</span>
            <span className="text-white block">2026</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-muted text-sm sm:text-base max-w-xl font-normal leading-relaxed mt-1">
            {eventData.subtitle}
          </p>

          {/* Bottom Info Row */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-4 mb-2 font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-3 text-foreground/80">
              <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="flex flex-col leading-snug">
                <span className="font-mono text-foreground font-medium">25–26 November</span>
                <span className="font-mono text-muted text-xs">2026</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-foreground/80">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="flex flex-col leading-snug">
                <span className="font-mono text-foreground font-medium">Christ University, Kengeri</span>
                <span className="font-mono text-muted text-xs">Campus</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-foreground/80">
              <Users className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="flex flex-col leading-snug">
                <span className="font-mono text-foreground font-bold text-sm">120</span>
                <span className="font-mono text-muted text-[11px] uppercase tracking-wider">ATTENDEES</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Robotic Arm Visual */}
        <motion.div 
          id="hero-robot-anchor"
          initial={{ opacity: 0, scale: 0.9, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: [-8, 8, -8] }}
          transition={{ 
            opacity: { duration: 1, delay: 0.2 },
            scale: { duration: 1, delay: 0.2 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsTouched(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsTouched(false), 300);
          }}
          onTouchCancel={() => setIsTouched(false)}
          onClick={() => setIsTouched(prev => !prev)}
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }}
          className={`flex justify-center items-center relative min-h-[380px] sm:min-h-[460px] lg:min-h-[580px] w-full max-w-full group cursor-pointer mt-4 sm:mt-8 lg:mt-0 select-none touch-manipulation overflow-visible ${isTouched || isHovered ? 'is-touched' : ''}`}
          style={{
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            KhtmlUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
          }}
        >
          {/* Tech Concentric Blueprint Rings Behind Model */}
          <ConcentricBlueprintRings stage={3} isTouched={isTouched} isHovered={isHovered} />

          <img 
            src={robotImg} 
            alt="Industrial Robot Arm Model" 
            draggable={false}
            onContextMenu={(e) => {
              e.preventDefault();
              e.stopPropagation();
              return false;
            }}
            className={`w-auto h-auto object-contain max-h-[360px] sm:max-h-[460px] lg:max-h-[560px] xl:max-h-[600px] transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none relative z-10 ${isTouched ? 'scale-105' : ''}`}
            style={{ 
              filter: 'drop-shadow(0px 25px 35px rgba(0, 0, 0, 0.45)) drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.3)) drop-shadow(0px 0px 25px rgba(56, 189, 248, 0.2))',
              WebkitTouchCallout: 'none',
              WebkitUserSelect: 'none',
              userSelect: 'none',
              KhtmlUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
