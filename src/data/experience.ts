export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    company: "Your Company",
    role: "Data Engineer",
    period: "2023 — Present",
    description: [
      "Design and maintain scalable data pipelines processing millions of records daily.",
      "Build and optimize ETL workflows using modern data stack tooling.",
      "Collaborate with analytics and ML teams to deliver reliable, well-modeled data.",
    ],
    tech: ["Python", "SQL", "Spark", "Airflow", "dbt", "AWS"],
  },
  {
    company: "Previous Company",
    role: "Data Engineer",
    period: "2021 — 2023",
    description: [
      "Built data ingestion pipelines from diverse sources into a centralized warehouse.",
      "Implemented data quality monitoring and alerting systems.",
      "Reduced pipeline run times by 40% through query optimization and partitioning strategies.",
    ],
    tech: ["Python", "Snowflake", "Kafka", "Docker", "Terraform"],
  },
  {
    company: "University",
    role: "Computer Science, B.S.",
    period: "2017 — 2021",
    description: [
      "Coursework in computer graphics, algorithms, systems programming, and databases.",
      "Built a raytracing engine, OpenGL renderer, animation system, and image processor.",
      "Developed projects in C++, Java, and Python.",
    ],
    tech: ["C++", "OpenGL", "GLSL", "Java", "Python"],
  },
];
