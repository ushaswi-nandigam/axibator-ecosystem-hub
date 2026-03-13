import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Compass } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 overflow-hidden" style={{
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
        className="relative text-center"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/15 shadow-xl shadow-primary/15 mb-8">
          <Compass className="h-10 w-10 text-primary" />
        </div>
        <span className="section-label">Lost at sea</span>
        <h1 className="mt-4 text-7xl font-bold text-foreground md:text-9xl">404</h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-md mx-auto">This route doesn't exist in our ecosystem.</p>
        <Link to="/">
          <Button size="lg" className="mt-10 group h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/35">
            <Home size={18} className="mr-2" /> Return Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
