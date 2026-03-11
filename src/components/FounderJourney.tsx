import { motion, useInView } from "framer-motion";
import { Compass, Hammer, Rocket, TrendingUp, Globe } from "lucide-react";
import { useRef } from "react";

const stages = [
  { stage: "Discover", program: "Ignite", icon: Compass, desc: "Validate your idea in 8 weeks" },
  { stage: "Build", program: "LaunchPad", icon: Hammer, desc: "12-week action-first build journey" },
  { stage: "Launch", program: "BuildLab", icon: Rocket, desc: "Find product-market fit" },
  { stage: "Scale", program: "GrowthTrack", icon: TrendingUp, desc: "Revenue growth and funding readiness" },
  { stage: "Go Global", program: "Global Catalyst", icon: Globe, desc: "Expand to international markets" },
];

const FounderJourney = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding dark-section">
      <div className="container">
        <div className="text-center">
          <p className="section-label">The Pathway</p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Your Founder Journey
          </motion.h2>
          <p className="section-desc mx-auto text-center">
            Each stage is a checkpoint. Axibator guides you from uncertainty to clarity.
          </p>
        </div>

        {/* Connected timeline */}
        <div ref={ref} className="relative mt-20">
          {/* Horizontal connector line (desktop) */}
          <div className="absolute top-12 left-[10%] right-[10%] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((s, i) => (
              <motion.div
                key={s.stage}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Node */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-card/10 backdrop-blur-sm border border-primary/20 transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/10"
                >
                  <s.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  {/* Step number */}
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </motion.div>

                {/* Arrow connector (desktop) */}
                {i < stages.length - 1 && (
                  <div className="absolute top-12 -right-3 z-20 hidden text-primary/40 lg:block">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M2 1L10 6L2 11V1Z" />
                    </svg>
                  </div>
                )}

                <h3 className="mt-5 text-lg font-bold">{s.stage}</h3>
                <p className="mt-1 text-xs font-semibold text-primary">{s.program}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderJourney;
