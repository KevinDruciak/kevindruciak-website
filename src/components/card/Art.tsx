// Hand-drawn SVG art for the card: her horses, his fish.
// Each piece is used once per page, so gradient ids can be fixed strings.

type ArtProps = { className?: string };

const GOLD = "#e2bd6e";
const GOLD_DEEP = "#b8893a";

// Horse head in profile, facing left, drawn in a 64×64 box.
export const HORSE_HEAD_PATH =
  "M38,6 L41,15 C50,18 56,30 56,44 L58,60 L34,60 C34,52 32,47 28,45 C24,47 20,49 16,49 C11,49 8,45 9,41 C10,37 14,33 18,28 C22,22 27,15 32,12 L35,4 Z";

function sealOutline(): string {
  // A slightly lumpy circle reads as poured wax rather than a sticker.
  const pts: string[] = [];
  const n = 28;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const r = 46 + Math.sin(i * 2.3) * 1.6 + Math.cos(i * 5.1) * 1.1;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
  }
  return `M${pts.join(" L")} Z`;
}
export const SEAL_OUTLINE = sealOutline();

export function WaxSeal({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="seal-wax" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#a8304b" />
          <stop offset="55%" stopColor="#7a1a30" />
          <stop offset="100%" stopColor="#4e0d1c" />
        </radialGradient>
      </defs>
      <path d={SEAL_OUTLINE} fill="url(#seal-wax)" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="#4e0d1c" strokeOpacity="0.55" strokeWidth="3" />
      <circle cx="50" cy="50" r="32.5" fill="none" stroke={GOLD} strokeOpacity="0.55" strokeWidth="1" />
      <g transform="translate(19 17) scale(0.98)">
        <path d={HORSE_HEAD_PATH} fill={GOLD} stroke={GOLD_DEEP} strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M44,18 C47,24 50,32 51,40 M41,20 C44,28 46,34 47,42" stroke={GOLD_DEEP} strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <circle cx="27" cy="25" r="1.9" fill="#4e0d1c" />
        <circle cx="13.5" cy="43" r="1.3" fill="#4e0d1c" />
      </g>
      <ellipse cx="36" cy="28" rx="12" ry="6" fill="#fff" opacity="0.12" transform="rotate(-30 36 28)" />
    </svg>
  );
}

// Galloping horse facing right, in a 112×66 box. Legs are stroked segments: [d, width].
const HORSE_BODY =
  "M36,26 C46,28 58,28 68,24 C74,20 80,13 86,7 L86.5,1 L90,5.5 C96,10 102,15 106,21 C108,24 106,27.5 102.5,27 C98,26 95,23.5 92.5,21.5 C90,26 88,31 86,36 C85,41 82,45 77,46 C66,48 54,48 46,46 C40,45 34,43 30,40 C26,36 28,28 36,26 Z";
const HORSE_TAIL = "M33,27 C25,21 15,21 5,28 C11,27 17,28 21,30 C14,32 8,37 4,44 C14,38 24,35 31,34 Z";
const HORSE_MANE = "M85,7 C80,5 76,7 73,10 M81,12 C76,10 72,12 69,15 M76,17 C71,16 67,18 64,21";
// forelegs reaching, hind legs pushing off
const HORSE_UPPER_LEGS: [string, number][] = [
  ["M83,39 L93,46", 6.5],
  ["M78,42 L85,52", 6],
  ["M36,37 L25,47", 7.5],
  ["M45,42 L40,53", 7],
];
const HORSE_LOWER_LEGS: [string, number][] = [
  ["M93,46 L104,49.5", 3.6],
  ["M85,52 L79,59.5", 3.6],
  ["M25,47 L11,51", 3.6],
  ["M40,53 L30,61", 3.6],
];

/** One-colour silhouette (takes currentColor): background watermark and the tagline icon. */
export function GallopingHorse({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 112 66" className={className} aria-hidden="true" fill="currentColor" stroke="currentColor">
      <path strokeWidth="0.6" strokeLinejoin="round" d={HORSE_BODY} />
      <path strokeWidth="0.6" strokeLinejoin="round" d={HORSE_TAIL} />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth="2.2" d={HORSE_MANE} />
        {[...HORSE_UPPER_LEGS, ...HORSE_LOWER_LEGS].map(([d, w]) => (
          <path key={d} strokeWidth={w} d={d} />
        ))}
      </g>
    </svg>
  );
}

/** Her horse, drawn in the same outlined style as the tucunaré: a bay with dark mane, tail and legs. */
export function BayHorse({ className }: ArtProps) {
  const outline = "#3a2016";
  const points = "#2b1a14";
  return (
    <svg viewBox="-2 -2 116 70" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="horse-coat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7b3a1f" />
          <stop offset="100%" stopColor="#a5603a" />
        </linearGradient>
      </defs>
      {/* outline: every shape drawn slightly fatter in the dark colour, then the fills sit on top */}
      <g stroke={outline} fill={outline} strokeLinecap="round" strokeLinejoin="round">
        <path d={HORSE_TAIL} strokeWidth="1.8" />
        <path d={HORSE_BODY} strokeWidth="1.8" />
        <path d={HORSE_MANE} strokeWidth="3.8" fill="none" />
        {[...HORSE_UPPER_LEGS, ...HORSE_LOWER_LEGS].map(([d, w]) => (
          <path key={d} d={d} strokeWidth={w + 1.8} fill="none" />
        ))}
      </g>
      <path d={HORSE_TAIL} fill={points} />
      <g fill="none" strokeLinecap="round">
        {HORSE_LOWER_LEGS.map(([d, w]) => (
          <path key={d} d={d} stroke={points} strokeWidth={w} />
        ))}
        {HORSE_UPPER_LEGS.map(([d, w]) => (
          <path key={d} d={d} stroke="#9a5534" strokeWidth={w} />
        ))}
      </g>
      <path d={HORSE_BODY} fill="url(#horse-coat)" />
      <path d={HORSE_MANE} stroke={points} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="95" cy="12.5" r="1.3" fill={points} />
      <circle cx="104" cy="23.5" r="0.7" fill={points} />
    </svg>
  );
}

// Tucunaré (peacock bass): gold body, three dark bars, the eye-spot on the tail.
export function Tucunare({ className }: ArtProps) {
  const body =
    "M112,25 C108,14 92,8 72,8 C52,8 34,13 24,20 L24,30 C36,38 56,42 76,40 C94,38 106,32 112,25 Z";
  return (
    <svg viewBox="0 0 120 50" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tuc-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a8a2e" />
          <stop offset="45%" stopColor="#e0b440" />
          <stop offset="100%" stopColor="#f6e2a0" />
        </linearGradient>
        <clipPath id="tuc-clip">
          <path d={body} />
        </clipPath>
      </defs>
      {/* fins behind the body */}
      <path d="M86,10 L83,2.5 L79,6 L75,1.5 L71,5.5 L67,1.5 L63,5.5 L59,2.5 L56,7 C48,1 38,6 31,15 Z" fill="#c9952f" stroke="#7a5a1c" strokeWidth="0.8" strokeLinejoin="round" />
      <path d="M78,39 L72,47 L66,40 Z M56,40 C52,46 46,47 42,44 L40,37 Z" fill="#d8722e" stroke="#7a3a1c" strokeWidth="0.7" strokeLinejoin="round" />
      {/* rounded tail */}
      <path d="M26,20 L10,9 C3,16 3,32 10,40 L26,30 Z" fill="#c9952f" stroke="#7a5a1c" strokeWidth="0.8" strokeLinejoin="round" />
      <path d={body} fill="url(#tuc-body)" stroke="#6b5418" strokeWidth="0.9" />
      <g clipPath="url(#tuc-clip)" fill="#3b3320" opacity="0.72">
        <rect x="80" y="0" width="5" height="50" rx="2.5" />
        <rect x="63" y="0" width="5.5" height="50" rx="2.5" />
        <rect x="45" y="0" width="5" height="50" rx="2.5" />
      </g>
      <path d="M95,12 Q89,24 95,36" stroke="#6b5418" strokeWidth="0.9" fill="none" />
      <path d="M112,25 Q108,27 104,26.5" stroke="#6b5418" strokeWidth="0.9" fill="none" strokeLinecap="round" />
      {/* eye-spot (ocellus) at the base of the tail */}
      <circle cx="17" cy="24" r="5.4" fill="#f2c94c" />
      <circle cx="17" cy="24" r="3.8" fill="#2a2416" />
      <circle cx="101" cy="19.5" r="3.2" fill="#c0392b" />
      <circle cx="101.6" cy="19.3" r="1.6" fill="#1a1208" />
    </svg>
  );
}

export const HEART_PATH =
  "M12,21 C12,21 3,15.5 3,9.2 C3,6.3 5.3,4 8.1,4 C9.8,4 11.2,4.9 12,6.2 C12.8,4.9 14.2,4 15.9,4 C18.7,4 21,6.3 21,9.2 C21,15.5 12,21 12,21 Z";

/** Her horse galloping toward his tucunaré, a heart between them. */
export function HorseMeetsTucunare({ className }: ArtProps) {
  return (
    <div className={`flex items-end justify-center gap-1 ${className ?? ""}`} aria-hidden="true">
      <BayHorse className="card-bob-a w-[40%] max-w-[160px]" />
      <svg viewBox="0 0 24 24" className="card-heartbeat mb-[5%] w-[11%] max-w-[42px] shrink-0">
        <path d={HEART_PATH} fill="#7a1a30" />
      </svg>
      <Tucunare className="card-bob-b mb-[2%] w-[40%] max-w-[160px] -scale-x-100" />
    </div>
  );
}

/** Fishing line with a hook holding a little heart: the section divider. */
export function HookDivider({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 240 50" className={className} aria-hidden="true">
      <g stroke={GOLD_DEEP} fill="none" strokeLinecap="round">
        <path d="M10,6 L115.5,6 M124.5,6 L230,6" strokeWidth="1" />
        <circle cx="120" cy="6" r="3" strokeWidth="1.4" />
      </g>
      {/* the heart is caught: drawn first so the hook's bend passes in front of it */}
      <g transform="translate(101.8 21) scale(1.15)">
        <path d={HEART_PATH} fill="#7a1a30" />
      </g>
      <path
        d="M120,9 L120,24 C120,32 111,32 111,24 L111,19 L114,22"
        stroke={GOLD_DEEP}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
