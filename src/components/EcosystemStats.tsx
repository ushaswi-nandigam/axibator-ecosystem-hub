import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Startup Teams" },
  { value: 75, suffix: "+", label: "Global Startup Program Partners" },
  { value: 500, prefix: "$", suffix: "K+", label: "Startup Credits Available" },
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
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="panel flex flex-col items-center rounded-lg p-8 text-center"
            >
              <AnimatedCounter target={s.value} prefix={s.prefix} suffix={s.suffix} />
              <span className="mt-3 text-sm text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemStats;
