import { motion } from "framer-motion";
import { Rocket, Calendar, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="section-header">
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold md:text-4xl">
              Founder <span className="text-primary">Dashboard</span>
            </motion.h1>
            <p className="mt-2 text-muted-foreground">Welcome back, founder. Here's your ecosystem overview.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <Rocket size={18} className="text-primary" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground">Startup Progress</h3>
              </div>
              <div className="mt-5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Stage</span>
                  <span className="font-medium text-foreground">MVP</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-muted">
                  <div className="h-full w-3/5 rounded-full bg-primary" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">60% through BuildLab program</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                  <FileText size={18} className="text-accent" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground">Applied Programs</h3>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                {["BuildLab — Active", "GrowthTrack — Pending"].map((p) => (
                  <div key={p} className="rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm text-foreground">
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                  <Calendar size={18} className="text-accent" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground">Upcoming Events</h3>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                {[{ name: "Founder's Playbook", date: "Thursday" }, { name: "Synergy Night", date: "Apr 12" }].map((e) => (
                  <div key={e.name} className="flex items-center justify-between rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm">
                    <span className="text-foreground">{e.name}</span>
                    <span className="text-xs text-muted-foreground">{e.date}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
