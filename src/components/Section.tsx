import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 px-6", className)} {...props}>
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-16 md:mb-24">
      <h2 className="text-3xl md:text-5xl font-display font-semibold uppercase text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-lg md:text-xl max-w-2xl font-light">
          {subtitle}
        </p>
      )}
      <div className="mt-8 h-px w-24 bg-accent"></div>
    </div>
  );
}
