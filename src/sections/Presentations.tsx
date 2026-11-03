import { useState } from 'react';
import { Section, SectionHeader } from '../components/Section';
import { FileText, Lightbulb, ExternalLink, Sparkles, Award } from 'lucide-react';
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
        title="Technical Showcases" 
        subtitle="Opportunities to present research and demonstrate innovative projects to industry experts."
      />

      <div className="mt-6 flex justify-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-mono font-medium shadow-[0_0_15px_rgba(52,211,153,0.15)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Registration is 100% Free for Everyone — No Entry or Participation Fees</span>
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8 items-stretch">
        
        {/* Paper Presentation Card */}
        <div className="glass-panel border border-light/10 p-8 md:p-12 relative overflow-hidden group flex flex-col justify-between rounded-xl hover:border-accent/40 transition-colors h-full">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <FileText className="w-32 h-32" />
          </div>
          
          <div className="relative z-10 flex flex-col">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-accent/10 text-accent border border-accent/20">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                {paperData.badge}
              </span>
              <span className="text-xs font-mono text-muted/80">
                {paperData.teamSize}
              </span>
              <span className="inline-flex items-center text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Free Entry
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3 text-foreground min-h-[40px] flex items-center">
              {paperData.title}
            </h3>
            <p className="text-muted font-light mb-6 text-sm sm:text-base leading-relaxed min-h-[48px]">
              {paperData.subtitle}
            </p>
            
            <div className="space-y-2.5 mb-8">
              <div className="text-xs font-mono uppercase tracking-wider text-accent mb-2 flex items-center justify-between h-5">
                <span>Eligible Domains</span>
                <span className="text-[10px] text-muted flex items-center gap-1">
                  <Award className="w-3 h-3 text-accent" /> IEEE Certificates
                </span>
              </div>
              {paperData.tracks.slice(0, 3).map((track, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-foreground/80 font-mono bg-surface/50 p-2.5 border border-light/5 rounded h-10">
                  <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span className="truncate">{track}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-light/10 flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              onClick={() => setActiveModalData(paperData)}
              className="w-full sm:flex-1 justify-center py-3 px-4 text-xs tracking-wider whitespace-nowrap h-12"
            >
              Submit via Form
              <ExternalLink className="w-3.5 h-3.5 ml-2 shrink-0" />
            </Button>
            <Button
              variant="outline"
              onClick={() => setActiveModalData(paperData)}
              className="w-full sm:w-auto py-3 px-5 text-xs tracking-wider whitespace-nowrap h-12"
            >
              Guidelines
            </Button>
          </div>
        </div>

        {/* Project Competition Card */}
        <div className="glass-panel border border-light/10 p-8 md:p-12 relative overflow-hidden group flex flex-col justify-between rounded-xl hover:border-[#ff840c]/40 transition-colors h-full">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <Lightbulb className="w-32 h-32" />
          </div>
          
          <div className="relative z-10 flex flex-col">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#ff840c]/10 text-[#ff840c] border border-[#ff840c]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff840c] animate-ping" />
                {projectData.badge}
              </span>
              <span className="text-xs font-mono text-muted/80">
                {projectData.teamSize}
              </span>
              <span className="inline-flex items-center text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Free Entry
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3 text-foreground min-h-[40px] flex items-center">
              {projectData.title}
            </h3>
            <p className="text-muted font-light mb-6 text-sm sm:text-base leading-relaxed min-h-[48px]">
              {projectData.subtitle}
            </p>
            
            <div className="space-y-2.5 mb-8">
              <div className="text-xs font-mono uppercase tracking-wider text-[#ff840c] mb-2 flex items-center justify-between h-5">
                <span>Featured Tracks</span>
                <span className="text-[10px] text-muted flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#ff840c]" /> Cash Prizes
                </span>
              </div>
              {projectData.tracks.slice(0, 3).map((track, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-foreground/80 font-mono bg-surface/50 p-2.5 border border-light/5 rounded h-10">
                  <Sparkles className="w-3.5 h-3.5 text-[#ff840c] shrink-0" />
                  <span className="truncate">{track}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-light/10 flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              onClick={() => setActiveModalData(projectData)}
              className="w-full sm:flex-1 justify-center py-3 px-4 text-xs tracking-wider whitespace-nowrap h-12 bg-gradient-to-r from-[#ff840c] to-[#d95309] border-[#ff840c] hover:brightness-110"
            >
              Register via Form
              <ExternalLink className="w-3.5 h-3.5 ml-2 shrink-0" />
            </Button>
            <Button
              variant="outline"
              onClick={() => setActiveModalData(projectData)}
              className="w-full sm:w-auto py-3 px-5 text-xs tracking-wider whitespace-nowrap h-12"
            >
              Guidelines
            </Button>
          </div>
        </div>

      </div>

      {/* Interactive Guidelines & Registration Modal */}
      <SubmissionModal
        isOpen={!!activeModalData}
        onClose={() => setActiveModalData(null)}
        data={activeModalData}
      />
    </Section>
  );
}
