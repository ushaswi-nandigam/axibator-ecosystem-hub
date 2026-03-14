import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", stage: "" });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Account created! Welcome to Axibator.");
    navigate("/dashboard");
  };

  const fieldClass = "mt-2 block w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm font-medium text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-16 hero-dark">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-8 shadow-2xl md:p-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 shadow-lg shadow-primary/15"><UserPlus size={24} className="text-primary" /></div>
            <h1 className="text-2xl font-bold text-white">Create your account</h1>
          </div>
          <p className="text-sm text-white/50">Join the Axibator founder community.</p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
            <div><label className="text-sm font-bold text-white/80">Name</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={fieldClass} placeholder="Your full name" /></div>
            <div><label className="text-sm font-bold text-white/80">Email</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={fieldClass} placeholder="you@example.com" /></div>
            <div><label className="text-sm font-bold text-white/80">Password</label>
              <input type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className={fieldClass} placeholder="••••••••" /></div>
            <div><label className="text-sm font-bold text-white/80">Startup Stage</label>
              <select required value={form.stage} onChange={(e) => setForm({ ...form, stage: e.target.value })} className={fieldClass}>
                <option value="">Select stage</option><option>Idea</option><option>Prototype</option><option>MVP</option><option>Early Revenue</option><option>Growth</option>
              </select></div>
            <Button size="lg" type="submit" className="mt-2 w-full h-14 rounded-full bg-primary text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20">Create Account</Button>
          </form>

          <p className="mt-8 text-center text-sm text-white/40">
            Already have an account? <Link to="/login" className="font-bold text-primary hover:underline">Sign in</Link>
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
