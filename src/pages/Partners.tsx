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
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28" style={{
          background: 'linear-gradient(160deg, hsl(220 30% 96%) 0%, hsl(210 40% 92%) 40%, hsl(217 30% 94%) 100%)'
        }}>
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.08] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.08] blur-[100px]" />

          <div className="container relative text-center max-w-3xl mx-auto">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label">
              Allied Ports
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="section-title">
              Ecosystem <span className="text-primary">Partners</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center">
              Organizations powering the Axibator ecosystem.
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Partner Categories */}
        <section className="section-padding relative overflow-hidden" style={{
          background: 'linear-gradient(160deg, hsl(213 30% 94%) 0%, hsl(210 40% 90%) 50%, hsl(220 25% 93%) 100%)'
        }}>
          <div className="absolute top-[30%] right-0 w-[450px] h-[450px] rounded-full bg-secondary/[0.06] blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />

          <div className="container relative">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={cat.label}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="group rounded-2xl bg-card border-2 border-dashed border-border p-10 text-center transition-all duration-500 hover:border-primary/40 hover:border-solid hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 transition-all duration-300 group-hover:bg-primary/25 group-hover:shadow-lg group-hover:shadow-primary/15">
                      <Icon className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-foreground">{cat.label}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Partners coming soon</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* CTA */}
        <section className="section-padding relative overflow-hidden" style={{
          background: 'linear-gradient(160deg, hsl(24 30% 95%) 0%, hsl(30 35% 93%) 50%, hsl(220 25% 94%) 100%)'
        }}>
          <div className="absolute top-[20%] left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px]" />
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-3xl rounded-2xl border-2 border-primary/20 bg-card p-10 text-center shadow-2xl shadow-primary/10 md:p-14"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Partner with Axibator</h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground leading-relaxed">
                Support grassroots founders and become part of India's most action-oriented startup ecosystem.
              </p>
              <a href="mailto:connect@axibator.com">
                <Button size="lg" className="mt-8 group h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/35">
                  Get in Touch
                </Button>
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
