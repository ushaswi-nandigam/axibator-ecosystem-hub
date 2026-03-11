import { motion } from "framer-motion";

const FloatingElement = ({
  children,
  className,
  duration = 20,
  delay = 0,
  x = [0, 30, -20, 0],
  y = [0, -25, 15, 0],
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  x?: number[];
  y?: number[];
}) => (
  <motion.div
    className={`absolute pointer-events-none ${className}`}
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0, 0.07, 0.05, 0.07, 0],
      x,
      y,
      rotate: [0, 5, -3, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

// Innovation-themed SVG shapes
const LightbulbIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 38h10M20 42h8M24 4a12 12 0 0 0-8 21c1.5 1.5 2 3.5 2 5.5V34h12v-3.5c0-2 .5-4 2-5.5A12 12 0 0 0 24 4Z" />
  </svg>
);

const RocketIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 44V28M14 34l10-6 10 6M8 28s2-10 16-24c14 14 16 24 16 24H8Z" />
  </svg>
);

const GearIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="6" />
    <path d="M20 4h8l1 6 5 2 5-4 6 6-4 5 2 5 6 1v8l-6 1-2 5 4 5-6 6-5-4-5 2-1 6h-8l-1-6-5-2-5 4-6-6 4-5-2-5-6-1v-8l6-1 2-5-4-5 6-6 5 4 5-2 1-6Z" />
  </svg>
);

const ChartIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 44h40M10 44V28M18 44V20M26 44V12M34 44V6M42 44V16" />
  </svg>
);

const TargetIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="20" />
    <circle cx="24" cy="24" r="13" />
    <circle cx="24" cy="24" r="6" />
    <circle cx="24" cy="24" r="1.5" fill="currentColor" />
  </svg>
);

const NetworkIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="8" r="4" />
    <circle cx="8" cy="36" r="4" />
    <circle cx="40" cy="36" r="4" />
    <circle cx="24" cy="24" r="4" />
    <line x1="24" y1="12" x2="24" y2="20" />
    <line x1="20.5" y1="26.5" x2="11.5" y2="33.5" />
    <line x1="27.5" y1="26.5" x2="36.5" y2="33.5" />
  </svg>
);

const InnovationBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Lightbulbs */}
      <FloatingElement className="top-[10%] left-[5%] text-primary" duration={25} delay={0} x={[0, 40, -10, 0]} y={[0, -30, 20, 0]}>
        <LightbulbIcon size={56} />
      </FloatingElement>
      <FloatingElement className="top-[60%] right-[8%] text-accent" duration={30} delay={3} x={[0, -25, 35, 0]} y={[0, 20, -35, 0]}>
        <LightbulbIcon size={40} />
      </FloatingElement>

      {/* Rockets */}
      <FloatingElement className="top-[25%] right-[12%] text-primary" duration={22} delay={1} x={[0, -30, 20, 0]} y={[0, -40, 10, 0]}>
        <RocketIcon size={52} />
      </FloatingElement>
      <FloatingElement className="bottom-[20%] left-[10%] text-accent" duration={28} delay={5} x={[0, 20, -30, 0]} y={[0, -20, 30, 0]}>
        <RocketIcon size={36} />
      </FloatingElement>

      {/* Gears */}
      <FloatingElement className="top-[45%] left-[15%] text-muted-foreground" duration={35} delay={2} x={[0, 15, -25, 0]} y={[0, 25, -15, 0]}>
        <GearIcon size={44} />
      </FloatingElement>
      <FloatingElement className="top-[15%] right-[25%] text-muted-foreground" duration={32} delay={7} x={[0, -20, 10, 0]} y={[0, 15, -25, 0]}>
        <GearIcon size={32} />
      </FloatingElement>

      {/* Charts */}
      <FloatingElement className="bottom-[30%] right-[20%] text-primary" duration={26} delay={4} x={[0, 30, -15, 0]} y={[0, -20, 25, 0]}>
        <ChartIcon size={48} />
      </FloatingElement>

      {/* Target */}
      <FloatingElement className="top-[70%] left-[25%] text-accent" duration={24} delay={6} x={[0, -15, 25, 0]} y={[0, -30, 10, 0]}>
        <TargetIcon size={42} />
      </FloatingElement>

      {/* Network nodes */}
      <FloatingElement className="top-[35%] right-[5%] text-muted-foreground" duration={30} delay={8} x={[0, 20, -20, 0]} y={[0, 15, -20, 0]}>
        <NetworkIcon size={50} />
      </FloatingElement>
      <FloatingElement className="bottom-[10%] left-[40%] text-primary" duration={27} delay={9} x={[0, -25, 15, 0]} y={[0, 20, -15, 0]}>
        <NetworkIcon size={38} />
      </FloatingElement>

      {/* Abstract circles */}
      <FloatingElement className="top-[5%] left-[45%] text-primary" duration={20} delay={0} x={[0, 10, -10, 0]} y={[0, -15, 10, 0]}>
        <div className="h-20 w-20 rounded-full border border-current" />
      </FloatingElement>
      <FloatingElement className="bottom-[15%] right-[35%] text-accent" duration={23} delay={4} x={[0, -15, 20, 0]} y={[0, 10, -20, 0]}>
        <div className="h-14 w-14 rounded-full border border-current" />
      </FloatingElement>

      {/* Dotted lines */}
      <FloatingElement className="top-[50%] left-[50%] text-muted-foreground" duration={35} delay={2} x={[0, 20, -20, 0]} y={[0, -10, 10, 0]}>
        <svg width="120" height="2" viewBox="0 0 120 2" fill="none">
          <line x1="0" y1="1" x2="120" y2="1" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
        </svg>
      </FloatingElement>
      <FloatingElement className="top-[30%] left-[30%] text-muted-foreground" duration={28} delay={6} x={[0, -10, 15, 0]} y={[0, 20, -10, 0]}>
        <svg width="2" height="80" viewBox="0 0 2 80" fill="none">
          <line x1="1" y1="0" x2="1" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
        </svg>
      </FloatingElement>
    </div>
  );
};

export default InnovationBackground;
