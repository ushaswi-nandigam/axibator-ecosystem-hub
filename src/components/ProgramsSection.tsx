import { motion } from "framer-motion";
import { ArrowRight, Compass, Hammer, Rocket, Cpu, Heart, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  { name: "Ignite", duration: "8 Weeks", desc: "Idea validation bootcamp for first-time founders.", icon: Compass },
  { name: "LaunchPad", duration: "12 Weeks", desc: "Action-first build journey for grassroots founders.", icon: Hammer },
  { name: "BuildLab", duration: "10 Weeks", desc: "Product-market fit with customer discovery.", icon: Rocket },
  { name: "TechXcelerate", duration: "12 Weeks", desc: "AI, robotics, and emerging tech ventures.", icon: Cpu },
  { name: "HerPreneur", duration: "10 Weeks", desc: "Empowering women founders with mentorship.", icon: Heart },
  { name: "Rural Innovators", duration: "4-8 Weeks", desc: "On-ground residencies solving Tier 2/3 problems.", icon: Sprout },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding section-accent-soft relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-label">The Builder Zone</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Where Ideas Become Startups
          </motion.h2>
          <p className="section-desc mx-auto text-center">
            Action-first programs designed for grassroots founders at every stage of the journey.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-2xl bg-card border border-border/60 p-8 md:p-10 transition-all duration-500 hover:border-primary/20 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                  <p.icon className="h-5 w-5 text-primary/70 transition-all duration-300 group-hover:text-primary" />
                </div>
                <span className="text-[10px] font-semibold text-muted-foreground tracking-[0.2em] uppercase">{p.duration}</span>
              </div>

              <h3 className="mt-7 text-2xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

              <Link
                to="/programs"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
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
