import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Mac() {
  const { scene } = useGLTF("/models/mac1.glb");
  const modelRef = useRef();

  useGSAP(() => {
    // Posisi awal
    gsap.set(modelRef.current.rotation, {
      x: 0,
      y: 0,
      z: 0,
    });

    // MacBook bergerak menjadi sedikit nukik + serong
    gsap.to(modelRef.current.rotation, {
      x: 0.8,
      y: -0.25,
      z: -0.12,
      duration: 2,

      ease: "power3.inOut",
    });
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.07}
      position={[2, -0.8, 0]}
    />
  );
}

export default function Mac3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={1} />

      <directionalLight position={[5, 5, 5]} intensity={3} />

      <Mac />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}
