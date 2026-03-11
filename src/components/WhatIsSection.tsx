import { motion } from "framer-motion";
import { Zap, Target } from "lucide-react";

const WhatIsSection = () => {
  return (
    <section className="section-padding border-t border-border bg-ecosystem-bg">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold md:text-4xl">
              <span className="text-primary">Axibator</span> = Axis + Incubator
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Direction + Nurture</p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              An execution-first hybrid incubator and growth accelerator helping founders move from idea to MVP to market.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-3.5">
                <Zap className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm font-semibold text-foreground md:text-base">No hierarchy. Just squads.</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-3.5">
                <Target className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm font-semibold text-foreground md:text-base">No waiting. Just building.</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="grid w-full max-w-sm grid-cols-2 gap-3">
              {[
                { label: "Ideation", icon: "💡", desc: "Discover problems worth solving" },
                { label: "MVP", icon: "🚀", desc: "Build fast, ship faster" },
                { label: "Market Fit", icon: "🎯", desc: "Find your early customers" },
                { label: "Growth", icon: "📈", desc: "Scale with confidence" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  className="rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-primary/30"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="mt-2 text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
