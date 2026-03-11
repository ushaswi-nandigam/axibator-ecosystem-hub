import { motion } from "framer-motion";
import { Building2, GraduationCap, Landmark, TrendingUp, Rocket, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { label: "Corporate Partners", icon: Building2, partners: ["AWS Activate", "Google for Startups", "Microsoft Founders Hub", "NASSCOM"] },
  { label: "Universities", icon: GraduationCap, partners: ["IIT Hyderabad", "IIIT Vizag", "GITAM University", "Andhra University"] },
  { label: "Government", icon: Landmark, partners: ["Startup India", "MSME Ministry", "T-Hub", "TASK Telangana"] },
  { label: "VCs & Investors", icon: TrendingUp, partners: ["100X.VC", "Antler India", "Village Capital", "Kalaari Capital"] },
  { label: "Startup Programs", icon: Rocket, partners: ["Y Combinator Community", "Techstars", "Google Launchpad", "AWS EdStart"] },
  { label: "Incubators", icon: Home, partners: ["T-Hub", "IIIT-H CIE", "IKP Knowledge Park", "AIC-CCMB"] },
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

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, ci) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: ci * 0.06 }}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground">{cat.label}</h3>
                  </div>
                  <div className="mt-5 flex flex-col gap-2">
                    {cat.partners.map((p) => (
                      <div
                        key={p}
                        className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3 transition-all duration-200 hover:border-primary/20 hover:bg-muted/60"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
                          {p[0]}
                        </div>
                        <span className="text-sm font-medium text-foreground">{p}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
