export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    company: "Handshake AI",
    role: "Software Engineer Expert",
    period: "2026 — Present",
    description: [
      "Develop gold-standard software engineering solutions within complex, industry-grade codebases to improve state-of-the-art Large Language Models.",
      "Refine complex algorithmic solutions to adhere to clean code principles and industry best practices, targeting areas where LLMs historically underperform.",
      "Engineer comprehensive automated test suites to verify functionality, establishing baseline test cases and validated solutions used to train and evaluate next-gen AI models.",
    ],
    tech: ["Python", "GitHub", "Testing", "LLMs"],
  },
  {
    company: "Mercor",
    role: "Data Science Expert",
    period: "2026 — Present",
    description: [
      "Train and refine top-tier Large Language Models via RLHF leveraging advanced domain expertise.",
      "Curate challenging edge-case datasets and rigorously evaluate AI-generated responses to complex data science, coding, and mathematical queries.",
      "Provide structured feedback to correct hallucinations and ensure technical accuracy across model outputs.",
    ],
    tech: ["Python", "RLHF", "Data Science", "LLMs"],
  },
  {
    company: "AARP Services Inc.",
    role: "Senior Data Engineer",
    period: "2024 — Present",
    description: [
      "Architected highly scalable data pipelines and ML solutions while driving significant cloud infrastructure optimizations for a $700M business.",
      "Developed 40+ ETL and managed file transfer jobs using Python, SQL, and AWS; orchestrated a complex SAS-to-AWS cloud migration.",
      "Deployed ML models for real-time anomaly detection; engineered AWS S3 lifecycle policies and Databricks cluster optimizations generating $380K+ in annual savings.",
      "Led a team of contractors, managed budget allocations reducing cost by $250K annually, and facilitated SOW approvals ensuring timely milestones.",
    ],
    tech: ["Python", "SQL", "AWS", "Databricks", "PySpark", "ML"],
  },
  {
    company: "AARP",
    role: "Data Engineer",
    period: "2022 — 2024",
    description: [
      "Engineered and maintained robust data infrastructure and pipelines within an Agile framework using Python, SQL, AWS, and Databricks.",
      "Architected scalable databases to support advanced analytics; implemented rigorous data quality controls to guarantee dataset integrity.",
      "Partnered with data scientists and analysts to translate complex analytical requirements into optimized, accessible datasets powering Tableau Server reporting.",
      "Provided technical mentorship on coding standards, Docker, and CI/CD frameworks to junior team members.",
    ],
    tech: ["Python", "SQL", "AWS", "Databricks", "Docker", "Git"],
  },
  {
    company: "Corfix Project",
    role: "Software Engineer",
    period: "2021 — 2022",
    description: [
      "Developed interactive 3D visualizations and manipulation tools for patient heart models with septal defects using vtk.js, WebGL, and Python.",
      "Engineered software modules to design custom 3D-printed conduits for manufacturing with a focus on patient-specific designs.",
      "Leveraged Databricks and PySpark to process and analyze large-scale medical datasets for data-driven insights.",
    ],
    tech: ["vtk.js", "WebGL", "Python", "Databricks", "PySpark"],
  },
  {
    company: "Georgia Institute of Technology",
    role: "M.S. Computer Science (AI/ML)",
    period: "2023 — 2025",
    description: [
      "Focus in Artificial Intelligence and Machine Learning.",
    ],
    tech: ["AI/ML", "Python", "TensorFlow", "PyTorch"],
  },
  {
    company: "Johns Hopkins University",
    role: "B.S. Computer Science",
    period: "2018 — 2022",
    description: [
      "Coursework in computer graphics, algorithms, systems programming, and databases.",
      "Built a raytracing engine, OpenGL renderer, keyframe animation system, and image processing suite.",
    ],
    tech: ["C++", "OpenGL", "GLSL", "Java", "Python"],
  },
];
