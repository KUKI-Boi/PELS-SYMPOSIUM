import { useState } from 'react';
import { Section, SectionHeader } from '../components/Section';
import { FileText, Lightbulb, ExternalLink, Sparkles, Award, Users, BookOpen, Hotel } from 'lucide-react';
import { Button } from '../components/Button';
import { eventData } from '../data/event';
import SubmissionModal, { type ShowcaseModalData } from '../components/SubmissionModal';

export default function Presentations() {
  const [activeModalData, setActiveModalData] = useState<ShowcaseModalData | null>(null);

  const paperData = eventData.showcases.paperPresentation;
  const projectData = eventData.showcases.projectCompetition;

  return (
    <Section id="presentations" className="bg-background relative border-b border-light/5">
      <SectionHeader 
        title="Technical Showcases & Competitions" 
        subtitle="Opportunities for students, researchers, and engineers to present papers and demonstrate working hardware prototypes."
      />

      <div className="mt-4 flex justify-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-mono font-medium shadow-[0_0_15px_rgba(52,211,153,0.15)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Registration is 100% Free for Everyone — Zero Entry or Participation Fees</span>
        </div>
      </div>

      {/* Combined Unified Card */}
      <div className="mt-8 sm:mt-10 glass-panel border border-light/10 p-6 sm:p-8 md:p-10 relative overflow-hidden rounded-2xl shadow-2xl">
        {/* Top Feature Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-accent/10 text-accent border border-accent/25">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            Registrations Open
          </span>
          <span className="text-xs font-mono text-muted/80 px-2.5 py-0.5 rounded bg-white/[0.03] border border-light/5 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-accent" />
            Solo & Teams (1 to 4 Members)
          </span>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 font-semibold">
            Free Entry
          </span>
          <span className="text-xs font-mono text-[#ff840c] bg-[#ff840c]/10 px-2.5 py-0.5 rounded border border-[#ff840c]/25 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            IEEE Certificates & Cash Prizes
          </span>
          <span className="text-xs font-mono text-secondaryAccent bg-white/[0.04] px-2.5 py-0.5 rounded border border-light/10 flex items-center gap-1.5">
            <Hotel className="w-3.5 h-3.5 text-accent" />
            Stay Available for Outstation Delegates
          </span>
        </div>

        {/* Two Combined Panels Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch pt-2">
          
          {/* Track 1: Paper & Project Presentation */}
          <div className="bg-surface/60 border border-light/10 p-5 sm:p-6 rounded-xl flex flex-col justify-between hover:border-accent/30 transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                    Paper & Project Presentation
                  </h3>
                  <span className="text-[11px] font-mono text-secondaryAccent">
                    1 to 3 Members • IEEE Presentation Format
                  </span>
                </div>
              </div>

              <p className="text-muted text-xs sm:text-sm font-light leading-relaxed mb-4">
                Present technical research papers and innovations on emerging industrial electronics paradigms, drives, and automation.
              </p>

              <div className="space-y-2 mb-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-accent flex items-center justify-between">
                  <span>Eligible Tracks</span>
                  <span className="text-[10px] text-muted">Certificates Awarded</span>
                </div>
                {paperData.tracks.map((track, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-foreground/85 font-mono bg-background/50 p-2 rounded border border-light/5">
                    <Sparkles className="w-3 h-3 text-accent shrink-0" />
                    <span className="truncate">{track}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              onClick={() => setActiveModalData({
                ...paperData,
                googleFormUrl: eventData.forms.christ,
              })}
              className="w-full text-xs py-2.5 mt-2 flex items-center justify-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-accent" />
              <span>Paper Guidelines & Deadlines</span>
            </Button>
          </div>

          {/* Track 2: Industrial Project Competition */}
          <div className="bg-surface/60 border border-light/10 p-5 sm:p-6 rounded-xl flex flex-col justify-between hover:border-[#ff840c]/30 transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#ff840c]/10 border border-[#ff840c]/25 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-[#ff840c]" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                    Industrial Project Competition
                  </h3>
                  <span className="text-[11px] font-mono text-secondaryAccent">
                    Up to 4 Members • Hardware Prototype Demonstration
                  </span>
                </div>
              </div>

              <p className="text-muted text-xs sm:text-sm font-light leading-relaxed mb-4">
                Showcase functional hardware prototypes, PLC rigs, smart factory solutions, and mechatronic setups to industry judges.
              </p>

              <div className="space-y-2 mb-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#ff840c] flex items-center justify-between">
                  <span>Competition Tracks</span>
                  <span className="text-[10px] text-muted">Cash Awards & Trophies</span>
                </div>
                {projectData.tracks.map((track, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-foreground/85 font-mono bg-background/50 p-2 rounded border border-light/5">
                    <Sparkles className="w-3 h-3 text-[#ff840c] shrink-0" />
                    <span className="truncate">{track}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              onClick={() => setActiveModalData({
                ...projectData,
                googleFormUrl: eventData.forms.external,
              })}
              className="w-full text-xs py-2.5 mt-2 flex items-center justify-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#ff840c]" />
              <span>Competition Rules & Judging Criteria</span>
            </Button>
          </div>

        </div>

        {/* Bottom Registration Action Bar with 2 Form Placeholders */}
        <div className="mt-8 pt-6 border-t border-light/10 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-center lg:text-left">
            <h4 className="font-display font-semibold text-foreground text-sm sm:text-base">
              Ready to Participate?
            </h4>
            <p className="text-xs text-secondaryAccent font-light mt-0.5">
              Select your registration form below to submit your paper or project details.
            </p>
          </div>

          {/* The 2 Form Placeholders */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            {/* Form Placeholder 1: Christ University */}
            <a
              href={eventData.forms.christ}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="primary"
                className="w-full sm:w-auto py-3 px-5 text-xs tracking-wider whitespace-nowrap h-12 bg-gradient-to-r from-accent to-[#0284c7] border-accent hover:brightness-110 shadow-lg flex items-center justify-center"
              >
                <span>Registration — Christ University</span>
                <ExternalLink className="w-3.5 h-3.5 ml-2 shrink-0" />
              </Button>
            </a>

            {/* Form Placeholder 2: External Participants */}
            <a
              href={eventData.forms.external}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="primary"
                className="w-full sm:w-auto py-3 px-5 text-xs tracking-wider whitespace-nowrap h-12 bg-gradient-to-r from-[#ff840c] to-[#ea580c] border-[#ff840c] hover:brightness-110 shadow-lg flex items-center justify-center"
              >
                <span>Registration — External Participants</span>
                <ExternalLink className="w-3.5 h-3.5 ml-2 shrink-0" />
              </Button>
            </a>
          </div>
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
