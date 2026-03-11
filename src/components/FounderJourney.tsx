import { motion } from "framer-motion";
import { Compass, Hammer, Rocket, TrendingUp, Globe } from "lucide-react";

const stages = [
  { stage: "Discover", program: "Ignite", icon: Compass, desc: "Validate your idea in 8 weeks" },
  { stage: "Build", program: "Core Incubation", icon: Hammer, desc: "12-week action-first build journey" },
  { stage: "Launch", program: "BuildLab", icon: Rocket, desc: "Find product-market fit" },
  { stage: "Scale", program: "GrowthTrack", icon: TrendingUp, desc: "Revenue growth and funding readiness" },
  { stage: "Go Global", program: "Global Catalyst", icon: Globe, desc: "Expand to international markets" },
];

const FounderJourney = () => {
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              {/* Step number */}
              <span className="absolute top-4 right-4 font-display text-xs font-bold text-muted-foreground/40">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <s.icon className="h-5 w-5 text-primary" />
              </div>

              <h3 className="mt-4 text-lg font-bold text-foreground">{s.stage}</h3>
              <p className="mt-1 text-xs font-semibold text-primary">{s.program}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>

              {/* Directional connector on desktop */}
              {i < stages.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-muted-foreground lg:flex">
                  <span className="text-xs">→</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderJourney;
