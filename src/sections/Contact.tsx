import { Section, SectionHeader } from '../components/Section';
import { eventData } from '../data/event';
import { Mail, Phone, Cpu } from 'lucide-react';

export default function Contact() {
  return (
    <Section id="contact" className="bg-background relative">
      <SectionHeader 
        title="Contact Us" 
        subtitle="Get in touch with the organizing committee for queries, sponsorships, and more."
      />

      <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="glass-panel p-8 md:p-12 tech-border">
          <div className="mb-12">
            <div className="flex items-center gap-3 text-accent mb-4">
              <Cpu className="w-6 h-6" />
              <h3 className="font-display text-xl font-bold uppercase">{eventData.organizer.chapter}</h3>
            </div>
            <p className="text-foreground/80 font-light">{eventData.organizer.unit}</p>
            <p className="text-muted text-sm mt-2">{eventData.organizer.department}</p>
          </div>

          <div className="space-y-8">
            <div>
               <p className="text-sm font-mono text-muted uppercase tracking-widest mb-2">Primary Contact</p>
               <p className="font-semibold text-lg text-foreground">{eventData.contact.name}</p>
               <p className="text-sm text-secondaryAccent mb-4">{eventData.contact.role}</p>
               
               <div className="flex flex-col gap-3">
                 <a href={`mailto:${eventData.contact.email}`} className="flex items-center gap-3 text-muted hover:text-accent transition-colors">
                   <Mail className="w-5 h-5" />
                   <span>{eventData.contact.email}</span>
                 </a>
                 <a href={`tel:${eventData.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-muted hover:text-accent transition-colors">
                   <Phone className="w-5 h-5" />
                   <span>{eventData.contact.phone}</span>
                 </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
