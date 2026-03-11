import { motion } from "framer-motion";
import { Building2, GraduationCap, Landmark, TrendingUp, Rocket, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const getLogoUrl = (domain: string) => `https://logo.clearbit.com/${domain}`;

const categories = [
  { label: "Corporate Partners", icon: Building2, partners: [
    { name: "AWS Activate", domain: "aws.amazon.com" },
    { name: "Google for Startups", domain: "google.com" },
    { name: "Microsoft Founders Hub", domain: "microsoft.com" },
    { name: "NASSCOM", domain: "nasscom.in" },
  ]},
  { label: "Universities", icon: GraduationCap, partners: [
    { name: "IIT Hyderabad", domain: "iith.ac.in" },
    { name: "IIIT Vizag", domain: "iiitdm.ac.in" },
    { name: "GITAM University", domain: "gitam.edu" },
    { name: "Andhra University", domain: "andhrauniversity.edu.in" },
  ]},
  { label: "Government", icon: Landmark, partners: [
    { name: "Startup India", domain: "startupindia.gov.in" },
    { name: "MSME Ministry", domain: "msme.gov.in" },
    { name: "T-Hub", domain: "t-hub.co" },
    { name: "TASK Telangana", domain: "task.telangana.gov.in" },
  ]},
  { label: "VCs & Investors", icon: TrendingUp, partners: [
    { name: "100X.VC", domain: "100x.vc" },
    { name: "Antler India", domain: "antler.co" },
    { name: "Village Capital", domain: "vilcap.com" },
    { name: "Kalaari Capital", domain: "kalaari.com" },
  ]},
  { label: "Startup Programs", icon: Rocket, partners: [
    { name: "Y Combinator Community", domain: "ycombinator.com" },
    { name: "Techstars", domain: "techstars.com" },
    { name: "Google Launchpad", domain: "google.com" },
    { name: "AWS EdStart", domain: "aws.amazon.com" },
  ]},
  { label: "Incubators", icon: Home, partners: [
    { name: "T-Hub", domain: "t-hub.co" },
    { name: "IIIT-H CIE", domain: "cie.iiit.ac.in" },
    { name: "IKP Knowledge Park", domain: "ikpknowledgepark.com" },
    { name: "AIC-CCMB", domain: "ccmb.res.in" },
  ]},
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
                      <motion.div
                        key={p.name}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3 transition-all duration-200 hover:border-primary/20 hover:bg-muted/60"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white overflow-hidden">
                          <img
                            src={getLogoUrl(p.domain)}
                            alt={p.name}
                            className="h-5 w-5 object-contain"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.classList.add('bg-accent/10');
                                parent.classList.remove('bg-white');
                                parent.innerHTML = `<span class="text-xs font-bold text-accent">${p.name[0]}</span>`;
                              }
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium text-foreground">{p.name}</span>
                      </motion.div>
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
