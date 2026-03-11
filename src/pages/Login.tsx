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

  const inputClass = "mt-1.5 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex min-h-screen items-center justify-center px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <LogIn size={20} className="text-primary" />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">Welcome back</h1>
          </div>
          <p className="text-sm text-muted-foreground">Sign in to your Axibator account.</p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass} placeholder="••••••••" />
            </div>
            <Button size="lg" type="submit" variant="hero" className="mt-2 w-full">Sign In</Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium text-primary hover:underline">Sign up</Link>
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
