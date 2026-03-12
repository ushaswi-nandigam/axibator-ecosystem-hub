import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Compass } from "lucide-react";
import { useRef } from "react";
import compassLogo from "@/assets/axibator-compass.png";

const stages = [
  { stage: "Discover", program: "Ignite", angle: -90, radius: 38 },
  { stage: "Build", program: "LaunchPad", angle: -18, radius: 38 },
  { stage: "Launch", program: "BuildLab", angle: 54, radius: 38 },
  { stage: "Scale", program: "GrowthTrack", angle: 126, radius: 38 },
  { stage: "Go Global", program: "Global Catalyst", angle: 198, radius: 38 },
];

const FounderJourney = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gridShiftX = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const gridShiftY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Path from center outward — a spiral-like navigation route
  // We'll draw an SVG path connecting the 5 checkpoints arranged in a circle
  const getCheckpointPos = (angle: number, radius: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: 50 + radius * Math.cos(rad),
      y: 50 + radius * Math.sin(rad),
    };
  };

  const pathPoints = stages.map((s) => getCheckpointPos(s.angle, s.radius));
  const centerPoint = { x: 50, y: 50 };

  // Build SVG path from center through all checkpoints
  const buildPath = () => {
    let d = `M ${centerPoint.x} ${centerPoint.y}`;
    // Spiral outward through intermediate rings
    const innerPoints = stages.map((s) => getCheckpointPos(s.angle, s.radius * 0.55));
    
    for (let i = 0; i < stages.length; i++) {
      const inner = innerPoints[i];
      const outer = pathPoints[i];
      // Curve from previous to inner to outer
      if (i === 0) {
        d += ` Q ${inner.x} ${inner.y}, ${outer.x} ${outer.y}`;
      } else {
        const prevOuter = pathPoints[i - 1];
        const midX = (prevOuter.x + inner.x) / 2;
        const midY = (prevOuter.y + inner.y) / 2;
        d += ` Q ${midX} ${midY}, ${inner.x} ${inner.y}`;
        d += ` Q ${inner.x} ${inner.y}, ${outer.x} ${outer.y}`;
      }
    }
    return d;
  };

  const navPath = buildPath();

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(30 30% 96%) 0%, hsl(24 20% 94%) 40%, hsl(220 20% 94%) 100%)",
      }}
    >
      {/* Animated navigation grid background */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{ x: gridShiftX, y: gridShiftY }}
      >
        {/* Grid lines */}
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nav-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="60" stroke="hsl(24 100% 50%)" strokeWidth="0.5" />
              <line x1="0" y1="0" x2="60" y2="0" stroke="hsl(24 100% 50%)" strokeWidth="0.5" />
            </pattern>
            <pattern id="nav-grid-major" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="300" stroke="hsl(24 100% 50%)" strokeWidth="1" />
              <line x1="0" y1="0" x2="300" y2="0" stroke="hsl(24 100% 50%)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nav-grid)" />
          <rect width="100%" height="100%" fill="url(#nav-grid-major)" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Faint coordinate labels scattered */}
      {[
        { label: "N", x: "50%", y: "8%" },
        { label: "E", x: "88%", y: "50%" },
        { label: "S", x: "50%", y: "90%" },
        { label: "W", x: "12%", y: "50%" },
      ].map((c) => (
        <span
          key={c.label}
          className="absolute text-[10px] font-bold tracking-[0.3em] text-primary/10 select-none hidden lg:block"
          style={{ left: c.x, top: c.y, transform: "translate(-50%, -50%)" }}
        >
          {c.label}
        </span>
      ))}

      {/* Ambient depth */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-accent/[0.05] blur-[100px]" />

      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            The Navigation Route
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-title"
          >
            Your Founder Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-desc mx-auto text-center"
          >
            Five stages. One clear route. Axibator guides you from uncertainty to global impact.
          </motion.p>
        </div>

        {/* Main compass navigation system */}
        <div className="relative max-w-[700px] mx-auto aspect-square">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Single subtle navigation circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="36"
              fill="none"
              stroke="hsl(24 100% 50%)"
              strokeWidth="0.15"
              strokeDasharray="2 2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.25 } : {}}
              transition={{ duration: 1.5 }}
            />

            {/* Inner subtle ring */}
            <motion.circle
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="hsl(220 20% 70%)"
              strokeWidth="0.1"
              strokeDasharray="1.5 3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.15 } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
            />

            {/* Navigation path — the journey route */}
            <motion.path
              d={navPath}
              fill="none"
              stroke="hsl(24 100% 50%)"
              strokeWidth="0.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            />
            {/* Glow version of path */}
            <motion.path
              d={navPath}
              fill="none"
              stroke="hsl(24 100% 50%)"
              strokeWidth="1"
              strokeLinecap="round"
              filter="url(#pathGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.15 } : {}}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            />

            {/* Traveler dot moving along path */}
            {isInView && (
              <>
                <circle r="0.8" fill="hsl(24 100% 50%)">
                  <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    path={navPath}
                  />
                </circle>
                <circle r="1.8" fill="hsl(24 100% 50%)" opacity="0.15">
                  <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    path={navPath}
                  />
                </circle>
                {/* Second traveler, offset */}
                <circle r="0.6" fill="hsl(213 100% 30%)">
                  <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    begin="3s"
                    path={navPath}
                  />
                </circle>
                <circle r="1.4" fill="hsl(213 100% 30%)" opacity="0.1">
                  <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    begin="3s"
                    path={navPath}
                  />
                </circle>
                {/* Third traveler */}
                <circle r="0.5" fill="hsl(210 60% 42%)">
                  <animateMotion
                    dur="8s"
                    repeatCount="indefinite"
                    begin="5.5s"
                    path={navPath}
                  />
                </circle>
              </>
            )}

            {/* Filters */}
            <defs>
              <filter id="pathGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="nodeGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Checkpoint nodes */}
            {stages.map((s, i) => {
              const pos = getCheckpointPos(s.angle, s.radius);
              return (
                <motion.g
                  key={s.stage}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 1.2 + i * 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  {/* Outer glow */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="3.5"
                    fill="hsl(24 100% 50%)"
                    opacity="0.08"
                    filter="url(#nodeGlow)"
                  >
                    <animate
                      attributeName="r"
                      values="3;4.5;3"
                      dur="3s"
                      begin={`${i * 0.5}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Node circle */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="2"
                    fill="hsl(30 30% 96%)"
                    stroke="hsl(24 100% 50%)"
                    strokeWidth="0.3"
                  />
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="0.8"
                    fill="hsl(24 100% 50%)"
                  >
                    <animate
                      attributeName="opacity"
                      values="0.6;1;0.6"
                      dur="2.5s"
                      begin={`${i * 0.4}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </motion.g>
              );
            })}
          </svg>

          {/* Central compass */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Soft glow behind compass */}
              <div className="absolute -inset-8 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute -inset-4 rounded-full bg-primary/5 blur-xl" />

              {/* Compass body */}
              <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-primary/15 via-primary/8 to-transparent border border-primary/20 flex items-center justify-center shadow-xl shadow-primary/15">
                {/* Rotating needle */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                >
                  {/* North needle */}
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2">
                    <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[18px] border-l-transparent border-r-transparent border-b-primary/60" />
                  </div>
                  {/* South needle */}
                  <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2">
                    <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[14px] border-l-transparent border-r-transparent border-t-muted-foreground/25" />
                  </div>
                  {/* East line */}
                  <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[14px] h-[1.5px] bg-primary/20 rounded-full" />
                </motion.div>

                {/* Center logo */}
                <div className="relative h-14 w-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center z-10">
                  <img
                    src={compassLogo}
                    alt="Axibator"
                    className="h-8 w-8 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                  <Compass className="h-6 w-6 text-primary hidden" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stage labels positioned outside the circle */}
          {stages.map((s, i) => {
            const pos = getCheckpointPos(s.angle, s.radius + 8);
            const isLeft = pos.x < 50;
            const isTop = pos.y < 50;
            return (
              <motion.div
                key={s.stage}
                className="absolute"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5 + i * 0.25, duration: 0.7 }}
              >
                <div className={`flex flex-col ${isLeft ? "items-end text-right" : "items-start text-left"}`}>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    {s.stage}
                  </span>
                  <span className="text-xs font-semibold text-foreground mt-0.5">
                    {s.program}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Faint radial lines from center to each checkpoint */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            {stages.map((s, i) => {
              const pos = getCheckpointPos(s.angle, s.radius);
              return (
                <motion.line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={pos.x}
                  y2={pos.y}
                  stroke="hsl(24 100% 50%)"
                  strokeWidth="0.08"
                  strokeDasharray="1 2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.2 } : {}}
                  transition={{ delay: 1 + i * 0.15 }}
                />
              );
            })}
          </svg>
        </div>

        {/* Mobile stage list */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-5 gap-4 lg:hidden">
          {stages.map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3 rounded-xl border border-border bg-card/80 backdrop-blur-sm px-4 py-3"
            >
              <div className="h-8 w-8 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">{i + 1}</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">{s.stage}</p>
                <p className="text-sm font-semibold text-foreground">{s.program}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default FounderJourney;
