import WhatsAppMockup from './WhatsAppMockup';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    title: 'Terminas tu flete',
    desc: 'Factura y cumplido firmado',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    ),
    title: 'Valentina te escribe',
    desc: 'Por WhatsApp, donde ya estás',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
    title: 'Dices SÍ',
    desc: 'Un solo mensaje',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Tu lana llega',
    desc: 'SPEI en 2-5 minutos',
  },
];

const SolutionSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: stepsRef, visibleItems: stepsVisible } = useStaggeredAnimation(4, 300);
  const { ref: closerRef, isVisible: closerVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Background with green tint — relief feeling */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(0 0% 7%) 0%, hsl(145 20% 8%) 30%, hsl(145 15% 9%) 70%, hsl(0 0% 7%) 100%)',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, hsl(145, 63%, 29%), transparent)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 container max-w-5xl">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-16 md:mb-20 transition-all duration-700"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">
            Conoce a Valentina<span className="text-primary">.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-body">
            Tu comadre en LANNA. Te escribe cuando tu jale está listo y te deposita en minutos.
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
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                {step.icon}
              </div>
              <p className="font-heading text-base md:text-lg text-foreground mb-1">{step.title}</p>
              <p className="text-sm text-muted-foreground font-body">{step.desc}</p>

              {/* Connector arrow (not on last) */}
              {i < 3 && (
                <div className="hidden md:block absolute -right-3 top-1/2 text-primary/40">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp Mockup */}
        <div className="mb-16 md:mb-20">
          <WhatsAppMockup />
        </div>

        {/* Closer */}
        <div
          ref={closerRef}
          className="text-center transition-all duration-700"
          style={{
            opacity: closerVisible ? 1 : 0,
            transform: closerVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <p className="font-heading text-xl md:text-3xl text-foreground leading-relaxed">
            Así. Sin apps. Sin papeleo.
            <br />
            Sin ir al banco.{' '}
            <span className="text-primary">Sin rogarle a nadie.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
