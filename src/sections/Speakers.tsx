import { Section, SectionHeader } from '../components/Section';
import { eventData } from '../data/event';
import { User2 } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function Speakers() {
  return (
    <Section id="speakers" className="bg-surface relative border-b border-light/5">
      <SectionHeader 
        title="Featured Speakers" 
        subtitle="Learn from leading industry experts and academic professionals shaping the future of industrial electronics."
      />

      <Reveal stagger staggerDelay={0.1} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {eventData.speakers.map((speaker) => (
          <div key={speaker.id} className="glass-panel border border-light/10 interactive-card hover:border-accent/30 group">
            <div className="h-48 bg-background/50 border-b border-light/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent z-10" />
              <User2 className="w-20 h-20 text-muted/30 group-hover:scale-110 group-hover:text-accent/30 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="px-2 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono uppercase tracking-widest">
                  {speaker.role}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="font-display text-xl font-semibold mb-1 text-foreground group-hover:text-accent transition-colors">
                {speaker.name}
              </h4>
              <p className="text-sm text-secondaryAccent mb-4">{speaker.type}</p>
              
              <div className="space-y-2 text-sm text-muted font-light mb-6">
                <p>Organization: <span className="italic">TBA</span></p>
                <p>Session: {speaker.session}</p>
              </div>

              <div className="pt-4 border-t border-light/10">
                <button className="text-muted hover:text-foreground transition-colors cursor-not-allowed opacity-50" title="LinkedIn Profile TBA">
                  LinkedIn TBA
                </button>
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
