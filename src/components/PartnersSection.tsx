import { motion, useInView } from "framer-motion";
import { Building, GraduationCap, Anchor, Globe, Landmark, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const categories = [
  { name: "Corporate", icon: Building },
  { name: "Universities", icon: GraduationCap },
  { name: "Incubators", icon: Anchor },
  { name: "Startup Programs", icon: Globe },
  { name: "Government", icon: Landmark },
];

const PartnersSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(160deg, hsl(0 0% 99%) 0%, hsl(220 20% 95%) 50%, hsl(210 25% 96%) 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      <div className="absolute top-[40%] right-0 w-[350px] h-[350px] rounded-full bg-secondary/[0.05] blur-[80px]" />

      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Text + category cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label">Allied Ports</span>
              <h2 className="section-title">Ecosystem Partners</h2>
              <p className="section-desc">Destinations and collaboration points across the journey.</p>
            </motion.div>

            <div className="mt-10 space-y-3">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-4 rounded-xl border-2 border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <cat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-foreground">{cat.name}</span>
                  <Handshake className="h-4 w-4 text-primary/30 ml-auto" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Hexagonal grid visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm mx-auto aspect-square">
              {/* Honeycomb hex grid */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
                {/* Background hex pattern */}
                {[
                  { cx: 150, cy: 150 },
                  { cx: 100, cy: 80 },
                  { cx: 200, cy: 80 },
                  { cx: 60, cy: 150 },
                  { cx: 240, cy: 150 },
                  { cx: 100, cy: 220 },
                  { cx: 200, cy: 220 },
                ].map((hex, i) => {
                  const size = i === 0 ? 42 : 35;
                  const points = Array.from({ length: 6 }, (_, j) => {
                    const angle = (Math.PI / 3) * j - Math.PI / 6;
                    return `${hex.cx + size * Math.cos(angle)},${hex.cy + size * Math.sin(angle)}`;
                  }).join(' ');
                  return (
                    <g key={i}>
                      <motion.polygon
                        points={points}
                        fill="none"
                        stroke={i === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                        strokeWidth={i === 0 ? "2" : "1"}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: i === 0 ? 0.5 : 0.2, scale: 1 } : {}}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                        style={{ transformOrigin: `${hex.cx}px ${hex.cy}px` }}
                      />
                      {/* Connecting lines from outer hexes to center */}
                      {i > 0 && (
                        <motion.line
                          x1={hex.cx} y1={hex.cy} x2={150} y2={150}
                          stroke="hsl(var(--primary))"
                          strokeWidth="1"
                          strokeDasharray="4 6"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={isInView ? { pathLength: 1, opacity: 0.2 } : {}}
                          transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* Animated data flow particles along connections */}
                {[
                  { from: { x: 100, y: 80 }, to: { x: 150, y: 150 } },
                  { from: { x: 200, y: 80 }, to: { x: 150, y: 150 } },
                  { from: { x: 60, y: 150 }, to: { x: 150, y: 150 } },
                  { from: { x: 240, y: 150 }, to: { x: 150, y: 150 } },
                  { from: { x: 100, y: 220 }, to: { x: 150, y: 150 } },
                  { from: { x: 200, y: 220 }, to: { x: 150, y: 150 } },
                ].map((line, i) => (
                  <motion.circle
                    key={`particle-${i}`}
                    r="3"
                    fill="hsl(var(--primary))"
                    initial={{ opacity: 0 }}
                    animate={isInView ? {
                      cx: [line.from.x, line.to.x],
                      cy: [line.from.y, line.to.y],
                      opacity: [0, 0.6, 0],
                    } : {}}
                    transition={{
                      delay: 1.5 + i * 0.4,
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </svg>

              {/* Category icons on outer hexes */}
              {[
                { x: 33, y: 27, idx: 0 },
                { x: 67, y: 27, idx: 1 },
                { x: 20, y: 50, idx: 2 },
                { x: 80, y: 50, idx: 3 },
                { x: 33, y: 73, idx: 4 },
              ].map((pos, i) => {
                const CatIcon = categories[pos.idx].icon;
                return (
                  <motion.div
                    key={i}
                    className="absolute flex flex-col items-center gap-1.5"
                    style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)' }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.12, type: "spring" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                      className="h-12 w-12 rounded-xl bg-card border-2 border-border flex items-center justify-center shadow-md transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
                    >
                      <CatIcon className="h-5 w-5 text-primary/70" />
                    </motion.div>
                    <span className="text-[9px] font-bold text-foreground/70 tracking-wider uppercase whitespace-nowrap">{categories[pos.idx].name}</span>
                  </motion.div>
                );
              })}

              {/* Center hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="relative"
                >
                  <motion.div
                    className="absolute -inset-4 rounded-xl bg-primary/10"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="h-14 w-14 rounded-xl bg-primary/15 border-2 border-primary/30 flex items-center justify-center shadow-lg">
                    <Handshake className="h-6 w-6 text-primary" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a href="mailto:connect@axibator.com">
            <Button variant="outline" className="rounded-full px-8 font-semibold border-2 transition-all duration-300 hover:border-primary/30">
              Become a Partner
            </Button>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default PartnersSection;