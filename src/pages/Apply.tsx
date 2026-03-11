import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import { toast } from "sonner";

const programOptions = [
  "Ignite", "LaunchPad", "BuildLab", "GrowthTrack", "TechXcelerate",
  "HerPreneur", "Rural Innovators", "Social Impact Accelerator", "Other",
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

  const inputClass = "mt-1 block w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none";

  return (
    <div className="relative min-h-screen">
      <NetworkBackground />
      <Navbar />
      <main className="relative z-10 pt-24">
        <div className="container max-w-2xl pb-24">
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold md:text-5xl">
            <span className="text-primary">Apply</span> to Axibator
          </motion.h1>
          <p className="mt-4 text-muted-foreground">Tell us about yourself and your startup idea.</p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-6"
          >
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
              <textarea required rows={4} value={form.idea} onChange={(e) => setForm({ ...form, idea: e.target.value })} className={inputClass} placeholder="Describe your startup idea in a few sentences" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-foreground">Industry</label>
                <input type="text" required value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} className={inputClass} placeholder="e.g. EdTech, HealthTech" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Team Size</label>
                <input type="text" required value={form.teamSize} onChange={(e) => setForm({ ...form, teamSize: e.target.value })} className={inputClass} placeholder="e.g. 1-3" />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
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
            <Button variant="hero" size="lg" type="submit" className="mt-4 w-full">Submit Application</Button>
          </motion.form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
