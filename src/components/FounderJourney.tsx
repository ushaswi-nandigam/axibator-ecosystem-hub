import { motion, useInView } from "framer-motion";
import { Compass, Hammer, Rocket, TrendingUp, Globe } from "lucide-react";
import { useRef } from "react";

const stages = [
  { stage: "Discover", program: "Ignite", icon: Compass, desc: "Validate your idea in 8 weeks" },
  { stage: "Build", program: "LaunchPad", icon: Hammer, desc: "12-week action-first build journey" },
  { stage: "Launch", program: "BuildLab", icon: Rocket, desc: "Find product-market fit" },
  { stage: "Scale", program: "GrowthTrack", icon: TrendingUp, desc: "Revenue growth & funding readiness" },
  { stage: "Go Global", program: "Global Catalyst", icon: Globe, desc: "Expand to international markets" },
];

const FounderJourney = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-label">The Navigation Route</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Your Founder Journey
          </motion.h2>
          <p className="section-desc mx-auto text-center">
            Five stages. One clear route. Axibator guides you from uncertainty to global impact.
          </p>
        </div>

        <div ref={ref} className="relative mt-24">
          {/* Navigation route line */}
          <div className="absolute top-20 left-[10%] right-[10%] hidden lg:block">
            <svg className="w-full h-16" preserveAspectRatio="none" viewBox="0 0 1000 60">
              <motion.path
                d="M 0 30 Q 125 5, 250 30 Q 375 55, 500 30 Q 625 5, 750 30 Q 875 55, 1000 30"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
                transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((s, i) => (
              <motion.div
                key={s.stage}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Route marker */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex h-28 w-28 items-center justify-center rounded-full bg-muted/50 border border-border/50 transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-2xl group-hover:shadow-primary/10"
                  >
                    <s.icon className="h-8 w-8 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                  </motion.div>
                  <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground shadow-lg shadow-primary/30">
                    {i + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold">{s.stage}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{s.program}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-[180px]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderJourney;
