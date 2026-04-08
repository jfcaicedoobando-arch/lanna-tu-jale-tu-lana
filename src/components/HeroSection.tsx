import LannaLogo from './LannaLogo';

const WHATSAPP_URL = 'https://wa.me/521234567890?text=Hola%20Lupita%2C%20quiero%20conocer%20LANNA';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Highway lights animation background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/5 to-transparent" />

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
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-6">
        <div className="mb-8 flex justify-center">
          <LannaLogo size="large" className="text-foreground" />
        </div>

        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-primary font-semibold mb-6 font-body">
          Tu respaldo en la carretera
        </p>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
          Tu jale, tu lana<span className="text-accent">.</span>
        </h1>

        <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 font-body">
          Adelantamos tu dinero para que no esperes 30 días.
        </p>

        <p className="text-base md:text-lg text-muted-foreground/70 max-w-xl mx-auto mb-12 font-body">
          Todo por WhatsApp, a través de Lupita, tu contacto directo.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
          </svg>
          Escribirle a Lupita
        </a>

        <p className="text-sm text-muted-foreground/50 mt-4 font-body">
          Responde en minutos · Sin compromisos
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
