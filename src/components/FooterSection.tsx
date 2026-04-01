import LannaLogo from './LannaLogo';

const FooterSection = () => {
  return (
    <footer className="bg-[hsl(0,0%,3%)] border-t border-border/30 py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <LannaLogo size="md" />
            <p className="text-muted-foreground font-body text-sm">Tu jale, tu lana.</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-6">
              <a
                href="https://wa.me/521234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
              >
                WhatsApp
              </a>
              <a
                href="mailto:hola@lanna.mx"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
              >
                hola@lanna.mx
              </a>
            </div>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors text-xs font-body"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/20 text-center">
          <p className="text-muted-foreground/60 text-xs font-body">
            LANNA SAPI de CV · Documento informativo. No constituye oferta pública de valores.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
