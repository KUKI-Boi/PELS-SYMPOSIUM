import { Section, SectionHeader } from '../components/Section';
import { FileText, Lightbulb, Lock } from 'lucide-react';
import { Button } from '../components/Button';

export default function Presentations() {
  return (
    <Section id="presentations" className="bg-background relative border-b border-light/5">
      <SectionHeader 
        title="Technical Showcases" 
        subtitle="Opportunities to present research and demonstrate innovative projects to industry experts."
      />

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        
        {/* Paper Presentation */}
        <div className="glass-panel border border-light/10 p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <FileText className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            <h3 className="font-display text-3xl font-semibold mb-4 text-foreground">Paper Presentation</h3>
            <p className="text-muted font-light mb-8 max-w-sm">
              Present your research on recent trends in industrial electronics. Selected papers will be reviewed by academic and industry experts.
            </p>
            
            <div className="space-y-4 mb-8">
              {['Submission Guidelines', 'Important Dates', 'Paper Template'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-muted font-mono bg-surface/50 p-3 border border-light/5">
                  <Lock className="w-4 h-4 text-foreground/30" />
                  <span>{item} <span className="text-accent/60 ml-2">— Coming Soon</span></span>
                </div>
              ))}
            </div>

            <Button variant="outline" disabled className="opacity-50 cursor-not-allowed">
              Submission Portal Closed
            </Button>
          </div>
        </div>

        {/* Project Competition */}
        <div className="glass-panel border border-light/10 p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Lightbulb className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            <h3 className="font-display text-3xl font-semibold mb-4 text-foreground">Project Competition</h3>
            <div className="space-y-2 text-secondaryAccent font-mono text-sm tracking-widest mb-6 uppercase">
              <p>Showcase engineering ideas.</p>
              <p>Build practical solutions.</p>
              <p>Present your project.</p>
            </div>
            
            <div className="space-y-4 mb-8">
              {['Rules & Eligibility', 'Judging Criteria', 'Prize Details'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-muted font-mono bg-surface/50 p-3 border border-light/5">
                  <Lock className="w-4 h-4 text-foreground/30" />
                  <span>{item} <span className="text-accent/60 ml-2">— Coming Soon</span></span>
                </div>
              ))}
            </div>

            <Button variant="outline" disabled className="opacity-50 cursor-not-allowed">
              Registration Closed
            </Button>
          </div>
        </div>

      </div>
    </Section>
  );
}
