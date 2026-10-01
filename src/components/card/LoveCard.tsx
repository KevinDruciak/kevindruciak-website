"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { CARD } from "@/data/card";
import Countdown from "./Countdown";
import Envelope from "./Envelope";
import { GallopingHorse, HookDivider, HorseMeetsTucunare, WaxSeal } from "./Art";

// Per-edition, so a new card for the next visit arrives sealed again.
const OPENED_KEY = `card-opened:${CARD.edition}`;

// /card?novo re-seals the envelope (for testing, or to watch it open again).
// Cleared at module load so the very first client render already sees it sealed.
const RESEAL = typeof window !== "undefined" && new URLSearchParams(window.location.search).has("novo");
if (RESEAL) {
  try {
    window.localStorage.removeItem(OPENED_KEY);
  } catch {
    // storage blocked: the envelope just shows every visit
  }
}

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function readOpened(): boolean {
  try {
    return window.localStorage.getItem(OPENED_KEY) === "1";
  } catch {
    return false;
  }
}

function markOpened() {
  try {
    window.localStorage.setItem(OPENED_KEY, "1");
  } catch {
    // ignore; this visit still opens via component state
  }
  listeners.forEach((l) => l());
}

type Phase = "idle" | "opening" | "open";

export default function LoveCard() {
  // null on the server and during hydration: we don't know yet, so show only the backdrop
  // rather than flashing the envelope at someone who already opened it.
  const opened = useSyncExternalStore(subscribe, readOpened, () => null);
  const [phase, setPhase] = useState<Phase>("idle");

  // Drop ?novo from the address bar after hydration (the router would restore it if done earlier).
  useEffect(() => {
    if (RESEAL) window.history.replaceState(window.history.state, "", window.location.pathname);
  }, []);

  let view: "none" | "envelope" | "card" = "none";
  if (phase === "open" || (phase === "idle" && opened === true)) view = "card";
  else if (phase === "opening" || opened === false) view = "envelope";

  return (
    <div className="card-backdrop relative min-h-dvh w-full overflow-x-hidden">
      <Backdrop />
      {view === "envelope" && (
        <Envelope
          onOpen={() => {
            markOpened();
            setPhase("opening");
          }}
          onOpened={() => {
            window.scrollTo(0, 0);
            setPhase("open");
          }}
        />
      )}
      {view === "card" && <Letter />}
    </div>
  );
}

const SPARKLES = [
  [8, 12, 0], [86, 8, 1.2], [92, 34, 2.1], [5, 46, 0.6], [14, 78, 1.8],
  [90, 70, 0.3], [70, 92, 2.6], [30, 95, 1.4], [50, 4, 3], [62, 18, 2.2],
] as const;

function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <GallopingHorse className="absolute -left-[6%] bottom-[3%] w-[min(70vw,420px)] text-gold-400 opacity-[0.07]" />
      <GallopingHorse className="absolute -right-[4%] top-[4%] w-[min(34vw,200px)] -scale-x-100 text-gold-400 opacity-[0.06]" />
      {SPARKLES.map(([x, y, delay]) => (
        <span
          key={`${x}-${y}`}
          className="card-twinkle absolute h-1 w-1 rounded-full bg-gold-200 shadow-[0_0_6px_2px_rgba(244,225,176,0.5)]"
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  );
}

function Letter() {
  const { letter } = CARD;
  return (
    <motion.main
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative z-10 mx-auto w-full max-w-[460px] px-4 pb-[max(2.5rem,calc(env(safe-area-inset-bottom)+1rem))] pt-[max(2.5rem,calc(env(safe-area-inset-top)+1rem))]"
    >
      <article className="card-paper card-grain relative rounded-[22px] px-6 pb-9 pt-8 text-wine-900 sm:px-9">
        <header className="flex flex-col items-center">
          <WaxSeal className="h-14 w-14 drop-shadow-[0_3px_3px_rgba(42,7,16,0.35)]" />
          <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-wine-700">
            {CARD.kicker}
          </p>
        </header>

        <div className="mt-5">
          <Countdown />
        </div>

        <HookDivider className="mx-auto my-7 w-[72%]" />

        <section className="font-letter text-[1.22rem] leading-[1.55] text-wine-900">
          <p className="font-script text-[2.3rem] leading-none text-wine-800">{letter.greeting}</p>
          {letter.paragraphs.map((p) => (
            <p key={p} className="mt-3.5">
              {p}
            </p>
          ))}
          <p className="mt-6 text-right italic">{letter.signoff}</p>
          <p className="text-right font-script text-[2.7rem] leading-[1.1] text-wine-800">{letter.signature}</p>
        </section>

        <HorseMeetsTucunare className="mt-7" />
      </article>
    </motion.main>
  );
}
