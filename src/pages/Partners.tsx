import { motion } from "framer-motion";
import { Building2, GraduationCap, Landmark, TrendingUp, Rocket, Home, Handshake } from "lucide-react";
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
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 hero-dark">
          <div className="container relative text-center max-w-3xl mx-auto">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label-light !text-primary">Partners</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="section-title text-white">
              Ecosystem <span className="text-primary">Partners</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center !text-white/50">
              Organizations powering the Axibator ecosystem.
            </motion.p>
          </div>
        </section>

        <section className="section-padding section-light">
          <div className="container">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <motion.div key={cat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="group rounded-2xl bg-card border border-dashed border-border p-10 text-center transition-all duration-300 hover:border-primary/40 hover:border-solid hover:-translate-y-1 hover:shadow-xl">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-foreground">{cat.label}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Partners coming soon</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding section-grey">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-card p-10 text-center shadow-xl md:p-14">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6"><Handshake className="h-8 w-8 text-primary" /></div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Partner with Axibator</h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">Support grassroots founders and become part of India's most action-oriented startup ecosystem.</p>
              <a href="mailto:connect@axibator.com">
                <Button size="lg" className="mt-8 h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20">Get in Touch</Button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
