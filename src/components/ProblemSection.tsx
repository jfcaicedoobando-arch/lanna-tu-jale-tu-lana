import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FadeBlock = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  return (
    <div
      ref={ref}
      className="scroll-fade-in"
      style={{
        ...(isVisible ? { opacity: 1, transform: "translateY(0)" } : {}),
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const ProblemSection = () => {
  return (
    <section id="problema" className="relative">
      {/* BLOQUE 1 — EL VIAJE */}
      <div className="bg-highway-dark py-20 sm:py-28 md:py-36 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeBlock>
            <h2 className="font-highway text-3xl sm:text-4xl md:text-5xl text-foreground mb-16">
              Hiciste el jale. ¿Y tu lana?
            </h2>
          </FadeBlock>

          <div className="space-y-5">
            {[
              "Saliste a las 4 de la mañana.",
              "14 horas de carretera. Solo.",
              "Casetas. Diesel. Desvelos.",
              "Entregaste a tiempo. Como siempre.",
              "Te firmaron el cumplido.",
            ].map((line, i) => (
              <FadeBlock key={i} delay={i * 0.18}>
                <p className="font-highway text-2xl sm:text-3xl md:text-4xl text-foreground/90 leading-tight">
                  {line}
                </p>
              </FadeBlock>
            ))}
          </div>
        </div>
      </div>

      {/* BLOQUE 2 — LA ESPERA */}
      <div className="bg-gradient-to-b from-highway-dark to-background py-20 sm:py-28 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeBlock>
            <p className="font-highway text-3xl sm:text-4xl md:text-5xl text-highway-amber mb-8">
              Y ahora... a esperar.
            </p>
          </FadeBlock>
          
          <FadeBlock delay={0.2}>
            <p className="font-highway text-2xl sm:text-3xl text-foreground/70 mb-12">
              21 días. 45 días. A veces más de 60.
            </p>
          </FadeBlock>
          
          <FadeBlock delay={0.35}>
            <p className="text-xl text-muted-foreground mb-6 font-body">Mientras tanto:</p>
          </FadeBlock>
          
          <div className="space-y-3 mb-12">
            {[
              "Hay que tanquear para el siguiente viaje",
              "Hay que pagar la caseta que viene",
              "Hay que mandar gasto a la casa",
              "Hay que comer",
            ].map((line, i) => (
              <FadeBlock key={i} delay={0.45 + i * 0.12}>
                <p className="text-lg sm:text-xl text-foreground/60 font-body pl-4 border-l-2 border-highway-amber/30">
                  {line}
                </p>
              </FadeBlock>
            ))}
          </div>
          
          <FadeBlock delay={0.9}>
            <p className="font-highway text-2xl sm:text-3xl text-foreground/50">
              Pero tu dinero no llega.
            </p>
          </FadeBlock>
        </div>
      </div>

      {/* BLOQUE 3 — LAS ALTERNATIVAS */}
      <div className="bg-background py-20 sm:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeBlock>
            <p className="font-highway text-2xl sm:text-3xl text-foreground/80 mb-10">
              ¿Y qué opciones tienes?
            </p>
          </FadeBlock>

          <div className="space-y-8">
            <FadeBlock delay={0.15}>
              <p className="text-lg sm:text-xl text-muted-foreground font-body leading-relaxed">
                <span className="text-foreground/70 font-semibold">El factoraje tradicional:</span> lento, burocrático, te pide papeles que no tienes y te trata como número.
              </p>
            </FadeBlock>
            <FadeBlock delay={0.3}>
              <p className="text-lg sm:text-xl text-muted-foreground font-body leading-relaxed">
                <span className="text-foreground/70 font-semibold">Los préstamos gota a gota:</span> intereses abusivos, gente peligrosa.
              </p>
            </FadeBlock>
            <FadeBlock delay={0.45}>
              <p className="text-lg sm:text-xl text-muted-foreground font-body leading-relaxed">
                O simplemente... <span className="text-foreground/70 font-semibold">aguantar.</span>
              </p>
            </FadeBlock>
            <FadeBlock delay={0.6}>
              <p className="text-lg sm:text-xl text-muted-foreground font-body leading-relaxed">
                Nadie te resuelve. Nadie te habla en tu idioma. Nadie te busca por donde tú estás.
              </p>
            </FadeBlock>
          </div>
        </div>
      </div>

      {/* BLOQUE 4 — EL QUIEBRE */}
      <div className="bg-background py-24 sm:py-32 md:py-40 px-4 flex items-center justify-center">
        <FadeBlock>
          <p className="font-highway text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-highway-amber text-center">
            Hasta ahora.
          </p>
        </FadeBlock>
      </div>
    </section>
  );
};

export default ProblemSection;
