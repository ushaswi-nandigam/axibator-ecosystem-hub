import { motion, useInView } from "framer-motion";
import { Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const partners = [
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Atlassian", domain: "atlassian.com" },
  { name: "Apollo", domain: "apollo.io" },
  { name: "Asana", domain: "asana.com" },
  { name: "Intercom", domain: "intercom.com" },
  { name: "Zendesk", domain: "zendesk.com" },
  { name: "Zoho", domain: "zoho.com" },
  { name: "Notion", domain: "notion.so" },
  { name: "Make.com", domain: "make.com" },
  { name: "Tally", domain: "tally.so" },
  { name: "Webflow", domain: "webflow.com" },
  { name: "PostHog", domain: "posthog.com" },
  { name: "DevRev.ai", domain: "devrev.ai" },
  { name: "SendPulse", domain: "sendpulse.com" },
  { name: "Typeform", domain: "typeform.com" },
  { name: "Mixpanel", domain: "mixpanel.com" },
  { name: "Framer", domain: "framer.com" },
  { name: "Doola", domain: "doola.com" },
  { name: "Crisp", domain: "crisp.chat" },
  { name: "JetBrains", domain: "jetbrains.com" },
  { name: "Mergify", domain: "mergify.io" },
  { name: "Miro", domain: "miro.com" },
  { name: "Mux", domain: "mux.com" },
  { name: "Appwrite", domain: "appwrite.io" },
  { name: "Statsig", domain: "statsig.com" },
  { name: "Databricks", domain: "databricks.com" },
  { name: "Retool", domain: "retool.com" },
  { name: "ClickUp", domain: "clickup.com" },
  { name: "GitHub", domain: "github.com" },
  { name: "E2E Networks", domain: "e2enetworks.com" },
  { name: "MilesWeb", domain: "milesweb.com" },
  { name: "CIVO", domain: "civo.com" },
  { name: "OVHCloud", domain: "ovhcloud.com" },
  { name: "Brevo", domain: "brevo.com" },
  { name: "Stytch", domain: "stytch.com" },
  { name: "Exotel", domain: "exotel.com" },
  { name: "DronaHQ", domain: "dronahq.com" },
  { name: "Gumlet", domain: "gumlet.com" },
  { name: "Customer.io", domain: "customer.io" },
  { name: "Msg91", domain: "msg91.com" },
  { name: "Callerdesk", domain: "callerdesk.io" },
];

const PartnerLogo = ({ name, domain }: { name: string; domain: string }) => {
  const logoUrl = `https://logo.clearbit.com/${domain}`;

  return (
    <div className="flex flex-col items-center justify-center gap-2.5 px-6 min-w-[120px]">
      <div className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center overflow-hidden shadow-sm">
        <img
          src={logoUrl}
          alt={name}
          className="h-8 w-8 object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              const fallback = document.createElement("span");
              fallback.className = "text-xs font-bold text-primary";
              fallback.textContent = name.slice(0, 2).toUpperCase();
              parent.appendChild(fallback);
            }
          }}
        />
      </div>
      <span className="text-[11px] font-medium text-muted-foreground whitespace-nowrap">{name}</span>
    </div>
  );
};

// Split partners into two rows for dual-direction scrolling
const row1 = partners.slice(0, Math.ceil(partners.length / 2));
const row2 = partners.slice(Math.ceil(partners.length / 2));

const PartnersSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(160deg, hsl(0 0% 99%) 0%, hsl(220 20% 95%) 50%, hsl(210 25% 96%) 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="section-label">Allied Ports</span>
          <h2 className="section-title">Ecosystem Partners</h2>
          <p className="section-desc mx-auto max-w-lg">
            40+ organizations powering the Axibator ecosystem — from dev tools to cloud infrastructure.
          </p>
        </motion.div>
      </div>

      {/* Scrolling carousel rows */}
      <div className="space-y-6">
        {/* Row 1 - scrolls left */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex animate-scroll-left">
              {[...row1, ...row1, ...row1].map((p, i) => (
                <PartnerLogo key={`r1-${i}`} name={p.name} domain={p.domain} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Row 2 - scrolls right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="overflow-hidden"
          >
            <div className="flex animate-scroll-right">
              {[...row2, ...row2, ...row2].map((p, i) => (
                <PartnerLogo key={`r2-${i}`} name={p.name} domain={p.domain} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a href="mailto:connect@axibator.com">
            <Button variant="outline" className="rounded-full px-8 font-semibold border-2 transition-all duration-300 hover:border-primary/30">
              <Handshake className="h-4 w-4 mr-2" />
              Become a Partner
            </Button>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default PartnersSection;
