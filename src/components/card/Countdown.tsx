"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CARD, arrivalLabel } from "@/data/card";

const TARGET = Date.parse(CARD.arrival);
const WHEN = arrivalLabel();

function useNow() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    let timer: number;
    // Tick on the second boundary so the seconds tile changes crisply.
    const schedule = () => {
      timer = window.setTimeout(() => {
        setNow(Date.now());
        schedule();
      }, 1000 - (Date.now() % 1000) + 10);
    };
    schedule();
    return () => window.clearTimeout(timer);
  }, []);
  return now;
}

function units(ms: number) {
  const s = Math.floor(ms / 1000);
  return [
    { value: Math.floor(s / 86400), one: "dia", many: "dias", pad: false },
    { value: Math.floor((s % 86400) / 3600), one: "hora", many: "horas", pad: true },
    { value: Math.floor((s % 3600) / 60), one: "min", many: "min", pad: true },
    { value: s % 60, one: "seg", many: "seg", pad: true },
  ];
}

export default function Countdown() {
  const now = useNow();
  const left = TARGET - now;

  if (left <= 0) {
    return (
      <section aria-label="Chegada" className="text-center">
        <p className="font-script text-[3.6rem] leading-none text-wine-800">Cheguei!</p>
        <p className="mt-3 font-letter text-xl text-wine-900">Agora é abraço apertado.</p>
        <p className="mt-1 text-sm text-wine-700/80">{WHEN}</p>
      </section>
    );
  }

  return (
    <section aria-label="Contagem regressiva para a próxima visita" className="text-center">
      <p className="font-script text-[3.4rem] leading-none text-wine-800">Faltam</p>

      <div role="timer" aria-live="off" className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
        {units(left).map((u) => (
          <div
            key={u.many}
            className="flex flex-col items-center rounded-xl bg-linear-to-b from-wine-700 to-wine-900 px-1 pb-2 pt-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_6px_12px_-6px_rgba(42,7,16,0.7)]"
          >
            <span className="relative h-[2.6rem] w-full overflow-hidden font-letter text-[2.3rem] font-semibold leading-[2.6rem] tabular-nums text-gold-200">
              <motion.span
                key={u.value}
                initial={{ y: -14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="block"
              >
                {u.pad ? String(u.value).padStart(2, "0") : u.value}
              </motion.span>
            </span>
            <span className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-gold-300/80">
              {u.value === 1 ? u.one : u.many}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-5 font-letter text-[1.3rem] leading-snug text-wine-900">
        para eu pousar em <span className="font-semibold">{CARD.destination}</span>
      </p>
      <p className="mt-0.5 text-[0.8rem] tracking-wide text-wine-700/80">{WHEN}</p>
      <p className="mt-3 font-letter text-[1.05rem] italic text-wine-700">{CARD.tagline}</p>
    </section>
  );
}
