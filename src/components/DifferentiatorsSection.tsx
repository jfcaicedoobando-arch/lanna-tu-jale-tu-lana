import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const differentiators = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    ),
    title: 'WhatsApp + SPEI',
    desc: 'Donde ya estás, como ya cobras. Sin descargar apps, sin crear cuentas, sin portales web.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Dinero en minutos',
    desc: 'SPEI 24/7. Tu lana cae en 2-5 minutos, no en semanas.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        <path d="M14.05 2a9 9 0 018 7.94" />
        <path d="M14.05 6A5 5 0 0118 10" />
      </svg>
    ),
    title: 'Lupita te busca a ti',
    desc: 'Ella te escribe cuando tu flete está listo. No tienes que perseguir a nadie por tu pago.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    title: 'Registro por WhatsApp',
    desc: 'Mandas unas fotos (INE, RFC, una factura) y Lupita te guía paso a paso.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Buen historial = mejores condiciones',
    desc: 'LANNA premia al que cumple. Mejores tasas y mayor línea conforme jalas con nosotros.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Cada operación protegida',
    desc: 'Seguro de crédito comercial en cada flete. Tu lana no anda en el aire.',
  },
];

const DifferentiatorsSection = () => {
  const { ref, visibleItems } = useStaggeredAnimation(differentiators.length, 150);

  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="container max-w-5xl">
        <h2 className="font-heading text-3xl md:text-5xl text-foreground text-center mb-4">
          Pa' los que jalan<span className="text-accent">.</span>
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-16 max-w-xl mx-auto font-body">
          Lo que te damos vs. lo que existe
        </p>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {differentiators.map((d, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-surface border border-border/30 transition-all duration-500 hover:border-primary/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5 group"
              style={{
                opacity: visibleItems[i] ? 1 : 0,
                transform: visibleItems[i] ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {d.icon}
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">{d.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
