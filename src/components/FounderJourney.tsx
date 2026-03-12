import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, Hammer, Rocket, TrendingUp, Globe, Navigation } from "lucide-react";
import { useRef } from "react";

const stages = [
  { stage: "Discover", program: "Ignite", icon: Compass, desc: "Validate your idea in 8 weeks", color: "from-primary/20 to-primary/5" },
  { stage: "Build", program: "LaunchPad", icon: Hammer, desc: "12-week action-first build journey", color: "from-accent/20 to-accent/5" },
  { stage: "Launch", program: "BuildLab", icon: Rocket, desc: "Find product-market fit", color: "from-primary/20 to-primary/5" },
  { stage: "Scale", program: "GrowthTrack", icon: TrendingUp, desc: "Revenue growth & funding readiness", color: "from-accent/20 to-accent/5" },
  { stage: "Go Global", program: "Global Catalyst", icon: Globe, desc: "Expand to international markets", color: "from-primary/20 to-primary/5" },
];

const FounderJourney = () => {
  const ref = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll-linked route path animation
  const pathLength = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 0.7]);
  const glowOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 0.1]);

  // Parallax for background
  const bgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(220 25% 93%) 50%, hsl(210 30% 92%) 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
      
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] rounded-full bg-accent/[0.07] blur-[100px]" />
        <div className="absolute top-[30%] right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[80px]" />
      </motion.div>

      <div className="container" ref={ref}>
        <div className="text-center max-w-3xl mx-auto">
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

        <div className="relative mt-24" ref={svgRef}>
          {/* Main route SVG - scroll-linked */}
          <div className="absolute top-20 left-[8%] right-[8%] hidden lg:block">
            <svg className="w-full h-20" preserveAspectRatio="none" viewBox="0 0 1000 70">
              {/* Shadow/glow path */}
              <motion.path
                d="M 0 35 Q 125 8, 250 35 Q 375 62, 500 35 Q 625 8, 750 35 Q 875 62, 1000 35"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="8"
                strokeLinecap="round"
                style={{ pathLength, opacity: glowOpacity }}
              />
              {/* Main dashed route */}
              <motion.path
                d="M 0 35 Q 125 8, 250 35 Q 375 62, 500 35 Q 625 8, 750 35 Q 875 62, 1000 35"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeDasharray="10 5"
                strokeLinecap="round"
                style={{ pathLength, opacity: pathOpacity }}
              />
              {/* Traveler dot */}
              <motion.circle
                r="5"
                fill="hsl(var(--primary))"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ delay: 3.5, duration: 4, repeat: Infinity }}
              >
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  begin="3.5s"
                  path="M 0 35 Q 125 8, 250 35 Q 375 62, 500 35 Q 625 8, 750 35 Q 875 62, 1000 35"
                />
              </motion.circle>
            </svg>
          </div>

          {/* Vertical route for mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-px lg:hidden">
            <motion.div
              className="h-full w-full bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10"
              style={{ scaleY: pathLength, transformOrigin: 'top' }}
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((s, i) => (
              <motion.div
                key={s.stage}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col items-center text-center pl-12 lg:pl-0"
              >
                {/* Mobile waypoint marker */}
                <div className="absolute left-4 top-4 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground lg:hidden">
                  {i + 1}
                </div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br ${s.color} border-2 border-border shadow-lg transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20`}
                  >
                    <s.icon className="h-8 w-8 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                  </motion.div>
                  <span className="absolute -top-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg shadow-primary/40 hidden lg:flex">
                    {i + 1}
                  </span>
                </div>

                {/* Arrow connector */}
                {i < stages.length - 1 && (
                  <motion.div
                    className="absolute -right-4 top-14 hidden lg:block"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 0.4, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                  >
                    <Navigation className="h-4 w-4 text-primary rotate-90" />
                  </motion.div>
                )}

                <h3 className="mt-6 text-lg font-bold">{s.stage}</h3>
                <p className="mt-1 text-sm font-bold text-primary">{s.program}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-[180px]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default FounderJourney;
