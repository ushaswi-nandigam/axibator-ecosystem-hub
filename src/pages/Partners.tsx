import { motion } from "framer-motion";
import { Building2, GraduationCap, Landmark, TrendingUp, Rocket, Home, Handshake, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const categories = [
  { label: "Corporate Partners", icon: Building2, desc: "Industry leaders collaborating with our startups." },
  { label: "Universities", icon: GraduationCap, desc: "Academic institutions fostering innovation." },
  { label: "Government", icon: Landmark, desc: "Public sector initiatives supporting founders." },
  { label: "VCs & Investors", icon: TrendingUp, desc: "Capital partners fueling growth." },
  { label: "Startup Programs", icon: Rocket, desc: "Partner accelerators and incubators." },
  { label: "Incubators", icon: Home, desc: "Co-incubation and shared resources." },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="hero-dark relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[100px]" />

        <div className="container relative text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label-light">Allied Ports</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-extrabold text-secondary-foreground leading-[1.05] mt-4">
            Ecosystem <span className="text-primary">Partners</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-secondary-foreground/60 leading-relaxed">
            Organizations powering the Axibator ecosystem.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding section-light">
        <div className="container">
          <div className="grid gap-y-10 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div key={cat.label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} className="group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-5 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{cat.label}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{cat.desc}</p>
                  <p className="mt-3 text-xs font-semibold text-primary/60">Partners coming soon</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-dark py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 mb-6">
              <Handshake className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground">
              Partner with <span className="text-primary">Axibator</span>
            </h2>
            <p className="mt-4 text-secondary-foreground/50 text-lg max-w-lg mx-auto">
              Support grassroots founders and become part of India's most action-oriented startup ecosystem.
            </p>
            <a href="mailto:connect@axibator.com">
              <Button size="lg" className="mt-8 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/25">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
