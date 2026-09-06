import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
  /** If true, animates direct children with a stagger effect instead of the wrapper */
  stagger?: boolean;
  staggerDelay?: number;
}

export default function Reveal({
  children,
  delay = 0,
  yOffset = 40,
  className = '',
  stagger = false,
  staggerDelay = 0.12,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // gsap.context() scopes all GSAP animations to this element and provides
    // a clean .revert() method — the correct pattern for React StrictMode
    const ctx = gsap.context(() => {
      if (stagger) {
        // Stagger animation: children cascade in one-by-one
        gsap.fromTo(
          el.children,
          { y: yOffset, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay,
            ease: 'power3.out',
            stagger: staggerDelay,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      } else {
        // Standard single-element reveal
        gsap.fromTo(
          el,
          { y: yOffset, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, elementRef);

    return () => ctx.revert();
  }, [delay, yOffset, stagger, staggerDelay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
