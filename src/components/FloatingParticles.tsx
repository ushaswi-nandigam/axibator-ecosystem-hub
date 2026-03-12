import { motion } from "framer-motion";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 4,
  duration: 15 + Math.random() * 25,
  delay: Math.random() * 8,
  opacity: 0.08 + Math.random() * 0.15,
}));

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {particles.map((p) => (
      <motion.div
        key={p.id}
        className="absolute rounded-full bg-primary"
        style={{
          width: p.size,
          height: p.size,
          left: `${p.x}%`,
          top: `${p.y}%`,
          opacity: p.opacity,
        }}
        animate={{
          y: [0, -40, 10, -20, 0],
          x: [0, 15, -10, 20, 0],
          scale: [1, 1.3, 0.8, 1.1, 1],
          opacity: [p.opacity, p.opacity * 1.5, p.opacity * 0.6, p.opacity * 1.2, p.opacity],
        }}
        transition={{
          duration: p.duration,
          delay: p.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
    {/* Larger glowing orbs */}
    {[
      { x: 15, y: 25, size: 120, color: "primary", dur: 20 },
      { x: 75, y: 60, size: 100, color: "accent", dur: 25 },
      { x: 50, y: 80, size: 80, color: "primary", dur: 18 },
    ].map((orb, i) => (
      <motion.div
        key={`orb-${i}`}
        className={`absolute rounded-full bg-${orb.color}/[0.04] blur-[60px]`}
        style={{
          width: orb.size,
          height: orb.size,
          left: `${orb.x}%`,
          top: `${orb.y}%`,
        }}
        animate={{
          x: [0, 30, -20, 10, 0],
          y: [0, -20, 15, -10, 0],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration: orb.dur,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default FloatingParticles;
