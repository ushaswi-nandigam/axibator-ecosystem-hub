import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";

const HeroMesh = () => {
  return (
    <div className="w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        
        <Float speed={4} rotationIntensity={1.2} floatIntensity={2}>
          <Sphere args={[1.2, 64, 64]}>
            <MeshDistortMaterial
              color="#8B5CF6"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Float>

        <Float speed={2} rotationIntensity={2} floatIntensity={1}>
          <Sphere args={[0.5, 32, 32]} position={[2, 1, 0]}>
            <MeshDistortMaterial
              color="#F59E0B"
              attach="material"
              distort={0.6}
              speed={3}
              roughness={0.1}
              metalness={0.5}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
};

export default HeroMesh;
