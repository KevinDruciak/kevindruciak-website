"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-12 overflow-hidden"
    >
      <span className="font-mono text-cyan-400 text-lg flex-shrink-0">
        {number}.
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-100 whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-slate-700/50 max-w-xs min-w-[40px]" />
    </motion.div>
  );
}
