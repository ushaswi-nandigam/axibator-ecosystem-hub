import { motion } from "framer-motion";
import { Rocket, Calendar, FileText, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Startup Progress */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Rocket size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground">Startup Progress</h3>
              </div>
              <div className="mt-5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Current Stage</span>
                  <span className="font-semibold text-foreground">MVP</span>
                </div>
                <div className="mt-3 h-2.5 rounded-full bg-muted">
                  <div className="h-full w-3/5 rounded-full bg-primary transition-all duration-500" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">60% through BuildLab program</p>
              </div>
            </motion.div>

            {/* Applied Programs */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <FileText size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground">Applied Programs</h3>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <div className="flex items-center justify-between rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm">
                  <span className="font-medium text-foreground">BuildLab</span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">Active</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm">
                  <span className="font-medium text-foreground">GrowthTrack</span>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">Pending</span>
                </div>
              </div>
              <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                <Link to="/programs">Explore More Programs <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
              </Button>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Calendar size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground">Upcoming Events</h3>
              </div>
              <div className="mt-5 flex flex-col gap-2">
                {[{ name: "Founder's Playbook", date: "Thursday" }, { name: "Synergy Night", date: "Apr 12" }].map((e) => (
                  <div key={e.name} className="flex items-center justify-between rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm">
                    <span className="font-medium text-foreground">{e.name}</span>
                    <span className="text-xs text-muted-foreground">{e.date}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                <Link to="/events">View All Events <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
              </Button>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <h3 className="font-display text-base font-bold text-foreground mb-4">Quick Actions</h3>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="sm"><Link to="/apply">Apply to a Program</Link></Button>
              <Button asChild variant="outline" size="sm"><Link to="/resources">Browse Resources</Link></Button>
              <Button asChild variant="outline" size="sm"><Link to="/startups">Explore Startups</Link></Button>
              <Button asChild variant="outline" size="sm"><Link to="/partners">View Partners</Link></Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
