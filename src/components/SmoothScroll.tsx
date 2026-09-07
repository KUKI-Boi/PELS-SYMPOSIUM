import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Touch detection: on mobile devices (iOS Safari, Android Chrome, touchscreens),
    // Virtual scroll interception by Lenis can swallow touch drag gestures or lock momentum scroll.
    // Preserving 100% native touch scrolling ensures instant 120Hz momentum scrolling on all mobile phones.
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches);

    if (isTouchDevice) {
      // Keep ScrollTrigger synchronized with native window scroll on touch devices
      const handleNativeScroll = () => {
        ScrollTrigger.update();
      };
      window.addEventListener('scroll', handleNativeScroll, { passive: true });

      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        window.removeEventListener('scroll', handleNativeScroll);
      };
    }

    // On desktop / non-touch environments, initialize smooth inertial scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  return <>{children}</>;
}
