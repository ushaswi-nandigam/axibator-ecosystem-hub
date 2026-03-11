import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users, MapPin, Rocket, GraduationCap } from "lucide-react";

const goals = [
  {
    icon: Rocket,
    label: "MVPs Launched",
    current: 0,
    target: 25,
    unit: "startups",
    color: "hsl(var(--primary))",
  },
  {
    icon: Users,
    label: "Founders in Community",
    current: 0,
    target: 500,
    unit: "founders",
    color: "hsl(var(--accent))",
  },
  {
    icon: MapPin,
    label: "Rural Labs Activated",
    current: 0,
    target: 10,
    unit: "labs",
    color: "hsl(var(--secondary-foreground))",
  },
  {
    icon: GraduationCap,
    label: "Campus Chapters",
    current: 0,
    target: 15,
    unit: "campuses",
    color: "hsl(var(--primary))",
  },
];

const AnimatedProgress = ({
  target,
  max,
  color,
  inView,
}: {
  target: number;
  max: number;
  color: string;
  inView: boolean;
}) => {
  const [width, setWidth] = useState(0);
  const percentage = Math.round((target / max) * 100);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(percentage), 200);
      return () => clearTimeout(timer);
    }
  }, [inView, percentage]);

  return (
    <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-muted">
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: "0%" }}
        animate={{ width: inView ? `${percentage}%` : "0%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />
    </div>
  );
};

const NorthStarGoals = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container max-w-4xl">
        <div className="section-header text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10"
          >
            <Target className="h-5 w-5 text-primary" />
          </motion.div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Year One Targets
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 text-3xl font-bold md:text-4xl"
          >
            Our North Star Goals
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-lg text-muted-foreground"
          >
            Transparent milestones we're building toward — together with our
            founders and community.
          </motion.p>
        </div>

        <div className="space-y-6">
          {goals.map((goal, i) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={goal.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: i * 0.12,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${goal.color}15` }}
                    >
                      <Icon
                        className="h-4.5 w-4.5"
                        style={{ color: goal.color }}
                      />
                    </div>
                    <span className="font-semibold text-foreground">
                      {goal.label}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {goal.current}{" "}
                    <span className="text-muted-foreground/60">/ {goal.target}</span>{" "}
                    {goal.unit}
                  </span>
                </div>
                <AnimatedProgress
                  target={goal.current}
                  max={goal.target}
                  color={goal.color}
                  inView={isInView}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-sm text-muted-foreground italic"
        >
          Progress updates monthly. We ship in public.
        </motion.p>
      </div>
    </section>
  );
};

export default NorthStarGoals;
