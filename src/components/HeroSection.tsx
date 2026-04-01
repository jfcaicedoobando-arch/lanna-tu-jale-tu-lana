import LannaLogo from "./LannaLogo";

const HeroSection = () => {
  const scrollToProblema = () => {
    document.getElementById("problema")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background: night highway gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-highway-dark via-background to-highway-asphalt" />
      
      {/* Road lines */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-40 bg-gradient-to-t from-highway-amber/60 to-transparent" />
      <div className="absolute bottom-44 left-1/2 -translate-x-1/2 w-1 h-16 bg-highway-amber/30" />
      <div className="absolute bottom-64 left-1/2 -translate-x-1/2 w-1 h-10 bg-highway-amber/15" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] bg-highway-amber/5 rounded-full blur-[80px]" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <LannaLogo size="xl" className="mx-auto mb-10 text-primary" />
        
        <h1 className="font-highway text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
          Tu jale, tu lana.
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-body max-w-xl mx-auto mb-12 leading-relaxed">
          Ya trabajaste. Ya entregaste. Ya te toca cobrar.
        </p>

        <button
          onClick={scrollToProblema}
          className="group inline-flex items-center gap-3 bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300 px-8 py-4 rounded-full font-body font-semibold text-lg"
        >
          Así funciona
          <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      {/* Truck silhouette at bottom */}
      <div className="absolute bottom-8 right-8 sm:right-16 opacity-10">
        <svg width="180" height="80" viewBox="0 0 180 80" fill="currentColor" className="text-foreground">
          <rect x="0" y="20" width="100" height="40" rx="4" />
          <rect x="100" y="30" width="60" height="30" rx="3" />
          <circle cx="30" cy="65" r="12" />
          <circle cx="70" cy="65" r="12" />
          <circle cx="140" cy="65" r="12" />
          <rect x="105" y="35" width="20" height="15" rx="2" fill="hsl(var(--highway-amber))" opacity="0.4" />
          <rect x="130" y="35" width="20" height="15" rx="2" fill="hsl(var(--highway-amber))" opacity="0.3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
