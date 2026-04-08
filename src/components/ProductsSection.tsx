import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const products = [
  {
    id: 'anticipo',
    situation: 'Ya hice el flete y tengo mi factura',
    title: 'Anticipo de Factura',
    who: 'Empresas de transporte y hombres camión',
    risk: 'Bajo — la empresa grande responde, no tú',
    rate: '3% - 5%',
    speed: 'SPEI en 2-5 minutos',
    color: 'primary',
    flow: [
      'Terminas el flete — tienes factura y cumplido',
      'Le mandas la factura a Lupita por WhatsApp',
      'LANNA confirma con la empresa que te deben',
      'Te depositan vía SPEI en minutos',
      'La empresa paga a LANNA — tú ya tienes tu dinero',
    ],
  },
  {
    id: 'credito',
    situation: 'Tengo un flete pero no tengo para salir',
    title: 'Crédito Rotativo',
    who: 'Empresas pequeñas y hombres camión',
    risk: 'Mayor — tú respondes por el pago',
    rate: '5% - 8%',
    speed: 'Línea rotativa — usas, pagas, vuelves a usar',
    color: 'accent',
    flow: [
      'Tienes un flete pero no tienes para diésel y casetas',
      'Le escribes a Lupita y le cuentas el flete',
      'LANNA evalúa y te aprueba una línea',
      'Te depositan para que puedas salir a carretera',
      'Cuando te paguen el flete, liquidas y vuelves a usar',
    ],
  },
];

const ProductsSection = () => {
  const [active, setActive] = useState(0);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1);

  const product = products[active];
  const isPrimary = product.color === 'primary';

  return (
    <section id="productos" className="relative py-24 md:py-32 px-6 overflow-hidden">
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
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
            ¿Cuándo necesitas la lana<span className="text-accent">?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-body">
            Según tu situación, tenemos la solución.
          </p>
        </div>

        {/* Situation selector */}
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
                className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
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
                <p className="font-heading text-base md:text-lg text-foreground leading-snug">
                  "{p.situation}"
                </p>
              </button>
            ))}
          </div>

          {/* Product detail */}
          <div className="bg-surface/40 border border-border/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                isPrimary ? 'bg-primary/15 text-primary' : 'bg-accent/15 text-accent'
              }`}>
                {product.title}
              </span>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-border/20">
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

            {/* Flow */}
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4 font-semibold">
              Cómo funciona
            </p>
            <div className="space-y-3 mb-6">
              {product.flow.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full text-sm font-bold flex items-center justify-center mt-0.5 ${
                    isPrimary ? 'bg-primary/15 text-primary' : 'bg-accent/15 text-accent'
                  }`}>
                    {i + 1}
                  </span>
                  <p className="text-foreground/90 font-body text-sm md:text-base">{step}</p>
                </div>
              ))}
            </div>

            {/* Differentiator callout */}
            {product.id === 'credito' && (
              <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                <p className="text-sm text-accent font-semibold mb-1">
                  Este es el diferenciador real
                </p>
                <p className="text-sm text-muted-foreground">
                  Cuando nadie te presta — ni familia, ni banco, ni gota a gota — LANNA sí puede.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
