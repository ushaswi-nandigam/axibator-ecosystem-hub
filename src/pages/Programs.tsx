import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programs = [
  { name: "SparkLab", subtitle: "School Innovation Bootcamp", desc: "Introducing innovation thinking to high school students through hands-on bootcamps." },
  { name: "Ignite", subtitle: "Campus Pre-Incubation", desc: "From Idea to MVP & First Customers in 60 Days. Perfect for student founders just getting started." },
  { name: "LaunchPad", subtitle: "Student Startup Incubator", desc: "Structured incubation helping campus ventures move from MVP to early market entry." },
  { name: "IdeaForge", subtitle: "Early Founder Pre-Incubation", desc: "Validation-focused program for first-time founders exploring startup ideas." },
  { name: "BuildLab", subtitle: "Core Startup Incubation", desc: "Focused on product-market fit, customer pilots, and investor readiness." },
  { name: "GrowthTrack", subtitle: "Startup Acceleration", desc: "Revenue growth, scaling operations, and preparing for Series A funding." },
  { name: "Axibator X", subtitle: "Venture Acceleration", desc: "High-growth ventures ready for institutional funding and rapid market expansion." },
  { name: "HerPreneur", subtitle: "Women Entrepreneurship Accelerator", desc: "Empowering women founders with tailored mentorship, funding access, and community." },
  { name: "Rural Innovators", subtitle: "Grassroots Innovation", desc: "Agriculture entrepreneurship and grassroots innovation from rural India." },
  { name: "Social Impact Accelerator", subtitle: "Impact Ventures", desc: "Ventures solving social challenges with sustainable business models." },
  { name: "TechXcelerate", subtitle: "Deep Tech Accelerator", desc: "AI, robotics, EV, and emerging technology ventures pushing boundaries." },
  { name: "CreativeLab", subtitle: "Creative Industry Incubator", desc: "Design, media, gaming, and creative economy startups." },
  { name: "Global Catalyst", subtitle: "International Expansion", desc: "Helping Indian startups expand to global markets with cross-border support." },
  { name: "Corporate Innovation Catalyst", subtitle: "Enterprise Innovation", desc: "Partnering corporates with startups for mutual innovation and growth." },
  { name: "LaunchPilot Fellowship", subtitle: "Founder Fellowship", desc: "A fellowship for exceptional founders building in underserved markets." },
  { name: "Founder Expeditions", subtitle: "Immersive Learning", desc: "Travel-based learning experiences visiting global startup ecosystems." },
  { name: "Innovation Trails", subtitle: "Ecosystem Tours", desc: "Curated visits to innovation hubs, labs, and startup communities." },
  { name: "Tri Impact Residency", subtitle: "Impact Residency", desc: "Three-month residency program for social entrepreneurs." },
  { name: "Axibator Exchange", subtitle: "MSME Digital Transformation", desc: "Helping MSMEs adopt digital tools and modern business practices." },
  { name: "Axibator Insights Lab", subtitle: "Research & Insights", desc: "Data-driven insights on startup ecosystems, trends, and founder needs." },
];

const Programs = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          {/* Page header */}
          <div className="section-header">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold md:text-4xl"
            >
              All <span className="text-primary">Programs</span>
            </motion.h1>
            <p className="mt-2 text-muted-foreground">
              {programs.length} programs designed for every stage and type of founder.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {programs.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02 }}
                className="rounded-xl border border-border bg-card shadow-sm transition-all duration-200 hover:border-primary/30"
              >
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
                    <span className="font-display text-base font-bold text-foreground">{p.name}</span>
                    <span className="text-sm text-primary">{p.subtitle}</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-muted-foreground transition-transform duration-200 ${expanded === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border px-5 pb-5 pt-4">
                        <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                        <a href="/apply" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-primary">
                          Apply now <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
