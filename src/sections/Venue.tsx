import { Section, SectionHeader } from '../components/Section';
import { eventData } from '../data/event';
import { MapPin, Navigation, Car, Bus } from 'lucide-react';
import { Button } from '../components/Button';

export default function Venue() {
  return (
    <Section id="venue" className="bg-background relative border-b border-light/5">
      <SectionHeader 
        title="Venue" 
        subtitle="Join us at the Kengeri Campus for an immersive learning experience."
      />

      <div className="mt-12 grid lg:grid-cols-2 gap-8">
        <div className="glass-panel p-8 md:p-12 border border-light/10">
          <div className="flex items-start gap-4 mb-8">
            <MapPin className="w-8 h-8 text-accent shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{eventData.venue.name}</h3>
              <p className="text-lg text-secondaryAccent mb-1">{eventData.venue.institution}</p>
              <p className="text-muted font-light mb-4">{eventData.venue.department}</p>
              <p className="text-sm font-mono text-muted/60 p-3 bg-surface/50 border border-light/5">
                {eventData.venue.address}
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-sm text-foreground/80 border-b border-light/5 pb-4">
              <Car className="w-5 h-5 text-muted" />
              <span>Parking: <span className="text-muted italic">{eventData.venue.parking}</span></span>
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground/80 border-b border-light/5 pb-4">
              <Bus className="w-5 h-5 text-muted" />
              <span>Transport: <span className="text-muted italic">{eventData.venue.transportation}</span></span>
            </div>
          </div>

          <Button variant="outline" className="w-full sm:w-auto" disabled>
            <Navigation className="w-4 h-4 mr-2" />
            Get Directions
          </Button>
        </div>

        <div className="glass-panel border border-light/10 flex items-center justify-center bg-surface min-h-[400px]">
          <div className="text-center p-6 text-muted">
             <MapPin className="w-12 h-12 mx-auto mb-4 opacity-20" />
             <p className="font-mono text-sm uppercase tracking-widest">{eventData.venue.googleMapsEmbed}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
