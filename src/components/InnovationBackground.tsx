const InnovationBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-0 right-[20%] w-[800px] h-[800px] rounded-full bg-accent/[0.03] blur-[150px]" />
      <div className="absolute bottom-[20%] left-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px]" />
      <div className="absolute top-[50%] right-0 w-[500px] h-[500px] rounded-full bg-secondary/[0.02] blur-[100px]" />
    </div>
  );
};

export default InnovationBackground;
