import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Navigation } from "lucide-react";

const metrics = [
  { value: "50+", label: "Startup Teams" },
  { value: "300+", label: "Mentors Network" },
  { value: "75+", label: "Global Partners" },
  { value: "$500K+", label: "Credits Available" },
];

const CompassGraphic = () => (
  <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center">
    <motion.div
      className="absolute inset-0 rounded-full border-2 border-primary/40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    />
    <motion.div
      className="absolute inset-[8%] rounded-full border-2 border-accent/30"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
    />
    <motion.div
      className="absolute inset-[16%] rounded-full border border-primary/25"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    />

    {/* Gradient fill between rings */}
    <div className="absolute inset-[3%] rounded-full bg-gradient-to-br from-primary/[0.06] via-transparent to-accent/[0.06]" />

    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
      <motion.div
        key={deg}
        className="absolute top-1/2 left-1/2 origin-left"
        style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1 + i * 0.08, duration: 0.6 }}
      >
        <div className={`h-[2px] w-16 ${deg % 90 === 0 ? 'bg-primary/50' : 'bg-accent/25'}`} style={{ marginLeft: '60px' }} />
      </motion.div>
    ))}

    {[
      { label: "DISCOVER", pos: "top-[5%] left-1/2 -translate-x-1/2" },
      { label: "SCALE", pos: "bottom-[5%] left-1/2 -translate-x-1/2" },
      { label: "BUILD", pos: "right-[2%] top-1/2 -translate-y-1/2" },
      { label: "LAUNCH", pos: "left-[2%] top-1/2 -translate-y-1/2" },
    ].map((d, i) => (
      <motion.span
        key={d.label}
        className={`absolute ${d.pos} text-[11px] font-bold tracking-[0.3em] text-primary`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.5 + i * 0.15 }}
      >
        {d.label}
      </motion.span>
    ))}

    <motion.div
      className="absolute inset-[25%] flex items-center justify-center"
      animate={{ rotate: [0, 45, 30, 50, 35] }}
      transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
    >
      <div className="relative h-full w-px">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-r-[7px] border-b-[44px] border-l-transparent border-r-transparent border-b-primary" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[34px] border-l-transparent border-r-transparent border-t-muted-foreground/50" />
      </div>
    </motion.div>

    <motion.div
      className="relative z-10 h-18 w-18 rounded-full bg-primary/20 flex items-center justify-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.8, type: "spring" }}
    >
      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/50">
        <Navigation className="h-5 w-5 text-primary-foreground" />
      </div>
    </motion.div>

    {[
      { x: "25%", y: "20%", delay: 1.8 },
      { x: "75%", y: "30%", delay: 2.0 },
      { x: "70%", y: "70%", delay: 2.2 },
      { x: "30%", y: "75%", delay: 2.4 },
      { x: "50%", y: "15%", delay: 2.6 },
    ].map((dot, i) => (
      <motion.div
        key={i}
        className="absolute h-3 w-3 rounded-full bg-primary"
        style={{ left: dot.x, top: dot.y }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.3, 1], opacity: [0, 0.9, 0.6] }}
        transition={{ delay: dot.delay, duration: 0.6, repeat: Infinity, repeatDelay: 4 }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{
      background: 'linear-gradient(160deg, hsl(220 30% 96%) 0%, hsl(210 40% 92%) 40%, hsl(24 30% 94%) 100%)'
    }}>
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute top-10 right-0 w-[700px] h-[700px] rounded-full bg-primary/[0.10] blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/[0.10] blur-[100px]" />
      <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-secondary/[0.05] blur-[100px]" />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-primary/40 bg-primary/15 px-5 py-2 text-xs font-bold tracking-wide text-primary shadow-sm"
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
                <Button size="lg" className="group h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/35 transition-all duration-300">
                  Apply to Cohort
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" size="lg" className="h-14 rounded-full px-10 text-base font-semibold border-2 border-border text-foreground hover:bg-muted hover:border-primary/30 transition-all duration-300">
                  Explore the Journey
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }} className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4 border-t-2 border-primary/15 pt-8">
              {metrics.map((m, i) => (
                <motion.div key={m.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 + i * 0.12, duration: 0.5 }} className="min-w-0">
                  <p className="text-2xl font-extrabold text-foreground md:text-3xl whitespace-nowrap">{m.value}</p>
                  <p className="mt-1.5 text-[11px] font-semibold text-muted-foreground tracking-wide leading-tight">{m.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <CompassGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
