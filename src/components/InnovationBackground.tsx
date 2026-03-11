const InnovationBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-1/3 h-[800px] w-[800px] rounded-full bg-primary/[0.015] blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-accent/[0.015] blur-[150px]" />
    </div>
  );
};

export default InnovationBackground;
