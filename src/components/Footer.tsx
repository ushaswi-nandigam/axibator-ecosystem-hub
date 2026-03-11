import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-2xl font-bold">
              <span className="text-primary">Axi</span>bator
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Building first-mile infrastructure for grassroots founders.
              Action-first support for builders who don't wait for permission to start.
            </p>
            <div className="mt-6 flex gap-4">
              {["twitter", "linkedin", "instagram", "youtube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <span className="text-xs font-medium uppercase">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
            <div className="mt-4 flex flex-col gap-3">
              {["Programs", "Startups", "Partners", "Events", "Resources", "Apply"].map((l) => (
                <Link key={l} to={`/${l.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                  {l}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h4>
            <div className="mt-4 flex flex-col gap-4">
              <a href="mailto:connect@axibator.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
                <Mail size={14} /> connect@axibator.com
              </a>
              <a href="tel:+919133063307" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
                <Phone size={14} /> +91 91330 63307
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Asian Sun City, 7th Floor, Kondapur, Hyderabad – India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Axibator. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
