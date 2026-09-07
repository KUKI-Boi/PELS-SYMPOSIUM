import { eventData } from '../data/event';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-light/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl font-semibold mb-4 text-accent">
            {eventData.title}
          </h3>
          <p className="text-muted mb-6 max-w-sm">
            {eventData.organizer.chapter}<br />
            {eventData.organizer.unit}
          </p>
        </div>

        <div>
          <h4 className="font-display uppercase tracking-widest text-sm text-foreground/50 mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {['About', 'Program', 'Workshop', 'Speakers', 'Registration', 'Venue'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-muted hover:text-accent transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display uppercase tracking-widest text-sm text-foreground/50 mb-6">Contact</h4>
          <address className="not-italic text-muted flex flex-col gap-2">
            <p className="font-medium text-foreground">{eventData.contact.name}</p>
            <p className="text-sm">{eventData.contact.role}</p>
            <a href={`mailto:${eventData.contact.email}`} className="hover:text-accent transition-colors mt-2">
              {eventData.contact.email}
            </a>
            <a href={`tel:${eventData.contact.phone.replace(/\s+/g, '')}`} className="hover:text-accent transition-colors">
              {eventData.contact.phone}
            </a>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-light/10 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Symposium Organizing Committee.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-accent">IEEE PELS</a>
          <a href="#" className="hover:text-accent">Christ University</a>
        </div>
      </div>
    </footer>
  );
}
