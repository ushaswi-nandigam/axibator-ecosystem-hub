import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { toast } from "sonner";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", stage: "" });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Account created! Welcome to Axibator.");
    navigate("/dashboard");
  };

  const fieldClass = "mt-2 block w-full rounded-xl border border-border bg-muted/50 px-4 py-3.5 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <div className="min-h-screen bg-background">
      <main className="flex min-h-screen items-center justify-center px-4 pt-16 hero-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[100px]" />

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15">
              <UserPlus size={24} className="text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Create your account</h1>
              <p className="text-sm text-muted-foreground">Join the Axibator founder community.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div><label className="text-sm font-bold text-foreground/80">Name</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={fieldClass} placeholder="Your full name" /></div>
            <div><label className="text-sm font-bold text-foreground/80">Email</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={fieldClass} placeholder="you@example.com" /></div>
            <div><label className="text-sm font-bold text-foreground/80">Password</label>
              <input type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className={fieldClass} placeholder="••••••••" /></div>
            <div><label className="text-sm font-bold text-foreground/80">Startup Stage</label>
              <select required value={form.stage} onChange={(e) => setForm({ ...form, stage: e.target.value })} className={fieldClass}>
                <option value="">Select stage</option><option>Idea</option><option>Prototype</option><option>MVP</option><option>Early Revenue</option><option>Growth</option>
              </select></div>
            <Button size="lg" type="submit" className="mt-2 w-full h-14 rounded-full bg-primary text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">Create Account</Button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="font-bold text-primary hover:underline">Sign in</Link>
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Signup;