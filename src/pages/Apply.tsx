import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { toast } from "sonner";

const programOptions = [
  "SparkLab", "Ignite", "LaunchPad", "IdeaForge", "BuildLab", "GrowthTrack",
  "Axibator X", "HerPreneur", "Rural Innovators", "Social Impact Accelerator",
  "TechXcelerate", "CreativeLab", "Global Catalyst", "Other",
];

const Apply = () => {
  const [form, setForm] = useState({ name: "", email: "", idea: "", industry: "", teamSize: "", stage: "", program: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted! We'll be in touch soon.");
    setForm({ name: "", email: "", idea: "", industry: "", teamSize: "", stage: "", program: "" });
  };

  const inputClass = "mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="hero-dark relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[100px]" />

        <div className="container relative text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label-light">Begin Your Expedition</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-extrabold text-secondary-foreground leading-[1.05] mt-4">
            <span className="text-primary">Apply</span> to Axibator
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-secondary-foreground/60 leading-relaxed">
            Tell us about yourself and your startup idea.
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding section-light">
        <div className="container max-w-2xl">
          <motion.form initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div><label className="text-sm font-bold text-foreground">Founder Name</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your full name" /></div>
            <div><label className="text-sm font-bold text-foreground">Email</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="you@example.com" /></div>
            <div><label className="text-sm font-bold text-foreground">Startup Idea</label>
              <textarea required rows={3} value={form.idea} onChange={(e) => setForm({ ...form, idea: e.target.value })} className={inputClass} placeholder="Describe your startup idea" /></div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div><label className="text-sm font-bold text-foreground">Industry</label>
                <input type="text" required value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} className={inputClass} placeholder="e.g. EdTech" /></div>
              <div><label className="text-sm font-bold text-foreground">Team Size</label>
                <input type="text" required value={form.teamSize} onChange={(e) => setForm({ ...form, teamSize: e.target.value })} className={inputClass} placeholder="e.g. 1-3" /></div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div><label className="text-sm font-bold text-foreground">Startup Stage</label>
                <select required value={form.stage} onChange={(e) => setForm({ ...form, stage: e.target.value })} className={inputClass}>
                  <option value="">Select stage</option><option>Idea</option><option>Prototype</option><option>MVP</option><option>Early Revenue</option><option>Growth</option>
                </select></div>
              <div><label className="text-sm font-bold text-foreground">Program</label>
                <select required value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })} className={inputClass}>
                  <option value="">Select program</option>{programOptions.map((p) => <option key={p}>{p}</option>)}
                </select></div>
            </div>
            <Button size="lg" type="submit" className="mt-4 w-full h-14 rounded-full bg-primary text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all">
              <Send size={18} className="mr-2" /> Submit Application
            </Button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Apply;
