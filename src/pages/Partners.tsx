import { motion } from "framer-motion";
import { Building2, GraduationCap, Landmark, TrendingUp, Rocket, Home, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { label: "Corporate Partners", icon: Building2 },
  { label: "Universities", icon: GraduationCap },
  { label: "Government", icon: Landmark },
  { label: "VCs & Investors", icon: TrendingUp },
  { label: "Startup Programs", icon: Rocket },
  { label: "Incubators", icon: Home },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="section-header text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-semibold uppercase tracking-widest text-primary">
              Allied Ports
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-3xl font-bold md:text-5xl">
              Ecosystem <span className="text-primary">Partners</span>
            </motion.h1>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Organizations powering the Axibator ecosystem.</p>
          </div>

          {/* Partner categories as placeholder cards */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-foreground">{cat.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Partners coming soon</p>
                </motion.div>
              );
            })}
          </div>

          {/* Become a partner CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-border bg-card p-8 text-center shadow-sm md:p-12"
          >
            <Handshake className="mx-auto h-10 w-10 text-primary/60" />
            <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Partner with Axibator</h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Support grassroots founders and become part of India's most action-oriented startup ecosystem.
            </p>
            <a href="mailto:connect@axibator.com">
              <Button className="mt-6 rounded-full">Get in Touch</Button>
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
