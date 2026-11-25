import { Section, SectionHeader } from '../components/Section';
import { ExternalLink, Award, MessageSquareCheck, CheckCircle2, Sparkles, AlertCircle, FileText } from 'lucide-react';
import { Button } from '../components/Button';
import { eventData } from '../data/event';
import Reveal from '../components/Reveal';

export default function Feedback() {
  const feedbackUrl = eventData.forms.feedback;

  return (
    <Section id="feedback" className="bg-surface relative border-b border-light/5">
      <SectionHeader 
        title="Attendee Feedback & Certificate Issuance" 
        subtitle="Mandatory feedback submission for all symposium delegates to receive the official IEEE Certificate of Participation."
      />

      <div className="mt-8 max-w-4xl mx-auto">
        <Reveal yOffset={20}>
          <div className="glass-panel border border-accent/30 p-6 sm:p-8 md:p-10 rounded-2xl relative overflow-hidden shadow-2xl">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-[#ff840c]/10 blur-3xl pointer-events-none" />

            {/* Top Status Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-light/10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Feedback Portal Live</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#ff840c]">
                <Award className="w-4 h-4" />
                <span>IEEE Certificate Requirement</span>
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center sm:text-left mb-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3 flex flex-col sm:flex-row items-center gap-2.5">
                <span className="p-2 rounded-lg bg-accent/10 border border-accent/20 text-accent">
                  <MessageSquareCheck className="w-6 h-6" />
                </span>
                <span>Share Your Symposium Experience</span>
              </h3>
              <p className="text-muted text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                Thank you for participating in the <strong className="text-foreground">Symposium on Industrial Automation 2026</strong>. 
                Your feedback helps us measure the technical impact of our sessions and enhances future IEEE PELS & IES initiatives.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-3 gap-3.5 mb-8">
              <div className="p-4 rounded-xl bg-background/60 border border-light/5">
                <div className="flex items-center gap-2 text-accent text-xs font-mono uppercase mb-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Technical Depth</span>
                </div>
                <p className="text-xs text-muted font-light leading-snug">
                  Rate the keynote talks, PLC/HMI modules, VFD lab sessions, and Node-RED IT-OT practicals.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-background/60 border border-light/5">
                <div className="flex items-center gap-2 text-[#ff840c] text-xs font-mono uppercase mb-1.5">
                  <Award className="w-4 h-4" />
                  <span>Certificate Delivery</span>
                </div>
                <p className="text-xs text-muted font-light leading-snug">
                  Ensure your full name and email are spelled accurately as they will appear on your IEEE Certificate.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-background/60 border border-light/5">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase mb-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Logistics & Stay</span>
                </div>
                <p className="text-xs text-muted font-light leading-snug">
                  Provide your feedback on hospitality, venue setup, lab hardware availability, and accommodation.
                </p>
              </div>
            </div>

            {/* Important Notice Callout */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 mb-8">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-foreground/90 font-light leading-relaxed">
                <strong className="font-medium text-amber-300">Important Note for Attendees:</strong> Submission of this form is strictly required to verify attendance and generate your verified IEEE Certificate of Participation.
              </div>
            </div>

            {/* Action Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-light/10">
              <div className="flex items-center gap-2 text-xs font-mono text-muted">
                <FileText className="w-4 h-4 text-accent" />
                <span>Estimated completion time: ~3 minutes</span>
              </div>

              <a
                href={feedbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  className="w-full sm:w-auto py-3.5 px-8 text-sm font-medium tracking-wide bg-gradient-to-r from-accent to-[#ff840c] hover:brightness-110 shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
                >
                  <span>Open Official Feedback Form</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
