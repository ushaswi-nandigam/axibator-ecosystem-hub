import { motion } from "framer-motion";
import { Rocket, Calendar, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen">
      <NetworkBackground />
      <Navbar />
      <main className="relative z-10 pt-24">
        <div className="container pb-24">
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold">
            Founder <span className="text-primary">Dashboard</span>
          </motion.h1>
          <p className="mt-3 text-muted-foreground">Welcome back, founder. Here's your ecosystem overview.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="panel rounded-lg p-6">
              <div className="flex items-center gap-3">
                <Rocket size={20} className="text-primary" />
                <h3 className="font-display text-lg font-bold">Startup Progress</h3>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Stage</span>
                  <span className="text-foreground">MVP</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-muted">
                  <div className="h-full w-3/5 rounded-full bg-primary" />
                </div>
                <p className="mt-3 text-xs text-muted-foreground">60% through BuildLab program</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="panel rounded-lg p-6">
              <div className="flex items-center gap-3">
                <FileText size={20} className="text-accent" />
                <h3 className="font-display text-lg font-bold">Applied Programs</h3>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                {["BuildLab — Active", "GrowthTrack — Pending"].map((p) => (
                  <div key={p} className="flex items-center justify-between rounded border border-border/50 px-3 py-2 text-sm">
                    <span className="text-muted-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="panel rounded-lg p-6">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-accent" />
                <h3 className="font-display text-lg font-bold">Upcoming Events</h3>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                {[{ name: "Founder's Playbook", date: "Thursday" }, { name: "Synergy Night", date: "Apr 12" }].map((e) => (
                  <div key={e.name} className="flex items-center justify-between rounded border border-border/50 px-3 py-2 text-sm">
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
