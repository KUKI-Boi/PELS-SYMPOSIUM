import React from 'react';
import { Section, SectionHeader } from '../components/Section';
import { eventData } from '../data/event';
import { ArrowRight, Cpu, MonitorPlay, Activity } from 'lucide-react';
import { Button } from '../components/Button';
import Reveal from '../components/Reveal';

export default function Workshop() {
  const icons = [Cpu, MonitorPlay, Activity];

  return (
    <Section id="workshop" className="bg-background relative border-b border-light/5">
      <SectionHeader 
        title={eventData.workshop.title}
        subtitle="A comprehensive hands-on session focusing on the core technologies driving modern industrial automation."
      />

      <Reveal stagger staggerDelay={0.15} className="mt-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 justify-between relative">
        {/* Connection line background (desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-light/10 -translate-y-1/2 z-0" />

        {eventData.workshop.topics.map((topic, i) => {
          const Icon = icons[i];
          return (
            <React.Fragment key={topic.abbr}>
              <div className="relative z-10 flex-1 w-full max-w-sm group">
                <div className="glass-panel tech-border p-8 h-full flex flex-col items-center text-center interactive-card hover:bg-surface/90">
                  <div className="w-16 h-16 rounded-full bg-surface border border-accent/20 flex items-center justify-center mb-6 group-hover:border-accent group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(60,208,54,0.0)] group-hover:shadow-[0_0_30px_rgba(60,208,54,0.2)]">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-4xl font-bold mb-2 tracking-tight text-foreground">{topic.abbr}</h3>
                  <p className="text-muted font-sans font-medium">{topic.name}</p>
                </div>
              </div>
              
              {i < eventData.workshop.topics.length - 1 && (
                <div className="relative z-10 flex justify-center lg:px-4">
                  <div className="w-px h-12 lg:w-12 lg:h-px bg-accent/50 relative">
                    <ArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent hidden lg:block" />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </Reveal>

      <div className="mt-20 flex justify-center">
        <Button variant="outline" href="#contact">
          Request Workshop Details
        </Button>
      </div>
    </Section>
  );
}
