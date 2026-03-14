import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Zap, Radio } from "lucide-react";

interface CityNode {
  city: string;
  status: "Active" | "Scouting" | "Upcoming";
  angle: number;
  distance: number;
}

const cities: CityNode[] = [
  { city: "Amaravati", status: "Active", angle: -72, distance: 1 },
  { city: "Vizag", status: "Active", angle: 0, distance: 1 },
  { city: "Anantapur", status: "Active", angle: -144, distance: 1 },
  { city: "Warangal", status: "Upcoming", angle: 144, distance: 1 },
  { city: "Vijayawada", status: "Scouting", angle: 72, distance: 1 },
];

const statusConfig = {
  Active: {
    color: "hsl(217 89% 56%)",
    colorLight: "hsl(217 89% 56% / 0.15)",
    border: "hsl(217 89% 56% / 0.6)",
    glow: "0 0 20px -2px hsl(217 89% 56% / 0.35), 0 4px 12px -2px hsl(217 89% 56% / 0.2)",
    routeOpacity: 0.65,
    icon: Zap,
    badgeBg: "hsl(217 89% 56% / 0.18)",
    badgeText: "hsl(217 89% 48%)",
  },
  Scouting: {
    color: "hsl(212 80% 40%)",
    colorLight: "hsl(212 80% 50% / 0.12)",
    border: "hsl(212 80% 50% / 0.45)",
    glow: "0 4px 16px -4px hsl(212 80% 45% / 0.25), 0 2px 8px -2px hsl(0 0% 0% / 0.08)",
    routeOpacity: 0.4,
    icon: Radio,
    badgeBg: "hsl(212 80% 50% / 0.15)",
    badgeText: "hsl(212 80% 35%)",
  },
  Upcoming: {
    color: "hsl(210 15% 40%)",
    colorLight: "hsl(210 15% 50% / 0.1)",
    border: "hsl(210 15% 50% / 0.35)",
    glow: "0 4px 12px -4px hsl(0 0% 0% / 0.12)",
    routeOpacity: 0.25,
    icon: MapPin,
    badgeBg: "hsl(210 15% 50% / 0.12)",
    badgeText: "hsl(210 15% 35%)",
  },
};

const svgSize = 560;
const center = svgSize / 2;
const orbitRadius = 200;

const getCityPos = (c: CityNode) => {
  const rad = (c.angle * Math.PI) / 180;
  return {
    x: center + Math.cos(rad) * orbitRadius * c.distance,
    y: center + Math.sin(rad) * orbitRadius * c.distance,
  };
};

const getRoute = (tx: number, ty: number, idx: number): string => {
  const dx = tx - center;
  const dy = ty - center;
  const len = Math.sqrt(dx * dx + dy * dy);
  const nx = -dy / len;
  const ny = dx / len;
  const bend = (idx % 2 === 0 ? 1 : -1) * 35;
  const cp1x = center + dx * 0.3 + nx * bend;
  const cp1y = center + dy * 0.3 + ny * bend;
  const cp2x = center + dx * 0.7 + nx * bend * 0.5;
  const cp2y = center + dy * 0.7 + ny * bend * 0.5;
  return `M ${center} ${center} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${tx} ${ty}`;
};

const ExpansionMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const positioned = cities.map((c, i) => ({
    ...c,
    ...getCityPos(c),
    idx: i,
  }));

  return (
    <div ref={ref} className="relative w-full flex items-center justify-center py-4">
      <div className="relative w-full max-w-[560px] aspect-square">

        {/* Strong ambient glows */}
        <div className="absolute inset-[-15%] rounded-full bg-primary/[0.08] blur-[100px]" />
        <div className="absolute top-[15%] left-[10%] w-[240px] h-[240px] rounded-full bg-primary/[0.12] blur-[70px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[200px] h-[200px] rounded-full bg-accent-blue/[0.08] blur-[60px]" />

        {/* Background grid texture */}
        <div className="absolute inset-[5%] rounded-3xl opacity-[0.06]" style={{
          backgroundImage: 'radial-gradient(circle, hsl(217 89% 56%) 0.8px, transparent 0.8px)',
          backgroundSize: '28px 28px',
        }} />

        {/* SVG layer */}
        <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${svgSize} ${svgSize}`}>
          <defs>
            <radialGradient id="exp-orbit-fill" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(217 89% 56%)" stopOpacity="0.08" />
              <stop offset="50%" stopColor="hsl(217 89% 56%)" stopOpacity="0.05" />
              <stop offset="100%" stopColor="hsl(217 89% 56%)" stopOpacity="0" />
            </radialGradient>
            <filter id="pulse-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            </filter>
            <filter id="route-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
            {positioned.map((c) => {
              const pathD = getRoute(c.x, c.y, c.idx);
              return <path key={`def-${c.city}`} id={`exp-route-${c.idx}`} d={pathD} />;
            })}
          </defs>

          {/* Orbit area fill */}
          <circle cx={center} cy={center} r={orbitRadius + 40} fill="url(#exp-orbit-fill)" />

          {/* Outermost ring */}
          <motion.circle
            cx={center} cy={center} r={orbitRadius + 25}
            fill="none" stroke="hsl(217 89% 56% / 0.12)" strokeWidth="1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            style={{ transformOrigin: "center" }}
          />

          {/* Outer orbit ring - solid */}
          <motion.circle
            cx={center} cy={center} r={orbitRadius + 10}
            fill="none" stroke="hsl(217 89% 56% / 0.35)" strokeWidth="1.5"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            style={{ transformOrigin: "center" }}
          />

          {/* Main orbit ring - animated dashed, BOLD */}
          <motion.circle
            cx={center} cy={center} r={orbitRadius}
            fill="none" stroke="hsl(217 89% 56% / 0.55)" strokeWidth="2.5"
            strokeDasharray="6 10"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -64 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner orbit - medium */}
          <motion.circle
            cx={center} cy={center} r={orbitRadius * 0.55}
            fill="none" stroke="hsl(217 89% 56% / 0.3)" strokeWidth="1.5"
            strokeDasharray="4 8"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 40 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          {/* Innermost ring */}
          <motion.circle
            cx={center} cy={center} r={orbitRadius * 0.28}
            fill="none" stroke="hsl(217 89% 56% / 0.2)" strokeWidth="1"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: "center" }}
          />

          {/* Route glow layer (behind routes) */}
          {positioned.map((c) => {
            const pathD = getRoute(c.x, c.y, c.idx);
            if (c.status !== "Active") return null;
            return (
              <motion.path
                key={`route-glow-${c.city}`}
                d={pathD}
                fill="none"
                stroke="hsl(24 100% 50%)"
                strokeWidth={6}
                strokeOpacity={0.1}
                strokeLinecap="round"
                filter="url(#route-glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.4 + c.idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              />
            );
          })}

          {/* Routes */}
          {positioned.map((c) => {
            const pathD = getRoute(c.x, c.y, c.idx);
            const cfg = statusConfig[c.status];
            return (
              <motion.path
                key={`route-${c.city}`}
                d={pathD}
                fill="none"
                stroke={cfg.color}
                strokeWidth={c.status === "Active" ? 2.5 : 1.5}
                strokeOpacity={cfg.routeOpacity}
                strokeLinecap="round"
                strokeDasharray={c.status === "Active" ? "none" : "5 7"}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.4, delay: 0.4 + c.idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              />
            );
          })}

          {/* Traveling pulses on active routes */}
          {isInView && positioned.map((c) => {
            if (c.status !== "Active") return null;
            return (
              <g key={`pulse-group-${c.city}`}>
                <circle r="4" fill="hsl(24 100% 55%)" opacity="0">
                  <animateMotion dur="3s" repeatCount="indefinite" begin={`${1.2 + c.idx * 0.6}s`}>
                    <mpath href={`#exp-route-${c.idx}`} />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" begin={`${1.2 + c.idx * 0.6}s`} />
                </circle>
                <circle r="12" fill="hsl(24 100% 50%)" opacity="0" filter="url(#pulse-glow)">
                  <animateMotion dur="3s" repeatCount="indefinite" begin={`${1.2 + c.idx * 0.6}s`}>
                    <mpath href={`#exp-route-${c.idx}`} />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.4;0.4;0" dur="3s" repeatCount="indefinite" begin={`${1.2 + c.idx * 0.6}s`} />
                </circle>
              </g>
            );
          })}

          {/* Decorative dots on outer orbit */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <motion.circle
                key={`orb-dot-${angle}`}
                cx={center + Math.cos(rad) * (orbitRadius + 10)}
                cy={center + Math.sin(rad) * (orbitRadius + 10)}
                r="2"
                fill="hsl(24 100% 50% / 0.35)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: [0.2, 0.6, 0.2] } : {}}
                transition={{ duration: 2.5, repeat: Infinity, delay: angle / 120 }}
              />
            );
          })}

          {/* Small cross markers at mid-orbit */}
          {[30, 150, 270].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const cx = center + Math.cos(rad) * (orbitRadius * 0.55);
            const cy = center + Math.sin(rad) * (orbitRadius * 0.55);
            return (
              <g key={`cross-${angle}`}>
                <line x1={cx - 3} y1={cy} x2={cx + 3} y2={cy} stroke="hsl(24 100% 50% / 0.25)" strokeWidth="1" />
                <line x1={cx} y1={cy - 3} x2={cx} y2={cy + 3} stroke="hsl(24 100% 50% / 0.25)" strokeWidth="1" />
              </g>
            );
          })}
        </svg>

        {/* Central Hub */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 16 }}
        >
          {/* Radiating rings */}
          <motion.div
            className="absolute -inset-8 rounded-full border-2 border-primary/25"
            animate={{ scale: [1, 2, 2], opacity: [0.6, 0, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute -inset-5 rounded-full border border-primary/20"
            animate={{ scale: [1, 1.6, 1.6], opacity: [0.4, 0, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
          />

          {/* Hub body */}
          <div className="relative h-[80px] w-[80px] rounded-full flex flex-col items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, hsl(24 100% 50% / 0.25), hsl(24 100% 50% / 0.1))',
              border: '2.5px solid hsl(24 100% 50% / 0.5)',
              boxShadow: '0 0 40px -5px hsl(24 100% 50% / 0.35), inset 0 1px 0 hsl(0 0% 100% / 0.2), 0 0 80px -10px hsl(24 100% 50% / 0.15)',
            }}
          >
            <motion.div
              className="h-4 w-4 rounded-full bg-primary"
              animate={{
                boxShadow: [
                  "0 0 0 0 hsl(24 100% 50% / 0.5)",
                  "0 0 20px 8px hsl(24 100% 50% / 0.2)",
                  "0 0 0 0 hsl(24 100% 50% / 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="mt-1.5 text-[8px] font-extrabold uppercase tracking-[0.2em] text-primary">
              Axibator
            </span>
          </div>
        </motion.div>

        {/* City Node Cards */}
        {positioned.map((c) => {
          const cfg = statusConfig[c.status];
          const StatusIcon = cfg.icon;
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
              transition={{ delay: 0.55 + c.idx * 0.12, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.12, y: -4 }}
            >
              {/* Active outer pulse */}
              {c.status === "Active" && (
                <motion.div
                  className="absolute -inset-2 rounded-2xl"
                  style={{ border: `1.5px solid ${cfg.border}` }}
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.06, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              )}

              <div
                className="relative flex items-center gap-2.5 rounded-2xl px-4 py-3 backdrop-blur-lg transition-all duration-300 cursor-default"
                style={{
                  background: `linear-gradient(135deg, ${cfg.colorLight}, hsl(0 0% 100% / 0.85))`,
                  border: `2px solid ${cfg.border}`,
                  boxShadow: cfg.glow,
                }}
              >
                {/* Icon circle */}
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: cfg.badgeBg }}
                >
                  <StatusIcon className="h-4 w-4" style={{ color: cfg.color }} />
                </div>

                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-foreground leading-tight whitespace-nowrap">
                    {c.city}
                  </span>
                  <span
                    className="text-[9px] font-extrabold uppercase tracking-[0.15em] leading-tight mt-0.5 whitespace-nowrap"
                    style={{ color: cfg.badgeText }}
                  >
                    ● {c.status}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpansionMap;
