import LannaLogo from './LannaLogo';

const WHATSAPP_URL = 'https://wa.me/521234567890?text=Hola%20Lupita%2C%20quiero%20conocer%20LANNA';

const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Final CTA */}
      <div className="py-20 md:py-28 px-6 text-center">
        <p className="font-heading text-3xl md:text-5xl text-foreground mb-4">
          ¿Listo para jalar con nosotros<span className="text-accent">?</span>
        </p>
        <p className="text-muted-foreground text-lg mb-8 font-body">
          ¿Tienes dudas? Pregúntale a Lupita.
        </p>
        <a
          href={WHATSAPP_URL}
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
        <p className="text-sm text-muted-foreground/50 mt-4 font-body">
          Responde en minutos · Sin compromisos
        </p>
      </div>

      {/* Footer */}
      <div className="py-12 px-6 border-t border-border/20">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
            <div className="text-center md:text-left">
              <LannaLogo size="small" className="text-foreground mb-3" />
              <p className="text-muted-foreground text-sm font-body">Tu respaldo en la carretera.</p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="flex gap-4">
                <a href="https://wa.me/521234567890" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                </a>
                <a href="mailto:hola@lanna.mx" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/10 text-center">
            <p className="text-xs text-muted-foreground/60 font-body">
              LANNA SAPI de CV · Documento informativo. No constituye oferta pública de valores.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
