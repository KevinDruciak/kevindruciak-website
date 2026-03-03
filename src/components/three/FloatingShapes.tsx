"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Suspense } from "react";

function FloatingShape({
  position,
  scale,
  speed,
  geometry,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
  geometry: "icosahedron" | "octahedron" | "torus";
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry === "icosahedron" && <icosahedronGeometry args={[1, 1]} />}
        {geometry === "octahedron" && <octahedronGeometry args={[1, 0]} />}
        {geometry === "torus" && <torusGeometry args={[1, 0.4, 8, 16]} />}
        <MeshDistortMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.08}
          distort={0.2}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

const shapes: {
  position: [number, number, number];
  scale: number;
  speed: number;
  geometry: "icosahedron" | "octahedron" | "torus";
}[] = [
  { position: [-4, 2, -5], scale: 1.2, speed: 0.5, geometry: "icosahedron" },
  { position: [4, -1, -6], scale: 0.8, speed: 0.7, geometry: "octahedron" },
  { position: [-2, -3, -4], scale: 0.6, speed: 0.4, geometry: "torus" },
  { position: [3, 3, -7], scale: 1.0, speed: 0.6, geometry: "icosahedron" },
  { position: [0, -4, -5], scale: 0.5, speed: 0.8, geometry: "octahedron" },
];

export default function FloatingShapesScene() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {shapes.map((shape, i) => (
            <FloatingShape key={i} {...shape} />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}
