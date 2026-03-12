import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

interface CityNode {
  city: string;
  status: "Active" | "Scouting" | "Upcoming";
  angle: number; // degrees around the hub
}

const cities: CityNode[] = [
  { city: "Amaravati", status: "Active", angle: -60 },
  { city: "Vizag", status: "Active", angle: 30 },
  { city: "Warangal", status: "Upcoming", angle: 150 },
  { city: "Vijayawada", status: "Scouting", angle: 240 },
];

const statusConfig = {
  Active: {
    color: "hsl(24 100% 50%)",     // #FF6700
    bg: "hsl(24 100% 50% / 0.12)",
    border: "hsl(24 100% 50% / 0.4)",
    glow: "hsl(24 100% 50% / 0.15)",
    label: "text-primary",
    dot: "bg-primary",
  },
  Scouting: {
    color: "hsl(212 100% 30%)",    // #004E98
    bg: "hsl(212 100% 45% / 0.1)",
    border: "hsl(212 100% 45% / 0.35)",
    glow: "hsl(212 100% 45% / 0.12)",
    label: "text-accent-blue",
    dot: "bg-accent-blue",
  },
  Upcoming: {
    color: "hsl(210 10% 55%)",
    bg: "hsl(210 10% 55% / 0.08)",
    border: "hsl(210 10% 55% / 0.25)",
    glow: "hsl(210 10% 55% / 0.08)",
    label: "text-muted-foreground",
    dot: "bg-muted-foreground/50",
  },
};

// Animated pulse traveling along a curved route
const RoutePulse = ({ path, color, delay }: { path: string; color: string; delay: number }) => (
  <>
    <motion.circle r="4" fill={color} opacity="0">
      <animateMotion dur="3s" repeatCount="indefinite" begin={`${delay}s`}>
        <mpath href={`#${path}`} />
      </animateMotion>
      <animate attributeName="opacity" values="0;0.9;0.9;0" dur="3s" repeatCount="indefinite" begin={`${delay}s`} />
      <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" begin={`${delay}s`} />
    </motion.circle>
    <motion.circle r="8" fill={color} opacity="0">
      <animateMotion dur="3s" repeatCount="indefinite" begin={`${delay}s`}>
        <mpath href={`#${path}`} />
      </animateMotion>
      <animate attributeName="opacity" values="0;0.25;0.25;0" dur="3s" repeatCount="indefinite" begin={`${delay}s`} />
    </motion.circle>
  </>
);

// Generate a curved path from center to a point on the orbit
const getCurvedPath = (cx: number, cy: number, tx: number, ty: number, idx: number): string => {
  const mx = (cx + tx) / 2;
  const my = (cy + ty) / 2;
  // Offset control point perpendicular to the line
  const dx = tx - cx;
  const dy = ty - cy;
  const offset = idx % 2 === 0 ? 30 : -30;
  const cpx = mx + (dy / Math.sqrt(dx * dx + dy * dy)) * offset;
  const cpy = my - (dx / Math.sqrt(dx * dx + dy * dy)) * offset;
  return `M ${cx} ${cy} Q ${cpx} ${cpy} ${tx} ${ty}`;
};

const ExpansionMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const svgSize = 500;
  const center = svgSize / 2;
  const orbitRadius = 185;

  const cityPositions = cities.map((c) => {
    const rad = (c.angle * Math.PI) / 180;
    return {
      ...c,
      x: center + Math.cos(rad) * orbitRadius,
      y: center + Math.sin(rad) * orbitRadius,
    };
  });

  return (
    <div ref={ref} className="relative w-full flex items-center justify-center">
      <div className="relative w-full max-w-[520px] aspect-square">
        {/* Ambient background glow */}
        <div className="absolute inset-0 rounded-full bg-primary/[0.04] blur-[60px] scale-110" />

        {/* Orbit rings */}
        <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${svgSize} ${svgSize}`}>
          <defs>
            {/* Orbit ring gradient */}
            <radialGradient id="orbitGrad" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="hsl(24 100% 50%)" stopOpacity="0.06" />
              <stop offset="100%" stopColor="hsl(24 100% 50%)" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Subtle filled orbit area */}
          <circle cx={center} cy={center} r={orbitRadius + 20} fill="url(#orbitGrad)" />
          {/* Orbit dashed ring */}
          <motion.circle
            cx={center} cy={center} r={orbitRadius}
            fill="none"
            stroke="hsl(24 100% 50% / 0.12)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          />
          {/* Inner ring */}
          <motion.circle
            cx={center} cy={center} r={orbitRadius * 0.45}
            fill="none"
            stroke="hsl(24 100% 50% / 0.06)"
            strokeWidth="1"
            strokeDasharray="4 6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </svg>

        {/* Routes SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${svgSize} ${svgSize}`}>
          <defs>
            {cityPositions.map((c, i) => {
              const pathD = getCurvedPath(center, center, c.x, c.y, i);
              return <path key={`def-${c.city}`} id={`route-${i}`} d={pathD} />;
            })}
          </defs>

          {/* Draw routes */}
          {cityPositions.map((c, i) => {
            const pathD = getCurvedPath(center, center, c.x, c.y, i);
            const cfg = statusConfig[c.status];
            return (
              <motion.path
                key={`path-${c.city}`}
                d={pathD}
                fill="none"
                stroke={cfg.color}
                strokeWidth="2"
                strokeOpacity={c.status === "Active" ? 0.35 : 0.15}
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              />
            );
          })}

          {/* Traveling pulses on active routes */}
          {isInView && cityPositions.map((c, i) => {
            if (c.status !== "Active") return null;
            return (
              <RoutePulse
                key={`pulse-${c.city}`}
                path={`route-${i}`}
                color={statusConfig.Active.color}
                delay={1.5 + i * 1.2}
              />
            );
          })}
        </svg>

        {/* Central Hub */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 16 }}
        >
          {/* Outer pulse ring */}
          <motion.div
            className="absolute -inset-4 rounded-full border border-primary/20"
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.4, 0, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute -inset-2 rounded-full border border-primary/15"
            animate={{ scale: [1, 1.3, 1.3], opacity: [0.3, 0, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          />
          <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border-2 border-primary/30 flex flex-col items-center justify-center shadow-lg shadow-primary/15 backdrop-blur-sm">
            <motion.div
              className="h-4 w-4 rounded-full bg-primary/70"
              animate={{
                boxShadow: [
                  "0 0 0 0 hsl(24 100% 50% / 0.3)",
                  "0 0 12px 4px hsl(24 100% 50% / 0.15)",
                  "0 0 0 0 hsl(24 100% 50% / 0.3)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.15em] text-primary/80">HQ</span>
          </div>
        </motion.div>

        {/* City Nodes */}
        {cityPositions.map((c, i) => {
          const cfg = statusConfig[c.status];
          return (
            <motion.div
              key={c.city}
              className="absolute z-10"
              style={{
                left: `${(c.x / svgSize) * 100}%`,
                top: `${(c.y / svgSize) * 100}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 180, damping: 14 }}
              whileHover={{ scale: 1.12 }}
            >
              <div
                className="relative flex flex-col items-center gap-1.5 rounded-xl px-4 py-3 backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl cursor-default"
                style={{
                  background: cfg.bg,
                  border: `1.5px solid ${cfg.border}`,
                  boxShadow: `0 4px 20px -4px ${cfg.glow}, 0 2px 8px -2px hsl(0 0% 0% / 0.06)`,
                }}
              >
                {/* Active glow ring */}
                {c.status === "Active" && (
                  <motion.div
                    className="absolute -inset-[3px] rounded-xl border border-primary/25"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}

                <MapPin
                  className="h-4 w-4"
                  style={{ color: cfg.color }}
                />
                <span className="text-xs font-bold text-foreground/90 whitespace-nowrap">
                  {c.city}
                </span>
                <span
                  className="text-[9px] font-extrabold uppercase tracking-[0.18em] whitespace-nowrap"
                  style={{ color: cfg.color }}
                >
                  {c.status}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpansionMap;
