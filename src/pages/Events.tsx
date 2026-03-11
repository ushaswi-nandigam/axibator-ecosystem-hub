import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const events = [
  { title: "Founder's Playbook", desc: "Weekly online execution sessions covering lean startup methodology, customer discovery, and growth tactics.", date: "Every Thursday", location: "Online", type: "upcoming" },
  { title: "Ignite Cohort Kickoff", desc: "New cohort orientation, team formation, and goal setting for the 60-day sprint.", date: "March 30", location: "Hyderabad", type: "upcoming" },
  { title: "Synergy Night", desc: "Hyderabad founder mixer bringing together founders, mentors, and investors for an evening of networking.", date: "April 12", location: "Hyderabad", type: "upcoming" },
  { title: "Build Weekend", desc: "Vizag startup build sprint — 48 hours to prototype, test, and pitch.", date: "April 20–21", location: "Vizag", type: "upcoming" },
  { title: "Demo Day 2024", desc: "Cohort 3 startups pitched to 50+ investors and partners.", date: "Feb 15", location: "Hyderabad", type: "past" },
  { title: "Startup Safari Hyderabad", desc: "Ecosystem tour visiting T-Hub, IIIT-H CIE, and top Hyderabad startups.", date: "Jan 20", location: "Hyderabad", type: "past" },
];

const Events = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const filtered = events.filter((e) => e.type === tab);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="section-header">
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold md:text-4xl">
              <span className="text-primary">Events</span> Calendar
            </motion.h1>
            <p className="mt-2 text-muted-foreground">Connect, learn, and build together.</p>
          </div>

          {/* Tabs */}
          <div className="mb-6 flex gap-1 rounded-lg border border-border bg-card p-1 shadow-sm w-fit">
            {(["upcoming", "past"] as const).map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setExpanded(null); }}
                className={`rounded-md px-4 py-2 text-sm font-medium capitalize transition-colors ${
                  tab === t
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {filtered.map((e, i) => (
              <motion.div
                key={e.title + e.date}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="rounded-xl border border-border bg-card shadow-sm transition-all duration-200 hover:border-primary/30"
              >
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center rounded-lg bg-muted px-3 py-2 text-center">
                      <Calendar size={14} className="text-primary" />
                    </div>
                    <div>
                      <span className="font-display text-base font-bold text-foreground">{e.title}</span>
                      <div className="mt-0.5 flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{e.date}</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={10} /> {e.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown size={16} className={`shrink-0 text-muted-foreground transition-transform duration-200 ${expanded === i ? "rotate-180" : ""}`} />
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
                        <p className="text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
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
