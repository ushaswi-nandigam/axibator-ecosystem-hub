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
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `radial-gradient(hsl(var(--accent)) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
          <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px]" />
          <div className="container relative max-w-3xl">
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="section-title text-white">
              Founder <span className="text-accent">Dashboard</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-desc !text-white/50">
              Your ecosystem overview and progress tracker.
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        <section className="section-padding relative overflow-hidden section-light">
          <div className="absolute top-[30%] right-0 w-[450px] h-[450px] rounded-full bg-primary/[0.04] blur-[100px]" />
          <div className="container relative">
            <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-dashed border-border bg-card/50 p-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10"><LogIn className="h-8 w-8 text-accent/60" /></div>
              <h3 className="mt-6 text-xl font-bold text-foreground">Sign in to access your dashboard</h3>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">Track your program progress, upcoming events, and applied programs all in one place.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/login">
                  <Button size="lg" className="group h-14 rounded-full bg-accent px-10 text-base font-bold text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/20">
                    Login <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg" className="h-14 rounded-full px-10 text-base font-semibold border hover:border-accent/30">Create Account</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-xl">
              <h3 className="text-lg font-bold text-foreground mb-6">Quick Actions</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {quickActions.map((a, i) => (
                  <Link key={a.label} to={a.to}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-all group-hover:bg-accent/20">
                        <a.icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-bold text-foreground">{a.label}</span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
