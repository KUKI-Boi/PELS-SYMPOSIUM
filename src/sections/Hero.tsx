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
          
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase leading-[1.1] tracking-tight text-gradient-ghost">
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
          animate={{ opacity: 1, scale: 1, y: [-15, 15, -15] }}
          transition={{ 
            opacity: { duration: 1, delay: 0.2 },
            scale: { duration: 1, delay: 0.2 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          onTouchStart={() => setIsTouched(true)}
          onTouchEnd={() => setIsTouched(false)}
          onTouchCancel={() => setIsTouched(false)}
          onClick={() => setIsTouched(prev => !prev)}
          onContextMenu={(e) => e.preventDefault()}
          className={`flex justify-center items-center relative h-[350px] sm:h-[450px] lg:h-[600px] w-full group cursor-pointer mt-8 lg:mt-0 select-none touch-manipulation ${isTouched ? 'is-touched' : ''}`}
          style={{
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none',
          }}
        >
          {/* Background Glows for the robot */}
          <div className={`absolute top-1/4 right-1/4 w-64 h-64 bg-accent/20 blur-[120px] rounded-full -z-20 transition-all duration-700 ease-out group-hover:bg-accent/40 group-hover:blur-[140px] ${isTouched ? 'bg-accent/40 blur-[140px]' : ''}`} />
          <div className={`absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondaryAccent/20 blur-[120px] rounded-full -z-20 transition-all duration-700 ease-out group-hover:bg-secondaryAccent/40 group-hover:blur-[140px] ${isTouched ? 'bg-secondaryAccent/40 blur-[140px]' : ''}`} />
          
          {/* Tech Circles Behind Model */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[300px] h-[280px] sm:h-[300px] rounded-full border border-white/5 -z-10 transition-all duration-700 ease-out group-hover:border-accent/40 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] group-hover:scale-105 ${isTouched ? 'border-accent/50 shadow-[0_0_35px_rgba(56,189,248,0.5)] scale-105' : ''}`} />
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[450px] h-[400px] sm:h-[450px] rounded-full border border-white/5 -z-10 transition-all duration-700 ease-out delay-75 group-hover:border-accent/20 group-hover:shadow-[0_0_50px_rgba(56,189,248,0.2)] group-hover:scale-105 ${isTouched ? 'border-accent/30 shadow-[0_0_55px_rgba(56,189,248,0.3)] scale-105' : ''}`} />
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[600px] h-[520px] sm:h-[600px] rounded-full border border-white/5 -z-10 transition-all duration-700 ease-out delay-150 group-hover:border-accent/10 group-hover:shadow-[0_0_70px_rgba(56,189,248,0.1)] group-hover:scale-105 ${isTouched ? 'border-accent/20 shadow-[0_0_75px_rgba(56,189,248,0.15)] scale-105' : ''}`} />

          <img 
            src={robotImg} 
            alt="Industrial Robot Arm Model" 
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className={`w-full h-auto object-contain max-h-[340px] sm:max-h-[440px] lg:max-h-[550px] transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none ${isTouched ? 'scale-105' : ''}`}
            style={{ 
              filter: 'drop-shadow(0px 30px 40px rgba(0, 0, 0, 0.25)) drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.15))',
              WebkitTouchCallout: 'none',
              WebkitUserSelect: 'none',
              userSelect: 'none',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
