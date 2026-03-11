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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Lost at sea</p>
        <h1 className="mt-3 font-display text-6xl font-bold text-foreground md:text-8xl">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">This route doesn't exist in our ecosystem.</p>
        <Button asChild variant="hero" size="lg" className="mt-8">
          <Link to="/"><Home size={16} className="mr-2" /> Return Home</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
