import WhatsAppMockup from './WhatsAppMockup';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    emoji: '💬',
    title: 'Le escribes a Lupita',
    desc: 'Por WhatsApp, donde ya estás',
  },
  {
    emoji: '🤝',
    title: 'Le cuentas tu situación',
    desc: 'Ella te guía según lo que necesites',
  },
  {
    emoji: '✅',
    title: 'Te aprueba',
    desc: 'Rápido, sin vueltas',
  },
  {
    emoji: '💵',
    title: 'Tu lana llega',
    desc: 'SPEI en minutos',
  },
];

const ProblemSolutionSection = () => {
  const { ref: problemRef, isVisible: problemVisible } = useScrollAnimation();
  const { ref: solutionRef, isVisible: solutionVisible } = useScrollAnimation();
  const { ref: stepsRef, visibleItems: stepsVisible } = useStaggeredAnimation(4, 300);

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(0 0% 7%) 0%, hsl(0 0% 5%) 30%, hsl(145 15% 7%) 60%, hsl(0 0% 7%) 100%)',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[600px] h-[600px] rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, hsl(145, 63%, 29%), transparent)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 container max-w-4xl">
        {/* PROBLEMA */}
        <div
          ref={problemRef}
          className="text-center mb-20 md:mb-28 transition-all duration-700"
          style={{
            opacity: problemVisible ? 1 : 0,
            transform: problemVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-6 block">
            💡 El problema
          </span>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
            El diésel no espera 30 días<span className="text-accent">.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            Hiciste el flete, te firmaron el cumplido, pero tu pago llega en 30, 45 o hasta 60 días.
            Mientras tanto necesitas diésel, casetas y mandar gasto a la casa.
            El factoraje tradicional es lento y burocrático. Los préstamos gota a gota son peligrosos.
            Nadie te resuelve donde tú estás.
          </p>
        </div>

        {/* SOLUCIÓN */}
        <div
          ref={solutionRef}
          className="text-center mb-12 md:mb-16 transition-all duration-700"
          style={{
            opacity: solutionVisible ? 1 : 0,
            transform: solutionVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-6 block">
            ✨ La solución
          </span>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">
            Conoce a Lupita<span className="text-primary">.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-body">
            Tu comadre en LANNA. Le escribes, te resuelve, y te deposita en minutos.
          </p>
        </div>

        {/* 4 Steps */}
        <div ref={stepsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {steps.map((step, i) => (
            <div
              key={i}
              className="text-center p-4 md:p-6 rounded-xl bg-surface/30 border border-border/20 transition-all duration-500 hover:border-primary/30 hover:bg-surface/50"
              style={{
                opacity: stepsVisible[i] ? 1 : 0,
                transform: stepsVisible[i] ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="text-3xl mb-4">{step.emoji}</div>
              <p className="font-heading text-base md:text-lg text-foreground mb-1">{step.title}</p>
              <p className="text-sm text-muted-foreground font-body">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* WhatsApp Mockup */}
        <WhatsAppMockup />
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
