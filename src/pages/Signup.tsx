import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import NetworkBackground from "@/components/NetworkBackground";
import { toast } from "sonner";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", stage: "" });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Account created! Welcome to Axibator.");
    navigate("/dashboard");
  };

  const inputClass = "mt-1 block w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none";

  return (
    <div className="relative min-h-screen">
      <NetworkBackground />
      <Navbar />
      <main className="relative z-10 flex min-h-screen items-center justify-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="panel w-full max-w-md rounded-xl p-8"
        >
          <h1 className="font-display text-2xl font-bold">Create your account</h1>
          <p className="mt-2 text-sm text-muted-foreground">Join the Axibator founder community.</p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <div>
              <label className="text-sm font-medium text-foreground">Name</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your full name" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Password</label>
              <input type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className={inputClass} placeholder="••••••••" />
            </div>
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
            <Button variant="hero" size="lg" type="submit" className="w-full">Create Account</Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-accent hover:underline">Sign in</Link>
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Signup;
