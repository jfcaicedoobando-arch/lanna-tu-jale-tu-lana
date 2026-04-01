import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const items = [
  {
    icon: '📱',
    title: 'WhatsApp + SPEI',
    desc: 'Donde ya estás, como ya cobras. Sin descargar nada.',
  },
  {
    icon: '⚡',
    title: 'Minutos, no semanas',
    desc: 'Tu dinero llega en 2-5 minutos. No en 21, 45 o 60 días.',
  },
  {
    icon: '🚫',
    title: 'Sin apps, sin papeleo, sin bancos',
    desc: 'Nada que instalar, nada que firmar, nadie a quién rogarle.',
  },
  {
    icon: '🛡️',
    title: 'Cada operación protegida',
    desc: 'Tu lana está respaldada. Punto.',
  },
  {
    icon: '🔔',
    title: 'Valentina te busca a ti',
    desc: 'No tienes que perseguir a nadie por tu pago. Ella te avisa.',
  },
];

const DifferentiatorsSection = () => {
  const anim = useScrollAnimation(0.1);

  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6" ref={anim.ref}>
        <h2
          className="font-heading text-3xl md:text-5xl text-foreground text-center mb-16 transition-all duration-700"
          style={{
            opacity: anim.isVisible ? 1 : 0,
            transform: anim.isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Pa' los que jalan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border/50 rounded-xl p-6 md:p-8 transition-all duration-700 hover:border-primary/30 hover:bg-card/80"
              style={{
                opacity: anim.isVisible ? 1 : 0,
                transform: anim.isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${200 + i * 100}ms`,
              }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-heading text-lg md:text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
