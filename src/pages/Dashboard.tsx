import { motion } from "framer-motion";
import { Rocket, ArrowRight, GraduationCap, Shield, FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const quickActions = [
  { label: "Apply to a Program", to: "/apply", icon: Rocket },
  { label: "Browse Resources", to: "/resources", icon: FileText },
  { label: "Explore Programs", to: "/programs", icon: Calendar },
  { label: "Visit Builder Nest", to: "/builder-nest", icon: ArrowRight },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="hero-dark relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[100px]" />

        <div className="container relative text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-5xl md:text-7xl font-extrabold text-foreground leading-[1.05]">
            Choose Your <span className="text-primary">Dashboard</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            Access your personalized ecosystem hub.
          </motion.p>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
            <Link to="/student-dashboard">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="group rounded-2xl border border-border/60 bg-background p-8 hover:border-primary/40 transition-all hover:-translate-y-1 cursor-pointer text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Student Dashboard</h3>
                <p className="text-sm text-muted-foreground">Track your program progress, events, resources, and profile.</p>
                <Button className="mt-6 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/25">
                  Open <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </Link>

            <Link to="/admin-dashboard">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="group rounded-2xl border border-border/60 bg-background p-8 hover:border-primary/40 transition-all hover:-translate-y-1 cursor-pointer text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Admin Dashboard</h3>
                <p className="text-sm text-muted-foreground">Manage users, applications, analytics, and content.</p>
                <Button className="mt-6 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/25">
                  Open <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-lg font-bold text-foreground mb-6">Quick Actions</h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {quickActions.map((a, i) => (
                <Link key={a.label} to={a.to}>
                  <motion.div custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4 transition-colors group-hover:bg-primary/20">
                      <a.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{a.label}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;