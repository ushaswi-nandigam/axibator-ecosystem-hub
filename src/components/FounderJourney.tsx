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
    <section className="section-padding dark-section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-label">The Pathway</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Your Founder Journey
          </motion.h2>
          <p className="section-desc mx-auto text-center">
            Five stages. One clear path. Axibator guides you from uncertainty to clarity.
          </p>
        </div>

        <div ref={ref} className="relative mt-24">
          {/* Connector line */}
          <div className="absolute top-16 left-[10%] right-[10%] hidden h-px lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 origin-left"
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((s, i) => (
              <motion.div
                key={s.stage}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Node */}
                <div className="relative z-10 flex h-32 w-32 items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="flex h-full w-full items-center justify-center rounded-2xl bg-card/5 backdrop-blur-sm border border-primary/10 transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-2xl group-hover:shadow-primary/10"
                  >
                    <s.icon className="h-9 w-9 text-primary/70 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                  </motion.div>
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground shadow-lg shadow-primary/30">
                    {i + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">{s.stage}</h3>
                <p className="mt-1.5 text-sm font-semibold text-primary">{s.program}</p>
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
