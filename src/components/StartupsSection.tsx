import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const founders = [
  { name: "Priya Nayak", location: "Vijayawada, AP", desc: "Agricultural marketplace connecting farmers directly to urban consumers.", status: "Building MVP", stat: "150+ farmers onboarded" },
  { name: "Rakesh Gupta", location: "Warangal, Telangana", desc: "Low-cost water purification system for village communities.", status: "Pilot Testing", stat: "5 villages served" },
  { name: "Anjali Reddy", location: "Guntur, AP", desc: "Digital literacy platform for rural women entrepreneurs using local language content.", status: "User Testing", stat: "200+ women trained" },
  { name: "Arjun Patel", location: "Vizag, AP", desc: "Decentralized solar energy microgrids for rural India.", status: "Early Stage", stat: "3 pilots active" },
];

const StartupsSection = () => {
  return (
    <section className="section-padding bg-ecosystem-bg">
      <div className="container">
        <div className="section-header flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Discoveries</p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-3 text-3xl font-bold md:text-4xl"
            >
              Featured Founders
            </motion.h2>
            <p className="mt-3 text-muted-foreground">Meet the grassroots founders building the future of India.</p>
          </div>
          <Link to="/startups">
            <Button variant="outline" size="sm" className="rounded-full">View All Founders</Button>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold text-foreground">{f.name}</h3>
                  <p className="text-xs text-muted-foreground">{f.location}</p>
                </div>
                <ExternalLink size={14} className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">{f.status}</span>
                <span className="text-xs font-medium text-primary">{f.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupsSection;
