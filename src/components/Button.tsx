import React from 'react';
import { cn } from './Section';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', href, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-display uppercase tracking-widest text-sm font-semibold transition-all duration-300 ease-out tech-border hover:scale-105 active:scale-95 touch-manipulation select-none";
    const variants = {
      // CTA green bg + ink charcoal text — high contrast, energetic
      primary:   "bg-accent text-foreground hover:brightness-110 px-8 py-4",
      // Periwinkle blue bg + ink charcoal text — data/highlight tone
      secondary: "bg-secondaryAccent text-foreground hover:brightness-110 px-8 py-4",
      // Charcoal border + charcoal text on transparent — refined on lavender
      outline:   "border border-foreground/30 text-foreground hover:border-accent hover:text-accent px-8 py-4",
      // Minimal — muted text, no border
      ghost:     "text-muted hover:text-foreground px-4 py-2 tech-border-none",
    };

    const combinedStyles = cn(baseStyles, variants[variant], className);

    if (href) {
      return (
        <a href={href} className={combinedStyles}>
          {children}
        </a>
      );
    }

    return (
      <button 
        ref={ref} 
        className={combinedStyles} 
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
