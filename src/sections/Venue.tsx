import { Section, SectionHeader } from '../components/Section';
import { eventData } from '../data/event';
import { MapPin, Navigation, Car, Bus, ExternalLink } from 'lucide-react';
import { Button } from '../components/Button';

export default function Venue() {
  return (
    <Section id="venue" className="bg-surface relative border-b border-light/5">
      <SectionHeader 
        title="Venue" 
        subtitle="Join us at the Kengeri Campus for an immersive learning and networking experience."
      />

      <div className="mt-6 sm:mt-8 grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* Left Column: Venue Details */}
        <div className="glass-panel bg-[#080d22]/80 p-6 sm:p-8 border border-light/10 flex flex-col justify-between rounded-xl">
          <div>
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-accent shrink-0 mt-1" />
              <div>
                <span className="inline-block text-[10px] sm:text-xs font-mono tracking-widest uppercase text-accent mb-1.5 px-2.5 py-0.5 bg-accent/10 border border-accent/20 rounded">
                  Official Venue
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1">
                  {eventData.venue.name}
                </h3>
                <p className="text-base text-secondaryAccent font-medium">
                  {eventData.venue.institution}
                </p>
                <p className="text-muted text-xs sm:text-sm font-light mb-3">
                  {eventData.venue.department}
                </p>
                <p className="text-xs font-mono text-muted/85 p-3 bg-surface/80 border border-light/10 rounded">
                  {eventData.venue.address}
                </p>
              </div>
            </div>

            <div className="space-y-2.5 mb-5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-foreground/80 border-b border-light/5 pb-2.5">
                <Car className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">Parking:</strong>{' '}
                  <span className="text-muted">{eventData.venue.parking}</span>
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-foreground/80 border-b border-light/5 pb-2.5">
                <Bus className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">Transit:</strong>{' '}
                  <span className="text-muted">{eventData.venue.transportation}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={eventData.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              <Button variant="primary" className="w-full sm:w-auto py-3 px-6 text-xs">
                <Navigation className="w-3.5 h-3.5 mr-2" />
                Get Directions on Google Maps
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column: Embedded Google Maps */}
        <div className="glass-panel bg-[#080d22]/80 border border-light/10 overflow-hidden relative min-h-[300px] sm:min-h-[340px] rounded-xl flex flex-col tech-border">
          <div className="flex items-center justify-between px-4 py-2.5 bg-surface/90 border-b border-light/10 text-xs font-mono text-muted z-10">
            <span className="flex items-center gap-2 text-accent">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              CHRIST UNIVERSITY // BLOCK I AUDITORIUM
            </span>
            <a
              href={eventData.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors text-[11px]"
            >
              <span>Enlarge Map</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <iframe
            title="Christ University Kengeri Campus Map"
            src={eventData.venue.googleMapsEmbed}
            className="w-full h-full min-h-[270px] sm:min-h-[310px] border-0 filter contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  );
}
