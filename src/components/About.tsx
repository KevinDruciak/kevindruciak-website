"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const SKILLS = [
  "Python",
  "SQL",
  "PySpark",
  "AWS",
  "Databricks",
  "Docker",
  "Terraform",
  "CI/CD",
  "Tableau",
  "C/C++",
  "Java",
  "TypeScript",
  "OpenGL",
  "WebGL",
  "GLSL",
  "vtk.js",
  "Three.js",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
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
              I&apos;m a Senior Data Engineer at{" "}
              <span className="text-cyan-400">AARP</span> with a M.S. in
              Computer Science (AI/ML) from Georgia Tech and a B.S. from Johns
              Hopkins. I specialize in architecting scalable data pipelines,
              cloud infrastructure, and ML-driven solutions &mdash; having
              generated over $380K in annual savings through AWS and Databricks
              optimizations while supporting a $700M business.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 leading-relaxed mb-4"
            >
              Beyond data, I have a deep passion for{" "}
              <span className="text-cyan-400">computer graphics</span>. At
              Johns Hopkins I built a raytracing engine with BVH acceleration and
              soft shadows, an OpenGL rendering pipeline, a keyframe animation
              system, and an image processing suite. At Corfix Project, I
              developed interactive 3D heart model visualizations using vtk.js
              and WebGL to enable patient-specific medical solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 leading-relaxed"
            >
              I also contribute to AI advancement as a Software Engineer Expert
              at Handshake AI and Data Science Expert at Mercor, where I
              develop gold-standard solutions and curate training data to improve
              state-of-the-art Large Language Models.
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
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <img
                  src="/images/headshot.png"
                  alt="Kevin Druciak"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
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
