interface ConcentricBlueprintRingsProps {
  stage?: number; // 0: hidden, 1: inner ring, 2: two rings, 3: full rings + glows
  isTouched?: boolean;
  isHovered?: boolean;
  pulse?: boolean;
  className?: string;
}

export default function ConcentricBlueprintRings({
  stage = 3,
  isTouched = false,
  isHovered = false,
  pulse = false,
  className = '',
}: ConcentricBlueprintRingsProps) {
  if (stage <= 0) return null;

  const active = isTouched || isHovered || pulse;

  return (
    <div
      className={`absolute inset-0 pointer-events-none -z-10 overflow-visible flex items-center justify-center transition-all duration-700 ${className}`}
    >
      {/* ── 1. Atmospheric Glows ───────────────────────────────── */}
      {/* Cyan primary glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 rounded-full transition-all duration-700 ease-out pointer-events-none ${
          stage >= 2 ? 'opacity-100' : 'opacity-0 scale-75'
        } ${
          active
            ? 'bg-accent/45 blur-[100px] sm:blur-[130px] scale-110 shadow-[0_0_120px_rgba(56,189,248,0.6)]'
            : 'bg-accent/20 blur-[70px] sm:blur-[100px] scale-100'
        }`}
      />

      {/* Amber/Orange secondary warmth matching robot arm */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 rounded-full transition-all duration-700 ease-out pointer-events-none ${
          stage >= 2 ? 'opacity-100' : 'opacity-0 scale-75'
        } ${
          active
            ? 'bg-[#ff840c]/30 blur-[90px] sm:blur-[120px] scale-105'
            : 'bg-[#ff840c]/10 blur-[70px] scale-95 opacity-50'
        }`}
      />

      {/* Deep secondary accent aura */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 lg:w-[500px] h-72 sm:h-96 lg:h-[500px] bg-secondaryAccent/20 blur-[90px] sm:blur-[140px] rounded-full transition-all duration-700 ease-out pointer-events-none ${
          stage >= 3 ? 'opacity-100' : 'opacity-0 scale-75'
        } ${active ? 'bg-secondaryAccent/35 scale-110' : 'scale-100'}`}
      />

      {/* ── 2. Concentric Blueprint Ring 1 (Inner) ───────────── */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[320px] lg:w-[330px] h-[260px] sm:h-[320px] lg:h-[330px] rounded-full transition-all duration-700 ease-out pointer-events-none ${
          stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        } ${
          active
            ? 'border-2 border-accent/80 shadow-[0_0_40px_rgba(56,189,248,0.7),inset_0_0_25px_rgba(56,189,248,0.35)] scale-105'
            : 'border border-accent/25 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
        }`}
      />

      {/* ── 3. Rotating Dashed Orbit Telemetry Ring ───────────── */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[390px] lg:w-[400px] h-[300px] sm:h-[390px] lg:h-[400px] rounded-full border border-dashed transition-all duration-700 ease-out pointer-events-none ${
          stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        } ${
          active
            ? 'border-accent/60 shadow-[0_0_30px_rgba(56,189,248,0.4)] animate-[spin_35s_linear_infinite] scale-105'
            : 'border-accent/15 border-dashed opacity-40'
        }`}
      />

      {/* ── 4. Concentric Blueprint Ring 2 (Middle) ──────────── */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] lg:w-[480px] h-[340px] sm:h-[460px] lg:h-[480px] rounded-full transition-all duration-700 ease-out delay-75 pointer-events-none ${
          stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        } ${
          active
            ? 'border border-accent/60 shadow-[0_0_60px_rgba(56,189,248,0.5),inset_0_0_30px_rgba(56,189,248,0.2)] scale-105'
            : 'border border-accent/15 shadow-[0_0_25px_rgba(56,189,248,0.12)]'
        }`}
      >
        {/* Radar crosshair tick marks that illuminate on hover */}
        <span
          className={`absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-accent transition-all duration-500 ${
            active ? 'opacity-90 shadow-[0_0_10px_rgba(56,189,248,0.9)]' : 'opacity-20'
          }`}
        />
        <span
          className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-accent transition-all duration-500 ${
            active ? 'opacity-90 shadow-[0_0_10px_rgba(56,189,248,0.9)]' : 'opacity-20'
          }`}
        />
        <span
          className={`absolute top-1/2 -left-1 -translate-y-1/2 w-1 h-2 bg-accent transition-all duration-500 ${
            active ? 'opacity-90 shadow-[0_0_10px_rgba(56,189,248,0.9)]' : 'opacity-20'
          }`}
        />
        <span
          className={`absolute top-1/2 -right-1 -translate-y-1/2 w-1 h-2 bg-accent transition-all duration-500 ${
            active ? 'opacity-90 shadow-[0_0_10px_rgba(56,189,248,0.9)]' : 'opacity-20'
          }`}
        />
      </div>

      {/* ── 5. Concentric Blueprint Ring 3 (Outer) ──────────── */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[580px] lg:w-[620px] h-[420px] sm:h-[580px] lg:h-[620px] rounded-full transition-all duration-700 ease-out delay-150 pointer-events-none ${
          stage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        } ${
          active
            ? 'border border-accent/40 shadow-[0_0_85px_rgba(56,189,248,0.35)] scale-105'
            : 'border border-accent/10 shadow-[0_0_35px_rgba(56,189,248,0.06)]'
        }`}
      />
    </div>
  );
}
