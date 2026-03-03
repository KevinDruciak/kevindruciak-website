export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  category: "graphics" | "data" | "other";
}

export const projects: Project[] = [
  {
    title: "Ray Tracing Engine",
    description:
      "A full raytracing engine supporting point, spot, and directional lights, texture mapping, BVH acceleration, jittered supersampling anti-aliasing, and soft shadows. Rendered complex models including the Stanford Bunny, Dragon, and David.",
    tech: ["C++", "GLSL", "BVH", "Ray-Tracing"],
    github: "https://github.com/KevinDruciak/Graphics_Raytracing",
    featured: true,
    category: "graphics",
  },
  {
    title: "OpenGL Rendering Pipeline",
    description:
      "An interactive OpenGL rendering system with support for all light types, camera operations, all geometric shapes, affine transformations, textures, and interactive scene elements like togglable lights and animated doors.",
    tech: ["C++", "OpenGL", "GLSL", "Gouraud Shading"],
    github: "https://github.com/KevinDruciak/Graphics_Rendering",
    featured: true,
    category: "graphics",
  },
  {
    title: "Keyframe Animation System",
    description:
      "Animation system with multiple parameterizations (matrices, Euler angles, quaternions) and interpolation methods (nearest, linear, Catmull-Rom, B-spline). Includes video recording via screenshots and ray-traced renders.",
    tech: ["C++", "OpenGL", "Quaternions", "Splines"],
    github: "https://github.com/KevinDruciak/Graphics_Animation",
    featured: true,
    category: "graphics",
  },
  {
    title: "Image Processing Suite",
    description:
      "Comprehensive image processing toolkit with noise generation, dithering algorithms (Floyd-Steinberg, ordered), edge detection, gaussian sampling, Beier-Neely morphing, and an oil painting fun filter.",
    tech: ["C++", "Beier-Neely", "Gaussian", "Floyd-Steinberg"],
    github: "https://github.com/KevinDruciak/Graphics_ImageProcessing",
    featured: true,
    category: "graphics",
  },
  {
    title: "Cache Simulator",
    description:
      "A CPU cache simulator modeling different cache configurations and replacement policies to analyze hit/miss rates and performance characteristics.",
    tech: ["C++", "Systems"],
    github: "https://github.com/KevinDruciak/CacheSimulator",
    featured: false,
    category: "other",
  },
  {
    title: "AppleJoose",
    description:
      "A Java application project demonstrating object-oriented design patterns and software engineering principles.",
    tech: ["Java", "OOP"],
    github: "https://github.com/KevinDruciak/AppleJoose",
    featured: false,
    category: "other",
  },
];
