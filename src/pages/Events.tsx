import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const events = [
  { title: "Founder's Playbook", desc: "Weekly online execution sessions covering lean startup methodology, customer discovery, and growth tactics.", date: "Every Thursday", time: "7:00 PM IST", location: "Online", type: "upcoming", attendees: 120 },
  { title: "Ignite Cohort Kickoff", desc: "New cohort orientation, team formation, and goal setting for the 60-day sprint.", date: "March 30", time: "10:00 AM", location: "Hyderabad", type: "upcoming", attendees: 45 },
  { title: "Synergy Night", desc: "Hyderabad founder mixer bringing together founders, mentors, and investors for an evening of networking.", date: "April 12", time: "6:00 PM", location: "Hyderabad", type: "upcoming", attendees: 80 },
  { title: "Build Weekend", desc: "Vizag startup build sprint — 48 hours to prototype, test, and pitch.", date: "April 20–21", time: "9:00 AM", location: "Vizag", type: "upcoming", attendees: 60 },
  { title: "Demo Day 2024", desc: "Cohort 3 startups pitched to 50+ investors and partners.", date: "Feb 15", time: "2:00 PM", location: "Hyderabad", type: "past", attendees: 200 },
  { title: "Startup Safari Hyderabad", desc: "Ecosystem tour visiting T-Hub, IIIT-H CIE, and top Hyderabad startups.", date: "Jan 20", time: "10:00 AM", location: "Hyderabad", type: "past", attendees: 35 },
];

const Events = () => {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const filtered = events.filter((e) => e.type === tab);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="section-header text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-semibold uppercase tracking-widest text-primary">
              Voyages
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-3xl font-bold md:text-5xl">
              <span className="text-primary">Events</span> Calendar
            </motion.h1>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Connect, learn, and build together at our community voyages.</p>
          </div>

          {/* Tabs */}
          <div className="mb-8 flex justify-center">
            <div className="flex gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
              {(["upcoming", "past"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded-full px-6 py-2 text-sm font-medium capitalize transition-all duration-200 ${
                    tab === t
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {filtered.map((e, i) => (
              <motion.div
                key={e.title + e.date}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Calendar size={22} className="text-primary" />
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    <Users size={12} />
                    {e.attendees}+
                  </div>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{e.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={12} className="text-primary" /> {e.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} className="text-primary" /> {e.time}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={12} className="text-primary" /> {e.location}
                  </span>
                </div>

                {e.type === "upcoming" && (
                  <Button asChild size="sm" className="mt-5 w-full">
                    <Link to="/apply">Register for Event <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
                  </Button>
                )}
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
