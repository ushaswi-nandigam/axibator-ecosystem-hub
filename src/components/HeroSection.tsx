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
      className="absolute inset-0 rounded-full border border-primary/15"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    />
    <motion.div
      className="absolute inset-[8%] rounded-full border border-accent/10"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
    />
    <motion.div
      className="absolute inset-[16%] rounded-full border border-primary/10"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    />

    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
      <motion.div
        key={deg}
        className="absolute top-1/2 left-1/2 origin-left"
        style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1 + i * 0.08, duration: 0.6 }}
      >
        <div className={`h-px w-16 ${deg % 90 === 0 ? 'bg-primary/25' : 'bg-muted-foreground/10'}`} style={{ marginLeft: '60px' }} />
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
        className={`absolute ${d.pos} text-[10px] font-bold tracking-[0.3em] text-primary/40`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[40px] border-l-transparent border-r-transparent border-b-primary" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[30px] border-l-transparent border-r-transparent border-t-muted-foreground/30" />
      </div>
    </motion.div>

    <motion.div
      className="relative z-10 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.8, type: "spring" }}
    >
      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
        <Navigation className="h-4 w-4 text-primary-foreground" />
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
        className="absolute h-2 w-2 rounded-full bg-primary/50"
        style={{ left: dot.x, top: dot.y }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.5] }}
        transition={{ delay: dot.delay, duration: 0.6, repeat: Infinity, repeatDelay: 4 }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 section-hero-light">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      {/* Soft gradient orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[100px]" />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-xs font-semibold tracking-wide text-primary"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              EXECUTION-FIRST INCUBATOR
            </motion.div>

            <h1 className="mt-8 text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="block">
                Where Founders
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="block">
                Find <span className="text-primary">Direction</span>
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl mt-2 font-medium">
                — and the Grit to Build Bold.
              </motion.span>
            </h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }} className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Axibator is an execution-first incubator helping student and grassroots founders navigate the journey from idea to startup.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/apply">
                <Button size="lg" className="group h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25 transition-all duration-300">
                  Apply to Cohort
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" size="lg" className="h-14 rounded-full px-10 text-base font-medium border-border text-foreground hover:bg-muted transition-all duration-300">
                  Explore the Journey
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t border-border/60 pt-8">
              {metrics.map((m, i) => (
                <motion.div key={m.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 + i * 0.1 }}>
                  <p className="text-2xl font-bold text-foreground md:text-3xl">{m.value}</p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground tracking-wide">{m.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <CompassGraphic />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">Scroll to explore</span>
        <motion.div
          className="h-8 w-px bg-gradient-to-b from-primary/40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
