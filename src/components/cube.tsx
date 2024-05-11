"use client";

import React, { Suspense, useRef } from "react";

import { WebGLRenderer } from "three";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei";

import Loading from "../app/loading";

const CubeAnimation = () => {
  const rendererRef = useRef<WebGLRenderer | null>(null);

  return (
    <Suspense fallback={<Loading />}>
      <Canvas
        ref={rendererRef as any}
        style={{ height: "200px" }}
        camera={{ position: [5, 5, 5], fov: 12 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />
        <PerspectiveCamera makeDefault position={[0, 1, 2]} />
        <BoxElement />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </Suspense>
  );
};

const BoxElement = () => {
  const texture = useTexture(
    "https://avatars.githubusercontent.com/u/89111957?v=4"
  );

  return (
    <mesh>
      <meshBasicMaterial map={texture} />
      <boxGeometry />
    </mesh>
  );
};

export default CubeAnimation;
