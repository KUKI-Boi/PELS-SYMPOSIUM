import { Section, SectionHeader } from '../components/Section';
import { eventData } from '../data/event';
import { Target } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <Section id="about" className="bg-surface relative border-b border-light/5">
      <SectionHeader 
        title="Where Engineering Knowledge Meets Industrial Practice" 
        subtitle="Bridging the gap between theoretical learning and practical implementation in modern industrial automation."
      />

      <div className="grid lg:grid-cols-2 gap-16 items-start mt-12">
        <Reveal yOffset={30}>
          <div className="prose prose-invert prose-lg">
            <p className="text-foreground/80 leading-relaxed font-light">
              The Symposium on Industrial Automation 2026 is designed to foster a dynamic environment for <strong className="text-accent font-medium">hands-on technical learning</strong> and <strong className="text-accent font-medium">industry exposure</strong>. 
            </p>
            <p className="text-foreground/80 leading-relaxed font-light mt-6">
              By bringing together the academic rigor of the Department of Electrical and Electronics Engineering at Christ University and the professional standards of the IEEE PELS Bangalore Chapter, this event serves as a crucial platform for <strong className="text-foreground font-medium">academia-industry collaboration</strong>.
            </p>
            
            <ul className="mt-8 space-y-4 text-foreground/80 font-light list-none pl-0">
              {[
                "Hands-on technical learning with industrial equipment",
                "Direct interaction with industry experts",
                "Skill development in PLC, HMI, and VFD",
                "Professional networking opportunities"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-secondaryAccent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal yOffset={30} delay={0.15}>
          <div className="glass-panel tech-border p-8 md:p-12">
            <h3 className="font-display text-2xl font-semibold mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-accent"></span>
              SDG ALIGNMENT
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {eventData.sdgs.map((sdg) => (
                <div key={sdg.number} className="border border-light/10 bg-background/50 p-6 interactive-card hover:border-accent/30">
                  <div className="text-3xl font-display font-bold text-accent mb-2">
                    SDG {sdg.number}
                  </div>
                  <p className="text-sm font-sans text-muted">
                    {sdg.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
