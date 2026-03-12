import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Zap, Radio } from "lucide-react";

interface CityNode {
  city: string;
  status: "Active" | "Scouting" | "Upcoming";
  angle: number;
  distance: number; // 0-1 multiplier on orbit radius
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
    color: "hsl(24 100% 50%)",
    colorLight: "hsl(24 100% 50% / 0.08)",
    border: "hsl(24 100% 50% / 0.35)",
    glow: "0 0 24px -4px hsl(24 100% 50% / 0.25), 0 4px 16px -4px hsl(24 100% 50% / 0.12)",
    routeOpacity: 0.4,
    icon: Zap,
    badgeBg: "hsl(24 100% 50% / 0.12)",
    badgeText: "hsl(24 100% 50%)",
  },
  Scouting: {
    color: "hsl(212 100% 30%)",
    colorLight: "hsl(212 100% 45% / 0.06)",
    border: "hsl(212 100% 45% / 0.25)",
    glow: "0 4px 16px -4px hsl(212 100% 45% / 0.12), 0 2px 8px -2px hsl(0 0% 0% / 0.04)",
    routeOpacity: 0.18,
    icon: Radio,
    badgeBg: "hsl(212 100% 45% / 0.1)",
    badgeText: "hsl(212 100% 35%)",
  },
  Upcoming: {
    color: "hsl(210 10% 50%)",
    colorLight: "hsl(210 10% 50% / 0.05)",
    border: "hsl(210 10% 50% / 0.18)",
    glow: "0 4px 12px -4px hsl(0 0% 0% / 0.06)",
    routeOpacity: 0.1,
    icon: MapPin,
    badgeBg: "hsl(210 10% 50% / 0.08)",
    badgeText: "hsl(210 10% 45%)",
  },
};

const svgSize = 560;
const center = svgSize / 2;
const orbitRadius = 210;

const getCityPos = (c: CityNode) => {
  const rad = (c.angle * Math.PI) / 180;
  return {
    x: center + Math.cos(rad) * orbitRadius * c.distance,
    y: center + Math.sin(rad) * orbitRadius * c.distance,
  };
};

// Smooth cubic bezier route from center to city
const getRoute = (tx: number, ty: number, idx: number): string => {
  const dx = tx - center;
  const dy = ty - center;
  const len = Math.sqrt(dx * dx + dy * dy);
  const nx = -dy / len;
  const ny = dx / len;
  const bend = (idx % 2 === 0 ? 1 : -1) * 40;
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

        {/* Layered ambient glows */}
        <div className="absolute inset-[-10%] rounded-full bg-primary/[0.03] blur-[80px]" />
        <div className="absolute top-[20%] left-[15%] w-[200px] h-[200px] rounded-full bg-primary/[0.06] blur-[60px]" />
        <div className="absolute bottom-[25%] right-[10%] w-[160px] h-[160px] rounded-full bg-accent-blue/[0.04] blur-[50px]" />

        {/* Background grid texture */}
        <div className="absolute inset-[5%] rounded-3xl opacity-[0.025]" style={{
          backgroundImage: 'radial-gradient(circle, hsl(24 100% 50%) 0.8px, transparent 0.8px)',
          backgroundSize: '28px 28px',
        }} />

        {/* SVG layer: rings, routes, pulses */}
        <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${svgSize} ${svgSize}`}>
          <defs>
            {/* Radial gradient for orbit fill */}
            <radialGradient id="exp-orbit-fill" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(24 100% 50%)" stopOpacity="0.03" />
              <stop offset="60%" stopColor="hsl(24 100% 50%)" stopOpacity="0.04" />
              <stop offset="100%" stopColor="hsl(24 100% 50%)" stopOpacity="0" />
            </radialGradient>
            {/* Route gradient */}
            <linearGradient id="route-active" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(24 100% 50%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(24 100% 50%)" stopOpacity="0.2" />
            </linearGradient>
            {/* Pulse glow filter */}
            <filter id="pulse-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
            {/* Define route paths for animateMotion */}
            {positioned.map((c) => {
              const pathD = getRoute(c.x, c.y, c.idx);
              return <path key={`def-${c.city}`} id={`exp-route-${c.idx}`} d={pathD} />;
            })}
          </defs>

          {/* Orbit area fill */}
          <circle cx={center} cy={center} r={orbitRadius + 30} fill="url(#exp-orbit-fill)" />

          {/* Outer orbit ring */}
          <motion.circle
            cx={center} cy={center} r={orbitRadius + 15}
            fill="none" stroke="hsl(24 100% 50% / 0.2)" strokeWidth="1.5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            style={{ transformOrigin: "center" }}
          />
          {/* Main orbit ring - animated dash */}
          <motion.circle
            cx={center} cy={center} r={orbitRadius}
            fill="none" stroke="hsl(24 100% 50% / 0.35)" strokeWidth="2"
            strokeDasharray="3 12"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -60 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner orbit */}
          <motion.circle
            cx={center} cy={center} r={orbitRadius * 0.5}
            fill="none" stroke="hsl(24 100% 50% / 0.07)" strokeWidth="1"
            strokeDasharray="2 10"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 40 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

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
                strokeWidth={c.status === "Active" ? 2 : 1.5}
                strokeOpacity={cfg.routeOpacity}
                strokeLinecap="round"
                strokeDasharray={c.status === "Active" ? "none" : "4 6"}
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
                {/* Main bright dot */}
                <circle r="3.5" fill="hsl(24 100% 50%)" opacity="0">
                  <animateMotion dur="3.5s" repeatCount="indefinite" begin={`${1.5 + c.idx * 0.8}s`}>
                    <mpath href={`#exp-route-${c.idx}`} />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" dur="3.5s" repeatCount="indefinite" begin={`${1.5 + c.idx * 0.8}s`} />
                </circle>
                {/* Soft glow trail */}
                <circle r="10" fill="hsl(24 100% 50%)" opacity="0" filter="url(#pulse-glow)">
                  <animateMotion dur="3.5s" repeatCount="indefinite" begin={`${1.5 + c.idx * 0.8}s`}>
                    <mpath href={`#exp-route-${c.idx}`} />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;0.3;0.3;0" dur="3.5s" repeatCount="indefinite" begin={`${1.5 + c.idx * 0.8}s`} />
                </circle>
              </g>
            );
          })}

          {/* Small decorative dots on orbit */}
          {[0, 72, 144, 216, 288].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <motion.circle
                key={`orb-dot-${angle}`}
                cx={center + Math.cos(rad) * (orbitRadius + 15)}
                cy={center + Math.sin(rad) * (orbitRadius + 15)}
                r="1.5"
                fill="hsl(24 100% 50% / 0.2)"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: [0.15, 0.4, 0.15] } : {}}
                transition={{ duration: 3, repeat: Infinity, delay: angle / 100 }}
              />
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
            className="absolute -inset-6 rounded-full border border-primary/15"
            animate={{ scale: [1, 1.8, 1.8], opacity: [0.5, 0, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute -inset-4 rounded-full border border-primary/10"
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.3, 0, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
          />

          {/* Hub body */}
          <div className="relative h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, hsl(24 100% 50% / 0.18), hsl(24 100% 50% / 0.06))',
              border: '2px solid hsl(24 100% 50% / 0.3)',
              boxShadow: '0 0 30px -5px hsl(24 100% 50% / 0.2), inset 0 1px 0 hsl(0 0% 100% / 0.15)',
            }}
          >
            <motion.div
              className="h-3.5 w-3.5 rounded-full bg-primary"
              animate={{
                boxShadow: [
                  "0 0 0 0 hsl(24 100% 50% / 0.4)",
                  "0 0 16px 6px hsl(24 100% 50% / 0.15)",
                  "0 0 0 0 hsl(24 100% 50% / 0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="mt-1.5 text-[7px] font-extrabold uppercase tracking-[0.2em] text-primary">
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
              whileHover={{ scale: 1.1, y: -3 }}
            >
              {/* Active outer pulse */}
              {c.status === "Active" && (
                <motion.div
                  className="absolute -inset-1.5 rounded-2xl"
                  style={{ border: `1px solid ${cfg.border}` }}
                  animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.04, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              )}

              <div
                className="relative flex items-center gap-2.5 rounded-2xl px-4 py-3 backdrop-blur-md transition-all duration-300 cursor-default"
                style={{
                  background: `linear-gradient(135deg, ${cfg.colorLight}, hsl(0 0% 100% / 0.7))`,
                  border: `1.5px solid ${cfg.border}`,
                  boxShadow: cfg.glow,
                }}
              >
                {/* Icon circle */}
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: cfg.badgeBg }}
                >
                  <StatusIcon className="h-3.5 w-3.5" style={{ color: cfg.color }} />
                </div>

                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-foreground leading-tight whitespace-nowrap">
                    {c.city}
                  </span>
                  <span
                    className="text-[8px] font-extrabold uppercase tracking-[0.15em] leading-tight mt-0.5 whitespace-nowrap"
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
