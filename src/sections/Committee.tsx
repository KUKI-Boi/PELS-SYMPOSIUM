import { Section, SectionHeader } from '../components/Section';
import { eventData } from '../data/event';
import { UserCircle } from 'lucide-react';

export default function Committee() {
  return (
    <Section id="committee" className="bg-surface relative border-b border-light/5">
      <SectionHeader 
        title="Organizing Committee" 
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventData.committee.map((member, i) => (
          <div key={i} className="glass-panel p-6 border border-light/10 flex items-start gap-4 hover:border-accent/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-background border border-light/10 flex items-center justify-center shrink-0">
               <UserCircle className="w-8 h-8 text-muted/50" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-lg text-foreground mb-1">{member.name}</h4>
              <p className="text-sm text-accent mb-2">{member.role}</p>
              <p className="text-xs text-muted font-light">{member.department}</p>
            </div>
          </div>
        ))}

        {/* Future members placeholder */}
        <div className="glass-panel p-6 border border-light/5 border-dashed flex items-center justify-center text-center opacity-50 bg-background/30">
           <p className="font-mono text-xs uppercase tracking-widest text-muted">Additional Members TBA</p>
        </div>
      </div>
    </Section>
  );
}
