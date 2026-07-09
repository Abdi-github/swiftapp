const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-backGround">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(84,215,255,0.18),transparent_28%),radial-gradient(circle_at_78%_10%,rgba(246,193,119,0.12),transparent_24%),linear-gradient(135deg,#060914_0%,#0d1422_48%,#101827_100%)]" />
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.11)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-pulse" />
      <div className="absolute -right-28 top-1/3 h-80 w-80 rounded-full bg-[#f6c177]/10 blur-3xl animate-pulse animation-delay-1000" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#7dd3fc]/10 blur-3xl animate-pulse animation-delay-2000" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-backGround to-transparent" />
    </div>
  );
};

export default AnimatedBackground;
