import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, animate } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import { ArrowRight, Compass, Zap, Globe, Rocket, Target, Star } from "lucide-react";

const metrics = [
  { value: 50, suffix: "+", label: "Startup Teams" },
  { value: 300, suffix: "+", label: "Mentors Network" },
  { value: 75, suffix: "+", label: "Global Partners" },
  { value: 500, prefix: "$", suffix: "K+", label: "Credits Available" },
];

// Animated counter for hero metrics
const HeroCounter = ({ value, prefix = "", suffix = "", delay }: { value: number; prefix?: string; suffix?: string; delay: number }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.floor(v)),
    });
    return () => controls.stop();
  }, [started, value]);

  return <span>{prefix}{count}{suffix}</span>;
};

// Floating particle system
const FloatingParticle = ({ delay, x, y, size, icon: Icon }: { delay: number; x: number; y: number; size: number; icon?: any }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.6, 0.3, 0.6, 0],
      scale: [0.5, 1, 0.8, 1, 0.5],
      x: [0, 15, -10, 20, 0],
      y: [0, -20, -10, -30, 0],
    }}
    transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    {Icon ? (
      <Icon className="text-primary/25" style={{ width: size, height: size }} />
    ) : (
      <div
        className="rounded-full bg-primary/30"
        style={{ width: size, height: size }}
      />
    )}
  </motion.div>
);

// Enhanced compass with glow and better animations
const CompassGraphic = () => {
  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-square flex items-center justify-center">
      {/* Deep radial glow behind compass */}
      <motion.div
        className="absolute inset-[-20%] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(24 100% 50% / 0.12) 0%, hsl(24 100% 50% / 0.04) 40%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary glow ring */}
      <motion.div
        className="absolute inset-[-8%] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(210 60% 42% / 0.06) 0%, transparent 60%)',
        }}
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Outer ring with animated glow */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary/15"
        animate={{
          boxShadow: [
            '0 0 0 0 hsl(24 100% 50% / 0)',
            '0 0 30px 8px hsl(24 100% 50% / 0.08)',
            '0 0 0 0 hsl(24 100% 50% / 0)',
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Concentric rings */}
      <motion.div
        className="absolute inset-[6%] rounded-full border-2 border-accent/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      <motion.div
        className="absolute inset-[12%] rounded-full border border-primary/15"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.85 }}
      />
      <motion.div
        className="absolute inset-[18%] rounded-full border border-accent/10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.95 }}
      />

      {/* Gradient fill */}
      <div className="absolute inset-[3%] rounded-full bg-gradient-to-br from-primary/[0.06] via-transparent to-accent/[0.06]" />

      {/* Degree tick marks */}
      {Array.from({ length: 36 }).map((_, i) => {
        const deg = i * 10;
        const isMajor = deg % 90 === 0;
        const isMid = deg % 45 === 0 && !isMajor;
        return (
          <motion.div
            key={deg}
            className="absolute top-1/2 left-1/2 origin-left"
            style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1 + i * 0.02, duration: 0.4 }}
          >
            <div
              className={`${isMajor ? 'h-[2px] w-20 bg-primary/50' : isMid ? 'h-[1.5px] w-12 bg-primary/30' : 'h-px w-6 bg-muted-foreground/15'}`}
              style={{ marginLeft: isMajor ? '60px' : isMid ? '68px' : '74px' }}
            />
          </motion.div>
        );
      })}

      {/* Cardinal labels */}
      {[
        { label: "DISCOVER", pos: "top-[1%] left-1/2 -translate-x-1/2" },
        { label: "SCALE", pos: "bottom-[1%] left-1/2 -translate-x-1/2" },
        { label: "BUILD", pos: "right-[-2%] top-1/2 -translate-y-1/2" },
        { label: "LAUNCH", pos: "left-[-2%] top-1/2 -translate-y-1/2" },
      ].map((d, i) => (
        <motion.span
          key={d.label}
          className={`absolute ${d.pos} text-[10px] font-extrabold tracking-[0.3em] text-primary`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ delay: 1.5 + i * 0.15, type: "spring" }}
        >
          {d.label}
        </motion.span>
      ))}

      {/* Intercardinal labels */}
      {[
        { label: "N", angle: 315, r: 46 },
        { label: "E", angle: 45, r: 46 },
        { label: "S", angle: 135, r: 46 },
        { label: "W", angle: 225, r: 46 },
      ].map((d) => (
        <motion.span
          key={d.label}
          className="absolute text-[9px] font-bold text-accent/60 tracking-widest"
          style={{
            top: `${50 - d.r * Math.cos((d.angle * Math.PI) / 180)}%`,
            left: `${50 + d.r * Math.sin((d.angle * Math.PI) / 180)}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.8 }}
        >
          {d.label}
        </motion.span>
      ))}

      {/* Rotating dashed ring */}
      <motion.div
        className="absolute inset-[24%] rounded-full border border-dashed border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />
      {/* Counter-rotating ring */}
      <motion.div
        className="absolute inset-[20%] rounded-full border border-dashed border-accent/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      {/* Compass needle - slow smooth rotation */}
      <motion.div
        className="absolute inset-[22%] flex items-center justify-center"
        animate={{ rotate: [0, 45, 20, 55, 30, 10, 40, 0] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      >
        <div className="relative h-full w-px">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[55px] border-l-transparent border-r-transparent border-b-primary drop-shadow-lg" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[40px] border-l-transparent border-r-transparent border-t-muted-foreground/40" />
        </div>
      </motion.div>

      {/* Center hub with pulsing glow */}
      <motion.div
        className="relative z-10 h-22 w-22 rounded-full flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
      >
        {/* Pulsing light ring */}
        <motion.div
          className="absolute h-24 w-24 rounded-full"
          animate={{
            boxShadow: [
              '0 0 20px 5px hsl(24 100% 50% / 0.15)',
              '0 0 40px 15px hsl(24 100% 50% / 0.25)',
              '0 0 20px 5px hsl(24 100% 50% / 0.15)',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-20 w-20 rounded-full bg-primary/15"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl shadow-primary/50">
          <Compass className="h-7 w-7 text-primary-foreground" />
        </div>
      </motion.div>

      {/* Program waypoints with bounce-in */}
      {[
        { x: 20, y: 16, delay: 1.8, label: "Ignite", icon: Zap },
        { x: 80, y: 22, delay: 2.0, label: "LaunchPad", icon: Rocket },
        { x: 84, y: 74, delay: 2.2, label: "BuildLab", icon: Target },
        { x: 22, y: 80, delay: 2.4, label: "GrowthTrack", icon: Globe },
        { x: 50, y: 8, delay: 2.6, label: "Global", icon: Star },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute flex flex-col items-center"
          style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: dot.delay, duration: 0.6, type: "spring", stiffness: 300, damping: 15 }}
        >
          <motion.div
            className="h-8 w-8 rounded-lg bg-card border border-primary/25 flex items-center justify-center shadow-lg shadow-primary/10"
            animate={{ y: [0, -3, 0], scale: [1, 1.05, 1] }}
            transition={{ delay: dot.delay + 0.8, duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <dot.icon className="h-3.5 w-3.5 text-primary" />
          </motion.div>
          <span className="mt-1 text-[8px] font-bold text-primary/70 tracking-wider whitespace-nowrap">
            {dot.label}
          </span>
        </motion.div>
      ))}

      {/* Orbiting satellite */}
      <motion.div
        className="absolute inset-[4%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <motion.div
            className="h-2.5 w-2.5 rounded-full bg-accent shadow-lg shadow-accent/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Second orbiting element */}
      <motion.div
        className="absolute inset-[15%]"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="h-2 w-2 rounded-full bg-primary/40 shadow-md shadow-primary/30" />
        </div>
      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const compassY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const compassScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // Floating particles data
  const particles = useMemo(() => [
    { x: 5, y: 20, size: 6, delay: 0 },
    { x: 92, y: 35, size: 4, delay: 1.5 },
    { x: 15, y: 70, size: 5, delay: 3 },
    { x: 88, y: 75, size: 7, delay: 2 },
    { x: 50, y: 85, size: 4, delay: 4 },
    { x: 35, y: 15, size: 5, delay: 1, icon: Zap },
    { x: 75, y: 10, size: 14, delay: 2.5, icon: Globe },
    { x: 8, y: 50, size: 12, delay: 3.5, icon: Star },
  ], []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-24">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(160deg, hsl(220 30% 96%) 0%, hsl(210 40% 92%) 40%, hsl(24 30% 94%) 100%)',
              'linear-gradient(180deg, hsl(24 25% 95%) 0%, hsl(213 35% 93%) 40%, hsl(220 30% 95%) 100%)',
              'linear-gradient(200deg, hsl(210 35% 94%) 0%, hsl(24 35% 93%) 40%, hsl(213 30% 95%) 100%)',
              'linear-gradient(160deg, hsl(220 30% 96%) 0%, hsl(210 40% 92%) 40%, hsl(24 30% 94%) 100%)',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Moving glowing blobs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[120px]"
          animate={{
            x: [0, 100, 50, -50, 0],
            y: [0, -80, 30, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '5%', right: '-5%' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-accent/[0.07] blur-[100px]"
          animate={{
            x: [0, -60, 40, -30, 0],
            y: [0, 50, -30, 60, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          style={{ bottom: '0%', left: '-5%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-secondary/[0.05] blur-[100px]"
          animate={{
            x: [0, 40, -40, 20, 0],
            y: [0, -40, 20, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          style={{ top: '35%', left: '25%' }}
        />
      </motion.div>

      {/* Dot grid with parallax */}
      <motion.div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          y: bgY,
        }}
      />

      {/* Animated background route lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 1400 900" preserveAspectRatio="none">
        <motion.path
          d="M 0 450 Q 350 200, 700 450 Q 1050 700, 1400 450"
          fill="none" stroke="hsl(var(--primary))" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
        />
        <motion.path
          d="M 0 500 Q 350 300, 700 500 Q 1050 700, 1400 500"
          fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeDasharray="8 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, delay: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M 0 400 Q 250 350, 500 400 Q 900 500, 1400 380"
          fill="none" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="4 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, delay: 2, ease: "easeInOut" }}
        />
      </svg>

      {/* Floating ambient particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      <div className="container relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Left: Text content with parallax */}
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-primary/40 bg-primary/15 px-5 py-2 text-xs font-bold tracking-wide text-primary shadow-sm"
              >
                <motion.span
                  className="h-2.5 w-2.5 rounded-full bg-primary"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                EXECUTION-FIRST INCUBATOR
              </motion.div>

              <h1 className="mt-8 text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
                <motion.span
                  initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="block"
                >
                  Where Founders
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="block"
                >
                  Find <span className="text-primary font-extrabold">Direction</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl mt-2 font-medium"
                >
                  — and the Grit to Build Bold.
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.6 }}
                className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground"
              >
                Axibator is an execution-first incubator helping student and grassroots founders navigate the journey from idea to startup.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Link to="/apply">
                  <Button size="lg" className="group h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/35 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/45 hover:scale-[1.02]">
                    Apply to Cohort
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
                  </Button>
                </Link>
                <Link to="/programs">
                  <Button variant="outline" size="lg" className="h-14 rounded-full px-10 text-base font-semibold border-2 border-border text-foreground hover:bg-muted hover:border-primary/30 transition-all duration-300">
                    Explore the Journey
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.7 }}
                className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 border-t-2 border-primary/15 pt-8"
              >
                {metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + i * 0.12, duration: 0.5 }}
                    className="min-w-0"
                  >
                    <p className="text-2xl font-extrabold text-foreground md:text-3xl whitespace-nowrap">
                      <HeroCounter value={m.value} prefix={m.prefix} suffix={m.suffix} delay={1.5 + i * 0.15} />
                    </p>
                    <p className="mt-1.5 text-[11px] font-semibold text-muted-foreground tracking-wide leading-tight">{m.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Compass with parallax sticky effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
            style={{ y: compassY, scale: compassScale }}
          >
            <CompassGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
