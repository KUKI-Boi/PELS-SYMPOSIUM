/**
 * ScribbleIcon — Five distinct hand-drawn SVG scribble variants.
 * Each represents the visual "noise" of complex industrial system problems.
 * Inspired by RothFinder's chaos-to-clarity visual language.
 */

interface ScribbleProps {
  className?: string;
  variant?: 1 | 2 | 3 | 4 | 5;
}

// Variant 1: Dense tangled chaotic ball (high entropy)
const Scribble1 = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor"
    strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M48,52 C42,47 38,58 45,63 C55,69 68,54 59,42 C48,27 25,41 31,60 C37,78 68,82 77,65 C87,46 72,18 48,20 C22,22 12,56 22,78 C33,101 77,98 87,74 C97,48 78,12 45,10 C15,8 2,48 10,76 C19,103 72,106 89,84 C104,63 94,22 66,12 C35,1 7,29 5,61 C3,93 39,108 71,98 C100,88 105,48 88,24" />
  </svg>
);

// Variant 2: Rose / tight inward spiral (tight complexity)
const Scribble2 = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor"
    strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M50,50 C50,44 56,40 62,44 C68,48 68,58 62,62 C54,68 42,64 38,56 C33,46 38,32 50,28 C63,24 76,32 78,46 C81,62 72,76 58,80 C42,84 26,74 22,58 C17,40 28,22 46,18 C66,13 84,26 86,46 C89,67 76,86 56,88 C34,90 14,76 12,54 C9,30 24,10 48,8 C73,6 94,23 94,48 C94,74 76,92 50,92" />
  </svg>
);

// Variant 3: Loose overlapping large ellipses (signal interference)
const Scribble3 = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor"
    strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="50" cy="50" rx="38" ry="22" transform="rotate(-20 50 50)" />
    <ellipse cx="50" cy="50" rx="38" ry="20" transform="rotate(10 50 50)" />
    <ellipse cx="50" cy="50" rx="35" ry="18" transform="rotate(40 50 50)" />
    <ellipse cx="50" cy="50" rx="32" ry="16" transform="rotate(-50 50 50)" />
    <ellipse cx="52" cy="48" rx="28" ry="14" transform="rotate(70 52 48)" />
    <ellipse cx="48" cy="52" rx="24" ry="12" transform="rotate(-5 48 52)" />
    <ellipse cx="50" cy="50" rx="18" ry="10" transform="rotate(55 50 50)" />
    <ellipse cx="50" cy="50" rx="12" ry="7" transform="rotate(-30 50 50)" />
  </svg>
);

// Variant 4: Erratic angular zigzag (noisy signal waveform)
const Scribble4 = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor"
    strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10,50 C18,30 24,70 34,48 C40,35 44,65 52,44 C58,28 62,72 70,46 C76,30 80,68 90,50" />
    <path d="M10,58 C16,38 22,78 32,56 C38,42 44,72 52,52 C58,36 64,78 72,54 C78,38 84,76 90,58" />
    <path d="M10,42 C18,22 26,62 36,40 C44,22 48,60 56,36 C64,14 68,66 76,42 C82,24 88,62 90,42" />
  </svg>
);

// Variant 5: Concentric uneven loops (process loop disorder)
const Scribble5 = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor"
    strokeWidth="1.0" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M50,82 C28,82 14,68 14,50 C14,32 28,18 50,18 C72,18 86,32 86,50 C86,68 72,82 50,82" />
    <path d="M50,74 C32,76 20,62 22,46 C24,30 38,20 54,22 C70,24 80,38 78,54 C76,70 62,78 50,74" />
    <path d="M50,66 C36,68 26,56 28,44 C30,32 42,24 54,28 C66,32 72,46 68,58 C64,70 56,66 50,66" />
    <path d="M50,58 C40,60 34,50 36,42 C38,34 48,30 56,34 C64,38 66,50 60,56 C56,60 52,58 50,58" />
    <path d="M50,50 C44,52 40,46 44,42 C47,38 54,40 56,46 C57,50 54,52 50,50" />
  </svg>
);

const variants = { 1: Scribble1, 2: Scribble2, 3: Scribble3, 4: Scribble4, 5: Scribble5 };

export const ScribbleIcon = ({ className = '', variant = 1 }: ScribbleProps) => {
  const Component = variants[variant];
  return <Component className={className} />;
};
