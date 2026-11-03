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

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-6 sm:mt-8">
        <Reveal yOffset={25}>
          <div className="prose prose-invert prose-base max-w-none">
            <p className="text-foreground/85 leading-relaxed font-light text-sm sm:text-base">
              The Symposium on Industrial Automation 2026 is designed to foster a dynamic environment for <strong className="text-accent font-medium">hands-on technical learning</strong> and <strong className="text-accent font-medium">industry exposure</strong>. 
            </p>
            <p className="text-foreground/85 leading-relaxed font-light mt-3 sm:mt-4 text-sm sm:text-base">
              By bringing together the academic rigor of the Department of Electrical and Electronics Engineering at Christ University and the professional standards of the IEEE PELS Bangalore Chapter, this event serves as a crucial platform for <strong className="text-foreground font-medium">academia-industry collaboration</strong>.
            </p>
            
            <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-2.5 text-foreground/80 font-light list-none pl-0 text-xs sm:text-sm">
              {[
                "Hands-on technical learning with industrial equipment",
                "Direct interaction with industry experts",
                "Skill development in PLC, HMI, and VFD",
                "Professional networking opportunities"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <Target className="w-4 h-4 text-secondaryAccent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal yOffset={25} delay={0.15}>
          <div className="glass-panel tech-border p-5 sm:p-7 rounded-xl">
            <h3 className="font-display text-lg sm:text-xl font-semibold mb-4 sm:mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-accent"></span>
              SDG ALIGNMENT
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {eventData.sdgs.map((sdg) => (
                <div key={sdg.number} className="border border-light/10 bg-background/50 p-3.5 sm:p-4 rounded-lg interactive-card hover:border-accent/30">
                  <div className="text-xl sm:text-2xl font-display font-bold text-accent mb-1">
                    SDG {sdg.number}
                  </div>
                  <p className="text-xs font-sans text-muted leading-snug">
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
