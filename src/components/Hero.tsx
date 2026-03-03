"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene"),
  { ssr: false },
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0e1a]"
    >
      <HeroScene />

      <div className="absolute inset-0 z-[5] bg-[#0a0e1a]/90" />

      <div className="relative z-10 text-center px-6 w-full max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-cyan-400 text-sm md:text-base mb-4 tracking-wider"
        >
          Hello, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-100 mb-4 tracking-tight"
        >
          Kevin Druciak
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-400 mb-8"
        >
          Data Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Building robust data pipelines and infrastructure.
          <br />
          Passionate about computer graphics and creative engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-400/10 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/20 transition-all font-medium text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 font-mono tracking-widest">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-slate-600 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
