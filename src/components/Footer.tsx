import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import axibatorLogo from "@/assets/axibator-logo.png";

const footerLinks = {
  Programs: ["Ignite", "LaunchPad", "BuildLab", "TechXcelerate", "HerPreneur", "Rural Innovators"],
  Company: ["Startups", "Partners", "Events", "Resources"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img src={axibatorLogo} alt="Axibator" className="h-8 dark:brightness-0 dark:invert" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Building first-mile infrastructure for grassroots founders.
              Action-first support for builders who don't wait for permission to start.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "X", href: "#" },
                { label: "Li", href: "#" },
                { label: "Ig", href: "#" },
                { label: "Yt", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-bold text-foreground">Programs</h4>
            <div className="mt-4 flex flex-col gap-2.5">
              {footerLinks.Programs.map((l) => (
                <Link key={l} to="/programs" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-foreground">Explore</h4>
            <div className="mt-4 flex flex-col gap-2.5">
              {footerLinks.Company.map((l) => (
                <Link key={l} to={`/${l.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-foreground">Contact</h4>
            <div className="mt-4 flex flex-col gap-3.5">
              <a href="mailto:connect@axibator.com" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={14} className="shrink-0" /> connect@axibator.com
              </a>
              <a href="tel:+919133063307" className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone size={14} className="shrink-0" /> +91 91330 63307
              </a>
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Asian Sun City, 7th Floor, Kondapur, Hyderabad – India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Axibator. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
