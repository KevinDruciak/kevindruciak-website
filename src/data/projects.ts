export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
  category: "graphics" | "data" | "other";
}

export const projects: Project[] = [
  {
    title: "Ray Tracing Engine",
    description:
      "A full raytracing engine with point, spot, and directional lights, texture mapping, BVH acceleration, jittered supersampling anti-aliasing, and soft shadows. Rendered complex models including the Stanford Bunny, Dragon, Buddha, and David.",
    tech: ["C++", "GLSL", "BVH", "Ray-Tracing"],
    github: "https://github.com/KevinDruciak/Graphics_Raytracing",
    image:
      "https://raw.githubusercontent.com/KevinDruciak/Graphics_Raytracing/main/kdrucia1_HTML/kdrucia1.art/kdrucia1.art.2.bmp",
    featured: true,
    category: "graphics",
  },
  {
    title: "Songsterr Enhanced Search",
    description:
      "A better way to search Songsterr guitar tabs — with popularity sorting, genre filtering, and enriched metadata powered by the Spotify API. Search the full tab library, sort by Spotify popularity, filter by genre, and browse by tag. Cached results in SQLite for instant repeat queries.",
    tech: ["React", "TypeScript", "Vite", "Python", "FastAPI", "SQLite", "Spotify API"],
    github: "https://github.com/KevinDruciak/songsterr_search",
    featured: true,
    category: "other",
  },
];
