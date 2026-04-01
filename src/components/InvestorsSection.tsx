import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const protections = [
  'Seguro de crédito comercial que cubre impago',
  'El deudor real es la empresa grande, evaluada crediticiamente',
  'Trazabilidad fiscal completa (CFDI + Carta Porte)',
  'Operaciones pequeñas y diversificadas que distribuyen el riesgo',
  'Onboarding riguroso con estudio de crédito y compliance PLD/FT',
];

const InvestorsSection = () => {
  const header = useScrollAnimation();
  const content = useScrollAnimation(0.1);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div
          ref={header.ref}
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: header.isVisible ? 1 : 0,
            transform: header.isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
            Capital que trabaja tan duro como ellos
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            No es venture. No es especulación. Es capital trabajando sobre cuentas por cobrar reales.
          </p>
        </div>

        <div
          ref={content.ref}
          className="space-y-12 transition-all duration-700"
          style={{
            opacity: content.isVisible ? 1 : 0,
            transform: content.isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {/* The logic */}
          <div className="bg-card border border-border/50 rounded-xl p-8 md:p-10">
            <h3 className="font-heading text-xl md:text-2xl text-foreground mb-4">La lógica</h3>
            <p className="text-foreground/80 font-body text-base md:text-lg leading-relaxed">
              Cada flete completado genera una cuenta por cobrar confirmada — con factura CFDI y cumplido firmado.
              LANNA adelanta el pago al transportista y cobra a la empresa contratante en su ciclo normal.
              Es un flujo de caja real, respaldado, trazable y asegurado. Capital rotativo que genera retorno cada ciclo.
            </p>
          </div>

          {/* Protection */}
          <div className="bg-card border border-border/50 rounded-xl p-8 md:p-10">
            <h3 className="font-heading text-xl md:text-2xl text-foreground mb-6">Por qué el capital está protegido</h3>
            <div className="space-y-4">
              {protections.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <p className="text-foreground/80 font-body text-base md:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <a
              href="mailto:hola@lanna.mx"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading text-lg md:text-xl px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Hablemos
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-muted-foreground text-sm font-body mt-4">
              Los detalles de estructura, retorno y montos se comparten en privado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
