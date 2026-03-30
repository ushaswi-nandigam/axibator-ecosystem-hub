import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[150px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute w-40 h-40 rounded-full border border-primary/15"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.div
          className="absolute w-56 h-56 rounded-full border border-primary/10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, rotate: 360 }}
          transition={{ scale: { duration: 1, ease: "easeOut" }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
          style={{ borderStyle: "dashed" }}
        />
        <motion.div
          className="absolute w-32 h-32 rounded-full border border-primary/12"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ borderStyle: "dashed" }}
        />
        <motion.div
          className="absolute w-28 h-28 rounded-full border-2 border-primary/20"
          animate={{ scale: [1, 1.5, 1.5], opacity: [0.6, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 150, damping: 15 }}
          className="relative z-10"
        >
          <div className="h-20 w-20 rounded-full bg-primary/[0.08] border border-primary/20 flex items-center justify-center shadow-2xl shadow-primary/10">
            <img src="/axibator-black-logo.png" alt="Axibator" className="h-14 w-14 object-contain" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8"
      >
        <img src="/axibator-black-text-logo.png" alt="Axibator" className="h-6 opacity-80" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 w-48 h-1 rounded-full bg-muted overflow-hidden"
      >
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2 }}
        className="mt-4 text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground"
      >
        Building the future
      </motion.p>
    </div>
  );
};

export default LoadingScreen;
