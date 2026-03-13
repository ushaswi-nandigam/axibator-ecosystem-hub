import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

  const inputClass = "mt-2 block w-full rounded-xl border-2 border-border bg-background px-4 py-3.5 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-16" style={{
        background: 'linear-gradient(160deg, hsl(220 30% 96%) 0%, hsl(210 40% 92%) 40%, hsl(24 30% 94%) 100%)'
      }}>
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.08] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.08] blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md rounded-2xl border-2 border-border bg-card p-8 shadow-2xl md:p-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 shadow-lg shadow-primary/15">
              <LogIn size={24} className="text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
          </div>
          <p className="text-sm text-muted-foreground">Sign in to your Axibator account.</p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
            <div>
              <label className="text-sm font-bold text-foreground">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-bold text-foreground">Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass} placeholder="••••••••" />
            </div>
            <Button size="lg" type="submit" className="mt-2 w-full h-14 rounded-full bg-primary text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/35">
              Sign In
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="font-bold text-primary hover:underline">Sign up</Link>
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
