import { Section, SectionHeader } from '../components/Section';
import { eventData } from '../data/event';
import { Mail, Phone, UserCheck, GraduationCap } from 'lucide-react';

export default function Contact() {
  const { facultyCoordinators, studentCoordinators } = eventData.contact;

  return (
    <Section id="contact" className="bg-background relative">
      <SectionHeader 
        title="Contact Us" 
        subtitle="Get in touch with the organizing committee for queries, registrations, sponsorships, and more."
      />

      <div className="mt-6 sm:mt-8 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
        {/* Faculty Coordinators Card */}
        <div className="glass-panel p-5 sm:p-6 border border-light/10 flex flex-col h-full rounded-2xl">
          <div className="flex items-center gap-2.5 mb-4 pb-2.5 border-b border-light/10 text-accent">
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <h4 className="font-display text-xs sm:text-sm uppercase tracking-widest font-semibold text-foreground">
              Faculty Coordinators
            </h4>
          </div>

          <div className="flex flex-col gap-3.5 md:grid md:grid-rows-2 md:flex-1">
            {facultyCoordinators.map((faculty, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-4.5 bg-surface/60 border border-light/5 rounded-xl flex flex-col justify-between hover:border-accent/30 transition-all group"
              >
                <div>
                  <h5 className="font-display font-bold text-foreground text-sm sm:text-base group-hover:text-accent transition-colors">
                    {faculty.name}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-secondaryAccent font-mono mt-0.5">
                    {faculty.role}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-light/5 flex flex-col gap-1.5 text-xs font-mono">
                  {faculty.phone && (
                    <a
                      href={`tel:${faculty.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{faculty.phone}</span>
                    </a>
                  )}
                  {faculty.email && (
                    <a
                      href={`mailto:${faculty.email}`}
                      className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors break-all"
                    >
                      <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{faculty.email}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Coordinators Card */}
        <div className="glass-panel p-5 sm:p-6 border border-light/10 flex flex-col h-full rounded-2xl">
          <div className="flex items-center gap-2.5 mb-4 pb-2.5 border-b border-light/10 text-[#ff840c]">
            <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <h4 className="font-display text-xs sm:text-sm uppercase tracking-widest font-semibold text-foreground">
              Student Coordinators
            </h4>
          </div>

          <div className="flex flex-col gap-3.5 md:grid md:grid-rows-2 md:flex-1">
            {studentCoordinators.map((student, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-4.5 bg-surface/60 border border-light/5 rounded-xl flex flex-col justify-between hover:border-[#ff840c]/30 transition-all group"
              >
                <div>
                  <h5 className="font-display font-bold text-foreground text-sm sm:text-base group-hover:text-[#ff840c] transition-colors">
                    {student.name}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-[#ff840c]/90 font-mono mt-0.5">
                    {student.role}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-light/5 flex flex-col gap-1.5 text-xs font-mono">
                  {student.phone && (
                    <a
                      href={`tel:${student.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-2 text-muted hover:text-[#ff840c] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#ff840c] shrink-0" />
                      <span>{student.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
