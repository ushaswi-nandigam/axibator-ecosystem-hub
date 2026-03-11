import { motion, useInView } from "framer-motion";
import { Compass, Hammer, Rocket, TrendingUp, Globe } from "lucide-react";
import { useRef } from "react";

const stages = [
  { stage: "Discover", program: "Ignite", icon: Compass, desc: "Validate your idea in 8 weeks" },
  { stage: "Build", program: "Core Incubation", icon: Hammer, desc: "12-week action-first build journey" },
  { stage: "Launch", program: "BuildLab", icon: Rocket, desc: "Find product-market fit" },
  { stage: "Scale", program: "GrowthTrack", icon: TrendingUp, desc: "Revenue growth and funding readiness" },
  { stage: "Go Global", program: "Global Catalyst", icon: Globe, desc: "Expand to international markets" },
];

const FounderJourney = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">The Pathway</p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 text-3xl font-bold md:text-4xl"
          >
            Your Founder Journey
          </motion.h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Each stage is a checkpoint. Axibator guides you from uncertainty to clarity.
          </p>
        </div>

        {/* Journey cards */}
        <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg cursor-pointer"
            >
              {/* Step number */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="absolute top-4 right-4 font-display text-3xl font-bold text-muted-foreground/10 transition-colors group-hover:text-primary/15"
              >
                {String(i + 1).padStart(2, "0")}
              </motion.span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:shadow-md group-hover:shadow-primary/20">
                <s.icon className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>

              <h3 className="mt-4 text-lg font-bold text-foreground">{s.stage}</h3>
              <p className="mt-1 text-xs font-semibold text-primary">{s.program}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>

              {/* Directional connector on desktop */}
              {i < stages.length - 1 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.1 + 0.4, type: "spring", stiffness: 300 }}
                  className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm lg:flex"
                >
                  <span className="text-xs">→</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderJourney;
