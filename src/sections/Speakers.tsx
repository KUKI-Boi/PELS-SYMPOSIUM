import { Section, SectionHeader } from '../components/Section';
import { Sparkles, Cpu, Activity, Network, Lock, Radio } from 'lucide-react';
import Reveal from '../components/Reveal';

interface SpeakerTeaser {
  id: number;
  role: string;
  badge: string;
  title: string;
  domain: string;
  session: string;
  icon: typeof Sparkles;
  accentColor: string;
  glowColor: string;
  borderHover: string;
}

const speakerTeasers: SpeakerTeaser[] = [
  {
    id: 1,
    role: 'KEYNOTE',
    badge: 'KEYNOTE SPEAKER',
    title: 'Keynote Address by an Expert',
    domain: 'IEEE PELS & Tier-1 Industrial Corporates',
    session: 'Day 1: 10:15 AM – 11:00 AM',
    icon: Sparkles,
    accentColor: 'text-accent',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    borderHover: 'group-hover:border-accent/50',
  },
  {
    id: 2,
    role: 'PLC & HMI',
    badge: 'AUTOMATION SPECIALIST',
    title: 'PLC & HMI Workshop Lead',
    domain: 'Basics & Advance PLC and HMI Programming',
    session: 'Day 1 & Day 2 Workshop Sessions',
    icon: Cpu,
    accentColor: 'text-amber-400',
    glowColor: 'rgba(251, 191, 36, 0.25)',
    borderHover: 'group-hover:border-amber-400/50',
  },
  {
    id: 3,
    role: 'VFD DRIVES',
    badge: 'DRIVES SPECIALIST',
    title: 'Variable Frequency Drive Expert',
    domain: 'Motor Drives, Power Converters & Control',
    session: 'Day 2: 10:30 AM – 11:30 AM',
    icon: Activity,
    accentColor: 'text-sky-400',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    borderHover: 'group-hover:border-sky-400/50',
  },
  {
    id: 4,
    role: 'NODE-RED',
    badge: 'IT-OT SPECIALIST',
    title: 'Smart Factory IoT Engineer',
    domain: 'Industrial IT-OT Integration Architecture',
    session: 'Day 2: 2:45 PM – 4:00 PM',
    icon: Network,
    accentColor: 'text-orange-400',
    glowColor: 'rgba(249, 115, 22, 0.25)',
    borderHover: 'group-hover:border-orange-400/50',
  },
];

export default function Speakers() {
  return (
    <Section id="speakers" className="bg-surface relative border-b border-light/5">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent font-mono text-[11px] sm:text-xs tracking-wider mb-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="font-semibold uppercase tracking-widest">Official Lineup Reveal</span>
          <span className="text-secondaryAccent/40">•</span>
          <span className="text-secondaryAccent font-mono">Announcements in Progress</span>
        </div>
      </div>

      <SectionHeader 
        title="Featured Speakers" 
        subtitle="Learn from leading industry experts and academic professionals shaping the future of industrial electronics."
      />

      <Reveal stagger staggerDelay={0.1} className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {speakerTeasers.map((teaser) => {
          const Icon = teaser.icon;
          return (
            <div 
              key={teaser.id} 
              className={`glass-panel border border-light/10 interactive-card ${teaser.borderHover} group rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300`}
            >
              {/* High-tech encrypted radar visual frame */}
              <div className="h-36 sm:h-40 bg-gradient-to-b from-[#0b1028] to-surface/90 border-b border-light/10 flex items-center justify-center relative overflow-hidden">
                {/* Tech grid blueprint pattern */}
                <div 
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Cybernetic radar rings */}
                <div className="absolute w-28 h-28 rounded-full border border-accent/10 animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-20 h-20 rounded-full border border-dashed border-accent/20" />
                <div className="absolute w-12 h-12 rounded-full border border-accent/15" />

                {/* HUD corner brackets */}
                <span className="absolute top-2.5 left-2.5 font-mono text-[9px] text-secondaryAccent/40">┌</span>
                <span className="absolute top-2.5 right-2.5 font-mono text-[9px] text-secondaryAccent/40">┐</span>
                <span className="absolute bottom-2.5 left-2.5 font-mono text-[9px] text-secondaryAccent/40">└</span>
                <span className="absolute bottom-2.5 right-2.5 font-mono text-[9px] text-secondaryAccent/40">┘</span>

                {/* Top status indicator tag */}
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded bg-background/80 border border-light/10 text-[9px] font-mono text-muted z-20">
                  <Lock className="w-2.5 h-2.5 text-accent" />
                  <span>PHASE 1</span>
                </div>

                {/* Center glowing holographic icon */}
                <div 
                  className="relative z-10 w-14 h-14 rounded-2xl bg-surface/80 border border-light/15 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{
                    boxShadow: `0 0 25px ${teaser.glowColor}`,
                  }}
                >
                  <Icon className={`w-7 h-7 ${teaser.accentColor} transition-transform duration-300 group-hover:rotate-6`} />
                </div>

                {/* Bottom role badge inside image frame */}
                <div className="absolute bottom-2.5 left-2.5 z-20">
                  <span className="px-2 py-0.5 bg-background/90 border border-light/20 text-foreground font-mono text-[9px] uppercase tracking-wider rounded font-medium shadow-sm">
                    {teaser.badge}
                  </span>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-base font-semibold mb-1 text-foreground group-hover:text-accent transition-colors">
                    {teaser.title}
                  </h4>
                  <p className="text-xs text-secondaryAccent mb-3 font-light leading-snug">
                    {teaser.domain}
                  </p>
                  
                  <div className="space-y-1 text-xs text-muted font-light mb-4">
                    <p className="flex items-center gap-1.5">
                      <span className="text-secondaryAccent/70 font-mono text-[11px]">Session:</span>
                      <span className="text-foreground/90 font-medium">{teaser.session}</span>
                    </p>
                  </div>
                </div>

                {/* Bottom cybernetic teaser status */}
                <div className="pt-3 border-t border-light/10 flex items-center justify-between font-mono text-[10px]">
                  <span className="flex items-center gap-1.5 text-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Revealing Soon
                  </span>
                  <span className="text-muted/60 tracking-wider">
                    IEEE PELS
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>

      {/* Sleek bottom information banner */}
      <div className="mt-8 sm:mt-10 p-4 rounded-xl border border-accent/20 bg-accent/5 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
            <Radio className="w-4 h-4 text-accent animate-pulse" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-medium text-foreground">
              Official Speaker Dossiers & Topic Abstracts
            </p>
            <p className="text-[11px] sm:text-xs text-secondaryAccent">
              Full profiles, professional bios, and keynotes will be unveiled prior to symposium dates.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="px-3 py-1 rounded bg-background/60 border border-light/10 text-muted font-mono text-[10px] tracking-widest uppercase">
            Curated by IEEE PELS
          </span>
        </div>
      </div>
    </Section>
  );
}
