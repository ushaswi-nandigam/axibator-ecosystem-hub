import { useState } from "react";
import { motion } from "framer-motion";
import { Search, BookOpen } from "lucide-react";

const categories = ["All", "Playbooks", "Pitch Decks", "Funding", "Legal", "Toolkit"];

const Resources = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <div className="min-h-screen bg-background">
      <section className="hero-dark relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[100px]" />

        <div className="container relative text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">Navigator's Kit</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-extrabold text-foreground leading-[1.05] mt-4">
            Founder <span className="text-primary">Resources</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            Templates, guides, and tools for every stage of your journey.
          </motion.p>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input type="text" placeholder="Search resources..." value={search} onChange={(e) => setSearch(e.target.value)}
                  className="h-12 w-full rounded-xl border border-border bg-background pl-12 pr-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button key={c} onClick={() => setCategory(c)}
                    className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-wide transition-all duration-300 ${
                      category === c ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                    }`}>{c}</button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center py-20">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
              <BookOpen className="h-8 w-8 text-primary/60" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Resources coming soon</h3>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto">Playbooks, templates, and founder toolkits will be available here.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;