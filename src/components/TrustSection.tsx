import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const faqs = [
  {
    q: '¿Y si la empresa no me paga?',
    a: 'En Anticipo de Factura, la empresa es quien responde — tú ya tienes tu dinero. LANNA valida la empresa y la factura antes de aprobarte. En Crédito Rotativo, tú respondes por el pago.',
  },
  {
    q: '¿Cuánto cobran de comisión?',
    a: 'En Anticipo de Factura, entre 3% y 5% del monto. En Crédito Rotativo, entre 5% y 8%. Sin letras chiquitas ni cargos ocultos.',
  },
  {
    q: '¿Reportan a Buró de Crédito?',
    a: 'Sí. Reportamos buen comportamiento, lo cual te ayuda a construir historial crediticio formal. Si ya tienes buen historial, te damos mejores condiciones.',
  },
  {
    q: '¿En cuánto tiempo me depositan?',
    a: 'Si la empresa ya está validada, en 2-5 minutos vía SPEI. La primera vez tarda un poco más porque validamos la empresa y los documentos.',
  },
  {
    q: '¿Necesito bajar una app?',
    a: 'No. Todo es por WhatsApp. Lupita te guía paso a paso desde tu celular.',
  },
];

const TrustSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(0 0% 7%) 0%, hsl(0 0% 9%) 50%, hsl(0 0% 7%) 100%)',
        }}
      />

      <div
        ref={ref}
        className="relative z-10 container max-w-2xl transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        }}
      >
        <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-6 block text-center">
          🤝 Preguntas frecuentes
        </span>
        <h2 className="font-heading text-3xl md:text-5xl text-foreground text-center mb-4">
          Lo que nos preguntan siempre<span className="text-accent">.</span>
        </h2>
        <p className="text-muted-foreground text-center text-lg mb-12 font-body">
          Respuestas claras, sin letras chiquitas.
        </p>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-surface/40 border border-border/20 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
              >
                <span className="font-heading text-sm md:text-base text-foreground">
                  {faq.q}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? '200px' : '0',
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p className="px-5 pb-4 text-sm text-muted-foreground font-body leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
