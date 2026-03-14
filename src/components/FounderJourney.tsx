import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stages = [
  { stage: "Discover", program: "Ignite", desc: "Validate your idea in 8 weeks" },
  { stage: "Build", program: "LaunchPad", desc: "12-week action-first build journey" },
  { stage: "Launch", program: "BuildLab", desc: "Find product-market fit" },
  { stage: "Scale", program: "GrowthTrack", desc: "Revenue growth & funding readiness" },
  { stage: "Go Global", program: "Global Catalyst", desc: "Expand to international markets" },
];

const FounderJourney = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding section-grey" ref={ref}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="section-label">
            The Journey
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }} className="section-title">
            Your Founder Journey
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center">
            Five stages. One clear route. Axibator guides you from uncertainty to global impact.
          </motion.p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="relative hidden lg:block">
          {/* Progress line */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-[3px] bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-5 gap-6">
            {stages.map((s, i) => (
              <motion.div
                key={s.stage}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center"
              >
                {/* Milestone dot */}
                <motion.div
                  className="relative z-10 flex h-[28px] w-[28px] items-center justify-center rounded-full bg-card border-[3px] border-primary shadow-md"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.2, type: "spring", stiffness: 300 }}
                >
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </motion.div>

                {/* Card */}
                <div className="mt-6 rounded-xl border border-border bg-card p-5 w-full transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{s.program}</span>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{s.stage}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="relative lg:hidden">
          <div className="absolute left-5 top-0 bottom-0 w-[3px] bg-border rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-primary rounded-full"
              initial={{ height: "0%" }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-6 pl-14">
            {stages.map((s, i) => (
              <motion.div
                key={s.stage}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-[calc(2.25rem+6px)] top-4 flex h-6 w-6 items-center justify-center rounded-full bg-card border-[3px] border-primary shadow-sm">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <div className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{s.program}</span>
                  <h3 className="mt-1 text-lg font-bold text-foreground">{s.stage}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderJourney;
