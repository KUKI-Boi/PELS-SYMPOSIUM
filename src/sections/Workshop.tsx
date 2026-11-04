import React from 'react';
import { Section, SectionHeader } from '../components/Section';
import { eventData } from '../data/event';
import { Cpu, MonitorPlay, Activity, Network, ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from '../components/Button';
import Reveal from '../components/Reveal';

export default function Workshop() {
  const icons = [Cpu, MonitorPlay, Activity, Network];

  return (
    <Section id="workshop" className="bg-background relative border-b border-light/5">
      <SectionHeader 
        title={eventData.workshop.title}
        subtitle="Two days of rigorous, hands-on technical sessions covering the core pillars of industrial automation and smart factory architecture."
      />

      <Reveal stagger staggerDelay={0.12} className="mt-8 sm:mt-10 flex flex-col lg:flex-row items-stretch justify-between relative gap-4 lg:gap-0">
        {eventData.workshop.topics.map((topic, i) => {
          const Icon = icons[i];
          return (
            <React.Fragment key={topic.abbr}>
              {/* Module Card */}
              <div className="flex-1 w-full flex flex-col group min-w-0">
                <div className="glass-panel tech-border p-5 sm:p-6 h-full flex flex-col items-center text-center interactive-card hover:bg-surface/90 rounded-xl relative">
                  {/* Step indicator */}
                  <span className="absolute top-3 right-3 font-mono text-[10px] text-accent/70 px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                    MODULE 0{i + 1}
                  </span>

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-surface border border-accent/20 flex items-center justify-center mb-3.5 sm:mb-4 group-hover:border-accent group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.15)] shrink-0">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-1 tracking-tight text-foreground">{topic.abbr}</h3>
                  <p className="text-muted font-sans font-medium text-xs sm:text-sm leading-snug">{topic.name}</p>
                </div>
              </div>

              {/* Inter-Module Flow Arrow */}
              {i < eventData.workshop.topics.length - 1 && (
                <div className="relative z-10 flex items-center justify-center my-1 lg:my-0 lg:px-2.5 shrink-0 self-center">
                  {/* Desktop Horizontal Flow: Line + Arrow Badge + Line */}
                  <div className="hidden lg:flex items-center">
                    <div className="w-3 xl:w-5 h-px bg-gradient-to-r from-accent/10 via-accent/50 to-accent/20" />
                    <div className="w-7 h-7 rounded-full bg-surface border border-accent/40 flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.25)] hover:border-accent hover:scale-110 transition-all">
                      <ArrowRight className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div className="w-3 xl:w-5 h-px bg-gradient-to-r from-accent/20 via-accent/50 to-accent/10" />
                  </div>

                  {/* Mobile / Tablet Vertical Flow */}
                  <div className="flex lg:hidden flex-col items-center">
                    <div className="h-2 w-px bg-accent/30" />
                    <div className="w-7 h-7 rounded-full bg-surface border border-accent/40 flex items-center justify-center my-0.5 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                      <ArrowDown className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div className="h-2 w-px bg-accent/30" />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </Reveal>

      <div className="mt-8 sm:mt-10 flex justify-center">
        <Button variant="outline" href="#contact" className="py-3 px-6 text-xs">
          Request Workshop Details
        </Button>
      </div>
    </Section>
  );
}
