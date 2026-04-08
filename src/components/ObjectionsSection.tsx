import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ObjectionsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-20 md:py-28 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(0 0% 7%) 0%, hsl(0 0% 5%) 50%, hsl(0 0% 7%) 100%)',
        }}
      />

      <div
        ref={ref}
        className="relative z-10 container max-w-3xl transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        <h2 className="font-heading text-3xl md:text-5xl text-foreground text-center mb-4">
          "¿Y si no me pagan?"
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12 max-w-xl mx-auto font-body">
          La pregunta más importante. Te la respondemos claro.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Anticipo */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(145, 63%, 29%)" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Anticipo de Factura</p>
            <p className="font-heading text-lg text-foreground mb-3">
              La empresa responde, no tú.
            </p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Quien debe es la empresa grande — Walmart, Bimbo, Materiales del Norte. LANNA valida la empresa y la factura antes de aprobarte. Si la empresa no paga, el problema es de LANNA, no tuyo.
            </p>
          </div>

          {/* Crédito */}
          <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(36, 69%, 50%)" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Crédito Rotativo</p>
            <p className="font-heading text-lg text-foreground mb-3">
              Tú respondes — por eso la tasa es mayor.
            </p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              En este producto tú eres el deudor. La comisión es más alta porque el riesgo es distinto. Pero evaluamos antes de prestarte y empezamos con montos pequeños.
            </p>
          </div>
        </div>

        <div className="mt-8 p-5 rounded-xl bg-surface/40 border border-border/20 text-center">
          <p className="text-foreground font-body text-sm md:text-base">
            <span className="text-primary font-semibold">LANNA valida todo antes de aprobar.</span> No prestamos a ciegas.
            Revisamos la empresa, la factura y tu historial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
