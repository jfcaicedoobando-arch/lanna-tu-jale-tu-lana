import { useStaggeredAnimation, useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProblemSection = () => {
  const journeyLines = [
    'Saliste a las 4 de la mañana.',
    '14 horas de carretera. Solo.',
    'Casetas. Diesel. Desvelos.',
    'Entregaste a tiempo. Como siempre.',
    'Te firmaron el cumplido.',
  ];

  const { ref: journeyRef, visibleItems: journeyVisible } = useStaggeredAnimation(journeyLines.length, 500);
  const { ref: waitRef, isVisible: waitVisible } = useScrollAnimation();
  const { ref: altRef, isVisible: altVisible } = useScrollAnimation();
  const { ref: breakRef, isVisible: breakVisible } = useScrollAnimation(0.5);

  return (
    <section id="problema" className="relative">
      {/* EL VIAJE */}
      <div className="py-24 md:py-32 px-6">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-16 text-center">
            Hiciste el jale<span className="text-accent">.</span>{' '}
            <span className="text-muted-foreground">¿Y tu lana?</span>
          </h2>

          <div ref={journeyRef} className="space-y-6 md:space-y-8">
            {journeyLines.map((line, i) => (
              <p
                key={i}
                className="font-heading text-2xl md:text-4xl lg:text-5xl text-foreground transition-all duration-700"
                style={{
                  opacity: journeyVisible[i] ? 1 : 0,
                  transform: journeyVisible[i] ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* LA ESPERA */}
      <div
        ref={waitRef}
        className="py-20 md:py-28 px-6 transition-all duration-1000"
        style={{
          background: 'linear-gradient(180deg, hsl(0 0% 5%) 0%, hsl(0 0% 4%) 100%)',
        }}
      >
        <div
          className="container max-w-3xl transition-all duration-1000"
          style={{
            opacity: waitVisible ? 1 : 0,
            transform: waitVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <p className="font-heading text-3xl md:text-5xl text-foreground mb-4">
            Y ahora<span className="text-accent">...</span> a esperar.
          </p>
          <p className="font-heading text-2xl md:text-4xl text-muted-foreground mb-12">
            21 días. 45 días. A veces más de 60.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-6">Mientras tanto:</p>

          <div className="space-y-4 mb-12 pl-4 border-l-2 border-accent/30">
            {[
              'Hay que tanquear para el siguiente viaje',
              'Hay que pagar la caseta que viene',
              'Hay que mandar gasto a la casa',
              'Hay que comer',
            ].map((item, i) => (
              <p key={i} className="text-lg md:text-xl text-foreground/80 font-body">
                — {item}
              </p>
            ))}
          </div>

          <p className="font-heading text-2xl md:text-3xl text-accent">
            Pero tu dinero no llega.
          </p>
        </div>
      </div>

      {/* LAS ALTERNATIVAS */}
      <div
        ref={altRef}
        className="py-20 md:py-28 px-6"
        style={{ background: 'hsl(0 0% 5%)' }}
      >
        <div
          className="container max-w-3xl transition-all duration-1000"
          style={{
            opacity: altVisible ? 1 : 0,
            transform: altVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <p className="font-heading text-2xl md:text-4xl text-foreground mb-10">
            ¿Y qué opciones tienes?
          </p>

          <div className="space-y-8 mb-12">
            <div className="p-6 rounded-xl bg-surface/50 border border-border/30">
              <p className="text-lg md:text-xl text-foreground/90 font-body">
                <span className="text-accent font-semibold">El factoraje tradicional:</span>{' '}
                lento, burocrático, te pide papeles que no tienes y te trata como número.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface/50 border border-border/30">
              <p className="text-lg md:text-xl text-foreground/90 font-body">
                <span className="text-accent font-semibold">Los préstamos gota a gota:</span>{' '}
                intereses abusivos, gente peligrosa.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface/50 border border-border/30">
              <p className="text-lg md:text-xl text-foreground/90 font-body">
                O simplemente... <span className="text-muted-foreground">aguantar.</span>
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
            Nadie te resuelve. Nadie te habla en tu idioma.
            <br />
            Nadie te busca por donde tú estás.
          </p>
        </div>
      </div>

      {/* EL QUIEBRE */}
      <div
        ref={breakRef}
        className="py-28 md:py-40 px-6 flex items-center justify-center"
        style={{
          background: 'linear-gradient(180deg, hsl(0 0% 5%) 0%, hsl(0 0% 7%) 100%)',
        }}
      >
        <p
          className="font-heading text-4xl md:text-6xl lg:text-7xl text-accent text-center transition-all duration-1000"
          style={{
            opacity: breakVisible ? 1 : 0,
            transform: breakVisible ? 'scale(1)' : 'scale(0.9)',
          }}
        >
          Hasta ahora.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
