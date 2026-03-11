import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";

const events = [
  { title: "Founder's Playbook", desc: "Weekly online execution sessions covering lean startup methodology, customer discovery, and growth tactics.", date: "Every Thursday", type: "upcoming" },
  { title: "Ignite Cohort Kickoff", desc: "New cohort orientation, team formation, and goal setting for the 60-day sprint.", date: "March 30th", type: "upcoming" },
  { title: "Synergy Night", desc: "Hyderabad founder mixer bringing together founders, mentors, and investors for an evening of networking.", date: "April 12th", type: "upcoming" },
  { title: "Build Weekend", desc: "Vizag startup build sprint — 48 hours to prototype, test, and pitch.", date: "April 20-21", type: "upcoming" },
  { title: "Demo Day 2024", desc: "Cohort 3 startups pitched to 50+ investors and partners.", date: "Feb 15th", type: "past" },
  { title: "Startup Safari Hyderabad", desc: "Ecosystem tour visiting T-Hub, IIIT-H CIE, and top Hyderabad startups.", date: "Jan 20th", type: "past" },
];

const Events = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const filtered = events.filter((e) => e.type === tab);

  return (
    <div className="relative min-h-screen">
      <NetworkBackground />
      <Navbar />
      <main className="relative z-10 pt-24">
        <div className="container pb-24">
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold md:text-5xl">
            <span className="text-primary">Events</span> Calendar
          </motion.h1>

          <div className="mt-8 flex gap-4">
            {(["upcoming", "past"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`tag capitalize ${tab === t ? "border-primary text-primary" : ""}`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-2">
            {filtered.map((e, i) => (
              <motion.div
                key={e.title + e.date}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="panel cursor-pointer rounded-lg"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-4">
                    <Calendar size={16} className="text-accent" />
                    <div>
                      <span className="font-display font-bold text-foreground">{e.title}</span>
                      <span className="ml-3 text-sm text-muted-foreground">{e.date}</span>
                    </div>
                  </div>
                  <ChevronRight size={18} className={`text-muted-foreground transition-transform ${expanded === i ? "rotate-90" : ""}`} />
                </div>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="border-t border-border/50 px-5 pb-5 pt-4">
                        <p className="text-muted-foreground">{e.desc}</p>
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

export default Events;
