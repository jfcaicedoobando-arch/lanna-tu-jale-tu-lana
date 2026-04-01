import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const viajePhrases = [
  "Saliste a las 4 de la mañana.",
  "14 horas de carretera. Solo.",
  "Casetas. Diesel. Desvelos.",
  "Entregaste a tiempo. Como siempre.",
  "Te firmaron el cumplido.",
];

const esperaItems = [
  "Hay que tanquear para el siguiente viaje",
  "Hay que pagar la caseta que viene",
  "Hay que mandar gasto a la casa",
  "Hay que comer",
];

const ProblemSection = () => {
  const viaje = useStaggeredAnimation(viajePhrases.length, 400);
  const espera = useScrollAnimation(0.2);
  const alternativas = useScrollAnimation(0.2);
  const quiebre = useScrollAnimation(0.3);

  return (
    <section id="problema" className="relative">
      {/* BLOQUE 1 — EL VIAJE */}
      <div className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl" ref={viaje.ref}>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-16 text-center">
            Hiciste el jale.<br />
            <span className="text-accent">¿Y tu lana?</span>
          </h2>

          <div className="space-y-6 md:space-y-8">
            {viajePhrases.map((phrase, i) => (
              <p
                key={i}
                className="font-heading text-2xl md:text-4xl text-foreground/90 transition-all duration-700"
                style={{
                  opacity: viaje.visibleItems[i] ? 1 : 0,
                  transform: viaje.visibleItems[i] ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                {phrase}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* BLOQUE 2 — LA ESPERA */}
      <div className="bg-[hsl(0,0%,3%)] py-20 md:py-28" ref={espera.ref}>
        <div className="container mx-auto px-6 max-w-3xl">
          <div
            className="transition-all duration-1000"
            style={{
              opacity: espera.isVisible ? 1 : 0,
              transform: espera.isVisible ? 'translateY(0)' : 'translateY(40px)',
            }}
          >
            <p className="font-heading text-3xl md:text-5xl text-foreground/70 mb-4">
              Y ahora...
            </p>
            <p className="font-heading text-4xl md:text-6xl text-foreground mb-12">
              a esperar.
            </p>

            <div className="flex gap-3 md:gap-4 mb-12 font-heading text-xl md:text-3xl text-accent">
              <span>21 días.</span>
              <span>45 días.</span>
              <span className="text-destructive">A veces más de 60.</span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 font-body">
              Mientras tanto:
            </p>

            <div className="space-y-4 pl-2 border-l-2 border-accent/30">
              {esperaItems.map((item, i) => (
                <p
                  key={i}
                  className="text-lg md:text-2xl text-foreground/80 font-body pl-4"
                  style={{
                    opacity: espera.isVisible ? 1 : 0,
                    transform: espera.isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.6s ease-out ${0.8 + i * 0.2}s`,
                  }}
                >
                  — {item}
                </p>
              ))}
            </div>

            <p className="font-heading text-2xl md:text-4xl text-destructive/80 mt-12">
              Pero tu dinero no llega.
            </p>
          </div>
        </div>
      </div>

      {/* BLOQUE 3 — LAS "ALTERNATIVAS" */}
      <div className="bg-background py-20 md:py-28" ref={alternativas.ref}>
        <div className="container mx-auto px-6 max-w-3xl">
          <div
            className="space-y-8 transition-all duration-1000"
            style={{
              opacity: alternativas.isVisible ? 1 : 0,
              transform: alternativas.isVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            <p className="font-heading text-2xl md:text-4xl text-foreground">
              ¿Y qué opciones tienes?
            </p>

            <div className="space-y-6 text-lg md:text-xl text-foreground/70 font-body leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">El factoraje tradicional:</span>{' '}
                lento, burocrático, te pide papeles que no tienes y te trata como número.
              </p>
              <p>
                <span className="text-foreground font-semibold">Los préstamos gota a gota:</span>{' '}
                intereses abusivos, gente peligrosa.
              </p>
              <p className="text-foreground/50">
                O simplemente... aguantar.
              </p>
            </div>

            <p className="text-lg md:text-2xl text-muted-foreground font-body pt-4">
              Nadie te resuelve. Nadie te habla en tu idioma.
              <br />
              Nadie te busca por donde tú estás.
            </p>
          </div>
        </div>
      </div>

      {/* BLOQUE 4 — EL QUIEBRE */}
      <div className="py-28 md:py-40 bg-background" ref={quiebre.ref}>
        <div className="container mx-auto px-6 text-center">
          <p
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-accent transition-all duration-1000"
            style={{
              opacity: quiebre.isVisible ? 1 : 0,
              transform: quiebre.isVisible ? 'scale(1)' : 'scale(0.8)',
            }}
          >
            Hasta ahora.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
