import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Compass, Anchor, Map, Sparkles } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Parallax transforms for different layers
  const springConfig = { stiffness: 50, damping: 20 };
  const cardX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const cardY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfig);
  const floatX = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, -20]), springConfig);
  const floatY = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const deepX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);
  const deepY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28"
    >
      {/* Gradient orbs background */}
      <motion.div
        style={{ x: deepX, y: deepY }}
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"
      />
      <motion.div
        style={{ x: floatX, y: floatY }}
        className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl"
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Direction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Hybrid Incubator & Growth Accelerator
            </motion.div>

            <h1 className="text-4xl font-bold leading-[1.08] md:text-5xl lg:text-[3.5rem]">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-block"
              >
                Where Founders
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="inline-block"
              >
                Find <span className="text-primary relative">
                  Direction
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-primary/30"
                  />
                </span>
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="inline-block text-muted-foreground"
              >
                — and the Grit to Build Bold.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              A launchpad for grassroots and student founders. From small towns, campuses, and communities — with clarity, systems, and execution support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link to="/apply">
                <Button size="lg" className="group rounded-full bg-primary px-8 text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]">
                  Apply to Cohort
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/startups">
                <Button variant="outline" size="lg" className="rounded-full border-border px-8 text-foreground hover:bg-muted transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                  Explore Ecosystem
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {["Grassroots Focused", "Student Founders", "Community Driven"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                  className="tag"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Journey visual cards with spatial movement */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main card - moves with mouse */}
              <motion.div
                style={{ x: cardX, y: cardY }}
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-border bg-card p-8 shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Your Journey Starts Here</p>
                <div className="mt-6 space-y-4">
                  {[
                    { step: "01", label: "Discover", desc: "Validate your idea", icon: Compass, active: true },
                    { step: "02", label: "Build", desc: "Ship your MVP", icon: Anchor, active: false },
                    { step: "03", label: "Launch", desc: "Find your market", icon: Map, active: false },
                  ].map((item, i) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className={`flex items-center gap-4 rounded-xl border p-4 transition-colors cursor-pointer ${
                        item.active
                          ? "border-primary/30 bg-primary/5"
                          : "border-border bg-background hover:border-primary/20"
                      }`}
                    >
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        item.active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="ml-auto font-display text-xs font-bold text-muted-foreground">{item.step}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating stat — counter parallax */}
              <motion.div
                style={{ x: floatX, y: floatY }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -right-4 rounded-xl border border-border bg-card px-5 py-3 shadow-md"
              >
                <motion.p
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-2xl font-bold text-primary"
                >
                  25+
                </motion.p>
                <p className="text-xs text-muted-foreground">MVPs Launching</p>
              </motion.div>

              {/* Additional floating element */}
              <motion.div
                style={{ x: deepX, y: deepY }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card px-5 py-3 shadow-md"
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-xs font-semibold text-foreground">500+ Founders Active</p>
                </div>
              </motion.div>

              {/* Decorative ring */}
              <motion.div
                style={{ x: floatX, y: deepY }}
                className="absolute -top-10 -left-10 h-24 w-24 rounded-full border border-primary/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
