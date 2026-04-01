import LannaLogo from './LannaLogo';
import heroImage from '@/assets/hero-highway.jpg';

const HeroSection = () => {
  const scrollToProblema = () => {
    document.getElementById('problema')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Carretera mexicana de noche"
          className="w-full h-full object-cover hero-bg-animate"
          width={1920}
          height={1080}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center gap-8">
        <LannaLogo size="xl" />

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mt-4">
          Tu jale, tu lana.
        </h1>

        <p className="text-lg md:text-2xl text-foreground/80 max-w-2xl font-body leading-relaxed">
          Ya trabajaste. Ya entregaste. Ya te toca cobrar.
        </p>

        <button
          onClick={scrollToProblema}
          className="mt-8 group flex flex-col items-center gap-2 text-accent hover:text-accent/80 transition-colors"
        >
          <span className="text-base md:text-lg font-body font-semibold">Así funciona</span>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
