import { useState } from "react";
import { motion } from "framer-motion";
import { Search, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = ["All", "Playbooks", "Pitch Decks", "Funding", "Legal", "Toolkit"];

const Resources = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 hero-dark">
          <div className="container relative text-center max-w-3xl mx-auto">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label-light !text-primary">Resources</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="section-title text-white">
              Founder <span className="text-primary">Resources</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center !text-white/50">
              Templates, guides, and tools for every stage of your journey.
            </motion.p>
          </div>
        </section>

        <section className="section-padding section-light">
          <div className="container">
            <div className="mb-12 rounded-2xl border border-border bg-card p-8 shadow-md">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input type="text" placeholder="Search resources..." value={search} onChange={(e) => setSearch(e.target.value)}
                    className="h-12 w-full rounded-xl border border-border bg-background pl-12 pr-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button key={c} onClick={() => setCategory(c)}
                      className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-wide transition-all ${
                        category === c ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-muted-foreground hover:text-foreground hover:bg-primary/10"
                      }`}>{c}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-border bg-card p-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10"><BookOpen className="h-8 w-8 text-primary/60" /></div>
              <h3 className="mt-6 text-xl font-bold text-foreground">Resources coming soon</h3>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">Playbooks, templates, and founder toolkits will be available here.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
