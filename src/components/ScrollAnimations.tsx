import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Parallax wrapper - moves children at a different scroll rate
export const Parallax = ({
  children,
  speed = 0.5,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

// Section that scales/fades in as it enters viewport
export const ScrollScale = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.97]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.6]);

  return (
    <div ref={ref}>
      <motion.div style={{ scale, opacity }} className={className}>
        {children}
      </motion.div>
    </div>
  );
};

// Horizontal slide on scroll
export const ScrollSlide = ({
  children,
  direction = "left",
  distance = 80,
  className = "",
}: {
  children: ReactNode;
  direction?: "left" | "right";
  distance?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    direction === "left" ? [distance, 0, -distance] : [-distance, 0, distance]
  );

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ x }}>{children}</motion.div>
    </div>
  );
};

// Rotate on scroll
export const ScrollRotate = ({
  children,
  degrees = 15,
  className = "",
}: {
  children: ReactNode;
  degrees?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [-degrees, degrees]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ rotate }}>{children}</motion.div>
    </div>
  );
};

// Progress bar linked to overall page scroll
export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[100] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

// Hook to get scroll-linked values for a section
export const useScrollSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return { ref, scrollYProgress };
};

export default { Parallax, ScrollScale, ScrollSlide, ScrollRotate, ScrollProgressBar };
