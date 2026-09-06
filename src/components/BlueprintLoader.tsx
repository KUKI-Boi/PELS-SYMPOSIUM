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

    // Fallback: if video doesn't end naturally within 15s, complete anyway
    const fallback = setTimeout(() => {
      onCompleteRef.current();
    }, 15000);

    const handleEnded = () => {
      clearTimeout(fallback);
      // Small pause at end before fading out
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

    // Autoplay
    video.play().catch(() => {
      // If autoplay blocked, still complete after fallback timeout
    });

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
            playsInline
            autoPlay
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
