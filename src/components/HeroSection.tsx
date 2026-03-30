import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Suspense, lazy, useState } from "react";
import axibatorIcon from "@/assets/axibator-icon.png";

const HeroMesh = lazy(() => import("@/components/HeroMesh"));

const metrics = [
  { value: "50+", label: "Startup Teams" },
  { value: "300+", label: "Mentors Network" },
  { value: "75+", label: "Global Partners" },
  { value: "$500K+", label: "Credits Available" },
];

/* ── 2D SVG Compass fallback ── */
const CompassFallback = () => (
  <div className="relative w-full max-w-[480px] mx-auto aspect-square flex items-center justify-center">
    <motion.div className="absolute inset-[-10%] rounded-full bg-primary/[0.08] blur-[60px]"
      animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
    <motion.div className="absolute inset-0 rounded-full border-2 border-primary/25"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1.2, delay: 0.5 }} />
    <motion.div className="absolute inset-[6%] rounded-full border-2 border-primary/15"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.7 }} />
    <motion.div className="absolute inset-[12%] rounded-full border border-primary/10"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, delay: 0.85 }} />
    <div className="absolute inset-[3%] rounded-full bg-gradient-to-br from-primary/[0.06] via-transparent to-accent/[0.04]" />

    {/* Tick marks */}
    {Array.from({ length: 36 }).map((_, i) => {
      const deg = i * 10;
      const isMajor = deg % 90 === 0;
      const isMid = deg % 45 === 0 && !isMajor;
      return (
        <motion.div key={deg} className="absolute top-1/2 left-1/2 origin-left"
          style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}
          initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1 + i * 0.02, duration: 0.4 }}>
          <div className={`${isMajor ? 'h-[2px] w-20 bg-primary/30' : isMid ? 'h-[1.5px] w-12 bg-primary/18' : 'h-px w-6 bg-primary/8'}`}
            style={{ marginLeft: isMajor ? '55px' : isMid ? '63px' : '69px' }} />
        </motion.div>
      );
    })}

    {/* Cardinal labels */}
    {[
      { label: "DISCOVER", pos: "top-[2%] left-1/2 -translate-x-1/2" },
      { label: "SCALE", pos: "bottom-[2%] left-1/2 -translate-x-1/2" },
      { label: "BUILD", pos: "right-[0%] top-1/2 -translate-y-1/2" },
      { label: "LAUNCH", pos: "left-[0%] top-1/2 -translate-y-1/2" },
    ].map((d, i) => (
      <motion.span key={d.label} className={`absolute ${d.pos} text-[10px] font-extrabold tracking-[0.3em] text-primary`}
        initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 1.5 + i * 0.15 }}>
        {d.label}
      </motion.span>
    ))}

    {/* Dashed rotating ring */}
    <motion.div className="absolute inset-[24%] rounded-full border border-dashed border-primary/12"
      animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} />

    {/* Needle */}
    <motion.div className="absolute inset-[22%] flex items-center justify-center"
      animate={{ rotate: [0, 45, 25, 55, 35, 10, 40] }}
      transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}>
      <div className="relative h-full w-px">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-b-[28px] border-l-transparent border-r-transparent border-b-primary/60" />
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[20px] border-l-transparent border-r-transparent border-t-destructive/40" />
      </div>
    </motion.div>

    {/* Center hub */}
    <motion.div className="relative z-10 h-20 w-20 rounded-full flex items-center justify-center"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }}>
      <div className="absolute inset-0 rounded-full bg-primary/15 animate-pulse" />
      <div className="relative h-14 w-14 rounded-full bg-background border border-primary/25 flex items-center justify-center shadow-2xl shadow-primary/15">
        <img src={axibatorIcon} alt="Axibator" className="h-10 w-10 object-contain" />
      </div>
    </motion.div>

    {/* Waypoints */}
    {[
      { x: 22, y: 18, delay: 1.8, label: "Ignite" },
      { x: 78, y: 25, delay: 2.0, label: "LaunchPad" },
      { x: 82, y: 72, delay: 2.2, label: "BuildLab" },
      { x: 25, y: 78, delay: 2.4, label: "GrowthTrack" },
      { x: 50, y: 10, delay: 2.6, label: "Global" },
    ].map((dot, i) => (
      <motion.div key={i} className="absolute flex flex-col items-center"
        style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: dot.delay, duration: 0.5, type: "spring" }}>
        <motion.div className="h-3.5 w-3.5 rounded-full bg-primary shadow-lg shadow-primary/30"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ delay: dot.delay + 0.5, duration: 2, repeat: Infinity }} />
        <span className="mt-1 text-[8px] font-bold text-primary/50 tracking-wider whitespace-nowrap">{dot.label}</span>
      </motion.div>
    ))}

    {/* Orbiting satellite */}
    <motion.div className="absolute inset-[5%]" animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-primary shadow-lg shadow-primary/40" />
    </motion.div>
  </div>
);

const HeroMeshWithFallback = () => {
  const [webglFailed, setWebglFailed] = useState(false);

  if (webglFailed) return <CompassFallback />;

  return (
    <Suspense fallback={<CompassFallback />}>
      <ErrorCatcher onError={() => setWebglFailed(true)}>
        <HeroMesh />
      </ErrorCatcher>
    </Suspense>
  );
};

/* Simple error boundary */
import { Component, type ReactNode, type ErrorInfo } from "react";

class ErrorCatcher extends Component<{ children: ReactNode; onError: () => void }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(_: Error, __: ErrorInfo) { this.props.onError(); }
  render() { return this.state.hasError ? null : this.props.children; }
}

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-24 hero-light">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute top-10 right-0 w-[700px] h-[700px] rounded-full bg-primary/[0.06] blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/[0.05] blur-[100px]" />

      <div className="container relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/[0.08] px-5 py-2 text-xs font-bold tracking-wide text-primary shadow-sm"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
              EXECUTION-FIRST INCUBATOR
            </motion.div>

            <h1 className="mt-8 text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="block">
                Where Founders
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }} className="block">
                Find <span className="text-primary font-extrabold">Direction</span>
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl mt-2 font-medium">
                — and the Grit to Build Bold.
              </motion.span>
            </h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.6 }} className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Axibator is an execution-first incubator helping student and grassroots founders navigate the journey from idea to startup.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }} className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/apply">
                <Button size="lg" className="group h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all duration-300">
                  Apply to Cohort
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" size="lg" className="h-14 rounded-full px-10 text-base font-semibold border border-border text-foreground hover:bg-primary/5 transition-all duration-300">
                  Explore the Journey
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }} className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 border-t border-border pt-8">
              {metrics.map((m, i) => (
                <motion.div key={m.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 + i * 0.12, duration: 0.5 }} className="min-w-0">
                  <p className="text-2xl font-extrabold text-primary md:text-3xl whitespace-nowrap">{m.value}</p>
                  <p className="mt-1.5 text-[11px] font-semibold text-muted-foreground tracking-wide leading-tight">{m.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block aspect-square"
          >
            <HeroMeshWithFallback />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
