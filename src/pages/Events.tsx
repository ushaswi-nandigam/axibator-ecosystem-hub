import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Events = () => {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

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

          {/* Empty state */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-dashed border-border bg-card/50 p-16 text-center"
          >
            <Calendar className="mx-auto h-10 w-10 text-muted-foreground/40" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">No {tab} events yet</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {tab === "upcoming"
                ? "Events will appear here once scheduled. Stay tuned!"
                : "Past events will be archived here."}
            </p>
            <Link to="/apply">
              <Button size="sm" className="mt-5 rounded-full">
                Get Notified <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
