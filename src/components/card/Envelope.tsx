"use client";

import { useState } from "react";
import { useAnimate, useReducedMotion } from "framer-motion";
import { CARD } from "@/data/card";
import { HEART_PATH, WaxSeal } from "./Art";

type Props = {
  /** Fired on tap, before the animation: the moment it counts as opened. */
  onOpen: () => void;
  /** Fired once the envelope has finished animating away. */
  onOpened: () => void;
};

export default function Envelope({ onOpen, onOpened }: Props) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const [opening, setOpening] = useState(false);
  const reduceMotion = useReducedMotion();

  async function open() {
    if (opening) return;
    setOpening(true);
    onOpen();

    if (reduceMotion) {
      await animate(scope.current, { opacity: 0 }, { duration: 0.35 });
      onOpened();
      return;
    }

    animate("[data-part=hint]", { opacity: 0 }, { duration: 0.2 });
    await animate(
      "[data-part=seal]",
      { scale: [1, 1.2, 0.3], rotate: [0, -10, 25], opacity: [1, 1, 0] },
      { duration: 0.55, ease: "easeIn" },
    );
    await animate("[data-part=flap]", { rotateX: 180 }, { duration: 0.75, ease: [0.45, 0, 0.2, 1] });
    // Once folded back, the flap sits behind the letter so the letter can rise past it.
    scope.current.querySelector<HTMLElement>("[data-part=flap]")!.style.zIndex = "1";
    await animate("[data-part=letter]", { y: "-62%" }, { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] });
    await animate(scope.current, { opacity: 0, y: 30, scale: 0.96 }, { duration: 0.5, ease: "easeIn", delay: 0.35 });
    onOpened();
  }

  return (
    <div ref={scope} className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-4 pb-10">
      <p data-part="hint" className="mb-10 text-center font-script text-[2.1rem] leading-none text-gold-200 sm:text-[2.6rem]">
        chegou uma carta pra você
      </p>

      <button
        type="button"
        onClick={open}
        disabled={opening}
        aria-label={`Abrir a carta para ${CARD.recipient}`}
        className={`rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-gold-300/70 focus-visible:ring-offset-8 focus-visible:ring-offset-wine-900 ${
          opening ? "" : "card-float cursor-pointer"
        }`}
      >
        <div className="card-env">
          <EnvelopeBack />

          <div data-part="letter" className="card-env-letter card-grain overflow-hidden bg-paper-50 shadow-[0_-2px_8px_rgba(60,10,20,0.15)]">
            <div className="flex h-[42%] flex-col items-center justify-center gap-1">
              <span className="font-script text-[clamp(1.5rem,7vw,2.1rem)] leading-none text-wine-800">{CARD.kicker}</span>
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path d={HEART_PATH} fill="#7a1a30" />
              </svg>
            </div>
            <div className="mx-[12%] space-y-[6%]">
              <div className="h-px bg-wine-700/15" />
              <div className="h-px bg-wine-700/15" />
              <div className="mr-[30%] h-px bg-wine-700/15" />
            </div>
          </div>

          <EnvelopeFront />

          <p className="card-env-to font-script text-[clamp(1.6rem,8.5vw,2.4rem)] leading-none text-wine-800">
            Para {CARD.recipient}
          </p>

          <div data-part="flap" className="card-env-flap">
            <FlapFace />
            <FlapLiner />
          </div>

          <div className="card-env-seal">
            <div data-part="seal" className="h-full w-full drop-shadow-[0_3px_4px_rgba(30,4,10,0.45)]">
              <WaxSeal className="h-full w-full" />
            </div>
          </div>
        </div>
      </button>

      <div className={`card-env-shadow ${opening ? "" : "card-float-shadow"}`} aria-hidden="true" />

      {/* fade the wrapper: the pulse animation on the text would override an inline opacity */}
      <div data-part="hint" className="mt-8">
        <p className="card-pulse text-xs font-medium uppercase tracking-[0.35em] text-gold-300">toque para abrir</p>
      </div>
    </div>
  );
}

function EnvelopeBack() {
  return (
    <svg viewBox="0 0 340 230" preserveAspectRatio="none" className="card-env-back" aria-hidden="true">
      <defs>
        <pattern id="env-liner-back" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="14" height="14" fill="#5e1224" />
          <path d="M0,7 L14,7" stroke="#e2bd6e" strokeOpacity="0.25" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="340" height="230" rx="8" fill="#dcc6a2" />
      <path d="M8,0 L332,0 Q340,0 340,8 L340,120 L0,120 L0,8 Q0,0 8,0 Z" fill="url(#env-liner-back)" />
    </svg>
  );
}

function EnvelopeFront() {
  return (
    <svg viewBox="0 0 340 230" preserveAspectRatio="none" className="card-env-front" aria-hidden="true">
      <defs>
        <linearGradient id="env-side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ead8b8" />
          <stop offset="100%" stopColor="#f2e3c7" />
        </linearGradient>
        <linearGradient id="env-bottom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbf1de" />
          <stop offset="100%" stopColor="#f3e4c8" />
        </linearGradient>
      </defs>
      {/* side flaps */}
      <path d="M0,8 Q0,0 6,1 L168,126 L0,226 Z" fill="url(#env-side)" />
      <path d="M340,8 Q340,0 334,1 L172,126 L340,226 Z" fill="url(#env-side)" />
      {/* bottom flap, overlapping the sides */}
      <path d="M0,222 L158,124 Q170,117 182,124 L340,222 Q340,230 332,230 L8,230 Q0,230 0,222 Z" fill="url(#env-bottom)" />
      <path d="M2,221 L158,124 Q170,117 182,124 L338,221" fill="none" stroke="#cdb38a" strokeWidth="1" />
    </svg>
  );
}

function FlapFace() {
  return (
    <svg viewBox="0 0 340 135" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="env-flap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6e9d2" />
          <stop offset="100%" stopColor="#fbf2e2" />
        </linearGradient>
      </defs>
      <path d="M0,6 Q0,0 6,0 L334,0 Q340,0 340,6 L180,128 Q170,135 160,128 Z" fill="url(#env-flap)" />
      <path d="M0.5,6 L160,128 Q170,135 180,128 L339.5,6" fill="none" stroke="#c9ad80" strokeWidth="1" />
    </svg>
  );
}

function FlapLiner() {
  return (
    <svg viewBox="0 0 340 135" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id="env-liner" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="14" height="14" fill="#6b1528" />
          <path d="M0,7 L14,7" stroke="#e2bd6e" strokeOpacity="0.35" strokeWidth="1" />
        </pattern>
      </defs>
      <path d="M0,6 Q0,0 6,0 L334,0 Q340,0 340,6 L180,128 Q170,135 160,128 Z" fill="url(#env-liner)" />
      <path d="M0,6 Q0,0 6,0 L334,0 Q340,0 340,6 L180,128 Q170,135 160,128 Z" fill="none" stroke="#e2bd6e" strokeOpacity="0.5" strokeWidth="1.5" />
    </svg>
  );
}
