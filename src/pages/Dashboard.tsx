import { motion } from "framer-motion";
import { Rocket, ArrowRight, LogIn, FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const quickActions = [
  { label: "Apply to a Program", to: "/apply", icon: Rocket },
  { label: "Browse Resources", to: "/resources", icon: FileText },
  { label: "Explore Programs", to: "/programs", icon: Calendar },
  { label: "Visit Builder Nest", to: "/builder-nest", icon: ArrowRight },
];

const Dashboard = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 hero-dark">
          <div className="container relative max-w-3xl">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="section-title text-white">
              Founder <span className="text-primary">Dashboard</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="section-desc !text-white/50">
              Your ecosystem overview and progress tracker.
            </motion.p>
          </div>
        </section>

        <section className="section-padding section-light">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-dashed border-border bg-card p-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10"><LogIn className="h-8 w-8 text-primary/60" /></div>
              <h3 className="mt-6 text-xl font-bold text-foreground">Sign in to access your dashboard</h3>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">Track your program progress, events, and applications.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/login">
                  <Button size="lg" className="h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20">
                    Login <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg" className="h-14 rounded-full px-10 text-base font-semibold border">Create Account</Button>
                </Link>
              </div>
            </motion.div>

            <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-md">
              <h3 className="text-lg font-bold text-foreground mb-6">Quick Actions</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {quickActions.map((a, i) => (
                  <Link key={a.label} to={a.to}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-md">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20">
                        <a.icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-bold text-foreground">{a.label}</span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
