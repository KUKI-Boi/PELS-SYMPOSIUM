interface ConcentricBlueprintRingsProps {
  stage?: number; // 0: hidden, 1: inner ring, 2: two rings, 3: full rings + glows
  isTouched?: boolean;
  pulse?: boolean;
  className?: string;
}

export default function ConcentricBlueprintRings({
  stage = 3,
  isTouched = false,
  pulse = false,
  className = '',
}: ConcentricBlueprintRingsProps) {
  if (stage <= 0) return null;

  return (
    <div className={`absolute inset-0 pointer-events-none -z-10 overflow-visible flex items-center justify-center ${className}`}>
      {/* Radial Atmospheric Glows */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-accent/25 blur-[70px] sm:blur-[110px] rounded-full transition-all duration-700 ease-out pointer-events-none ${
          stage >= 2 ? 'opacity-100' : 'opacity-0 scale-75'
        } ${isTouched || pulse ? 'bg-accent/40 blur-[130px] scale-105' : ''}`}
      />
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 lg:w-[480px] h-72 sm:h-96 lg:h-[480px] bg-secondaryAccent/20 blur-[80px] sm:blur-[130px] rounded-full transition-all duration-700 ease-out pointer-events-none ${
          stage >= 3 ? 'opacity-100' : 'opacity-0 scale-75'
        } ${isTouched || pulse ? 'bg-secondaryAccent/35 scale-105' : ''}`}
      />

      {/* Tech Concentric Blueprint Ring 1 (Inner) */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[320px] lg:w-[320px] h-[260px] sm:h-[320px] lg:h-[320px] rounded-full border border-white/10 transition-all duration-700 ease-out pointer-events-none ${
          stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        } ${
          isTouched || pulse
            ? 'border-accent/50 shadow-[0_0_35px_rgba(56,189,248,0.5)] scale-105'
            : 'border-accent/30 shadow-[0_0_20px_rgba(56,189,248,0.25)]'
        }`}
      />

      {/* Tech Concentric Blueprint Ring 2 (Middle) */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[450px] lg:w-[460px] h-[340px] sm:h-[450px] lg:h-[460px] rounded-full border border-white/5 transition-all duration-700 ease-out delay-75 pointer-events-none ${
          stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        } ${
          isTouched || pulse
            ? 'border-accent/35 shadow-[0_0_55px_rgba(56,189,248,0.35)] scale-105'
            : 'border-accent/20 shadow-[0_0_30px_rgba(56,189,248,0.15)]'
        }`}
      />

      {/* Tech Concentric Blueprint Ring 3 (Outer) */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[580px] lg:w-[600px] h-[420px] sm:h-[580px] lg:h-[600px] rounded-full border border-white/5 transition-all duration-700 ease-out delay-150 pointer-events-none ${
          stage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        } ${
          isTouched || pulse
            ? 'border-accent/25 shadow-[0_0_75px_rgba(56,189,248,0.2)] scale-105'
            : 'border-accent/10 shadow-[0_0_40px_rgba(56,189,248,0.08)]'
        }`}
      />
    </div>
  );
}
