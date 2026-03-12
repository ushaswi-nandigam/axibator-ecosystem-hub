import { motion } from "framer-motion";
import { Map } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(210 35% 95%) 0%, hsl(220 30% 91%) 50%, hsl(213 40% 93%) 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 30 L30 50 L25 30Z' fill='%23FF6700'/%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px'
      }} />

      {/* Color orbs */}
      <div className="absolute top-20 left-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.08] blur-[100px]" />
      <div className="absolute bottom-10 right-[10%] w-[350px] h-[350px] rounded-full bg-primary/[0.06] blur-[80px]" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-12 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/15 shadow-xl shadow-primary/15"
          >
            <Map className="h-10 w-10 text-primary" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-label"
          >
            The Problem
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="section-title"
          >
            Founders Without<br />
            <span className="text-primary font-extrabold">Direction</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
          >
            Many founders have ideas but lack structure, mentorship, and the right path to build. 
            They navigate uncertainty alone — without a compass, without a crew.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative mt-20 mx-auto max-w-md w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default ProblemSection;
