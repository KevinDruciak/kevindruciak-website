"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="02" title="Experience" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-navy-950 border-2 border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.3)]" />

                <div className="group p-6 rounded-lg border border-slate-700/30 bg-navy-900/30 hover:border-cyan-400/20 hover:bg-navy-800/30 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {entry.role}
                      </h3>
                      <p className="text-cyan-400 font-mono text-sm">
                        {entry.company}
                      </p>
                    </div>
                    <span className="text-sm font-mono text-slate-500 mt-1 md:mt-0">
                      {entry.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {entry.description.map((line, j) => (
                      <li
                        key={j}
                        className="text-sm text-slate-400 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-cyan-400 mt-1.5 flex-shrink-0 text-[8px]">
                          &#9654;
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {entry.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono text-slate-400 bg-navy-800/50 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
