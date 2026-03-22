import { motion, useInView } from "framer-motion";
import { Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

const partners = [
  { name: "HubSpot", logo: "/partners/hubspot.png" },
  { name: "Atlassian", logo: "/partners/atlassian.png" },
  { name: "Apollo", logo: "/partners/apollo.png" },
  { name: "Asana", logo: "/partners/asana.png" },
  { name: "Intercom", logo: "/partners/intercom.png" },
  { name: "Zendesk", logo: "/partners/zendesk.png" },
  { name: "Zoho", logo: "/partners/zoho.png" },
  { name: "Notion", logo: "/partners/notion.png" },
  { name: "Make.com", logo: "/partners/make.png" },
  { name: "Tally", logo: "/partners/tally.png" },
  { name: "Webflow", logo: "/partners/webflow.png" },
  { name: "PostHog", logo: "/partners/posthog.png" },
  { name: "DevRev.ai", logo: "/partners/devrev.png" },
  { name: "SendPulse", logo: "/partners/sendpulse.png" },
  { name: "Typeform", logo: "/partners/typeform.png" },
  { name: "Mixpanel", logo: "/partners/mixpanel.png" },
  { name: "Framer", logo: "/partners/framer.png" },
  { name: "Doola", logo: "/partners/doola.png" },
  { name: "Crisp", logo: "/partners/crisp.png" },
  { name: "JetBrains", logo: "/partners/jetbrains.png" },
  { name: "Mergify", logo: "/partners/mergify.png" },
  { name: "Miro", logo: "/partners/miro.png" },
  { name: "Mux", logo: "/partners/mux.png" },
  { name: "Appwrite", logo: "/partners/appwrite.png" },
  { name: "Statsig", logo: "/partners/statsig.png" },
  { name: "Databricks", logo: "/partners/databricks.png" },
  { name: "Retool", logo: "/partners/retool.png" },
  { name: "ClickUp", logo: "/partners/clickup.png" },
  { name: "GitHub", logo: "/partners/github.png" },
  { name: "E2E Networks", logo: "/partners/e2enetworks.png" },
  { name: "MilesWeb", logo: "/partners/milesweb.png" },
  { name: "CIVO", logo: "/partners/civo.png" },
  { name: "OVHCloud", logo: "/partners/ovhcloud.png" },
  { name: "Brevo", logo: null },
  { name: "Stytch", logo: "/partners/stytch.png" },
  { name: "Exotel", logo: "/partners/exotel.png" },
  { name: "DronaHQ", logo: "/partners/dronahq.png" },
  { name: "Gumlet", logo: "/partners/gumlet.png" },
  { name: "Customer.io", logo: "/partners/customerio.png" },
  { name: "Msg91", logo: "/partners/msg91.png" },
  { name: "Callerdesk", logo: "/partners/callerdesk.png" },
  { name: "Wispr.ai", logo: "/partners/wispr.png" },
  { name: "Smartbot", logo: "/partners/smartbot.png" },
  { name: "ScaleGrid", logo: "/partners/scalegrid.png" },
  { name: "Prodcamp", logo: null },
  { name: "Nicnames", logo: "/partners/nicnames.png" },
  { name: "Teamcamp", logo: "/partners/teamcamp.png" },
];

const PartnerLogo = ({ name, logo }: { name: string; logo: string | null }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 min-w-[130px]">
      <div className="h-16 w-16 rounded-2xl bg-muted/50 flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105">
        {logo && !failed ? (
          <img src={logo} alt={name} className="h-10 w-10 object-contain" onError={() => setFailed(true)} />
        ) : (
          <span className="text-sm font-bold text-accent">{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">{name}</span>
    </div>
  );
};

const row1 = partners.slice(0, Math.ceil(partners.length / 2));
const row2 = partners.slice(Math.ceil(partners.length / 2));

const PartnersSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden section-light-alt">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[100px]" />
      <div className="absolute bottom-[20%] right-[-5%] w-[350px] h-[350px] rounded-full bg-primary/[0.03] blur-[90px]" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--accent)) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-center mb-12">
          <span className="section-label">Allied Ports</span>
          <h2 className="section-title">Ecosystem Partners</h2>
          <p className="section-desc mx-auto max-w-lg">90+ organizations powering the Axibator ecosystem — from dev tools to cloud infrastructure.</p>
        </motion.div>
      </div>

      <div className="space-y-8">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} className="overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...row1, ...row1, ...row1].map((p, i) => (
                <PartnerLogo key={`r1-${i}`} name={p.name} logo={p.logo} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} className="overflow-hidden">
            <div className="flex animate-scroll-right">
              {[...row2, ...row2, ...row2].map((p, i) => (
                <PartnerLogo key={`r2-${i}`} name={p.name} logo={p.logo} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }} className="mt-12 text-center">
          <a href="mailto:connect@axibator.com">
            <Button variant="outline" className="rounded-full px-8 font-semibold border transition-all duration-300 hover:border-accent/30">
              <Handshake className="h-4 w-4 mr-2" /> Become a Partner
            </Button>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default PartnersSection;
