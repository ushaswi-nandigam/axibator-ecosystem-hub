import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Target, TrendingUp, Award, Users } from "lucide-react";

const stats = [
  { value: 50, suffix: "+", label: "Startup Teams", icon: Target },
  { value: 75, suffix: "+", label: "Global Partners", icon: Award },
  { value: 500, prefix: "$", suffix: "K+", label: "Startup Credits", icon: TrendingUp },
  { value: 300, suffix: "+", label: "Mentors Network", icon: Users },
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
    <div ref={ref} className="font-display text-3xl font-extrabold tabular-nums md:text-4xl lg:text-5xl text-primary">
      {prefix}{count}{suffix}
    </div>
  );
};

const EcosystemStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={sectionRef} style={{
      background: 'linear-gradient(160deg, hsl(30 40% 94%) 0%, hsl(24 50% 90%) 50%, hsl(30 35% 93%) 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary/55 to-transparent section-divider-shimmer relative" />
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.10] blur-[100px]" />
      <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-accent/[0.07] blur-[80px]" />

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-title"
          >
            Ecosystem at a Glance
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative text-center rounded-2xl bg-card/60 border border-border/50 p-6 md:p-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"
              >
                <s.icon className="h-4 w-4 text-primary" />
              </motion.div>
              <AnimatedCounter target={s.value} prefix={s.prefix} suffix={s.suffix} />
              <span className="mt-2 block text-xs font-bold text-foreground tracking-wide">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default EcosystemStats;
