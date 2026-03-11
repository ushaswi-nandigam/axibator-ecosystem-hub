import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const startups = [
  { name: "AgriSense", founder: "Priya Sharma", industry: "AgriTech", program: "BuildLab" },
  { name: "EduFlow", founder: "Ravi Kumar", industry: "EdTech", program: "LaunchPad" },
  { name: "MediTrack", founder: "Ananya Reddy", industry: "HealthTech", program: "TechXcelerate" },
  { name: "GreenGrid", founder: "Arjun Patel", industry: "CleanTech", program: "Ignite" },
  { name: "FinLite", founder: "Sneha Gupta", industry: "FinTech", program: "GrowthTrack" },
  { name: "LogiMove", founder: "Vikram Singh", industry: "Logistics", program: "BuildLab" },
];

const StartupsSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex items-end justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold md:text-4xl"
            >
              Startups Ecosystem
            </motion.h2>
            <p className="mt-3 text-muted-foreground">Ventures building the future.</p>
          </div>
          <Link to="/startups">
            <Button variant="ecosystem" size="sm">Explore All Startups</Button>
          </Link>
        </div>

        <div className="horizontal-scroll mt-10">
          {startups.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="panel group w-72 rounded-lg p-6"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-lg font-bold text-foreground">{s.name}</h3>
                <ExternalLink size={14} className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{s.founder}</p>
              <div className="mt-4 flex gap-2">
                <span className="tag">{s.industry}</span>
                <span className="tag">{s.program}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupsSection;
