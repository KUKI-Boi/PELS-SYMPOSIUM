import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import loaderSvg from '../assets/pels-loader.svg';

interface PelsLoaderProps {
  isVisible: boolean;
  onComplete: () => void;
}

export default function PelsLoader({ isVisible, onComplete }: PelsLoaderProps) {
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (!isVisible) return;

    let currentProgress = 0;
    let timerId: ReturnType<typeof setTimeout>;

    const step = () => {
      // Dynamic increment: brisk start, smoothly easing towards 100% in ~2.2s
      const increment =
        currentProgress < 45
          ? Math.random() * 4.5 + 2.8
          : currentProgress < 80
          ? Math.random() * 3.2 + 1.8
          : Math.random() * 2.2 + 1.0;

      currentProgress = Math.min(100, currentProgress + increment);
      setProgress(Math.floor(currentProgress));

      if (currentProgress >= 100) {
        timerId = setTimeout(() => {
          onCompleteRef.current();
        }, 350);
      } else {
        const delay = 25 + Math.random() * 30;
        timerId = setTimeout(step, delay);
      }
    };

    timerId = setTimeout(step, 60);

    return () => {
      clearTimeout(timerId);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="pels-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: 'blur(10px)',
          }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => onCompleteRef.current()}
          className="fixed inset-0 z-[9999] w-screen h-[100dvh] flex flex-col justify-between items-center cursor-pointer select-none overflow-hidden touch-none"
          style={{
            backgroundColor: '#07121f',
            backgroundImage:
              'radial-gradient(1100px 700px at 50% 45%, #0c2338 0%, #07121f 65%, #040913 100%)',
            paddingTop: 'max(1rem, env(safe-area-inset-top))',
            paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))',
            paddingLeft: 'max(1rem, env(safe-area-inset-left))',
            paddingRight: 'max(1rem, env(safe-area-inset-right))',
          }}
        >
          {/* Edge-to-edge dot grid matrix covering the complete device */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, #78b0c4 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />

          {/* Dynamic atmospheric energy glows centered on the device screen */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] md:w-[720px] h-[260px] sm:h-[400px] bg-[#32dcec]/15 blur-[90px] sm:blur-[140px] rounded-full pointer-events-none -z-10" />
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[320px] md:w-[420px] h-[180px] sm:h-[260px] bg-[#f1b846]/15 blur-[70px] sm:blur-[110px] rounded-full pointer-events-none -z-10" />

          {/* ── TOP HUD BAR ────────────────────────────────────── */}
          <header className="relative z-10 w-full max-w-6xl px-4 sm:px-8 pt-2 sm:pt-4 flex justify-between items-start pointer-events-none font-mono text-xs tracking-wider text-[#6fe3f0]">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-sm bg-accent animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-[#a8f4fc] tracking-widest uppercase">
                  IEEE PELS // BANGALORE CHAPTER
                </span>
              </div>
              <div className="text-[10px] sm:text-xs text-[#6fe3f0]/70 mt-0.5 tracking-wider">
                SYMPOSIUM ON INDUSTRIAL AUTOMATION 2026
              </div>
            </div>

            <div className="text-right flex flex-col items-end">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#32dcec] animate-ping" />
                <span className="text-[#a8f4fc] font-bold text-[10px] sm:text-xs tracking-wider">
                  {progress < 100 ? 'SYSTEM INITIALIZING' : 'CORE ONLINE'}
                </span>
              </div>
              <div className="text-[10px] text-[#6fe3f0]/70 mt-0.5 tracking-wider hidden sm:block">
                CHRIST UNIVERSITY // KENGERI
              </div>
            </div>
          </header>

          {/* ── CENTER: SCALABLE & RESPONSIVE PELS ANIMATION ────── */}
          <div className="relative z-10 flex-1 min-h-0 w-full flex flex-col items-center justify-center px-3 sm:px-6 my-auto">
            <div className="relative w-full max-w-[min(94vw,840px)] max-h-[58vh] aspect-[960/600] flex items-center justify-center">
              {/* Scalable PELS Animated Graphic */}
              <img
                src={loaderSvg}
                alt="IEEE PELS Symposium Loading"
                className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_0_35px_rgba(50,220,236,0.2)] select-none pointer-events-none"
              />
            </div>

            {/* Technical Track Subsystems under the graphic */}
            <div className="mt-2 sm:mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[9px] sm:text-[11px] font-mono text-[#6fe3f0]/75 tracking-widest uppercase">
              <span>POWER ELECTRONICS</span>
              <span className="text-accent/40 hidden sm:inline">•</span>
              <span>INDUSTRIAL AUTOMATION</span>
              <span className="text-accent/40 hidden sm:inline">•</span>
              <span>SMART DRIVES &amp; SYSTEMS</span>
            </div>
          </div>

          {/* ── BOTTOM HUD & PROGRESS BAR ───────────────────────── */}
          <footer className="relative z-10 w-full max-w-xl px-4 sm:px-6 pb-2 sm:pb-4 flex flex-col items-center pointer-events-none">
            <div className="w-full font-mono text-xs text-[#6fe3f0]">
              <div className="flex justify-between items-center mb-2">
                <span className="tracking-widest uppercase text-[10px] sm:text-xs truncate mr-2">
                  {progress < 30
                    ? 'INITIALIZING POWER ELECTRONICS CORE...'
                    : progress < 65
                    ? 'LOADING SESSIONS & AUTOMATION TRACKS...'
                    : progress < 90
                    ? 'SYNCHRONIZING SYMPOSIUM PLATFORM...'
                    : progress < 100
                    ? 'CALIBRATION COMPLETE // LAUNCHING...'
                    : 'SYSTEM READY // ENTERING'}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#a8f4fc] shrink-0">
                  {progress}%
                </span>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full h-2 rounded-full bg-accent/15 overflow-hidden p-[1px] border border-accent/30 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                <div
                  className="h-full bg-gradient-to-r from-[#1597cf] via-[#32dcec] to-[#f1b846] rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_rgba(50,220,236,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Tap to skip hint */}
              <div className="mt-3 text-center text-[10px] sm:text-xs text-[#6fe3f0]/50 tracking-[0.25em] uppercase">
                Tap anywhere to enter
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
