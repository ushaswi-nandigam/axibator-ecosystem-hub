import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import axibatorLogo from "@/assets/axibator-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block">
              <img src={axibatorLogo} alt="Axibator" className="h-9" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building first-mile infrastructure for grassroots founders.
              Action-first support for builders who don't wait for permission to start.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { label: "X", href: "#" },
                { label: "Li", href: "#" },
                { label: "Ig", href: "#" },
                { label: "Yt", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Routes</h4>
            <div className="mt-3 flex flex-col gap-2.5">
              {["Programs", "Startups", "Partners", "Events", "Resources", "Apply"].map((l) => (
                <Link key={l} to={`/${l.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <div className="mt-3 flex flex-col gap-3">
              <a href="mailto:connect@axibator.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <Mail size={14} /> connect@axibator.com
              </a>
              <a href="tel:+919133063307" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <Phone size={14} /> +91 91330 63307
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Asian Sun City, 7th Floor, Kondapur, Hyderabad – India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Axibator. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
