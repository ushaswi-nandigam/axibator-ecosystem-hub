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
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(hsl(var(--accent)) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px]" />
          <div className="container relative text-center max-w-3xl mx-auto">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label-light">Voyages</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="section-title text-white">
              <span className="text-accent">Events</span> Calendar
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center !text-white/50">
              Connect, learn, and build together at our community voyages.
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <section className="section-padding relative overflow-hidden section-light">
          <div className="absolute top-[30%] right-0 w-[450px] h-[450px] rounded-full bg-primary/[0.04] blur-[100px]" />
          <div className="container relative">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 flex justify-center">
              <div className="flex gap-1 rounded-full border border-border bg-card p-1.5 shadow-lg">
                {(["upcoming", "past"] as const).map((t) => (
                  <button key={t} onClick={() => setTab(t)}
                    className={`rounded-full px-8 py-2.5 text-sm font-bold capitalize transition-all duration-300 ${
                      tab === t ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20" : "text-muted-foreground hover:text-foreground"
                    }`}>
                    {t}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-dashed border-border bg-card/50 p-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <Calendar className="h-8 w-8 text-accent/60" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">No {tab} events yet</h3>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                {tab === "upcoming" ? "Events will appear here once scheduled. Stay tuned!" : "Past events will be archived here."}
              </p>
              <Link to="/apply">
                <Button size="lg" className="mt-8 group h-14 rounded-full bg-accent px-10 text-base font-bold text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/20">
                  Get Notified <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
