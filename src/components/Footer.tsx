import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import axibatorLogo from "@/assets/axibator-logo-new.jpeg";

const footerLinks = {
  Programs: [
    { label: "Ignite", path: "/programs" },
    { label: "LaunchPad", path: "/programs" },
    { label: "BuildLab", path: "/programs" },
    { label: "TechXcelerate", path: "/programs" },
    { label: "HerPreneur", path: "/programs" },
    { label: "Rural Innovators", path: "/programs" },
  ],
  Ecosystem: [
    { label: "Startups", path: "/startups" },
    { label: "Partners", path: "/partners" },
    { label: "Events", path: "/events" },
    { label: "Resources", path: "/resources" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="container py-20 md:py-24">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <img src={axibatorLogo} alt="Axibator" className="h-9" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building first-mile infrastructure for grassroots founders.
              Action-first support for builders who don't wait for permission to start.
            </p>
            <div className="mt-8 flex gap-3">
              {[
                { label: "X", href: "#" },
                { label: "Li", href: "#" },
                { label: "Ig", href: "#" },
                { label: "Yt", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xs font-bold text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground tracking-wide">Programs</h4>
            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.Programs.map((l) => (
                <Link key={l.label} to={l.path} className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground tracking-wide">Explore</h4>
            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.Ecosystem.map((l) => (
                <Link key={l.label} to={l.path} className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground tracking-wide">Contact</h4>
            <div className="mt-5 flex flex-col gap-4">
              <a href="mailto:connect@axibator.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Mail size={15} className="shrink-0 text-primary/60" /> connect@axibator.com
              </a>
              <a href="tel:+919133063307" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Phone size={15} className="shrink-0 text-primary/60" /> +91 91330 63307
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary/60" />
                <span>Asian Sun City, 7th Floor,<br/>Kondapur, Hyderabad – India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border/50 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Axibator. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
