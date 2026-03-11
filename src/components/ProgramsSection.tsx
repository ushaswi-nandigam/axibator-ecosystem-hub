import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  { name: "Ignite", subtitle: "Campus Pre-Incubation", desc: "From Idea to MVP & First Customers in 60 Days." },
  { name: "LaunchPad", subtitle: "Student Startup Incubator", desc: "Structured incubation helping campus ventures move from MVP to early market entry." },
  { name: "BuildLab", subtitle: "Core Startup Incubation", desc: "Focused on product-market fit, customer pilots, and investor readiness." },
  { name: "TechXcelerate", subtitle: "Deep Tech Accelerator", desc: "AI, robotics, EV, and emerging technology ventures." },
  { name: "HerPreneur", subtitle: "Women Entrepreneurship Accelerator", desc: "Empowering women founders with tailored support and funding access." },
  { name: "Rural Innovators", subtitle: "Grassroots Innovation", desc: "Grassroots innovation and agriculture entrepreneurship." },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding border-t border-border bg-ecosystem-bg">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold md:text-4xl"
          >
            Programs
          </motion.h2>
          <p className="mt-2 text-muted-foreground">Structured paths for every stage of your journey.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md"
            >
              <h3 className="font-display text-lg font-bold text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm text-primary">{p.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <Link
                to="/programs"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-primary"
              >
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
