import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Events = () => {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 hero-dark">
          <div className="container relative text-center max-w-3xl mx-auto">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label-light !text-primary">Events</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="section-title text-white">
              <span className="text-primary">Events</span> Calendar
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center !text-white/50">
              Connect, learn, and build together at our community events.
            </motion.p>
          </div>
        </section>

        <section className="section-padding section-light">
          <div className="container">
            <div className="mb-12 flex justify-center">
              <div className="flex gap-1 rounded-full border border-border bg-card p-1.5 shadow-md">
                {(["upcoming", "past"] as const).map((t) => (
                  <button key={t} onClick={() => setTab(t)}
                    className={`rounded-full px-8 py-2.5 text-sm font-bold capitalize transition-all duration-300 ${
                      tab === t ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
                    }`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="rounded-2xl border border-dashed border-border bg-card p-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Calendar className="h-8 w-8 text-primary/60" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">No {tab} events yet</h3>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                {tab === "upcoming" ? "Events will appear here once scheduled." : "Past events will be archived here."}
              </p>
              <Link to="/apply">
                <Button size="lg" className="mt-8 h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20">
                  Get Notified <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
