import { Section, SectionHeader } from '../components/Section';
import { eventData } from '../data/event';
import { Cpu, CheckCircle2, Award, Sparkles, GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal';

const speakerIcons = [Cpu, Sparkles];

export default function Speakers() {
  return (
    <Section id="speakers" className="bg-surface relative border-b border-light/5">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent font-mono text-[11px] sm:text-xs tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="font-semibold uppercase tracking-widest">Distinguished Speaker Lineup</span>
          <span className="text-secondaryAccent/40">•</span>
          <span className="text-secondaryAccent font-mono">IEEE PELS & IES Sessions</span>
        </div>
      </div>

      <SectionHeader 
        title="Featured Speakers" 
        subtitle="Learn from leading academic mentors and researchers shaping modern industrial automation and robotics."
      />

      <Reveal stagger staggerDelay={0.15} className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
        {eventData.speakers.map((speaker, index) => {
          const Icon = speakerIcons[index] || GraduationCap;
          return (
            <div 
              key={speaker.id} 
              className="glass-panel border border-light/10 interactive-card hover:border-accent/40 group rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              {/* High-tech Profile Banner Frame */}
              <div className="h-40 sm:h-44 bg-gradient-to-b from-[#0b1028] to-surface/95 border-b border-light/10 flex items-center justify-center relative overflow-hidden">
                {/* Tech grid blueprint pattern */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Cybernetic telemetry rings */}
                <div className="absolute w-32 h-32 rounded-full border border-accent/15 animate-[spin_25s_linear_infinite]" />
                <div className="absolute w-24 h-24 rounded-full border border-dashed border-accent/20" />
                <div className="absolute w-14 h-14 rounded-full border border-accent/15" />

                {/* HUD corner brackets */}
                <span className="absolute top-3 left-3 font-mono text-[10px] text-secondaryAccent/40">┌</span>
                <span className="absolute top-3 right-3 font-mono text-[10px] text-secondaryAccent/40">┐</span>
                <span className="absolute bottom-3 left-3 font-mono text-[10px] text-secondaryAccent/40">└</span>
                <span className="absolute bottom-3 right-3 font-mono text-[10px] text-secondaryAccent/40">┘</span>

                {/* Top Status Tag */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-400 z-20">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>CONFIRMED SPEAKER</span>
                </div>

                {/* Center Hologram Shield Emblem */}
                <div 
                  className="relative z-10 w-16 h-16 rounded-2xl bg-surface/90 border border-accent/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{
                    boxShadow: index === 0 
                      ? '0 0 30px rgba(56, 189, 248, 0.25)' 
                      : '0 0 30px rgba(255, 132, 12, 0.25)',
                  }}
                >
                  <Icon className={`w-8 h-8 ${index === 0 ? 'text-accent' : 'text-[#ff840c]'} transition-transform duration-300 group-hover:rotate-6`} />
                </div>

                {/* Bottom Role Pill inside image frame */}
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="px-2.5 py-0.5 bg-background/90 border border-light/20 text-foreground font-mono text-[10px] uppercase tracking-wider rounded font-medium shadow-sm">
                    {speaker.role}
                  </span>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-1 text-foreground group-hover:text-accent transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondaryAccent font-medium mb-1">
                    {speaker.designation}
                  </p>
                  <p className="text-xs text-muted font-light mb-4">
                    {speaker.department} • <span className="text-foreground/80">{speaker.institution}</span>
                  </p>
                  
                  {/* Session Focus */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-light/5 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-accent block mb-1">
                      Speaker Session Focus
                    </span>
                    <p className="text-xs sm:text-sm text-foreground/90 font-medium">
                      {speaker.session}
                    </p>
                  </div>

                  {/* Topic Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {speaker.topics.map((topic, i) => (
                      <span 
                        key={i} 
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface/80 border border-light/10 text-muted"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Status Footer (Revealing soon removed) */}
                <div className="pt-3 border-t border-light/10 flex items-center justify-between font-mono text-xs">
                  <span className="flex items-center gap-1.5 text-accent font-medium">
                    <Award className="w-3.5 h-3.5 text-accent" />
                    Speaker Session
                  </span>
                  <span className="text-muted/70 tracking-wider text-[11px]">
                    CHRIST UNIVERSITY
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>

      {/* Information Banner */}
      <div className="mt-8 sm:mt-10 max-w-4xl mx-auto p-4 rounded-xl border border-accent/20 bg-accent/5 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-medium text-foreground">
              Interactive Speaker Sessions & Technical Mentorship
            </p>
            <p className="text-[11px] sm:text-xs text-secondaryAccent">
              Engage directly with faculty experts and researchers in modern industrial automation and robotics.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="px-3 py-1 rounded bg-background/60 border border-light/10 text-muted font-mono text-[10px] tracking-widest uppercase">
            IEEE PELS & IES
          </span>
        </div>
      </div>
    </Section>
  );
}
