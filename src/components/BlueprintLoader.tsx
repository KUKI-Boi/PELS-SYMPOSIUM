import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import loaderVideo from '../assets/Recreate_a_CAD_Architectural_b.mp4';

interface BlueprintLoaderProps {
  isVisible: boolean;
  onComplete: () => void;
}

export default function BlueprintLoader({ isVisible, onComplete }: BlueprintLoaderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (!isVisible) return;

    const video = videoRef.current;
    if (!video) return;

    // Safety fallback: if video doesn't play or end within 6s (e.g. Low Power Mode), proceed anyway
    const fallback = setTimeout(() => {
      onCompleteRef.current();
    }, 6000);

    const handleEnded = () => {
      clearTimeout(fallback);
      setTimeout(() => {
        onCompleteRef.current();
      }, 200);
    };

    const handleError = () => {
      clearTimeout(fallback);
      onCompleteRef.current();
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);

    // Explicitly set muted property on the DOM node for WebKit/iOS Safari compliance
    video.muted = true;
    video.defaultMuted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy prevented playback or Low Power Mode active.
        // Fallback timer will smoothly exit after a brief branded moment,
        // or user can tap anywhere to continue.
      });
    }

    return () => {
      clearTimeout(fallback);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="blueprint-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          onClick={() => onCompleteRef.current()}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#0D114A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
        >
          <video
            ref={videoRef}
            src={loaderVideo}
            muted
            autoPlay
            playsInline
            {...({ 'webkit-playsinline': 'true' } as React.VideoHTMLAttributes<HTMLVideoElement>)}
            preload="auto"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
          />

          {/* Tap to skip hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-foreground/40 uppercase tracking-widest pointer-events-none select-none">
            Tap to enter
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
