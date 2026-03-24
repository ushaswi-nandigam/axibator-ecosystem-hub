import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Logged in successfully!");
    navigate("/dashboard");
  };

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
              <LogIn size={24} className="text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-secondary-foreground">Welcome back</h1>
              <p className="text-sm text-secondary-foreground/50">Sign in to your Axibator account.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div><label className="text-sm font-bold text-secondary-foreground/80">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                className="mt-2 block w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm font-medium text-secondary-foreground placeholder:text-secondary-foreground/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="you@example.com" /></div>
            <div><label className="text-sm font-bold text-secondary-foreground/80">Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                className="mt-2 block w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm font-medium text-secondary-foreground placeholder:text-secondary-foreground/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="••••••••" /></div>
            <Button size="lg" type="submit" className="mt-2 w-full h-14 rounded-full bg-primary text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">Sign In</Button>
          </form>

          <p className="mt-8 text-center text-sm text-secondary-foreground/40">
            Don't have an account? <Link to="/signup" className="font-bold text-primary hover:underline">Sign up</Link>
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Login;
