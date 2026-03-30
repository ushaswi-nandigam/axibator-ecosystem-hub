import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

const AbstractMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.3;
      meshRef.current.rotation.y += 0.003;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.3;
      wireRef.current.rotation.y += 0.003;
    }
  });

  const orbitParticles = useMemo(() => {
    const points: [number, number, number][] = [];
    for (let i = 0; i < 60; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.8 + Math.random() * 0.8;
      points.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ]);
    }
    return points;
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <group>
        {/* Main glass mesh */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[2, 1]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            resolution={256}
            transmission={0.95}
            roughness={0.1}
            thickness={0.5}
            ior={1.5}
            chromaticAberration={0.15}
            anisotropy={0.3}
            distortion={0.2}
            distortionScale={0.3}
            color="#4280F4"
          />
        </mesh>

        {/* Wireframe overlay */}
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[2.01, 1]} />
          <meshBasicMaterial wireframe color="#4280F4" transparent opacity={0.08} />
        </mesh>

        {/* Orbit particles */}
        {orbitParticles.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.02 + Math.random() * 0.02, 6, 6]} />
            <meshBasicMaterial color="#4280F4" transparent opacity={0.3 + Math.random() * 0.3} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const HeroMesh = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#4280F4" />
        <directionalLight position={[-5, -3, 3]} intensity={0.3} color="#6BA1F7" />
        <pointLight position={[0, 0, 4]} intensity={0.4} color="#ffffff" />
        <AbstractMesh />
      </Canvas>
    </div>
  );
};

export default HeroMesh;
