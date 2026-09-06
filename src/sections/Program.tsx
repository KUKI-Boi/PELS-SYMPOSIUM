import { useState } from 'react';
import { Section, SectionHeader, cn } from '../components/Section';
import { eventData } from '../data/event';
import { Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Program() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  const getBadgeColor = (type: string) => {
    switch(type) {
      case 'KEYNOTE':
      case 'TALK':
      case 'FIRESIDE': return 'border-accent text-accent bg-accent/10';
      case 'WORKSHOP': return 'border-secondaryAccent text-secondaryAccent bg-secondaryAccent/10';
      case 'NETWORKING': return 'border-yellow-500/50 text-yellow-500 bg-yellow-500/10';
      case 'PANEL': return 'border-purple-400/50 text-purple-400 bg-purple-400/10';
      case 'TECHNICAL':
      case 'COMPETITION': return 'border-blue-400/50 text-blue-400 bg-blue-400/10';
      default: return 'border-light/20 text-muted bg-light/5';
    }
  };

  return (
    <Section id="program">
      <SectionHeader 
        title="Technical Program" 
        subtitle="A comprehensive two-day schedule of expert talks, hands-on workshops, and competitive presentations."
      />

      <div className="mt-12">
        <div className="flex gap-4 mb-12 border-b border-light/10 pb-px">
          {(['day1', 'day2'] as const).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={cn(
                "pb-4 px-4 font-display font-bold uppercase tracking-wider text-lg transition-colors relative",
                activeDay === day ? "text-accent" : "text-muted hover:text-foreground"
              )}
            >
              Day 0{day === 'day1' ? '1' : '2'}
              {activeDay === day && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              {eventData.schedule[activeDay].map((item, idx) => (
                <div key={idx} className="group glass-panel p-6 flex flex-col md:flex-row gap-6 md:items-center hover:border-accent/40 transition-colors tech-border-none border border-light/10 relative overflow-hidden">
                  
                  {/* Subtle hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
                  
                  <div className="md:w-64 flex-shrink-0 flex items-center gap-3 text-muted font-mono relative z-10">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{item.time}</span>
                  </div>
                  
                  <div className="flex-1 relative z-10">
                    <h4 className="text-xl font-display font-medium text-foreground">{item.title}</h4>
                  </div>
                  
                  <div className="relative z-10">
                    <span className={cn(
                      "px-3 py-1 rounded text-xs font-mono font-bold tracking-wider border",
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
