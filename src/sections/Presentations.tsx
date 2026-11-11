import { useState } from 'react';
import { Section, SectionHeader } from '../components/Section';
import { ExternalLink, Award, User, BookOpen, Hotel } from 'lucide-react';
import { Button } from '../components/Button';
import { eventData } from '../data/event';
import SubmissionModal, { type ShowcaseModalData } from '../components/SubmissionModal';

export default function Presentations() {
  const [activeModalData, setActiveModalData] = useState<ShowcaseModalData | null>(null);

  const expertData = eventData.showcases.expertHandling;

  return (
    <Section id="presentations" className="bg-background relative border-b border-light/5">
      <SectionHeader 
        title="Expert Handling Sessions" 
        subtitle="Hands-on industrial automation training and practical lab sessions conducted by expert faculty and researchers."
      />

      <div className="mt-4 flex justify-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-mono font-medium shadow-[0_0_15px_rgba(52,211,153,0.15)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Registration is 100% Free for Everyone — Zero Entry or Participation Fees</span>
        </div>
      </div>

      {/* Clean Combined Registration Card */}
      <div className="mt-8 sm:mt-10 max-w-4xl mx-auto glass-panel border border-light/10 p-6 sm:p-8 md:p-10 relative overflow-hidden rounded-2xl shadow-2xl text-center">
        {/* Top Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-accent/10 text-accent border border-accent/25">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            Registrations Open
          </span>
          <span className="text-xs font-mono text-muted/80 px-2.5 py-0.5 rounded bg-white/[0.03] border border-light/5 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-accent" />
            Individual Participation
          </span>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 font-semibold">
            100% Free Entry
          </span>
          <span className="text-xs font-mono text-[#ff840c] bg-[#ff840c]/10 px-2.5 py-0.5 rounded border border-[#ff840c]/25 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            IEEE Participation Certificates
          </span>
          <span className="text-xs font-mono text-secondaryAccent bg-white/[0.04] px-2.5 py-0.5 rounded border border-light/10 flex items-center gap-1.5">
            <Hotel className="w-3.5 h-3.5 text-accent" />
            Stay Available for Outstation Delegates
          </span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Expert Handling Sessions
        </h3>
        <p className="text-muted text-xs sm:text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed mb-8">
          Two days of intensive, expert-guided hands-on training on PLC programming, HMI interface, Variable Frequency Drives (VFD), and IT-OT integration using Node-RED. Strictly individual participation — select your affiliated registration link below to register.
        </p>

        {/* The 2 Form Placeholders */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
          {/* Form Placeholder 1: Christ University */}
          <a
            href={eventData.forms.christ}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1"
          >
            <Button
              variant="primary"
              className="w-full py-3.5 px-5 text-xs sm:text-sm tracking-wider whitespace-nowrap h-12 bg-gradient-to-r from-accent to-[#0284c7] border-accent hover:brightness-110 shadow-lg flex items-center justify-center font-medium"
            >
              <span>Registration — Christ University</span>
              <ExternalLink className="w-4 h-4 ml-2 shrink-0" />
            </Button>
          </a>

          {/* Form Placeholder 2: External Participants */}
          <a
            href={eventData.forms.external}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1"
          >
            <Button
              variant="primary"
              className="w-full py-3.5 px-5 text-xs sm:text-sm tracking-wider whitespace-nowrap h-12 bg-gradient-to-r from-[#ff840c] to-[#ea580c] border-[#ff840c] hover:brightness-110 shadow-lg flex items-center justify-center font-medium"
            >
              <span>Registration — External Participants</span>
              <ExternalLink className="w-4 h-4 ml-2 shrink-0" />
            </Button>
          </a>
        </div>

        {/* Stay Notice & Guidelines link */}
        <div className="mt-8 pt-5 border-t border-light/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted font-light">
          <p className="flex items-center gap-1.5 text-secondaryAccent">
            <Hotel className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>On-campus hostel stay is requested directly inside the External form.</span>
          </p>

          <button
            onClick={() => setActiveModalData({
              ...expertData,
              googleFormUrl: eventData.forms.christ,
            })}
            className="text-accent hover:underline flex items-center gap-1 font-mono text-xs cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>View Session Guidelines & Requirements</span>
          </button>
        </div>
      </div>

      {/* Interactive Guidelines & Submission Modal */}
      <SubmissionModal
        isOpen={!!activeModalData}
        onClose={() => setActiveModalData(null)}
        data={activeModalData}
      />
    </Section>
  );
}
