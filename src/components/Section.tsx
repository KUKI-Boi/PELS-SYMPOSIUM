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
    <section id={id} className={cn("py-12 sm:py-16 lg:py-20 px-6", className)} {...props}>
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, className = '' }: { title: string; subtitle?: string; className?: string }) {
  return (
    <div className={cn("mb-8 sm:mb-10", className)}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold uppercase text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-sm sm:text-base md:text-lg max-w-2xl font-light">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-px w-20 bg-accent"></div>
    </div>
  );
}
