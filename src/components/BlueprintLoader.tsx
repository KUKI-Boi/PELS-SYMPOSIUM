import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BlueprintLoaderProps {
  isVisible: boolean;
  onComplete: () => void;
}

export default function BlueprintLoader({ isVisible, onComplete }: BlueprintLoaderProps) {
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (!isVisible) return;

    let currentProgress = 0;
    let timerId: ReturnType<typeof setTimeout>;

    const step = () => {
      // Realistic simulation: fast start, easing near finish, completes in ~2.8s - 3.2s
      const increment =
        currentProgress < 55
          ? Math.random() * 4.5 + 2.5
          : currentProgress < 85
          ? Math.random() * 2.8 + 1.2
          : Math.random() * 1.6 + 0.6;

      currentProgress = Math.min(100, currentProgress + increment);
      setProgress(Math.floor(currentProgress));

      if (currentProgress >= 100) {
        // Hold briefly at 100% to let the user see SYSTEM READY, then complete
        timerId = setTimeout(() => {
          onCompleteRef.current();
        }, 450);
      } else {
        const delay = 35 + Math.random() * 45;
        timerId = setTimeout(step, delay);
      }
    };

    timerId = setTimeout(step, 100);

    return () => {
      clearTimeout(timerId);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="blueprint-vector-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.04,
            filter: 'blur(8px)',
          }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => onCompleteRef.current()}
          className="fixed inset-0 z-[9999] flex items-center justify-center cursor-pointer select-none overflow-hidden"
          style={{
            background: 'radial-gradient(1200px 700px at 50% 40%, #0c1d3a 0%, #081226 60%, #050b18 100%)',
          }}
        >
          {/* Blueprint Canvas Container */}
          <div className="w-[min(94vw,880px)] p-2 sm:p-4">
            <svg
              viewBox="0 0 800 500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Loading RA-6X Blueprint"
              className="w-full h-auto block drop-shadow-2xl"
              style={{
                fontFamily: '"Courier New", Courier, monospace',
              }}
            >
              <defs>
                <pattern id="loaderGridS" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M20 0H0V20" fill="none" stroke="rgba(111,227,240,0.07)" strokeWidth="1" />
                </pattern>
                <pattern id="loaderGridL" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M100 0H0V100" fill="none" stroke="rgba(111,227,240,0.15)" strokeWidth="1" />
                </pattern>
                <linearGradient id="loaderScanGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="rgba(111,227,240,0)" />
                  <stop offset=".5" stopColor="rgba(111,227,240,.28)" />
                  <stop offset="1" stopColor="rgba(111,227,240,0)" />
                </linearGradient>
                <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto-start-reverse">
                  <path d="M0 0 L6 3 L0 6" fill="none" stroke="rgba(111,227,240,.55)" strokeWidth="1" />
                </marker>
              </defs>

              {/* ======= BACKGROUND / GRID ======= */}
              <rect width="800" height="500" fill="#081226" />
              <rect width="800" height="500" fill="url(#loaderGridS)" />
              <rect width="800" height="500" fill="url(#loaderGridL)" />

              {/* scanline sweep */}
              <rect x="-60" y="8" width="60" height="484" fill="url(#loaderScanGrad)">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to="860 0"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </rect>

              {/* frame border */}
              <rect x="8" y="8" width="784" height="484" fill="none" stroke="rgba(111,227,240,.55)" strokeWidth="1.5" />

              {/* ======= ROBOTIC ARM (blueprint line art) ======= */}
              <g
                stroke="#6fe3f0"
                fill="none"
                strokeWidth="1.5"
                style={{ filter: 'drop-shadow(0 0 3px rgba(111,227,240,.65))' }}
              >
                {/* base plate */}
                <path d="M175 470 L325 470 L303 442 L197 442 Z" />
                <line x1="197" y1="442" x2="303" y2="442" strokeWidth="1" />
                <circle cx="192" cy="466" r="2.5" />
                <circle cx="308" cy="466" r="2.5" />
                <circle cx="206" cy="447" r="2" />
                <circle cx="294" cy="447" r="2" />

                {/* pedestal */}
                <rect x="218" y="416" width="64" height="26" />
                <line x1="218" y1="429" x2="282" y2="429" strokeWidth="1" />
                <rect x="206" y="422" width="12" height="14" strokeWidth="1" />

                {/* turret */}
                <rect x="224" y="394" width="52" height="22" />
                <line x1="224" y1="405" x2="276" y2="405" strokeWidth="1" />

                {/* joint J1 */}
                <circle cx="250" cy="372" r="40" />
                <circle cx="250" cy="372" r="28" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="250" cy="372" r="8" />
                <circle cx="250" cy="372" r="2" fill="#6fe3f0" />
                <circle cx="284" cy="372" r="2.5" strokeWidth="1" />
                <circle cx="216" cy="372" r="2.5" strokeWidth="1" />
                <circle cx="250" cy="338" r="2.5" strokeWidth="1" />
                <circle cx="250" cy="406" r="2.5" strokeWidth="1" />

                {/* rotating dashed arc around J1 */}
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 250 372"
                    to="360 250 372"
                    dur="16s"
                    repeatCount="indefinite"
                  />
                  <circle cx="250" cy="372" r="50" strokeWidth="1" strokeDasharray="10 14" opacity=".7" />
                </g>

                {/* rotation limit arc */}
                <path d="M 279 322 A 58 58 0 0 1 279 422" strokeWidth="1" strokeDasharray="3 3" opacity=".8" />
                <line x1="279" y1="322" x2="271" y2="330" strokeWidth="1" />
                <line x1="279" y1="422" x2="271" y2="414" strokeWidth="1" />

                {/* lower arm (angled) */}
                <g transform="translate(250,372) rotate(-52.4)">
                  <rect x="6" y="-17" width="216" height="34" rx="2" />
                  <line x1="14" y1="-8" x2="216" y2="-8" strokeWidth="1" />
                  <line x1="14" y1="8" x2="216" y2="8" strokeWidth="1" />
                  <line x1="40" y1="-17" x2="40" y2="17" strokeWidth="1" />
                  <line x1="80" y1="-17" x2="80" y2="17" strokeWidth="1" />
                  <line x1="120" y1="-17" x2="120" y2="17" strokeWidth="1" />
                  <line x1="160" y1="-17" x2="160" y2="17" strokeWidth="1" />
                  {/* motors M1 / M2 at elbow end */}
                  <rect x="172" y="-38" width="36" height="20" strokeWidth="1.2" />
                  <rect x="172" y="18" width="36" height="20" strokeWidth="1.2" />
                </g>
                <text x="344" y="245" fontSize="11" stroke="none" fill="#6fe3f0" letterSpacing="1">M1</text>
                <text x="344" y="215" fontSize="11" stroke="none" fill="#6fe3f0" letterSpacing="1">M2</text>

                {/* elbow joint J3 */}
                <circle cx="390" cy="190" r="44" />
                <circle cx="390" cy="190" r="12" />
                <circle cx="390" cy="190" r="3" fill="#6fe3f0" stroke="none" />
                <circle cx="423" cy="190" r="2.5" strokeWidth="1" />
                <circle cx="357" cy="190" r="2.5" strokeWidth="1" />
                <circle cx="390" cy="157" r="2.5" strokeWidth="1" />
                <circle cx="390" cy="223" r="2.5" strokeWidth="1" />
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 390 190"
                    to="0 390 190"
                    dur="12s"
                    repeatCount="indefinite"
                  />
                  <circle cx="390" cy="190" r="54" strokeWidth="1" strokeDasharray="8 12" opacity=".7" />
                </g>
                <path d="M 384 262 A 75 75 0 0 1 462 198" strokeWidth="1" strokeDasharray="3 3" opacity=".8" />
                <line x1="462" y1="198" x2="453" y2="199" strokeWidth="1" />

                {/* forearm (horizontal) */}
                <rect x="436" y="177" width="182" height="26" rx="2" />
                <rect x="430" y="173" width="10" height="34" strokeWidth="1.2" />
                <line x1="444" y1="185" x2="610" y2="185" strokeWidth="1" />
                <line x1="444" y1="195" x2="610" y2="195" strokeWidth="1" />
                <line x1="470" y1="177" x2="470" y2="203" strokeWidth="1" />
                <line x1="505" y1="177" x2="505" y2="203" strokeWidth="1" />
                <line x1="540" y1="177" x2="540" y2="203" strokeWidth="1" />
                <line x1="575" y1="177" x2="575" y2="203" strokeWidth="1" />

                {/* wrist J4 / J5 */}
                <circle cx="640" cy="190" r="20" />
                <circle cx="640" cy="190" r="9" strokeWidth="1" />
                <circle cx="666" cy="190" r="13" />
                <circle cx="666" cy="190" r="4" strokeWidth="1" />

                {/* gripper */}
                <rect x="676" y="181" width="14" height="18" strokeWidth="1.2" />
                <path d="M 690 184 L 718 164 L 752 164" />
                <path d="M 690 196 L 718 216 L 752 216" />
                <path d="M 752 164 l 7 4 l -7 4" strokeWidth="1" />
                <path d="M 752 208 l 7 4 l -7 4" strokeWidth="1" />
                <path d="M 718 164 L 718 170 L 700 178" strokeWidth="1" />
                <path d="M 718 216 L 718 210 L 700 202" strokeWidth="1" />
                <circle cx="690" cy="190" r="4" strokeWidth="1" />
              </g>

              {/* ======= DIMENSIONS & ANNOTATIONS ======= */}
              <g stroke="rgba(111,227,240,.55)" fill="none" strokeWidth="1">
                <line x1="250" y1="46" x2="640" y2="46" markerStart="url(#arr)" markerEnd="url(#arr)" />
                <line x1="250" y1="46" x2="250" y2="58" />
                <line x1="640" y1="46" x2="640" y2="58" />
                <text x="445" y="40" fontSize="10" letterSpacing="1" textAnchor="middle" stroke="none" fill="#6fe3f0">
                  1200mm
                </text>
                <line x1="160" y1="372" x2="160" y2="470" markerStart="url(#arr)" markerEnd="url(#arr)" />
                <line x1="152" y1="372" x2="172" y2="372" />
                <line x1="152" y1="470" x2="172" y2="470" />
                <text
                  x="150"
                  y="425"
                  fontSize="10"
                  letterSpacing="1"
                  textAnchor="middle"
                  stroke="none"
                  fill="#6fe3f0"
                  transform="rotate(-90 150 425)"
                >
                  750mm
                </text>
                <line x1="762" y1="164" x2="762" y2="216" markerStart="url(#arr)" markerEnd="url(#arr)" />
                <text
                  x="770"
                  y="194"
                  fontSize="10"
                  letterSpacing="1"
                  stroke="none"
                  fill="#6fe3f0"
                  transform="rotate(-90 770 194)"
                >
                  R: 220mm
                </text>
              </g>

              {/* Specs and joint callouts */}
              <g fontSize="10" letterSpacing="1" stroke="none" fill="#6fe3f0">
                <text x="110" y="288">HIGH-STRENGTH ALLOY</text>
                <line x1="238" y1="292" x2="298" y2="299" stroke="rgba(111,227,240,.55)" strokeWidth="1" />
                <text x="95" y="318">CARBON FIBER SHELL</text>
                <line x1="212" y1="314" x2="289" y2="317" stroke="rgba(111,227,240,.55)" strokeWidth="1" />
                <text x="318" y="352">J1</text>
                <text x="332" y="266">J2</text>
                <text x="402" y="152">J3</text>
                <text x="650" y="156">J4</text>
                <text x="700" y="244">J5</text>
                <text x="300" y="378" fontSize="11">±180°</text>
                <text x="300" y="430">AXIS_1 ROTATION: ±180°</text>
                <text x="430" y="262" fontSize="11">∠ 45.2°</text>
                <text x="560" y="380">AXIS_4</text>
                <text x="560" y="394">WRIST ROTATION: ±360°</text>
                <text x="560" y="408">AXIS_5 BEND: +120°/-120°</text>
              </g>

              {/* ======= TITLE BLOCK ======= */}
              <g stroke="rgba(111,227,240,.55)" strokeWidth="1" fill="none">
                <circle cx="452" cy="341" r="8" />
                <line x1="444" y1="341" x2="460" y2="341" />
                <line x1="452" y1="333" x2="452" y2="349" />
              </g>
              <text x="470" y="334" fontSize="24" fontWeight="bold" fill="#a8f4fc" letterSpacing="2" stroke="none">
                RA-6X INDUSTRIAL ARM
              </text>
              <text x="470" y="356" fontSize="14" fill="#6fe3f0" letterSpacing="3" stroke="none">
                BLUEPRINT SPECIFICATIONS
              </text>
              <text x="470" y="376" fontSize="10" fill="#6fe3f0" letterSpacing="1" stroke="none">
                X: 800.00 | Y: 500.00
              </text>

              {/* ======= HUD CORNERS ======= */}
              <g fontSize="10" letterSpacing="1" stroke="none" fill="#6fe3f0">
                <text x="20" y="30">SYMPOSIUM 2026</text>
                <text x="20" y="46">CAD_MATRIX v4.2</text>
                <text x="20" y="62">SYS_CALIBRATION: ACTIVE</text>

                <text x="780" y="30" textAnchor="end">AXIS_ALIGNMENT: 100%</text>
                <text x="780" y="46" textAnchor="end">COORD_GRID: ACTIVE</text>
                <text x="780" y="62" textAnchor="end" className="animate-pulse">
                  STATUS: OPERATIONAL
                </text>

                <text x="20" y="472">PROJECT: RA-6X SCHEMATIC | DWG NO: SR26-ARM-01A</text>
                <text x="20" y="488">SCALE: 1:20 | DATE: 12.10.2025</text>

                <text x="780" y="472" textAnchor="end">
                  PERCENTAGE COUNTER:{' '}
                  <tspan fill="#a8f4fc" fontWeight="bold">
                    {progress}%
                  </tspan>{' '}
                  {progress >= 100 ? '[INITIALIZED]' : '[LOAD INITIATED]'}
                </text>
                <text x="780" y="488" textAnchor="end" className="animate-pulse">
                  {progress >= 100 ? 'SYSTEM: READY' : 'DIAGNOSTICS: RUNNING'}
                </text>
              </g>

              {/* ======= LOADING BAR ======= */}
              <g>
                <text x="400" y="436" fontSize="10" letterSpacing="1" textAnchor="middle" stroke="none" fill="#6fe3f0">
                  LOAD SEQUENCE
                </text>
                {/* ticks */}
                <g stroke="rgba(111,227,240,.55)" strokeWidth="1">
                  <line x1="280" y1="442" x2="280" y2="446" />
                  <line x1="304" y1="442" x2="304" y2="446" />
                  <line x1="328" y1="442" x2="328" y2="446" />
                  <line x1="352" y1="442" x2="352" y2="446" />
                  <line x1="376" y1="442" x2="376" y2="446" />
                  <line x1="400" y1="442" x2="400" y2="446" />
                  <line x1="424" y1="442" x2="424" y2="446" />
                  <line x1="448" y1="442" x2="448" y2="446" />
                  <line x1="472" y1="442" x2="472" y2="446" />
                  <line x1="496" y1="442" x2="496" y2="446" />
                  <line x1="520" y1="442" x2="520" y2="446" />
                </g>
                <rect
                  x="280"
                  y="446"
                  width="240"
                  height="12"
                  fill="rgba(111,227,240,.10)"
                  stroke="#6fe3f0"
                  strokeWidth="1"
                />
                <rect
                  x="281"
                  y="447"
                  width={(238 * progress) / 100}
                  height="10"
                  fill="#6fe3f0"
                  opacity=".9"
                  className="transition-[width] duration-75 ease-out"
                />
              </g>
            </svg>

            {/* Tap to enter skip hint */}
            <div className="mt-3 text-center text-xs font-mono text-[#6fe3f0]/50 tracking-[0.25em] uppercase pointer-events-none">
              Tap anywhere to enter
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
