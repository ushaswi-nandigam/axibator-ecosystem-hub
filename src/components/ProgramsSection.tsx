import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const programs = [
  { name: "Ignite", subtitle: "Campus Pre-Incubation", desc: "From Idea to MVP & First Customers in 60 Days." },
  { name: "LaunchPad", subtitle: "Student Startup Incubator", desc: "Structured incubation helping campus ventures move from MVP to early market entry." },
  { name: "BuildLab", subtitle: "Core Startup Incubation", desc: "Focused on product-market fit, customer pilots, and investor readiness." },
  { name: "TechXcelerate", subtitle: "Deep Tech Accelerator", desc: "AI, robotics, EV, and emerging technology ventures." },
  { name: "HerPreneur", subtitle: "Women Entrepreneurship Accelerator", desc: "Empowering women founders with tailored support and funding access." },
  { name: "Rural Innovators", subtitle: "Grassroots Innovation", desc: "Grassroots innovation and agriculture entrepreneurship." },
];

const ProgramsSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold md:text-4xl"
        >
          Programs
        </motion.h2>
        <p className="mt-3 text-muted-foreground">Structured paths for every stage of your journey.</p>

        <div className="mt-12 flex flex-col gap-2">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="panel cursor-pointer rounded-lg"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <span className="font-display text-lg font-bold text-primary">{p.name}</span>
                  <span className="text-sm text-muted-foreground">— {p.subtitle}</span>
                </div>
                <ChevronRight
                  size={18}
                  className={`text-muted-foreground transition-transform duration-200 ${expanded === i ? "rotate-90" : ""}`}
                />
              </div>
              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border/50 px-5 pb-5 pt-4">
                      <p className="text-muted-foreground">{p.desc}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
