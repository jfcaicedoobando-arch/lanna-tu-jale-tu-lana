import LannaLogo from "./LannaLogo";

const FooterSection = () => {
  return (
    <footer className="bg-highway-dark py-12 sm:py-16 px-4 border-t border-border/30">
      <div className="max-w-5xl mx-auto text-center">
        <LannaLogo size="md" className="mx-auto mb-4 text-primary" />
        <p className="font-highway text-lg text-foreground/60 mb-8">
          Tu jale, tu lana.
        </p>

        <div className="flex justify-center gap-6 mb-10">
          {["LinkedIn", "Twitter", "Instagram"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
            >
              {social}
            </a>
          ))}
        </div>

        <div className="border-t border-border/20 pt-6">
          <p className="text-xs text-muted-foreground/60 font-body leading-relaxed max-w-lg mx-auto">
            LANNA SAPI de CV · Documento informativo. No constituye oferta pública de valores.
          </p>
          <p className="text-xs text-muted-foreground/40 font-body mt-2">
            contacto@lanna.mx
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
