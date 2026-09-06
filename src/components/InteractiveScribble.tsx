/**
 * InteractiveScribble — GSAP-powered decorative element with:
 * 1. Ambient continuous idle wobble (sine.inOut)
 * 2. Mouse repulsion physics (cursor pushes scribble away within 180px radius)
 * 3. Scroll-driven parallax depth (each scribble moves at its own scrub speed)
 *
 * Pattern adapted from RothFinder's chaos-to-clarity hero visual language,
 * contextualised here for industrial automation complexity.
 */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Settings, Factory, Cpu, Cloud, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ScribbleProps {
  top: string;
  left: string;
  size?: number;
  /** Vertical pixel offset over a full scroll through the viewport */
  speed?: number;
  /** Initial rotation angle in degrees */
  rotateInit?: number;
  /** Which of the 5 SVG scribble drawings to use */
  variant?: 1 | 2 | 3 | 4 | 5;
  /** Opacity level — kept low so scribbles read as background texture */
  opacity?: number;
  className?: string;
}

export default function InteractiveScribble({
  top,
  left,
  size = 90,
  speed = 40,
  rotateInit = 0,
  variant = 1,
  opacity = 0.12,
  className = '',
}: ScribbleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const icon = iconRef.current;
    if (!container || !icon) return;

    const ctx = gsap.context(() => {
      // ── 1. Ambient idle wobble ────────────────────────────
      // Each scribble gently oscillates at a unique period so they
      // never sync up — gives the background a living, breathing feel.
      gsap.to(icon, {
        rotation: rotateInit + 14,
        duration: 3.2 + Math.random() * 2.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // ── 2. Scroll-driven circular orbit ──────────────────────
      // By placing the transformOrigin just outside the element,
      // and rotating it a full 360 degrees, it traces a visible 
      // circular orbit path as you scroll, without flying off screen.
      const isEven = speed % 2 === 0;
      gsap.set(container, { transformOrigin: "50% 150%" }); // Tight orbit radius
      
      gsap.to(container, {
        rotation: isEven ? 360 : -360, // Full circular loop
        y: -speed * 2.5,               // Parallax vertical movement
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // ── 3. Cursor & Touch repulsion physics ───────────────────────
      // When cursor or touch comes within 180px of scribble center,
      // it is pushed away proportionally.
      const handlePointerCoord = (clientX: number, clientY: number) => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;
        const distance = Math.hypot(deltaX, deltaY);

        const maxDistance = 180;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 22;
          const pushX = -(deltaX / distance) * force;
          const pushY = -(deltaY / distance) * force;
          const tiltDeg = -(deltaX / maxDistance) * 12;

          gsap.to(icon, {
            x: pushX,
            y: pushY,
            rotation: rotateInit + tiltDeg,
            scale: 1.15,
            duration: 0.35,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        } else {
          // Spring back — elastic easing gives it physical mass
          gsap.to(icon, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'elastic.out(1, 0.4)',
            overwrite: 'auto',
          });
        }
      };

      const handleMouseMove = (e: MouseEvent) => {
        handlePointerCoord(e.clientX, e.clientY);
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches && e.touches.length > 0) {
          handlePointerCoord(e.touches[0].clientX, e.touches[0].clientY);
        }
      };

      const handleTouchEnd = () => {
        gsap.to(icon, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'elastic.out(1, 0.4)',
          overwrite: 'auto',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchstart', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleTouchEnd, { passive: true });

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchstart', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }, containerRef);

    return () => ctx.revert();
  }, [speed, rotateInit]);

  return (
    <div
      ref={containerRef}
      className={`absolute pointer-events-none select-none z-[1] ${className}`}
      style={{ top, left, width: size, height: size }}
      aria-hidden="true"
    >
      <div
        ref={iconRef}
        className="w-full h-full"
        style={{
          color: '#121316',   // Ink Charcoal — darker for stronger contrast
          opacity,
          transform: `rotate(${rotateInit}deg)`,
          willChange: 'transform',
        }}
      >
        {variant === 1 && <Settings className="w-full h-full" strokeWidth={1} />}
        {variant === 2 && <Factory className="w-full h-full" strokeWidth={1} />}
        {variant === 3 && <Cpu className="w-full h-full" strokeWidth={1} />}
        {variant === 4 && <Cloud className="w-full h-full" strokeWidth={1} />}
        {variant === 5 && <Database className="w-full h-full" strokeWidth={1} />}
      </div>
    </div>
  );
}
