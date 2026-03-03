"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";
import ParticleField from "./ParticleField";

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={["#0a0e1a", 6, 15]} />
        <ParticleField />
        <EffectComposer multisampling={0}>
          <Bloom
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            intensity={0.8}
            mipmapBlur
          />
        </EffectComposer>
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
