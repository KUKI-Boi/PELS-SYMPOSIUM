import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, User, Calendar, Award, CheckCircle2, Ticket, Hotel } from 'lucide-react';
import { Button } from './Button';
import { eventData } from '../data/event';

export interface ShowcaseModalData {
  title: string;
  subtitle: string;
  badge: string;
  teamSize: string;
  tracks: string[];
  guidelines: string[];
  importantDates: { label: string; date: string }[];
  googleFormUrl?: string;
}

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ShowcaseModalData | null;
}

export default function SubmissionModal({ isOpen, onClose, data }: SubmissionModalProps) {
  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040508]/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-surface border border-accent/30 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
          style={{
            background: 'radial-gradient(120% 120% at 50% 0%, #0d1527 0%, #060913 100%)',
          }}
        >
          {/* Top cybernetic accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondaryAccent to-[#ff840c]" />

          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-light/10">
            <div>
              <span className="inline-block text-[11px] font-mono tracking-widest uppercase text-accent px-2.5 py-0.5 bg-accent/10 border border-accent/20 rounded mb-2">
                {data.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                {data.title}
              </h3>
              <p className="text-muted text-sm mt-1">{data.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-muted hover:text-foreground hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
            <div className="flex items-center gap-3 p-3 bg-white/[0.03] border border-light/5 rounded-lg">
              <User className="w-5 h-5 text-accent shrink-0" />
              <div>
                <span className="text-[10px] font-mono uppercase text-muted block">Participation</span>
                <span className="text-xs sm:text-sm font-semibold text-foreground">{data.teamSize}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-emerald-500/[0.06] border border-emerald-500/20 rounded-lg">
              <Ticket className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="text-[10px] font-mono uppercase text-emerald-400/80 block">Registration Fee</span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-400">100% Free Entry</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/[0.03] border border-light/5 rounded-lg">
              <Award className="w-5 h-5 text-[#ff840c] shrink-0" />
              <div>
                <span className="text-[10px] font-mono uppercase text-muted block">Recognition</span>
                <span className="text-xs sm:text-sm font-semibold text-foreground">IEEE Certificates</span>
              </div>
            </div>
          </div>

          {/* Stay Logistics Notice */}
          <div className="mb-5 p-3 rounded-xl bg-accent/5 border border-accent/15 flex items-center gap-3 text-xs">
            <Hotel className="w-4 h-4 text-accent shrink-0" />
            <p className="text-secondaryAccent font-light">
              <strong className="text-foreground">Accommodation:</strong> On-campus hostel stay is available at Christ Kengeri Campus for outstation participants (requested directly in the External form).
            </p>
          </div>

          {/* Tracks */}
          <div className="mb-5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent mb-2.5">
              Focus Tracks & Themes
            </h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {data.tracks.map((track, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 p-2.5 bg-background/60 border border-light/5 rounded text-xs text-foreground/80 font-light"
                >
                  <span className="text-accent shrink-0 mt-0.5">•</span>
                  <span>{track}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guidelines & Criteria */}
          <div className="mb-5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-accent mb-2.5">
              Rules & Guidelines
            </h4>
            <div className="space-y-1.5">
              {data.guidelines.map((rule, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-muted font-light">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Important Dates */}
          <div className="mb-6 p-3.5 bg-surface/80 border border-light/10 rounded-xl">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-secondaryAccent">
              <Calendar className="w-4 h-4 text-accent" />
              <span>Key Timeline</span>
            </div>
            <div className="space-y-1.5 text-xs">
              {data.importantDates.map((item, i) => (
                <div key={i} className="flex justify-between items-center text-muted">
                  <span>{item.label}:</span>
                  <span className="font-mono text-foreground font-medium">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer: 2 Form Placeholders */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-light/10">
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto text-xs py-2.5"
            >
              Close
            </Button>
            
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
              <a
                href={eventData.forms.christ}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  className="w-full sm:w-auto text-xs py-2.5 whitespace-nowrap bg-gradient-to-r from-accent to-[#0ea5e9]"
                >
                  <span>Christ University Form</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </a>

              <a
                href={eventData.forms.external}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="primary"
                  className="w-full sm:w-auto text-xs py-2.5 whitespace-nowrap bg-gradient-to-r from-[#ff840c] to-[#ea580c] border-[#ff840c]"
                >
                  <span>External Form (Stay)</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
