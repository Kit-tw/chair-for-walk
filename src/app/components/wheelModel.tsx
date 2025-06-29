"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/wheelchair.glb");
  return <primitive object={gltf.scene} scale={3} rotation={[0, Math.PI, 0]} />;
}

export default function WheelchairModel() {
  return (
    <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [-3, 3, 3], fov: 100 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Model />
      <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1.5}/>
    </Canvas>
  );
}
