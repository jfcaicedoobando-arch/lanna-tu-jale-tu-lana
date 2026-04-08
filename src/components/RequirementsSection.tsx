import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const clientTypes = {
  individual: {
    label: 'Hombre camión',
    sublabel: 'Tienes tu propio troca',
    docs: [
      { title: 'INE por los dos lados', desc: 'Una foto clara, con buena luz. Ambos lados.' },
      { title: 'Título de tu troca', desc: 'Factura del vehículo o tarjeta de circulación a tu nombre.' },
      { title: 'RFC / Constancia fiscal', desc: 'La bajas gratis del SAT en 2 minutos desde tu celular.' },
      { title: 'Una factura de flete reciente', desc: 'De un viaje que ya hiciste, la que quieres adelantar.' },
      { title: 'Cuenta de banco (si tienes)', desc: 'Donde recibes tu SPEI. Si no tienes, lo vemos juntos.' },
    ],
    note: null,
  },
  company: {
    label: 'Empresa de transporte',
    sublabel: 'Tienes una flota (1-50 camiones)',
    docs: [
      { title: 'INE del representante legal', desc: 'Por los dos lados, del apoderado que firmará.' },
      { title: 'Acta constitutiva', desc: 'Con socios, objeto social y capital de la empresa.' },
      { title: 'Poder notarial del apoderado', desc: 'Con facultades para obligar a la empresa. Lo revisamos contigo.' },
      { title: 'RFC / Constancia de situación fiscal', desc: 'Actualizada, del SAT.' },
      { title: 'Facturas de fletes recientes', desc: 'Un par de operaciones recientes de la empresa.' },
      { title: 'Estados financieros', desc: 'Últimos 2 años si los tienes. Si eres empresa nueva, lo platicamos.' },
      { title: 'Cuenta de banco de la empresa', desc: 'CLABE para recibir los depósitos.' },
    ],
    note: 'El proceso para empresa toma un poco más — hay más documentos que validar. Lupita te guía paso a paso y te dice exactamente qué falta.',
  },
};

const DocIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14,2 14,8 20,8" />
  </svg>
);

const RequirementsSection = () => {
  const [activeClient, setActiveClient] = useState<'individual' | 'company'>('individual');

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: docsRef, isVisible: docsVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const client = clientTypes[activeClient];

  return (
    <section id="requisitos" className="relative py-24 md:py-32 px-6 overflow-hidden">
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
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-6 block">
            📄 Requisitos
          </span>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-4">
            ¿Qué necesitas para aplicar<span className="text-accent">?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-body">
            Todo por WhatsApp. Foto o PDF. Sin oficinas, sin filas.
          </p>
        </div>

        {/* Documents */}
        <div
          ref={docsRef}
          className="mb-20 transition-all duration-700"
          style={{
            opacity: docsVisible ? 1 : 0,
            transform: docsVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <div className="flex gap-3 mb-8">
            {([
              { key: 'individual' as const, label: 'Hombre camión', sub: 'Troca propia' },
              { key: 'company' as const, label: 'Empresa de transporte', sub: '1-50 camiones' },
            ]).map(ct => (
              <button
                key={ct.key}
                onClick={() => setActiveClient(ct.key)}
                className={`flex-1 p-4 rounded-xl border text-left transition-all duration-300 ${
                  activeClient === ct.key
                    ? ct.key === 'individual'
                      ? 'bg-primary/10 border-primary/40'
                      : 'bg-accent/10 border-accent/40'
                    : 'bg-surface/30 border-border/20 hover:border-border/50'
                }`}
              >
                <p className="font-heading text-base text-foreground">
                  {ct.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {ct.sub}
                </p>
              </button>
            ))}
          </div>

          <div className="bg-surface/40 border border-border/20 rounded-2xl p-6 md:p-8">
            <div className="space-y-4">
              {client.docs.map((doc, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                    <DocIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{doc.title}</p>
                    <p className="text-sm text-muted-foreground">{doc.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {client.note && (
              <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/20">
                <p className="text-sm text-muted-foreground">{client.note}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border/20">
              {['Todo por WhatsApp', 'Sin apps', 'Sin oficinas', 'Lupita te guía paso a paso'].map((tag, i) => (
                <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="text-center transition-all duration-700"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <p className="font-heading text-2xl md:text-4xl text-foreground mb-6">
            ¿Listo para jalar con nosotros?
          </p>
          <a
            href="https://wa.me/521234567890?text=Hola%20Lupita%2C%20quiero%20conocer%20LANNA"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
            Escribirle a Lupita
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Responde en minutos · Sin compromisos
          </p>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
