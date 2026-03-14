import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 overflow-hidden hero-dark">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative text-center"
      >
        <span className="section-label-light !text-primary">Page Not Found</span>
        <h1 className="mt-4 text-7xl font-bold text-white md:text-9xl">404</h1>
        <p className="mt-6 text-xl text-white/50 max-w-md mx-auto">This page doesn't exist.</p>
        <Link to="/">
          <Button size="lg" className="mt-10 h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25">
            <Home size={18} className="mr-2" /> Return Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
