import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Ring, Text } from "@react-three/drei";
import * as THREE from "three";

const CompassRing = ({ radius, thickness, opacity, speed }: { radius: number; thickness: number; opacity: number; speed: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z += speed;
    }
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - thickness, radius, 64]} />
      <meshBasicMaterial color="#4280F4" transparent opacity={opacity} side={THREE.DoubleSide} />
    </mesh>
  );
};

const DashedRing = ({ radius, speed }: { radius: number; speed: number }) => {
  const ref = useRef<THREE.LineSegments>(null);
  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const segments = 48;
    for (let i = 0; i < segments; i++) {
      if (i % 2 === 0) {
        const a1 = (i / segments) * Math.PI * 2;
        const a2 = ((i + 1) / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(a1) * radius, 0, Math.sin(a1) * radius));
        points.push(new THREE.Vector3(Math.cos(a2) * radius, 0, Math.sin(a2) * radius));
      }
    }
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [radius]);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += speed;
  });

  return (
    <lineSegments ref={ref} geometry={geometry} rotation={[Math.PI / 2, 0, 0]}>
      <lineBasicMaterial color="#4280F4" transparent opacity={0.15} />
    </lineSegments>
  );
};

const TickMarks = () => {
  const ref = useRef<THREE.Group>(null);
  const ticks = useMemo(() => {
    const arr: { angle: number; length: number; width: number; opacity: number }[] = [];
    for (let i = 0; i < 36; i++) {
      const deg = i * 10;
      const isMajor = deg % 90 === 0;
      const isMid = deg % 45 === 0 && !isMajor;
      arr.push({
        angle: (deg * Math.PI) / 180,
        length: isMajor ? 0.35 : isMid ? 0.22 : 0.12,
        width: isMajor ? 0.03 : 0.015,
        opacity: isMajor ? 0.5 : isMid ? 0.3 : 0.12,
      });
    }
    return arr;
  }, []);

  return (
    <group ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      {ticks.map((t, i) => {
        const innerR = 2.15;
        const outerR = innerR + t.length;
        const midR = (innerR + outerR) / 2;
        const x = Math.cos(t.angle) * midR;
        const y = Math.sin(t.angle) * midR;
        return (
          <mesh key={i} position={[x, y, 0]} rotation={[0, 0, t.angle + Math.PI / 2]}>
            <planeGeometry args={[t.width, t.length]} />
            <meshBasicMaterial color="#4280F4" transparent opacity={t.opacity} side={THREE.DoubleSide} />
          </mesh>
        );
      })}
    </group>
  );
};

const CompassNeedle = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime;
      ref.current.rotation.y = Math.sin(t * 0.3) * 0.8 + Math.sin(t * 0.15) * 0.4;
    }
  });

  const northShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 1.2);
    shape.lineTo(0.12, 0);
    shape.lineTo(-0.12, 0);
    shape.closePath();
    return shape;
  }, []);

  const southShape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.9);
    shape.lineTo(0.09, 0);
    shape.lineTo(-0.09, 0);
    shape.closePath();
    return shape;
  }, []);

  return (
    <group ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      {/* North needle */}
      <mesh>
        <shapeGeometry args={[northShape]} />
        <meshStandardMaterial color="#4280F4" transparent opacity={0.85} side={THREE.DoubleSide} metalness={0.3} roughness={0.4} />
      </mesh>
      {/* South needle */}
      <mesh>
        <shapeGeometry args={[southShape]} />
        <meshStandardMaterial color="#E85D5D" transparent opacity={0.5} side={THREE.DoubleSide} metalness={0.2} roughness={0.5} />
      </mesh>
    </group>
  );
};

const CardinalLabels = () => {
  const labels = [
    { text: "DISCOVER", angle: 0 },
    { text: "BUILD", angle: Math.PI / 2 },
    { text: "SCALE", angle: Math.PI },
    { text: "LAUNCH", angle: (3 * Math.PI) / 2 },
  ];
  const r = 2.65;

  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      {labels.map((l) => (
        <Text
          key={l.text}
          position={[Math.cos(l.angle) * r, Math.sin(l.angle) * r, 0]}
          fontSize={0.13}
          color="#4280F4"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2"
          letterSpacing={0.2}
          fillOpacity={0.7}
        >
          {l.text}
        </Text>
      ))}
    </group>
  );
};

const CenterHub = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.03;
      ref.current.scale.setScalar(s);
    }
  });

  return (
    <group>
      {/* Glass sphere center */}
      <mesh ref={ref}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          resolution={256}
          transmission={0.9}
          roughness={0.15}
          thickness={0.4}
          ior={1.5}
          chromaticAberration={0.1}
          color="#4280F4"
        />
      </mesh>
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshBasicMaterial color="#4280F4" transparent opacity={0.2} />
      </mesh>
    </group>
  );
};

const Waypoints = () => {
  const positions = useMemo(() => [
    { angle: 0.5, r: 1.6, label: "Ignite" },
    { angle: 1.5, r: 1.7, label: "LaunchPad" },
    { angle: 2.8, r: 1.5, label: "BuildLab" },
    { angle: 4.0, r: 1.8, label: "GrowthTrack" },
    { angle: 5.2, r: 1.6, label: "Global" },
  ], []);

  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      {positions.map((p, i) => {
        const x = Math.cos(p.angle) * p.r;
        const y = Math.sin(p.angle) * p.r;
        return (
          <group key={i} position={[x, y, 0]}>
            <mesh>
              <sphereGeometry args={[0.06, 12, 12]} />
              <meshBasicMaterial color="#6BA1F7" transparent opacity={0.8} />
            </mesh>
            <Text
              position={[0, -0.15, 0]}
              fontSize={0.07}
              color="#4280F4"
              anchorX="center"
              anchorY="top"
              fillOpacity={0.5}
            >
              {p.label}
            </Text>
          </group>
        );
      })}
    </group>
  );
};

const OrbitingSatellite = () => {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <mesh position={[2.3, 0, 0]}>
        <sphereGeometry args={[0.045, 8, 8]} />
        <meshBasicMaterial color="#4280F4" transparent opacity={0.7} />
      </mesh>
    </group>
  );
};

const CompassScene = () => {
  return (
    <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.3}>
      <group>
        {/* Outer rings */}
        <CompassRing radius={2.5} thickness={0.04} opacity={0.25} speed={0} />
        <CompassRing radius={2.2} thickness={0.025} opacity={0.15} speed={0.0005} />
        <DashedRing radius={1.9} speed={-0.001} />
        <CompassRing radius={1.4} thickness={0.015} opacity={0.1} speed={0.0008} />

        {/* Tick marks */}
        <TickMarks />

        {/* Cardinal labels */}
        <CardinalLabels />

        {/* Compass needle */}
        <CompassNeedle />

        {/* Center hub */}
        <CenterHub />

        {/* Waypoints */}
        <Waypoints />

        {/* Orbiting satellite */}
        <OrbitingSatellite />

        {/* Ambient glow disc */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[2.5, 64]} />
          <meshBasicMaterial color="#4280F4" transparent opacity={0.02} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  );
};

const HeroMesh = () => {
  return (
    <div className="w-full h-full min-h-[450px]">
      <Canvas
        camera={{ position: [0, 3.5, 5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={0.6} color="#ffffff" />
        <directionalLight position={[-3, 2, 4]} intensity={0.3} color="#4280F4" />
        <pointLight position={[0, 2, 3]} intensity={0.3} color="#6BA1F7" />
        <CompassScene />
      </Canvas>
    </div>
  );
};

export default HeroMesh;
