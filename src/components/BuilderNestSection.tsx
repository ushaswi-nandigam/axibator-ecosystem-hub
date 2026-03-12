import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Home, Users, Wrench, Coffee, ArrowRight, MapPin } from "lucide-react";

const features = [
  { icon: Home, title: "Founder-First Spaces", desc: "Cozy, gritty houses — not corporate offices" },
  { icon: Users, title: "Builder Community", desc: "Ship MVPs with fellow founders over chai" },
  { icon: Wrench, title: "Build Jams & Hackathons", desc: "Weekend sprints that turn ideas into products" },
  { icon: Coffee, title: "Chai-Fueled Chaos", desc: "Where chai breaks become co-founder meetings" },
];

const locations = [
  { city: "Amaravati", status: "Active", x: 22, y: 18 },
  { city: "Vizag", status: "Active", x: 75, y: 15 },
  { city: "Warangal", status: "Upcoming", x: 20, y: 68 },
  { city: "Vijayawada", status: "Scouting", x: 72, y: 75 },
];

// Animated pulse ring for active locations
const PulseRing = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null;
  return (
    <>
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-primary/40"
        animate={{ scale: [1, 1.6, 1.6], opacity: [0.5, 0, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 rounded-xl border border-primary/25"
        animate={{ scale: [1, 2, 2], opacity: [0.3, 0, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
      />
    </>
  );
};

// Animated traveling dot along a path
const TravelingDot = ({ path, delay, dur }: { path: string; delay: number; dur: number }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const progress = useMotionValue(0);

  useEffect(() => {
    const controls = animate(progress, 1, {
      duration: dur,
      delay,
      repeat: Infinity,
      ease: "linear",
    });
    const unsub = progress.on("change", (v) => {
      const svg = document.getElementById("nest-map-svg");
      if (!svg) return;
      const pathEl = svg.querySelector(`path[d="${path}"]`) as SVGPathElement | null;
      if (!pathEl) return;
      const len = pathEl.getTotalLength();
      const pt = pathEl.getPointAtLength(v * len);
      setPos({ x: pt.x, y: pt.y });
    });
    return () => { controls.stop(); unsub(); };
  }, [path, delay, dur]);

  return (
    <motion.circle
      cx={pos.x}
      cy={pos.y}
      r="3"
      fill="hsl(var(--primary))"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.8, 0.8, 0] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: "linear" }}
    />
  );
};

const curve1 = "M 88 85 C 140 200, 260 200, 310 310";
const curve2 = "M 310 75 C 260 180, 140 220, 88 290";

const BuilderNestSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="builder-nest" className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(160deg, hsl(30 30% 96%) 0%, hsl(24 40% 93%) 40%, hsl(30 25% 95%) 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
      <div className="absolute bottom-[20%] right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.07] blur-[100px]" />

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Text + cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label">The Shipyard</span>
              <h2 className="section-title">Builder Nest</h2>
              <p className="section-desc">
                Not a WeWork. Not an incubator. A home for founders to build bold things — together.
                Physical, founder-first spaces in Tier 2/3 cities.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="group rounded-xl bg-card border-2 border-border p-5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                    <f.icon className="h-5 w-5 text-primary/70 transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Enhanced animated location map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Rotating outer ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-dashed border-primary/12"
                animate={{ rotate: 360 }}
                transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
              />
              {/* Static middle border */}
              <div className="absolute inset-[5%] rounded-2xl border border-dashed border-primary/10" />
              {/* Inner glow border */}
              <motion.div
                className="absolute inset-[10%] rounded-xl border border-primary/8"
                animate={{ borderColor: ["hsl(var(--primary) / 0.08)", "hsl(var(--primary) / 0.18)", "hsl(var(--primary) / 0.08)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Dot grid */}
              <div className="absolute inset-[5%] rounded-2xl opacity-[0.035]" style={{
                backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
                backgroundSize: '22px 22px'
              }} />

              {/* SVG curves + traveling dots */}
              <svg id="nest-map-svg" className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="curveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="curveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
                  </linearGradient>
                </defs>

                {/* Main curves */}
                <motion.path
                  d={curve1}
                  fill="none"
                  stroke="url(#curveGrad1)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.path
                  d={curve2}
                  fill="none"
                  stroke="url(#curveGrad2)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.7, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Traveling dots along curves */}
                {isInView && (
                  <>
                    <TravelingDot path={curve1} delay={2} dur={4} />
                    <TravelingDot path={curve2} delay={3} dur={5} />
                  </>
                )}
              </svg>

              {/* Location pins */}
              {locations.map((loc, i) => {
                const isActive = loc.status === 'Active';
                return (
                  <motion.div
                    key={loc.city}
                    className="absolute flex flex-col items-center"
                    style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: 'translate(-50%, -50%)' }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.18, type: "spring", stiffness: 180, damping: 14 }}
                  >
                    <div className="relative">
                      <PulseRing isActive={isActive} />
                      <motion.div
                        animate={isActive ? { y: [0, -5, 0] } : { opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: isActive ? 3 : 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                        className={`relative h-14 w-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-to-br from-primary/15 to-primary/5 border-2 border-primary/35 shadow-lg shadow-primary/15'
                            : 'bg-muted/50 border border-border/80 shadow-md'
                        }`}
                      >
                        <MapPin className={`h-6 w-6 ${isActive ? 'text-primary' : 'text-muted-foreground/35'}`} />
                      </motion.div>
                    </div>
                    <motion.span
                      className="mt-2.5 text-xs font-bold tracking-wide text-foreground/80"
                      animate={isActive ? { color: ["hsl(var(--foreground) / 0.8)", "hsl(var(--foreground) / 1)", "hsl(var(--foreground) / 0.8)"] } : {}}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {loc.city}
                    </motion.span>
                    <span className={`text-[9px] font-extrabold uppercase tracking-[0.2em] ${
                      isActive ? 'text-primary' : 'text-muted-foreground/45'
                    }`}>
                      {loc.status}
                    </span>
                  </motion.div>
                );
              })}

              {/* Center network hub */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/25 flex items-center justify-center backdrop-blur-sm"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 hsl(var(--primary) / 0.15)",
                      "0 0 20px 8px hsl(var(--primary) / 0.08)",
                      "0 0 0 0 hsl(var(--primary) / 0.15)",
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="h-3 w-3 rounded-full bg-primary/50" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
        >
          <Link to="/builder-nest">
            <Button className="group rounded-full bg-primary px-8 text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300">
              Explore the Nest
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/apply">
            <Button variant="outline" className="rounded-full px-8 font-medium border-2 hover:bg-muted transition-all duration-300">
              Apply to Host
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default BuilderNestSection;
