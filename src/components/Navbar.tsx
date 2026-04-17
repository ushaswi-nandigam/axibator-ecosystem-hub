import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import axibatorTextLogo from "@/assets/axibator-text-logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Builder Nest", path: "/builder-nest" },
  { label: "Startups", path: "/startups" },
  { label: "Partners", path: "/partners" },
  { label: "Events", path: "/events" },
  { label: "Resources", path: "/resources" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Inner pages that use dark hero
  const darkPages = ["/about", "/programs", "/builder-nest", "/startups", "/partners", "/events", "/resources", "/apply", "/login", "/signup", "/student-dashboard", "/admin-dashboard", "/dashboard"];
  const isDarkHero = darkPages.some(p => location.pathname === p);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
      isDarkHero 
        ? "border-white/[0.08] bg-secondary/95" 
        : "border-border/50 bg-background/80"
    }`}>
      <div className="container flex h-18 items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img src={axibatorTextLogo} alt="Axibator" className={`h-7 md:h-8 ${isDarkHero ? "" : "brightness-0"}`} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isDarkHero
                  ? location.pathname === item.path ? "text-white font-semibold" : "text-white/60 hover:text-white"
                  : location.pathname === item.path ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/login">
            <Button variant="ghost" size="sm" className={`font-medium ${
              isDarkHero ? "text-white/60 hover:text-white hover:bg-white/10" : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}>Login</Button>
          </Link>
          <Link to="/apply">
            <Button size="sm" className="rounded-full bg-primary px-6 text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/20">
              Apply Now
            </Button>
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-full ${isDarkHero ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={`border-t lg:hidden ${isDarkHero ? "border-white/[0.08] bg-secondary" : "border-border bg-background"}`}>
          <div className="container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isDarkHero
                    ? location.pathname === item.path ? "text-white font-semibold bg-white/10" : "text-white/60 hover:text-white"
                    : location.pathname === item.path ? "text-foreground font-semibold bg-muted" : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className={`mt-4 flex gap-3 border-t pt-5 ${isDarkHero ? "border-white/[0.08]" : "border-border"}`}>
              <Link to="/login" onClick={() => setMobileOpen(false)}>
                <Button variant="ghost" size="sm" className={isDarkHero ? "text-white/60 hover:text-white hover:bg-white/10" : "text-muted-foreground hover:text-foreground"}>Login</Button>
              </Link>
              <Link to="/apply" onClick={() => setMobileOpen(false)}>
                <Button size="sm" className="rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90">Apply Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
