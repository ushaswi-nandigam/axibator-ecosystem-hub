import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import axibatorTextLogo from "@/assets/axibator-text-logo.png";

const navItems = [
  { label: "Home", path: "/" },
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-secondary/95 backdrop-blur-xl">
      <div className="container flex h-18 items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img src={axibatorTextLogo} alt="Axibator" className="h-7 md:h-8" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                location.pathname === item.path
                  ? "text-white font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-white/60 font-medium hover:text-white hover:bg-white/10">Login</Button>
          </Link>
          <Link to="/apply">
            <Button size="sm" className="rounded-full bg-accent px-6 text-accent-foreground font-bold hover:bg-accent/90 shadow-lg shadow-accent/25">
              Apply Now
            </Button>
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/[0.08] bg-secondary lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-white font-semibold bg-white/10"
                    : "text-white/60 hover:text-white"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex gap-3 border-t border-white/[0.08] pt-5">
              <Link to="/login" onClick={() => setMobileOpen(false)}>
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">Login</Button>
              </Link>
              <Link to="/apply" onClick={() => setMobileOpen(false)}>
                <Button size="sm" className="rounded-full bg-accent text-accent-foreground font-bold hover:bg-accent/90">Apply Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
