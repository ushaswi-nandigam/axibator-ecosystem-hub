import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";

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
    <div className="relative min-h-screen">
      <NetworkBackground />
      <Navbar />
      <main className="relative z-10 pt-24">
        <div className="container pb-24">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold md:text-5xl"
          >
            All <span className="text-primary">Programs</span>
          </motion.h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {programs.length} programs designed for every stage and type of founder.
          </p>

          <div className="mt-12 flex flex-col gap-2">
            {programs.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                className="panel cursor-pointer rounded-lg"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="flex items-center justify-between p-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                    <span className="font-display text-lg font-bold text-primary">{p.name}</span>
                    <span className="text-sm text-muted-foreground">— {p.subtitle}</span>
                  </div>
                  <ChevronRight
                    size={18}
                    className={`shrink-0 text-muted-foreground transition-transform duration-200 ${expanded === i ? "rotate-90" : ""}`}
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
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
