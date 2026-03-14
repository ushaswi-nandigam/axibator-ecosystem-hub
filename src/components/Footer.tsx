import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import axibatorTextLogo from "@/assets/axibator-text-logo.png";
import axibatorIcon from "@/assets/axibator-icon.png";

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
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-20 md:py-24">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={axibatorIcon} alt="Axibator" className="h-10" />
              <img src={axibatorTextLogo} alt="Axibator" className="h-6" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-secondary-foreground/60">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] text-xs font-bold text-secondary-foreground/60 transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-accent/20"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-secondary-foreground tracking-wide">Programs</h4>
            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.Programs.map((l) => (
                <Link key={l.label} to={l.path} className="text-sm text-secondary-foreground/50 transition-colors duration-200 hover:text-secondary-foreground">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-secondary-foreground tracking-wide">Explore</h4>
            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.Ecosystem.map((l) => (
                <Link key={l.label} to={l.path} className="text-sm text-secondary-foreground/50 transition-colors duration-200 hover:text-secondary-foreground">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-secondary-foreground tracking-wide">Contact</h4>
            <div className="mt-5 flex flex-col gap-4">
              <a href="mailto:connect@axibator.com" className="flex items-center gap-3 text-sm text-secondary-foreground/50 hover:text-secondary-foreground transition-colors duration-200">
                <Mail size={15} className="shrink-0 text-accent/60" /> connect@axibator.com
              </a>
              <a href="tel:+919133063307" className="flex items-center gap-3 text-sm text-secondary-foreground/50 hover:text-secondary-foreground transition-colors duration-200">
                <Phone size={15} className="shrink-0 text-accent/60" /> +91 91330 63307
              </a>
              <div className="flex items-start gap-3 text-sm text-secondary-foreground/50">
                <MapPin size={15} className="mt-0.5 shrink-0 text-accent/60" />
                <span>Asian Sun City, 7th Floor,<br/>Kondapur, Hyderabad – India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/[0.08] pt-8 text-center text-xs text-secondary-foreground/40">
          © {new Date().getFullYear()} Axibator. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
