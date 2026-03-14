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

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-16 hero-dark">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-8 shadow-2xl md:p-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 shadow-lg shadow-primary/15"><LogIn size={24} className="text-primary" /></div>
            <h1 className="text-2xl font-bold text-white">Welcome back</h1>
          </div>
          <p className="text-sm text-white/50">Sign in to your Axibator account.</p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
            <div><label className="text-sm font-bold text-white/80">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                className="mt-2 block w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm font-medium text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="you@example.com" /></div>
            <div><label className="text-sm font-bold text-white/80">Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                className="mt-2 block w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm font-medium text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="••••••••" /></div>
            <Button size="lg" type="submit" className="mt-2 w-full h-14 rounded-full bg-primary text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20">Sign In</Button>
          </form>

          <p className="mt-8 text-center text-sm text-white/40">
            Don't have an account? <Link to="/signup" className="font-bold text-primary hover:underline">Sign up</Link>
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
