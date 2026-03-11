import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 25, suffix: "+", label: "MVPs Launching" },
  { value: 500, suffix: "+", label: "Founders in Community" },
  { value: 5, prefix: "₹", suffix: "L+", label: "Builder Credits Ready" },
  { value: 5, suffix: "+", label: "Rural Labs Piloting" },
];

const AnimatedCounter = ({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="ecosystem-counter">
      {prefix}{count}{suffix}
    </div>
  );
};

const EcosystemStats = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Built for Founders Who Don't Wait</p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 text-3xl font-bold md:text-4xl"
          >
            Ecosystem at a Glance
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm md:p-8"
            >
              <AnimatedCounter target={s.value} prefix={s.prefix} suffix={s.suffix} />
              <span className="mt-2 block text-sm text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground italic">
          No pitch decks needed to join. Just progress.
        </p>
      </div>
    </section>
  );
};

export default EcosystemStats;
