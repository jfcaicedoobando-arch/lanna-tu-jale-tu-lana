import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Roberto M.',
    route: 'Ruta Manzanillo – CDMX',
    quote: 'Antes esperaba 45 días. Ahora le mando mi factura a Lupita y en 5 minutos ya tengo mi lana. Así sí se puede seguir jalando.',
    trucks: '1 camión propio',
  },
  {
    name: 'Carlos G.',
    route: 'Ruta Monterrey – Laredo',
    quote: 'Me daba miedo, la neta. Pero mi compa lo usó primero y le fue bien. Ahora llevo 8 anticipos y cero problemas.',
    trucks: '2 camiones',
  },
  {
    name: 'Francisco T.',
    route: 'Ruta Veracruz – Guadalajara',
    quote: 'Lo mejor es que todo es por WhatsApp. No tengo que bajar ninguna app ni ir a ninguna oficina. Lupita me resuelve desde el celular.',
    trucks: '1 camión propio',
  },
];

const TestimonialsSection = () => {
  const { ref, visibleItems } = useStaggeredAnimation(testimonials.length, 200);

  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="container max-w-5xl">
        <h2 className="font-heading text-3xl md:text-5xl text-foreground text-center mb-4">
          Compas que ya jalan con LANNA<span className="text-accent">.</span>
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12 max-w-xl mx-auto font-body">
          Si tu compa lo usó y le funcionó, tú también.
        </p>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-surface border border-border/30 transition-all duration-500 flex flex-col"
              style={{
                opacity: visibleItems[i] ? 1 : 0,
                transform: visibleItems[i] ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {/* Quote */}
              <div className="flex-1 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="hsl(145, 63%, 29%)" className="mb-3 opacity-40">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                </svg>
                <p className="text-foreground font-body leading-relaxed text-sm md:text-base">
                  "{t.quote}"
                </p>
              </div>

              {/* Profile */}
              <div className="pt-4 border-t border-border/20">
                <p className="font-heading text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-primary font-body">{t.route}</p>
                <p className="text-xs text-muted-foreground font-body mt-0.5">{t.trucks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
