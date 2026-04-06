import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const pillars = [
  {
    title: 'Seguro de crédito comercial',
    desc: 'Cada operación tiene respaldo de una aseguradora. Si algo sale mal, el capital está cubierto.',
  },
  {
    title: 'El deudor es la empresa grande',
    desc: 'Quien debe no es el transportista — es la empresa contratante, evaluada crediticiamente antes de operar.',
  },
  {
    title: 'Onboarding riguroso',
    desc: 'Estudio de crédito, compliance PLD/FT, verificación fiscal. No entra cualquiera.',
  },
  {
    title: 'Trazabilidad total',
    desc: 'CFDI + Carta Porte en cada operación. Todo documentado, todo auditable.',
  },
  {
    title: 'Operaciones diversificadas',
    desc: 'Muchas operaciones pequeñas en lugar de pocas grandes. El riesgo no se concentra.',
  },
  {
    title: 'Capital rotativo',
    desc: 'El capital no se amarra — genera retorno cada ciclo y se reinvierte automáticamente.',
  },
];

const InvestorsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: pillarsRef, visibleItems } = useStaggeredAnimation(pillars.length, 120);
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(0 0% 7%) 0%, hsl(0 0% 6%) 50%, hsl(0 0% 7%) 100%)',
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
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">
            Capital que trabaja tan duro como ellos<span className="text-accent">.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
            Cada flete completado genera una cuenta por cobrar confirmada con factura CFDI y cumplido firmado.
            LANNA adelanta el pago al transportista y cobra a la empresa contratante en su ciclo normal.
            Es un flujo de caja real, respaldado y asegurado. No es venture ni especulación — es capital trabajando sobre cuentas por cobrar reales, con flujo de caja desde la primera operación.
          </p>
        </div>

        {/* Pilares de protección */}
        <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-16 md:mb-20">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-surface/50 border border-border/20 transition-all duration-500 hover:border-accent/20"
              style={{
                opacity: visibleItems[i] ? 1 : 0,
                transform: visibleItems[i] ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(36, 69%, 50%)" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="font-heading text-base text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Tecnología */}
        <div
          ref={techRef}
          className="text-center mb-12 transition-all duration-700"
          style={{
            opacity: techVisible ? 1 : 0,
            transform: techVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4 font-body">Tecnología</p>
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto font-body leading-relaxed">
            Sistema de agentes IA con orquestador, análisis de crédito automatizado, reconciliación inteligente de pagos — todo construido sobre WhatsApp Business API + SPEI.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:inversionistas@lanna.mx"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20"
          >
            Hablemos
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
