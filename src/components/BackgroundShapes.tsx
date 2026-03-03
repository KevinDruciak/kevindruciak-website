"use client";

import dynamic from "next/dynamic";

const FloatingShapesScene = dynamic(
  () => import("@/components/three/FloatingShapes"),
  { ssr: false },
);

export default function BackgroundShapes() {
  return <FloatingShapesScene />;
}
