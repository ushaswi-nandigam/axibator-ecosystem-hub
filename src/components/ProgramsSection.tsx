import { motion } from "framer-motion";
import { ArrowRight, Compass, Hammer, Rocket, Cpu, Heart, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  { name: "Ignite", duration: "8 Weeks", desc: "Idea validation bootcamp for first-time founders. No pitch decks, just progress.", icon: Compass, color: "text-primary" },
  { name: "LaunchPad", duration: "12 Weeks", desc: "Our flagship build journey. Action-first, no-jargon learning for grassroots founders.", icon: Hammer, color: "text-accent" },
  { name: "BuildLab", duration: "10 Weeks", desc: "Product-market fit exploration with customer discovery and launch preparation.", icon: Rocket, color: "text-primary" },
  { name: "TechXcelerate", duration: "12 Weeks", desc: "AI, robotics, EV, and emerging technology ventures pushing boundaries.", icon: Cpu, color: "text-accent" },
  { name: "HerPreneur", duration: "10 Weeks", desc: "Empowering women founders with tailored mentorship and funding access.", icon: Heart, color: "text-primary" },
  { name: "Rural Innovators", duration: "4-8 Weeks", desc: "On-ground rural residencies for founders solving real problems in Tier 2/3 cities.", icon: Sprout, color: "text-accent" },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding bg-ecosystem-bg">
      <div className="container">
        <div className="section-header text-center">
          <p className="section-label">Programs</p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Key Offerings
          </motion.h2>
          <p className="section-desc mx-auto text-center">
            Action-first programs designed for grassroots founders at every stage.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="premium-card group"
            >
              <div className="flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-muted transition-all duration-300 group-hover:bg-primary/10`}>
                  <p.icon className={`h-5 w-5 ${p.color} transition-transform duration-300 group-hover:scale-110`} />
                </div>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">{p.duration}</span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

              <Link
                to="/programs"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Learn More
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
