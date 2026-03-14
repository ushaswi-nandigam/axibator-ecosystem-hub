import { motion } from "framer-motion";
import { ArrowRight, Compass, Hammer, Rocket, Cpu, Heart, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  { name: "Ignite", subtitle: "Campus Pre-Incubation", desc: "Idea validation bootcamp for first-time founders.", icon: Compass },
  { name: "LaunchPad", subtitle: "Student Startup Incubator", desc: "Action-first build journey for grassroots founders.", icon: Hammer },
  { name: "BuildLab", subtitle: "Core Startup Incubation", desc: "Product-market fit with customer discovery.", icon: Rocket },
  { name: "TechXcelerate", subtitle: "Deep Tech Accelerator", desc: "AI, robotics, and emerging tech ventures.", icon: Cpu },
  { name: "HerPreneur", subtitle: "Women Entrepreneurship", desc: "Empowering women founders with mentorship.", icon: Heart },
  { name: "Rural Innovators", subtitle: "Grassroots Innovation", desc: "On-ground residencies solving Tier 2/3 problems.", icon: Sprout },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding section-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label">
            Programs
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }} className="section-title">
            Where Ideas Become Startups
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center">
            Action-first programs designed for grassroots founders at every stage of the journey.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                <p.icon className="h-5 w-5 text-primary" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{p.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

              <Link
                to="/programs"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all duration-300 hover:gap-3"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
