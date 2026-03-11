const InnovationBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Subtle ambient gradient only — no floating icons */}
      <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-primary/[0.02] blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.02] blur-[120px]" />
    </div>
  );
};

export default InnovationBackground;
