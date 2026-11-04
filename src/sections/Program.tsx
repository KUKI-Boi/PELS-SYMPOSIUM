import { useState } from 'react';
import { Section, SectionHeader, cn } from '../components/Section';
import { eventData } from '../data/event';
import { Clock, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Program() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  const daysInfo = [
    { id: 'day1' as const, label: 'Day 01', date: '25 November 2026', subtitle: 'Basics of PLC & HMI Programming' },
    { id: 'day2' as const, label: 'Day 02', date: '26 November 2026', subtitle: 'Advance PLC, VFD & IT-OT Node-RED' },
  ];

  const getBadgeColor = (type: string) => {
    switch(type) {
      case 'KEYNOTE': return 'border-accent text-accent bg-accent/10';
      case 'OPENING': return 'border-purple-400/60 text-purple-400 bg-purple-400/10';
      case 'TECHNICAL': return 'border-sky-400/60 text-sky-400 bg-sky-400/10';
      case 'HANDS-ON': return 'border-emerald-400/60 text-emerald-400 bg-emerald-400/10 shadow-[0_0_12px_rgba(52,211,153,0.15)]';
      case 'NETWORKING': return 'border-amber-400/60 text-amber-400 bg-amber-400/10';
      default: return 'border-light/20 text-muted bg-light/5';
    }
  };

  return (
    <Section id="program">
      <SectionHeader 
        title="Technical Program" 
        subtitle="A comprehensive two-day hands-on agenda featuring expert keynote sessions, PLC & HMI workshops, VFD drives, and IT-OT Node-RED integration."
      />

      <div className="mt-8 sm:mt-12">
        {/* Day selection tabs */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mb-8 sm:mb-10 border-b border-light/10 pb-px">
          {daysInfo.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={cn(
                "pb-3 sm:pb-4 px-3 sm:px-4 font-display transition-colors relative text-left group",
                activeDay === day.id ? "text-accent" : "text-muted hover:text-foreground"
              )}
            >
              <div className="flex items-center gap-2">
                <span className="font-bold uppercase tracking-wider text-base sm:text-lg">
                  {day.label}
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface/80 border border-light/10 text-secondaryAccent group-hover:text-accent transition-colors flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-accent" />
                  {day.date}
                </span>
              </div>
              <div className="text-[11px] sm:text-xs font-mono text-muted/70 font-light mt-0.5 hidden sm:block">
                {day.subtitle}
              </div>
              {activeDay === day.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        {/* Schedule timeline list */}
        <div className="relative min-h-[460px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-3.5 sm:gap-4"
            >
              {eventData.schedule[activeDay].map((item, idx) => (
                <div 
                  key={idx} 
                  className="group glass-panel p-4 sm:p-5 flex flex-col md:flex-row gap-3 sm:gap-6 md:items-center hover:border-accent/40 transition-colors border border-light/10 relative overflow-hidden rounded-xl"
                >
                  {/* Subtle hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
                  
                  {/* Time */}
                  <div className="md:w-56 flex-shrink-0 flex items-center gap-2.5 text-muted font-mono text-xs sm:text-sm relative z-10">
                    <Clock className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-foreground/90 font-medium">{item.time}</span>
                  </div>
                  
                  {/* Title */}
                  <div className="flex-1 relative z-10">
                    <h4 className="text-sm sm:text-base font-display font-medium text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  
                  {/* Badge */}
                  <div className="relative z-10 self-start md:self-auto">
                    <span className={cn(
                      "px-2.5 py-0.5 rounded text-[10px] sm:text-xs font-mono font-semibold tracking-wider border uppercase",
                      getBadgeColor(item.type)
                    )}>
                      {item.type}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
