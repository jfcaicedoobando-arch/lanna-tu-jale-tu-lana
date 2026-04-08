import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const products = [
  {
    id: 'anticipo',
    situation: 'Ya tengo mi factura',
    title: 'Anticipo de Factura',
    who: 'Empresas de transporte y hombres camión',
    risk: 'Bajo — la empresa grande responde, no tú',
    rate: '3% - 5%',
    speed: 'SPEI en 2-5 minutos',
    color: 'primary' as const,
    example: {
      factura: '$50,000',
      comision: '– $2,500',
      comisionLabel: 'Comisión (5%)',
      recibes: '$47,500',
      nota: 'En vez de esperar 30-60 días, recibes $47,500 hoy.',
    },
  },
  {
    id: 'credito',
    situation: 'Voy a hacer el flete',
    title: 'Crédito Rotativo',
    who: 'Empresas pequeñas y hombres camión',
    risk: 'Mayor — tú respondes por el pago',
    rate: '5% - 8%',
    speed: 'Línea rotativa — usas, pagas, vuelves a usar',
    color: 'accent' as const,
    example: null,
  },
];

const ProductsSection = () => {
  const [active, setActive] = useState(0);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);

  const product = products[active];
  const isPrimary = product.color === 'primary';

  return (
    <section id="productos" className="relative py-24 md:py-32 px-6 overflow-hidden scroll-mt-[70px]">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(0 0% 7%) 0%, hsl(0 0% 9%) 50%, hsl(0 0% 7%) 100%)',
        }}
      />

      <div className="relative z-10 container max-w-4xl">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-6 block">
            📦 Tu situación
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
            ¿Cuándo necesitas la lana<span className="text-accent">?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-body">
            Según tu situación, tenemos la solución.
          </p>
        </div>

        {/* Situation selector — big buttons */}
        <div
          ref={contentRef}
          className="transition-all duration-700"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 ${
                  active === i
                    ? p.color === 'primary'
                      ? 'bg-primary/10 border-primary/50 ring-1 ring-primary/20'
                      : 'bg-accent/10 border-accent/50 ring-1 ring-accent/20'
                    : 'bg-surface/30 border-border/20 hover:border-border/50'
                }`}
              >
                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                  active === i
                    ? p.color === 'primary' ? 'text-primary' : 'text-accent'
                    : 'text-muted-foreground'
                }`}>
                  Tu situación
                </p>
                <p className="font-heading text-lg md:text-xl text-foreground leading-snug">
                  "{p.situation}"
                </p>
              </button>
            ))}
          </div>

          {/* Product detail card */}
          <div className="bg-surface/40 border border-border/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                isPrimary ? 'bg-primary/15 text-primary' : 'bg-accent/15 text-accent'
              }`}>
                {product.title}
              </span>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Para quién</p>
                <p className="text-sm text-foreground font-medium">{product.who}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Riesgo para ti</p>
                <p className="text-sm text-foreground font-medium">{product.risk}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Comisión</p>
                <p className="text-sm text-foreground font-medium">{product.rate}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Velocidad</p>
                <p className="text-sm text-foreground font-medium">{product.speed}</p>
              </div>
            </div>

            {/* Anticipo example (absorbed from NumbersSection) */}
            {product.example && (
              <div className="border-t border-border/20 pt-6">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4 font-semibold">
                  Ejemplo real
                </p>
                <div className="bg-background/50 rounded-xl p-5 max-w-sm">
                  <div className="space-y-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-muted-foreground font-body text-sm">Tu factura</span>
                      <span className="font-heading text-xl text-foreground">{product.example.factura}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-muted-foreground font-body text-sm">{product.example.comisionLabel}</span>
                      <span className="font-heading text-base text-accent">{product.example.comision}</span>
                    </div>
                    <div className="h-px bg-border/30" />
                    <div className="flex justify-between items-baseline">
                      <span className="text-foreground font-body font-semibold text-sm">Recibes hoy</span>
                      <span className="font-heading text-2xl text-primary">{product.example.recibes}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground/60 mt-3">{product.example.nota}</p>
                </div>
              </div>
            )}

            {/* Crédito callout */}
            {product.id === 'credito' && (
              <div className="border-t border-border/20 pt-6">
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                  <p className="text-sm text-accent font-semibold mb-1">
                    Este es el diferenciador real
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Cuando nadie te presta — ni familia, ni banco, ni gota a gota — LANNA sí puede.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
