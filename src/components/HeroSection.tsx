import LannaLogo from './LannaLogo';

const HeroSection = () => {
  const scrollToSection = () => {
    document.getElementById('problema')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Highway lights animation background */}
      <div className="absolute inset-0 bg-background">
        {/* Road lines */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/5 to-transparent" />

        {/* Animated highway lights */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`light-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 100 + 40}px`,
              height: '2px',
              top: `${20 + i * 12}%`,
              left: '-100px',
              background: i % 2 === 0
                ? `linear-gradient(90deg, transparent, hsl(145, 63%, 29%, 0.4), transparent)`
                : `linear-gradient(90deg, transparent, hsl(36, 69%, 50%, 0.3), transparent)`,
              filter: `blur(${i % 2 === 0 ? 1 : 2}px)`,
              animation: `highway-light ${8 + i * 3}s linear infinite`,
              animationDelay: `${i * 2.5}s`,
            }}
          />
        ))}

        {/* Glow orbs */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, hsl(145, 63%, 29%), transparent)',
            top: '10%',
            right: '-10%',
            filter: 'blur(80px)',
            animation: 'pulse-glow 6s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, hsl(36, 69%, 50%), transparent)',
            bottom: '20%',
            left: '-5%',
            filter: 'blur(60px)',
            animation: 'pulse-glow 8s ease-in-out infinite 2s',
          }}
        />

        {/* Road perspective lines */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full"
          style={{
            background: `linear-gradient(180deg, transparent 60%, hsl(0, 0%, 7%) 100%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-6">
        <div className="mb-8 flex justify-center">
          <LannaLogo size="large" className="text-foreground" />
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
          Tu jale, tu lana<span className="text-accent">.</span>
        </h1>

        <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 font-body">
          Ya trabajaste. Ya entregaste. Ya te toca cobrar.
        </p>

        <p className="text-base md:text-lg text-muted-foreground/70 max-w-xl mx-auto mb-12 font-body">
          LANNA te paga tus fletes al instante, por WhatsApp. Sin apps, sin papeleo, sin esperar.
        </p>

        <button
          onClick={scrollToSection}
          className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
        >
          Así funciona
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
