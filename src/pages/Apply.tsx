import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const programOptions = [
  "SparkLab", "Ignite", "LaunchPad", "IdeaForge", "BuildLab", "GrowthTrack",
  "Axibator X", "HerPreneur", "Rural Innovators", "Social Impact Accelerator",
  "TechXcelerate", "CreativeLab", "Global Catalyst", "Other",
];

const Apply = () => {
  const [form, setForm] = useState({
    name: "", email: "", idea: "", industry: "", teamSize: "", stage: "", program: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted! We'll be in touch soon.");
    setForm({ name: "", email: "", idea: "", industry: "", teamSize: "", stage: "", program: "" });
  };

  const inputClass = "mt-1.5 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container max-w-2xl">
          <div className="section-header text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-semibold uppercase tracking-widest text-primary">
              Begin Your Expedition
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-3xl font-bold md:text-4xl">
              <span className="text-primary">Apply</span> to Axibator
            </motion.h1>
            <p className="mt-3 text-muted-foreground">Tell us about yourself and your startup idea.</p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10"
          >
            <div className="flex flex-col gap-5">
              <div>
                <label className="text-sm font-medium text-foreground">Founder Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your full name" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Startup Idea</label>
                <textarea required rows={3} value={form.idea} onChange={(e) => setForm({ ...form, idea: e.target.value })} className={inputClass} placeholder="Describe your startup idea in a few sentences" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-foreground">Industry</label>
                  <input type="text" required value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} className={inputClass} placeholder="e.g. EdTech" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Team Size</label>
                  <input type="text" required value={form.teamSize} onChange={(e) => setForm({ ...form, teamSize: e.target.value })} className={inputClass} placeholder="e.g. 1-3" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-foreground">Startup Stage</label>
                  <select required value={form.stage} onChange={(e) => setForm({ ...form, stage: e.target.value })} className={inputClass}>
                    <option value="">Select stage</option>
                    <option>Idea</option>
                    <option>Prototype</option>
                    <option>MVP</option>
                    <option>Early Revenue</option>
                    <option>Growth</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Program</label>
                  <select required value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })} className={inputClass}>
                    <option value="">Select program</option>
                    {programOptions.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
              </div>
              <Button size="lg" type="submit" variant="hero" className="mt-3 w-full">
                <Send size={16} className="mr-2" /> Submit Application
              </Button>
            </div>
          </motion.form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
