import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Startup Teams" },
  { value: 75, suffix: "+", label: "Global Startup Program Partners" },
  { value: 500, prefix: "$", suffix: "K+", label: "Startup Credits" },
  { value: 300, suffix: "+", label: "Mentors Network" },
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Accent gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-transparent to-accent/[0.03]" />

      <div className="container relative">
        <div className="section-header text-center">
          <p className="section-label">Impact</p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Ecosystem at a Glance
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl bg-card p-8 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 md:p-10"
            >
              <AnimatedCounter target={s.value} prefix={s.prefix} suffix={s.suffix} />
              <span className="mt-3 block text-sm font-medium text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemStats;
