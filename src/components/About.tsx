"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const SKILLS = [
  "Python",
  "SQL",
  "Apache Spark",
  "Airflow",
  "dbt",
  "AWS",
  "Kafka",
  "Snowflake",
  "PostgreSQL",
  "Docker",
  "Terraform",
  "TypeScript",
  "C++",
  "OpenGL",
  "GLSL",
  "Three.js",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="01" title="About Me" />

        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-400 leading-relaxed mb-4"
            >
              I&apos;m a data engineer who thrives on building scalable data
              pipelines and infrastructure that power data-driven decisions. My
              day-to-day involves designing and optimizing ETL workflows,
              data models, and cloud-native architectures.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 leading-relaxed mb-4"
            >
              Beyond data, I have a deep passion for{" "}
              <span className="text-cyan-400">computer graphics</span>. From
              building raytracing engines with BVH acceleration and soft shadows
              to creating OpenGL rendering pipelines, keyframe animation systems,
              and image processing algorithms &mdash; I love pushing pixels and
              exploring the math behind visual computing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 leading-relaxed"
            >
              The intersection of data and graphics is where I find the most
              excitement &mdash; whether it&apos;s visualizing complex datasets or
              building interactive 3D experiences like the one on this page.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-[280px] mx-auto">
              <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-lg translate-x-4 translate-y-4" />
              <div className="relative w-full h-full rounded-lg bg-navy-800 border border-slate-700/50 overflow-hidden flex items-center justify-center">
                {/* Placeholder for headshot */}
                <div className="text-slate-600 text-center p-6">
                  <div className="w-20 h-20 rounded-full bg-navy-700 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-400/50 font-mono">
                      KD
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono">
                    Add your photo to
                    <br />
                    public/images/headshot.jpg
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12"
        >
          <p className="text-sm font-mono text-slate-500 mb-4">
            Technologies I work with:
          </p>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <motion.span
                key={skill}
                variants={chipVariants}
                className="px-3 py-1.5 text-xs font-mono text-cyan-400 bg-cyan-400/5 border border-cyan-400/20 rounded-full hover:bg-cyan-400/10 hover:border-cyan-400/40 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
