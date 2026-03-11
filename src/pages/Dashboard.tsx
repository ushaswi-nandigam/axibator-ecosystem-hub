import { motion } from "framer-motion";
import { Rocket, Calendar, FileText, ArrowRight, LogIn } from "lucide-react";
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
            <p className="mt-2 text-muted-foreground">Your ecosystem overview and progress tracker.</p>
          </div>

          {/* Login prompt */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-dashed border-border bg-card/50 p-16 text-center"
          >
            <LogIn className="mx-auto h-10 w-10 text-muted-foreground/40" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">Sign in to access your dashboard</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Track your program progress, upcoming events, and applied programs all in one place.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/login">
                <Button className="rounded-full">
                  Login <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="rounded-full">Create Account</Button>
              </Link>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <h3 className="font-display text-base font-bold text-foreground mb-4">Quick Actions</h3>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="sm"><Link to="/apply">Apply to a Program</Link></Button>
              <Button asChild variant="outline" size="sm"><Link to="/resources">Browse Resources</Link></Button>
              <Button asChild variant="outline" size="sm"><Link to="/programs">Explore Programs</Link></Button>
              <Button asChild variant="outline" size="sm"><Link to="/builder-nest">Visit Builder Nest</Link></Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
