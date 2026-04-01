import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import WhatsAppMockup from './WhatsAppMockup';

const steps = [
  { icon: '✅', title: 'Terminas tu flete', desc: 'Factura y cumplido listos' },
  { icon: '💬', title: 'Valentina te escribe', desc: 'Por WhatsApp, sin que tú hagas nada' },
  { icon: '👍', title: 'Dices SÍ', desc: 'Un mensaje. Eso es todo.' },
  { icon: '💸', title: 'Tu lana llega', desc: 'En minutos, por SPEI' },
];

const SolutionSection = () => {
  const header = useScrollAnimation();
  const stepsAnim = useScrollAnimation(0.1);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Lighter gradient background for contrast/relief */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(147,63%,29%,0.08)] via-background to-background" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div
          ref={header.ref}
          className="text-center mb-16 md:mb-24 transition-all duration-1000"
          style={{
            opacity: header.isVisible ? 1 : 0,
            transform: header.isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Conoce a <span className="text-primary">Valentina</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 font-body max-w-xl mx-auto">
            Tu comadre en LANNA. Te escribe cuando tu jale está listo y te deposita en minutos.
          </p>
        </div>

        {/* Two column layout on desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Steps */}
          <div
            ref={stepsAnim.ref}
            className="flex-1 w-full max-w-md"
          >
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 transition-all duration-700"
                  style={{
                    opacity: stepsAnim.isVisible ? 1 : 0,
                    transform: stepsAnim.isVisible ? 'translateX(0)' : 'translateX(-30px)',
                    transitionDelay: `${i * 200}ms`,
                  }}
                >
                  <div className="text-3xl md:text-4xl flex-shrink-0 mt-1">{step.icon}</div>
                  <div>
                    <p className="font-heading text-xl md:text-2xl text-foreground">{step.title}</p>
                    <p className="text-muted-foreground font-body">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Mockup */}
          <div className="flex-1 w-full max-w-sm">
            <WhatsAppMockup />
          </div>
        </div>

        {/* Closing statement */}
        <p className="text-center mt-16 md:mt-24 text-lg md:text-2xl text-foreground/70 font-body max-w-2xl mx-auto leading-relaxed">
          Así. <span className="text-foreground">Sin apps.</span>{' '}
          <span className="text-foreground">Sin papeleo.</span>{' '}
          <span className="text-foreground">Sin ir al banco.</span>{' '}
          <span className="text-accent font-semibold">Sin rogarle a nadie.</span>
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
