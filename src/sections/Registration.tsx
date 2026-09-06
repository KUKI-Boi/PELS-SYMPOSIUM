import { Section, SectionHeader } from '../components/Section';
import { eventData } from '../data/event';
import { Ticket, Users, CalendarDays } from 'lucide-react';
import { Button } from '../components/Button';

export default function Registration() {
  return (
    <Section id="registration" className="bg-surface relative border-b border-light/5">
      <SectionHeader 
        title="Registration" 
      />

      <div className="grid lg:grid-cols-5 gap-8 mt-12">
        <div className="lg:col-span-2 flex flex-col justify-center gap-6 p-8 bg-background border border-light/10">
          <div className="flex items-center gap-4 text-muted mb-4">
            <Ticket className="w-8 h-8 text-accent" />
            <span className="font-display text-xl uppercase tracking-widest text-accent font-semibold">
              Status: {eventData.registration.status}
            </span>
          </div>
          <p className="text-foreground/80 font-light text-lg">
            Join us for two days of intense technical learning and professional networking.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col gap-2 p-4 border border-light/5 bg-surface/50">
              <Users className="w-6 h-6 text-secondaryAccent" />
              <span className="text-2xl font-display font-bold text-foreground">{eventData.capacity}</span>
              <span className="text-xs font-mono text-muted uppercase">Capacity</span>
            </div>
            <div className="flex flex-col gap-2 p-4 border border-light/5 bg-surface/50">
              <CalendarDays className="w-6 h-6 text-secondaryAccent" />
              <span className="text-2xl font-display font-bold text-foreground">2</span>
              <span className="text-xs font-mono text-muted uppercase">Days</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 glass-panel p-8 md:p-12">
          <h3 className="font-display text-2xl font-semibold mb-8 border-b border-light/10 pb-4">Registration Categories</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {eventData.registration.categories.map((cat, i) => (
              <div key={i} className="flex flex-col gap-2 p-4 border border-light/5 bg-background/50">
                <span className="font-sans font-medium text-foreground">{cat.name}</span>
                <span className="font-mono text-sm text-accent opacity-70">{cat.fee}</span>
              </div>
            ))}
          </div>

          <Button variant="primary" disabled className="w-full opacity-50 cursor-not-allowed">
            Registration Opens Soon
          </Button>
        </div>
      </div>
    </Section>
  );
}
