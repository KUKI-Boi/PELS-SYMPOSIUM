import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import { eventData } from '../data/event';
import InteractiveScribble from '../components/InteractiveScribble';
import robotImg from '../assets/hero-robot-orange-v2-transparent.png';

export default function Hero() {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-24 overflow-hidden">
      {/* ── Layer 1: Base canvas — grid texture (z-0) ───────────── */}
      <div className="absolute inset-0 z-0 bg-hero-glow">
        <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-40" />
      </div>

      {/* ── Layer 2: Scribble field (z-10) ───────────────────────
           Sits ABOVE the base canvas so the tint overlay cannot
           occlude them. Each scribble has a unique variant, speed,
           opacity, and rotation — they repel the cursor, wobble
           continuously, and parallax at different scroll rates.
      ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {/* Left Side - pushed to edges to avoid text overlap */}
        <InteractiveScribble top="25%" left="-2%" size={120} speed={40} rotateInit={15} variant={1} opacity={0.28} />
        <InteractiveScribble top="38%" left="1%" size={140} speed={48} rotateInit={-25} variant={3} opacity={0.27} /> 
        <InteractiveScribble top="-2%" left="10%" size={50} speed={60} rotateInit={-10} variant={2} opacity={0.30} />
        <InteractiveScribble top="55%" left="-4%" size={80} speed={55} rotateInit={45} variant={4} opacity={0.25} />
        <InteractiveScribble top="68%" left="-6%" size={130} speed={62} rotateInit={12} variant={1} opacity={0.26} /> {/* New: lower left gap */}
        <InteractiveScribble top="75%" left="-2%"  size={110} speed={45} rotateInit={-30} variant={3} opacity={0.27} />
        <InteractiveScribble top="85%" left="15%" size={60} speed={70} rotateInit={20} variant={5} opacity={0.29} />
        <InteractiveScribble top="92%" left="28%" size={95} speed={55} rotateInit={-18} variant={4} opacity={0.28} /> {/* New: bottom left gap */}
        
        {/* Top Center & Bottom Center */}
        <InteractiveScribble top="-6%" left="42%" size={90} speed={80} rotateInit={-15} variant={1} opacity={0.26} /> 
        <InteractiveScribble top="-2%" left="58%" size={65} speed={75} rotateInit={25} variant={2} opacity={0.29} /> {/* New: top center-right gap */}
        <InteractiveScribble top="78%" left="45%" size={55} speed={65} rotateInit={5} variant={2} opacity={0.30} />
        <InteractiveScribble top="95%" left="40%" size={110} speed={45} rotateInit={-5} variant={3} opacity={0.27} /> {/* New: bottom center gap */}
        <InteractiveScribble top="75%" left="58%" size={130} speed={40} rotateInit={-25} variant={4} opacity={0.28} />

        {/* Right Side */}
        <InteractiveScribble top="5%"  left="85%" size={120} speed={50} rotateInit={10} variant={1} opacity={0.29} />
        <InteractiveScribble top="-5%" left="70%" size={80} speed={75} rotateInit={-40} variant={5} opacity={0.26} />
        <InteractiveScribble top="22%" left="96%" size={85} speed={60} rotateInit={18} variant={3} opacity={0.28} /> {/* New: upper right edge gap */}
        <InteractiveScribble top="30%" left="62%" size={140} speed={35} rotateInit={55} variant={1} opacity={0.27} />
        <InteractiveScribble top="28%" left="80%" size={50} speed={60} rotateInit={-15} variant={2} opacity={0.30} />
        <InteractiveScribble top="42%" left="52%" size={75} speed={65} rotateInit={-10} variant={4} opacity={0.26} />
        <InteractiveScribble top="45%" left="92%" size={90} speed={85} rotateInit={15} variant={3} opacity={0.25} />
        <InteractiveScribble top="58%" left="98%" size={115} speed={50} rotateInit={-22} variant={1} opacity={0.29} /> {/* New: lower right edge gap */}
        <InteractiveScribble top="70%" left="78%" size={150} speed={45} rotateInit={-10} variant={5} opacity={0.28} />
        <InteractiveScribble top="88%" left="90%" size={100} speed={70} rotateInit={35} variant={2} opacity={0.27} />
      </div>


      <div className="max-w-7xl mx-auto px-6 w-full relative z-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-accent" />
            <p className="font-sans text-xs md:text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              {eventData.organizer.chapter} • {eventData.organizer.unit}
            </p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black uppercase leading-[1.1] tracking-tight text-gradient-ghost break-words">
            Symposium On <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondaryAccent" style={{ textShadow: 'none' }}>
              Industrial Automation
            </span><br/>
            2026
          </h1>
          
          <p className="text-muted text-lg max-w-xl font-light mt-4">
            {eventData.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-6 mb-8 font-mono text-sm">
            <div className="flex items-center gap-3 text-foreground/80">
              <Calendar className="w-5 h-5 text-accent" />
              <span>{eventData.date}</span>
            </div>
            <div className="flex items-center gap-3 text-foreground/80">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
              <span>{eventData.venue.institution}</span>
            </div>
            <div className="flex items-center gap-3 text-foreground/80">
              <Users className="w-5 h-5 text-accent" />
              <span>{eventData.capacity} ATTENDEES</span>
            </div>
          </div>

        </motion.div>

        {/* Abstract Industrial Visual - Robot Model */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: [-12, 12, -12] }}
          transition={{ 
            opacity: { duration: 1, delay: 0.2 },
            scale: { duration: 1, delay: 0.2 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
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
          className={`flex justify-center items-center relative min-h-[380px] sm:min-h-[460px] lg:min-h-[600px] w-full max-w-full group cursor-pointer mt-4 sm:mt-8 lg:mt-0 select-none touch-manipulation overflow-visible ${isTouched ? 'is-touched' : ''}`}
          style={{
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            KhtmlUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
          }}
        >
          {/* Background Atmospheric Radial Glows for the robot - full bleed, no bounding box */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-accent/25 blur-[70px] sm:blur-[110px] rounded-full -z-20 transition-all duration-700 ease-out pointer-events-none group-hover:bg-accent/40 group-hover:blur-[130px] ${isTouched ? 'bg-accent/40 blur-[130px]' : ''}`} />
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 lg:w-[480px] h-72 sm:h-96 lg:h-[480px] bg-secondaryAccent/20 blur-[80px] sm:blur-[130px] rounded-full -z-20 transition-all duration-700 ease-out pointer-events-none group-hover:bg-secondaryAccent/35 ${isTouched ? 'bg-secondaryAccent/35' : ''}`} />
          
          {/* Tech Concentric Blueprint Rings Behind Model */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[320px] lg:w-[320px] h-[260px] sm:h-[320px] lg:h-[320px] rounded-full border border-white/10 -z-10 transition-all duration-700 ease-out pointer-events-none group-hover:border-accent/40 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] group-hover:scale-105 ${isTouched ? 'border-accent/50 shadow-[0_0_35px_rgba(56,189,248,0.5)] scale-105' : ''}`} />
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[450px] lg:w-[460px] h-[340px] sm:h-[450px] lg:h-[460px] rounded-full border border-white/5 -z-10 transition-all duration-700 ease-out delay-75 pointer-events-none group-hover:border-accent/20 group-hover:shadow-[0_0_50px_rgba(56,189,248,0.2)] group-hover:scale-105 ${isTouched ? 'border-accent/30 shadow-[0_0_55px_rgba(56,189,248,0.3)] scale-105' : ''}`} />
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[580px] lg:w-[600px] h-[420px] sm:h-[580px] lg:h-[600px] rounded-full border border-white/5 -z-10 transition-all duration-700 ease-out delay-150 pointer-events-none group-hover:border-accent/10 group-hover:shadow-[0_0_70px_rgba(56,189,248,0.1)] group-hover:scale-105 ${isTouched ? 'border-accent/20 shadow-[0_0_75px_rgba(56,189,248,0.15)] scale-105' : ''}`} />

          <img 
            src={robotImg} 
            alt="Industrial Robot Arm Model" 
            draggable={false}
            onContextMenu={(e) => {
              e.preventDefault();
              e.stopPropagation();
              return false;
            }}
            className={`w-auto h-auto object-contain max-h-[340px] sm:max-h-[440px] lg:max-h-[550px] transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none relative z-10 ${isTouched ? 'scale-105' : ''}`}
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
