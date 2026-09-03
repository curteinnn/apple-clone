import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Iphone() {
  const { scene } = useGLTF("/models/iphone 17_4.glb");

  useFrame((_, delta) => {
    scene.rotation.y += delta * 0.15;
  });

  return <primitive object={scene} scale={0.7} position={[0, 0, 0]} />;
}

export default function Iphone3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1} />

      <directionalLight position={[5, 5, 5]} intensity={3} />

      <Iphone />

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
