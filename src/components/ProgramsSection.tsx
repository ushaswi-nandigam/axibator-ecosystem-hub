import { motion } from "framer-motion";
import { ArrowRight, Compass, Hammer, Rocket, Cpu, Heart, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  { name: "Ignite", duration: "8 Weeks", desc: "Idea validation bootcamp for first-time founders. No pitch decks, just progress.", icon: Compass },
  { name: "LaunchPad", duration: "12 Weeks", desc: "Our flagship build journey. Action-first, no-jargon learning for grassroots founders.", icon: Hammer },
  { name: "BuildLab", duration: "10 Weeks", desc: "Product-market fit exploration with customer discovery and launch preparation.", icon: Rocket },
  { name: "TechXcelerate", duration: "12 Weeks", desc: "AI, robotics, EV, and emerging technology ventures pushing boundaries.", icon: Cpu },
  { name: "HerPreneur", duration: "10 Weeks", desc: "Empowering women founders with tailored mentorship and funding access.", icon: Heart },
  { name: "Rural Innovators", duration: "4-8 Weeks", desc: "On-ground rural residencies for founders solving real problems in Tier 2/3 cities.", icon: Sprout },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding bg-ecosystem-bg">
      <div className="container">
        <div className="section-header text-center max-w-3xl mx-auto">
          <span className="section-label">Programs</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-2xl bg-card p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted transition-all duration-300 group-hover:bg-primary/10">
                  <p.icon className="h-6 w-6 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                </div>
                <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">{p.duration}</span>
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
