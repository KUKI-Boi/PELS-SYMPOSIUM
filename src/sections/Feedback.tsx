import { Section, SectionHeader } from '../components/Section';
import { ExternalLink, Award, MessageSquareCheck, Sparkles, AlertCircle, FileText, QrCode, Download } from 'lucide-react';
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

      <div className="mt-8 max-w-5xl mx-auto">
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

            {/* Main Content & QR Grid */}
            <div className="grid lg:grid-cols-12 gap-8 items-center mb-8">
              {/* Left Column: Information */}
              <div className="lg:col-span-7 text-center sm:text-left">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3 flex flex-col sm:flex-row items-center gap-2.5">
                  <span className="p-2 rounded-lg bg-accent/10 border border-accent/20 text-accent">
                    <MessageSquareCheck className="w-6 h-6" />
                  </span>
                  <span>Share Your Symposium Experience</span>
                </h3>
                <p className="text-muted text-sm sm:text-base font-light leading-relaxed mb-6">
                  Thank you for participating in the <strong className="text-foreground">Symposium on Industrial Automation 2026</strong>. 
                  Your feedback helps us measure the technical impact of our sessions and ensures accurate issuance of your official IEEE certificate.
                </p>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-background/60 border border-light/5 text-left">
                    <div className="flex items-center gap-2 text-accent text-xs font-mono uppercase mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Technical Depth</span>
                    </div>
                    <p className="text-xs text-muted font-light leading-snug">
                      Rate keynotes, PLC/HMI modules, VFD lab, and Node-RED IT-OT practicals.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-background/60 border border-light/5 text-left">
                    <div className="flex items-center gap-2 text-[#ff840c] text-xs font-mono uppercase mb-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>Certificate Delivery</span>
                    </div>
                    <p className="text-xs text-muted font-light leading-snug">
                      Confirm accurate name spelling for your IEEE Certificate of Participation.
                    </p>
                  </div>
                </div>

                {/* Important Notice Callout */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-foreground/90 font-light leading-relaxed text-left">
                    <strong className="font-medium text-amber-300">Mandatory for Attendance:</strong> Submission of this form is required to verify your participation and generate your verified IEEE certificate.
                  </div>
                </div>
              </div>

              {/* Right Column: Branded QR Scanner Graphic Card */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="p-4 sm:p-5 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-2xl text-center max-w-[280px] sm:max-w-[320px] w-full">
                  <div className="flex items-center justify-between mb-2 px-1 text-[11px] font-mono font-bold tracking-wider text-slate-600">
                    <span>IEEE PELS &amp; IES</span>
                    <span className="text-[#0284c7]">SIA 2026</span>
                  </div>

                  <div className="overflow-hidden rounded-xl bg-slate-50 p-2 border border-slate-200 mb-3 group relative">
                    <img 
                      src="/feedback-qr.png" 
                      alt="Symposium Official Feedback QR Scanner"
                      className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-xs font-semibold text-slate-900 flex items-center justify-center gap-1.5 mb-1">
                    <QrCode className="w-4 h-4 text-[#ea580c]" />
                    <span>Scan to Open Feedback Form</span>
                  </p>
                  <p className="text-[11px] text-slate-500 font-sans mb-3">
                    Use mobile camera or Google Lens
                  </p>

                  <a 
                    href="/feedback-qr.png" 
                    download="SIA2026-Feedback-QR.png"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download High-Res QR</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-light/10">
              <div className="flex items-center gap-2 text-xs font-mono text-muted">
                <FileText className="w-4 h-4 text-accent" />
                <span>Completion time: ~3 minutes</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <a
                  href="/feedback-qr.png"
                  download="SIA2026-Feedback-QR.png"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto text-xs py-3 px-5 flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5 text-accent" />
                    <span>Download Poster QR</span>
                  </Button>
                </a>

                <a
                  href={feedbackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="primary"
                    className="w-full sm:w-auto py-3 px-7 text-xs font-medium tracking-wide bg-gradient-to-r from-accent to-[#ff840c] hover:brightness-110 shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
                  >
                    <span>Open Feedback Form Link</span>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
