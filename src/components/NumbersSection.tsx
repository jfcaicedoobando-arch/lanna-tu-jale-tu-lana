import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const NumbersSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 md:py-28 px-6 bg-background">
      <div
        ref={ref}
        className="container max-w-3xl transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        <h2 className="font-heading text-3xl md:text-5xl text-foreground text-center mb-4">
          En pesos, no en porcentajes<span className="text-accent">.</span>
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12 max-w-xl mx-auto font-body">
          Así se ve un anticipo de factura real.
        </p>

        {/* Example card */}
        <div className="bg-surface/60 border border-border/30 rounded-2xl p-6 md:p-10 max-w-md mx-auto">
          <div className="space-y-5">
            <div className="flex justify-between items-baseline">
              <span className="text-muted-foreground font-body">Tu factura</span>
              <span className="font-heading text-2xl md:text-3xl text-foreground">$50,000</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-muted-foreground font-body">Comisión (5%)</span>
              <span className="font-heading text-lg text-accent">– $2,500</span>
            </div>
            <div className="h-px bg-border/30" />
            <div className="flex justify-between items-baseline">
              <span className="text-foreground font-body font-semibold">Recibes hoy</span>
              <span className="font-heading text-3xl md:text-4xl text-primary">$47,500</span>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-border/20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(145, 63%, 29%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <p className="text-foreground font-semibold text-sm">En tu cuenta en 5 minutos</p>
              <p className="text-muted-foreground text-xs">Depósito SPEI 24/7</p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground/60 mt-6 font-body">
          En vez de esperar 30-60 días por $50,000, recibes $47,500 hoy.
        </p>
      </div>
    </section>
  );
};

export default NumbersSection;
