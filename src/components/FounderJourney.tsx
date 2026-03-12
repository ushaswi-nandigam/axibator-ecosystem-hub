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
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(220 20% 96%) 50%, hsl(210 25% 95%) 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container">
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

        <div ref={ref} className="relative mt-24">
          {/* Navigation route line */}
          <div className="absolute top-20 left-[10%] right-[10%] hidden lg:block">
            <svg className="w-full h-16" preserveAspectRatio="none" viewBox="0 0 1000 60">
              <motion.path
                d="M 0 30 Q 125 5, 250 30 Q 375 55, 500 30 Q 625 5, 750 30 Q 875 55, 1000 30"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((s, i) => (
              <motion.div
                key={s.stage}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-28 w-28 items-center justify-center rounded-full bg-card border-2 border-border transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-2xl group-hover:shadow-primary/15"
                  >
                    <s.icon className="h-8 w-8 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                  </motion.div>
                  <span className="absolute -top-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg shadow-primary/40">
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

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default FounderJourney;
